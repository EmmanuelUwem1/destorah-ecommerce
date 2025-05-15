"use client";

import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
interface CategoryTabsProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  setLoading: (loading: boolean) => void;
  loading: boolean;
}

function CategoryTabs ({
  categories,
  selectedCategory,
  onSelectCategory,
  setLoading,
  loading,
}: CategoryTabsProps) {
  const handleCategoryClick = (category: string) => {
    setLoading(true);
    onSelectCategory(category); // Call the parent function to update the selected category
    setTimeout(() => setLoading(false), 1500); // Set loading to false after 3 seconds
  };
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("categories") || "All"; // Get the selected category from the URL or default to "All"
  const decodedCategoryParam = decodeURIComponent(categoryParam); // Decode the category parameter from the URL
  const [selectedCat, setSelectedCat] = useState<string>(decodedCategoryParam || "All");

  useEffect(() => {
    setSelectedCat(decodedCategoryParam); // Update the selected category state when the component mounts
  }, [decodedCategoryParam]);

  return (
    <div className="flex w-full lg:w-[60%] overflow-x-auto border-y-[1px] py-2 border-y-[#416422] gap-2 scrollbar-hide">
      {loading
        ? Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="animate-pulse bg-gray-300 rounded-lg h-10 w-24"
            ></div>
          ))
        : categories.map((category) => (
            <Button
              key={category}
              variant={selectedCat === category ? "default" : "outline"}
              className="whitespace-nowrap"
              onClick={() => {
                handleCategoryClick(category);
                setSelectedCat(category);
              }}
            >
              {category}
            </Button>
          ))}
    </div>
  );
};

export default CategoryTabs;
