---
name: Alvora Lab
description: Oficina de peças — a clear, object-led visual system for a 3D printing catalog.
colors:
  cobalt: "#2452df"
  cobalt-hover: "#173fc2"
  ink: "#202a31"
  muted: "#505d68"
  paper: "#f8fafa"
  white: "#ffffff"
  pegboard: "#dde4ea"
  panel: "#e8eef3"
  photo-bed: "#e8edf1"
  divider: "#dce2e6"
  selected-filter: "#d5e3f9"
  selected-filter-ink: "#1749d2"
  disabled-fill: "#dce2e7"
  disabled-ink: "#5b6871"
typography:
  display:
    fontFamily: "Rambla, Arial, sans-serif"
    fontSize: "clamp(58px, 5.1vw, 76px)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Rambla, Arial, sans-serif"
    fontSize: "clamp(42px, 4.5vw, 68px)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Rambla, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
  label:
    fontFamily: "Rambla, Arial, sans-serif"
    fontSize: "13px"
    fontWeight: 400
rounded:
  control: "6px"
  filter: "7px"
components:
  button-primary:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.white}"
    rounded: "{rounded.control}"
    padding: "13px 23px"
    height: "56px"
  button-primary-hover:
    backgroundColor: "{colors.cobalt-hover}"
    textColor: "{colors.white}"
  button-disabled:
    backgroundColor: "{colors.disabled-fill}"
    textColor: "{colors.disabled-ink}"
    rounded: "{rounded.control}"
  search-field:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    height: "50px"
  filter-active:
    backgroundColor: "{colors.selected-filter}"
    textColor: "{colors.selected-filter-ink}"
    rounded: "{rounded.filter}"
---

# Design System: Alvora Lab

## Overview

**Creative North Star: "Oficina de peças"**

The implemented site presents 3D printed objects as if arranged on a tidy workbench. A pale pegboard field, cool metal-like surfaces, large product imagery, and short labels give the objects room to lead. Rambla supplies a direct, sturdy voice; cobalt marks navigation and action.

The experience alternates between open catalog space and one dark explanatory section. Product cards stay visually flat, so imagery, alignment, and clear labels carry the hierarchy. The first viewport's particular left–center–right composition belongs to the home page surface brief, not every future screen.

**Key Characteristics:**
- Object-led imagery on cool, quiet backgrounds.
- Cobalt reserved for actions, selection, and directional icons.
- Precise rectangular panels with gently rounded controls.
- Compact product labels beside large, bold headings.

## Colors

### Primary
- **Cobalt:** The sole strong accent, used for the primary button, selected navigation and filters, focus outlines, and arrows. Its deeper hover color signals interaction.

### Neutral
- **Ink:** Main copy and the dark explanatory panel.
- **Paper and white:** Page and card grounds respectively.
- **Pegboard, panel, and photo bed:** Cool gray-blue layers that separate the hero, filter area, and object imagery.
- **Muted and divider:** Supporting copy and thin separators.

**The One Accent Rule.** Use cobalt to direct attention to actions and active states; let the product imagery supply other strong color.

## Typography

**Display Font:** Rambla, with Arial and sans-serif fallbacks.
**Body Font:** Rambla, with the same fallbacks. The app loads regular and bold weights locally.

**Character:** Clear, practical, and compact. Large bold headings create a strong scale change without a separate decorative typeface.

### Hierarchy
- **Display:** Bold and tightly spaced for the hero statement; the mobile treatment changes to a viewport-based size.
- **Headline:** Bold, tight, and near-single-line leading for catalog and section headings.
- **Body:** Regular for explanations and product summaries; larger lead copy is used where a section needs emphasis.
- **Label:** Small regular category and concept metadata; uppercase tracked microcopy appears only in the hero aside and brand.

## Layout

The home page follows its hero with a centered product carousel, then the company introduction and reviews. Each featured product gives its landscape image the full width of the slide, with a compact information band below for category, concept label, name, description, and detail action. Adjacent products peek into view. The catalog uses a filter sidebar beside an uneven three-column product grid; its first item spans two rows only in the unfiltered desktop view. The product detail page uses a two-column image and information split.

At 850px and below, the featured product slide narrows; at 600px its information band switches to a vertical layout while retaining adjacent previews and swipe scrolling. The catalog grid reduces to two columns and its sidebar narrows at intermediate widths. At 700px and below, the hero becomes a vertical composition, navigation condenses, the sidebar becomes a filter band above the catalog, and product details stack. These are observed breakpoints, not a generic spacing scale.

## Elevation & Depth

Cards and panels are flat. Tonal differences, dividers, image crop, and the pegboard texture create depth. The primary button alone has a soft blue shadow (`0 8px 20px rgba(19,56,140,.18)`), which distinguishes the principal action. Product imagery enlarges slightly on hover; the cards themselves do not lift.

## Shapes

Large surfaces and product cards are square-cornered. Buttons and search fields use the gently rounded control radius, while filters use a slightly larger radius. The hero object uses a gradient mask to blend into the workbench scene; product photographs are clipped cleanly inside rectangular image beds.

## Components

### Buttons

The primary action is bold, cobalt, and at least 56px tall, with a right arrow and soft shadow. Hover deepens the blue and shifts the arrow right. A disabled style exists as a gray treatment. Visible keyboard focus uses a cobalt outline with offset.

### Cards / Containers

The home carousel uses a full-width, uncropped landscape image above a short information band. Its square-edged frame follows the workshop aesthetic. Each featured product appears once, with neighboring slides visible at the edges. The home route curates its featured order independently of the catalog so new concepts are visible in the first viewport of the carousel; the introduction states the total number of pieces. It advances automatically in measured steps while visible and idle, reverses direction at the ends, and offers a pause control. Drag, swipe, arrow buttons, and keyboard arrows provide manual navigation; reduced-motion preference starts the exhibition paused. The counter reports available steps at the current viewport width. The images remain the catalog's labeled concepts until real product photography is available; no simulated 3D viewer is implied. Catalog cards have white bodies, and only the photograph scales slightly on hover.

### Inputs / Fields

Search sits in a white, rounded 50px field with an inline search icon. Focus on the field container draws a cobalt outline. No error or disabled field treatment is implemented.

### Navigation

The white header uses the logo at left, text navigation to the right, and a small directional action at the edge. Links underline on hover. The hero category list uses cobalt and a left rule for its active item; on mobile it becomes a horizontal row and the active item uses an underline. Catalog filters use pale blue selected fills and bold labels.

## Do's and Don'ts

### Do:
- **Do** keep product imagery prominent on pale, cool image beds.
- **Do** use cobalt for actionable and selected states, with a visible focus outline.
- **Do** identify concept products plainly until real product information is available.

### Don't:
- **Don't** add material, performance, or purchase claims unsupported by product data.
- **Don't** add card shadows or heavy rounded containers to the flat catalog treatment.
- **Don't** promote the home hero's exact composition into a rule for every page.
