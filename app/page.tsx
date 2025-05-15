"use client";
import { useEffect, useState } from "react";
import { NavBar } from "@/components/header";
import Image from "next/image";
import Link from "next/link";
import ProductGridServer from "@/components/product-grid-server";
import CategoryTabs from "@/components/category-tabs";
import { getProducts } from "@/lib/products";
import { Product } from "@/types/product";
import SkeletonProductCard from "@/components/productCardLoader"; // Import the SkeletonProductCard component
import SearchParamsWrapper from "@/components/searchParamComponent"; // Import the SearchParamsWrapper component
import { motion } from 'framer-motion';
import { useRouter } from "next/navigation";



function HomePage() {
  const router = useRouter();

  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>(["All"]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [loading, setLoading] = useState<boolean>(false);
  const STORE_ID = process.env.NEXT_PUBLIC_STORE_ID;

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true); // Set loading to true when fetching products
      if (!STORE_ID) {
        console.error("STORE_ID is not defined in the environment variables.");
        return;
      }
      try {
        const result = await getProducts(STORE_ID);
        const products = result?.products;
        setProducts(products || []); // Use an empty array if result.products is undefined

        const uniqueCategories = Array.from(
          new Set((products ?? []).map((product) => product.category))
        );
        setCategories(["All", ...uniqueCategories]);

        setFilteredProducts(products || []);
      }
      catch (error) {
        console.error("Error fetching products:", error); // Log the error to the console
      }

      finally {
        setLoading(false); // Set loading to false after fetching products
      }
    }

    fetchProducts();
  }, []);

  const handleCategorySelect = (category: string) => {
    router.push(`/?categories=${encodeURIComponent(category)}`, {
      scroll: false,
    }); // Update the URL with the selected category without a page refetch
    setLoading(true); // Set loading to true when a category is selected
  };

  return (
    <>
      <NavBar />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="pt-20"
      >
        {/* Hero Section */}
        <section className="px-4 pt-12 sm:px-16 md:px-20 flex justify-center items-center w-full">
          <div className="bg-[#a6d37eec] flex justify-between rounded-2xl items-center w-full h-[26rem] sm:h-80 lg:h-96 sm:aspect-[6/3] lg:aspect-[6/2] relative overflow-hidden">
            <Image
              src="/destorah bg-image.png"
              alt=""
              objectFit="cover"
              objectPosition="center"
              layout="fill"
              className="z-[-1]"
            />
            <div className="flex flex-col md:w-[90%] gap-2 md:gap-4 pl-4 md:pl-12 ">
              <span className="text-2xl text-center sm:text-left md:text-3xl lg:text-4xl pr-4 sm:pr-0 font-medium lg:w-[40%] text-[#262626]">
                Taste of Home, Anywhere in the World
              </span>
              <span className="text-base w-[85%] text-center sm:text-left md:text-lg  lg:text-lg lg:w-[50%] font-normal text-[#3B3B3B]">
                Enjoy Authentic Nigerian Food Products, Delivered to Your
                Doorstep – No Matter Where You Are!
              </span>
              <Link href="/#shop">
                <button className="bg-[#F5B937] mx-auto sm:mx-0 text-[#FAFAFA] text-base font-medium rounded-xl px-6 sm:px-8 py-3 mt-4 flex items-center justify-center w-fit">
                  Explore Products
                </button>
              </Link>
            </div>
            <div className="flex items-center justify-center w-[50%] absolute right-0 bottom-0">
              <Image
                src="/foods destorah.png"
                alt="African food products"
                width={500}
                height={300}
                objectFit="contain"
                objectPosition="center"
                layout="responsive"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </section>
        <SearchParamsWrapper
          setSelectedCategory={setSelectedCategory}
          setFilteredProducts={setFilteredProducts}
          products={products}
        >
          {/* Shop by Category */}
          <section
            className="py-4 mb-12 w-full flex flex-col sm:py-14 sm:px-14 md:py-20 md:px-8 relative"
            id="shop"
          >
            <div className="container flex w-full flex-col">
              <div className="flex justify-between items-center gap-4 mb-8 flex-wrap lg:flex-nowrap w-full">
                <h2 className="font-medium text-2xl sm:text-4xl">
                  Shop by Category
                </h2>
                <CategoryTabs
                  categories={categories}
                  selectedCategory={selectedCategory}
                  onSelectCategory={handleCategorySelect}
                  setLoading={setLoading}
                  loading={loading}
                />
              </div>

              {loading ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {Array.from({ length: 8 }).map((_, index) => (
                    <SkeletonProductCard key={index} detailedView={false} />
                  ))}
                </div>
              ) : (
                <ProductGridServer products={filteredProducts} />
              )}
            </div>
          </section>
        </SearchParamsWrapper>
        <section className="px-4 pt-4 sm:px-16 md:px-20 flex flex-col justify-center items-center w-full bg-[#1E2E10] relative overflow-hidden min-h-screen lg:h-[35rem]">
          <div className="flex w-full h-[1px] bg-[#ffd900d8] absolute top-16  lg:top-[14%]"></div>
          <div className="flex w-full h-[1px] bg-[#ffd900d8] absolute bottom-16 lg:bottom-[14%]"></div>
          <div className="flex h-full w-[1px] bg-[#ffd900d8] absolute top-[0%] right-4 sm:right-16 md:right-20"></div>
          <div className="flex h-full w-[1px] bg-[#ffd900d8] absolute top-[0%] left-4 sm:left-16 md:left-20"></div>
          <span className="font-medium text-2xl sm:text-4xl text-[#FAFAFA] self-start w-fit justify-start absolute top-0 left-[7%] text-left flex p-6 mb-8">
            How Does it Work?
          </span>
          <div className="flex sm:px-0 justify-center gap-2 items-center flex-wrap min-h-96">
            <div className="relative flex overflow-hidden justify-center items-center aspect-square w-full sm:w-auto h-64 sm:h-96">
              <span className="flex justify-center items-center aspect-square w-full h-full">
                <Image
                  alt=""
                  src={"/bg rubber oil.png"}
                  layout="fill"
                  objectFit="contain"
                  objectPosition="center"
                ></Image>
              </span>

              <div className="flex absolute bottom-0 left-0 justify-center items-center aspect-square w-[80%] h-[80%]">
                <Image
                  alt=""
                  src={"/dried_shrimp_three 1.png"}
                  layout="fill"
                  objectFit="contain"
                  objectPosition="center"
                ></Image>
              </div>
            </div>
            <div className="relative flex justify-center items-center aspect-square w-[95%] sm:w-auto h-64 sm:h-96">
              <Image
                alt=""
                src={"/Frame 125.svg"}
                layout="fill"
                objectFit="contain"
                objectPosition="center"
                quality={100} // Increase the picture quality
              ></Image>
            </div>
          </div>
        </section>
        <section className="flex justify-center items-center relative">
          <div className="absolute inset-0 z-[-1]">
            <Image
              alt=""
              src="/farm freshness.png"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          <div className="flex flex-col justify-center items-center text-center h-[25rem] w-[95%] sm:min-h-80 md:w-[80%] bg-radial-gradient relative px-4">
            <span className="font-medium text-2xl sm:text-4xl text-[#141414]">
              Get Nigerian Farm Freshness Today!
            </span>
            <span className="font-normal text-base sm:text-lg text-[#3B3B3B] mt-4">
              Farm-fresh food with rich tradition. Delivered to your home,
              wherever that may be.
            </span>
            <Link href="/#shop">
              <button className="bg-[#F5B937] text-[#FAFAFA] text-base font-medium rounded-xl px-6 sm:px-8 py-3 mt-4 flex items-center justify-center w-fit">
                Shop All Products
              </button>
            </Link>
          </div>
        </section>
      </motion.div>
    </>
  );
};
export default HomePage;
