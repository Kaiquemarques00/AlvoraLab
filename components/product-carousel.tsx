"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowIcon } from "@/components/arrow-icon";
import type { Product } from "@/lib/products";

type DragState = {
  active: boolean;
  pointerId: number;
  startX: number;
  startOffset: number;
  moved: boolean;
};

type TweenState = {
  from: number;
  to: number;
  startedAt: number;
  duration: number;
} | null;

const AUTOPLAY_SPEED = 30; // px/s

function modulo(value: number, divisor: number) {
  return ((value % divisor) + divisor) % divisor;
}

export function ProductCarousel({ products }: { products: Product[] }) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const firstGroupRef = useRef<HTMLDivElement>(null);

  // Distância virtual percorrida. Pode crescer indefinidamente; somente a pintura
  // é normalizada dentro de um ciclo. Isso deixa autoplay, drag e setas usando
  // exatamente a mesma fonte de movimento.
  const virtualOffsetRef = useRef(0);
  const cycleWidthRef = useRef(0);
  const stepWidthRef = useRef(0);
  const rafRef = useRef(0);
  const lastFrameRef = useRef(0);
  const pauseUntilRef = useRef(0);
  const tweenRef = useRef<TweenState>(null);
  const dragRef = useRef<DragState>({
    active: false,
    pointerId: -1,
    startX: 0,
    startOffset: 0,
    moved: false,
  });

  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);

  const paint = useCallback(() => {
    const track = trackRef.current;
    const cycle = cycleWidthRef.current;
    if (!track || cycle <= 0) return;

    const visualOffset = modulo(virtualOffsetRef.current, cycle);

    // Há três grupos idênticos. O viewport permanece sempre sobre o grupo central,
    // e a normalização troca por uma cópia pixel-a-pixel idêntica. Assim nunca há
    // um "fim" físico da faixa que possa deixar a tela vazia.
    track.style.transform = `translate3d(${-cycle - visualOffset}px, 0, 0)`;

    const step = stepWidthRef.current;
    if (step > 0 && products.length > 0) {
      const nextIndex = modulo(Math.round(visualOffset / step), products.length);
      if (nextIndex !== activeIndexRef.current) {
        activeIndexRef.current = nextIndex;
        setActiveIndex(nextIndex);
      }
    }
  }, [products.length]);

  const measure = useCallback(() => {
    const group = firstGroupRef.current;
    if (!group) return;

    const cycle = group.getBoundingClientRect().width;
    if (cycle > 0) cycleWidthRef.current = cycle;

    const cards = group.querySelectorAll<HTMLElement>(".product-slide");
    if (cards.length >= 2) {
      const step = cards[1].offsetLeft - cards[0].offsetLeft;
      if (step > 0) stepWidthRef.current = step;
    } else if (cards.length === 1) {
      const styles = getComputedStyle(group);
      const gap = Number.parseFloat(styles.columnGap || styles.gap || "0") || 0;
      stepWidthRef.current = cards[0].getBoundingClientRect().width + gap;
    }

    paint();
  }, [paint]);

  useEffect(() => {
    if (products.length === 0) return;

    const viewport = viewportRef.current;
    const track = trackRef.current;
    const group = firstGroupRef.current;
    if (!viewport || !track || !group) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const resizeObserver = new ResizeObserver(() => requestAnimationFrame(measure));
    resizeObserver.observe(viewport);
    resizeObserver.observe(group);
    group.querySelectorAll(".product-slide").forEach((card) => resizeObserver.observe(card));
    measure();

    const onWheel = (event: WheelEvent) => {
      if (reducedMotion.matches || products.length < 2) return;

      // Scroll vertical continua pertencendo à página. O carrossel só reage a gesto
      // horizontal real de trackpad ou Shift + roda do mouse.
      const shiftedWheel = event.shiftKey && Math.abs(event.deltaY) > Math.abs(event.deltaX);
      const horizontalGesture = Math.abs(event.deltaX) > Math.abs(event.deltaY) * 0.8;
      if (!shiftedWheel && !horizontalGesture) return;

      const delta = shiftedWheel ? event.deltaY : event.deltaX;
      if (Math.abs(delta) < 0.1) return;

      event.preventDefault();
      tweenRef.current = null;
      virtualOffsetRef.current += delta * 0.7;
      pauseUntilRef.current = performance.now() + 650;
      paint();
    };

    viewport.addEventListener("wheel", onWheel, { passive: false });

    const frame = (now: number) => {
      const previous = lastFrameRef.current || now;
      const dt = Math.min(now - previous, 50);
      lastFrameRef.current = now;

      const tween = tweenRef.current;
      if (tween) {
        const progress = Math.min((now - tween.startedAt) / tween.duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        virtualOffsetRef.current = tween.from + (tween.to - tween.from) * eased;
        if (progress >= 1) {
          virtualOffsetRef.current = tween.to;
          tweenRef.current = null;
          pauseUntilRef.current = now + 700;
        }
      } else if (
        products.length > 1 &&
        !reducedMotion.matches &&
        !dragRef.current.active &&
        !document.hidden &&
        now >= pauseUntilRef.current
      ) {
        virtualOffsetRef.current += (AUTOPLAY_SPEED * dt) / 1000;
      }

      paint();
      rafRef.current = requestAnimationFrame(frame);
    };

    rafRef.current = requestAnimationFrame(frame);

    return () => {
      resizeObserver.disconnect();
      viewport.removeEventListener("wheel", onWheel);
      cancelAnimationFrame(rafRef.current);
    };
  }, [measure, paint, products.length]);

  const nudge = useCallback(
    (direction: -1 | 1) => {
      if (products.length < 2) return;
      const step = stepWidthRef.current;
      if (step <= 0) return;

      const now = performance.now();
      const from = virtualOffsetRef.current;
      tweenRef.current = {
        from,
        to: from + step * direction,
        startedAt: now,
        duration: 420,
      };
      pauseUntilRef.current = now + 1100;
    },
    [products.length],
  );

  if (products.length === 0) return null;

  const groups = [0, 1, 2];

  return (
    <section className="product-showcase" id="produtos" aria-labelledby="showcase-title">
      <div className="product-showcase__top">
        <div>
          <span className="eyebrow">Catálogo</span>
          <h2 id="showcase-title">Peças para olhar de perto.</h2>
          <p>Os produtos passam continuamente. Arraste para explorar ou use o gesto horizontal do trackpad.</p>
        </div>

        <div className="product-showcase__controls">
          <span className="product-showcase__counter" aria-live="polite">
            {String(activeIndex + 1).padStart(2, "0")} / {String(products.length).padStart(2, "0")}
          </span>
          <Link href="/catalogo" className="text-link">
            Ver catálogo completo <ArrowIcon />
          </Link>
          {products.length > 1 && (
            <div className="product-showcase__arrows" aria-label="Controles secundários do carrossel">
              <button
                type="button"
                className="carousel-button carousel-button--prev"
                onClick={() => nudge(-1)}
                aria-label="Produto anterior"
              >
                <ArrowIcon />
              </button>
              <button
                type="button"
                className="carousel-button"
                onClick={() => nudge(1)}
                aria-label="Próximo produto"
              >
                <ArrowIcon />
              </button>
            </div>
          )}
        </div>
      </div>

      <div
        className="product-carousel-shell"
        ref={viewportRef}
        role="region"
        aria-roledescription="carrossel infinito"
        aria-label="Produtos em destaque"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            nudge(-1);
          }
          if (event.key === "ArrowRight") {
            event.preventDefault();
            nudge(1);
          }
        }}
        onPointerDown={(event) => {
          if (!event.isPrimary || (event.pointerType === "mouse" && event.button !== 0)) return;

          tweenRef.current = null;
          dragRef.current = {
            active: true,
            pointerId: event.pointerId,
            startX: event.clientX,
            startOffset: virtualOffsetRef.current,
            moved: false,
          };
          pauseUntilRef.current = performance.now() + 1200;
          event.currentTarget.setPointerCapture(event.pointerId);
          event.currentTarget.dataset.dragging = "true";
        }}
        onPointerMove={(event) => {
          const drag = dragRef.current;
          if (!drag.active || drag.pointerId !== event.pointerId) return;

          const dx = event.clientX - drag.startX;
          if (Math.abs(dx) > 5) drag.moved = true;
          virtualOffsetRef.current = drag.startOffset - dx;
          paint();
        }}
        onPointerUp={(event) => {
          if (event.currentTarget.hasPointerCapture(event.pointerId)) {
            event.currentTarget.releasePointerCapture(event.pointerId);
          }
          dragRef.current.active = false;
          pauseUntilRef.current = performance.now() + 800;
          event.currentTarget.removeAttribute("data-dragging");
        }}
        onPointerCancel={(event) => {
          dragRef.current.active = false;
          event.currentTarget.removeAttribute("data-dragging");
        }}
        onClickCapture={(event) => {
          if (!dragRef.current.moved) return;
          event.preventDefault();
          event.stopPropagation();
          dragRef.current.moved = false;
        }}
      >
        <div className="product-showcase__track" ref={trackRef}>
          {groups.map((groupIndex) => {
            const isPrimaryGroup = groupIndex === 1;
            return (
              <div
                className="product-showcase__group"
                key={`group-${groupIndex}`}
                ref={groupIndex === 0 ? firstGroupRef : undefined}
                aria-hidden={!isPrimaryGroup || undefined}
              >
                {products.map((product, logicalIndex) => (
                  <Link
                    className={`product-slide${logicalIndex === activeIndex ? " is-current" : ""}`}
                    href={`/produto/${product.slug}`}
                    key={`${groupIndex}-${product.slug}`}
                    tabIndex={isPrimaryGroup ? 0 : -1}
                  >
                    <div className="product-slide__image">
                      <img
                        src={product.image}
                        alt={isPrimaryGroup ? product.imageAlt : ""}
                        draggable={false}
                      />
                    </div>
                    <div className="product-slide__body">
                      <div className="product-slide__meta">
                        <span>{product.category}</span>
                        <span>{product.status === "demo" ? "Demonstração" : "Produto"}</span>
                      </div>
                      <div className="product-slide__details">
                        <h3>{product.name}</h3>
                        <p>{product.summary}</p>
                      </div>
                      <div className="product-slide__action">
                        <span>Ver produto</span>
                        <ArrowIcon diagonal />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            );
          })}
        </div>
      </div>

      <div className="product-showcase__mobile-hint" aria-hidden="true">
        <span>Arraste para explorar</span>
        <span>↔</span>
      </div>
    </section>
  );
}
