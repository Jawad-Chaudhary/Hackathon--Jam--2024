import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex flex-col bg-white">
      {/* Bottom */}
      <div className="pt-10 px-6 md:pt-28 md:px-24">
        <div className="flex flex-col md:flex-row items-start  md:items-center justify-between gap-y-10">
          {/* Address Section */}
          <div>
            <p className="text-sm md:text-base text-[#9F9F9F]  text-left">
              400 University Drive Suite 200 Coral <br />
              Gables,<br />
              FL 33134 USA
            </p>
          </div>

          {/* Links Section */}
          <div className="flex flex-col md:flex-row gap-10 md:gap-x-36">
            <nav>
              <ul className="flex flex-col gap-y-3 md:gap-y-7 font-medium text-sm md:text-base">
                <li className="text-[#9F9F9F]">Links</li>
                <li className="cursor-pointer transition-all duration-200 hover:scale-105 active:opacity-85"><Link href={'/'}>Home</Link></li>
                <li className="cursor-pointer transition-all duration-200 hover:scale-105 active:opacity-85"><Link href={'/shop'}>Shop</Link></li>
                <li className="cursor-pointer transition-all duration-200 hover:scale-105 active:opacity-85"><Link href={'/'}>About</Link></li>
                <li className="cursor-pointer transition-all duration-200 hover:scale-105 active:opacity-85"><Link href={'/contact'}>Contact</Link></li>
              </ul>
            </nav>
            <ul className="flex flex-col gap-y-3 md:gap-y-7 font-medium text-sm md:text-base">
              <li className="text-[#9F9F9F]">Help</li>
              <li>Payment Options</li>
              <li>Returns</li>
              <li>Privacy Policies</li>
            </ul>
            {/* Newsletter Section */}
            <div className="flex flex-col gap-y-4 md:gap-y-7 items-start">
              <h3 className="font-medium text-sm md:text-base text-[#9F9F9F]">Newsletter</h3>
              <div className="flex flex-col md:flex-row gap-2 md:gap-0 md:items-center">
                <input
                  className="border-b-[1px] border-black focus:outline-none focus:ring-2 focus:ring-gray-400 md:mr-4 text-sm md:text-base p-1"
                  type="email"
                  placeholder="Enter Your Email Address"
                />
                <button className="border-b-[1px] border-black px-4 font-medium text-sm md:text-base transition-all duration-200 hover:shadow-md">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
        </div>
        <p className="py-6 border-t-2 mt-10 text-center text-sm md:text-base">
          2022 Meubel House. All rights reserved
        </p>
      </div>
    </nav>
  );
}
