import Link from "next/link";
import Image from "next/image";
import { BrandHeroMark } from "@/components/brand-hero-mark";
import { ProductCarousel } from "@/components/product-carousel";
import { SiteFooter, SiteHeader } from "@/components/site-header";
import { ArrowIcon } from "@/components/arrow-icon";
import { products } from "@/lib/products";

const featuredOrder = new Map<string, number>([
  "suporte-para-tablet",
  "vaso-modular",
  "escultura-ondulada",
  "organizador-modular",
  "display-de-balcao",
  "suporte-de-fones",
  "porta-chaves-de-parede",
  "organizador-de-cabos",
].map((slug, index): [string, number] => [slug, index]));

const featuredProducts = products
  .filter((product) => product.featured)
  .sort((a, b) =>
    (featuredOrder.get(a.slug) ?? Number.MAX_SAFE_INTEGER) -
    (featuredOrder.get(b.slug) ?? Number.MAX_SAFE_INTEGER),
  );

const categories = [
  { title: "Organização", text: "Suportes, organizadores e pequenas soluções para deixar objetos e espaços mais funcionais.", href: "/catalogo?categoria=Organização", number: "01" },
  { title: "Casa & Decoração", text: "Objetos que combinam forma, textura e fabricação digital para compor o ambiente.", href: "/catalogo?categoria=Casa%20%26%20Decoração", number: "02" },
  { title: "Personalizados", text: "Projetos avaliados a partir de nomes, referências, medidas, cores e necessidades específicas.", href: "/personalizados", number: "03" },
  { title: "Negócios", text: "Displays, organização, comunicação física e pequenas produções para profissionais e empresas.", href: "/empresas", number: "04" },
];

const faq = [
  ["Vocês fazem produtos personalizados?", "Sim. Ideias e referências podem ser enviadas para avaliação de viabilidade, materiais, medidas e produção."],
  ["Posso escolher outra cor?", "Quando a peça e o material permitirem, avaliamos as cores disponíveis para o projeto."],
  ["É possível alterar medidas?", "Depende da geometria, do uso e das limitações de impressão. Alterações são avaliadas antes do orçamento."],
  ["Qual material é utilizado?", "O material varia conforme o produto e a aplicação. A especificação correta deve ser informada em cada item do catálogo."],
  ["Vocês produzem para empresas?", "Sim. A Alvora Lab pode avaliar demandas de displays, organização, comunicação física, peças personalizadas e pequenas produções."],
];

export default function Home() {
  return <>
    <SiteHeader />
    <main>
      <section className="brand-hero" aria-labelledby="hero-title">
        <div className="brand-hero__copy">
          <span className="eyebrow">Impressão 3D · produção sob demanda</span>
          <h1 id="hero-title">Ideias digitais.<br /><em>Objetos reais.</em></h1>
          <p>A Alvora Lab transforma fabricação digital em produtos úteis, decorativos e personalizáveis para pessoas e negócios.</p>
          <div className="brand-hero__actions"><Link className="button button--primary" href="/catalogo">Ver catálogo <ArrowIcon /></Link><Link className="button button--secondary" href="/personalizados">Quero algo personalizado <ArrowIcon diagonal /></Link></div>
          <div className="hero-proof"><span>Produtos prontos</span><i /><span>Projetos personalizados</span><i /><span>Soluções para empresas</span></div>
        </div>
        <BrandHeroMark />
      </section>

      <section className="journey-section" aria-labelledby="journey-title">
        <div className="section-kicker"><span>Escolha seu caminho</span><span>01 — 02</span></div>
        <div className="journey-section__heading"><h2 id="journey-title">Você pode encontrar uma peça pronta ou começar algo do zero.</h2><p>Veja a disponibilidade das peças ou descreva o projeto que deseja criar.</p></div>
        <div className="journey-grid">
          <Link href="/catalogo" className="journey-card"><span>01</span><div><h3>Produtos prontos</h3><p>Explore peças organizadas por categoria, veja detalhes e siga para o canal de compra quando disponível.</p></div><ArrowIcon diagonal /></Link>
          <Link href="/personalizados" className="journey-card journey-card--accent"><span>02</span><div><h3>Projetos personalizados</h3><p>Descreva sua ideia, referência ou necessidade. Todo projeto passa por avaliação antes da produção.</p></div><ArrowIcon diagonal /></Link>
        </div>
      </section>

      <section className="category-section" aria-labelledby="categories-title">
        <div className="section-kicker"><span>O que fazemos</span><span>04 frentes</span></div>
        <div className="category-section__heading"><h2 id="categories-title">Produtos para usar, organizar, decorar e adaptar.</h2><p>O catálogo pode crescer sem prender a Alvora a um único tipo de peça.</p></div>
        <div className="category-grid">{categories.map((item) => <Link key={item.title} href={item.href} className="category-card"><span>{item.number}</span><h3>{item.title}</h3><p>{item.text}</p><strong>Explorar <ArrowIcon diagonal /></strong></Link>)}</div>
      </section>

      <ProductCarousel products={featuredProducts} />

      <section className="use-section" aria-labelledby="use-title">
        <div className="use-section__media"><Image src="/images/cable-organizer.png" alt="Produto de impressão 3D aplicado a organização" width={1536} height={1024} sizes="(max-width: 700px) 100vw, 50vw" loading="lazy" /></div>
        <div className="use-section__copy"><span className="eyebrow">Produto em contexto</span><h2 id="use-title">Feito para fazer parte do seu espaço.</h2><p>Uma boa peça não termina na impressão. Ela precisa funcionar no ambiente, resolver uma necessidade e manter sua forma, acabamento e propósito claros.</p><Link className="text-link" href="/catalogo">Ver aplicações no catálogo <ArrowIcon /></Link></div>
      </section>

      <section className="custom-section" id="personalizados" aria-labelledby="custom-title">
        <div className="custom-section__intro"><span className="eyebrow">Personalizados</span><h2 id="custom-title">Tem uma ideia?<br />Vamos avaliar como ela pode ganhar forma.</h2><p>Descreva a necessidade ou referência. A Alvora Lab avalia geometria, uso, medidas, material e viabilidade antes de seguir.</p><Link className="button button--light" href="/personalizados#orcamento">Descrever projeto <ArrowIcon /></Link></div>
        <ol className="process-list"><li><span>01</span><div><strong>Descreva sua ideia</strong><p>Explique o que precisa e indique referências.</p></div></li><li><span>02</span><div><strong>Avaliamos</strong><p>Verificamos viabilidade, aplicação e detalhes necessários.</p></div></li><li><span>03</span><div><strong>Definimos</strong><p>Alinhamos características e orçamento antes da produção.</p></div></li><li><span>04</span><div><strong>Produzimos</strong><p>A peça segue para fabricação após aprovação.</p></div></li></ol>
      </section>

      <section className="production-section" aria-labelledby="production-title">
        <div className="production-section__copy"><span className="eyebrow">Como fazemos</span><h2 id="production-title">Fabricação digital com atenção ao objeto final.</h2><p>A tecnologia é o meio. O resultado precisa ser uma peça coerente com o uso, com boa leitura de forma e acabamento adequado ao projeto.</p></div>
        <div className="production-points"><article><span>01</span><h3>Produção própria</h3><p>Peças produzidas em impressão 3D dentro do fluxo da Alvora Lab.</p></article><article><span>02</span><h3>Sob demanda</h3><p>A produção pode ser organizada conforme pedidos e necessidades aprovadas.</p></article><article><span>03</span><h3>Avaliação de projeto</h3><p>Personalizações são tratadas como projeto, não como promessa automática.</p></article></div>
      </section>

      <section className="business-band" id="empresas" aria-labelledby="business-title"><div><span className="eyebrow">Para empresas</span><h2 id="business-title">Sua marca também pode ganhar forma.</h2><p>Displays, organização, comunicação física, objetos personalizados e pequenas demandas podem ser avaliados para negócios e profissionais.</p></div><Link className="button button--light" href="/empresas">Conhecer soluções <ArrowIcon /></Link></section>

      <section className="about-section" id="sobre" aria-labelledby="about-title"><div className="about-section__product-ghost" aria-hidden="true"><Image src="/images/hero-product.png" alt="" fill sizes="(max-width: 560px) 120vw, (max-width: 860px) 92vw, 61vw" loading="lazy" /></div><div className="about-section__heading"><span className="eyebrow">Alvora Lab</span><h2 id="about-title">Uma pequena fábrica digital para ideias úteis.</h2><p>A Alvora Lab nasce na interseção entre fabricação, experimentação e produto.</p></div><div className="about-section__body"><p>Nosso objetivo é transformar necessidades e referências em objetos físicos que façam sentido no uso real — seja uma peça pronta do catálogo, uma personalização ou uma solução para um negócio.</p><p>O site apresenta peças e conceitos, informa a disponibilidade de cada um e abre caminho para projetos personalizados.</p><Link href="/sobre" className="text-link">Conheça a Alvora Lab <ArrowIcon /></Link></div></section>

      <section className="faq-section" aria-labelledby="faq-title"><div className="faq-section__heading"><span className="eyebrow">Dúvidas frequentes</span><h2 id="faq-title">Antes de pedir, vale saber.</h2></div><div className="faq-list">{faq.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></section>

      <section className="final-cta" aria-label="Próximos passos"><div><span>Quero encontrar um produto</span><h2>Explore o catálogo da Alvora Lab.</h2><Link className="button button--primary" href="/catalogo">Ver catálogo <ArrowIcon /></Link></div><div><span>Tenho uma ideia</span><h2>Conte o que você precisa criar.</h2><Link className="button button--secondary" href="/personalizados#orcamento">Descrever projeto <ArrowIcon diagonal /></Link></div></section>
    </main>
    <SiteFooter />
  </>;
}
