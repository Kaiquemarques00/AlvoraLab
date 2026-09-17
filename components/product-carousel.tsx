"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { ArrowIcon } from "@/components/arrow-icon";
import type { Product } from "@/lib/products";

const MIN_LOOP_SLIDES = 8;
const RESUME_DELAY = 850;

type LoopProduct = {
  product: Product;
  instance: number;
};

export function ProductCarousel({ products }: { products: Product[] }) {
  const resumeTimerRef = useRef<number | null>(null);
  const reducedMotionRef = useRef(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const loopProducts = useMemo<LoopProduct[]>(() => {
    if (products.length === 0) return [];

    const repetitions = Math.max(1, Math.ceil(MIN_LOOP_SLIDES / products.length));
    return Array.from({ length: repetitions }, (_, repetition) =>
      products.map((product, index) => ({
        product,
        instance: repetition * products.length + index,
      })),
    ).flat();
  }, [products]);

  const autoScroll = useRef(
    AutoScroll({
      speed: 0.72,
      startDelay: 350,
      playOnInit: true,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      dragFree: true,
      containScroll: false,
      skipSnaps: false,
      duration: 30,
    },
    [autoScroll.current],
  );

  const clearResumeTimer = useCallback(() => {
    if (resumeTimerRef.current !== null) {
      window.clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = null;
    }
  }, []);

  const resumeAutoScroll = useCallback(
    (delay = RESUME_DELAY) => {
      if (!emblaApi || reducedMotionRef.current) return;
      clearResumeTimer();
      resumeTimerRef.current = window.setTimeout(() => {
        emblaApi.plugins().autoScroll?.play(0);
        resumeTimerRef.current = null;
      }, delay);
    },
    [clearResumeTimer, emblaApi],
  );

  const scrollByButton = useCallback(
    (direction: "prev" | "next") => {
      if (!emblaApi || products.length < 2) return;

      clearResumeTimer();
      emblaApi.plugins().autoScroll?.stop();

      if (direction === "prev") emblaApi.scrollPrev();
      else emblaApi.scrollNext();

      resumeAutoScroll();
    },
    [clearResumeTimer, emblaApi, products.length, resumeAutoScroll],
  );

  useEffect(() => {
    if (!emblaApi || products.length === 0) return;

    const updateActiveIndex = () => {
      const selected = emblaApi.selectedScrollSnap();
      setActiveIndex(selected % products.length);
    };

    updateActiveIndex();
    emblaApi.on("select", updateActiveIndex);
    emblaApi.on("reInit", updateActiveIndex);

    return () => {
      emblaApi.off("select", updateActiveIndex);
      emblaApi.off("reInit", updateActiveIndex);
    };
  }, [emblaApi, products.length]);

  useEffect(() => {
    if (!emblaApi) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotionPreference = () => {
      reducedMotionRef.current = media.matches;
      if (media.matches) emblaApi.plugins().autoScroll?.stop();
      else emblaApi.plugins().autoScroll?.play(350);
    };

    syncMotionPreference();
    media.addEventListener("change", syncMotionPreference);

    return () => {
      media.removeEventListener("change", syncMotionPreference);
      clearResumeTimer();
    };
  }, [clearResumeTimer, emblaApi]);

  if (products.length === 0) return null;

  return (
    <section className="product-showcase" id="produtos" aria-labelledby="showcase-title">
      <div className="product-showcase__top">
        <div>
          <span className="eyebrow">Catálogo</span>
          <h2 id="showcase-title">Peças para olhar de perto.</h2>
          <p>
            O catálogo se move continuamente. Arraste com o mouse ou deslize no celular para explorar.
          </p>
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
                onClick={() => scrollByButton("prev")}
                aria-label="Produto anterior"
              >
                <ArrowIcon />
              </button>
              <button
                type="button"
                className="carousel-button"
                onClick={() => scrollByButton("next")}
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
        ref={emblaRef}
        role="region"
        aria-roledescription="carrossel"
        aria-label="Produtos em destaque"
        tabIndex={0}
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
          {loopProducts.map(({ product, instance }) => (
            <Link
              href={`/produto/${product.slug}`}
              className="product-slide"
              key={`${product.slug}-${instance}`}
              aria-label={`Ver ${product.name}`}
            >
              <div className="product-slide__image">
                <img src={product.image} alt={product.imageAlt} draggable={false} />
              </div>
              <div className="product-slide__body">
                <div className="product-slide__meta">
                  <span>{product.category}</span>
                  <span>{product.material || "Impressão 3D"}</span>
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

      <div className="product-showcase__mobile-hint" aria-hidden="true">
        <span>Deslize para explorar</span>
        <span>← →</span>
      </div>
    </section>
  );
}
