"use client";

import { useState, FormEvent, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/data/products";
import { buttonVariants } from "@/components/ui/Button";
import { ShippingAddress } from "@/types";
import { CheckCircle } from "lucide-react";

export default function CheckoutPage() {
  const router = useRouter();
  const { items, subtotal, shipping, tax, total, clearCart } = useCart();
  const [step, setStep] = useState<"form" | "success">("form");
  const [orderId, setOrderId] = useState("");

  useEffect(() => {
    if (items.length === 0 && step !== "success") {
      router.push("/cart/");
    }
  }, [items.length, step, router]);

  if (items.length === 0 && step !== "success") {
    return null;
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = `DEC-${Date.now().toString(36).toUpperCase()}`;
    setOrderId(id);
    clearCart();
    setStep("success");
  };

  if (step === "success") {
    return (
      <div className="max-w-lg mx-auto px-4 py-20 text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h1 className="text-2xl font-serif font-bold text-earth-900 mb-2">Order Confirmed!</h1>
        <p className="text-earth-600 mb-2">Thank you for supporting our artisans.</p>
        <p className="text-sm text-earth-500 mb-6">Order ID: <span className="font-mono font-medium">{orderId}</span></p>
        <p className="text-sm text-earth-500 mb-8">
          A confirmation email has been sent. Your handcrafted treasures will be on their way soon.
        </p>
        <Link href="/shop/" className={buttonVariants({ size: "lg" })}>
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-serif font-bold text-earth-900 mb-8">Checkout</h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-8">
          <section className="bg-white rounded-xl p-6 border border-earth-100">
            <h2 className="text-lg font-semibold mb-4">Shipping Information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {(
                [
                  ["fullName", "Full Name", "text", true],
                  ["email", "Email", "email", true],
                  ["phone", "Phone", "tel", true],
                  ["addressLine1", "Address Line 1", "text", true],
                  ["addressLine2", "Address Line 2", "text", false],
                  ["city", "City", "text", true],
                  ["state", "State / Province", "text", true],
                  ["postalCode", "Postal Code", "text", true],
                  ["country", "Country", "text", true],
                ] as const
              ).map(([name, label, type, required]) => (
                <div key={name} className={name === "addressLine1" || name === "addressLine2" ? "sm:col-span-2" : ""}>
                  <label htmlFor={name} className="block text-sm font-medium text-earth-700 mb-1">
                    {label}
                  </label>
                  <input
                    id={name}
                    name={name}
                    type={type}
                    required={required}
                    className="w-full px-3 py-2 border border-earth-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-xl p-6 border border-earth-100">
            <h2 className="text-lg font-semibold mb-4">Payment</h2>
            <p className="text-sm text-earth-500 mb-4">
              Payment processing will be integrated with Stripe. For demo purposes, click Place Order to simulate checkout.
            </p>
            <div className="p-4 bg-earth-50 rounded-lg border border-dashed border-earth-300 text-center text-earth-500 text-sm">
              Stripe Payment Element placeholder
            </div>
          </section>
        </div>

        <div className="bg-white rounded-xl p-6 border border-earth-100 h-fit">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
          <div className="space-y-3 text-sm mb-4">
            {items.map(({ product, quantity }) => (
              <div key={product.id} className="flex justify-between">
                <span className="text-earth-600 truncate mr-2">
                  {product.name} × {quantity}
                </span>
                <span className="flex-shrink-0">{formatPrice(product.price * quantity)}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-earth-100 pt-3 space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-earth-600">Subtotal</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-earth-600">Shipping</span>
              <span>{shipping === 0 ? "Free" : formatPrice(shipping)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-earth-600">Tax</span>
              <span>{formatPrice(tax)}</span>
            </div>
            <div className="flex justify-between font-semibold text-base pt-2">
              <span>Total</span>
              <span className="text-brand-800">{formatPrice(total)}</span>
            </div>
          </div>
          <button type="submit" className={buttonVariants({ size: "lg", className: "w-full mt-6" })}>
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
}
