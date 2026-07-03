import Link from "next/link";
import Image from "next/image";
import { Star, Heart } from "lucide-react";
import { Product } from "@/types";
import { formatPrice } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/product/${product.slug}/`}
      className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-earth-100"
    >
      <div className="relative aspect-square overflow-hidden bg-earth-50">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {product.originalPrice && (
          <span className="absolute top-3 left-3 bg-brand-500 text-white text-xs font-semibold px-2 py-1 rounded shadow-sm">
            Sale
          </span>
        )}
        {product.handmade && (
          <span className="absolute top-3 right-3 bg-white/90 text-earth-700 text-xs font-medium px-2 py-1 rounded flex items-center gap-1">
            <Heart className="w-3 h-3 text-brand-500" />
            Handmade
          </span>
        )}
      </div>
      <div className="p-4">
        <p className="text-xs text-earth-500 mb-1">{product.artisan.name}</p>
        <h3 className="font-medium text-earth-900 group-hover:text-brand-700 transition-colors line-clamp-2">
          {product.name}
        </h3>
        <div className="flex items-center gap-1 mt-1.5">
          <Star className="w-3.5 h-3.5 fill-brand-400 text-brand-400" />
          <span className="text-xs text-earth-600">
            {product.rating} ({product.reviewCount})
          </span>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-lg font-semibold text-brand-800">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-earth-400 line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
