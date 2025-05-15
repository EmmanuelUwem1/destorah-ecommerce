import type React from "react";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";

const montserrat = Montserrat({ subsets: ["latin"] });

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
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="icon" href="/favicon.ico" />

        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/android-chrome-192x192.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${montserrat.className} relative overflow-x-hidden overflow-y-scroll min-h-screen flex-col bg-[#8BC34A]/10 `}
      >

          {children}
        
        <Footer />
      </body>
    </html>
  );
}
