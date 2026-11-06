import { Product, Review } from "@/types";

export const products: Product[] = [
  {
    id: "1",
    slug: "luxe-body-wave-lace-front",
    name: "Luxe Body Wave Lace Front Wig",
    description:
      "Experience effortless elegance with our Luxe Body Wave Lace Front Wig. Crafted from premium 100% virgin human hair, this piece offers natural movement, soft waves that cascade beautifully, and a seamless HD lace front for an undetectable hairline. Perfect for everyday glam or special occasions.",
    shortDescription: "Premium virgin human hair body wave with HD lace front.",
    category: "Lace Front",
    images: [
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80",
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&q=80",
      "https://images.unsplash.com/photo-1492106087820-4e83caa534d9?w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc0?w=800&q=80",
    ],
    hairQuality: "Virgin",
    textures: ["Body Wave"],
    colours: ["Natural Black", "Brown"],
    capSizes: ["Medium", "Adjustable"],
    variants: [
      { id: "1-1", length: 16, density: "150%", laceType: "HD Lace", price: 3899, stock: 12, sku: "LBW-16-150-HD" },
      { id: "1-2", length: 18, density: "150%", laceType: "HD Lace", price: 4299, stock: 8, sku: "LBW-18-150-HD" },
      { id: "1-3", length: 20, density: "180%", laceType: "HD Lace", price: 4899, stock: 5, sku: "LBW-20-180-HD" },
      { id: "1-4", length: 22, density: "180%", laceType: "13x4 Frontal", price: 5499, stock: 3, sku: "LBW-22-180-13x4" },
    ],
    basePrice: 3899,
    rating: 4.9,
    reviewCount: 128,
    isBestseller: true,
    isNew: false,
    tags: ["bestseller", "lace-front", "body-wave"],
    careInstructions: [
      "Wash gently with sulfate-free shampoo in lukewarm water",
      "Condition thoroughly and leave in for 5–10 minutes",
      "Air dry or use low heat; avoid high temperatures",
      "Store on a wig stand when not in use",
      "Detangle gently from ends upward with a wide-tooth comb",
    ],
    features: [
      "100% Virgin Human Hair",
      "Pre-plucked natural hairline",
      "Bleached knots for undetectable look",
      "Adjustable straps for secure fit",
      "Can be dyed, curled, and styled",
    ],
  },
  {
    id: "2",
    slug: "silk-straight-full-lace",
    name: "Silk Straight Full Lace Wig",
    description:
      "Ultra-sleek and sophisticated. Our Silk Straight Full Lace Wig is made from the finest Remy human hair for exceptional softness and shine. The full lace construction offers versatile styling options including high ponytails and updos.",
    shortDescription: "Sleek Remy human hair full lace with natural shine.",
    category: "Full Lace",
    images: [
      "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&q=80",
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800&q=80",
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=80",
    ],
    hairQuality: "Remy",
    textures: ["Straight"],
    colours: ["Natural Black", "Brown", "Blonde"],
    capSizes: ["Small", "Medium", "Large"],
    variants: [
      { id: "2-1", length: 14, density: "130%", laceType: "Full Lace", price: 4599, stock: 6, sku: "SSF-14-130-FL" },
      { id: "2-2", length: 18, density: "150%", laceType: "Full Lace", price: 5299, stock: 4, sku: "SSF-18-150-FL" },
      { id: "2-3", length: 22, density: "180%", laceType: "Full Lace", price: 6199, stock: 2, sku: "SSF-22-180-FL" },
    ],
    basePrice: 4599,
    rating: 4.8,
    reviewCount: 86,
    isBestseller: true,
    isNew: false,
    tags: ["full-lace", "straight", "premium"],
    careInstructions: [
      "Use mild, sulfate-free products only",
      "Never brush when wet — finger comb instead",
      "Apply heat protectant before any styling tools",
      "Deep condition weekly for lasting softness",
    ],
    features: [
      "Remy Human Hair — cuticle aligned",
      "Full lace for maximum versatility",
      "Natural density options",
      "Lightweight and breathable cap",
    ],
  },
  {
    id: "3",
    slug: "deep-wave-hd-lace",
    name: "Deep Wave HD Lace Wig",
    description:
      "Bold, voluminous deep waves that hold their shape beautifully. This HD lace unit gives you an ultra-realistic hairline and can be parted anywhere. Ideal for those who love dramatic texture with minimal maintenance.",
    shortDescription: "Voluminous deep wave with crystal-clear HD lace.",
    category: "Lace Front",
    images: [
      "https://images.unsplash.com/photo-1595476108010-b4d1f595b234?w=800&q=80",
      "https://images.unsplash.com/photo-1487412720507-e7bc532d0c18?w=800&q=80",
      "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?w=800&q=80",
    ],
    hairQuality: "100% Human Hair",
    textures: ["Deep Wave"],
    colours: ["Natural Black", "Ombre"],
    capSizes: ["Medium", "Adjustable"],
    variants: [
      { id: "3-1", length: 16, density: "150%", laceType: "HD Lace", price: 3699, stock: 10, sku: "DW-16-150-HD" },
      { id: "3-2", length: 20, density: "180%", laceType: "HD Lace", price: 4499, stock: 7, sku: "DW-20-180-HD" },
      { id: "3-3", length: 24, density: "200%+", laceType: "13x4 Frontal", price: 5399, stock: 4, sku: "DW-24-200-13x4" },
    ],
    basePrice: 3699,
    rating: 4.7,
    reviewCount: 94,
    isBestseller: true,
    isNew: true,
    tags: ["deep-wave", "hd-lace", "new"],
    careInstructions: [
      "Refresh waves with water + leave-in conditioner mist",
      "Avoid heavy oils that weigh down the pattern",
      "Sleep with a satin bonnet or on a silk pillowcase",
    ],
    features: [
      "Defined deep wave pattern",
      "HD lace melts into skin",
      "High density options available",
      "Easy to maintain texture",
    ],
  },
  {
    id: "4",
    slug: "curly-closure-wig",
    name: "Natural Curly 5x5 Closure Wig",
    description:
      "Embrace your natural texture with our bouncy curly wig featuring a generous 5x5 closure. Made from soft virgin hair that retains its spring and shine wash after wash.",
    shortDescription: "Soft virgin curly hair with large 5x5 closure.",
    category: "Closure",
    images: [
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80",
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&q=80",
    ],
    hairQuality: "Virgin",
    textures: ["Curly"],
    colours: ["Natural Black", "Brown"],
    capSizes: ["Medium", "Large"],
    variants: [
      { id: "4-1", length: 14, density: "150%", laceType: "5x5 Closure", price: 3299, stock: 9, sku: "CC-14-150-5x5" },
      { id: "4-2", length: 18, density: "180%", laceType: "5x5 Closure", price: 3999, stock: 5, sku: "CC-18-180-5x5" },
    ],
    basePrice: 3299,
    rating: 4.6,
    reviewCount: 67,
    isBestseller: false,
    isNew: true,
    tags: ["curly", "closure", "natural"],
    careInstructions: [
      "Finger coil or use a denman brush for definition",
      "Use curl-enhancing cream or gel",
      "Never comb dry curls aggressively",
    ],
    features: [
      "Springy natural curls",
      "5x5 glueless-friendly closure",
      "Minimal shedding",
      "Lightweight feel",
    ],
  },
  {
    id: "5",
    slug: "bob-hd-lace-wig",
    name: "Chic Bob HD Lace Wig",
    description:
      "Timeless and chic. This shoulder-grazing bob is cut and styled to perfection with a soft blunt finish. HD lace ensures a natural look around the face.",
    shortDescription: "Modern blunt bob with seamless HD lace.",
    category: "Bob",
    images: [
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&q=80",
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=800&q=80",
    ],
    hairQuality: "Remy",
    textures: ["Bob", "Straight"],
    colours: ["Natural Black", "Brown", "Blonde"],
    capSizes: ["Small", "Medium", "Adjustable"],
    variants: [
      { id: "5-1", length: 10, density: "150%", laceType: "HD Lace", price: 2899, stock: 15, sku: "BOB-10-150-HD" },
      { id: "5-2", length: 12, density: "150%", laceType: "HD Lace", price: 3099, stock: 11, sku: "BOB-12-150-HD" },
      { id: "5-3", length: 14, density: "180%", laceType: "HD Lace", price: 3499, stock: 6, sku: "BOB-14-180-HD" },
    ],
    basePrice: 2899,
    rating: 4.9,
    reviewCount: 152,
    isBestseller: true,
    isNew: false,
    tags: ["bob", "bestseller", "easy"],
    careInstructions: [
      "Trim ends every 6–8 weeks to maintain shape",
      "Use a paddle brush for sleek finish",
      "Light serum for shine",
    ],
    features: [
      "Precision cut bob",
      "Face-framing layers available on request",
      "Quick to style",
      "Great for beginners",
    ],
  },
  {
    id: "6",
    slug: "ombre-body-wave-frontal",
    name: "Ombre Body Wave 13x4 Frontal",
    description:
      "Stunning ombre colour melt from rich roots into soft caramel ends. Paired with romantic body waves and a wide 13x4 frontal for effortless middle or side parts.",
    shortDescription: "Beautiful ombre colour with luxurious body wave.",
    category: "Frontal",
    images: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80",
    ],
    hairQuality: "Virgin",
    textures: ["Body Wave"],
    colours: ["Ombre"],
    capSizes: ["Medium", "Adjustable"],
    variants: [
      { id: "6-1", length: 18, density: "150%", laceType: "13x4 Frontal", price: 4799, stock: 4, sku: "OBW-18-150-13x4" },
      { id: "6-2", length: 22, density: "180%", laceType: "13x4 Frontal", price: 5599, stock: 3, sku: "OBW-22-180-13x4" },
    ],
    basePrice: 4799,
    rating: 4.8,
    reviewCount: 41,
    isBestseller: false,
    isNew: true,
    tags: ["ombre", "frontal", "colour"],
    careInstructions: [
      "Colour-safe, sulfate-free shampoo only",
      "Cool water rinses to preserve colour",
      "Limit heat styling to protect the ombre blend",
    ],
    features: [
      "Hand-dyed ombre melt",
      "Wide frontal for styling freedom",
      "Soft, bouncy waves",
      "Limited edition colourway",
    ],
  },
  {
    id: "7",
    slug: "blonde-straight-lace-front",
    name: "Honey Blonde Straight Lace Front",
    description:
      "Radiant honey blonde that flatters a range of skin tones. Silky straight Remy hair with a pre-plucked HD lace front for an instantly polished look.",
    shortDescription: "Luminous honey blonde with sleek straight texture.",
    category: "Lace Front",
    images: [
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80",
    ],
    hairQuality: "Remy",
    textures: ["Straight"],
    colours: ["Blonde"],
    capSizes: ["Small", "Medium"],
    variants: [
      { id: "7-1", length: 16, density: "150%", laceType: "HD Lace", price: 4199, stock: 7, sku: "HBS-16-150-HD" },
      { id: "7-2", length: 20, density: "150%", laceType: "HD Lace", price: 4699, stock: 4, sku: "HBS-20-150-HD" },
    ],
    basePrice: 4199,
    rating: 4.7,
    reviewCount: 58,
    isBestseller: false,
    isNew: false,
    tags: ["blonde", "straight", "lace-front"],
    careInstructions: [
      "Purple shampoo once a week to maintain tone",
      "Deep condition regularly — blonde can be drier",
      "Use heat protectant religiously",
    ],
    features: [
      "Custom honey blonde tone",
      "Pre-plucked & bleached knots",
      "Soft and tangle-resistant",
    ],
  },
  {
    id: "8",
    slug: "kinky-curly-full-lace",
    name: "Kinky Curly Full Lace Unit",
    description:
      "True-to-texture kinky curly pattern that blends seamlessly with natural coily hair. Full lace construction for protective styling versatility.",
    shortDescription: "Authentic kinky curly texture, full lace versatility.",
    category: "Full Lace",
    images: [
      "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=800&q=80",
      "https://images.unsplash.com/photo-1524250502761-1ac6f2e30dc1?w=800&q=80",
    ],
    hairQuality: "100% Human Hair",
    textures: ["Curly"],
    colours: ["Natural Black"],
    capSizes: ["Medium", "Large", "Adjustable"],
    variants: [
      { id: "8-1", length: 14, density: "180%", laceType: "Full Lace", price: 4899, stock: 5, sku: "KC-14-180-FL" },
      { id: "8-2", length: 18, density: "200%+", laceType: "Full Lace", price: 5699, stock: 2, sku: "KC-18-200-FL" },
    ],
    basePrice: 4899,
    rating: 4.9,
    reviewCount: 73,
    isBestseller: true,
    isNew: false,
    tags: ["kinky-curly", "full-lace", "natural"],
    careInstructions: [
      "Co-wash or use gentle cleanser",
      "Define with leave-in + gel or custard",
      "Pineapple or use a satin scrunchie at night",
    ],
    features: [
      "True kinky-curly pattern",
      "Excellent for protective styles",
      "High density for fullness",
      "Blends with natural hair",
    ],
  },
  {
    id: "9",
    slug: "transparent-lace-body-wave",
    name: "Transparent Lace Body Wave",
    description:
      "Our most undetectable lace yet. Transparent lace melts into every skin tone, paired with soft romantic body waves that move naturally.",
    shortDescription: "Ultra-undetectable transparent lace + soft body wave.",
    category: "Lace Front",
    images: [
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&q=80",
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&q=80",
    ],
    hairQuality: "Virgin",
    textures: ["Body Wave"],
    colours: ["Natural Black", "Brown"],
    capSizes: ["Medium", "Adjustable"],
    variants: [
      { id: "9-1", length: 18, density: "150%", laceType: "Transparent Lace", price: 4099, stock: 8, sku: "TLB-18-150-TL" },
      { id: "9-2", length: 22, density: "180%", laceType: "Transparent Lace", price: 4899, stock: 4, sku: "TLB-22-180-TL" },
    ],
    basePrice: 4099,
    rating: 4.8,
    reviewCount: 39,
    isBestseller: false,
    isNew: true,
    tags: ["transparent-lace", "body-wave", "new"],
    careInstructions: [
      "Handle lace gently when washing",
      "Use lace tint if desired for perfect match",
      "Store carefully to protect the delicate lace",
    ],
    features: [
      "Transparent lace for all skin tones",
      "Pre-plucked hairline",
      "Soft, natural movement",
      "Beginner-friendly install",
    ],
  },
  {
    id: "10",
    slug: "custom-colour-deep-wave",
    name: "Custom Colour Deep Wave",
    description:
      "Want a specific shade? This deep wave unit is available in custom colours. Tell us your dream tone and we’ll match it. Premium virgin hair base.",
    shortDescription: "Custom-dyed deep wave — your colour, our craft.",
    category: "Custom",
    images: [
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80",
      "https://images.unsplash.com/photo-1487412720507-e7bc532d0c18?w=800&q=80",
    ],
    hairQuality: "Virgin",
    textures: ["Deep Wave"],
    colours: ["Custom"],
    capSizes: ["Small", "Medium", "Large", "Adjustable"],
    variants: [
      { id: "10-1", length: 16, density: "150%", laceType: "HD Lace", price: 4499, stock: 6, sku: "CCD-16-150-HD" },
      { id: "10-2", length: 20, density: "180%", laceType: "13x4 Frontal", price: 5299, stock: 3, sku: "CCD-20-180-13x4" },
      { id: "10-3", length: 26, density: "200%+", laceType: "Full Lace", price: 6799, stock: 1, sku: "CCD-26-200-FL" },
    ],
    basePrice: 4499,
    rating: 5.0,
    reviewCount: 22,
    isBestseller: false,
    isNew: true,
    tags: ["custom", "deep-wave", "colour"],
    careInstructions: [
      "Custom colour requires extra gentle care",
      "Use colour-protecting products exclusively",
      "Avoid chlorine and prolonged sun exposure",
    ],
    features: [
      "Custom colour matching available",
      "Premium virgin hair base",
      "Multiple lace options",
      "Made-to-order in 7–14 days",
    ],
  },
];

export const reviews: Review[] = [
  {
    id: "r1",
    productId: "1",
    author: "Thandi M.",
    rating: 5,
    title: "Absolutely stunning",
    content: "The body wave is so soft and the HD lace is invisible. I’ve received so many compliments. Worth every rand!",
    date: "2025-10-12",
    verified: true,
  },
  {
    id: "r2",
    productId: "1",
    author: "Lerato K.",
    rating: 5,
    title: "Best purchase this year",
    content: "Density is perfect, no shedding after two months of wear. Gema Collective quality is next level.",
    date: "2025-09-28",
    verified: true,
  },
  {
    id: "r3",
    productId: "5",
    author: "Nomsa D.",
    rating: 5,
    title: "The perfect bob",
    content: "Cut is chef’s kiss. Easy to maintain and looks expensive. Shipping to Joburg was fast.",
    date: "2025-11-01",
    verified: true,
  },
  {
    id: "r4",
    productId: "3",
    author: "Precious S.",
    rating: 4,
    title: "Beautiful waves",
    content: "Deep wave holds up so well. Only reason for 4 stars is I wish it came with more styling tips in the box.",
    date: "2025-10-20",
    verified: true,
  },
  {
    id: "r5",
    productId: "8",
    author: "Zanele N.",
    rating: 5,
    title: "Blends with my natural hair",
    content: "Finally a kinky curly that actually matches my texture. Full lace is a game changer for protective styles.",
    date: "2025-09-15",
    verified: true,
  },
];

// API-ready data layer helpers
export async function getProducts(): Promise<Product[]> {
  // Simulate network delay
  await new Promise((r) => setTimeout(r, 100));
  return products;
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  await new Promise((r) => setTimeout(r, 80));
  return products.find((p) => p.slug === slug);
}

export async function getBestsellers(): Promise<Product[]> {
  await new Promise((r) => setTimeout(r, 80));
  return products.filter((p) => p.isBestseller);
}

export async function getNewArrivals(): Promise<Product[]> {
  await new Promise((r) => setTimeout(r, 80));
  return products.filter((p) => p.isNew);
}

export async function getReviewsByProductId(productId: string): Promise<Review[]> {
  await new Promise((r) => setTimeout(r, 50));
  return reviews.filter((r) => r.productId === productId);
}

export async function getRelatedProducts(product: Product, limit = 4): Promise<Product[]> {
  await new Promise((r) => setTimeout(r, 50));
  return products
    .filter(
      (p) =>
        p.id !== product.id &&
        (p.textures.some((t) => product.textures.includes(t)) ||
          p.category === product.category)
    )
    .slice(0, limit);
}
