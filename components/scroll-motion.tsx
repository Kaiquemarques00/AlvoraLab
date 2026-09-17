"use client";

import { useEffect } from "react";

const selectors = [
  "main > section:not(:first-child)",
  ".journey-card",
  ".category-card",
  ".product-slide",
  ".production-points article",
  ".catalog-card",
  ".capability-grid article",
  ".business-use-grid article",
  ".contact-grid > a",
  ".about-manifesto > div",
  ".product-main > *",
  ".product-story > *",
  ".service-process > *",
  ".quote-section > *",
  ".direct-contact > div",
  ".site-footer"
].join(",");

export function ScrollMotion() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const seen = new WeakSet<Element>();
    const observer = reduced ? null : new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-revealed");
        observer?.unobserve(entry.target);
      }
    }, { threshold: 0.08, rootMargin: "0px 0px -7% 0px" });

    function register(root: ParentNode = document) {
      const elements: HTMLElement[] = [];
      if (root instanceof HTMLElement && root.matches(selectors)) elements.push(root);
      elements.push(...root.querySelectorAll<HTMLElement>(selectors));
      elements.forEach((element, i) => {
        if (seen.has(element)) return;
        seen.add(element);
        element.dataset.scrollReveal = "";
        element.style.setProperty("--reveal-delay", `${Math.min((i % 4) * 45, 135)}ms`);
        if (reduced) element.classList.add("is-revealed");
        else observer?.observe(element);
      });
    }

    document.documentElement.classList.add("motion-ready");
    register();
    const mutation = new MutationObserver((records) => {
      for (const record of records) {
        for (const node of record.addedNodes) {
          if (node instanceof HTMLElement) register(node);
        }
      }
    });
    mutation.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer?.disconnect();
      mutation.disconnect();
      document.documentElement.classList.remove("motion-ready");
    };
  }, []);

  return null;
}
