"use client";

import { useEffect, useState } from "react";

export function ThematicEntry() {
  const [visible, setVisible] = useState(true);
  const [opening, setOpening] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setVisible(false);
      return;
    }

    // O RootLayout persiste durante a navegação interna do App Router, portanto
    // a entrada reaparece em um novo carregamento real sem repetir entre páginas.
    const openTimer = window.setTimeout(() => setOpening(true), 900);
    const closeTimer = window.setTimeout(() => setVisible(false), 1500);
    const safetyTimer = window.setTimeout(() => setVisible(false), 2500);
    return () => {
      window.clearTimeout(openTimer);
      window.clearTimeout(closeTimer);
      window.clearTimeout(safetyTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`site-loader${opening ? " site-loader--opening" : ""}`} aria-hidden="true">
      <div className="site-loader__panel site-loader__panel--top" />
      <div className="site-loader__panel site-loader__panel--bottom" />

      <div className="site-loader__scene">
        <div className="site-loader__wordmark">
          <span>ALVORA</span>
          <strong>LAB</strong>
        </div>

        <div className="site-loader__printer">
          <div className="site-loader__rail" />
          <div className="site-loader__printhead">
            <span className="site-loader__scanner">
              <i />
            </span>
          </div>
          <img className="site-loader__mark" src="/alvora-mark.svg" alt="" />
        </div>

        <div className="site-loader__progress"><i /></div>
        <div className="site-loader__status">
          <span>Fabricação digital</span>
          <i />
          <span>Alvora Lab</span>
        </div>
      </div>
    </div>
  );
}
