import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Star, Truck, Heart, Ruler, Package } from "lucide-react";
import { getProductBySlug, products, formatPrice } from "@/data/products";
import { AddToCartButton } from "./AddToCartButton";
import { ProductCard } from "@/components/shop/ProductCard";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <nav className="text-sm text-earth-500 mb-6">
        <Link href="/" className="hover:text-brand-700">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/shop/" className="hover:text-brand-700">Shop</Link>
        <span className="mx-2">/</span>
        <span className="text-earth-900">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="space-y-4">
          <div className="relative aspect-square rounded-xl overflow-hidden bg-earth-50">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          {product.images.length > 1 && (
            <div className="grid grid-cols-4 gap-3">
              {product.images.map((img, i) => (
                <div key={i} className="relative aspect-square rounded-lg overflow-hidden bg-earth-50">
                  <Image src={img} alt="" fill className="object-cover" sizes="100px" />
                </div>
              ))}
            </div>
          )}
        </div>

        <div>
          <p className="text-sm text-brand-600 font-medium mb-1">
            by {product.artisan.name} &middot; {product.artisan.location}
          </p>
          <h1 className="text-3xl font-serif font-bold text-earth-900 mb-3">
            {product.name}
          </h1>
          <div className="flex items-center gap-2 mb-4">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-brand-400 text-brand-400" : "text-earth-300"}`}
                />
              ))}
            </div>
            <span className="text-sm text-earth-600">
              {product.rating} ({product.reviewCount} reviews)
            </span>
          </div>

          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl font-bold text-brand-800">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-lg text-earth-400 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>

          <p className="text-earth-600 leading-relaxed mb-6">
            {product.longDescription}
          </p>

          <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
            {product.dimensions && (
              <div className="flex items-center gap-2 text-earth-600">
                <Ruler className="w-4 h-4 text-brand-500" />
                {product.dimensions}
              </div>
            )}
            <div className="flex items-center gap-2 text-earth-600">
              <Truck className="w-4 h-4 text-brand-500" />
              {product.estimatedDelivery}
            </div>
            <div className="flex items-center gap-2 text-earth-600">
              <Package className="w-4 h-4 text-brand-500" />
              {product.inStock ? `${product.stockCount} in stock` : "Out of stock"}
            </div>
            {product.handmade && (
              <div className="flex items-center gap-2 text-earth-600">
                <Heart className="w-4 h-4 text-brand-500" />
                Handcrafted
              </div>
            )}
          </div>

          <div className="mb-6">
            <p className="text-sm font-medium text-earth-700 mb-2">Materials</p>
            <div className="flex flex-wrap gap-2">
              {product.materials.map((m) => (
                <span key={m} className="px-3 py-1 bg-earth-100 text-earth-700 text-sm rounded-full">
                  {m}
                </span>
              ))}
            </div>
          </div>

          <AddToCartButton product={product} />

          <div className="mt-8 p-4 bg-earth-50 rounded-xl flex items-center gap-4">
            <Image
              src={product.artisan.avatar}
              alt={product.artisan.name}
              width={56}
              height={56}
              className="rounded-full object-cover"
            />
            <div>
              <p className="font-medium text-earth-900">{product.artisan.name}</p>
              <p className="text-sm text-earth-500">{product.artisan.bio}</p>
            </div>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-16">
          <h2 className="text-2xl font-serif font-bold text-earth-900 mb-6">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
