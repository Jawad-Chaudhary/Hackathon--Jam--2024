import { blog, post } from "@/components/blog/blog";
import HeaderPage from "@/components/header-page";
import Image from "next/image";

export default function Blog() {
  return (
    <main>
      <HeaderPage />
      
      {/* Hero Section */}
      <div className="py-6 md:py-2 mt-16 md:mt-20 account w-full flex justify-center items-center h-auto md:h-[300px]">
        <div className="flex flex-col items-center">
          <Image
            src={'/shop/hero-logo.png'}
            alt="logo"
            width={77}
            height={77}
          />
          <h1 className="text-4xl font-medium">Blog</h1>
          <p className="font-medium text-base mt-4">Home &gt; Blog</p>
        </div>
      </div>
      <main className="px-6 md:px-28 py-20 flex flex-col md:flex-row justify-between gap-8">
        <div className="w-full md:w-[700px]">
          {
            blog.map((blog) => {
              return (
                <main key={blog.id} className="flex flex-col gap-y-3 py-5">
                  <Image
                    src={blog.img}
                    alt="blog-image"
                    width={600}
                    height={500}
                  />
                  <Image
                    src={blog.detail}
                    alt="detail"
                    width={250}
                    height={24}
                  />
                  <h2 className="text-2xl font-bold">{blog.title}</h2>
                  <p className="w-full md:w-[600px] text-pretty tracking-wide text-gray-400">{blog.p}</p>
                  <p className="text-sm md:text-xl cursor-pointer font-medium underline underline-offset-8">Read more</p>
                </main>
              );
            })
          }
        </div>
        <div className="flex flex-col gap-y-4">
          <div className="flex items-center border-2 px-2 rounded-lg">
            <input className="px-4 py-2 w-full" type="text" />
            <Image
              src={'/blog/search.png'}
              alt="search"
              width={20}
              height={20}
            />
          </div>
          <h2 className="mt-6 text-2xl font-semibold mb-3">Categories</h2>
          <div className="flex flex-col gap-y-6 text-sm text-gray-400">
            <div className="flex justify-between items-center">
              <h4 className="transition-all cursor-pointer duration-200 hover:text-black active:opacity-75">Crafts</h4>
              <p className="transition-all cursor-pointer duration-200 hover:text-black active:opacity-75">2</p>
            </div>
            <div className="flex justify-between items-center">
              <h4 className="transition-all cursor-pointer duration-200 hover:text-black active:opacity-75">Design</h4>
              <p className="transition-all cursor-pointer duration-200 hover:text-black active:opacity-75">8</p>
            </div>
            <div className="flex justify-between items-center">
              <h4 className="transition-all cursor-pointer duration-200 hover:text-black active:opacity-75">Handmade</h4>
              <p className="transition-all cursor-pointer duration-200 hover:text-black active:opacity-75">7</p>
            </div>
            <div className="flex justify-between items-center">
              <h4 className="transition-all cursor-pointer duration-200 hover:text-black active:opacity-75">Interior</h4>
              <p className="transition-all cursor-pointer duration-200 hover:text-black active:opacity-75">1</p>
            </div>
            <div className="flex justify-between items-center">
              <h4 className="transition-all cursor-pointer duration-200 hover:text-black active:opacity-75">Wood</h4>
              <p className="transition-all cursor-pointer duration-200 hover:text-black active:opacity-75">9</p>
            </div>
          </div>
          <div>
            <h2>Recent Post</h2>
            <div className="py-4">
              {
                post.map((post) => {
                  return (
                    <main key={post.id} className="flex gap-x-4 w-[250px] mb-4 transition-all duration-200 cursor-pointer hover:shadow-md hover:scale-105">
                      <Image
                        src={post.img}
                        alt="post"
                        width={70}
                        height={70}
                      />
                      <div className="text-sm">
                        <h4 className="font-medium">{post.title}</h4>
                        <p className="text-gray-400 mt-1 text-xs">{post.date}</p>
                      </div>
                    </main>
                  );
                })
              }
            </div>
          </div>
        </div>
      </main>
      <div className="flex gap-x-8 py-9 justify-center flex-wrap">
        <button className="p-4 py-2 rounded-md bg-[#FBEBB5] hover:opacity-85 active:scale-105 text-base">1</button>
        <button className="p-4 py-2 rounded-md bg-[#FFF9E5] hover:opacity-85 active:scale-105 text-base">2</button>
        <button className="p-4 py-2 rounded-md bg-[#FFF9E5] hover:opacity-85 active:scale-105 text-base">3</button>
        <button className="p-4 py-2 rounded-md bg-[#FFF9E5] hover:opacity-85 active:scale-105 text-base">Next</button>
      </div>

       {/* Delivery Section */}
       <div className="bg-[#FAF4F4] px-6 md:px-28 py-16 flex flex-col md:flex-row justify-between gap-10">
        <div className="w-full md:w-[30%]">
          <h3 className="font-medium text-3xl">Free Delivery</h3>
          <p className="text-[#9F9F9F] tracking-wide mt-3">
            For all orders over $50, consectetur <br />adipiscing elit.
          </p>
        </div>
        <div className="w-full md:w-[30%]">
          <h3 className="font-medium text-3xl">90 Days Return</h3>
          <p className="text-[#9F9F9F] tracking-wide mt-3">
            If goods have problems, consectetur <br />adipiscing elit.
          </p>
        </div>
        <div className="w-full md:w-[30%]">
          <h3 className="font-medium text-3xl">Secure Payment</h3>
          <p className="text-[#9F9F9F] tracking-wide mt-3">
            100% secure payment, consectetur <br />adipiscing elit.
          </p>
        </div>
      </div>
    </main>
  )
}
