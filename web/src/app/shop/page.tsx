"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { ProductCard } from "@/components/shop/ProductCard";
import { products, searchProducts } from "@/data/products";
import { CATEGORY_LABELS, Category } from "@/types";

function ShopContent() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const query = searchParams.get("q");

  let filtered = products;
  if (query) {
    filtered = searchProducts(query);
  } else if (category) {
    filtered = products.filter((p) => p.category === category);
  }

  const title = query
    ? `Results for "${query}"`
    : category
      ? CATEGORY_LABELS[category as Category] ?? "Shop"
      : "All Products";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-serif font-bold text-earth-900">{title}</h1>
          <p className="text-earth-500 mt-1">{filtered.length} handcrafted items</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <a
            href="/shop/"
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
              !category && !query
                ? "bg-brand-600 text-white"
                : "bg-earth-100 text-earth-700 hover:bg-earth-200"
            }`}
          >
            All
          </a>
          {Object.entries(CATEGORY_LABELS).map(([key, label]) => (
            <a
              key={key}
              href={`/shop/?category=${key}`}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                category === key
                  ? "bg-brand-600 text-white"
                  : "bg-earth-100 text-earth-700 hover:bg-earth-200"
              }`}
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-earth-500 text-lg">No products found.</p>
          <a href="/shop/" className="text-brand-700 font-medium mt-2 inline-block hover:underline">
            Browse all products
          </a>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="max-w-7xl mx-auto px-4 py-20 text-center text-earth-500">Loading...</div>}>
      <ShopContent />
    </Suspense>
  );
}
