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
  longDescription: string;
  price: number;
  originalPrice?: number;
  category: Category;
  artisan: Artisan;
  images: string[];
  materials: string[];
  dimensions?: string;
  inStock: boolean;
  stockCount: number;
  featured: boolean;
  tags: string[];
  rating: number;
  reviewCount: number;
  handmade: boolean;
  customizable: boolean;
  estimatedDelivery: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Review {
  id: string;
  productId: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Order {
  id: string;
  items: CartItem[];
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  status: "pending" | "confirmed" | "shipped" | "delivered";
  createdAt: string;
  shippingAddress: ShippingAddress;
}

export interface ShippingAddress {
  fullName: string;
  email: string;
  phone: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

export const CATEGORY_LABELS: Record<Category, string> = {
  pottery: "Pottery & Ceramics",
  textiles: "Textiles & Weaving",
  woodwork: "Woodwork & Carving",
  jewelry: "Handcrafted Jewelry",
  "home-decor": "Home Décor",
  art: "Fine Art & Illustration",
};

export const SITE_CONFIG = {
  name: "Decoriyans",
  tagline: "Handcrafted with Soul, Delivered with Care",
  description:
    "Discover one-of-a-kind hand-drafted treasures from skilled artisans around the world. Every piece tells a story.",
  domain: "decoriyans.com",
  email: "hello@decoriyans.com",
  phone: "+1 (555) 234-5678",
  address: "42 Artisan Lane, Brooklyn, NY 11201",
  social: {
    instagram: "https://instagram.com/decoriyans",
    pinterest: "https://pinterest.com/decoriyans",
    facebook: "https://facebook.com/decoriyans",
  },
  shipping: {
    freeThreshold: 75,
    standardRate: 8.99,
    expressRate: 19.99,
  },
  currency: "USD",
  currencySymbol: "$",
};
