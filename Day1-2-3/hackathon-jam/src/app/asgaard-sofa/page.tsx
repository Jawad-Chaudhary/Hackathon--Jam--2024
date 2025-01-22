"use client"
import HeaderPage from "@/components/header-page";
import { asgaard } from "@/components/shop/item";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function AsgaardSofa() {
  const [count, setCount] = useState(1);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <main>
      <HeaderPage />
      <main className="mt-16 md:mt-20 px-6 md:px-28">
        <div className="flex py-10 items-center gap-x-7">
          <h3 className="text-base text-[#9F9F9F]">Home</h3>
          <p className="text-lg font-extrabold">&gt;</p>
          <h3 className="text-base text-[#9F9F9F]">Shop</h3>
          <p className="text-lg font-extrabold">&gt;</p>
          <h3 className="text-2xl font-light">|</h3>
          <p className="text-base">Asgaard sofa</p>
        </div>

        <div className="flex flex-col md:flex-row gap-x-40 py-10">
          <div className="flex justify-center md:justify-start">
            <Image
              src={'/shop/asgard.png'}
              alt="product"
              width={900}
              height={900}
              className="w-full h-auto md:w-[1800px] md:h-auto "
            />
          </div>

          <div className="flex flex-col gap-y-5">
            <h1 className="text-3xl md:text-5xl tracking-wide">Asgaard sofa</h1>
            <p className="text-xl md:text-2xl text-[#9F9F9F] tracking-wide">RS.25,000.00</p>
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
            <p>Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.</p>
            <p className="text-[#9F9F9F]">Size</p>
            <div className="font-medium flex gap-x-4">
              <button className="px-4 py-2 bg-[#FBEBB5] cursor-pointer rounded-md">L</button>
              <button className="px-4 py-2 bg-[#FAF4F4] cursor-pointer rounded-md">XL</button>
              <button className="px-4 py-2 bg-[#FAF4F4] cursor-pointer rounded-md">XS</button>
            </div>
            <p className="text-[#9F9F9F]">Color</p>
            <div className="flex gap-x-4">
              <div className="w-7 h-7 bg-[#816DFA] rounded-full cursor-pointer"></div>
              <div className="w-7 h-7 bg-black rounded-full cursor-pointer"></div>
              <div className="w-7 h-7 bg-[#CDBA7B] rounded-full cursor-pointer"></div>
            </div>
            <div className="flex gap-x-5 items-center">
              <div className="flex items-center bg-slate-100 w-fit rounded-md">
                <button className="text-3xl px-4 py-2 transition-all duration-200 hover:bg-slate-200" onClick={decrement}>-</button>
                <p className=" px-4 py-2 ">{count}</p>
                <button className="text-xl px-4 py-2 transition-all duration-200 hover:bg-slate-200" onClick={increment}>+</button>
              </div>
              <button className="px-9 py-2 border-[1px] border-black rounded-md transition-all duration-200 hover:text-white hover:bg-black active:opacity-75">Add To Cart</button>
            </div>
            <div className="flex gap-x-8 py-8 mt-8 text-[#9F9F9F] border-t-2 ">
              <div className="flex flex-col gap-y-3">
                <p>SKU</p>
                <p>Category</p>
                <p>Tags</p>
                <p>Share</p>
              </div>
              <div className="flex flex-col gap-y-3">
                <p>: SS01</p>
                <p>: Sofas</p>
                <p>: Sofa, Chair, Home, Shop</p>
                <div className="flex gap-x-4">
                  : <Image
                    src={"/shop/social1.png"}
                    alt="social"
                    width={25}
                    height={25}
                  />
                  <Image
                    src={"/shop/social2.png"}
                    alt="social"
                    width={25}
                    height={25}
                  />
                  <Image
                    src={"/shop/social3.png"}
                    alt="social"
                    width={25}
                    height={25}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <main className="py-10 border-y-2 px-6 md:px-28">
        <div className="px-6 md:px-20 flex flex-col text-[#9F9F9F] gap-y-8">
          <div className="flex justify-between items-center text-sm md:text-2xl font-medium">
            <h2 className="cursor-pointer text-black">Description</h2>
            <h2 className=" cursor-pointer transition-all duration-200 hover:text-black">Additional Information</h2>
            <h2 className=" cursor-pointer transition-all duration-200 hover:text-black">Review &#91;5&#93;</h2>
          </div>
          <p>Embodying the raw, wayward spirit of rock n roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
          <p>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
        </div>
        <div className="flex items-center py-5 justify-between flex-col md:flex-row">
          <Image
            src={'/shop/sofaa.png'}
            alt="Sofaa"
            width={550}
            height={350}
            className="max-w-full"
          />
          <Image
            src={'/shop/sofaa1.png'}
            alt="Sofaa"
            width={550}
            height={350}
            className="max-w-full"
          />
        </div>
      </main>

      <main className="py-10 px-6 md:px-28 flex flex-col gap-y-10 items-center">
        <h1 className="text-4xl font-medium ">Related Product</h1>
        <div className="flex flex-wrap gap-10 mt-24 justify-center w-full">
          {
            asgaard.map((sale) => {
              return (
                <div key={sale.id} className="flex flex-col items-center justify-between w-full sm:w-56 md:w-52 h-56">
                  <Image
                    src={sale.img}
                    alt="top-sale"
                    width={130}
                    height={130}
                  />
                  <div className="w-full text-center">
                    <h3 className="line-clamp-1 text-sm">{sale.name}</h3>
                    <p className="mt-2 text-lg font-medium">Rs. {sale.price}</p>
                  </div>
                </div>
              );
            })
          }
        </div>
        <p className="text-lg cursor-pointer transition-all duration-200 hover:scale-x-90 font-medium underline underline-offset-[12px] mt-14">
          <Link href={'/shop'}>View More</Link>
        </p>
      </main>
    </main>
  );
}
