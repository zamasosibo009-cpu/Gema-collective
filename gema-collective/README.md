# Gema Collective — Premium Wig Storefront

Production-grade, mobile-first e-commerce front-end for **Gema Collective**, a luxury human-hair wig brand.

## Stack

- **Next.js 15** (App Router) + TypeScript
- **Tailwind CSS v4**
- **shadcn/ui-style** components (Radix primitives)
- **Lucide** icons
- **Zustand** (persisted cart)
- **Sonner** toasts

## Features

- Fully responsive, mobile-first layout
- Luxury pastel aesthetic (peach + dusty rose + off-white)
- Editorial typography (Playfair Display + Inter)
- Faceted filters with URL state, active chips, clear-all
- Product detail with live variant pricing/stock, image gallery, size guide, care accordion, reviews, related products
- Sticky mobile add-to-cart bar
- Cart drawer with quantity controls
- Checkout UI with PayFast, Yoco, Ozow, PayPal & card stubs + TODO markers
- ZAR currency formatting
- SEO meta + Product JSON-LD
- WhatsApp chat button, newsletter signup, cookie banner
- Accessible (focus states, ARIA labels)
- Mock data layer ready to swap for a real API

## Getting Started

```bash
cd gema-collective
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/                    # App Router pages
│   ├── page.tsx            # Home
│   ├── shop/               # Collection + filters
│   ├── product/[slug]/    # Product detail
│   ├── checkout/           # Checkout
│   ├── about/
│   ├── contact/
│   ├── shipping-returns/
│   └── not-found.tsx
├── components/
│   ├── ui/                 # Button, Input, Label…
│   ├── layout/             # Header, Footer, WhatsApp, Cookie
│   ├── home/               # Hero, Categories, Bestsellers…
│   ├── product/            # ProductCard, ProductDetail, ShopContent
│   └── cart/               # CartDrawer
├── lib/
│   ├── data/products.ts    # Mock catalogue + API-ready helpers
│   └── utils.ts
├── store/cart.ts           # Zustand cart
└── types/index.ts
```

## Colour Palette

| Token        | Hex       | Role                |
|--------------|-----------|---------------------|
| Background   | `#FFF9F5` | Warm off-white      |
| Primary      | `#C48B8B` | Dusty rose          |
| Secondary    | `#F5C6AA` | Soft peach          |
| Accent       | `#E8A87C` | Deeper peach        |
| Muted        | `#F5E6E0` | Soft neutral        |
| Foreground   | `#2C1E1F` | Warm deep brown     |

## Payments (stubs)

Checkout includes payment method selection for:

- **PayFast** — recommended for SA (cards, EFT, SnapScan…)
- **Yoco**
- **Ozow** (instant EFT)
- **PayPal**
- Generic card

Each has a clear `// TODO` where you should wire the hosted redirect or SDK with your API keys.

## Next Steps / Backend

The data layer in `src/lib/data/products.ts` already uses async functions (`getProducts`, `getProductBySlug`, etc.). Replace the mock implementations with real API calls when your backend is ready.

Cart is client-side only (Zustand + localStorage). Persist orders on the server after successful payment.
