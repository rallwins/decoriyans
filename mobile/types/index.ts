export type Category =
  | "pottery"
  | "textiles"
  | "woodwork"
  | "jewelry"
  | "home-decor"
  | "art";

export interface Artisan {
  id: string;
  name: string;
  location: string;
  bio: string;
  avatar: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: Category;
  artisan: Artisan;
  images: string[];
  materials: string[];
  inStock: boolean;
  featured: boolean;
  rating: number;
  reviewCount: number;
  handmade: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export const CATEGORY_LABELS: Record<Category, string> = {
  pottery: "Pottery",
  textiles: "Textiles",
  woodwork: "Woodwork",
  jewelry: "Jewelry",
  "home-decor": "Home Décor",
  art: "Art",
};

export const SITE_CONFIG = {
  name: "Decoriyans",
  tagline: "Handcrafted with Soul",
  domain: "decoriyans.com",
  email: "hello@decoriyans.com",
  shipping: { freeThreshold: 75, standardRate: 8.99 },
};
