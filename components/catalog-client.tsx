"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowIcon } from "@/components/arrow-icon";
import { categories, products, type Category } from "@/lib/products";

export function CatalogClient({ initialCategory }: { initialCategory: string }) {
  const validInitial = categories.includes(initialCategory as Category) ? initialCategory : "Todos";
  const [category, setCategory] = useState<string>(validInitial);
  const [query, setQuery] = useState("");
  const normalized = query.toLocaleLowerCase("pt-BR").trim();
  const filtered = products.filter((product) => (category === "Todos" || product.category === category) && `${product.name} ${product.summary} ${product.category}`.toLocaleLowerCase("pt-BR").includes(normalized));

  return <div className="catalog-page">
    <section className="catalog-hero"><span className="eyebrow">Catálogo Alvora Lab</span><h1>Objetos para usar,<br />organizar e transformar espaços.</h1><p>Explore a seleção disponível e veja cada produto com mais contexto, aplicação e detalhes.</p></section>
    <div className="catalog-toolbar" aria-label="Ferramentas do catálogo">
      <label className="search-field"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.5" stroke="currentColor" strokeWidth="1.8"/><path d="m16 16 4.7 4.7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg><span className="sr-only">Buscar produtos</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar no catálogo" /></label>
      <div className="catalog-filters" role="group" aria-label="Filtrar por categoria">{["Todos", ...categories].map((item) => <button type="button" key={item} className={category === item ? "is-active" : ""} aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}</div>
      <span className="catalog-count">{filtered.length} {filtered.length === 1 ? "produto" : "produtos"}</span>
    </div>
    <section className="catalog-content" aria-live="polite">
      {filtered.length ? <div className="catalog-grid">{filtered.map((product) => <Link href={`/produto/${product.slug}`} key={product.slug} className="catalog-card"><div className="catalog-card__photo"><img src={product.image} alt={product.imageAlt} /></div><div className="catalog-card__body"><div><span>{product.category}</span><h2>{product.name}</h2><p>{product.summary}</p></div><ArrowIcon diagonal /></div></Link>)}</div> : <div className="empty-state"><h2>Nenhum produto encontrado.</h2><p>Tente outro termo ou remova o filtro atual.</p><button type="button" className="button button--primary" onClick={() => { setQuery(""); setCategory("Todos"); }}>Limpar filtros <ArrowIcon /></button></div>}
      <p className="catalog-disclaimer">Os itens atuais usam o conteúdo de demonstração já existente no projeto. Antes do lançamento, substitua dados e imagens pelos produtos reais da Alvora Lab.</p>
    </section>
  </div>;
}
