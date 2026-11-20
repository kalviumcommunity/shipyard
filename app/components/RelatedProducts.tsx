
"use client";

import ProductCard from "./ProductCard";
import type { Product } from "../data/products";

export default function RelatedProducts({
  products,
  category,
}: {
  products: Product[];
  category: string;
}) {
  if (products.length === 0) {
    return null;
  }

  return (
    <section className="related">
      <div className="section-head">
        <h2 className="section-title">More in {category}</h2>
      </div>

      <div className="grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
