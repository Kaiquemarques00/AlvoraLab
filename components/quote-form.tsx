"use client";

import { useState, type FormEvent } from "react";
import { contact } from "@/lib/contact";

type Feedback = { kind: "success" | "info"; text: string } | null;

function field(data: FormData, name: string) {
  return String(data.get(name) ?? "").trim();
}

function quoteMessage(data: FormData, business: boolean) {
  const details: [string, string][] = [
    ["Nome", field(data, "name")],
    ...(business ? [["Empresa", field(data, "company")] as [string, string]] : []),
    ["WhatsApp", field(data, "whatsapp")],
    ["E-mail", field(data, "email")],
    ["Quantidade", field(data, "quantity")],
    ["Prazo desejado", field(data, "deadline")],
    ...(!business ? [["Produto de referência", field(data, "product")] as [string, string]] : []),
    ["Descrição", field(data, "description")],
    ["Referência", field(data, "reference")],
  ];

  return [
    business ? "Olá, Alvora Lab! Gostaria de um orçamento para minha empresa." : "Olá, Alvora Lab! Gostaria de um orçamento para um projeto personalizado.",
    "",
    ...details.filter(([, value]) => value).map(([label, value]) => `${label}: ${value}`),
  ].join("\n");
}

export function QuoteForm({ business = false, initialProduct = "" }: { business?: boolean; initialProduct?: string }) {
  const [feedback, setFeedback] = useState<Feedback>(null);
  const [manualCopy, setManualCopy] = useState("");
  const [contactMissing, setContactMissing] = useState(false);
  const hasWhatsApp = Boolean(contact.whatsappNumber);
  const hasEmail = Boolean(contact.email);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFeedback(null);
    setManualCopy("");

    const data = new FormData(event.currentTarget);
    for (const [name, message] of [["name", "Informe seu nome."], ["description", "Descreva o projeto."]] as const) {
      if (field(data, name)) continue;
      const input = event.currentTarget.elements.namedItem(name) as HTMLInputElement | HTMLTextAreaElement | null;
      input?.setCustomValidity(message);
      input?.reportValidity();
      input?.focus();
      return;
    }
    if (!field(data, "whatsapp") && !field(data, "email")) {
      setContactMissing(true);
      event.currentTarget.querySelector<HTMLInputElement>('input[name="whatsapp"]')?.focus();
      return;
    }
    setContactMissing(false);

    const message = quoteMessage(data, business);
    if (hasWhatsApp) {
      window.location.assign(`https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`);
      return;
    }
    if (hasEmail) {
      const subject = business ? "Orçamento para empresa" : "Orçamento de projeto personalizado";
      window.location.assign(`mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`);
      return;
    }

    setManualCopy(message);
    try {
      if (!navigator.clipboard?.writeText) throw new Error("Clipboard unavailable");
      await navigator.clipboard.writeText(message);
      setFeedback({ kind: "success", text: "Solicitação copiada. Ela não foi enviada. Guarde o texto para usar quando um canal oficial estiver disponível." });
    } catch {
      setFeedback({ kind: "info", text: "Não foi possível copiar automaticamente. Selecione e copie o texto abaixo." });
    }
  }

  return <form className="quote-form" onSubmit={handleSubmit}>
    <p className="quote-form__notice">{hasWhatsApp ? "O botão abrirá o WhatsApp com sua solicitação preenchida. Revise e envie a mensagem por lá." : hasEmail ? "O botão abrirá seu aplicativo de e-mail com a solicitação preenchida. Revise e envie por lá." : "Os canais oficiais ainda não estão disponíveis neste site. Preencha os campos para copiar sua solicitação; ela não será enviada agora."} O orçamento e a produção dependem de avaliação.</p>
    <div className="quote-form__grid">
      <label><span>Nome (obrigatório)</span><input name="name" autoComplete="name" placeholder="Seu nome" maxLength={100} required onInput={(event) => event.currentTarget.setCustomValidity("")} /></label>
      {business ? <label><span>Empresa</span><input name="company" autoComplete="organization" placeholder="Nome da empresa" maxLength={120} /></label> : null}
      <label><span>WhatsApp</span><input name="whatsapp" type="tel" autoComplete="tel" placeholder="(00) 00000-0000" maxLength={30} aria-describedby="quote-contact-hint" aria-invalid={contactMissing} onInput={() => setContactMissing(false)} /></label>
      <label><span>E-mail</span><input name="email" type="email" autoComplete="email" placeholder="voce@exemplo.com" maxLength={254} aria-describedby="quote-contact-hint" aria-invalid={contactMissing} onInput={() => setContactMissing(false)} /></label>
      <p id="quote-contact-hint" className="quote-form__contact-hint" role={contactMissing ? "alert" : undefined}>{contactMissing ? "Preencha WhatsApp ou e-mail para incluir um meio de resposta na solicitação." : "Informe WhatsApp ou e-mail para incluir um meio de resposta."}</p>
      <label><span>{business ? "Quantidade estimada" : "Quantidade"}</span><input name="quantity" inputMode="numeric" placeholder="Ex.: 10 unidades" maxLength={40} /></label>
      <label><span>Prazo desejado</span><input name="deadline" placeholder="Ex.: até o fim do mês" maxLength={100} /></label>
    </div>
    {!business && initialProduct ? <label><span>Produto de referência</span><input name="product" defaultValue={initialProduct.slice(0, 160)} maxLength={160} /></label> : null}
    <label><span>{business ? "O que sua empresa precisa? (obrigatório)" : "Conte sua ideia (obrigatório)"}</span><textarea name="description" rows={6} maxLength={3000} required onInput={(event) => event.currentTarget.setCustomValidity("")} placeholder={business ? "Descreva o uso, quantidade, medidas aproximadas e qualquer personalização necessária." : "Descreva a peça, o uso, medidas aproximadas, cor e o que você gostaria de adaptar."} /></label>
    <label><span>Referência</span><input name="reference" placeholder="Link para imagem, desenho, modelo ou referência" maxLength={500} /></label>
    {feedback ? <p className={`quote-form__feedback quote-form__feedback--${feedback.kind}`} role="status">{feedback.text}</p> : null}
    {manualCopy ? <label><span>Texto da solicitação</span><textarea readOnly value={manualCopy} rows={10} onFocus={(event) => event.currentTarget.select()} /></label> : null}
    <button className="button button--primary" type="submit">{hasWhatsApp ? "Continuar pelo WhatsApp" : hasEmail ? "Abrir e-mail" : "Copiar solicitação"}</button>
  </form>;
}
