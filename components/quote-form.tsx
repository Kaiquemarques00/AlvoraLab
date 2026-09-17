"use client";

import { useMemo, useState } from "react";
import { contact } from "@/lib/contact";

export function QuoteForm({ business = false, initialProduct = "" }: { business?: boolean; initialProduct?: string }) {
  const [copied, setCopied] = useState(false);
  const hasWhatsApp = Boolean(contact.whatsappNumber);
  const title = business ? "Pedido para empresa" : "Projeto personalizado";
  const message = useMemo(() => `Olá, Alvora Lab! Gostaria de solicitar um orçamento de ${title.toLocaleLowerCase("pt-BR")}.`, [title]);

  async function copyFallback() {
    try { await navigator.clipboard.writeText(message); setCopied(true); window.setTimeout(() => setCopied(false), 1800); } catch { /* sem ação */ }
  }

  return <form className="quote-form" onSubmit={(event) => event.preventDefault()}>
    <div className="quote-form__grid"><label><span>Nome</span><input name="name" autoComplete="name" placeholder="Seu nome" /></label>{business ? <label><span>Empresa</span><input name="company" autoComplete="organization" placeholder="Nome da empresa" /></label> : null}<label><span>WhatsApp</span><input name="whatsapp" inputMode="tel" autoComplete="tel" placeholder="(00) 00000-0000" /></label><label><span>E-mail</span><input name="email" type="email" autoComplete="email" placeholder="voce@exemplo.com" /></label><label><span>{business ? "Quantidade estimada" : "Quantidade"}</span><input name="quantity" inputMode="numeric" placeholder="Ex.: 10 unidades" /></label><label><span>Prazo desejado</span><input name="deadline" placeholder="Ex.: até o fim do mês" /></label></div>
    {!business && initialProduct ? <label><span>Produto de referência</span><input name="product" defaultValue={initialProduct} /></label> : null}
    <label><span>{business ? "O que sua empresa precisa?" : "Conte sua ideia"}</span><textarea name="description" rows={6} placeholder={business ? "Descreva o uso, quantidade, medidas aproximadas e qualquer personalização necessária." : "Descreva a peça, o uso, medidas aproximadas, cor e o que você gostaria de adaptar."} /></label>
    <label><span>Referência</span><input name="reference" placeholder="Link para imagem, desenho, modelo ou referência" /></label>
    <p className="quote-form__notice">O envio do formulário deve ser conectado ao canal oficial antes do lançamento. A solicitação não confirma automaticamente a produção.</p>
    {hasWhatsApp ? <a className="button button--primary" href={`https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`} target="_blank" rel="noopener noreferrer">Continuar pelo WhatsApp</a> : <button className="button button--secondary" type="button" onClick={copyFallback}>{copied ? "Mensagem copiada" : "Copiar mensagem inicial"}</button>}
  </form>;
}
