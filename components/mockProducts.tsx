import { Benefits } from "@/types/product";
import { Product } from "@/types/product";
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
export const Mockproducts: Product[] = [
  {
    id: "1",
    name: "Cassava Flour",
    description:
      "Premium quality cassava flour, Freshly processed, sifted for a smooth texture.",
    benefits: {
      items: [
        "100% Organic: No additives or preservatives.",
        "Straight from our Nigerian farm to your table.",
        "Rich Taste, Authentic traditional taste for every meal.",
      ],
    },
    amount: "2kg",
    price: "5000",
    imageUrl: "/productCassava 1.png",
    stock: "25",
    category: "Grain & Staple",
    reviews: [
      { reviewer: "John Doe", review: "Great quality and taste!", rating: 5 },
      {
        reviewer: "Jane Smith",
        review: "Perfect for my recipes.",
        rating: 4,
      },
    ],
  },
  {
    id: "2",
    name: "Palm Oil",
    description:
      "Premium quality red oil, Freshly processed. No additives or preservatives.",
    benefits: {
      items: [
        "100% Organic: No additives or preservatives.",
        "Straight from our Nigerian farm to your table.",
        "Rich Taste, Authentic traditional taste for every meal.",
      ],
    },
    amount: "1 Litre",
    price: "4500",
    imageUrl: "/Palm-Oil-1L 1.png",
    stock: "30",
    category: "Oil & Condiments",
    reviews: [
      { reviewer: "Alice Johnson", review: "Excellent quality!", rating: 5 },
      { reviewer: "Bob Brown", review: "Very flavorful.", rating: 4 },
    ],
  },
  {
    id: "3",
    name: "Cassava Paste",
    description:
      "Premium quality cassava flour, Freshly processed, sifted for a smooth texture.",
    benefits: {
      items: [
        "100% Organic: No additives or preservatives.",
        "Straight from our Nigerian farm to your table.",
        "Rich Taste, Authentic traditional taste for every meal.",
      ],
    },
    amount: "1Kg",
    price: "4500",
    imageUrl: "/fufu.png",
    stock: "30",
    category: "Seafood & Protein",
    reviews: [
      {
        reviewer: "Charlie Davis",
        review: "Great texture and taste.",
        rating: 5,
      },
      { reviewer: "Dana Lee", review: "Highly recommend!", rating: 4 },
    ],
  },
  {
    id: "4",
    name: "Palm oil",
    description: "Premium quality Palm Oil, Freshly processed.",
    benefits: {
      items: [
        "100% Organic: No additives or preservatives.",
        "Straight from our Nigerian farm to your table.",
        "Rich Taste, Authentic traditional taste for every meal.",
      ],
    },
    amount: "1L",
    price: "4500",
    imageUrl: "/palm oil 2.png",
    stock: "30",
    category: "Oil & Condiments",
    reviews: [
      { reviewer: "Eve Martinez", review: "Fantastic quality!", rating: 5 },
      { reviewer: "Frank Wilson", review: "Will buy again.", rating: 4 },
    ],
  },
  {
    id: "5",
    name: "Cassava Flour",
    description:
      "Premium quality cassava flour, Freshly processed, sifted for a smooth texture.",
    benefits: {
      items: [
        "100% Organic: No additives or preservatives.",
        "Straight from our Nigerian farm to your table.",
        "Rich Taste, Authentic traditional taste for every meal.",
      ],
    },
    amount: "2kg",
    price: "5000",
    imageUrl: "/productCassava 1.png",
    stock: "25",
    category: "Grain & Staple",
    reviews: [
      { reviewer: "Grace Kim", review: "Excellent product!", rating: 5 },
      { reviewer: "Henry Clark", review: "Very satisfied.", rating: 4 },
    ],
  },
  {
    id: "6",
    name: "Palm Oil",
    description: "Premium quality Palm oil Freshly processed.",
    benefits: {
      items: [
        "100% Organic: No additives or preservatives.",
        "Straight from our Nigerian farm to your table.",
        "Rich Taste, Authentic traditional taste for every meal.",
      ],
    },
    amount: "1 Litre",
    price: "4500",
    imageUrl: "/Palm-Oil-1L 1.png",
    stock: "30",
    category: "Oil & Condiments",
    reviews: [
      {
        reviewer: "Ivy Scott",
        review: "Great taste and quality.",
        rating: 5,
      },
      { reviewer: "Jack Turner", review: "Highly recommend.", rating: 4 },
    ],
  },
  {
    id: "7",
    name: "Cassava Paste",
    description:
      "Premium quality cassava flour, Freshly processed, sifted for a smooth texture.",
    benefits: {
      items: [
        "100% Organic: No additives or preservatives.",
        "Straight from our Nigerian farm to your table.",
        "Rich Taste, Authentic traditional taste for every meal.",
      ],
    },
    amount: "1Kg",
    price: "4500",
    imageUrl: "/fufu.png",
    stock: "30",
    category: "Grain & Staple",
    reviews: [
      { reviewer: "Karen Young", review: "Amazing quality!", rating: 5 },
      { reviewer: "Leo Adams", review: "Will buy again.", rating: 4 },
    ],
  },
  {
    id: "8",
    name: "Palm oil",
    description: "Premium quality cassava red oil, Freshly processed.",
    benefits: {
      items: [
        "100% Organic: No additives or preservatives.",
        "Straight from our Nigerian farm to your table.",
        "Rich Taste, Authentic traditional taste for every meal.",
      ],
    },
    amount: "1L",
    price: "4500",
    imageUrl: "/palm oil 2.png",
    stock: "30",
    category: "Vegetables",
    reviews: [
      { reviewer: "Mia Brown", review: "Excellent quality!", rating: 5 },
      { reviewer: "Noah White", review: "Very flavorful.", rating: 4 },
    ],
  },
];
