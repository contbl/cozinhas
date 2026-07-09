import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { STATS } from "@/lib/site-data";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 80% 60% at 50% -10%, var(--secondary), transparent 60%)",
        }}
      />

      <div className="mx-auto grid max-w-6xl gap-16 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-28 lg:px-8">
        <div>
          <span className="inline-flex items-center rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-medium tracking-widest text-muted-foreground uppercase">
            Móveis planejados · Zona Sul de São Paulo
          </span>

          <h1 className="mt-6 text-4xl leading-[1.1] font-medium tracking-tight text-balance sm:text-5xl lg:text-6xl font-heading">
            Cozinhas e banheiros planejados{" "}
            <span className="text-primary">sob medida</span> para a sua
            rotina
          </h1>

          <p className="mt-6 max-w-md text-lg text-muted-foreground">
            Projeto exclusivo, marcenaria de precisão e acabamento premium —
            do primeiro esboço à instalação final.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" asChild>
              <a href="#orcamento">Solicitar orçamento</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#projetos">Ver projetos</a>
            </Button>
          </div>

          <dl className="mt-14 grid grid-cols-3 gap-6 border-t border-border pt-8">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-2xl font-medium sm:text-3xl font-heading">
                  {stat.value}
                </dd>
                <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <AspectRatio
            ratio={4 / 5}
            className="overflow-hidden rounded-sm shadow-xl ring-1 ring-foreground/10"
          >
            <Image
              src="/images/projects/cozinha%203.png"
              alt="Cozinha planejada em destaque"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </AspectRatio>
          <div className="absolute -bottom-8 -left-6 hidden w-44 sm:block">
            <AspectRatio
              ratio={1}
              className="overflow-hidden rounded-sm border-4 border-background shadow-lg ring-1 ring-foreground/10"
            >
              <Image
                src="/images/projects/banheiro%201.png"
                alt="Banheiro planejado em destaque"
                fill
                sizes="176px"
                className="object-cover"
              />
            </AspectRatio>
          </div>
        </div>
      </div>
    </section>
  );
}
