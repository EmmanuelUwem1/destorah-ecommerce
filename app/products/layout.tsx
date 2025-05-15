import type { Metadata } from "next";
import {NavBar} from "@/components/header";

export const metadata: Metadata = {
  title: "Destorah Foods - Shop Foods now!",
  description:
    "Shop authentic African food products delivered straight to your door",
  generator: "v0.dev",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <NavBar />
        <main className="flex pt-20 overflow-x-hidden overflow-y-scroll">
          {children}
        </main>
      </>
    );
}