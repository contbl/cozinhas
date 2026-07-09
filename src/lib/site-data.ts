import {
  Bath,
  BedDouble,
  ChefHat,
  Compass,
  Hammer,
  PencilRuler,
  Shirt,
  Truck,
  type LucideIcon,
} from "lucide-react";

export type ProjectCategory = "cozinha" | "banheiro" | "closet" | "dormitorio";

export const CATEGORY_LABELS: Record<ProjectCategory, string> = {
  cozinha: "Cozinha",
  banheiro: "Banheiro",
  closet: "Closet",
  dormitorio: "Dormitório",
};

export const CATEGORY_ICONS: Record<ProjectCategory, LucideIcon> = {
  cozinha: ChefHat,
  banheiro: Bath,
  closet: Shirt,
  dormitorio: BedDouble,
};

export const NAV_LINKS = [
  { label: "Quem Somos", href: "#quem-somos" },
  { label: "Projetos", href: "#projetos" },
  { label: "Como Trabalhamos", href: "#como-trabalhamos" },
  { label: "Contato", href: "#contato" },
];

export const STATS = [
  { value: "10+", label: "anos de experiência" },
  { value: "200+", label: "projetos entregues" },
  { value: "100%", label: "clientes satisfeitos" },
];

export type ExampleProject = {
  title: string;
  neighborhood: string;
  category: ProjectCategory;
  categoryLabel?: string;
  description: string;
  image?: { src: string; alt: string };
};

export const EXAMPLE_PROJECTS: ExampleProject[] = [
  {
    title: "Projeto Conceitual - Cozinha Planejada",
    neighborhood: "Zona Sul",
    category: "cozinha",
    categoryLabel: "Projeto 3D",
    description:
      "Estudo inicial desenvolvido para aprovação do cliente antes da fabricação.",
    image: {
      src: "/images/projects/cozinha%201.jpeg",
      alt: "Render 3D de projeto conceitual de cozinha planejada",
    },
  },
  {
    title: "Banheiro Alto de Pinheiros",
    neighborhood: "Alto de Pinheiros",
    category: "banheiro",
    description:
      "Bancada em quartzo, marcenaria suspensa em grafite fosco e nichos revestidos.",
  },
  {
    title: "Cozinha Planejada Executada",
    neighborhood: "Zona Sul",
    category: "cozinha",
    description: "Projeto entregue e instalado na Zona Sul de São Paulo.",
    image: {
      src: "/images/projects/cozinha%202.jpeg",
      alt: "Foto de cozinha planejada executada",
    },
  },
  {
    title: "Closet Brooklin",
    neighborhood: "Brooklin",
    category: "closet",
    description:
      "Closet planejado com iluminação de destaque, espelho central e gavetas internas.",
  },
  {
    title: "Banheiro Campo Belo",
    neighborhood: "Campo Belo",
    category: "banheiro",
    description:
      "Dupla bancada em carvalho, metais dourados e nichos em porcelanato bookmatch.",
  },
  {
    title: "Cozinha Morumbi",
    neighborhood: "Morumbi",
    category: "cozinha",
    description:
      "Cozinha gourmet com churrasqueira integrada, adega climatizada e bancada estendida.",
  },
];

export type ProcessStep = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const PROCESS_STEPS: ProcessStep[] = [
  {
    icon: Compass,
    title: "Diagnóstico e visita técnica",
    description:
      "Entendemos o espaço, a rotina da família e as referências de estilo antes de desenhar qualquer linha.",
  },
  {
    icon: PencilRuler,
    title: "Projeto 3D personalizado",
    description:
      "Apresentamos o projeto em 3D com materiais, cores e acabamentos reais para aprovação sem surpresas.",
  },
  {
    icon: Hammer,
    title: "Produção sob medida",
    description:
      "Fabricação própria, com marcenaria de precisão e materiais premium selecionados a cada etapa.",
  },
  {
    icon: Truck,
    title: "Instalação e entrega",
    description:
      "Equipe especializada cuida da instalação com acabamento impecável e revisão final no local.",
  },
];
