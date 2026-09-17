import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter, SiteHeader } from "@/components/site-header";
import { ArrowIcon } from "@/components/arrow-icon";
import { getProduct, products } from "@/lib/products";

export function generateStaticParams() { return products.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  return { title: product ? `${product.name} | Alvora Lab` : "Produto | Alvora Lab", description: product?.summary };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  return <><SiteHeader /><main className="product-page">
    <div className="product-breadcrumb"><Link href="/catalogo">Catálogo</Link><span>/</span><span>{product.name}</span></div>
    <section className="product-main">
      <div className="product-gallery"><div className="product-gallery__main"><img src={product.image} alt={product.imageAlt} /></div><div className="product-gallery__note"><span>Imagem atual do projeto</span><p>Substitua por fotografia real e variações do produto antes da publicação.</p></div></div>
      <div className="product-info"><span className="eyebrow">{product.category}</span><h1>{product.name}</h1><p className="product-info__lead">{product.summary}</p>
        <div className="product-status"><span>{product.status === "demo" ? "Conteúdo de demonstração" : product.status === "made-to-order" ? "Produzido sob demanda" : "Disponível"}</span>{product.customizable ? <span>Personalizável</span> : null}</div>
        <dl className="product-specs">{product.material ? <><dt>Material</dt><dd>{product.material}</dd></> : null}{product.dimensions ? <><dt>Dimensões</dt><dd>{product.dimensions}</dd></> : null}{product.weight ? <><dt>Peso</dt><dd>{product.weight}</dd></> : null}<dt>Categoria</dt><dd>{product.category}</dd></dl>
        <div className="product-actions">{product.marketplaceUrl ? <a className="button button--primary" href={product.marketplaceUrl} target="_blank" rel="noopener noreferrer">Comprar na Shopee <ArrowIcon diagonal /></a> : <span className="button button--disabled" aria-disabled="true">Compra ainda não conectada</span>}{product.customizable ? <Link className="button button--secondary" href={`/personalizados?produto=${encodeURIComponent(product.name)}#orcamento`}>Quero personalizar <ArrowIcon /></Link> : null}</div>
      </div>
    </section>
    <section className="product-story"><div><span className="eyebrow">Sobre a peça</span><h2>Forma com propósito.</h2></div><div><p>{product.description}</p>{product.features?.length ? <ul>{product.features.map((feature) => <li key={feature}>{feature}</li>)}</ul> : null}</div></section>
    <section className="product-next"><span>Quer algo parecido, mas adaptado?</span><h2>Envie sua referência para avaliação.</h2><Link href="/personalizados#orcamento" className="button button--primary">Solicitar projeto <ArrowIcon /></Link></section>
  </main><SiteFooter /></>;
}
