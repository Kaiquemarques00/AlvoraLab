import type { Metadata } from "next";
import { QuoteForm } from "@/components/quote-form";
import { SiteFooter, SiteHeader } from "@/components/site-header";

export const metadata: Metadata = { title: "Personalizados | Alvora Lab", description: "Envie uma ideia ou referência para avaliação de projeto personalizado em impressão 3D." };

export default async function PersonalizedPage({ searchParams }: { searchParams: Promise<{ produto?: string }> }) {
  const { produto = "" } = await searchParams;
  return <><SiteHeader /><main className="service-page">
    <section className="service-hero"><span className="eyebrow">Projetos personalizados</span><h1>Tem uma ideia?<br />Vamos transformar em algo que possa existir.</h1><p>Envie uma necessidade, referência ou produto que você gostaria de adaptar. Antes de produzir, avaliamos viabilidade, medidas, uso e material.</p></section>
    <section className="capability-grid"><article><span>01</span><h2>Cor</h2><p>Variações podem ser avaliadas conforme material e disponibilidade.</p></article><article><span>02</span><h2>Medidas</h2><p>Ajustes são possíveis quando a geometria e o uso permitem.</p></article><article><span>03</span><h2>Texto e identidade</h2><p>Nomes, informações e elementos visuais podem entrar no projeto quando tecnicamente adequados.</p></article><article><span>04</span><h2>Função</h2><p>Uma peça pode partir de uma necessidade concreta, não apenas de uma referência estética.</p></article></section>
    <section className="service-process"><div><span className="eyebrow">Como funciona</span><h2>Da referência à produção.</h2></div><ol><li><strong>01</strong><span>Você envia a ideia e o contexto de uso.</span></li><li><strong>02</strong><span>A Alvora Lab avalia a viabilidade.</span></li><li><strong>03</strong><span>Detalhes e orçamento são alinhados.</span></li><li><strong>04</strong><span>A produção começa após aprovação.</span></li></ol></section>
    <section className="quote-section" id="orcamento"><div className="quote-section__intro"><span className="eyebrow">Solicitar orçamento</span><h2>Conte o que você quer criar.</h2><p>Quanto melhor o contexto, mais fácil avaliar a peça. Inclua uso, quantidade, medidas aproximadas e uma referência quando tiver.</p></div><QuoteForm initialProduct={produto} /></section>
  </main><SiteFooter /></>;
}
