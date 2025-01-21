"use client";
import { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
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
  image: string;
}



export default function ShopPage() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPrice, setSelectedPrice] = useState("all");
  const [sortBy, setSortBy] = useState("default");
  const [showFilters, setShowFilters] = useState(false);

  const priceRanges = useMemo(() => [
    { label: "All Prices", value: "all" },
    { label: "Under Rs.200", value: "0-200", min: 0, max: 200 },
    { label: "Rs.200 - Rs.500", value: "200-500", min: 200, max: 500 },
    { label: "Rs.500 - Rs.1500", value: "500-1500", min: 500, max: 1500 },
    { label: "Over Rs.1500", value: "1500", min: 1500 },
  ], []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query = `*[_type == "product"]{
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
        const data: IProduct[] = await client.fetch(query);
        setProducts(data);
        setFilteredProducts(data);
        
        const uniqueCategories = Array.from(new Set(data.map(p => p.category)));
        setCategories(['all', ...uniqueCategories]);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const applyFilters = useCallback(() => {
    let filtered = [...products];

    if (selectedCategory !== "all") {
      filtered = filtered.filter(product => 
        product.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    if (selectedPrice !== "all") {
      const range = priceRanges.find(r => r.value === selectedPrice);
      if (range) {
        filtered = filtered.filter(product => {
          if (range.min !== undefined && range.max !== undefined) {
            return product.price >= range.min && product.price <= range.max;
          }
          if (range.min !== undefined && !range.max) {
            return product.price >= range.min;
          }
          return true;
        });
      }
    }

    switch(sortBy) {
      case "price-low-high":
        filtered = [...filtered].sort((a, b) => a.price - b.price);
        break;
      case "price-high-low":
        filtered = [...filtered].sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    setFilteredProducts(filtered);
  }, [products, selectedCategory, selectedPrice, sortBy, priceRanges]);

  useEffect(() => {
    applyFilters();
  }, [applyFilters]);

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
        <div className="flex items-center gap-4 mb-4 sm:mb-0">
          <div className="relative group">
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <Image src={'/shop/filter.png'} alt="filter" width={20} height={20} />
              <span className="text-base">Filters</span>
            </button>

            {showFilters && (
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl z-50 p-4">
                <div className="mb-6">
                  <h3 className="font-semibold mb-2">Category</h3>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full p-2 border rounded-md focus:ring-2 focus:ring-black"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-4">
                  <h3 className="font-semibold mb-2">Price Range</h3>
                  <div className="space-y-2">
                    {priceRanges.map(range => (
                      <label 
                        key={range.value} 
                        className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="price-range"
                          value={range.value}
                          checked={selectedPrice === range.value}
                          onChange={() => setSelectedPrice(range.value)}
                          className="form-radio h-4 w-4 text-black"
                        />
                        <span>{range.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <span className="text-gray-400 text-xl">|</span>
          <p className="text-sm sm:text-base text-gray-600">
            Showing {filteredProducts.length} results
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm sm:text-base">Sort by:</span>
          <select 
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-white px-3 py-1 rounded border"
          >
            <option value="default">Default</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="px-6 sm:px-28 flex flex-col items-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 py-8 w-full">
          {filteredProducts.map((product) => (
            <Link 
              href={`/product/${product.slug}`} 
              key={product.id}
              className="group relative bg-white p-4 rounded-lg shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="aspect-square w-full relative overflow-hidden">
                <Image
                  src={urlFor(product.image).url()}
                  alt={product.name}
                  fill
                  className="object-contain object-center group-hover:opacity-75 transition-opacity"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-sm font-medium line-clamp-1">{product.name}</h3>
                <p className="mt-1 text-lg font-semibold text-[#B88E2F]">
                  Rs.{product.price.toLocaleString()}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex gap-4 py-8">
          {[1, 2, 3].map((page) => (
            <button
              key={page}
              className={`px-4 py-2 rounded-md ${
                page === 1 ? 'bg-[#B88E2F] text-white' : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              {page}
            </button>
          ))}
          <button className="px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200">
            Next
          </button>
        </div>
      </div>

      <div className="bg-[#FAF4F4] px-6 sm:px-28 py-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-2">Free Delivery</h3>
          <p className="text-gray-600">For all orders over ₹5000</p>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-2">90 Days Return</h3>
          <p className="text-gray-600">If goods have problems</p>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
          <p className="text-gray-600">100% secure payment</p>
        </div>
      </div>
    </main>
  );
}