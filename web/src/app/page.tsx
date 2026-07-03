import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Truck, Shield, Heart, Award } from "lucide-react";
import { ProductCard } from "@/components/shop/ProductCard";
import { buttonVariants } from "@/components/ui/Button";
import { getFeaturedProducts } from "@/data/products";
import { CATEGORY_LABELS, SITE_CONFIG } from "@/types";

export default function HomePage() {
  const featured = getFeaturedProducts();

  return (
    <>
      {/* Hero banner */}
      <section className="relative overflow-hidden min-h-[560px] md:min-h-[620px]">
        <Image
          src="https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=1920&h=1080&fit=crop"
          alt="Artisan hands crafting pottery"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900/95 via-brand-800/85 to-brand-600/40 md:to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(0,174,239,0.25)_0%,_transparent_55%)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="text-center md:text-left">
              <div className="bg-white rounded-2xl px-5 py-4 md:px-8 md:py-5 shadow-xl mb-6 inline-block w-full max-w-md md:max-w-none">
                <Image
                  src={SITE_CONFIG.logo}
                  alt={SITE_CONFIG.name}
                  width={600}
                  height={168}
                  className="w-full max-w-xs md:max-w-sm mx-auto md:mx-0 h-auto"
                  priority
                />
              </div>
              <p className="text-brand-200 font-medium tracking-wide uppercase text-sm mb-3">
                Artisan Marketplace
              </p>
              <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 text-white">
                {SITE_CONFIG.tagline}
              </h1>
              <p className="text-lg text-white/85 mb-8 leading-relaxed max-w-lg mx-auto md:mx-0">
                {SITE_CONFIG.description}
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Link href="/shop/" className={buttonVariants({ variant: "inverse", size: "lg" })}>
                  Explore Collection
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link href="/artisans/" className={buttonVariants({ variant: "outline-inverse", size: "lg" })}>
                  Meet Our Artisans
                </Link>
              </div>
            </div>

            <div className="hidden md:block relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white/25">
              <Image
                src="https://images.unsplash.com/photo-1610701596007-3a9494d4d3b8?w=1200&h=900&fit=crop"
                alt="Handcrafted ceramics on a potter's wheel"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900/30 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="bg-white border-b border-brand-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Heart, label: "100% Handmade", desc: "Every piece crafted by hand" },
              { icon: Truck, label: "Free Shipping", desc: `On orders over $${SITE_CONFIG.shipping.freeThreshold}` },
              { icon: Shield, label: "Secure Checkout", desc: "Protected payments" },
              { icon: Award, label: "Artisan Verified", desc: "Curated creators only" },
            ].map(({ icon: Icon, label, desc }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="p-2.5 bg-brand-100 rounded-xl">
                  <Icon className="w-5 h-5 text-brand-600" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-earth-800">{label}</p>
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
            <h2 className="text-3xl font-bold text-earth-900">Featured Treasures</h2>
            <p className="text-earth-500 mt-2">Handpicked pieces from our artisan community</p>
          </div>
          <Link href="/shop/" className="hidden sm:flex items-center text-brand-600 font-medium hover:text-brand-700">
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
      <section className="bg-white/70 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-earth-900 text-center mb-10">
            Shop by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {Object.entries(CATEGORY_LABELS).map(([key, label]) => (
              <Link
                key={key}
                href={`/shop/?category=${key}`}
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all border border-brand-100 group hover:border-brand-300"
              >
                <div className="w-12 h-12 bg-brand-gradient rounded-full mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                  <span className="text-white font-bold text-lg">
                    {label.charAt(0)}
                  </span>
                </div>
                <p className="text-sm font-medium text-earth-700">{label}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-hero-gradient text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.1)_0%,_transparent_70%)]" />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Join the Decoriyans Artisan Community
          </h2>
          <p className="text-white/85 mb-8 leading-relaxed">
            Are you a skilled craftsperson? Share your handmade creations with a global audience
            that values authenticity and artistry.
          </p>
          <Link href="/contact/" className={buttonVariants({ variant: "inverse", size: "lg" })}>
            Become an Artisan Partner
          </Link>
        </div>
      </section>
    </>
  );
}
