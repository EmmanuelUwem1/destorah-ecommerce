import ProductCard from "./productCard";
import { Product } from "@/types/product";

interface ProductGridServerProps {
  products: Product[];
}

const ProductGridServer = ({ products }: ProductGridServerProps) => {
  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 responsive gap-3 sm:gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          showQuantityControls={false}
          detailedView={false}
          selectedTab=""
        />
      ))}
    </div>
  );
};

export default ProductGridServer;
