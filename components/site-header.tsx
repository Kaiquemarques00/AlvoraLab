import Link from "next/link";
import { contact } from "@/lib/contact";
import { ThemeToggle } from "@/components/theme-toggle";
import { MobileMenu } from "@/components/mobile-menu";
import { ArrowIcon } from "@/components/arrow-icon";

export function SiteHeader() {
  return <header className="site-header">
    <Link href="/" className="brand" aria-label="Alvora Lab, página inicial"><img src="/alvora-mark.svg" alt="" className="brand__mark" /><span className="brand__name">ALVORA <span className="brand__lab">LAB</span></span></Link>
    <nav className="site-nav" aria-label="Navegação principal"><Link href="/catalogo">Catálogo</Link><Link href="/personalizados">Personalizados</Link><Link href="/empresas">Para empresas</Link><Link href="/sobre">Sobre</Link></nav>
    <div className="site-header__actions"><ThemeToggle /><Link className="header-quote" href="/personalizados#orcamento">Formulário de orçamento <ArrowIcon /></Link><MobileMenu /></div>
  </header>;
}

export function SiteFooter() {
  return <footer className="site-footer" id="contato">
    <div className="site-footer__top">
      <div className="site-footer__identity"><div className="site-footer__logo-spin"><img src="/alvora-lab.svg" alt="Alvora Lab" /></div><p>Ideias digitais transformadas em objetos reais, úteis e personalizáveis.</p></div>
      <div className="site-footer__column"><h2>Explore</h2><nav aria-label="Navegação do rodapé"><Link href="/">Início</Link><Link href="/catalogo">Catálogo</Link><Link href="/personalizados">Personalizados</Link><Link href="/empresas">Para empresas</Link><Link href="/sobre">Sobre</Link></nav></div>
      <div className="site-footer__column"><h2>Atendimento</h2><div className="site-footer__contacts"><div><span>E-mail</span>{contact.email ? <a href={`mailto:${contact.email}`}>{contact.email}</a> : <span>Canal em configuração</span>}</div><div><span>WhatsApp</span>{contact.whatsappNumber ? <a href={`https://wa.me/${contact.whatsappNumber}`} target="_blank" rel="noopener noreferrer">Conversar no WhatsApp</a> : <span>Canal em configuração</span>}</div><div><span>Instagram</span>{contact.instagramUrl ? <a href={contact.instagramUrl} target="_blank" rel="noopener noreferrer">Visitar perfil</a> : <span>@alvoralab_</span>}</div></div></div>
    </div>
    <div className="site-footer__bottom"><span>© {new Date().getFullYear()} Alvora Lab</span><span>Produção em impressão 3D.</span></div>
  </footer>;
}
