"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowIcon } from "@/components/arrow-icon";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const background = Array.from(document.querySelectorAll<HTMLElement>(
      "main, footer, .site-header > :not(.site-header__actions), .site-header__actions > :not(.mobile-menu)",
    ));
    const inertBefore = background.map((element) => element.inert);
    background.forEach((element) => { element.inert = true; });
    overlayRef.current?.querySelector<HTMLButtonElement>("button")?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        requestAnimationFrame(() => triggerRef.current?.focus());
      }
      if (event.key !== "Tab") return;
      const focusable = Array.from(overlayRef.current?.querySelectorAll<HTMLElement>("button, a[href]") ?? []);
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    const mobileLayout = window.matchMedia("(max-width: 1050px)");
    const closeOnDesktop = () => { if (!mobileLayout.matches) setOpen(false); };
    mobileLayout.addEventListener("change", closeOnDesktop);
    return () => {
      document.body.style.overflow = previous;
      background.forEach((element, index) => { element.inert = inertBefore[index]; });
      window.removeEventListener("keydown", onKey);
      mobileLayout.removeEventListener("change", closeOnDesktop);
    };
  }, [open]);
  const close = () => {
    setOpen(false);
    requestAnimationFrame(() => triggerRef.current?.focus());
  };

  return <div className="mobile-menu">
    <button ref={triggerRef} className="mobile-menu__trigger" type="button" aria-expanded={open} aria-controls={open ? "mobile-navigation" : undefined} aria-label="Abrir menu" onClick={() => setOpen(true)}><span /><span /></button>
    {open ? <div ref={overlayRef} className="mobile-menu__overlay" role="dialog" aria-modal="true" aria-label="Navegação móvel" onPointerDown={(event) => { if (event.target === event.currentTarget) close(); }}>
      <button className="mobile-menu__close" type="button" aria-label="Fechar menu" onClick={close}><span /><span /></button>
      <div className="mobile-menu__panel" id="mobile-navigation">
        <div className="mobile-menu__label"><span>Navegação</span><span>Alvora Lab</span></div>
        <nav aria-label="Navegação móvel">
          <Link href="/catalogo" onClick={() => setOpen(false)}><span>01</span>Catálogo <ArrowIcon diagonal /></Link>
          <Link href="/personalizados" onClick={() => setOpen(false)}><span>02</span>Personalizados <ArrowIcon diagonal /></Link>
          <Link href="/empresas" onClick={() => setOpen(false)}><span>03</span>Para empresas <ArrowIcon diagonal /></Link>
          <Link href="/sobre" onClick={() => setOpen(false)}><span>04</span>Sobre <ArrowIcon diagonal /></Link>
        </nav>
        <Link className="button button--primary mobile-menu__cta" href="/personalizados#orcamento" onClick={() => setOpen(false)}>Formulário de orçamento <ArrowIcon /></Link>
      </div>
    </div> : null}
  </div>;
}
