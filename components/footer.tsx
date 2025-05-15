"use client";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaXTwitter } from "react-icons/fa6";

interface footerprops {
  trial: Boolean;
}

export const Footer = () => {
  return (
    <footer
      className={`w-[100%] flex flex-col md:items-start md:flex-row md:justify-between md:px-20 h-fit pt-16 md:pb-20 md:pt-10 bg-[#6A6967] relative`}
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/destorah bg-image.png"
          alt="destorah bg-image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="opacity-10"
        />
      </div>
      <section className="flex flex-col items-center self-start md:items-start border-b-[1px] border-[#F5B937] pb-5 mb-5 md:pb-0 md:mb-0 md:border-0 mx-6 md:mt-5 relative z-10">
        <div className="relative flex-col items-center md:items-start justify-start flex">
          <Link href="/" className="h-32 w-32 flex self-start relative mb-6">
            <Image
              src="/android-chrome-192x192.png"
              alt="Destorah"
              layout="fill"
              objectFit="contain"
              objectPosition="center"
            />
          </Link>
          <span className="text-[#E6E6E6] text-base">Destorah Foods</span>
          <span className="text-[#E6E6E6] text-base text-center md:text-left md:w-[40%]">
            No. 12 Divine Crescent Drive, Odani, Elelenwo, Port Harcourt
          </span>
        </div>
      </section>
      <section className="flex flex-col md:flex-row items-center justify-center border-b-[1px] border-[#F5B937] md:border-0 pb-5 mb-5 px-6 relative z-10">
        <section className="flex flex-col md:flex-row items-center md:items-start w-full">
          <section className="w-full flex flex-col items-center md:items-start md:mt-5">
            <header className="text-center">
              <h1 className="text-[#F5B937]">Apply for Jobs</h1>
            </header>
            <ul className="text-center md:text-start">
              <li className="text-[#E6E6E6]">Farm</li>
              <li className="text-[#E6E6E6]">Our shop</li>
              <li className="text-[#E6E6E6]">Contact us</li>
            </ul>
          </section>
          <section className="text-center mt-5 md:mr-10">
            <header>
              <h1 className="text-[#F5B937]">Company</h1>
            </header>
            <ul className="text-center md:text-start">
              <li className="text-[#E6E6E6]">Contact us</li>
              <li className="text-[#E6E6E6]">Terms and Conditions</li>
              <li className="text-[#E6E6E6]">Privacy Policies</li>
            </ul>
          </section>
          <section className="mt-5">
            <header className="w-full text-center">
              <h1 className="text-[#F5B937]">Socials</h1>
            </header>
            <article className="flex flex-row justify-between mt-2">
              <FaFacebook className="mr-4 text-[#E6E6E6]" />
              <FaLinkedin className="mr-4 text-[#E6E6E6]" />
              <FaXTwitter className="mr-4 text-[#E6E6E6]" />
            </article>
          </section>
        </section>
      </section>
    </footer>
  );
};
