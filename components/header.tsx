"use client";
import Image from "next/image";
import Link from "next/link";
import { LinkComponent } from "./LinkComponent";
import { Hamburger } from "./Hamburger";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export const NavBar = () => {
  const [sideNavActive, setSideNavActive] = useState(false);
  const [cartItems, setCartItems] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const updateCartCount = () => {
      const cartData = JSON.parse(localStorage.getItem("cartItem") || "[]");
      const itemCount = cartData.reduce(
        (total: any, item: { quantity: any; }) => total + item.quantity,
        0
      );
      setCartItems(itemCount);
    };

    // Initial update
    updateCartCount();

    // Listen for storage changes
    window.addEventListener("storage", updateCartCount);

    // Cleanup
    return () => {
      window.removeEventListener("storage", updateCartCount);
    };
  }, []);

  return (
    <>
      <nav
        className={`w-full z-[9999] fixed p-2 px-5 md:px-10 xl:p-6 xl:px-20 flex flex-row justify-between h-20 md:h-24 items-center bg-white shadow-md`}
        style={{ boxShadow: "0 4px 6px -1px rgba(204, 204, 204, 0.25)" }}
      >
        <Link href={"/"} className=" w-12 h-12 sm:w-20 sm:h-20 relative">
          <Image
            src={"/android-chrome-192x192.png"}
            alt="Destorah"
            objectFit="contain"
            layout="fill"
            objectPosition="center"
            priority
          />
        </Link>
        <div className="hidden md:flex">
          <LinkComponent path={""} color={"#F5B937"} text={"Home"} />
          <LinkComponent path={"about"} color={"#F5B937"} text={"About Us"} />
          <LinkComponent
            path={"contact-us"}
            color={"#f5b937"}
            text={"Contact Us"}
          />
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/checkout"
            className="relative h-8 w-8 p-2 flex items-center justify-center bg-[#FADB99] rounded-full"
          >
            <span className="relative h-6 w-6">
              <Image
                alt=""
                src={"/cart.png"}
                layout="fill"
                objectFit="contain"
                objectPosition="center"
              />
            </span>
            {cartItems > 0 && (
              <div className="absolute -top-2 -right-2 bg-[#416422] rounded-[100%] p-0">
                <span className="text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems < 10 ? cartItems : "10+"}
                </span>
              </div>
            )}
          </Link>
          <Link href="/" className="hidden md:flex">
            <button className="bg-[#F5B937] text-[#FAFAFA] text-base font-medium rounded-xl px-6 sm:px-8 py-3 flex items-center justify-center w-fit">
              Shop Now
            </button>
          </Link>
          <span
            onClick={() => setSideNavActive(!sideNavActive)}
            className="block md:hidden"
          >
            <Hamburger
              sidenavactive={!sideNavActive}
              color={sideNavActive ? "black" : "black"}
            />
          </span>
        </div>
        {sideNavActive && (
          <div className="w-full bg-white flex flex-col absolute top-0 left-0 pt-24 py-6 -z-20">
            <LinkComponent path={""} color={"#F5B937"} text={"Home"} />
            <LinkComponent path={"about"} color={"#F5B937"} text={"About Us"} />
            <LinkComponent
              path={"contact-us"}
              color={"#f5b937"}
              text={"Contact Us"}
            />
          </div>
        )}
      </nav>
    </>
  );
};
