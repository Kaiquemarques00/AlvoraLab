"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowIcon } from "@/components/arrow-icon";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = previous; window.removeEventListener("keydown", onKey); };
  }, [open]);
  const close = () => setOpen(false);

  return <div className="mobile-menu">
    <button className="mobile-menu__trigger" type="button" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Fechar menu" : "Abrir menu"} onClick={() => setOpen((value) => !value)}><span /><span /></button>
    {open ? <div className="mobile-menu__overlay" onPointerDown={(event) => { if (event.target === event.currentTarget) close(); }}>
      <div className="mobile-menu__panel" id="mobile-navigation">
        <div className="mobile-menu__label"><span>Navegação</span><span>Alvora Lab</span></div>
        <nav aria-label="Navegação móvel">
          <Link href="/catalogo" onClick={close}><span>01</span>Catálogo <ArrowIcon diagonal /></Link>
          <Link href="/personalizados" onClick={close}><span>02</span>Personalizados <ArrowIcon diagonal /></Link>
          <Link href="/empresas" onClick={close}><span>03</span>Para empresas <ArrowIcon diagonal /></Link>
          <Link href="/sobre" onClick={close}><span>04</span>Sobre <ArrowIcon diagonal /></Link>
        </nav>
        <Link className="button button--primary mobile-menu__cta" href="/personalizados#orcamento" onClick={close}>Solicitar orçamento <ArrowIcon /></Link>
      </div>
    </div> : null}
  </div>;
}
