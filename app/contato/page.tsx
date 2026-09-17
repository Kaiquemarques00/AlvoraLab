import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/site-header";
import { ArrowIcon } from "@/components/arrow-icon";
import { contact } from "@/lib/contact";

export const metadata: Metadata = { title: "Contato | Alvora Lab", description: "Entre em contato com a Alvora Lab." };

export default function ContactPage() {
  return <><SiteHeader /><main className="contact-page"><section className="service-hero"><span className="eyebrow">Contato</span><h1>Escolha o caminho mais direto.</h1><p>Para produto pronto, explore o catálogo. Para ideias, personalizações ou demandas de empresa, use o fluxo de orçamento.</p></section><section className="contact-grid"><Link href="/catalogo"><span>01</span><h2>Catálogo</h2><p>Veja os produtos e informações disponíveis.</p><strong>Explorar <ArrowIcon diagonal /></strong></Link><Link href="/personalizados"><span>02</span><h2>Personalizados</h2><p>Envie uma ideia ou referência para avaliação.</p><strong>Solicitar <ArrowIcon diagonal /></strong></Link><Link href="/empresas"><span>03</span><h2>Empresas</h2><p>Descreva uma necessidade B2B ou pequena produção.</p><strong>Conversar <ArrowIcon diagonal /></strong></Link></section><section className="direct-contact"><h2>Canais diretos</h2><div><span>Instagram</span>{contact.instagramUrl ? <a href={contact.instagramUrl}>Visitar perfil</a> : <strong>@alvoralab_</strong>}</div><div><span>WhatsApp</span><strong>{contact.whatsappNumber ? "Disponível" : "A configurar"}</strong></div><div><span>E-mail</span><strong>{contact.email || "A configurar"}</strong></div></section></main><SiteFooter /></>;
}
