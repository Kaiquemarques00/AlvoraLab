import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/site-header";
import { ArrowIcon } from "@/components/arrow-icon";
import { contact } from "@/lib/contact";

export const metadata: Metadata = { title: "Contato", description: "Entre em contato com a Alvora Lab." };

export default function ContactPage() {
  return <><SiteHeader /><main className="contact-page"><section className="service-hero"><span className="eyebrow">Contato</span><h1>Escolha por onde começar.</h1><p>Veja os produtos no catálogo ou abra o formulário para descrever uma personalização ou demanda da sua empresa.</p></section><section className="contact-grid"><Link href="/catalogo"><span>01</span><h2>Catálogo</h2><p>Veja cada peça e confira se há compra disponível.</p><strong>Ver catálogo <ArrowIcon diagonal /></strong></Link><Link href="/personalizados"><span>02</span><h2>Personalizados</h2><p>Descreva a ideia ou a peça que deseja adaptar.</p><strong>Ver formulário <ArrowIcon diagonal /></strong></Link><Link href="/empresas"><span>03</span><h2>Empresas</h2><p>Descreva a necessidade do seu negócio.</p><strong>Ver formulário <ArrowIcon diagonal /></strong></Link></section><section className="direct-contact"><h2>Canais diretos</h2><div><span>Instagram</span>{contact.instagramUrl ? <a href={contact.instagramUrl}>Visitar perfil</a> : <strong>@alvoralab_</strong>}</div><div><span>WhatsApp</span><strong>{contact.whatsappNumber ? "Disponível" : "Ainda não disponível"}</strong></div><div><span>E-mail</span><strong>{contact.email || "Ainda não disponível"}</strong></div></section></main><SiteFooter /></>;
}
