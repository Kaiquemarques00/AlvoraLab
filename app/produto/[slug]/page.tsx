import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { SiteFooter, SiteHeader } from "@/components/site-header";
import { ArrowIcon } from "@/components/arrow-icon";
import { getProduct, products, type Product } from "@/lib/products";

const statusLabels: Record<Product["status"], string> = {
  demo: "Demonstração",
  available: "Disponível",
  "made-to-order": "Produzido sob demanda",
  unavailable: "Indisponível",
};

function marketplaceHref(url: string | null) {
  if (!url) return null;
  try {
    const parsed = new URL(url);
    return parsed.protocol === "https:" || parsed.protocol === "http:" ? parsed.href : null;
  } catch {
    return null;
  }
}

export function generateStaticParams() { return products.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  return { title: product?.name ?? "Produto", description: product?.summary };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const purchaseUrl = product.status === "available" || product.status === "made-to-order" ? marketplaceHref(product.marketplaceUrl) : null;
  const quoteUrl = `/personalizados?produto=${encodeURIComponent(product.name)}#orcamento`;
  return <><SiteHeader /><main className="product-page">
    <div className="product-breadcrumb"><Link href="/catalogo">Catálogo</Link><span>/</span><span>{product.name}</span></div>
    <section className="product-main">
      <div className="product-gallery"><div className="product-gallery__main"><Image src={product.image} alt={product.imageAlt} fill sizes="(max-width: 700px) calc(100vw - 32px), (max-width: 1050px) calc(100vw - 50px), 55vw" loading="eager" fetchPriority="high" /></div>{product.status === "demo" ? <p className="product-gallery__note">Imagem ilustrativa.</p> : null}</div>
      <div className="product-info"><span className="eyebrow">{product.category}</span><h1>{product.name}</h1><p className="product-info__lead">{product.summary}</p>
        <div className="product-status"><span>{statusLabels[product.status]}</span>{product.customizable ? <span>Personalizável</span> : null}</div>
        <dl className="product-specs">{product.material ? <><dt>Material</dt><dd>{product.material}</dd></> : null}{product.dimensions ? <><dt>Dimensões</dt><dd>{product.dimensions}</dd></> : null}{product.weight ? <><dt>Peso</dt><dd>{product.weight}</dd></> : null}<dt>Categoria</dt><dd>{product.category}</dd></dl>
        <div className="product-actions">{purchaseUrl ? <><a className="button button--primary" href={purchaseUrl} target="_blank" rel="noopener noreferrer" aria-label={`Ver ${product.name} no marketplace (abre em nova aba)`}>Ver no marketplace <ArrowIcon diagonal /></a><p className="product-actions__note">A compra e o pagamento acontecem no marketplace.</p></> : <p className="product-actions__note">{product.status === "demo" ? "Este conceito ainda não está à venda." : product.status === "unavailable" ? "Este produto está indisponível no momento." : "Ainda não há um link de compra para este produto."}</p>}{product.customizable ? <Link className="button button--secondary" href={quoteUrl}>Descrever personalização <ArrowIcon /></Link> : null}</div>
      </div>
    </section>
    <section className="product-story"><div><h2>Uso e detalhes.</h2></div><div><p>{product.description}</p>{product.features?.length ? <ul>{product.features.map((feature) => <li key={feature}>{feature}</li>)}</ul> : null}</div></section>
    {product.customizable ? <section className="product-next"><span>Personalização</span><h2>Descreva como você gostaria de adaptar a peça.</h2><Link href={quoteUrl} className="button button--primary">Abrir formulário de orçamento <ArrowIcon /></Link></section> : null}
  </main><SiteFooter /></>;
}
