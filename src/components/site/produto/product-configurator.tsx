"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Check, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import {
  formatCurrency,
  INSTALLATION_OPTIONS,
  type Product,
} from "@/lib/products-data";

const WHATSAPP_NUMBER = "5511999999999";

export function ProductConfigurator({ product }: { product: Product }) {
  const [comboId, setComboId] = useState(product.combos[0].id);
  const [colorId, setColorId] = useState(product.colors[0].id);
  const [installationId, setInstallationId] = useState<
    (typeof INSTALLATION_OPTIONS)[number]["id"]
  >("propria");

  const combo = product.combos.find((c) => c.id === comboId) ?? product.combos[0];
  const color = product.colors.find((c) => c.id === colorId) ?? product.colors[0];
  const installation =
    INSTALLATION_OPTIONS.find((option) => option.id === installationId) ??
    INSTALLATION_OPTIONS[0];

  const total = combo.price + installation.price;

  const whatsappHref = useMemo(() => {
    const message = [
      `Olá! Tenho interesse na ${product.name}.`,
      `Combo: ${combo.name}`,
      `Cor: ${color.name}`,
      `Montagem: ${installation.name}`,
      `Valor estimado: ${formatCurrency(total)}`,
    ].join("\n");

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  }, [product.name, combo.name, color.name, installation.name, total]);

  return (
    <div className="rounded-sm border border-border bg-card p-5 sm:p-6">
      <span className="text-xs font-medium tracking-widest text-primary uppercase">
        {product.categoryLabel}
      </span>
      <h1 className="mt-2 text-2xl font-medium tracking-tight text-balance sm:text-3xl font-heading">
        {product.name}
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        {product.shortDescription}
      </p>

      <Separator className="my-5" />

      {/* Combo selection */}
      <fieldset>
        <legend className="text-sm font-medium text-foreground">
          1. Escolha o combo de montagem
        </legend>
        <div className="mt-3 space-y-2.5">
          {product.combos.map((option) => {
            const selected = option.id === comboId;
            return (
              <label
                key={option.id}
                className={cn(
                  "block cursor-pointer rounded-sm border p-3.5 transition-colors",
                  selected
                    ? "border-primary bg-primary/5 ring-1 ring-primary"
                    : "border-border hover:border-foreground/30"
                )}
              >
                <input
                  type="radio"
                  name={`${product.slug}-combo`}
                  value={option.id}
                  checked={selected}
                  onChange={() => setComboId(option.id)}
                  className="sr-only"
                />
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span
                        className={cn(
                          "flex size-4 shrink-0 items-center justify-center rounded-full border",
                          selected
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border"
                        )}
                      >
                        {selected && <Check className="size-3" strokeWidth={3} />}
                      </span>
                      <span className="text-sm font-medium text-foreground">
                        {option.name}
                      </span>
                    </div>
                    <p className="mt-1 ml-6 text-xs text-muted-foreground">
                      {option.tagline}
                    </p>
                  </div>
                  <span className="shrink-0 text-sm font-medium text-foreground">
                    {formatCurrency(option.price)}
                  </span>
                </div>
                {selected && (
                  <ul className="mt-3 ml-6 space-y-1">
                    {option.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-1.5 text-xs text-muted-foreground"
                      >
                        <Check className="mt-0.5 size-3 shrink-0 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
              </label>
            );
          })}
        </div>
      </fieldset>

      <Separator className="my-5" />

      {/* Color selection */}
      <fieldset>
        <legend className="text-sm font-medium text-foreground">
          2. Escolha a cor —{" "}
          <span className="font-normal text-muted-foreground">{color.name}</span>
        </legend>
        <div className="mt-3 flex flex-wrap gap-3">
          {product.colors.map((option) => {
            const selected = option.id === colorId;
            return (
              <label key={option.id} className="cursor-pointer text-center">
                <input
                  type="radio"
                  name={`${product.slug}-color`}
                  value={option.id}
                  checked={selected}
                  onChange={() => setColorId(option.id)}
                  className="sr-only"
                />
                <span
                  className={cn(
                    "block size-9 rounded-full ring-2 ring-offset-2 ring-offset-card transition-all",
                    selected ? "ring-primary" : "ring-transparent hover:ring-border"
                  )}
                  style={{ backgroundColor: option.hex }}
                  aria-label={option.name}
                />
              </label>
            );
          })}
        </div>
      </fieldset>

      <Separator className="my-5" />

      {/* Installation selection */}
      <fieldset>
        <legend className="text-sm font-medium text-foreground">
          3. Montagem
        </legend>
        <div className="mt-3 space-y-2.5">
          {INSTALLATION_OPTIONS.map((option) => {
            const selected = option.id === installationId;
            return (
              <label
                key={option.id}
                className={cn(
                  "flex cursor-pointer items-start justify-between gap-3 rounded-sm border p-3.5 transition-colors",
                  selected
                    ? "border-primary bg-primary/5 ring-1 ring-primary"
                    : "border-border hover:border-foreground/30"
                )}
              >
                <input
                  type="radio"
                  name={`${product.slug}-installation`}
                  value={option.id}
                  checked={selected}
                  onChange={() => setInstallationId(option.id)}
                  className="sr-only"
                />
                <div className="flex items-start gap-2">
                  <span
                    className={cn(
                      "mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full border",
                      selected
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border"
                    )}
                  >
                    {selected && <Check className="size-3" strokeWidth={3} />}
                  </span>
                  <div>
                    <span className="text-sm font-medium text-foreground">
                      {option.name}
                    </span>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {option.description}
                    </p>
                  </div>
                </div>
                <span className="shrink-0 text-sm font-medium text-foreground">
                  {option.price > 0 ? `+ ${formatCurrency(option.price)}` : "Incluso"}
                </span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <Separator className="my-5" />

      <div className="flex items-baseline justify-between">
        <span className="text-sm text-muted-foreground">Valor estimado</span>
        <span className="text-3xl font-medium tracking-tight font-heading">
          {formatCurrency(total)}
        </span>
      </div>
      <p className="mt-1 text-xs text-muted-foreground">
        {combo.name} + {installation.name.toLowerCase()}. Valor sujeito a
        confirmação após visita técnica.
      </p>

      <div className="mt-5 flex flex-col gap-2.5">
        <Button size="lg" asChild>
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
            <MessageCircle />
            Solicitar orçamento com esta configuração
          </a>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <Link href="/#contato">Falar com um especialista</Link>
        </Button>
      </div>
    </div>
  );
}
