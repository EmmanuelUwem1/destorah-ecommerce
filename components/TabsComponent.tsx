"use client";
import { useState } from "react";
import ProductCard from "@/components/productCard";
import { Product } from "@/types/product";


interface TabsComponentProps {
  product: Product;
  randomProducts: Product[];
}



const TabsComponent = ({ product, randomProducts }: TabsComponentProps) => {

  const [selectedTab, setSelectedTab] = useState<string>("Description");

  return (
    <>
      <div className="flex flex-col gap-6 w-full">
        <div className="flex justify-start items-center gap-9 h-12 mb-6  border-[#CCCCCC] overflow-x-auto border-b-[1px] sm:border-t-[1px] scrollbar-hide">
          <button
            className={`whitespace-nowrap ${
              selectedTab === "Description" ? "tab-active h-full flex-col justify-between items-center" : ""
            }`}
            onClick={() => setSelectedTab("Description")}
          >
            Description
          </button>
          <button
            className={`whitespace-nowrap ${
              selectedTab === "Reviews" ? "tab-active h-full flex-col justify-between items-center" : ""
            }`}
            onClick={() => setSelectedTab("Reviews")}
          >
            Reviews
          </button>
          <button
            className={`whitespace-nowrap ${
              selectedTab === "Shipping and Delivery" ? "tab-active h-full flex-col justify-between items-center" : ""
            }`}
            onClick={() => setSelectedTab("Shipping and Delivery")}
          >
            Shipping and Delivery
          </button>
        </div>

        <ProductCard
          product={product}
          showQuantityControls={true}
          detailedView={true}
          selectedTab={selectedTab}
        />
      </div>
      {selectedTab === "Description" && (
        <>
          <span className="mt-20 py-6 font-medium text-2xl text-[#262626]">
            Shop Other Products
          </span>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 responsive gap-3 sm:gap-6 w-full">
            {randomProducts
              ? randomProducts.map((randomProduct) => (
                  <ProductCard
                    key={randomProduct.id}
                    product={randomProduct}
                    showQuantityControls={false}
                    detailedView={false}
                    selectedTab="description"
                  />
                ))
              : ""}
          </div>
        </>
      )}
    </>
  );
};


export default TabsComponent;