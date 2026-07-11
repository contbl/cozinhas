import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, ShieldCheck } from "lucide-react";

import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { Badge } from "@/components/ui/badge";
import { ProductGallery } from "@/components/site/produto/product-gallery";
import { ProductConfigurator } from "@/components/site/produto/product-configurator";
import { PRODUCTS, getProductBySlug } from "@/lib/products-data";

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: "Produto não encontrado | Cerne Planejados" };
  }

  return {
    title: `${product.name} | Cerne Planejados`,
    description: product.shortDescription,
  };
}

export default async function ProdutoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-xs text-muted-foreground"
          >
            <Link href="/" className="hover:text-foreground">
              Início
            </Link>
            <ChevronRight className="size-3.5" />
            <Link href="/produtos" className="hover:text-foreground">
              Produtos
            </Link>
            <ChevronRight className="size-3.5" />
            <span className="text-foreground">{product.name}</span>
          </nav>

          <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-12">
            <ProductGallery images={product.images} productName={product.name} />
            <ProductConfigurator product={product} />
          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-medium tracking-tight font-heading">
                Sobre a {product.name}
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                {product.description}
              </p>

              <ul className="mt-6 space-y-2.5">
                {product.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-2.5 text-sm text-foreground"
                  >
                    <ShieldCheck className="mt-0.5 size-4 shrink-0 text-primary" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-medium tracking-tight font-heading">
                Ficha técnica
              </h2>
              <dl className="mt-3 divide-y divide-border rounded-sm border border-border">
                {product.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="flex items-center justify-between gap-3 px-3.5 py-2.5 text-sm"
                  >
                    <dt className="text-muted-foreground">{spec.label}</dt>
                    <dd className="text-right font-medium text-foreground">
                      {spec.value}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="mt-4">
                <Badge variant="secondary">Imagens ilustrativas</Badge>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
