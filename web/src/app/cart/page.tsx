"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/data/products";
import { Button } from "@/components/ui/Button";
import { SITE_CONFIG } from "@/types";

export default function CartPage() {
  const { items, itemCount, subtotal, shipping, tax, total, updateQuantity, removeItem } = useCart();

  if (itemCount === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <ShoppingBag className="w-16 h-16 text-earth-300 mx-auto mb-4" />
        <h1 className="text-2xl font-serif font-bold text-earth-900 mb-2">Your cart is empty</h1>
        <p className="text-earth-500 mb-6">Discover beautiful handcrafted treasures waiting for you.</p>
        <Link href="/shop/">
          <Button size="lg">Start Shopping</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-serif font-bold text-earth-900 mb-8">
        Shopping Cart ({itemCount} {itemCount === 1 ? "item" : "items"})
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-4">
          {items.map(({ product, quantity }) => (
            <div
              key={product.id}
              className="flex gap-4 bg-white rounded-xl p-4 border border-earth-100"
            >
              <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 bg-earth-50">
                <Image src={product.images[0]} alt={product.name} fill className="object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <Link href={`/product/${product.slug}/`} className="font-medium text-earth-900 hover:text-brand-700">
                  {product.name}
                </Link>
                <p className="text-sm text-earth-500">{product.artisan.name}</p>
                <p className="font-semibold text-brand-800 mt-1">{formatPrice(product.price)}</p>
              </div>
              <div className="flex flex-col items-end justify-between">
                <button
                  onClick={() => removeItem(product.id)}
                  className="text-earth-400 hover:text-red-500 transition-colors"
                  aria-label="Remove"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
                <div className="flex items-center gap-2 border border-earth-200 rounded-lg">
                  <button
                    onClick={() => updateQuantity(product.id, quantity - 1)}
                    className="p-1.5 hover:bg-earth-50"
                    aria-label="Decrease"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-8 text-center text-sm font-medium">{quantity}</span>
                  <button
                    onClick={() => updateQuantity(product.id, quantity + 1)}
                    className="p-1.5 hover:bg-earth-50"
                    aria-label="Increase"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl p-6 border border-earth-100 h-fit sticky top-24">
          <h2 className="text-lg font-semibold text-earth-900 mb-4">Order Summary</h2>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-earth-600">Subtotal</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-earth-600">Shipping</span>
              <span>{shipping === 0 ? "Free" : formatPrice(shipping)}</span>
            </div>
            {shipping > 0 && (
              <p className="text-xs text-earth-500">
                Free shipping on orders over ${SITE_CONFIG.shipping.freeThreshold}
              </p>
            )}
            <div className="flex justify-between">
              <span className="text-earth-600">Tax (est.)</span>
              <span>{formatPrice(tax)}</span>
            </div>
            <div className="border-t border-earth-100 pt-3 flex justify-between font-semibold text-base">
              <span>Total</span>
              <span className="text-brand-800">{formatPrice(total)}</span>
            </div>
          </div>
          <Link href="/checkout/" className="block mt-6">
            <Button size="lg" className="w-full">Proceed to Checkout</Button>
          </Link>
          <Link href="/shop/" className="block text-center text-sm text-brand-700 mt-3 hover:underline">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
