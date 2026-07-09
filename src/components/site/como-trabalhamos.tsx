import { PROCESS_STEPS } from "@/lib/site-data";

export function ComoTrabalhamos() {
  return (
    <section id="como-trabalhamos" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-medium tracking-widest text-primary uppercase">
          Como Trabalhamos
        </span>
        <h2 className="mt-4 text-3xl font-medium tracking-tight text-balance sm:text-4xl font-heading">
          Do primeiro contato à última prateleira instalada
        </h2>
        <p className="mt-4 text-muted-foreground">
          Um processo claro, pensado para eliminar incertezas em cada etapa
          da execução do seu projeto.
        </p>
      </div>

      <ol className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {PROCESS_STEPS.map((step, index) => {
          const Icon = step.icon;
          return (
            <li key={step.title} className="relative">
              <div className="flex items-center gap-4 lg:flex-col lg:items-start lg:gap-0">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="size-6" strokeWidth={1.5} />
                </div>
                <span className="font-heading text-sm text-muted-foreground lg:mt-4">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-4 font-heading text-lg font-medium">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {step.description}
              </p>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
