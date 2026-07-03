"use client";

import Link from "next/link";
import { ShoppingBag, Search, Menu, X } from "lucide-react";
import { SITE_CONFIG } from "@/types";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

const navLinks = [
  { href: "/shop/", label: "Shop" },
  { href: "/artisans/", label: "Artisans" },
  { href: "/about/", label: "Our Story" },
  { href: "/contact/", label: "Contact" },
];

export function Header() {
  const { itemCount } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-brand-50/95 backdrop-blur-sm border-b border-brand-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-serif font-bold text-brand-800 tracking-tight">
              {SITE_CONFIG.name}
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-earth-700 hover:text-brand-700 font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-earth-600 hover:text-brand-700 transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <Link
              href="/cart/"
              className="relative p-2 text-earth-600 hover:text-brand-700 transition-colors"
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-brand-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium">
                  {itemCount}
                </span>
              )}
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-earth-600"
              aria-label="Menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {searchOpen && (
          <div className="pb-4">
            <form action="/shop/" method="get" className="flex gap-2">
              <input
                type="search"
                name="q"
                placeholder="Search handcrafted treasures..."
                className="flex-1 px-4 py-2 rounded-lg border border-brand-200 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                autoFocus
              />
              <button
                type="submit"
                className="px-4 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700 transition-colors"
              >
                Search
              </button>
            </form>
          </div>
        )}
      </div>

      {mobileOpen && (
        <nav className="md:hidden border-t border-brand-200 bg-brand-50 px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-earth-700 hover:text-brand-700 font-medium py-2"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
