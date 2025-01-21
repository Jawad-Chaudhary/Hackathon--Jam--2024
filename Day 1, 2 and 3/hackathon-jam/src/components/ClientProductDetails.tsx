"use client";

import { useState, useEffect } from "react";
import { useCart } from "@/app/context/CartContext";
import { IProduct } from "@/components/shop/hero";
import Image from "next/image";

export default function ClientProductDetails({ product }: { product: IProduct }) {
  const [count, setCount] = useState(1);
  const [isMounted, setIsMounted] = useState(false);
  const { addToCart } = useCart();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => Math.max(1, prev - 1));

  const handleAddToCart = () => {
    if (!isMounted) return;
    addToCart(product, count);
  };

  if (!isMounted) return null;

  return (
    <div className="flex flex-col gap-y-5">
      <h1 className="text-3xl md:text-5xl tracking-wide">{product.name}</h1>
      <p className="text-xl md:text-2xl text-[#9F9F9F] tracking-wide">RS.{product.price.toLocaleString()}</p>
      <div className="flex gap-x-3 text-[#9F9F9F]">
        <Image
          src={"/shop/star.png"}
          alt="rating"
          width={100}
          height={20}
        />
        <p className="text-sm">|</p>
        <p className="text-sm">5 Customer Review</p>
      </div>
      <p>{product.description}</p>
      
      {/* Size Selection */}
      <p className="text-[#9F9F9F]">Size</p>
      <div className="font-medium flex gap-x-4">
        {['L', 'XL', 'XS'].map((size) => (
          <button 
            key={size}
            className="px-4 py-2 bg-[#FAF4F4] cursor-pointer rounded-md transition-colors duration-200 hover:bg-[#FBEBB5]"
          >
            {size}
          </button>
        ))}
      </div>

      {/* Color Selection */}
      <p className="text-[#9F9F9F]">Color</p>
      <div className="flex gap-x-4">
        {['#816DFA', '#000000', '#CDBA7B'].map((color) => (
          <div
            key={color}
            className="w-7 h-7 rounded-full cursor-pointer border-2 border-transparent hover:border-gray-400"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>

      {/* Quantity Selector */}
      <div className="flex gap-x-5 items-center">
        <div className="flex items-center bg-slate-100 w-fit rounded-md">
          <button
            className="text-3xl px-4 py-2 transition-all duration-200 hover:bg-slate-200"
            onClick={decrement}
            aria-label="Decrease quantity"
          >
            -
          </button>
          <p className="px-4 py-2 min-w-[40px] text-center">{count}</p>
          <button
            className="text-xl px-4 py-2 transition-all duration-200 hover:bg-slate-200"
            onClick={increment}
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
        <button
          className="px-9 py-2 border-[1px] border-black rounded-md transition-all duration-200 hover:text-white hover:bg-black active:opacity-75"
          onClick={handleAddToCart}
        >
          Add To Cart
        </button>
      </div>

      {/* Product Metadata */}
      <div className="flex gap-x-8 py-8 mt-8 text-[#9F9F9F] border-t-2">
        <div className="flex flex-col gap-y-3">
          <p>SKU</p>
          <p>Category</p>
          <p>Tags</p>
          <p>Share</p>
        </div>
        <div className="flex flex-col gap-y-3">
          <p>: SS01</p>
          <p>: {product.category}</p>
          <p>: Sofa, Chair, Home, Shop</p>
          <div className="flex gap-x-4">
            :
            {[1, 2, 3].map((num) => (
              <Image
                key={num}
                src={`/shop/social${num}.png`}
                alt="social"
                width={25}
                height={25}
                className="hover:opacity-75 transition-opacity"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}