# ALVORA LAB — WEBSITE PROJECT BRIEF & CONTENT ARCHITECTURE

**Status:** Initial project source of truth  
**Project:** Alvora Lab website  
**Project type:** Brand Site + Product Catalog + Lead Generation / Custom Orders  
**Primary language:** PT-BR  
**Version:** 1.0  

---

# 0. PURPOSE OF THIS DOCUMENT

This document defines the project-specific direction for the Alvora Lab website.

It should be used together with:

- `UNIVERSAL_ADAPTIVE_DESIGN_SYSTEM.md`
- `HYPER_MASTER_v4.txt`
- `PROMPT_ENTRADA_TEMATICA_ADAPTATIVA.md`
- `ENTRADA_TEMATICA_SINCRONIZADA_COM_CARREGAMENTO_3D.md`

These supporting documents define reusable design, motion, UX, engineering, accessibility and performance principles.

**This document defines what the Alvora Lab website is, what it must communicate, what pages it needs, what each page must contain and what business actions it must support.**

When a generic framework conflicts with an approved decision in this document, prefer the latest approved Alvora Lab requirement.

Do not invent products, prices, testimonials, delivery promises, production capacity, certifications, business claims or features that are not supplied by the project owner.

---

# 1. PROJECT SUMMARY

Alvora Lab is a small 3D-printing business focused on physical products produced through additive manufacturing.

The website should not behave primarily as a traditional institutional page and should not initially attempt to replace the marketplace checkout operation.

It should function as:

1. a **brand presentation**;
2. a **visual product catalog**;
3. a **discovery layer for available products**;
4. a **trust-building layer for Alvora Lab**;
5. a **conversion path to marketplace purchases for ready products**;
6. a **lead-generation path for custom projects**;
7. a **lead-generation path for companies / B2B requests**.

The website must clearly distinguish two customer journeys:

### Ready product journey

`Discover → Understand → Trust → View product → Buy`

### Custom project journey

`Discover capability → Understand possibilities → Submit idea/reference → Request quote`

These journeys should coexist without being visually or functionally confused.

---

# 2. PROJECT CLASSIFICATION

Use a hybrid classification.

## Primary mode — BRAND_SITE

Priorities:

**identity → storytelling → proof → conversion**

The website must establish Alvora Lab as a real, coherent and trustworthy brand rather than merely a collection of marketplace listings.

## Secondary mode — ECOMMERCE / CATALOG

Priorities:

**desire → understanding → trust → comparison → action**

The current website is a catalog-first commerce layer, not necessarily a complete native checkout.

## Secondary mode — SERVICE / LEAD GENERATION

Relevant for:

- custom products;
- personalized pieces;
- small business solutions;
- B2B production;
- quote requests.

---

# 3. WEBSITE GOALS

## 3.1 Primary goal

Present Alvora Lab professionally and convert visitor interest into one of two meaningful actions:

- viewing / purchasing an existing product;
- requesting a custom project or quote.

## 3.2 Primary conversions

### Conversion A — Ready product

**Open product → understand product → click "Comprar na Shopee" or approved marketplace destination**

### Conversion B — Custom request

**Understand personalization capability → click "Solicitar orçamento" → submit request**

## 3.3 Secondary conversions

- browse the catalog;
- visit a category;
- contact via WhatsApp;
- visit Instagram;
- understand how products are made;
- submit a B2B inquiry.

## 3.4 Non-goals for the first version

Unless explicitly approved later, the first version should NOT require:

- proprietary checkout;
- shopping cart;
- payment processing;
- shipping calculation;
- customer accounts;
- order tracking;
- complex inventory management;
- marketplace synchronization;
- customer reviews imported without a reliable source;
- fake urgency or artificial scarcity.

---

# 4. TARGET AUDIENCE

Do not treat all visitors as one homogeneous audience.

## 4.1 Consumer looking for a ready product

Needs:

- clear product use;
- good photography;
- dimensions;
- color / variant information;
- price when supplied;
- material;
- expected production / dispatch information when supplied;
- buying destination;
- confidence in product quality.

## 4.2 Consumer looking for personalization

Needs:

- examples;
- clear explanation of what can be customized;
- understandable process;
- easy way to send references;
- clear expectations about quote evaluation.

## 4.3 Small business / professional customer

Possible contexts:

- counter displays;
- QR / Pix / NFC-related physical displays;
- organization;
- branded objects;
- signage;
- custom practical pieces;
- small production runs.

Needs:

- professional presentation;
- ability to describe quantity;
- dimensions;
- use case;
- deadline;
- branding or visual reference;
- direct quote request.

---

# 5. BRAND EXPERIENCE THESIS

The website should make the visitor feel that Alvora Lab **transforms digital ideas into useful physical objects**.

The visual identity should communicate a balance of:

- precision;
- creativity;
- utility;
- modern fabrication;
- approachable customization;
- product quality.

Avoid making the brand feel like:

- a generic technology startup;
- an industrial engineering corporation;
- a futuristic AI website;
- a hobbyist STL repository;
- a cluttered marketplace storefront;
- a generic dropshipping store.

The website should feel like a **small contemporary fabrication studio / product lab**.

---

# 6. EXPERIENCE AMBITION

Target:

**Level 3 — Branded**, with selective **Level 4 — Interactive** moments.

The experience may contain:

- refined transitions;
- material-inspired motion;
- product-focused interactions;
- subtle dimensionality;
- one signature interaction.

Do not make every section experimental.

3D/WebGL is optional and must only be used when it materially improves:

- product understanding;
- brand storytelling;
- memorability;
- spatial/product presentation.

A high-quality photographic and editorial experience is preferable to gratuitous WebGL.

---

# 7. VISUAL METAPHOR

Primary conceptual territory:

**Digital → Layer → Object → Use**

Potential visual language:

- layers being deposited;
- contours;
- sliced geometry;
- progressive construction;
- extrusion paths;
- dimensional transformation;
- material surfaces;
- precision grids used subtly;
- object emerging from a plane.

Do NOT default to:

- random particles;
- glowing sci-fi grids;
- generic wireframes;
- neon cyberpunk aesthetics;
- floating chrome spheres;
- excessive glassmorphism.

The fabrication metaphor should remain understandable and visually restrained.

---

# 8. SIGNATURE EXPERIENCE

The project should have one recognizable interaction tied to additive manufacturing.

Recommended concept:

## "Layer by Layer"

A product or abstract brand object appears to be progressively constructed through a small number of horizontal layers / slices, then resolves into its final visual state.

Possible uses:

- first-session thematic entrance;
- hero transition;
- hover / selected product transition;
- section-to-section motif.

This should be a controlled brand gesture, not a constant effect.

Alternative concepts may be proposed during Creative Direction, but they must remain recognizably connected to the physical act of 3D printing.

---

# 9. THEMATIC ENTRY

The thematic entry must be designed specifically for Alvora Lab.

## 9.1 Concept direction

Suggested metaphor:

`3D PRINTING → LAYER DEPOSITION → OBJECT FORMATION → SCREEN REVEAL → HERO`

Possible storyboard:

1. clean background / brand surface;
2. one thin horizontal layer appears;
3. a few additional layers rapidly accumulate;
4. the geometry becomes a simplified physical object / brand form;
5. the final layer aligns with the hero composition;
6. overlay opens / dissolves and the hero is already ready.

## 9.2 Experience constraints

- approximately 1.2–2.0 seconds for the actual opening motion;
- first visit per session only;
- do not repeat during internal navigation;
- support `prefers-reduced-motion`;
- no focus trap;
- no dependency on a heavy video;
- mobile composition must be art-directed separately;
- use safe timeout behavior;
- hero must remain usable if the entry is skipped.

## 9.3 If 3D/WebGL is used in the hero

Use the synchronized loading architecture defined by the project's 3D-loading instructions.

The overlay may remain in a restrained `waiting` state while the 3D scene warms up.

Required conceptual states:

- `hidden`
- `waiting`
- `opening`

The page must never trap the visitor because WebGL failed.

---

# 10. INFORMATION ARCHITECTURE

Initial routes:

```text
/
├── /catalogo
│   ├── ?categoria=organizacao
│   ├── ?categoria=casa-decoracao
│   ├── ?categoria=personalizados
│   └── ?categoria=negocios
│
├── /produto/[slug]
│
├── /personalizados
│
├── /empresas
│
├── /sobre
│
└── /contato
```

Optional future routes:

```text
/projetos
/faq
/politica-de-privacidade
/termos
```

Do not create routes simply to make the site feel larger.

---

# 11. GLOBAL NAVIGATION

Recommended primary navigation:

- Início
- Catálogo
- Personalizados
- Para Empresas
- Sobre

Primary persistent CTA:

**Solicitar orçamento**

Contextual commerce CTA may be:

**Ver catálogo**

or, inside product contexts:

**Comprar na Shopee**

On mobile:

- preserve immediate access to catalog;
- preserve immediate access to quote request;
- do not bury both primary journeys behind unnecessary interaction.

---

# 12. HOME PAGE — EXPERIENCE ARCHITECTURE

The homepage should not feel like a stack of unrelated marketing sections.

Think in scenes.

---

## SCENE 01 — ENTRY / HERO

### User question

**"O que é a Alvora Lab e o que eu encontro aqui?"**

### Purpose

Explain the business in seconds.

### Core message

Alvora Lab creates useful, decorative and personalized physical products through 3D printing.

### Recommended headline direction

**Ideias digitais. Objetos reais.**

Alternative copy may be explored, but it should remain simple, concrete and product-centered.

### Supporting copy direction

Communicate:

- 3D-printed products;
- own / local production where accurate;
- ready products + custom possibilities.

### Primary CTA

**Ver catálogo**

### Secondary CTA

**Quero algo personalizado**

### Dominant visual

Real Alvora Lab products, high-quality product photography, or an approved product-focused 3D composition.

Avoid a generic 3D printer stock image as the main hero.

---

## SCENE 02 — TWO PATHS

### User question

**"Estou procurando algo pronto ou posso pedir algo meu?"**

Present two explicit routes.

### Route A

**Produtos prontos**

Short explanation.

CTA:

**Explorar catálogo**

### Route B

**Projetos personalizados**

Short explanation.

CTA:

**Criar algo comigo**

The visual distinction should make the two funnels immediately understandable.

---

## SCENE 03 — CATEGORIES

### User question

**"Que tipo de produto vocês fazem?"**

Initial category model:

### Organização

Products that organize spaces, cables, controls, desks and everyday objects.

### Casa & Decoração

Decorative, ambient and functional objects for home.

### Personalizados

Objects adapted by name, color, dimension or approved customization.

### Negócios

Physical solutions for professionals and small businesses.

Categories must remain data-driven and editable. Do not hard-code category assumptions into visual components where avoidable.

---

## SCENE 04 — FEATURED PRODUCTS

### User question

**"O que vale a pena eu ver primeiro?"**

Show approximately 4–8 curated products.

Each card should prioritize:

1. image;
2. product name;
3. concise use / benefit;
4. price only when supplied and current;
5. variant hint where relevant;
6. action.

Primary action:

**Ver produto**

Avoid overloading cards with technical information.

---

## SCENE 05 — PRODUCT IN CONTEXT

### User question

**"Como essas peças fazem parte da vida real?"**

Purpose:

Move from isolated product photography into real use.

Examples:

- remote organizer being used;
- cable organizer on a desk;
- lamp in a real environment;
- QR display at a counter;
- phone stand in use.

Direction:

- natural;
- clean;
- believable;
- product remains the protagonist;
- avoid AI-looking staging;
- avoid clutter.

Suggested message territory:

**Feito para fazer parte do seu espaço.**

---

## SCENE 06 — PERSONALIZATION

### User question

**"Vocês conseguem fazer algo para mim?"**

Message:

The customer can submit an idea, reference or need for evaluation.

Suggested process:

`Ideia → Avaliação → Produção → Entrega`

CTA:

**Solicitar projeto personalizado**

Do not promise every idea is feasible.

---

## SCENE 07 — HOW IT IS MADE

### User question

**"Isso é realmente produzido por vocês?"**

Use real production imagery where available.

Possible proof points, only when accurate:

- produced with 3D printing;
- produced on demand;
- material selection;
- finishing / inspection;
- internal production workflow.

This section should build trust without becoming a technical lecture about FDM.

---

## SCENE 08 — BUSINESS / B2B

### User question

**"Vocês produzem para empresas ou em quantidade?"**

Present examples of possible business use without promising capabilities not confirmed.

Potential contexts:

- displays;
- organization;
- signage;
- branded objects;
- customized desk/counter items;
- small batches.

CTA:

**Solicitar orçamento para empresa**

---

## SCENE 09 — BRAND / ABOUT

### User question

**"Quem está por trás disso?"**

Keep concise.

Communicate:

- what Alvora Lab exists to do;
- fabrication / creation mindset;
- why customization and physical utility matter.

Do not use a long founder story unless there is a meaningful story to tell.

---

## SCENE 10 — FAQ

Recommended subjects:

- Vocês fazem produtos personalizados?
- Posso escolher outra cor?
- É possível alterar medidas?
- Qual material é utilizado?
- Como funciona o prazo de produção?
- Vocês produzem em quantidade?
- Vocês enviam para todo o Brasil?
- Onde compro os produtos?
- Posso enviar uma foto, desenho ou referência?
- Como funciona o orçamento?

Answers must use real approved operational information.

---

## SCENE 11 — FINAL CONVERSION

Two closing actions.

### Ready product

**Encontre seu próximo produto**

CTA:

**Explorar catálogo**

### Custom project

**Tem uma ideia? Vamos avaliar.**

CTA:

**Solicitar orçamento**

---

# 13. CATALOG PAGE

Route:

`/catalogo`

## Purpose

Allow fast discovery without imitating the visual density of a marketplace.

## Required functionality

- category filtering;
- optional search when catalog size justifies it;
- product cards;
- responsive grid;
- useful empty state;
- clear reset of filters.

## Product card anatomy

```text
Product image
Category / optional badge
Product name
Short functional description
Price / "a partir de" only when accurate
Available color hint when useful
CTA: Ver produto
```

## Initial filters

- Todos
- Organização
- Casa & Decoração
- Personalizados
- Negócios

Filters should come from product data rather than duplicated component logic.

## Future filters only when justified

- color;
- environment;
- use;
- price range;
- customizable;
- availability.

Do not create filters with insufficient product volume.

---

# 14. PRODUCT DETAIL PAGE

Route:

`/produto/[slug]`

Every product page should answer:

1. What is it?
2. What problem / use does it address?
3. What does it look like?
4. What are its dimensions?
5. What material is used?
6. Which colors / variants exist?
7. Is it customizable?
8. What does it cost?
9. What is included?
10. Where / how can I buy it?
11. Can I trust the product and seller?

## Suggested layout

### Above the fold

Left / dominant area:

- gallery;
- real product photography;
- detail images;
- in-use image;
- dimensions image when available.

Right / info area:

- category;
- product name;
- concise value statement;
- price if current;
- color / variant options;
- key specs;
- CTA: **Comprar na Shopee**
- secondary CTA when applicable: **Quero personalizar**

### Additional sections

- product story / use;
- benefits;
- specifications;
- dimensions;
- material;
- care / limitations when needed;
- content of package;
- production / delivery information when approved;
- FAQ specific to product;
- related products.

## Product data model

Suggested minimum:

```ts
type Product = {
  id: string
  slug: string
  name: string
  category: string
  shortDescription: string
  description: string

  images: {
    src: string
    alt: string
    type?: "main" | "detail" | "usage" | "dimensions" | "package"
  }[]

  price?: number
  priceLabel?: string

  material?: string

  dimensions?: {
    width?: number
    height?: number
    depth?: number
    unit: "mm"
  }

  weightGrams?: number

  colors?: {
    name: string
    value?: string
    image?: string
  }[]

  customizable?: boolean

  marketplace?: {
    provider: "shopee" | "mercado-livre" | "other"
    url: string
  }[]

  features?: string[]
  packageContents?: string[]
  faq?: {
    question: string
    answer: string
  }[]

  status?: "available" | "made-to-order" | "unavailable"
}
```

Do not let frontend copy become the only database of product facts.

---

# 15. PERSONALIZED PROJECT PAGE

Route:

`/personalizados`

## Purpose

Convert an abstract idea into a structured lead.

## Page narrative

### 1. Hero

**Tem uma ideia? Vamos transformar em objeto.**

Explain that references and needs can be evaluated.

### 2. What can be customized

Only show confirmed possibilities, such as:

- colors;
- names;
- dimensions;
- text;
- functional adjustments;
- business identity.

Avoid saying "anything is possible".

### 3. Examples / inspiration

Use real examples when available.

### 4. Process

```text
1. Envie sua ideia
2. Avaliamos a viabilidade
3. Definimos detalhes e orçamento
4. Produzimos após aprovação
5. Enviamos / entregamos conforme condições acordadas
```

### 5. Quote form

Suggested fields:

- Nome
- WhatsApp
- E-mail — optional if business process allows
- Tipo de projeto
- Descrição
- Quantidade
- Medidas aproximadas
- Cor desejada
- Prazo desejado
- Uso / finalidade
- Upload de referência
- Consentimento / privacy acknowledgement where required

Avoid asking unnecessary information before the first contact.

### 6. Expectation setting

Explain that:

- requests are evaluated;
- feasibility depends on geometry, material, use and production constraints;
- quote request does not automatically confirm production.

---

# 16. BUSINESS PAGE

Route:

`/empresas`

## Purpose

Create a dedicated B2B conversion path.

## Suggested sections

### Hero

**Soluções físicas personalizadas para o seu negócio.**

### Possible uses

Use only approved categories.

Examples to validate:

- displays;
- signs;
- organizers;
- QR / Pix / contact holders;
- branded desk objects;
- small production runs;
- custom practical parts.

### Why Alvora Lab

Potential claims must be validated before publication.

Possible themes:

- customization;
- flexible small-batch production;
- visual prototyping;
- made-to-order production.

### Business form

Fields may include:

- Empresa
- Responsável
- WhatsApp
- E-mail
- Tipo de solução
- Quantidade estimada
- Prazo
- Description
- File / reference

---

# 17. ABOUT PAGE

Route:

`/sobre`

## Goal

Humanize the company and increase trust.

Recommended content:

- what Alvora Lab is;
- what the brand believes useful fabrication should do;
- how 3D printing enables the product model;
- behind-the-scenes production;
- real workspace / machines / materials where appropriate.

Avoid empty corporate language.

---

# 18. CONTACT PAGE

Route:

`/contato`

Provide only real active channels.

Potential channels:

- WhatsApp;
- Instagram;
- e-mail;
- Shopee store.

Do not publish unavailable support channels.

---

# 19. FOOTER

Recommended structure:

### Alvora Lab

Short one-line brand description.

### Explore

- Início
- Catálogo
- Personalizados
- Para Empresas
- Sobre

### Atendimento

- Contato
- WhatsApp
- Instagram
- Shopee

### Legal

- Política de Privacidade
- Termos, only if required / available.

Optional:

- copyright;
- business identifiers when approved.

---

# 20. CONTENT STRATEGY

## 20.1 Product-first

Products should be shown through:

- clean photography;
- contextual usage;
- macro/details;
- dimensions;
- variations;
- package contents when useful.

## 20.2 Real over synthetic

Whenever possible, prioritize real product photography.

AI-assisted visuals must not alter:

- product geometry;
- number of parts;
- dimensions;
- material appearance beyond reasonable art direction;
- functional behavior.

## 20.3 Copy principles

Use:

- direct Portuguese;
- concrete benefits;
- short headings;
- real use cases;
- explicit CTA labels.

Avoid:

- exaggerated claims;
- empty "innovation" language;
- excessive technical jargon;
- artificial urgency;
- "clique aqui";
- generic headings that say nothing.

---

# 21. IMAGE SYSTEM

Image roles:

```text
Hero image
Product main image
Product angle image
Product detail / macro image
Product usage image
Dimensions image
Package contents image
Production / behind-the-scenes image
Business application image
```

## Product photography direction

- product remains visually dominant;
- clean environment;
- realistic natural or controlled studio lighting;
- minimal visual noise;
- accurate product geometry;
- useful context;
- no unnecessary props;
- consistent visual treatment across the catalog.

For dimension graphics:

- use millimeters where appropriate;
- maintain technical clarity;
- do not obscure product shape.

---

# 22. DESIGN SYSTEM ADAPTATION

The project should use semantic tokens.

Suggested token territories:

```text
color.bg.canvas
color.bg.subtle
color.bg.elevated

color.text.primary
color.text.secondary
color.text.muted

color.brand.primary
color.brand.secondary
color.brand.accent

color.action.primary
color.action.secondary

color.border.subtle
color.border.default

surface.canvas
surface.raised
surface.floating

space.section.sm
space.section.md
space.section.lg
```

## Known brand color

Current primary Alvora Lab color:

`#5058F2`

Do not automatically flood the interface with the brand color.

Use it for:

- primary CTA;
- selected navigation;
- important highlights;
- controlled branded moments;
- focus / interaction accents when accessibility permits.

Additional palette values must be approved as part of Creative Direction.

---

# 23. TYPOGRAPHY

Typography should support:

- product readability;
- modern fabrication identity;
- approachable brand tone;
- clear numbers and dimensions.

Define at minimum:

- Display;
- H1;
- H2;
- H3;
- Body Large;
- Body;
- Body Small;
- Label;
- Caption.

Use responsive type sizing.

Avoid giant typography purely to imitate award websites.

---

# 24. COMPONENT INVENTORY

Initial components:

```text
GlobalHeader
MobileNavigation
PrimaryButton
SecondaryButton
TextLink

Hero
SectionIntro
CategoryCard
ProductCard
ProductGrid
ProductGallery
ProductVariantSelector
ProductSpecs
ProductDimensions
ProductFAQ

DualJourneyCTA
ProcessSteps
TrustPoint
ProductionGallery
BusinessUseCard

QuoteForm
BusinessQuoteForm
ContactBlock

Accordion
Badge
Breadcrumb
FilterBar
EmptyState
LoadingState
ErrorState

Footer
ThematicEntry
```

Do not create highly abstract components before repeated patterns exist.

---

# 25. INTERACTION LANGUAGE

Interactions should feel:

- precise;
- tactile;
- lightweight;
- intentional.

Possible motifs:

- layer reveal;
- mask reveal;
- subtle depth;
- object-to-detail transitions;
- small translation / scale response;
- controlled image transitions.

Avoid:

- every card floating;
- excessive parallax;
- custom cursor without purpose;
- scroll-jacking;
- random magnetic effects;
- animation that delays purchasing or contacting.

---

# 26. RESPONSIVE STRATEGY

Mobile is a separate composition problem.

Critical mobile priorities:

1. understand Alvora Lab;
2. access catalog;
3. access custom request;
4. inspect product photography;
5. access product CTA;
6. complete forms comfortably.

Product pages on mobile should keep the purchase / contact action easy to find without obscuring content.

Test:

- small mobile;
- mobile;
- large mobile;
- tablet;
- small laptop;
- desktop;
- large desktop.

---

# 27. ACCESSIBILITY

At minimum:

- keyboard navigation;
- visible focus;
- semantic heading order;
- useful alt text;
- sufficient contrast;
- form labels;
- contextual validation errors;
- touch target sizing;
- reduced motion support;
- no essential information communicated by color alone;
- no focus traps created by decorative motion;
- functional content without optional animation.

---

# 28. PERFORMANCE

The site represents physical products. Product media must not destroy the shopping experience.

Priorities:

- optimized responsive images;
- lazy loading below the fold;
- correct image dimensions;
- minimal layout shift;
- font optimization;
- restrained JavaScript;
- avoid animation libraries when CSS/native APIs are sufficient;
- defer optional heavy experiences;
- adaptive quality for WebGL if introduced;
- reliable fallback without WebGL;
- good mobile GPU behavior.

3D should never be loaded merely because the company uses 3D printers.

---

# 29. SEO

Each indexable page should define:

- unique title;
- unique meta description;
- canonical URL where applicable;
- Open Graph metadata;
- semantic H1/H2 structure;
- meaningful image alt text;
- crawlable product copy;
- structured data where accurate and appropriate.

Product pages should target human-readable product intent, not keyword stuffing.

Potential future content SEO should be evaluated only after product/catalog foundations are strong.

---

# 30. TRUST SYSTEM

Trust should come from real evidence.

Use when available:

- real product photography;
- real production photography;
- precise dimensions;
- material information;
- clear product limitations;
- real marketplace link;
- clear contact paths;
- transparent custom-order process;
- real customer proof only when genuinely available.

Do not create:

- fake reviews;
- fake sales counters;
- fake stock;
- fake countdowns;
- fake customer logos;
- unsupported guarantees.

---

# 31. CONTENT / DATA MANAGEMENT

The website should be designed so product data can evolve without redesigning components.

Recommended data separation:

```text
content/
  products/
  categories/
  faq/
  company/
```

or an equivalent CMS/data layer depending on the selected stack.

Product facts should be stored structurally.

Do not repeat dimensions, prices and material facts manually in multiple components.

---

# 32. ANALYTICS EVENTS

If analytics is introduced, recommended business events:

```text
view_catalog
select_category
view_product
click_marketplace
click_custom_product
start_quote
submit_quote
start_business_quote
submit_business_quote
click_whatsapp
click_instagram
```

Do not collect unnecessary personal data.

---

# 33. INITIAL MVP SCOPE

## P0 — Must exist

- responsive global navigation;
- homepage;
- catalog;
- product page;
- custom project page;
- quote form;
- business section or page;
- footer;
- accessibility basics;
- SEO basics;
- product data architecture;
- mobile experience;
- loading/error/empty states.

## P1 — High impact

- polished product galleries;
- category filtering;
- contextual product imagery;
- thematic first-session entry;
- related products;
- production/about imagery;
- B2B dedicated form;
- analytics events.

## P2 — Refinement

- advanced transitions;
- richer storytelling;
- interactive product details;
- optional 3D product presentation;
- enhanced category transitions.

## P3 — Future

- native checkout;
- cart;
- accounts;
- order tracking;
- inventory integration;
- marketplace API integration;
- product configurator;
- customer portal.

---

# 34. REQUIRED PROJECT STATES

Every dynamic feature should define:

- loading;
- success;
- empty;
- error;
- disabled where applicable.

Forms additionally require:

- validation;
- submitting;
- submitted;
- failed submission.

Catalog additionally requires:

- no products;
- no results after filtering;
- product unavailable / link unavailable behavior.

---

# 35. DEVELOPMENT PRINCIPLES

1. Inspect the repository before modifying it.
2. Preserve the existing stack unless a change is justified.
3. Do not introduce a framework solely for animation.
4. Reuse the project's established primitives.
5. Keep product content data-driven.
6. Separate business data from presentation components.
7. Build mobile behavior intentionally.
8. Prefer progressive enhancement.
9. Keep the site functional without optional 3D.
10. Do not introduce visual effects before information architecture works.
11. Build the purchasing and quote paths before decorative refinement.
12. Validate real content early; placeholder content can hide layout problems.

---

# 36. SOURCE-OF-TRUTH ORDER FOR THIS PROJECT

Use the following order:

1. Latest explicit instruction from the Alvora Lab project owner
2. This document once approved
3. Approved Alvora Lab Creative Direction
4. Approved UX/UI specification
5. Approved Alvora Lab Motion / 3D specification
6. Repository `AGENTS.md` / project instructions
7. Existing architecture and conventions
8. Existing implementation
9. `UNIVERSAL_ADAPTIVE_DESIGN_SYSTEM.md`
10. `HYPER_MASTER_v4.txt`
11. thematic-entry supporting documents
12. external references
13. general best practices

External references must never override Alvora Lab's approved project identity.

---

# 37. DECISIONS THAT MUST REMAIN OPEN UNTIL CONFIRMED

Do not invent these during implementation:

- final tagline;
- final secondary brand colors;
- typography family;
- final list of catalog categories;
- actual product inventory;
- actual prices;
- actual product availability;
- exact customization capabilities;
- exact production times;
- shipping promises;
- WhatsApp number;
- e-mail;
- Shopee store URL;
- Instagram URL;
- business/legal information;
- form delivery backend;
- analytics provider;
- deployment platform;
- frontend stack if not already established;
- CMS or data source;
- whether WebGL is justified;
- exact thematic-entry implementation.

These should be resolved through repository inspection or explicit project decisions.

---

# 38. DEFINITION OF SUCCESS

The first version succeeds when a new visitor can answer, with minimal effort:

- What is Alvora Lab?
- What products are available?
- What does a product do?
- What does it look like in real use?
- How large is it?
- What is it made from?
- How do I buy it?
- Can I customize it?
- Can Alvora Lab create something for my business?
- How do I request a quote?
- Is this a real production business I can trust?

And then complete the relevant action without unnecessary friction.

---

# 39. FIRST DEVELOPMENT MILESTONE

Before high-end motion or 3D, implement and validate:

```text
01. Global layout
02. Navigation
03. Home information architecture
04. Catalog data model
05. Catalog listing
06. Product detail template
07. Personalized request flow
08. Business request flow
09. Footer / contact paths
10. Responsive behavior
11. Accessibility baseline
12. SEO baseline
13. Real product content insertion
14. Conversion-path QA
```

Only after this baseline is coherent should the project move into:

```text
Creative Direction refinement
→ signature interaction
→ thematic entry
→ advanced motion
→ optional 3D
→ high-end polish
```

---

# 40. INITIAL EXPERIENCE MAP

```text
VISITOR ENTERS
      │
      ▼
UNDERSTANDS ALVORA LAB
      │
      ├─────────────────────────────┐
      │                             │
      ▼                             ▼
WANTS READY PRODUCT          WANTS CUSTOM PROJECT
      │                             │
      ▼                             ▼
CATALOG                       PERSONALIZATION
      │                             │
      ▼                             ▼
CATEGORY / DISCOVERY          POSSIBILITIES
      │                             │
      ▼                             ▼
PRODUCT DETAIL                PROCESS
      │                             │
      ▼                             ▼
TRUST / SPECS                 QUOTE FORM
      │                             │
      ▼                             ▼
BUY ON MARKETPLACE            LEAD SUBMITTED
```

Business visitors may branch directly from the homepage into:

```text
HOME
  ↓
PARA EMPRESAS
  ↓
BUSINESS USE CASES
  ↓
BUSINESS QUOTE
```

---

# END

This document should evolve only when actual Alvora Lab project decisions evolve.

Do not casually rewrite approved direction during implementation.
Refine by delta and preserve continuity.
