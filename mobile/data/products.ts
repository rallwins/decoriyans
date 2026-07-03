import { Product } from "../types";

const artisans = [
  {
    id: "a1",
    name: "Mira Patel",
    location: "Jaipur, India",
    bio: "Third-generation ceramicist.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
  },
  {
    id: "a2",
    name: "Elena Vasquez",
    location: "Oaxaca, Mexico",
    bio: "Master weaver preserving Zapotec traditions.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
  },
  {
    id: "a3",
    name: "James Okonkwo",
    location: "Lagos, Nigeria",
    bio: "Wood sculptor from sustainably sourced hardwood.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
  },
  {
    id: "a4",
    name: "Sofia Lindström",
    location: "Stockholm, Sweden",
    bio: "Jewelry designer with recycled silver.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop",
  },
] as const;

export const products: Product[] = [
  {
    id: "p1",
    name: "Terracotta Sunrise Bowl",
    slug: "terracotta-sunrise-bowl",
    description: "Hand-thrown bowl with warm sunrise glaze.",
    price: 68,
    originalPrice: 85,
    category: "pottery",
    artisan: artisans[0],
    images: ["https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=800&fit=crop"],
    materials: ["Terracotta clay"],
    inStock: true,
    featured: true,
    rating: 4.9,
    reviewCount: 47,
    handmade: true,
  },
  {
    id: "p2",
    name: "Zapotec Woven Table Runner",
    slug: "zapotec-woven-table-runner",
    description: "Vibrant hand-woven runner with geometric patterns.",
    price: 124,
    category: "textiles",
    artisan: artisans[1],
    images: ["https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=800&fit=crop"],
    materials: ["100% cotton"],
    inStock: true,
    featured: true,
    rating: 5.0,
    reviewCount: 32,
    handmade: true,
  },
  {
    id: "p3",
    name: "Ebony Carved Serving Board",
    slug: "ebony-carved-serving-board",
    description: "Sculptural serving board from ebony wood.",
    price: 156,
    category: "woodwork",
    artisan: artisans[2],
    images: ["https://images.unsplash.com/photo-1610701596442-84a6e8d5c4e0?w=800&h=800&fit=crop"],
    materials: ["Ebony wood"],
    inStock: true,
    featured: true,
    rating: 4.8,
    reviewCount: 28,
    handmade: true,
  },
  {
    id: "p4",
    name: "Moonstone Drop Earrings",
    slug: "moonstone-drop-earrings",
    description: "Delicate earrings with moonstone in recycled silver.",
    price: 89,
    category: "jewelry",
    artisan: artisans[3],
    images: ["https://images.unsplash.com/photo-1535632066922-ab7c9ab60908?w=800&h=800&fit=crop"],
    materials: ["Sterling silver", "Moonstone"],
    inStock: true,
    featured: true,
    rating: 4.9,
    reviewCount: 61,
    handmade: true,
  },
  {
    id: "p5",
    name: "Hand-Stamped Ceramic Mug Set",
    slug: "hand-stamped-ceramic-mug-set",
    description: "Set of 4 mugs with botanical patterns.",
    price: 96,
    category: "pottery",
    artisan: artisans[0],
    images: ["https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=800&h=800&fit=crop"],
    materials: ["Stoneware clay"],
    inStock: true,
    featured: false,
    rating: 4.8,
    reviewCount: 53,
    handmade: true,
  },
  {
    id: "p6",
    name: "Woven Wall Hanging",
    slug: "woven-wall-hanging",
    description: "Bohemian macramé wall hanging.",
    price: 78,
    category: "home-decor",
    artisan: artisans[1],
    images: ["https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=800&fit=crop"],
    materials: ["Cotton cord", "Wooden beads"],
    inStock: true,
    featured: false,
    rating: 4.6,
    reviewCount: 37,
    handmade: true,
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts() {
  return products.filter((p) => p.featured);
}

export function formatPrice(price: number) {
  return `$${price.toFixed(2)}`;
}
