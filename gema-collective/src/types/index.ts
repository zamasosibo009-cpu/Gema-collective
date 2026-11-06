export type HairQuality = "100% Human Hair" | "Virgin" | "Remy" | "Synthetic";
export type Density = "130%" | "150%" | "180%" | "200%+";
export type LaceType =
  | "HD Lace"
  | "Transparent Lace"
  | "13x4 Frontal"
  | "5x5 Closure"
  | "Full Lace";
export type Texture =
  | "Straight"
  | "Body Wave"
  | "Deep Wave"
  | "Curly"
  | "Bob";
export type Colour =
  | "Natural Black"
  | "Brown"
  | "Blonde"
  | "Ombre"
  | "Custom";
export type CapSize = "Small" | "Medium" | "Large" | "Adjustable";

export interface ProductVariant {
  id: string;
  length: number; // inches
  density: Density;
  laceType: LaceType;
  price: number;
  stock: number;
  sku: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  shortDescription: string;
  category: string;
  images: string[];
  hairQuality: HairQuality;
  textures: Texture[];
  colours: Colour[];
  capSizes: CapSize[];
  variants: ProductVariant[];
  basePrice: number;
  rating: number;
  reviewCount: number;
  isBestseller: boolean;
  isNew: boolean;
  tags: string[];
  careInstructions: string[];
  features: string[];
}

export interface CartItem {
  productId: string;
  variantId: string;
  quantity: number;
  // Snapshot for display
  name: string;
  image: string;
  length: number;
  density: Density;
  laceType: LaceType;
  price: number;
  slug: string;
}

export interface Review {
  id: string;
  productId: string;
  author: string;
  rating: number;
  title: string;
  content: string;
  date: string;
  verified: boolean;
}

export type SortOption =
  | "newest"
  | "price-asc"
  | "price-desc"
  | "bestselling"
  | "rating";

export interface Filters {
  hairQuality: HairQuality[];
  density: Density[];
  lengthMin: number;
  lengthMax: number;
  laceType: LaceType[];
  texture: Texture[];
  colour: Colour[];
  capSize: CapSize[];
  priceMin: number;
  priceMax: number;
  sort: SortOption;
}
