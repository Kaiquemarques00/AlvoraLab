"use client";

import Link from "next/link";
import { ProductImage } from "@/components/product-image";
import { useState } from "react";
import { ArrowIcon } from "@/components/arrow-icon";
import { categories, products, type Category, type Product } from "@/lib/products";

const statusLabels: Record<Product["status"], string> = {
  demo: "Demonstração",
  available: "Disponível",
  "made-to-order": "Sob demanda",
  unavailable: "Indisponível",
};

function normalizeSearch(value: string) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase("pt-BR").trim();
}

export function CatalogClient({ initialCategory }: { initialCategory: string }) {
  const validInitial = categories.includes(initialCategory as Category) ? initialCategory : "Todos";
  const [category, setCategory] = useState<string>(validInitial);
  const [query, setQuery] = useState("");
  const normalized = normalizeSearch(query);
  const filtered = products.filter((product) => (category === "Todos" || product.category === category) && normalizeSearch(`${product.name} ${product.summary} ${product.category}`).includes(normalized));

  return <div className="catalog-page">
    <section className="catalog-hero"><span className="eyebrow">Catálogo Alvora Lab</span><h1>Objetos para usar,<br />organizar e transformar espaços.</h1><p>Veja as peças e confira a disponibilidade de compra na página de cada produto.</p></section>
    <div className="catalog-toolbar" aria-label="Ferramentas do catálogo">
      <label className="search-field"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.5" stroke="currentColor" strokeWidth="1.8"/><path d="m16 16 4.7 4.7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg><span className="sr-only">Buscar produtos</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar no catálogo" /></label>
      <div className="catalog-filters" role="group" aria-label="Filtrar por categoria">{["Todos", ...categories].map((item) => <button type="button" key={item} className={category === item ? "is-active" : ""} aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}</div>
      <span className="catalog-count" role="status" aria-live="polite" aria-atomic="true">{filtered.length} {filtered.length === 1 ? "produto" : "produtos"}</span>
    </div>
    <section className="catalog-content">
      {filtered.some((product) => product.status === "demo") ? <p className="catalog-disclaimer catalog-disclaimer--top">Peças marcadas como demonstração ainda não estão à venda.</p> : null}
      {filtered.length ? <div className="catalog-grid">{filtered.map((product, index) => <Link href={`/produto/${product.slug}`} key={product.slug} className="catalog-card"><ProductImage className="catalog-card__photo" src={product.image} alt={product.imageAlt} sizes="(max-width: 700px) calc(100vw - 34px), (max-width: 1050px) calc(45vw - 11px), (max-width: 1800px) calc(30vw - 14px), calc(33.333vw - 74px)" loading={index === 0 ? "eager" : "lazy"} /><div className="catalog-card__body"><div><span>{product.category} · {statusLabels[product.status]}</span><h2>{product.name}</h2><p>{product.summary}</p></div><ArrowIcon diagonal /></div></Link>)}</div> : <div className="empty-state"><h2>{query ? "Nenhum resultado para esta busca." : "Nenhuma peça nesta categoria."}</h2><p>{query ? "Experimente outro termo ou limpe a busca e os filtros." : "Escolha outra categoria ou veja todas as peças."}</p><button type="button" className="button button--primary" onClick={() => { setQuery(""); setCategory("Todos"); }}>Ver todas as peças <ArrowIcon /></button></div>}
    </section>
  </div>;
}
