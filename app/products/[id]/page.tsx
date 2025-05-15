import { getProducts } from "@/lib/products";
import Link from "next/link";
import Image from "next/image";
import TabsComponent from "@/components/TabsComponent";



export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const productId = params.id;

 const STORE_ID = process.env.NEXT_PUBLIC_STORE_ID;
  if (!STORE_ID) {
    throw new Error("STORE_ID is not defined in the environment variables.");
  }
  const result = await getProducts(STORE_ID);
  const product = result?.products?.find((p) => p.id === productId);
  const randomProducts = (result?.products ?? []).filter((p) => product && !Array.isArray(product) && p.id !== product.id) // Exclude the current product
    .sort(() => 0.5 - Math.random()) // Shuffle the array
    .slice(0, 4); // Select the first four products
 if (!product) {
   return {
     notFound: true,
   };
 }
  return (
    <div className="pt-12 pb-40 sm:px-16 md:px-20 container flex justify-start items-start flex-col mx-auto px-4">
      <Link
        scroll={false}
        href="/"
        className="relative flex justify-center items-center  bg-[#F2F2F2]  text-[#808080] text-xs rounded-xl font-normal p-3 gap-3 mb-6"
      >
        <span className="relative flex justify-center items-center w-fit">
          <Image alt="" src={"/arrow left.png"} height={10} width={5}></Image>
        </span>
        <span>Our Products</span>
      </Link>

      <TabsComponent product={product} randomProducts={randomProducts} />
    </div>
  );
}
