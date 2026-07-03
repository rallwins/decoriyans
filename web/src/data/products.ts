import { Artisan, Product } from "@/types";

const artisans: Artisan[] = [
  {
    id: "a1",
    name: "Mira Patel",
    location: "Jaipur, India",
    bio: "Third-generation ceramicist specializing in hand-thrown terracotta with natural glazes.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
  },
  {
    id: "a2",
    name: "Elena Vasquez",
    location: "Oaxaca, Mexico",
    bio: "Master weaver preserving Zapotec textile traditions for over 20 years.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
  },
  {
    id: "a3",
    name: "James Okonkwo",
    location: "Lagos, Nigeria",
    bio: "Wood sculptor crafting functional art from sustainably sourced African hardwood.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
  },
  {
    id: "a4",
    name: "Sofia Lindström",
    location: "Stockholm, Sweden",
    bio: "Contemporary jewelry designer working with recycled silver and ethically sourced gemstones.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop",
  },
  {
    id: "a5",
    name: "Kenji Tanaka",
    location: "Kyoto, Japan",
    bio: "Traditional lacquerware artisan blending centuries-old techniques with modern aesthetics.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
  },
  {
    id: "a6",
    name: "Amara Diallo",
    location: "Dakar, Senegal",
    bio: "Mixed-media artist creating bold contemporary pieces inspired by West African heritage.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop",
  },
];

export const products: Product[] = [
  {
    id: "p1",
    name: "Terracotta Sunrise Bowl",
    slug: "terracotta-sunrise-bowl",
    description: "Hand-thrown bowl with a warm sunrise glaze, perfect for serving or display.",
    longDescription:
      "Each Terracotta Sunrise Bowl is individually thrown on a traditional wheel and fired in a wood-burning kiln. The unique glaze pattern mimics the golden hour light of Rajasthan, making every piece truly one-of-a-kind. Food-safe and microwave-friendly.",
    price: 68,
    originalPrice: 85,
    category: "pottery",
    artisan: artisans[0],
    images: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1610701596007-3a9494d4d3b8?w=800&h=800&fit=crop",
    ],
    materials: ["Terracotta clay", "Natural mineral glaze"],
    dimensions: '8" diameter × 3" height',
    inStock: true,
    stockCount: 12,
    featured: true,
    tags: ["bowl", "terracotta", "kitchen", "serving"],
    rating: 4.9,
    reviewCount: 47,
    handmade: true,
    customizable: false,
    estimatedDelivery: "5-7 business days",
  },
  {
    id: "p2",
    name: "Zapotec Woven Table Runner",
    slug: "zapotec-woven-table-runner",
    description: "Vibrant hand-woven runner featuring traditional geometric patterns.",
    longDescription:
      "Woven on a backstrap loom using locally dyed cotton threads, this table runner carries centuries of Zapotec weaving heritage. The intricate diamond motifs represent protection and prosperity. Each runner takes approximately 40 hours to complete.",
    price: 124,
    category: "textiles",
    artisan: artisans[1],
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=800&h=800&fit=crop",
    ],
    materials: ["100% cotton", "Natural plant dyes"],
    dimensions: '72" × 14"',
    inStock: true,
    stockCount: 8,
    featured: true,
    tags: ["table runner", "woven", "textile", "colorful"],
    rating: 5.0,
    reviewCount: 32,
    handmade: true,
    customizable: true,
    estimatedDelivery: "7-10 business days",
  },
  {
    id: "p3",
    name: "Ebony Carved Serving Board",
    slug: "ebony-carved-serving-board",
    description: "Sculptural serving board hand-carved from sustainably sourced ebony wood.",
    longDescription:
      "This striking serving board is carved from a single piece of African ebony, known for its deep black grain and exceptional durability. The organic edge design celebrates the natural form of the wood. Finished with food-grade mineral oil.",
    price: 156,
    category: "woodwork",
    artisan: artisans[2],
    images: [
      "https://images.unsplash.com/photo-1610701596442-84a6e8d5c4e0?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=800&fit=crop",
    ],
    materials: ["Sustainably sourced ebony", "Food-grade mineral oil"],
    dimensions: '18" × 10" × 1"',
    inStock: true,
    stockCount: 5,
    featured: true,
    tags: ["serving board", "wood", "kitchen", "carved"],
    rating: 4.8,
    reviewCount: 28,
    handmade: true,
    customizable: false,
    estimatedDelivery: "5-7 business days",
  },
  {
    id: "p4",
    name: "Moonstone Drop Earrings",
    slug: "moonstone-drop-earrings",
    description: "Delicate drop earrings featuring ethically sourced moonstone in recycled silver.",
    longDescription:
      "These ethereal earrings feature hand-selected moonstones with a captivating blue flash, set in recycled sterling silver. The minimalist design lets the natural beauty of the stone take center stage. Hypoallergenic posts included.",
    price: 89,
    category: "jewelry",
    artisan: artisans[3],
    images: [
      "https://images.unsplash.com/photo-1535632066922-ab7c9ab60908?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1515567833634-e3e4e4e4e4e4?w=800&h=800&fit=crop",
    ],
    materials: ["Recycled sterling silver", "Ethically sourced moonstone"],
    dimensions: '1.5" drop length',
    inStock: true,
    stockCount: 15,
    featured: true,
    tags: ["earrings", "moonstone", "silver", "jewelry"],
    rating: 4.9,
    reviewCount: 61,
    handmade: true,
    customizable: false,
    estimatedDelivery: "3-5 business days",
  },
  {
    id: "p5",
    name: "Urushi Lacquer Vase",
    slug: "urushi-lacquer-vase",
    description: "Traditional Japanese lacquer vase with gold leaf accents.",
    longDescription:
      "Crafted using the ancient urushi lacquer technique, this vase undergoes over 30 layers of natural lacquer application and polishing. The gold leaf accents are applied by hand using traditional haku-oshi methods. A museum-quality piece for the discerning collector.",
    price: 320,
    category: "home-decor",
    artisan: artisans[4],
    images: [
      "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=800&h=800&fit=crop",
    ],
    materials: ["Natural urushi lacquer", "Gold leaf", "Paulownia wood base"],
    dimensions: '10" height × 5" diameter',
    inStock: true,
    stockCount: 3,
    featured: false,
    tags: ["vase", "lacquer", "japanese", "decor"],
    rating: 5.0,
    reviewCount: 14,
    handmade: true,
    customizable: false,
    estimatedDelivery: "10-14 business days",
  },
  {
    id: "p6",
    name: "Heritage Canvas Print",
    slug: "heritage-canvas-print",
    description: "Limited edition hand-signed canvas print of original mixed-media artwork.",
    longDescription:
      "This limited edition print captures the vibrant energy of Amara Diallo's original mixed-media piece. Each print is hand-signed and numbered (edition of 100) on archival cotton canvas using pigment inks rated for 100+ years of colorfastness.",
    price: 195,
    category: "art",
    artisan: artisans[5],
    images: [
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&h=800&fit=crop",
    ],
    materials: ["Archival cotton canvas", "Pigment inks"],
    dimensions: '24" × 36"',
    inStock: true,
    stockCount: 22,
    featured: false,
    tags: ["art", "canvas", "print", "limited edition"],
    rating: 4.7,
    reviewCount: 19,
    handmade: true,
    customizable: false,
    estimatedDelivery: "5-7 business days",
  },
  {
    id: "p7",
    name: "Hand-Stamped Ceramic Mug Set",
    slug: "hand-stamped-ceramic-mug-set",
    description: "Set of 4 mugs with hand-stamped botanical patterns and matte glaze.",
    longDescription:
      "This charming set of four mugs features individually hand-stamped botanical motifs inspired by Indian block printing traditions. Each mug holds 12oz and is dishwasher-safe. The earthy matte glaze complements any kitchen aesthetic.",
    price: 96,
    category: "pottery",
    artisan: artisans[0],
    images: [
      "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=800&h=800&fit=crop",
    ],
    materials: ["Stoneware clay", "Matte glaze"],
    dimensions: '3.5" diameter × 4" height (each)',
    inStock: true,
    stockCount: 20,
    featured: false,
    tags: ["mugs", "ceramic", "set", "kitchen"],
    rating: 4.8,
    reviewCount: 53,
    handmade: true,
    customizable: false,
    estimatedDelivery: "5-7 business days",
  },
  {
    id: "p8",
    name: "Woven Wall Hanging",
    slug: "woven-wall-hanging",
    description: "Bohemian macramé wall hanging with natural cotton and wooden beads.",
    longDescription:
      "This stunning wall hanging combines traditional macramé knotting with hand-dyed cotton cords in earthy tones. Wooden beads add texture and visual interest. Perfect for adding warmth to any living space.",
    price: 78,
    category: "home-decor",
    artisan: artisans[1],
    images: [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=800&fit=crop",
    ],
    materials: ["Natural cotton cord", "Wooden beads", "Brass ring"],
    dimensions: '36" length × 18" width',
    inStock: true,
    stockCount: 10,
    featured: false,
    tags: ["wall hanging", "macramé", "bohemian", "decor"],
    rating: 4.6,
    reviewCount: 37,
    handmade: true,
    customizable: true,
    estimatedDelivery: "7-10 business days",
  },
];

export { artisans };

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase();
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.tags.some((t) => t.includes(q)) ||
      p.artisan.name.toLowerCase().includes(q)
  );
}

export function formatPrice(price: number): string {
  return `$${price.toFixed(2)}`;
}
