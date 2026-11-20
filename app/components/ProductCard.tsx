
import Image from "next/image";
import Link from "next/link";
import Stars from "./Stars";
import type { Product } from "../data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.id}`} className="card">
      <div
        className="card-art"
        style={{
          background: `linear-gradient(135deg, ${product.accent}, ${product.accent2})`,
          position: "relative",
        }}
      >
        {product.badge && <span className="card-badge">{product.badge}</span>}

        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={300}
          className="card-image"
          style={{
            width: "100%",
            height: "200px",
            objectFit: "contain",
          }}
        />
      </div>

      <div className="card-body">
        <span className="card-category">{product.category}</span>
        <h2 className="card-name">{product.name}</h2>
        <p className="card-tagline">{product.tagline}</p>
        <Stars rating={product.rating} />

        <div className="card-foot">
          <span className="card-price">${product.price}</span>
          <span className="card-cta">View →</span>
        </div>
      </div>
    </Link>
  );
}
