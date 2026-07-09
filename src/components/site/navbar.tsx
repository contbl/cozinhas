"use client";

import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { NAV_LINKS } from "@/lib/site-data";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="font-heading text-lg font-semibold tracking-tight text-foreground"
        >
          Cerne <span className="text-primary">Planejados</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild>
            <a href="#orcamento">Solicitar Orçamento</a>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label="Abrir menu"
            >
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <SheetHeader>
              <SheetTitle>
                Cerne <span className="text-primary">Planejados</span>
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4">
              {NAV_LINKS.map((link) => (
                <SheetClose asChild key={link.href}>
                  <a
                    href={link.href}
                    className="rounded-md px-2 py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </SheetClose>
              ))}
              <SheetClose asChild>
                <Button asChild className="mt-3">
                  <a href="#orcamento">Solicitar Orçamento</a>
                </Button>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
