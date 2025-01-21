// components/Header.tsx
"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/app/context/CartContext";
import { useProducts } from "@/app/context/ProductContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { urlFor } from "@/sanity/lib/image";

export default function Header() {
  const { cartItems, removeFromCart } = useCart();
  const { products, loading, error } = useProducts();
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const itemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  // Handle click outside search dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredProducts = products.filter((product) => {
    return (
      product.name.toLowerCase().includes(searchQuery) ||
      product.category.toLowerCase().includes(searchQuery)
    );
  });

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] flex justify-between px-4 md:px-20 py-4 md:py-6 bg-white shadow-sm">
      {/* Left spacer */}
      <div className="hidden md:block"></div>
      <div className="hidden md:block"></div>

      {/* Middle - Desktop Navigation */}
      <nav className="hidden md:block">
        <ul className="flex md:gap-x-10 text-base font-medium">
          <li className="cursor-pointer transition-all duration-200 hover:text-gray-600">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="cursor-pointer transition-all duration-200 hover:text-gray-600">
            <Link href={"/shop"}>Shop</Link>
          </li>
          <li className="cursor-pointer transition-all duration-200 hover:text-gray-600">
            <Link href={"/blog"}>Blog</Link>
          </li>
          <li className="cursor-pointer transition-all duration-200 hover:text-gray-600">
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <div className="block md:hidden">
        <Sheet>
          <SheetTrigger>
            <Image
              src={"/header/menu.png"}
              alt="Menu"
              width={30}
              height={30}
              className="hover:opacity-75 transition-opacity"
            />
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription className="flex flex-col gap-y-4 mt-4">
                <Link href="/" className="text-lg hover:text-gray-600">
                  Home
                </Link>
                <Link href="/shop" className="text-lg hover:text-gray-600">
                  Shop
                </Link>
                <Link href="/blog" className="text-lg hover:text-gray-600">
                Blog
                </Link>
                <Link href="/contact" className="text-lg hover:text-gray-600">
                  Contact
                </Link>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>

      {/* Right Section - Icons */}
      <div className="flex items-center gap-x-5 md:gap-x-10">
        {/* Account */}
        <Link href={'/account'}>
          <Image
            src={"/header/account.svg"}
            alt="Account"
            width={22}
            height={22}
            className="cursor-pointer transition-all duration-200 hover:scale-125"
          />
        </Link>
        {/* Search */}
        <div className="relative" ref={searchRef}>
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Search products"
          >
            <Image
              src={"/header/search.svg"}
              alt="Search"
              width={22}
              height={22}
              className="w-5 h-5 md:w-6 md:h-6"
            />
          </button>

          {isSearchOpen && (
            <div className="absolute top-full right-0 mt-2 w-80 bg-white rounded-lg shadow-xl z-50">
              <div className="p-4">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={handleSearch}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                
                {searchQuery && (
                  <div className="mt-4 max-h-96 overflow-y-auto">
                    {loading ? (
                      <div className="p-4 text-center text-gray-500">
                        Loading...
                      </div>
                    ) : error ? (
                      <div className="p-4 text-center text-red-500">{error}</div>
                    ) : filteredProducts.length > 0 ? (
                      filteredProducts.map((product) => (
                        <Link
                          key={product.id}
                          href={`/product/${product.slug}`}
                          className="block p-3 hover:bg-gray-50 rounded-lg transition-colors"
                          onClick={() => setIsSearchOpen(false)}
                        >
                          <div className="flex items-center gap-4">
                            <Image
                              src={urlFor(product.image).url()}
                              alt={product.name}
                              width={48}
                              height={48}
                              className="w-12 h-12 object-cover rounded-md"
                            />
                            <div className="flex-1">
                              <h3 className="font-medium text-gray-900">
                                {product.name}
                              </h3>
                              <p className="text-sm text-gray-500">
                                {product.category}
                              </p>
                              <p className="text-sm font-medium text-blue-600">
                                Rs. {product.price.toLocaleString()}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))
                    ) : (
                      <div className="p-4 text-center text-gray-500">
                        No products found
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
          {/* Wishlist */}
        <Image
          src={"/header/fav.svg"}
          alt="Fav"
          width={22}
          height={22}
          className="cursor-pointer transition-all duration-200 hover:scale-125"
        />

        {/* Cart Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="relative cursor-pointer p-2 hover:bg-gray-100 rounded-full">
              <Image
                src={"/header/cart.svg"}
                alt="Cart"
                width={22}
                height={22}
                className="w-5 h-5 md:w-6 md:h-6"
              />
              {itemCount > 0 && (
                <div className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {itemCount}
                </div>
              )}
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-80 md:w-96 mt-2">
            <DropdownMenuLabel className="px-4 py-3 text-lg font-semibold">
              Shopping Cart ({itemCount} {itemCount === 1 ? "item" : "items"})
            </DropdownMenuLabel>
            <DropdownMenuSeparator />

            {cartItems.length === 0 ? (
              <div className="p-6 text-center text-gray-500">
                Your cart is empty
              </div>
            ) : (
              <>
                <div className="max-h-96 overflow-y-auto">
                  {cartItems.map((item) => (
                    <div
                      key={item.product.id}
                      className="flex items-center justify-between px-4 py-3 hover:bg-gray-50"
                    >
                      <div className="flex items-center gap-4">
                        <Image
                          src={urlFor(item.product.image).url()}
                          alt={item.product.name}
                          width={64}
                          height={64}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div>
                          <h3 className="font-medium">{item.product.name}</h3>
                          <p className="text-sm text-gray-500">
                            {item.quantity} × Rs.{item.product.price.toLocaleString()}
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="p-2 hover:bg-gray-100 rounded-full"
                        aria-label="Remove item"
                      >
                        <Image
                          src={"/header/close.png"}
                          alt="Remove"
                          width={20}
                          height={20}
                        />
                      </button>
                    </div>
                  ))}
                </div>

                <div className="p-4 border-t">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-medium">Subtotal:</span>
                    <span className="font-semibold text-lg">
                      Rs.{subtotal.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <Link
                      href="/cart"
                      className="flex-1 text-center px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
                    >
                      View Cart
                    </Link>
                    <Link
                      href="/checkout"
                      className="flex-1 text-center px-4 py-2 border border-black rounded-full hover:bg-black hover:text-white transition-colors"
                    >
                      Checkout
                    </Link>
                  </div>
                </div>
              </>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}