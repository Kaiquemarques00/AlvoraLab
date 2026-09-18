import type { Metadata } from "next";
import { QuoteForm } from "@/components/quote-form";
import { SiteFooter, SiteHeader } from "@/components/site-header";

export const metadata: Metadata = { title: "Para empresas | Alvora Lab", description: "Soluções físicas e pequenas produções personalizadas em impressão 3D para empresas e profissionais." };

export default function BusinessPage() {
  return <><SiteHeader /><main className="service-page">
    <section className="service-hero service-hero--business"><span className="eyebrow">Alvora Lab para empresas</span><h1>Soluções físicas personalizadas para o seu negócio.</h1><p>Displays, organização, comunicação física, objetos de balcão e pequenas produções podem ser avaliados conforme a necessidade.</p></section>
    <section className="business-use-grid"><article><span>01</span><h2>Displays e balcão</h2><p>Suportes para informações, QR, Pix, cartões e comunicação no ponto de atendimento.</p></article><article><span>02</span><h2>Organização</h2><p>Peças para mesas, bancadas, ferramentas, cabos e objetos de uso recorrente.</p></article><article><span>03</span><h2>Identidade física</h2><p>Objetos e sinalização personalizados a partir da identidade e do contexto do negócio.</p></article><article><span>04</span><h2>Pequenas séries</h2><p>Demandas em quantidade podem ser avaliadas conforme geometria, prazo e capacidade de produção.</p></article></section>
    <section className="quote-section" id="orcamento"><div className="quote-section__intro"><span className="eyebrow">Orçamento para empresas</span><h2>Explique a necessidade do seu negócio.</h2><p>Informe quantidade, finalidade, prazo e referências. A avaliação vem antes de qualquer compromisso de produção.</p></div><QuoteForm business /></section>
  </main><SiteFooter /></>;
}
