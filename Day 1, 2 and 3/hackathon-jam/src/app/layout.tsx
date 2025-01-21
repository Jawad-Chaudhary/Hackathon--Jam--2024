import type { Metadata } from "next";
import {Poppins} from "next/font/google"
import "./globals.css";
import Navbar from "@/components/navbar";
import { CartProvider } from "./context/CartContext";
import { ProductsProvider } from "./context/ProductContext";


const poppins_init = Poppins({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"],
  variable: "--font-poppins"
})

export const metadata: Metadata = {
  title: "Furniture Bazaar",
  description: "A furniture store with a wide range of products for your home. Shop now!" ,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins_init.variable} antialiased`}
      >
        <ProductsProvider>
          <CartProvider>
            {children}
            <Navbar/>
          </CartProvider>
        </ProductsProvider>
        
      </body>
    </html>
  );
}
