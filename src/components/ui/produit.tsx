import React from "react";

interface Props {
  product: {
    id: string | number;
    name: string;
    img: string;
    url?: string; // optional URL
  };
  onSelect?: (id: string | number) => void; // optional callback
}

export default function ProductCard({ product, onSelect }: Props) {
  return product.url ? (
    <a
      href={product.url}
      target="_blank"
      rel="noopener noreferrer"
      className="product-card"
      onClick={() => onSelect && onSelect(product.id)}
    >
      <div className="product-card-image">
        <img src={product.img} alt={product.name} />
      </div>
      <div className="product-card-title">{product.name}</div>
    </a>
  ) : (
    <div
      className="product-card"
      onClick={() => onSelect && onSelect(product.id)}
    >
      <div className="product-card-image">
        <img src={product.img} alt={product.name} />
      </div>
      <div className="product-card-title">{product.name}</div>
    </div>
  );
}
