import Image from "next/image";
import Link from "next/link";
import { artisans } from "@/data/products";

export default function ArtisansPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-serif font-bold text-earth-900 mb-4">Meet Our Artisans</h1>
        <p className="text-earth-600 max-w-2xl mx-auto">
          The heart of Decoriyans is our community of skilled craftspeople from around the world.
          Each artisan brings unique traditions, techniques, and passion to every piece they create.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {artisans.map((artisan) => (
          <div
            key={artisan.id}
            className="bg-white rounded-xl overflow-hidden border border-earth-100 hover:shadow-lg transition-shadow"
          >
            <div className="relative h-48 bg-brand-100">
              <Image
                src={artisan.avatar}
                alt={artisan.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-serif font-bold text-earth-900">{artisan.name}</h2>
              <p className="text-sm text-brand-600 mb-3">{artisan.location}</p>
              <p className="text-earth-600 text-sm leading-relaxed">{artisan.bio}</p>
              <Link
                href={`/shop/?q=${encodeURIComponent(artisan.name)}`}
                className="inline-block mt-4 text-sm font-medium text-brand-700 hover:text-brand-800"
              >
                View their work →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
