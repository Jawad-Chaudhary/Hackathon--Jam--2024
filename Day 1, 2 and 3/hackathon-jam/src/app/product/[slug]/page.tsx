import ClientProductDetails from "@/components/ClientProductDetails";
import HeaderPage from "@/components/header-page";
import { IProduct } from "@/components/shop/hero";
import { asgaard } from "@/components/shop/item";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

// Generate static params for dynamic routes
export async function generateStaticParams() {
  const products = await client.fetch<{ slug: string }[]>(
    `*[_type == "product"]{ "slug": slug.current }`
  );

  return products.map((product) => ({ slug: product.slug }));
}

// Define proper TypeScript interfaces
interface PageParams {
  slug: string;
}

// Main page component
export default async function Page({ params }: { params: PageParams }) {
  const query = `*[_type == "product" && slug.current == $slug][0]{
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
  }`;

  const product: IProduct = await client.fetch(query, { slug: params.slug });

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
          <p className="text-base">{product.name}</p>
        </div>

        <div className="flex flex-col md:flex-row gap-x-40 py-10">
          <div className="flex justify-center md:justify-start">
            <Image
              src={urlFor(product.image).url()}
              alt={product.slug}
              width={800}
              height={800}
              className="w-full h-auto object-cover md:w-[700px] md:h-auto"
              priority
            />
          </div>
          <ClientProductDetails product={product} />
        </div>
      </main>

      <main className="py-10 border-y-2 px-6 md:px-28">
        <div className="px-6 md:px-20 flex flex-col text-[#9F9F9F] gap-y-8">
          <div className="flex justify-between items-center text-sm md:text-2xl font-medium">
            <h2 className="cursor-pointer text-black">Description</h2>
            <h2 className="cursor-pointer transition-all duration-200 hover:text-black">
              Additional Information
            </h2>
            <h2 className="cursor-pointer transition-all duration-200 hover:text-black">
              Review &#91;5&#93;
            </h2>
          </div>
          <p>
            Embodying the raw, wayward spirit of rock n roll, the Kilburn portable active
            stereo speaker takes the unmistakable look and sound of Marshall, unplugs the
            chords, and takes the show on the road.
          </p>
          <p>
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled
            engineering. Setting the bar as one of the loudest speakers in its class, the
            Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts
            a clear midrange and extended highs for a sound that is both articulate and
            pronounced. The analogue knobs allow you to fine tune the controls to your
            personal preferences while the guitar-influenced leather strap enables easy and
            stylish travel.
          </p>
        </div>
        <div className="flex items-center py-5 justify-between flex-col md:flex-row">
          <Image
            src="/shop/sofaa.png"
            alt="Sofaa"
            width={550}
            height={350}
            className="max-w-full"
          />
          <Image
            src="/shop/sofaa1.png"
            alt="Sofaa"
            width={550}
            height={350}
            className="max-w-full"
          />
        </div>
      </main>

      <main className="py-10 px-6 md:px-28 flex flex-col gap-y-10 items-center">
        <h1 className="text-4xl font-medium">Related Product</h1>
        <div className="flex flex-wrap gap-10 mt-24 justify-center w-full">
          {asgaard.map((sale) => (
            <div
              key={sale.id}
              className="flex flex-col items-center justify-between w-full sm:w-56 md:w-52 h-56"
            >
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
          ))}
        </div>
        <p className="text-lg cursor-pointer transition-all duration-200 hover:scale-x-90 font-medium underline underline-offset-[12px] mt-14">
          <Link href="/shop">View More</Link>
        </p>
      </main>
    </main>
  );
}