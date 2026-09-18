---
name: Alvora Lab
description: Laboratório de objetos — interface tecnológica, clara e precisa para produtos de impressão 3D.
colors:
  brand-light: "#163bff"
  brand-hover-light: "#0818b7"
  brand-dark: "#6379ff"
  action-dark: "#3654ff"
  action-hover-dark: "#2e49db"
  brand-soft: "#8697ff"
  paper-light: "#f7f8fc"
  surface-light: "#ffffff"
  surface-soft-light: "#f0f1f8"
  ink-light: "#353b51"
  ink-strong-light: "#202438"
  muted-light: "#646b81"
  line-light: "#d8dbe5"
  paper-dark: "#080b18"
  surface-dark: "#11162e"
  surface-soft-dark: "#171c36"
  ink-dark: "#edf0fb"
  muted-dark: "#b7bfd4"
  line-dark: "#303958"
  image-bed-dark: "#f4f5f9"
  accent-wash-light: "#e9efff"
  accent-wash-dark: "#1c254c"
typography:
  display:
    fontFamily: "Rambla, Arial, sans-serif"
    fontSize: "clamp(64px, 6.7vw, 104px)"
    fontWeight: 700
    lineHeight: 0.91
    letterSpacing: "-0.05em"
  headline:
    fontFamily: "Rambla, Arial, sans-serif"
    fontSize: "clamp(46px, 5vw, 76px)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Rambla, Arial, sans-serif"
    fontSize: "30px"
    fontWeight: 700
    lineHeight: 1.05
  body:
    fontFamily: "Rambla, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Rambla, Arial, sans-serif"
    fontSize: "12px"
    fontWeight: 700
    letterSpacing: "0.17em"
rounded:
  slide: "2px"
  compact-control: "6px"
  control: "7px"
  pill: "999px"
components:
  button-primary-light:
    backgroundColor: "{colors.brand-light}"
    textColor: "{colors.surface-light}"
    rounded: "{rounded.control}"
    padding: "13px 21px"
    height: "54px"
  button-primary-dark:
    backgroundColor: "{colors.action-dark}"
    textColor: "{colors.surface-light}"
    rounded: "{rounded.control}"
    padding: "13px 21px"
    height: "54px"
  button-secondary-light:
    backgroundColor: "transparent"
    textColor: "{colors.ink-strong-light}"
    rounded: "{rounded.control}"
    padding: "13px 21px"
    height: "54px"
  button-secondary-dark:
    backgroundColor: "transparent"
    textColor: "{colors.ink-dark}"
    rounded: "{rounded.control}"
    padding: "13px 21px"
    height: "54px"
  search-field-light:
    backgroundColor: "{colors.surface-soft-light}"
    textColor: "{colors.ink-light}"
    rounded: "{rounded.control}"
    height: "48px"
  search-field-dark:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.ink-dark}"
    rounded: "{rounded.control}"
    height: "48px"
  filter-active-light:
    backgroundColor: "{colors.accent-wash-light}"
    rounded: "{rounded.pill}"
    padding: "9px 13px"
  filter-active-dark:
    backgroundColor: "{colors.accent-wash-dark}"
    rounded: "{rounded.pill}"
    padding: "9px 13px"
---

# Design System: Alvora Lab

## Overview

**Creative North Star: “Laboratório de objetos”.** A interface apresenta fabricação digital com precisão e proximidade: peças reais e conceitos ocupam o centro, enquanto tipografia forte, linhas finas e o azul elétrico orientam a leitura. O tom é tecnológico, claro e preciso. Controles devem parecer precisos e táteis.

O sistema tem temas claro e escuro equivalentes. O tema segue a preferência do sistema na primeira visita e pode ser alterado e salvo pelo usuário. Seções alternam superfícies claras, painéis azul escuro e imagens em leitos neutros. O palco tridimensional e a abertura animada pertencem à landing page; não são moldes para todas as páginas.

**Key Characteristics:**
- Imagem de produto em primeiro plano, com metadados curtos e objetivos.
- Azul elétrico para ação, seleção, foco e progresso.
- Superfícies retangulares separadas por tom e borda; controles suavemente arredondados.
- Movimento ligado a navegação e resposta de interação, com alternativa para movimento reduzido.

## Colors

### Primary
- **Azul elétrico:** `brand-light` e `brand-dark` são os valores de `--brand` nos dois temas. Use-os em ações, links, metadados ativos, foco e indicadores. A ação principal do tema escuro usa `action-dark`, com `action-hover-dark` no hover.
- **Azul de apoio:** `brand-soft` marca detalhes sobre fundos escuros e o contorno de foco.

### Neutral
- **Claro:** `paper-light` é o fundo geral; `surface-light` e `surface-soft-light` organizam cartões, campos e seções. `ink-light`, `ink-strong-light` e `muted-light` separam texto corrente, títulos e apoio. `line-light` define as divisões.
- **Escuro:** `paper-dark`, `surface-dark` e `surface-soft-dark` preservam a mesma ordem de camadas. `ink-dark`, `muted-dark` e `line-dark` mantêm leitura e separação. Fotos de produto permanecem sobre `image-bed-dark` para preservar sua legibilidade.
- **Seleção:** `accent-wash-light` e `accent-wash-dark` formam áreas suaves para filtros ativos e avisos, acompanhadas por borda e texto de contraste próprios do tema.

**The One Accent Rule.** Reserve o azul forte para ações e estados; a cor das peças deve continuar sendo percebida como conteúdo.

## Typography

**Display Font:** Rambla, com Arial e sans-serif como alternativas. Os pesos regular e bold são carregados localmente.

**Character:** Uma única família de desenho compacto sustenta títulos grandes e texto funcional. A mudança de escala, peso e espaçamento cria a hierarquia.

### Hierarchy
- **Display:** bold, linha apertada e letras próximas para a afirmação principal da landing page.
- **Headline:** bold para títulos de seções, catálogo e páginas de serviço; quebre linhas pelo sentido da frase.
- **Title:** bold para cartões e grupos de conteúdo.
- **Body:** regular para explicações, descrições e formulários; textos introdutórios ampliam a escala sem trocar de família.
- **Label:** bold, caixa alta e espaçamento aberto para sobrancelhas e índices; metadados de produto usam uma versão menor e mais discreta.

## Layout

As páginas combinam faixas de largura total com conteúdo alinhado por margens fluidas (`clamp(25px, 7vw, 120px)` nas seções principais). A landing page alterna composições em duas colunas, grades de cartões e faixas de ação. Catálogo e produto usam, respectivamente, grade de três colunas e divisão entre galeria e informação no desktop.

A navegação de texto cede lugar ao menu móvel abaixo de 1050px. Grades e formulários reduzem colunas progressivamente; até 700px, catálogo, detalhe, serviços e blocos da landing page passam a uma coluna. O carrossel mantém um cartão principal com parte do próximo visível, usa largura responsiva por slide e reduz seus controles a duas linhas em telas estreitas. Não há escala global de espaçamento: preserve os alinhamentos de cada seção antes de criar novos valores.

## Elevation & Depth

Camadas de cor e bordas finas constroem a profundidade em repouso. Sombra aparece sobretudo em hover de cartões e controles, além do destaque já presente na ação principal e no menu móvel. A linguagem futura deve privilegiar camadas e bordas, com sombra como resposta à interação.

### Shadow Vocabulary
- **Cartão em interação:** `var(--shadow)` corresponde a `0 18px 50px rgba(53,59,81,.10)` no tema claro e `0 22px 58px rgba(0,0,0,.32)` no escuro.
- **Ação principal clara:** `0 10px 25px rgba(22,59,255,.20)` identifica o botão principal em repouso.
- **Menu móvel:** `-20px 30px 70px rgba(0,0,0,.18)` separa o painel aberto da página.

**The Layer First Rule.** Comece com contraste tonal e borda; use elevação para indicar ação ou sobreposição.

## Shapes

Cartões, grades e grandes painéis são quase retangulares. Slides usam a curvatura mínima `slide`; botões, campos e avisos usam `control` ou `compact-control`; filtros, botões circulares e o seletor de tema usam `pill`. Fotos são contidas em áreas retangulares para que a forma da peça, e não a moldura, seja o destaque.

## Components

### Buttons
- **Primary:** altura mínima `button-primary-light.height`, texto bold, azul elétrico e seta direcional. No tema escuro, aplica-se a variante `button-primary-dark`.
- **Secondary:** transparente, borda visível e texto de alto contraste. Hover troca cor da borda e do texto; a seta se desloca discretamente.
- **Focus / disabled:** foco visível com contorno de 3px e afastamento de 4px. Desabilitado usa cinza e não recebe deslocamento no hover.

### Chips

Filtros do catálogo são pílulas com borda. O ativo usa uma lavagem azul distinta em cada tema, com texto e borda reforçados; o inativo conserva a superfície neutra. Estados não dependem apenas da cor: rótulo e forma permanecem legíveis.

### Cards / Containers

Cartões de jornada, categoria e catálogo têm borda fina, imagem ou título dominante e número/metadados em azul. Em dispositivos com hover, sobem levemente, recebem sombra e mostram um traço inferior de 2px. Cartões do catálogo exibem a imagem inteira em proporção 4:3; os da vitrine usam imagem 16:10 no desktop e 4:3 no celular, com faixa de informações abaixo.

### Inputs / Fields

Busca, campos e área de texto usam fundo tonal, borda de 1px e cantos suaves. Foco destaca a borda azul; formulário adiciona halo discreto. Erros recebem fundo, borda e texto próprios em cada tema, acompanhados de mensagem. Feedback informativo e de sucesso também tem tratamento semântico separado.

### Navigation

Cabeçalho fixo com marca à esquerda, links e ações à direita. O seletor de tema mostra sol e lua no mesmo controle, com posição do indicador indicando o estado. Em telas menores, um painel lateral reúne os destinos e a ação de orçamento. Links e botões mantêm foco visível por teclado.

### Featured product carousel

O carrossel exibe todas as peças em destaque em uma faixa horizontal finita. Arrasto, swipe, setas e teclado oferecem navegação manual e pausam a exposição até o usuário reativá-la. A exposição automática dá quatro segundos para cada etapa, avança apenas enquanto a seção está visível e sem hover, foco ou toque e inverte a direção nas extremidades. Contador e linha de progresso acompanham os pontos de parada disponíveis para a largura atual. Cartões permanecem visíveis mesmo fora da área corrente; a preferência por movimento reduzido inicia a exposição pausada e remove a transição da linha.

## Do's and Don'ts

### Do:
- **Do** manter a imagem da peça maior que seus metadados e colocá-la sobre um fundo que preserve sua leitura nos dois temas.
- **Do** usar o azul elétrico para ações, foco e progresso, com estados de texto e borda legíveis.
- **Do** manter comportamento, contraste e mensagens equivalentes nos temas claro e escuro.
- **Do** dar significado a movimento por meio de uma mudança de estado perceptível e respeitar movimento reduzido.

### Don't:
- **Don't** transformar a composição exata do hero ou seu palco tridimensional em um padrão obrigatório para novas páginas.
- **Don't** esconder slides do carrossel atrás de efeitos de entrada por rolagem.
- **Don't** usar sombra permanente como única forma de separar cartões comuns.
- **Don't** tratar peças marcadas como conceito visualmente como itens já disponíveis para compra.
