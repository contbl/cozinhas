import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProjectVisual } from "@/components/site/project-visual";
import {
  CATEGORY_ICONS,
  CATEGORY_LABELS,
  EXAMPLE_PROJECTS,
  type ProjectCategory,
} from "@/lib/site-data";

const FILTERS: Array<{ value: "todos" | ProjectCategory; label: string }> = [
  { value: "todos", label: "Todos" },
  { value: "cozinha", label: CATEGORY_LABELS.cozinha + "s" },
  { value: "banheiro", label: CATEGORY_LABELS.banheiro + "s" },
  { value: "closet", label: CATEGORY_LABELS.closet + "s" },
];

function projectsFor(filter: "todos" | ProjectCategory) {
  if (filter === "todos") return EXAMPLE_PROJECTS;
  return EXAMPLE_PROJECTS.filter((project) => project.category === filter);
}

export function Projetos() {
  return (
    <section id="projetos" className="bg-secondary/40 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium tracking-widest text-primary uppercase">
            Nossos Projetos
          </span>
          <h2 className="mt-4 text-3xl font-medium tracking-tight text-balance sm:text-4xl font-heading">
            Projetos com assinatura própria, feitos sob medida
          </h2>
          <p className="mt-4 text-muted-foreground">
            Uma seleção de ambientes desenvolvidos para famílias da Zona Sul
            de São Paulo. Imagens ilustrativas — o portfólio completo, com
            fotos reais, chega em breve.
          </p>
        </div>

        <Tabs defaultValue="todos" className="mt-12">
          <TabsList
            variant="line"
            className="h-auto flex-wrap justify-center gap-x-1 gap-y-2 bg-transparent p-0"
          >
            {FILTERS.map((filter) => (
              <TabsTrigger key={filter.value} value={filter.value}>
                {filter.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {FILTERS.map((filter) => (
            <TabsContent key={filter.value} value={filter.value} className="mt-10">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {projectsFor(filter.value).map((project) => {
                  const card = (
                    <Card
                      className={
                        project.productSlug
                          ? "overflow-hidden pt-0 transition-shadow hover:shadow-md"
                          : "overflow-hidden pt-0"
                      }
                    >
                      {project.image ? (
                        <AspectRatio
                          ratio={4 / 3}
                          className="group relative overflow-hidden rounded-none"
                        >
                          <Image
                            src={project.image.src}
                            alt={project.image.alt}
                            fill
                            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </AspectRatio>
                      ) : (
                        <ProjectVisual
                          icon={CATEGORY_ICONS[project.category]}
                          ratio={4 / 3}
                          className="rounded-none"
                        />
                      )}
                      <CardHeader>
                        <div className="flex items-start justify-between gap-2">
                          <CardTitle>{project.title}</CardTitle>
                          <Badge variant="secondary" className="shrink-0">
                            {project.categoryLabel ?? CATEGORY_LABELS[project.category]}
                          </Badge>
                        </div>
                        <CardDescription>
                          {project.neighborhood} · São Paulo
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          {project.description}
                        </p>
                      </CardContent>
                    </Card>
                  );

                  return project.productSlug ? (
                    <Link key={project.title} href={`/produtos/${project.productSlug}`}>
                      {card}
                    </Link>
                  ) : (
                    <div key={project.title}>{card}</div>
                  );
                })}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
