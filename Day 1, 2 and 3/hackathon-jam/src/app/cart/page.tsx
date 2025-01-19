import HeaderPage from "@/components/header-page";
import Image from "next/image";
import Link from "next/link";

export default function Cart() {
  return (
    <main>
        <HeaderPage/>
      <main>
      <div className="mt-16 py-6 md:py-2 md:mt-20 account w-full flex justify-center items-center h-auto md:h-[300px]">
        <div className="flex flex-col items-center">
          <Image
            src={'/shop/hero-logo.png'}
            alt="logo"
            width={77}
            height={77}
          />
          <h1 className="text-4xl font-medium">Cart</h1>
          <p className="font-medium text-base mt-4">Home &gt; Cart</p>
        </div>
      </div>
      </main>
      <main className="flex flex-col md:flex-row justify-between gap-10 px-6 md:px-28 py-12">
        <div className="w-full flex md:flex-col justify-between md:justify-normal flex-row  md:w-[70%]">
          <div className="bg-[#FFF9E5] w-36 text-center  md:w-full flex gap-y-9 md:flex-row flex-col justify-evenly font-semibold py-3">
            <h3>Product</h3>
            <h3>Price</h3>
            <h3>Quantity</h3>
            <h3>Subtotal</h3>
          </div>
          <div className="flex md:flex-row flex-col gap-y-9 justify-between items-center font-medium mt-10 text-sm text-gray-400">
              <Image
                src={'/shop/item14.png'}
                alt="sofa"
                width={80}
                height={80}
                className="bg-[#f3d266] rounded-lg"
              />
              <p>Asgaard sofa</p>
              <p>Rs.250,000.00</p>
              <p className="px-3 py-1 border-[1px] border-gray-400 rounded-md text-black">1</p>
              <p className="text-black">Rs.250,000.00</p>
              <Image
                src={'/header/bin.png'}
                alt="delete"
                width={20}
                height={20}
                className="w-[20px] h-[20px] object-cover"
              />
          </div>
        </div>

        <div className="w-full md:w-[30%] bg-[#FFF9E5] px-8 md:px-16 pt-3 pb-11 flex gap-y-7 flex-col items-center">
          <h2 className="text-2xl font-semibold">Cart Totals</h2>
          <div className="flex w-full justify-between items-center mt-7">
            <h3 className="text-sm font-medium">Subtotal</h3>
            <p className="text-sm font-medium text-gray-400">Rs.250,000.00</p>
          </div>
          <div className="flex w-full justify-between items-center">
            <h4 className="text-sm font-medium">Total</h4>
            <p className="text-sm font-medium text-yellow-600">Rs.250,000.00</p>
          </div>
          <button className="text-lg px-10 border-[1px] border-black py-2 rounded-xl transition-all duration-200 cursor-pointer hover:bg-black hover:text-white active:opacity-80">
            <Link href={'/checkout'}>Checkout</Link>
          </button>
        </div>

      </main>

      {/* Delivery */}
      <div className="bg-[#FAF4F4] px-6 md:px-28 py-16 flex flex-col md:flex-row justify-between">
        <div className="mb-6 md:mb-0">
          <h3 className="font-medium text-3xl">Free Delivery</h3>
          <p className="text-[#9F9F9F] tracking-wide mt-3">For all orders over $50, consectetur <br />adipim scing elit.</p>
        </div>
        <div className="mb-6 md:mb-0">
          <h3 className="font-medium text-3xl">90 Days Return</h3>
          <p className="text-[#9F9F9F] tracking-wide mt-3">If goods have problems, consectetur <br />adipim scing elit.</p>
        </div>
        <div>
          <h3 className="font-medium text-3xl">Secure Payment</h3>
          <p className="text-[#9F9F9F] tracking-wide mt-3">100% secure payment, consectetur <br />adipim scing elit.</p>
        </div>
      </div>
    </main>
  );
}
