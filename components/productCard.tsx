"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react"; // Import useEffect
import { formatCurrency } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Check } from "lucide-react";
import { Product, Review } from "@/types/product";
import SkeletonProductCard from "@/components/productCardLoader";
import { motion, AnimatePresence } from 'framer-motion';
import ShippingAndDeliveryComponent from "./shippingAndDelivery";
import ReviewsComponent from "./reviews";
import DOMPurify from "dompurify";

interface ProductCardProps {
  product: Product;
  showQuantityControls: boolean;
  detailedView: boolean;
  selectedTab: string;
}


function ProductCard({
  product,
  showQuantityControls,
  detailedView,
  selectedTab,
}: ProductCardProps) {
  const [addedToCart, setAddedToCart] = useState(false);
  const [showText, setShowText] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
    const [safeHTML, setSafeHTML] = useState<string | null>(null);

  useEffect(() => {
    // Retrieve cart items from localStorage
    const cartData = localStorage.getItem("cartItem");
    const cart: any[] = cartData ? JSON.parse(cartData) : [];
    const isProductInCart = cart.some(
      (item: { id: string }) => item.id === product.id
    );
    setAddedToCart(isProductInCart);
    setLoading(false);
  }, [product.id]);

  useEffect(() => {
   const sanitizedDescription = DOMPurify.sanitize(product.description || '');
   setSafeHTML(sanitizedDescription);
  }, [loading, product.description]);

  const handleAddToCart = () => {
    setShowText(true);
    setAddedToCart(true);
    setTimeout(() => setShowText(false), 3000); // Show text for 3 seconds

    // Add item to cart in localStorage
    const cartData = localStorage.getItem("cartItem");
    const cart: any[] = cartData ? JSON.parse(cartData) : [];
    const updatedCart = [...cart, { ...product, quantity }];
    // localStorage.setItem("cartItem", JSON.stringify(updatedCart));
    // After modifying the cart
    localStorage.setItem("cartItem", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("storage"));
  };

  const handleBuyNow = () => {
    //buy now functionality
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  if (loading) {
    return <SkeletonProductCard detailedView={detailedView } />;
  }


  const cardContent = (
    <>
      <div
        className={`relative ${
          detailedView
            ? "w-full md:w-1/2 h-96 border-[1px] border-[#CCCCCC] rounded-lg relative overflow-hidden bg-[#cccccc59]"
            : "aspect-square"
        }`}
      >
        <Image
          src={product.imageUrl || "/placeholder.svg"}
          alt={product.name}
          layout="fill"
          objectFit="contain"
          objectPosition="center"
        />
        {!detailedView && (
          <Button
            size="sm"
            variant="ghost"
            className={`absolute md:top-2 top-2 right-2 sm:right-4 sm:top-4 md:left-2 h-8 p-0 transition-all duration-500 bg-white/75 ${
              showText ? "w-auto px-4" : "w-8"
            }`}
            onClick={(e) => {
              e.preventDefault();
              handleAddToCart();
            }}
          >
            {showText ? (
              <span className="text-[#416422] text-xs sm:text-sm">
                Added to Cart
              </span>
            ) : addedToCart ? (
              <Check className="h-4 w-4 mr-1 text-[#416422]" />
            ) : (
              <ShoppingCart className="h-4 w-4 mr-1" />
            )}
          </Button>
        )}
      </div>

      <div className="px-3 py-2 w-full md:w-1/2 flex flex-col justify-between items-start gap-2">
        {detailedView && (
          <>
            <h2 className="font-normal text-2xl text-[#262626]">{`${product.name}`}</h2>
            <h2 className="font-medium text-4xl text-[#416422]">
              {formatCurrency(product.price)}
            </h2>
          </>
        )}
        {detailedView && (
          <>
            
            <div
              className="dangerously-set-html font-normal pt-4 text-base text-[#545454]"
              dangerouslySetInnerHTML={{ __html: safeHTML || "" }}
            />
            {/* <div className="flex flex-col justify-start items-start gap-4 font-normal text-xs text-[#545454] pt-4">
              {product.benefits?.items?.map((benefit, index) => (
                <span key={index} className="flex items-center gap-2">
                  <span className="relative flex justify-center items-center w-4 h-4">
                    <Image alt="" src={"/green tick.png"} layout="fill"></Image>
                  </span>
                  <span>{benefit}</span>
                </span>
              ))}
            </div> */}
          </>
        )}
        {showQuantityControls && (
          <div className="flex flex-col items-start w-full gap-4 pt-4">
            <div className="flex items-center gap-0 rounded-sm border border-[#CCCCCC] pt-0">
              <button
                className="bg-[#F2F2F2] border-r border-[#CCCCCC] text-[#3B3B3B] text-base font-medium px-4 py-2"
                onClick={(e) => {
                  e.preventDefault();
                  decrementQuantity();
                }}
              >
                -
              </button>
              <span className="bg-[#F2F2F2] border-r border-[#CCCCCC] text-[#3B3B3B] text-base font-medium rounded-none px-4 py-2">
                {quantity}
              </span>
              <button
                className="bg-[#F2F2F2] text-[#3B3B3B] text-base font-medium rounded-sm px-4 py-2"
                onClick={(e) => {
                  e.preventDefault();
                  incrementQuantity();
                }}
              >
                +
              </button>
            </div>
            {detailedView && (
              <>
                <div className="flex w-full gap-4 mt-4">
                  <span
                    className={`bg-[#E6E6E6] text-[#808080] text-base font-medium rounded-xl cursor-pointer w-full py-3 flex justify-center items-center transition-all duration-300 ${
                      addedToCart ? "add-to-cart-animation" : ""
                    }`}
                    onClick={handleAddToCart}
                  >
                    {addedToCart ? "Added to Cart" : "Add to Cart"}
                  </span>
                  <span
                    className="bg-[#F5B937] text-[#FAFAFA] cursor-pointer text-base font-medium rounded-xl w-full py-3 flex justify-center items-center"
                    onClick={handleBuyNow}
                  >
                    Buy Now
                  </span>
                </div>
                <div className="flex mt-6">Share Product</div>
                <div className="flex gap-6 mt-4">
                  <Link href={"/"} className="relative h-4 w-4">
                    <Image
                      src="/wa.png"
                      layout="fill"
                      objectFit="contain"
                      objectPosition="center"
                      alt="WhatsApp"
                    ></Image>
                  </Link>
                  <Link href={"/"} className="relative h-4 w-4">
                    <Image
                      src="/fb.png"
                      layout="fill"
                      objectFit="contain"
                      objectPosition="center"
                      alt="Facebook"
                    ></Image>
                  </Link>
                  <Link href={"/"} className="relative h-4 w-4">
                    <Image
                      src="/li.png"
                      layout="fill"
                      objectFit="contain"
                      objectPosition="center"
                      alt="LinkedIn"
                    ></Image>
                  </Link>
                  <Link href={"/"} className="relative h-4 w-4">
                    <Image
                      src="/x.png"
                      layout="fill"
                      objectFit="contain"
                      objectPosition="center"
                      alt="X"
                    ></Image>
                  </Link>
                </div>
              </>
            )}
          </div>
        )}
      </div>
      {!detailedView && (
        <div className="sm:px-3 sm:py-2 p-1 absolute sm:bottom-4 bottom-2 left-1/2 transform -translate-x-1/2 bg-[#FAFAFA] flex w-[95%] sm:w-[90%] justify-between items-center gap-1 rounded-xl border-[1px] border-[#E6E6E6]">
          <div className="flex flex-col justify-center w-full items-start">
            <h3 className="custom-width truncate overflow-hidden text-overflow-ellipsis whitespace-nowrap">
              {product.name}
            </h3>

            <span className="font-normal small-price text-xs sm:text-xs text-[#808080] truncate overflow-hidden text-overflow-ellipsis whitespace-nowrap">
              {formatCurrency(product.price)}
            </span>
          </div>
          <span className="font-medium text-xs sm:text-lg price px-2 py-1 rounded-[5px] bg-[#DAEDCA] text-[#416422]">
            {formatCurrency(product.price)}
          </span>
        </div>
      )}
    </>
  );

  if (!detailedView && !showQuantityControls) {
    return (
      <Link
        href={`/products/${product.id}`}
        className="aspect-square border-[1px] w-full border-[#CCCCCC] rounded-lg relative overflow-hidden bg-[#cccccc59]"
      >
        {cardContent}
      </Link>
    );
  }

  if (detailedView && showQuantityControls && selectedTab === "Description") {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{opacity:0, x:-100}}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="flex w-full justify-start items-start gap-8 flex-wrap md:flex-nowrap"
        >
          {cardContent}
        </motion.div>
      </AnimatePresence>
    );
  }
  if (detailedView && showQuantityControls && selectedTab === "Reviews") {
    return <ReviewsComponent reviews={product.reviews} />;
  }
  if (
    detailedView &&
    showQuantityControls &&
    selectedTab === "Shipping and Delivery"
  ) {
    return <ShippingAndDeliveryComponent />;
  }





return cardContent;
};
export default ProductCard;