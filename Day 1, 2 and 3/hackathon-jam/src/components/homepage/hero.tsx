import Image from "next/image";
import { TopSale, Blog } from "./top-sale";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      {/* HERO-TOP */}
      <main className="mt-8 md:mt-16 h-auto md:h-[510px] bg-[#FBEBB5] py-10 px-6 md:px-24 flex flex-col-reverse md:flex-row items-center justify-between gap-y-8 md:gap-x-10 overflow-hidden">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-medium tracking-wide leading-snug">
            Rocket single<br />seater
          </h1>
          <button className="mt-4 md:mt-7 text-lg md:text-xl font-medium cursor-pointer underline underline-offset-[12px]">
            Shop Now
          </button>
        </div>
        {/* Right Section */}
        <Image
          src={"/homepage/hero.png"}
          alt="hero-sofa"
          width={400}
          height={400}
          className="w-[250px] md:w-[400px] lg:w-[600px] h-auto"
        />
      </main>

      {/* Hero-Bottom */}
      <main className="py-8 md:py-14 px-6 md:px-36 flex flex-col md:flex-row bg-[#FAF4F4] items-center gap-y-8 md:gap-x-10">
        {/* Left */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <Image
            src={"/homepage/side-table.png"}
            alt="side-table"
            width={300}
            height={300}
            className="w-[200px] md:w-[300px] h-auto"
          />
          <div className="mt-6 md:mt-8 flex flex-col text-center md:text-left gap-y-3 md:gap-y-5 w-full">
            <h2 className="text-xl md:text-3xl font-medium">Side table</h2>
            <p className="text-base md:text-lg font-medium underline underline-offset-[12px]">
              View More
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <Image
            src={"/homepage/side-sofa.png"}
            alt="side-sofa"
            width={300}
            height={300}
            className="w-[200px] md:w-[300px] h-auto"
          />
          <div className="mt-6 md:mt-8 flex flex-col text-center md:text-left gap-y-3 md:gap-y-5 w-full">
            <h2 className="text-xl md:text-3xl font-medium">Side sofa</h2>
            <p className="text-base md:text-lg font-medium underline underline-offset-[12px]">
              View More
            </p>
          </div>
        </div>
      </main>

      {/* Top Sales */}
      <main className="flex flex-col justify-center items-center px-6 md:px-36 py-8 md:py-14">
        <div className="flex flex-col items-center gap-y-4 w-full text-center">
          <h2 className="text-2xl md:text-3xl font-medium">Top Picks For You</h2>
          <p className="text-sm md:text-base text-gray-400 tracking-wide font-medium">
            Find a bright ideal to suit your taste with our great selection of suspension, floor, and table lights.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 w-full">
          {TopSale.map((sale) => (
            <div
              key={sale.id}
              className="flex flex-col items-center justify-between text-center"
            >
              <Image
                src={sale.img}
                alt="top-sale"
                width={130}
                height={130}
                className="w-20 md:w-28 h-auto"
              />
              <div className="mt-2">
                <h3 className="line-clamp-1 text-sm md:text-base">{sale.name}</h3>
                <p className="mt-2 text-sm md:text-lg font-medium">{sale.price}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-lg font-medium underline underline-offset-[12px] mt-14 cursor-pointer transition-all duration-200 hover:scale-105 active:opacity-85">
          <Link href={'/shop'}>View More</Link>
        </p>
      </main>

      {/* New Arrivals */}
      <main className="py-8 md:py-14 px-6 md:px-36 bg-[#FFF9E5] flex flex-col md:flex-row items-center gap-y-8 md:gap-x-10">
        <Image
          src={"/homepage/asgaard.png"}
          alt="Asgaard-Sofa"
          width={400}
          height={400}
          className="w-[250px] md:w-[400px] lg:w-[550px] h-auto"
        />
        <div className="flex flex-col items-center text-center md:text-left gap-y-4">
          <h2 className="text-xl md:text-2xl font-medium">New Arrivals</h2>
          <h2 className="text-3xl md:text-5xl font-bold">Asgaard sofa</h2>
          <button className="text-base md:text-xl border-[1px] border-black px-8 md:px-14 py-2 md:py-3 mt-4 transition-all duration-200 hover:bg-black hover:text-[#FFF9E5] active:opacity-75">
            <Link href={"/asgaard-sofa"}>Order Now</Link>
          </button>
        </div>
      </main>

      {/* Blogs */}
      <main className="flex flex-col justify-center items-center px-6 md:px-36 py-8 md:py-14">
        <div className="flex flex-col items-center gap-y-4 w-full text-center">
          <h2 className="text-2xl md:text-3xl font-medium">Our Blogs</h2>
          <p className="text-sm md:text-base text-gray-400 tracking-wide font-medium">
            Find a bright ideal to suit your taste with our great selection.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 w-full">
          {Blog.map((blog) => (
            <div key={blog.id} className="flex flex-col items-center gap-y-4">
              <Image
                src={blog.img}
                alt="blog"
                width={200}
                height={200}
                className="w-[150px] md:w-[200px] h-auto"
              />
              <h3 className="text-base md:text-lg font-medium">
                Going all-in with millennial design
              </h3>
              <p className=" ">
                Read more
              </p>
              <Image
                src={"/homepage/blog-date.png"}
                alt="timeline"
                width={100}
                height={24}
                className="w-[100px] md:w-[120px] h-auto"
              />
            </div>
          ))}
        </div>
        <p className="text-lg font-medium underline underline-offset-[12px] mt-14 transition-all duration-200 cursor-pointer decoration-2 hover:scale-125 active:opacity-70">
        <Link href={'/blog'}>View more</Link>
        </p>
      </main>

      {/* Instagram */}
      <div className="nav h-64 md:h-80 flex flex-col items-center justify-center gap-y-3 text-center">
        <h1 className="text-3xl md:text-5xl font-bold">Our Instagram</h1>
        <p className="text-sm md:text-lg">Follow our store on Instagram</p>
        <button className="text-sm md:text-lg px-8 md:px-16 py-2 md:py-3 shadow-xl rounded-full bg-[#FAF4F4] transition-all duration-200 hover:scale-90 active:opacity-85">
          Follow Us
        </button>
      </div>
    </>
  );
}
