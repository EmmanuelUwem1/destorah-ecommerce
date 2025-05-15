"use server";
import { Product } from "@/types/product";
import axios from "axios";
import { Benefits } from "@/types/product";
import { Review } from "@/types/product";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

// Product Types
type ProductData = {
  name: string;
  description: string;
  price: string;
  stock: string;
  category: string;
  storeId?: string;
  imageUrl: string;
  extra?: Record<string, any>;
  id: string;
  benefits?: Benefits;
};


const MockProducts: ProductData[] = [
  {
    name: "Cassava Paste",
    description: `<span>
        Freshly processed, sifted for a smooth texture
      <ul>
      <li> 100 % organic: no Additives or preservatives </li>
      <li> straight from our Nigerian farm to your table </li>
      <li> Rich taste , authentic traditional taste for every meal. </li>
      </ul >
  </span>`,
    price: "10000",
    stock: "10",
    id: "1",
    category: "Grain & Staple",
    imageUrl: "/productCassava 1.png",
  },
  {
    name: "Palm Oil",
    description: `<span>
        Freshly processed
      <ul>
      <li> 100 % organic: no Additives or preservatives </li>
      <li> straight from our Nigerian farm to your table </li>
      <li> Rich taste , authentic traditional taste for every meal. </li>
      </ul >
  </span>`,
    price: "10000",
    stock: "10",
    id: "2",
    category: "Oils and Condiments",
    imageUrl: "/Palm-Oil-1L 1.png",
  },
  {
    name: "Cassava Paste",
    description: `<span>
        Freshly processed, sifted for a smooth texture
      <ul>
      <li> 100 % organic: no Additives or preservatives </li>
      <li> straight from our Nigerian farm to your table </li>
      <li> Rich taste , authentic traditional taste for every meal. </li>
      </ul >
  </span>`,
    price: "10000",
    stock: "10",
    id: "3",
    category: "Grain & Staple",
    imageUrl: "/fufu.png",
  },
  {
    name: "Palm Oil",
    description: `<span>
        Freshly processed
      <ul>
      <li> 100 % organic: no Additives or preservatives </li>
      <li> straight from our Nigerian farm to your table </li>
      <li> Rich taste , authentic traditional taste for every meal. </li>
      </ul >
  </span>`,
    price: "10000",
    stock: "10",
    id: "4",
    category: "Oils and Condiments",
    imageUrl: "/palm oil 2.png",
  },
  {
    name: "Cassava Paste",
    description: `<span>
        Freshly processed, sifted for a smooth texture
      <ul>
      <li> 100 % organic: no Additives or preservatives </li>
      <li> straight from our Nigerian farm to your table </li>
      <li> Rich taste , authentic traditional taste for every meal. </li>
      </ul >
  </span>`,
    price: "10000",
    stock: "10",
    id: "5",
    category: "Grain & Staple",
    imageUrl: "/productCassava 1.png",
  },
  {
    name: "Palm Oil",
    description: `<span>
        Freshly processed
      <ul>
      <li> 100 % organic: no Additives or preservatives </li>
      <li> straight from our Nigerian farm to your table </li>
      <li> Rich taste , authentic traditional taste for every meal. </li>
      </ul >
  </span>`,
    price: "10000",
    stock: "10",
    id: "6",
    category: "Oils and Condiments",
    imageUrl: "/Palm-Oil-1L 1.png",
  },
  {
    name: "Cassava Paste",
    description: `<span>
        Freshly processed, sifted for a smooth texture
      <ul>
      <li> 100 % organic: no Additives or preservatives </li>
      <li> straight from our Nigerian farm to your table </li>
      <li> Rich taste , authentic traditional taste for every meal. </li>
      </ul >
  </span>`,
    price: "10000",
    stock: "10",
    id: "7",
    category: "Grain & Staple",
    imageUrl: "/fufu.png",
  },
  {
    name: "Palm Oil",
    description: `<span>
        Freshly processed
      <ul>
      <li> 100 % organic: no Additives or preservatives </li>
      <li> straight from our Nigerian farm to your table </li>
      <li> Rich taste , authentic traditional taste for every meal. </li>
      </ul >
  </span>`,
    price: "10000",
    stock: "10",
    id: "8",
    category: "Oils and Condiments",
    imageUrl: "/palm oil 2.png",
  },
];
export async function getProducts(
  storeId: string
): Promise<{ success: boolean; products?: ProductData[]; message?: string }> {
  try {
    // Send a GET request to fetch products for the given store
    const response = await axios.get(
      `${BACKEND_URL}/product/store/${storeId}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // const products = response.data;
    console.log("data uploaded: store Id" + storeId ); // Log the store ID and fetched products
    // Log the fetched products
    const products = MockProducts;
    console.log("Fetched products successfully:", products);
   
    return { success: true, products };
    
  } catch (error: any) {
    if (axios.isAxiosError(error) && error.response) {
      const errorMessage =
        error.response.data?.message || "Failed to fetch products";
      console.error("Error fetching products:", errorMessage);
      return { success: false, message: errorMessage, products:MockProducts };
    }

    console.error("Unexpected error fetching products:", error);
    return {
      success: false,
      message: "An unexpected error occurred",
 
      products: MockProducts,
    };
  }
}

