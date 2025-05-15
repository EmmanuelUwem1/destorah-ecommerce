"use client";
import ProductCard from "./productCard";
import { Product } from "@/types/product"; // Import the Product type

interface ProductGridProps {
  products: Product[];
  showQuantityControls?: boolean;
}

export default function ProductGrid({
  products,
  showQuantityControls = false,
}: ProductGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 responsive gap-3 sm:gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          showQuantityControls={showQuantityControls}
          detailedView={false}
          selectedTab=""
        />
      ))}
    </div>
  );
}