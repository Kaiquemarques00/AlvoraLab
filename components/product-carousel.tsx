"use client";

import Link from "next/link";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowIcon } from "@/components/arrow-icon";
import type { Product } from "@/lib/products";

export function ProductCarousel({ products }: { products: Product[] }) {
  const showcaseRef = useRef<HTMLElement | null>(null);
  const [navigation, setNavigation] = useState({ step: 0, count: 1, canPrev: false, canNext: false });
  const [autoEnabled, setAutoEnabled] = useState(true);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [touching, setTouching] = useState(false);
  const autoDirectionRef = useRef<"prev" | "next">("next");
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: false,
      align: "start",
      containScroll: "trimSnaps",
      dragFree: false,
    },
  );

  const scrollByButton = useCallback(
    (direction: "prev" | "next") => {
      if (!emblaApi) return;
      setAutoEnabled(false);
      if (direction === "prev") emblaApi.scrollPrev();
      else emblaApi.scrollNext();
    },
    [emblaApi],
  );

  useEffect(() => {
    if (!emblaApi) return;

    const updateNavigation = () => {
      setNavigation({
        step: emblaApi.selectedScrollSnap(),
        count: Math.max(1, emblaApi.scrollSnapList().length),
        canPrev: emblaApi.canScrollPrev(),
        canNext: emblaApi.canScrollNext(),
      });
    };

    updateNavigation();
    emblaApi.on("select", updateNavigation);
    emblaApi.on("reInit", updateNavigation);

    return () => {
      emblaApi.off("select", updateNavigation);
      emblaApi.off("reInit", updateNavigation);
    };
  }, [emblaApi]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotionPreference = () => setAutoEnabled(!media.matches);

    syncMotionPreference();
    media.addEventListener("change", syncMotionPreference);
    return () => media.removeEventListener("change", syncMotionPreference);
  }, []);

  useEffect(() => {
    const section = showcaseRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.15 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!emblaApi || !autoEnabled || !visible || hovered || focused || touching || navigation.count < 2) return;

    const timer = window.setTimeout(() => {
      if (autoDirectionRef.current === "next" && !emblaApi.canScrollNext()) {
        autoDirectionRef.current = "prev";
      } else if (autoDirectionRef.current === "prev" && !emblaApi.canScrollPrev()) {
        autoDirectionRef.current = "next";
      }

      if (autoDirectionRef.current === "next") emblaApi.scrollNext();
      else emblaApi.scrollPrev();
    }, 4000);

    return () => window.clearTimeout(timer);
  }, [emblaApi, autoEnabled, visible, hovered, focused, touching, navigation]);

  if (products.length === 0) return null;

  return (
    <section className="product-showcase" id="produtos" aria-labelledby="showcase-title" ref={showcaseRef}>
      <div className="product-showcase__top">
        <div>
          <span className="eyebrow">Catálogo</span>
          <h2 id="showcase-title">Peças para olhar de perto.</h2>
          <p>{products.length} peças em destaque. Arraste, deslize ou use as setas para explorar.</p>
        </div>

        <div className="product-showcase__controls">
          <span
            className="product-showcase__counter"
            aria-live={autoEnabled ? "off" : "polite"}
            aria-label={`Etapa ${navigation.step + 1} de ${navigation.count}`}
          >
            {String(navigation.step + 1).padStart(2, "0")} / {String(navigation.count).padStart(2, "0")}
          </span>
          {products.length > 1 && (
            <button
              type="button"
              className="product-showcase__autoplay"
              onClick={() => setAutoEnabled((enabled) => !enabled)}
              aria-label={autoEnabled ? "Pausar exposição automática" : "Iniciar exposição automática"}
              aria-pressed={autoEnabled}
            >
              <span aria-hidden="true" />
              {autoEnabled ? "Exposição ligada" : "Exposição pausada"}
            </button>
          )}
          <Link href="/catalogo" className="text-link">
            Ver catálogo completo <ArrowIcon />
          </Link>
          {products.length > 1 && (
            <div className="product-showcase__arrows" aria-label="Controles do carrossel">
              <button
                type="button"
                className="carousel-button carousel-button--prev"
                onClick={() => scrollByButton("prev")}
                aria-label="Etapa anterior"
                disabled={!navigation.canPrev}
              >
                <ArrowIcon />
              </button>
              <button
                type="button"
                className="carousel-button"
                onClick={() => scrollByButton("next")}
                aria-label="Próxima etapa"
                disabled={!navigation.canNext}
              >
                <ArrowIcon />
              </button>
            </div>
          )}
        </div>
      </div>

      <div
        className="product-carousel-shell"
        ref={emblaRef}
        role="region"
        aria-roledescription="carrossel"
        aria-label="Produtos em destaque"
        tabIndex={0}
        onPointerDown={() => setAutoEnabled(false)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocusCapture={() => setFocused(true)}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false);
        }}
        onTouchStart={() => setTouching(true)}
        onTouchEnd={() => setTouching(false)}
        onTouchCancel={() => setTouching(false)}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            scrollByButton("prev");
          }
          if (event.key === "ArrowRight") {
            event.preventDefault();
            scrollByButton("next");
          }
        }}
      >
        <div className="product-showcase__track">
          {products.map((product) => (
            <Link
              href={`/produto/${product.slug}`}
              className="product-slide"
              key={product.slug}
              aria-label={`Ver ${product.name}`}
            >
              <div className="product-slide__image">
                <Image src={product.image} alt={product.imageAlt} fill sizes="(max-width: 700px) 84vw, (max-width: 1200px) 40vw, 28vw" loading="lazy" draggable={false} />
              </div>
              <div className="product-slide__body">
                <div className="product-slide__meta">
                  <span>{product.category}</span>
                  <span>{product.status === "demo" ? "Conceito" : product.material || "Impressão 3D"}</span>
                </div>
                <div className="product-slide__details">
                  <h3>{product.name}</h3>
                  <p>{product.summary}</p>
                </div>
                <span className="product-slide__action" aria-hidden="true">
                  <span>Ver produto</span>
                  <ArrowIcon />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {navigation.count > 1 && (
        <div className="product-showcase__progress" aria-hidden="true">
          <span style={{ transform: `scaleX(${(navigation.step + 1) / navigation.count})` }} />
        </div>
      )}

      <div className="product-showcase__mobile-hint" aria-hidden="true">
        <span>Deslize para explorar</span>
        <span>← →</span>
      </div>
    </section>
  );
}
