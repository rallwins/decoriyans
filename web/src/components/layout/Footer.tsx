import Link from "next/link";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";
import { SITE_CONFIG } from "@/types";

export function Footer() {
  return (
    <footer className="bg-brand-950 text-brand-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="text-2xl font-serif font-bold text-white mb-4">
              {SITE_CONFIG.name}
            </h3>
            <p className="text-brand-200 text-sm leading-relaxed mb-4">
              {SITE_CONFIG.description}
            </p>
            <div className="flex gap-4">
              <a
                href={SITE_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-300 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={SITE_CONFIG.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-300 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/shop/" className="hover:text-white transition-colors">All Products</Link></li>
              <li><Link href="/shop/?category=pottery" className="hover:text-white transition-colors">Pottery</Link></li>
              <li><Link href="/shop/?category=textiles" className="hover:text-white transition-colors">Textiles</Link></li>
              <li><Link href="/shop/?category=woodwork" className="hover:text-white transition-colors">Woodwork</Link></li>
              <li><Link href="/shop/?category=jewelry" className="hover:text-white transition-colors">Jewelry</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about/" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link href="/artisans/" className="hover:text-white transition-colors">Meet Our Artisans</Link></li>
              <li><Link href="/contact/" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/shipping/" className="hover:text-white transition-colors">Shipping & Returns</Link></li>
              <li><Link href="/privacy/" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-400" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-white transition-colors">
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-400" />
                <span>{SITE_CONFIG.phone}</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-400 mt-0.5" />
                <span>{SITE_CONFIG.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-brand-300">
          <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</p>
          <p>Handcrafted with love &middot; {SITE_CONFIG.domain}</p>
        </div>
      </div>
    </footer>
  );
}
