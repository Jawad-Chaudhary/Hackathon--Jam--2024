import Image from "next/image"
import Link from "next/link"
import { client } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image";

export interface IProduct {
  id: string; 
  name: string;
  slug: string;
  description: string;
  price: number; 
  discountPercentage: number; 
  isFeaturedProduct: boolean; 
  stockLevel: number;
  category: string; 
  image: string
}



export default async function Hero() {

  const query = `*[_type == "product" ]{
    "id":_id,
    name,
    "slug":slug.current,
    description,
    price,
    discountPercentage,
    isFeaturedProduct,
    stockLevel,
    category,
    "image":image.asset._ref
  }[]`

  const product:IProduct[] = await client.fetch(query)
  

  return (
    <main>
      <div className="mt-16 py-6 md:py-2 md:mt-20 shop w-full flex justify-center items-center h-auto md:h-[300px]">
        <div className="flex flex-col items-center">
          <Image
            src={'/shop/hero-logo.png'}
            alt="logo"
            width={77}
            height={77}
          />
          <h1 className="text-3xl sm:text-4xl font-medium">Shop</h1>
          <p className="text-sm sm:text-base font-medium mt-4">Home &gt; Shop</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center py-12 px-6 sm:px-28 bg-[#FAF4F4]">
        <div className="flex gap-x-3 md:gap-x-5 items-center mb-6 sm:mb-0">
          <Image
            src={'/shop/filter.png'}
            alt="filter"
            width={25}
            height={25}
          />
          <p className="text-base sm:text-lg">Filter</p>
          <Image
            src={'/shop/filter1.png'}
            alt="filter"
            width={25}
            height={25}
          />
          <Image
            src={'/shop/filter2.png'}
            alt="filter"
            width={25}
            height={25}
          />
          <p className="text-2xl">|</p>
          <p className="text-sm sm:text-base">Showing 1-{product.length} of {product.length} results</p>
        </div>

        <div className="flex gap-x-2 items-center">
          <p className="text-base sm:text-lg">Show</p>
          <button className="bg-white p-2 md:p-3 text-[#9F9F9F] mr-3">{product.length}</button>
          <p className="text-base sm:text-lg">Sort by</p>
          <button className="bg-white px-3 md:px-5 py-1 md:py-3 text-[#9F9F9F]">Default</button>  
        </div>
      </div>

      <div className="px-6 sm:px-28 flex flex-col items-center">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 sm:gap-20 py-16 w-full">
          {
            product.map((product) => {
              return (
                <Link href={`/product/${product.slug}`} key={product.id}>
                  <div  className="shop-item flex flex-col items-center justify-between hover:shadow-lg hover:scale-105 cursor-pointer px-4">
                    <Image
                      src={urlFor(product.image).url()}
                      alt={product.slug}
                      width={130}
                      height={130}
                      className="object-cover object-bottom relative"
                    />
                    <p className="shop-cart relative bottom-0 left-0 right-0 w-full text-center hidden text-sm bg-black/[0.7] text-white">
                      {/* <Link href={'/asgaard-sofa'}>{shop.p}</Link> */}
                    </p>
                    <div className="w-full text-center">
                      <h3 className="line-clamp-1 text-sm">{product.name}</h3>
                      <p className="mt-2 text-lg font-medium">Rs. {product.price}</p>
                    </div>
                  </div>
                </Link>
              )
            })
          }
        </div>

        <div className="flex gap-x-8 py-9 justify-center">
          <button className="p-4 py-2 rounded-md bg-[#FBEBB5] hover:opacity-85 active:scale-105 text-base">1</button>
          <button className="p-4 py-2 rounded-md bg-[#FFF9E5] hover:opacity-85 active:scale-105 text-base">2</button>
          <button className="p-4 py-2 rounded-md bg-[#FFF9E5] hover:opacity-85 active:scale-105 text-base">3</button>
          <button className="p-4 py-2 rounded-md bg-[#FFF9E5] hover:opacity-85 active:scale-105 text-base">Next</button>
        </div>
      </div>

      {/* Delivery */}
      <div className="bg-[#FAF4F4] px-6 sm:px-28 py-16 flex flex-col sm:flex-row justify-between">
        <div className="mb-4 sm:mb-0">
          <h3 className="font-medium text-2xl sm:text-3xl">Free Delivery</h3>
          <p className="text-[#9F9F9F] tracking-wide mt-3">For all orders over $50, consectetur <br />adipiscing elit.</p>
        </div>
        <div className="mb-4 sm:mb-0">
          <h3 className="font-medium text-2xl sm:text-3xl">90 Days Return</h3>
          <p className="text-[#9F9F9F] tracking-wide mt-3">If goods have problems, consectetur <br />adipiscing elit.</p>
        </div>
        <div>
          <h3 className="font-medium text-2xl sm:text-3xl">Secure Payment</h3>
          <p className="text-[#9F9F9F] tracking-wide mt-3">100% secure payment, consectetur <br />adipiscing elit.</p>
        </div>
      </div>
    </main>
  )
}
