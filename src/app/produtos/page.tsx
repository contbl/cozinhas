import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { formatCurrency, PRODUCTS } from "@/lib/products-data";

export const metadata: Metadata = {
  title: "Produtos | Cerne Planejados",
  description:
    "Conheça nossas linhas de cozinhas planejadas e monte a sua com o combo, a cor e a montagem ideais para você.",
};

export default function ProdutosPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-medium tracking-widest text-primary uppercase">
              Nossos Produtos
            </span>
            <h1 className="mt-4 text-3xl font-medium tracking-tight text-balance sm:text-4xl font-heading">
              Escolha sua linha de cozinha planejada
            </h1>
            <p className="mt-4 text-muted-foreground">
              Cada modelo pode ser configurado com o combo, a cor e a forma de
              montagem que fizerem mais sentido para você.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((product) => {
              const startingPrice = product.combos[0].price;
              return (
                <Link key={product.slug} href={`/produtos/${product.slug}`}>
                  <Card className="overflow-hidden pt-0 transition-shadow hover:shadow-md">
                    <AspectRatio
                      ratio={4 / 3}
                      className="group relative overflow-hidden rounded-none"
                    >
                      <Image
                        src={product.images[0].src}
                        alt={product.images[0].alt}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </AspectRatio>
                    <CardHeader>
                      <div className="flex items-start justify-between gap-2">
                        <CardTitle>{product.name}</CardTitle>
                        <Badge variant="secondary" className="shrink-0">
                          {product.categoryLabel}
                        </Badge>
                      </div>
                      <CardDescription>{product.shortDescription}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        A partir de{" "}
                        <span className="font-medium text-foreground">
                          {formatCurrency(startingPrice)}
                        </span>
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
