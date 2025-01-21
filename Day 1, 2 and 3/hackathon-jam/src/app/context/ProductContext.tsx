// app/context/ProductsContext.tsx
"use client";

import { createContext, useContext, ReactNode, useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { IProduct } from "@/components/shop/hero";

interface ProductsContextType {
  products: IProduct[];
  loading: boolean;
  error: string | null;
}

const ProductsContext = createContext<ProductsContextType | undefined>(undefined);

export function ProductsProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
        const data = await client.fetch<IProduct[]>(query);
        setProducts(data);
      } catch (err) {
        setError("Failed to load products");
        console.error("Products fetch error:", err); // Now using the error
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ products, loading, error }}>
      {children}
    </ProductsContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error("useProducts must be used within a ProductsProvider");
  }
  return context;
}