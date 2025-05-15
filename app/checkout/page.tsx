'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaTrash } from 'react-icons/fa';
import Link from 'next/link';
import { formatCurrency } from '@/lib/utils';
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation';
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
  amount: string;
}

const CheckoutPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [subtotal, setSubtotal] = useState(0);
  const shippingCharge = 50; // shipping charge
const router = useRouter();
  const handleBack = () => {
    router.back(); // Go back to the previous page
  }
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cartItem') || '[]');
    setCartItems(items);
    calculateSubtotal(items);
  }, []);

  const calculateSubtotal = (items: CartItem[]) => {
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setSubtotal(total);
  };

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    const updatedItems = cartItems.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedItems);
    localStorage.setItem('cartItem', JSON.stringify(updatedItems));
    calculateSubtotal(updatedItems);
  };

  const removeItem = (id: number) => {
    const updatedItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedItems);
    localStorage.setItem('cartItem', JSON.stringify(updatedItems));
    calculateSubtotal(updatedItems);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container flex flex-col justify-start items-center mx-auto px-4 md:px-20 fixed w-screen lg:w-[98.87vw] xl:w-screen 2xl:w-full h-full top-0 left-0 right-0 z-[1000000] bg-[#fdfdfd] overflow-y-scroll pb-8"
    >
      <div className="flex justify-between w-full items-center h-20 md:h-[6rem] border-b border-[#CCCCCC]">
        <div className="font-medium text-lg md:text-2xl text-[#3B3B3B] flex justify-between items-center h-20 md:h-[6rem]">
          Your Cart.
        </div>
        <span className="relative h-4 w-4 cursor-pointer" onClick={handleBack}>
          <Image
            src="/x close.png"
            alt=""
            layout="fill"
            objectFit="contain"
            objectPosition="center"
          ></Image>
        </span>
      </div>

      {cartItems.length === 0 ? (
        <div className="self-center m-auto flex flex-col justify-center items-center h-[100%]">
          <div className="flex flex-col justify-center items-center">
            <div className="relative  aspect-square w-56 m-auto">
              <Image
                alt=""
                src={"/empty cart.png"}
                layout="fill"
                objectFit="contain"
                objectPosition="center"
              ></Image>
            </div>
          </div>
          <p className="text-lg font-normal mt-4">Your Cart is Empty </p>
        </div>
      ) : (
        <>
          <div className="flex flex-wrap relative justify-start items-center gap-4 mt-4 pb-36 sm:pb-0">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex w-full min-w-80 sm:min-w-[24rem] sm:w-1/2 lg:w-96 items-center justify-start border border-[#E6E6E6] gap-3 rounded-xl p-2 relative"
              >
                <div className="flex aspect-square h-28 sm:h-36 items-center relative bg-[#FFFFFF] border border-[#E6E6E6] rounded-xl">
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    objectFit="contain"
                    layout="fill"
                    objectPosition="center"
                  />
                </div>
                <div className="flex flex-col justify-between items-start gap-2">
                  <div className="flex flex-col justify-start items-start gap-2 pr-4">
                    <p className="text-lg font-medium">{`${item.name}`}</p>
                    <p className="text-lg font-medium text-[#416422]">
                      {formatCurrency(item.price.toFixed(2))}
                    </p>
                  </div>
                  <div className="flex items-center gap-0 rounded-sm border border-[#CCCCCC] pt-0">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="bg-[#F2F2F2] border-r border-[#CCCCCC] text-[#3B3B3B] text-base font-medium px-4 py-2"
                    >
                      -
                    </button>
                    <span className="bg-[#F2F2F2] text-[#3B3B3B] text-base font-medium border-r border-[#CCCCCC] px-4 py-2">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="bg-[#F2F2F2] text-[#3B3B3B] text-base font-medium rounded-none px-4 py-2"
                    >
                      +
                    </button>
                  </div>
                </div>
                <span
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 cursor-pointer absolute right-4 top-4"
                >
                  <FaTrash />
                </span>
              </div>
            ))}
          </div>
          <div className="mt-4 w-full sm:w-1/2 flex flex-col justify-start items-start gap-2 fixed bottom-0 left-0  right-0 sm:relative bg-[#fdfdfd] sm:p-0 p-4">
            <p className="font-normal justify-between items-center w-full text-base text-[#262626] hidden lg:flex">
              <p>Subtotal:</p> <p>{formatCurrency(subtotal.toFixed(2))}</p>
            </p>
            <p className="font-normal justify-between items-center w-full text-base hidden lg:flex text-[#262626]">
              <p>Shipping:</p>{" "}
              <p>{formatCurrency(shippingCharge.toFixed(2))}</p>
            </p>
            <p className="font-medium flex justify-between items-center w-full text-lg text-[#262626]">
              <p>Total:</p>{" "}
              <p> {formatCurrency((subtotal + shippingCharge).toFixed(2))}</p>
            </p>
            <button className="bg-[#F5B937] text-[#FAFAFA] text-base font-medium rounded-xl px-6 sm:px-8 py-3 mt-4 flex items-center justify-center w-full">
              Check Out
            </button>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default CheckoutPage;
