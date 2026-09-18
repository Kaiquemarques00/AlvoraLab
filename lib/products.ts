export const categories = ["Organização", "Casa & Decoração", "Personalizados", "Negócios"] as const;
export type Category = (typeof categories)[number];

export type Product = {
  slug: string;
  name: string;
  category: Category;
  image: string;
  imageAlt: string;
  summary: string;
  description: string;
  material?: string;
  dimensions?: string;
  weight?: string;
  colors?: string[];
  customizable?: boolean;
  featured?: boolean;
  marketplaceUrl: string | null;
  status: "demo" | "available" | "made-to-order" | "unavailable";
  features?: string[];
};

// Conteúdo inicial de demonstração. Substitua imagens, preços, medidas e links pelos dados reais antes do lançamento.
export const products: Product[] = [
  {
    slug: "organizador-modular",
    name: "Organizador Modular",
    category: "Organização",
    image: "/images/hero-product.png",
    imageAlt: "Organizador modular azul em impressão 3D",
    summary: "Organização compacta para reunir objetos do dia a dia em um único lugar.",
    description: "Uma referência de produto funcional para demonstrar como a Alvora Lab pode transformar necessidades de organização em objetos físicos produzidos sob demanda.",
    material: "PLA",
    customizable: true,
    featured: true,
    marketplaceUrl: null,
    status: "demo",
    features: ["Produção em impressão 3D", "Possibilidade de personalização", "Uso funcional no dia a dia"],
  },
  {
    slug: "vaso-modular",
    name: "Vaso Modular",
    category: "Casa & Decoração",
    image: "/images/planter.png",
    imageAlt: "Vaso modular azul com superfície canelada",
    summary: "Volume, textura e forma para decoração de mesas, estantes e ambientes.",
    description: "Um exemplo de aplicação decorativa em impressão 3D, explorando textura, repetição e geometria como parte do próprio objeto.",
    material: "PLA",
    customizable: true,
    featured: true,
    marketplaceUrl: null,
    status: "demo",
    features: ["Textura impressa aparente", "Produção sob demanda", "Variações de cor possíveis conforme disponibilidade"],
  },
  {
    slug: "suporte-de-fones",
    name: "Suporte de Fones",
    category: "Organização",
    image: "/images/headphone-stand.png",
    imageAlt: "Suporte preto para fones de ouvido",
    summary: "Um suporte de mesa para manter os fones organizados e fáceis de acessar.",
    description: "Uma referência de produto utilitário que mostra como a fabricação digital pode criar objetos simples, compactos e adaptados ao uso cotidiano.",
    material: "PLA",
    customizable: false,
    featured: true,
    marketplaceUrl: null,
    status: "demo",
    features: ["Uso em mesa ou bancada", "Geometria funcional", "Peça compacta"],
  },
  {
    slug: "organizador-de-cabos",
    name: "Organizador de Cabos",
    category: "Organização",
    image: "/images/cable-organizer.png",
    imageAlt: "Organizador azul para cabos",
    summary: "Uma solução pequena para reunir cabos e reduzir a bagunça na mesa.",
    description: "Exemplo de peça funcional de baixo volume para demonstrar aplicações práticas da impressão 3D em organização.",
    material: "PLA",
    customizable: true,
    featured: true,
    marketplaceUrl: null,
    status: "demo",
    features: ["Formato compacto", "Aplicação prática", "Possibilidade de adaptação"],
  },
  {
    slug: "suporte-para-tablet",
    name: "Suporte para Tablet",
    category: "Organização",
    image: "/images/tablet-stand.png",
    imageAlt: "Conceito de suporte azul impresso em 3D apoiando um tablet",
    summary: "Apoio de mesa inclinado para posicionar um tablet durante o uso.",
    description: "Conceito ilustrativo de suporte de mesa que explora nervuras estruturais e uma base inclinada para apoiar um tablet.",
    featured: true,
    marketplaceUrl: null,
    status: "demo",
    features: ["Apoio inclinado", "Base com nervuras", "Conceito para uso em mesa"],
  },
  {
    slug: "porta-chaves-de-parede",
    name: "Porta-chaves de Parede",
    category: "Organização",
    image: "/images/wall-key-holder.png",
    imageAlt: "Conceito de porta-chaves azul com quatro ganchos em um painel perfurado",
    summary: "Ganchos em uma base compacta para reunir chaves perto da entrada.",
    description: "Conceito ilustrativo de peça de parede com quatro ganchos, mostrando uma aplicação simples da impressão 3D para organização cotidiana.",
    featured: true,
    marketplaceUrl: null,
    status: "demo",
    features: ["Quatro pontos de apoio", "Formato compacto", "Aplicação de parede ilustrativa"],
  },
  {
    slug: "display-de-balcao",
    name: "Display de Balcão",
    category: "Negócios",
    image: "/images/counter-display.png",
    imageAlt: "Conceito de display azul em três níveis com caixas sem marca",
    summary: "Expositor em níveis para apresentar pequenos objetos em uma bancada.",
    description: "Conceito ilustrativo de display modular para balcão, com níveis que organizam a apresentação de itens pequenos.",
    featured: true,
    marketplaceUrl: null,
    status: "demo",
    features: ["Três níveis de exposição", "Estrutura modular ilustrativa", "Aplicação em balcão"],
  },
  {
    slug: "escultura-ondulada",
    name: "Escultura Ondulada",
    category: "Casa & Decoração",
    image: "/images/wave-sculpture.png",
    imageAlt: "Conceito de escultura azul impressa em 3D com curvas vazadas",
    summary: "Forma escultórica com curvas abertas para mesas e prateleiras.",
    description: "Conceito decorativo que explora repetição, curvas e vazios para criar uma peça de destaque em impressão 3D.",
    featured: true,
    marketplaceUrl: null,
    status: "demo",
    features: ["Geometria ondulada", "Curvas abertas", "Objeto decorativo conceitual"],
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
