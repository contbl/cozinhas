import { ChefHat } from "lucide-react";

export type ProductImage = { src: string; alt: string };

export type ProductCombo = {
  id: string;
  name: string;
  tagline: string;
  price: number;
  features: string[];
  image?: ProductImage;
};

export type ProductColor = {
  id: string;
  name: string;
  hex: string;
};

export type InstallationOption = {
  id: "propria" | "profissional";
  name: string;
  description: string;
  price: number;
};

export type Product = {
  slug: string;
  name: string;
  categoryLabel: string;
  shortDescription: string;
  description: string;
  highlights: string[];
  images: ProductImage[];
  combos: ProductCombo[];
  colors: ProductColor[];
  specs: { label: string; value: string }[];
};

// Preços e combos abaixo são valores de exemplo (placeholder) — ajustar com os
// valores reais antes de publicar.
export const INSTALLATION_OPTIONS: InstallationOption[] = [
  {
    id: "propria",
    name: "Eu mesmo monto",
    description:
      "Você retira o kit com manual de montagem e ferragens numeradas. Ideal para quem já tem experiência com montagem de móveis.",
    price: 0,
  },
  {
    id: "profissional",
    name: "Montagem profissional Cerne",
    description:
      "Equipe própria realiza a instalação completa no seu endereço, com revisão final e garantia de instalação.",
    price: 2200,
  },
];

export const PRODUCTS: Product[] = [
  {
    slug: "milano",
    name: "Cozinha Milano",
    categoryLabel: "Cozinha Planejada",
    shortDescription:
      "Linhas retas e portas laqueadas para uma cozinha clean e atemporal.",
    description:
      "A Cozinha Milano aposta em linhas retas, portas laqueadas e puxadores minimalistas para um visual clean e atemporal. Os módulos são desenhados sob medida para o seu espaço, com ferragens de alta durabilidade e acabamento premium em todas as superfícies visíveis.",
    highlights: [
      "Portas em MDF laqueado de alto brilho",
      "Ferragens com sistema soft-close em todos os módulos",
      "Projeto 3D personalizado incluso",
      "Garantia de 5 anos na marcenaria",
    ],
    images: [
      { src: "/images/projects/cozinha%201.jpeg", alt: "Cozinha Milano — vista geral" },
      { src: "/images/projects/cozinha%203.png", alt: "Cozinha Milano — detalhe da bancada" },
    ],
    combos: [
      {
        id: "essencial",
        name: "Essencial",
        tagline: "Armários planejados com o básico bem feito",
        price: 18900,
        features: [
          "Armários superiores e inferiores planejados",
          "Portas lisas com puxador padrão",
          "Ferragens com corrediças telescópicas",
        ],
        image: {
          src: "/images/projects/cozinha%201%20-%20basic.png",
          alt: "Cozinha Milano — combo Essencial",
        },
      },
      {
        id: "completo",
        name: "Completo",
        tagline: "Mais espaço de armazenamento e acabamento",
        price: 27500,
        features: [
          "Tudo do combo Essencial",
          "Bancada estendida com nicho iluminado",
          "Puxadores premium em perfil de alumínio",
          "Gavetas com sistema soft-close",
        ],
      },
      {
        id: "master",
        name: "Master",
        tagline: "Projeto completo com eletrodomésticos embutidos",
        price: 38900,
        features: [
          "Tudo do combo Completo",
          "Nichos para eletrodomésticos embutidos",
          "Portas 100% laqueadas de alto brilho",
          "Projeto 3D com revisões ilimitadas",
        ],
      },
    ],
    colors: [
      { id: "branco-fosco", name: "Branco Fosco", hex: "#F2F1EC" },
      { id: "grafite", name: "Grafite", hex: "#3A3A3A" },
      { id: "carvalho", name: "Carvalho Natural", hex: "#B08B5B" },
      { id: "marfim", name: "Marfim", hex: "#E8DFCC" },
    ],
    specs: [
      { label: "Material das portas", value: "MDF laqueado 18mm" },
      { label: "Ferragens", value: "Blum ou equivalente" },
      { label: "Prazo de fabricação", value: "35 a 45 dias úteis" },
      { label: "Garantia", value: "5 anos" },
    ],
  },
  {
    slug: "industrial-loft",
    name: "Cozinha Industrial Loft",
    categoryLabel: "Cozinha Planejada",
    shortDescription:
      "Marcenaria em tom fosco combinada com metais pretos para um estilo urbano.",
    description:
      "Inspirada em lofts urbanos, a Cozinha Industrial Loft combina marcenaria em tom fosco com metais pretos e prateleiras abertas em madeira maciça. Uma opção robusta e cheia de personalidade para quem busca um ambiente com identidade forte.",
    highlights: [
      "Estrutura em MDF fosco de alta resistência",
      "Prateleiras abertas em madeira maciça",
      "Puxadores e metais em preto fosco",
      "Garantia de 5 anos na marcenaria",
    ],
    images: [
      { src: "/images/projects/cozinha%202.jpeg", alt: "Cozinha Industrial Loft — vista geral" },
      { src: "/images/projects/cozinha%204.png", alt: "Cozinha Industrial Loft — detalhe" },
    ],
    combos: [
      {
        id: "essencial",
        name: "Essencial",
        tagline: "Base robusta com estética industrial",
        price: 19900,
        features: [
          "Armários planejados em MDF fosco",
          "Puxadores em perfil preto",
          "Ferragens com corrediças telescópicas",
        ],
      },
      {
        id: "completo",
        name: "Completo",
        tagline: "Prateleiras abertas e bancada estendida",
        price: 28900,
        features: [
          "Tudo do combo Essencial",
          "Prateleiras abertas em madeira maciça",
          "Bancada estendida com nicho iluminado",
          "Gavetas com sistema soft-close",
        ],
      },
      {
        id: "master",
        name: "Master",
        tagline: "Projeto completo com ilha central",
        price: 41900,
        features: [
          "Tudo do combo Completo",
          "Ilha central com bancada em quartzo",
          "Nichos para eletrodomésticos embutidos",
          "Projeto 3D com revisões ilimitadas",
        ],
      },
    ],
    colors: [
      { id: "grafite", name: "Grafite", hex: "#3A3A3A" },
      { id: "preto-fosco", name: "Preto Fosco", hex: "#1C1C1C" },
      { id: "carvalho", name: "Carvalho Rústico", hex: "#8A6642" },
      { id: "cimento", name: "Cimento Queimado", hex: "#9C978D" },
    ],
    specs: [
      { label: "Material das portas", value: "MDF fosco 18mm" },
      { label: "Ferragens", value: "Blum ou equivalente" },
      { label: "Prazo de fabricação", value: "40 a 50 dias úteis" },
      { label: "Garantia", value: "5 anos" },
    ],
  },
  {
    slug: "ilha-gourmet",
    name: "Cozinha Ilha Gourmet",
    categoryLabel: "Cozinha Planejada",
    shortDescription:
      "Ilha central integrada para quem recebe e cozinha para a família e amigos.",
    description:
      "Pensada para quem gosta de reunir a família e os amigos na cozinha, a Ilha Gourmet integra uma ampla bancada central, espaço para banquetas e churrasqueira opcional. O layout maximiza a circulação e a área de trabalho sem abrir mão do design.",
    highlights: [
      "Ilha central com bancada em quartzo",
      "Espaço para banquetas integrado",
      "Iluminação de destaque sobre a ilha",
      "Garantia de 5 anos na marcenaria",
    ],
    images: [
      { src: "/images/projects/cozinha%203.png", alt: "Cozinha Ilha Gourmet — vista geral" },
      { src: "/images/projects/cozinha%201.jpeg", alt: "Cozinha Ilha Gourmet — detalhe" },
    ],
    combos: [
      {
        id: "essencial",
        name: "Essencial",
        tagline: "Ilha central com armários planejados",
        price: 24900,
        features: [
          "Ilha central com bancada em granito",
          "Armários superiores e inferiores planejados",
          "Ferragens com corrediças telescópicas",
        ],
      },
      {
        id: "completo",
        name: "Completo",
        tagline: "Bancada em quartzo e banquetas integradas",
        price: 34900,
        features: [
          "Tudo do combo Essencial",
          "Bancada em quartzo na ilha",
          "Espaço para banquetas integrado",
          "Iluminação de destaque sobre a ilha",
        ],
      },
      {
        id: "master",
        name: "Master",
        tagline: "Projeto completo com churrasqueira integrada",
        price: 47900,
        features: [
          "Tudo do combo Completo",
          "Churrasqueira elétrica integrada à ilha",
          "Nichos para eletrodomésticos embutidos",
          "Projeto 3D com revisões ilimitadas",
        ],
      },
    ],
    colors: [
      { id: "branco-fosco", name: "Branco Fosco", hex: "#F2F1EC" },
      { id: "marfim", name: "Marfim", hex: "#E8DFCC" },
      { id: "grafite", name: "Grafite", hex: "#3A3A3A" },
      { id: "carvalho", name: "Carvalho Natural", hex: "#B08B5B" },
    ],
    specs: [
      { label: "Material das portas", value: "MDF laqueado 18mm" },
      { label: "Bancada", value: "Quartzo ou granito" },
      { label: "Prazo de fabricação", value: "45 a 60 dias úteis" },
      { label: "Garantia", value: "5 anos" },
    ],
  },
  {
    slug: "marfim-classica",
    name: "Cozinha Marfim Clássica",
    categoryLabel: "Cozinha Planejada",
    shortDescription:
      "Tons neutros e acabamento acetinado para um estilo clássico e acolhedor.",
    description:
      "Com tons neutros e acabamento acetinado, a Cozinha Marfim Clássica traz um estilo atemporal e acolhedor. Os módulos combinam amplo armazenamento com detalhes de moldura nas portas, ideal para quem busca elegância discreta no dia a dia.",
    highlights: [
      "Portas com moldura em MDF acetinado",
      "Puxadores em metal dourado escovado",
      "Amplo aproveitamento vertical de armazenamento",
      "Garantia de 5 anos na marcenaria",
    ],
    images: [
      { src: "/images/projects/cozinha%204.png", alt: "Cozinha Marfim Clássica — vista geral" },
      { src: "/images/projects/cozinha%202.jpeg", alt: "Cozinha Marfim Clássica — detalhe" },
    ],
    combos: [
      {
        id: "essencial",
        name: "Essencial",
        tagline: "Armários planejados com acabamento clássico",
        price: 19500,
        features: [
          "Armários planejados com moldura nas portas",
          "Puxadores em metal dourado escovado",
          "Ferragens com corrediças telescópicas",
        ],
      },
      {
        id: "completo",
        name: "Completo",
        tagline: "Mais armazenamento e iluminação de destaque",
        price: 28200,
        features: [
          "Tudo do combo Essencial",
          "Nicho iluminado sobre a bancada",
          "Gavetas com sistema soft-close",
          "Bancada estendida",
        ],
      },
      {
        id: "master",
        name: "Master",
        tagline: "Projeto completo com eletrodomésticos embutidos",
        price: 39500,
        features: [
          "Tudo do combo Completo",
          "Nichos para eletrodomésticos embutidos",
          "Painel ripado decorativo",
          "Projeto 3D com revisões ilimitadas",
        ],
      },
    ],
    colors: [
      { id: "marfim", name: "Marfim", hex: "#E8DFCC" },
      { id: "branco-fosco", name: "Branco Fosco", hex: "#F2F1EC" },
      { id: "verde-oliva", name: "Verde Oliva", hex: "#6B705C" },
      { id: "carvalho", name: "Carvalho Natural", hex: "#B08B5B" },
    ],
    specs: [
      { label: "Material das portas", value: "MDF acetinado 18mm com moldura" },
      { label: "Ferragens", value: "Blum ou equivalente" },
      { label: "Prazo de fabricação", value: "35 a 45 dias úteis" },
      { label: "Garantia", value: "5 anos" },
    ],
  },
];

export const PRODUCT_CATEGORY_ICON = ChefHat;

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((product) => product.slug === slug);
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(value);
}
