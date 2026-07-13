"use client";

import { useState } from "react";

import { ProductGallery } from "@/components/site/produto/product-gallery";
import { ProductConfigurator } from "@/components/site/produto/product-configurator";
import type { Product } from "@/lib/products-data";

export function ProductDetail({ product }: { product: Product }) {
  const [comboId, setComboId] = useState(product.combos[0].id);
  const combo = product.combos.find((c) => c.id === comboId) ?? product.combos[0];

  const images = combo.image
    ? [
        combo.image,
        ...product.images.filter((image) => image.src !== combo.image!.src),
      ]
    : product.images;

  return (
    <>
      <ProductGallery
        key={comboId}
        images={images}
        productName={product.name}
      />
      <ProductConfigurator
        product={product}
        comboId={comboId}
        onComboChange={setComboId}
      />
    </>
  );
}
