import { AtSign, Mail, MapPin, MessageCircle } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { CATEGORY_LABELS, NAV_LINKS } from "@/lib/site-data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contato" className="border-t border-border bg-secondary/30">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="font-heading text-lg font-semibold tracking-tight">
              Cerne <span className="text-primary">Planejados</span>
            </span>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              Cozinhas e banheiros planejados sob medida, com projeto
              exclusivo e acabamento premium.
            </p>
            <div className="mt-4 flex items-center gap-1.5 text-sm text-muted-foreground">
              <AtSign className="size-4" />
              <span>@cerneplanejados</span>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-foreground">Navegação</h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium text-foreground">Projetos</h3>
            <ul className="mt-4 space-y-2.5">
              {Object.values(CATEGORY_LABELS).map((label) => (
                <li key={label}>
                  <a
                    href="#projetos"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {label}s planejados
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium text-foreground">Contato</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 size-4 shrink-0" />
                <span>Atendimento na Zona Sul de São Paulo, SP</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <MessageCircle className="mt-0.5 size-4 shrink-0" />
                <a href="https://wa.me/5511999999999" className="hover:text-foreground">
                  (11) 99999-9999
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <Mail className="mt-0.5 size-4 shrink-0" />
                <a href="mailto:contato@cerneplanejados.com.br" className="hover:text-foreground">
                  contato@cerneplanejados.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-10" />

        <div className="flex flex-col items-center justify-between gap-4 text-xs text-muted-foreground sm:flex-row">
          <p>&copy; {year} Cerne Planejados. Todos os direitos reservados.</p>
          <p>Conteúdo de exemplo — página em desenvolvimento.</p>
        </div>
      </div>
    </footer>
  );
}
