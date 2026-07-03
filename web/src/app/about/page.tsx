import Image from "next/image";
import { SITE_CONFIG } from "@/types";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-4xl font-serif font-bold text-earth-900 mb-6">Our Story</h1>

      <div className="relative aspect-[21/9] rounded-xl overflow-hidden mb-10">
        <Image
          src="https://images.unsplash.com/photo-1452860606385-1eeda1a9b8cf?w=1200&h=500&fit=crop"
          alt="Artisan at work"
          fill
          className="object-cover"
        />
      </div>

      <div className="prose prose-earth max-w-none space-y-6 text-earth-600 leading-relaxed">
        <p className="text-xl text-earth-800 font-medium">
          {SITE_CONFIG.name} was born from a simple belief: in a world of mass production,
          the objects we surround ourselves with should carry meaning, history, and the touch of human hands.
        </p>

        <p>
          Founded in 2024, we set out to create a marketplace that bridges the gap between
          skilled artisans and discerning collectors. Every item on our platform is hand-drafted,
          hand-thrown, hand-woven, or hand-carved — never factory-made, never anonymous.
        </p>

        <h2 className="text-2xl font-serif font-bold text-earth-900 mt-10">Our Mission</h2>
        <p>
          To preserve traditional craftsmanship while empowering artisans with fair compensation,
          global reach, and a community that celebrates their work. We believe that when you buy
          handmade, you&apos;re not just purchasing a product — you&apos;re investing in a person&apos;s livelihood
          and keeping centuries-old traditions alive.
        </p>

        <h2 className="text-2xl font-serif font-bold text-earth-900 mt-10">What Makes Us Different</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Artisan Verified</strong> — Every seller is vetted for craftsmanship quality and ethical practices.</li>
          <li><strong>Transparent Sourcing</strong> — Full material and origin details on every product page.</li>
          <li><strong>Fair Trade Pricing</strong> — Artisans set their own prices; we take only a modest platform fee.</li>
          <li><strong>Sustainable Packaging</strong> — All shipments use recyclable, plastic-free materials.</li>
          <li><strong>Story-Driven Commerce</strong> — Each product page tells the story of its maker.</li>
        </ul>

        <h2 className="text-2xl font-serif font-bold text-earth-900 mt-10">By the Numbers</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 not-prose">
          {[
            { value: "150+", label: "Artisan Partners" },
            { value: "32", label: "Countries" },
            { value: "12K+", label: "Happy Customers" },
            { value: "4.9", label: "Average Rating" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center p-4 bg-brand-50 rounded-xl">
              <p className="text-3xl font-bold text-brand-800">{value}</p>
              <p className="text-sm text-earth-600 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
