"use client";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
interface HamburgerProps {
  sidenavactive: Boolean;
  color: string;
}
export const Hamburger = ({ sidenavactive, color }: HamburgerProps) => {
  return sidenavactive ? (
    <RxHamburgerMenu color={color} />
  ) : (
    <RxCross1 color={color}></RxCross1>
  );
};
