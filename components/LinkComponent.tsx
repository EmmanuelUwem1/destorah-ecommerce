"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface LinkProps {
  path: String;
  color: String;
  text: String;
}

export const LinkComponent = ({ path, color, text }: LinkProps) => {
  const pathname = usePathname();
  let pathOkay = `/${path}` === pathname;
  return (
    <Link
      href={`/${path}`}
      className={
        pathOkay ? `text-[#F5B937]  mx-4 text-[16px]` : "mx-4 text-[16px]"
      }
    >
      {text}
    </Link>
  );
};
