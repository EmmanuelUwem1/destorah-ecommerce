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
  benefits: Benefits;
};



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

    const products = response.data;
    console.log("data uploaded: store Id" + storeId ); // Log the store ID and fetched products
    // Log the fetched products
    console.log("Fetched products successfully:", products);
   
    return { success: true, products };
    
  } catch (error: any) {
    if (axios.isAxiosError(error) && error.response) {
      const errorMessage =
        error.response.data?.message || "Failed to fetch products";
      console.error("Error fetching products:", errorMessage);
      return { success: false, message: errorMessage };
    }

    console.error("Unexpected error fetching products:", error);
    return { success: false, message: "An unexpected error occurred" };
  }
}

