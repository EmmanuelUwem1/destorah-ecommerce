"use client";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";
import SkeletonProductCard from "@/components/productCardLoader"; // Import Skeleton loader

const SearchParamsLogic = ({
  setSelectedCategory,
  setFilteredProducts,
  products,
}: any) => {
  const searchParams = useSearchParams();

  useEffect(() => {
    const categoryParam = searchParams.get("categories") || "All";
    const decodedCategoryParam = decodeURIComponent(categoryParam);

    // Only update the selected category if it has changed
    setSelectedCategory((prevCategory: string) => {
      if (prevCategory !== decodedCategoryParam) {
        return decodedCategoryParam;
      }
      return prevCategory;
    });

    // Only update the filtered products if the category has changed
    setFilteredProducts((prevProducts: any[]) => {
      if (decodedCategoryParam === "All") {
        return products;
      }
      return products.filter(
        (product: any) => product.category === decodedCategoryParam
      );
    });
  }, [searchParams, products, setSelectedCategory, setFilteredProducts]);

  return null; // No UI needed, just logic processing
};

// Accept `children` prop so the wrapped content gets displayed
const SearchParamsWrapper = ({ children, ...props }: any) => (
  <Suspense
    fallback={
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, index) => (
          <SkeletonProductCard key={index} detailedView={false} />
        ))}
      </div>
    }
  >
    <SearchParamsLogic {...props} />
    {children} {/* Render wrapped content */}
  </Suspense>
);

export default SearchParamsWrapper;
