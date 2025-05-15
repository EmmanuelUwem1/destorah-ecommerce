

export interface Benefits {
  items: string[];
}

export interface Review {
  reviewer: string;
  review: string;
  rating: number;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  benefits?: Benefits;
  amount?: string; // Make amount optional
  price: string;
  imageUrl: string;
  // categoryId: string;
  stock: string;
  category: string;
  reviews?: Review[]; // Add reviews property
  storeId?: string; // Optional property for store ID
  extra?: Record<string, any>; // Optional property for additional data
}