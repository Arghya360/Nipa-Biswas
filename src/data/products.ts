// =============================================================
// products.ts — Dummy product data for Nipa Biswas Market
// =============================================================

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviewCount: number;
  image: string;
  badge?: string;
  description: string;
  features: string[];
  inStock: boolean;
}

export const categories = [
  "All",
  "Electronics",
  "Fashion",
  "Home & Living",
  "Beauty",
  "Sports",
  "Books",
];

export const products: Product[] = [
  {
    id: 1,
    name: "Wireless Noise-Cancelling Headphones",
    category: "Electronics",
    price: 2499,
    originalPrice: 3999,
    rating: 4.7,
    reviewCount: 1243,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    badge: "Best Seller",
    description:
      "Experience crystal-clear audio with our premium wireless headphones. Featuring 40-hour battery life, active noise cancellation, and ultra-comfortable memory foam ear cups.",
    features: [
      "40-hour battery life",
      "Active Noise Cancellation",
      "Bluetooth 5.3 connectivity",
      "Foldable design",
      "Built-in microphone",
    ],
    inStock: true,
  },
  {
    id: 2,
    name: "Ultra HD 4K Smart TV 55 inch",
    category: "Electronics",
    price: 18999,
    originalPrice: 24999,
    rating: 4.6,
    reviewCount: 856,
    image: "https://images.unsplash.com/photo-1522869635100-ce306400e69e?w=500&q=80",
    badge: "Hot Deal",
    description:
      "Stunning 4K resolution with HDR10+ support. Smart TV with built-in streaming apps and voice control.",
    features: [
      "4K UHD Resolution",
      "HDR10+ Support",
      "60Hz Refresh Rate",
      "Voice Remote",
      "Popular Apps Pre-installed",
    ],
    inStock: true,
  },
  {
    id: 3,
    name: "Premium Cotton T-Shirt Pack",
    category: "Fashion",
    price: 599,
    originalPrice: 899,
    rating: 4.5,
    reviewCount: 523,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80",
    description:
      "Pack of 3 premium 100% cotton t-shirts in classic colors. Comfortable and breathable.",
    features: [
      "100% Pure Cotton",
      "Soft & Breathable",
      "Pack of 3",
      "S to XXL sizes",
      "Machine Washable",
    ],
    inStock: true,
  },
  {
    id: 4,
    name: "Stainless Steel Kitchen Knife Set",
    category: "Home & Living",
    price: 1299,
    originalPrice: 1999,
    rating: 4.8,
    reviewCount: 742,
    image: "https://images.unsplash.com/photo-1563618983-e94f93cf93ac?w=500&q=80",
    badge: "Chef's Choice",
    description:
      "Professional-grade 5-piece knife set with high-quality stainless steel blades and wooden storage block.",
    features: [
      "5-Piece Set",
      "Stainless Steel Blades",
      "Ergonomic Handles",
      "Wooden Block Storage",
      "Dishwasher Safe",
    ],
    inStock: true,
  },
  {
    id: 5,
    name: "Facial Moisturizing Cream (50ml)",
    category: "Beauty",
    price: 349,
    originalPrice: 599,
    rating: 4.6,
    reviewCount: 1089,
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=500&q=80",
    badge: "Trending",
    description:
      "Lightweight moisturizer with natural ingredients. Hydrates skin and reduces fine lines.",
    features: [
      "100% Natural Ingredients",
      "Dermatologist Tested",
      "Non-comedogenic",
      "SPF 30 Protection",
      "Paraben-Free",
    ],
    inStock: true,
  },
  {
    id: 6,
    name: "Professional Yoga Mat (6mm)",
    category: "Sports",
    price: 899,
    originalPrice: 1499,
    rating: 4.7,
    reviewCount: 654,
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500&q=80",
    description:
      "Thick, durable yoga mat with excellent cushioning and grip. Perfect for all floor exercises.",
    features: [
      "6mm Thickness",
      "Non-slip Surface",
      "Eco-friendly Material",
      "Carrying Strap",
      "Machine Washable",
    ],
    inStock: true,
  },
  {
    id: 7,
    name: "The Art of Web Development",
    category: "Books",
    price: 299,
    originalPrice: 499,
    rating: 4.4,
    reviewCount: 421,
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500&q=80",
    description:
      "Comprehensive guide to modern web development covering HTML, CSS, JavaScript, and React.",
    features: [
      "450+ Pages",
      "Practical Examples",
      "Color Illustrations",
      "Online Resources",
      "2025 Edition",
    ],
    inStock: true,
  },
  {
    id: 8,
    name: "Portable Power Bank 30000mAh",
    category: "Electronics",
    price: 1599,
    originalPrice: 2499,
    rating: 4.5,
    reviewCount: 934,
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500&q=80",
    description:
      "Ultra-high capacity power bank with fast charging. Charges up to 3 smartphones fully.",
    features: [
      "30000mAh Capacity",
      "22.5W Fast Charging",
      "Triple USB Output",
      "LED Display",
      "Lightweight Design",
    ],
    inStock: true,
  },
  {
    id: 9,
    name: "Winter Jacket - Water Resistant",
    category: "Fashion",
    price: 2299,
    originalPrice: 3499,
    rating: 4.6,
    reviewCount: 512,
    image: "https://images.unsplash.com/photo-1539533057592-4d2b7472e0a7?w=500&q=80",
    badge: "Winter Sale",
    description:
      "Stylish and warm winter jacket with water-resistant outer layer and premium padding.",
    features: [
      "Water Resistant",
      "Premium Insulation",
      "Multiple Colors",
      "XS to XXL Sizes",
      "Machine Washable",
    ],
    inStock: true,
  },
  {
    id: 10,
    name: "LED Desk Lamp with USB Charging",
    category: "Home & Living",
    price: 749,
    originalPrice: 1199,
    rating: 4.7,
    reviewCount: 623,
    image: "https://images.unsplash.com/photo-1565892799514-915ce7b8b5f0?w=500&q=80",
    description:
      "Modern LED desk lamp with built-in USB charging port. Adjustable brightness and color.",
    features: [
      "LED Technology",
      "USB Charging Port",
      "3-Level Brightness",
      "Adjustable Color",
      "Space-Saving Design",
    ],
    inStock: true,
  },
  {
    id: 11,
    name: "Organic Skincare Bundle",
    category: "Beauty",
    price: 1299,
    originalPrice: 1999,
    rating: 4.8,
    reviewCount: 789,
    image: "https://images.unsplash.com/photo-1599599810694-b3d1d28f6a16?w=500&q=80",
    badge: "Best Value",
    description:
      "Complete skincare bundle with cleanser, toner, serum, and moisturizer. All-natural ingredients.",
    features: [
      "4-Piece Bundle",
      "100% Organic",
      "Cruelty-Free",
      "Gift Packaging",
      "All Skin Types",
    ],
    inStock: true,
  },
  {
    id: 12,
    name: "Dumbbell Set (20kg)",
    category: "Sports",
    price: 1999,
    originalPrice: 2999,
    rating: 4.6,
    reviewCount: 456,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&q=80",
    description:
      "Complete dumbbell set with stand. Chrome-plated steel for durability.",
    features: [
      "20kg Total Weight",
      "Adjustable Weights",
      "Chrome Plated",
      "Storage Stand",
      "Non-slip Handles",
    ],
    inStock: true,
  },
];

export const featuredProducts = products.filter((p) =>
  [1, 2, 3, 4, 5, 6].includes(p.id)
);
