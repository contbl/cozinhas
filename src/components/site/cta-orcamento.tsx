import { MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";

export function CtaOrcamento() {
  return (
    <section id="orcamento" className="bg-foreground text-background">
      <div className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <span className="text-xs font-medium tracking-widest text-background/60 uppercase">
          Solicite um orçamento
        </span>
        <h2 className="mt-4 text-3xl font-medium tracking-tight text-balance sm:text-4xl font-heading">
          Vamos transformar sua cozinha ou banheiro em um projeto único?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-background/70">
          Conte um pouco sobre o seu espaço e receba uma proposta
          personalizada, sem compromisso.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button size="lg" variant="secondary" asChild>
            <a href="#contato">Solicitar orçamento</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-background/30 bg-transparent text-background hover:bg-background/10 hover:text-background"
            asChild
          >
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle />
              Falar no WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
