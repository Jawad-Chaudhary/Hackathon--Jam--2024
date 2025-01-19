"use client"
import Image from "next/image"
import Link from "next/link"
import * as React from "react"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function Header() {
  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] flex justify-between px-4 md:px-20 py-4 md:py-6 bg-white`}>
      {/* Left */}
      <div className=" hidden md:block"></div>
      <div className=" hidden md:block"></div>

      {/* Middle */}
      <nav className=" hidden md:block">
        <ul className="flex md:gap-x-10 text-base font-medium">
          <li className="cursor-pointer transition-all duration-200 decoration-2 underline-offset-4 hover:underline"><Link href={"/"}>Home</Link></li>
          <li className="cursor-pointer transition-all duration-200 decoration-2 underline-offset-4 hover:underline"><Link href={"/shop"}>Shop</Link></li>
          <li className="cursor-pointer transition-all duration-200 decoration-2 underline-offset-4 hover:underline">About</li>
          <li className="cursor-pointer transition-all duration-200 decoration-2 underline-offset-4 hover:underline"><Link href={'/contact'}>Contact</Link></li>
        </ul>
      </nav>

      {/* Mobile Nav */}
      <div className=" block md:hidden">
        <Sheet>
          <SheetTrigger>
            <Image
              src={'/header/menu.png'}
              alt="menu"
              width={30}
              height={30}
            />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription className="flex flex-col gap-y-4 text-base font-medium">
                <Link className="cursor-pointer transition-all mt-9 duration-200 decoration-2 underline-offset-4 hover:underline" href={"/"}>Home</Link>
                <Link className="cursor-pointer transition-all duration-200 decoration-2 underline-offset-4 hover:underline" href={"/shop"}>Shop</Link>
                <Link className="cursor-pointer transition-all duration-200 decoration-2 underline-offset-4 hover:underline" href={"/"}>About</Link>
                <Link className="cursor-pointer transition-all duration-200 decoration-2 underline-offset-4 hover:underline" href={"/contact"}>Contact</Link>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>

      {/* Right */}
      <div className="flex items-center gap-x-5 md:gap-x-10">
      <Link href={'/account'}>
          <Image
            src={"/header/account.svg"}
            alt="Account"
            width={22}
            height={22}
            className="cursor-pointer transition-all duration-200 hover:scale-125"
          />
        </Link>
        <Image
          src={"/header/search.svg"}
          alt="Search"
          width={22}
          height={22}
          className="cursor-pointer transition-all duration-200 hover:scale-125"
        />
        <Image
          src={"/header/fav.svg"}
          alt="Fav"
          width={22}
          height={22}
          className="cursor-pointer transition-all duration-200 hover:scale-125"
        />
       
        <DropdownMenu>
      <DropdownMenuTrigger asChild>
      <Image
          src={"/header/cart.svg"}
          alt="Cart"
          width={22}
          height={22}
          className="cursor-pointer transition-all duration-200 hover:scale-125 relative"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-72 md:w-96 mt-8">
        <DropdownMenuLabel>Shopping Cart</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem>
          <div className="flex justify-between items-center mt-7 w-full mb-40 md:mb-80">
            <Image
              src={'/shop/item14.png'}
              alt="sofa"
              width={50}
              height={50}
            />
            <div>
              <h2>Asgaard sofa</h2>
              <p>1 x <span>Rs.250,000,00</span></p>
            </div>
            <Image
              src={"/header/close.png"}
              alt="close"
              width={25}
              height={25}
            />
          </div>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem>
          <div className="flex w-full px-10 justify-between items-center">
            <h4 className="font-medium">Subtotal</h4>
            <p className="text-yellow-700">Rs.250,000.00</p>
          </div>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem>
          <div className="flex w-full md:px-10 justify-between items-center">
            <button className="text-xs px-8 py-1 border-[1px] border-black rounded-full transition-all duration-200 hover:bg-black hover:text-white active:opacity-80">
              <Link href={'/cart'}>View Cart</Link>
            </button>
            <button className="text-xs px-8 py-1 border-[1px] border-black rounded-full transition-all duration-200 hover:bg-black hover:text-white active:opacity-80">
              <Link href={'/checkout'}>Checkout</Link>
            </button>
          </div>
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
      </div>
    </header>
  )
}