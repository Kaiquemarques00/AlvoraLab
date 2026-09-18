import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/site-header";
import { ArrowIcon } from "@/components/arrow-icon";

export const metadata: Metadata = { title: "Sobre | Alvora Lab", description: "Conheça a proposta da Alvora Lab e como a fabricação digital se transforma em produtos físicos." };

export default function AboutPage() {
  return <><SiteHeader /><main className="about-page"><section className="service-hero"><span className="eyebrow">Sobre a Alvora Lab</span><h1>Uma pequena fábrica digital para ideias que precisam ganhar forma.</h1><p>A Alvora Lab trabalha com impressão 3D para transformar necessidades, referências e conceitos em objetos físicos úteis, decorativos e personalizáveis.</p></section><section className="about-manifesto"><div><span>01</span><h2>Produto antes do efeito.</h2><p>A tecnologia importa, mas o objeto final precisa funcionar no mundo real.</p></div><div><span>02</span><h2>Personalização com critério.</h2><p>Nem toda alteração é viável. Por isso, projetos personalizados passam por avaliação.</p></div><div><span>03</span><h2>Construir catálogo com confiança.</h2><p>Cada produto deve apresentar uso, imagem, medidas e informações reais antes de ser anunciado.</p></div></section><section className="about-next"><h2>Veja as peças e ideias do catálogo.</h2><div><Link href="/catalogo" className="button button--primary">Explorar catálogo <ArrowIcon /></Link><Link href="/personalizados" className="button button--secondary">Descrever projeto <ArrowIcon diagonal /></Link></div></section></main><SiteFooter /></>;
}
