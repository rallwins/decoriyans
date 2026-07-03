import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Truck, Shield, Heart, Award } from "lucide-react";
import { ProductCard } from "@/components/shop/ProductCard";
import { Button } from "@/components/ui/Button";
import { getFeaturedProducts } from "@/data/products";
import { CATEGORY_LABELS, SITE_CONFIG } from "@/types";

export default function HomePage() {
  const featured = getFeaturedProducts();

  return (
    <>
      {/* Hero */}
      <section className="relative bg-brand-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="https://images.unsplash.com/photo-1610701596007-3a9494d4d3b8?w=1920&h=1080&fit=crop"
            alt="Handcrafted pottery"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
          <div className="max-w-2xl">
            <p className="text-brand-300 font-medium tracking-wide uppercase text-sm mb-4">
              Artisan Marketplace
            </p>
            <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-6">
              {SITE_CONFIG.tagline}
            </h1>
            <p className="text-lg text-brand-200 mb-8 leading-relaxed">
              {SITE_CONFIG.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/shop/">
                <Button size="lg" className="bg-white text-brand-800 hover:bg-brand-100">
                  Explore Collection
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/artisans/">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  Meet Our Artisans
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="bg-white border-b border-earth-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Heart, label: "100% Handmade", desc: "Every piece crafted by hand" },
              { icon: Truck, label: "Free Shipping", desc: `On orders over $${SITE_CONFIG.shipping.freeThreshold}` },
              { icon: Shield, label: "Secure Checkout", desc: "Protected payments" },
              { icon: Award, label: "Artisan Verified", desc: "Curated creators only" },
            ].map(({ icon: Icon, label, desc }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="p-2.5 bg-brand-100 rounded-lg">
                  <Icon className="w-5 h-5 text-brand-700" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-earth-900">{label}</p>
                  <p className="text-xs text-earth-500">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl font-serif font-bold text-earth-900">Featured Treasures</h2>
            <p className="text-earth-500 mt-2">Handpicked pieces from our artisan community</p>
          </div>
          <Link href="/shop/" className="hidden sm:flex items-center text-brand-700 font-medium hover:text-brand-800">
            View All <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="bg-earth-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-earth-900 text-center mb-10">
            Shop by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {Object.entries(CATEGORY_LABELS).map(([key, label]) => (
              <Link
                key={key}
                href={`/shop/?category=${key}`}
                className="bg-white rounded-xl p-6 text-center hover:shadow-md transition-shadow border border-earth-100 group"
              >
                <div className="w-12 h-12 bg-brand-100 rounded-full mx-auto mb-3 flex items-center justify-center group-hover:bg-brand-200 transition-colors">
                  <span className="text-brand-700 font-serif text-lg">
                    {label.charAt(0)}
                  </span>
                </div>
                <p className="text-sm font-medium text-earth-800">{label}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-800 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">
            Join the Decoriyans Artisan Community
          </h2>
          <p className="text-brand-200 mb-8 leading-relaxed">
            Are you a skilled craftsperson? Share your handmade creations with a global audience
            that values authenticity and artistry.
          </p>
          <Link href="/contact/">
            <Button size="lg" className="bg-white text-brand-800 hover:bg-brand-100">
              Become an Artisan Partner
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
