"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === "dark" ? "dark" : "light");
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.add("theme-changing");
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("alvora-theme", next); } catch {}
    setTheme(next);
    window.setTimeout(() => document.documentElement.classList.remove("theme-changing"), 420);
  }

  return <button
    className="theme-toggle"
    type="button"
    onClick={toggle}
    aria-label={theme === "dark" ? "Ativar modo claro" : "Ativar modo noturno"}
    aria-pressed={theme === "dark"}
    title={theme === "dark" ? "Usando modo noturno" : "Usando modo claro"}
  >
    <span className="theme-toggle__track" aria-hidden="true">
      <svg className="theme-toggle__sun" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="3.4" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 2.5v2.1m0 14.8v2.1M5.28 5.28l1.48 1.48m10.48 10.48 1.48 1.48M2.5 12h2.1m14.8 0h2.1M5.28 18.72l1.48-1.48M17.24 6.76l1.48-1.48" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
      <svg className="theme-toggle__moon" viewBox="0 0 24 24" fill="none">
        <path d="M19.75 14.55A7.65 7.65 0 0 1 9.45 4.25 7.75 7.75 0 1 0 19.75 14.55Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="theme-toggle__thumb" />
    </span>
  </button>;
}
