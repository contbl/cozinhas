import Image from "next/image";
import { Check } from "lucide-react";

import { AspectRatio } from "@/components/ui/aspect-ratio";

const DIFERENCIAIS = [
  "Marcenaria própria, sem intermediários",
  "Projeto 3D incluso antes da produção",
  "Acompanhamento dedicado em cada etapa",
  "Materiais premium com garantia estendida",
];

export function QuemSomos() {
  return (
    <section id="quem-somos" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
        <AspectRatio
          ratio={4 / 3}
          className="overflow-hidden rounded-sm lg:order-last"
        >
          <Image
            src="/images/projects/cozinha%204.png"
            alt="Cozinha planejada - Quem Somos"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </AspectRatio>

        <div>
          <span className="text-xs font-medium tracking-widest text-primary uppercase">
            Quem Somos
          </span>
          <h2 className="mt-4 text-3xl font-medium tracking-tight text-balance sm:text-4xl font-heading">
            Marcenaria autoral para quem valoriza cada detalhe da própria
            casa
          </h2>
          <p className="mt-6 text-muted-foreground">
            Somos uma marcenaria especializada em cozinhas e banheiros
            planejados, atendendo a Zona Sul de São Paulo com projeto
            exclusivo e produção própria. Unimos design contemporâneo,
            engenharia de marcenaria e acabamento premium para transformar
            ambientes em espaços únicos, pensados para o dia a dia de cada
            família.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {DIFERENCIAIS.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                <span className="text-foreground/90">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
