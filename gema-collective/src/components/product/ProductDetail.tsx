"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product, Review, ProductVariant } from "@/types";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/utils";
import { useCartStore } from "@/store/cart";
import { ProductCard } from "./ProductCard";
import { ChevronLeft, ChevronRight, Minus, Plus, Check } from "lucide-react";
import * as Accordion from "@radix-ui/react-accordion";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

interface ProductDetailProps {
  product: Product;
  related: Product[];
  reviews: Review[];
}

export function ProductDetail({ product, related, reviews }: ProductDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(
    product.variants[0]
  );
  const [quantity, setQuantity] = useState(1);
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);
  const addItem = useCartStore((s) => s.addItem);

  const uniqueLengths = useMemo(
    () => [...new Set(product.variants.map((v) => v.length))].sort((a, b) => a - b),
    [product.variants]
  );
  const uniqueDensities = useMemo(
    () => [...new Set(product.variants.map((v) => v.density))],
    [product.variants]
  );
  const uniqueLace = useMemo(
    () => [...new Set(product.variants.map((v) => v.laceType))],
    [product.variants]
  );

  const findVariant = (length: number, density: string, lace: string) => {
    return (
      product.variants.find(
        (v) =>
          v.length === length &&
          v.density === density &&
          v.laceType === lace
      ) ||
      product.variants.find(
        (v) => v.length === length && v.density === density
      ) ||
      product.variants.find((v) => v.length === length) ||
      product.variants[0]
    );
  };

  const handleLengthChange = (length: number) => {
    const next = findVariant(length, selectedVariant.density, selectedVariant.laceType);
    setSelectedVariant(next);
  };
  const handleDensityChange = (density: string) => {
    const next = findVariant(selectedVariant.length, density, selectedVariant.laceType);
    setSelectedVariant(next);
  };
  const handleLaceChange = (lace: string) => {
    const next = findVariant(selectedVariant.length, selectedVariant.density, lace);
    setSelectedVariant(next);
  };

  const handleAddToCart = () => {
    if (selectedVariant.stock < 1) {
      toast.error("This variant is out of stock");
      return;
    }
    addItem({
      productId: product.id,
      variantId: selectedVariant.id,
      quantity,
      name: product.name,
      image: product.images[0],
      length: selectedVariant.length,
      density: selectedVariant.density,
      laceType: selectedVariant.laceType,
      price: selectedVariant.price,
      slug: product.slug,
    });
    toast.success("Added to bag");
  };

  return (
    <div className="pb-28 lg:pb-0">
      <div className="container-luxury py-8 lg:py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-[var(--muted-foreground)] mb-6">
          <Link href="/" className="hover:text-[var(--foreground)]">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/shop" className="hover:text-[var(--foreground)]">
            Shop
          </Link>
          <span className="mx-2">/</span>
          <span className="text-[var(--foreground)]">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-14">
          {/* Gallery */}
          <div className="space-y-3">
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-[var(--muted)]">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={() =>
                      setSelectedImage((i) =>
                        i === 0 ? product.images.length - 1 : i - 1
                      )
                    }
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 shadow hover:bg-white"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() =>
                      setSelectedImage((i) =>
                        i === product.images.length - 1 ? 0 : i + 1
                      )
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 shadow hover:bg-white"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto no-scrollbar">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={cn(
                      "relative h-20 w-16 shrink-0 overflow-hidden rounded-md border-2 transition-colors",
                      selectedImage === i
                        ? "border-[var(--primary)]"
                        : "border-transparent"
                    )}
                  >
                    <Image
                      src={img}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <div className="flex items-start justify-between gap-4">
              <div>
                {product.isNew && (
                  <span className="inline-block text-[10px] uppercase tracking-wider bg-[var(--accent)] text-[var(--accent-foreground)] px-2 py-0.5 rounded mb-2">
                    New
                  </span>
                )}
                <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl">
                  {product.name}
                </h1>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-3">
              <div className="flex items-center gap-1 text-sm">
                <span className="text-[var(--accent)]">★</span>
                <span className="font-medium">{product.rating.toFixed(1)}</span>
                <span className="text-[var(--muted-foreground)]">
                  ({product.reviewCount} reviews)
                </span>
              </div>
            </div>

            <p className="mt-4 text-2xl font-medium">
              {formatPrice(selectedVariant.price)}
            </p>
            <p className="text-sm text-[var(--muted-foreground)] mt-1">
              {selectedVariant.stock > 0
                ? `${selectedVariant.stock} in stock`
                : "Out of stock"}
            </p>

            <p className="mt-5 text-[var(--muted-foreground)] leading-relaxed">
              {product.shortDescription}
            </p>

            {/* Variant selectors */}
            <div className="mt-8 space-y-6">
              {/* Length */}
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <label className="text-sm font-medium">Length</label>
                  <button
                    onClick={() => setSizeGuideOpen(true)}
                    className="text-xs text-[var(--primary)] underline"
                  >
                    Size guide
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {uniqueLengths.map((len) => (
                    <button
                      key={len}
                      onClick={() => handleLengthChange(len)}
                      className={cn(
                        "h-10 min-w-[3rem] px-3 rounded-md border text-sm font-medium transition-colors",
                        selectedVariant.length === len
                          ? "border-[var(--primary)] bg-[var(--primary)] text-white"
                          : "border-[var(--border)] hover:border-[var(--primary)]"
                      )}
                    >
                      {len}&quot;
                    </button>
                  ))}
                </div>
              </div>

              {/* Density */}
              <div>
                <label className="text-sm font-medium mb-2.5 block">Density</label>
                <div className="flex flex-wrap gap-2">
                  {uniqueDensities.map((d) => (
                    <button
                      key={d}
                      onClick={() => handleDensityChange(d)}
                      className={cn(
                        "h-10 px-4 rounded-md border text-sm font-medium transition-colors",
                        selectedVariant.density === d
                          ? "border-[var(--primary)] bg-[var(--primary)] text-white"
                          : "border-[var(--border)] hover:border-[var(--primary)]"
                      )}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>

              {/* Lace Type */}
              <div>
                <label className="text-sm font-medium mb-2.5 block">Lace Type</label>
                <div className="flex flex-wrap gap-2">
                  {uniqueLace.map((l) => (
                    <button
                      key={l}
                      onClick={() => handleLaceChange(l)}
                      className={cn(
                        "h-10 px-4 rounded-md border text-sm font-medium transition-colors",
                        selectedVariant.laceType === l
                          ? "border-[var(--primary)] bg-[var(--primary)] text-white"
                          : "border-[var(--border)] hover:border-[var(--primary)]"
                      )}
                    >
                      {l}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <label className="text-sm font-medium mb-2.5 block">Quantity</label>
                <div className="inline-flex items-center border border-[var(--border)] rounded-md">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="p-2.5 hover:bg-[var(--muted)]"
                    aria-label="Decrease"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-12 text-center text-sm font-medium">
                    {quantity}
                  </span>
                  <button
                    onClick={() =>
                      setQuantity((q) =>
                        Math.min(selectedVariant.stock || 1, q + 1)
                      )
                    }
                    className="p-2.5 hover:bg-[var(--muted)]"
                    aria-label="Increase"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Desktop Add to Cart */}
            <div className="hidden lg:flex flex-col gap-3 mt-8">
              <Button
                variant="luxury"
                size="xl"
                className="w-full"
                onClick={handleAddToCart}
                disabled={selectedVariant.stock < 1}
              >
                {selectedVariant.stock < 1
                  ? "Out of Stock"
                  : `Add to Bag — ${formatPrice(selectedVariant.price * quantity)}`}
              </Button>
            </div>

            {/* Features */}
            <ul className="mt-8 space-y-2">
              {product.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 text-[var(--primary)] shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>

            {/* Accordions */}
            <Accordion.Root type="multiple" className="mt-10 border-t border-[var(--border)]">
              <Accordion.Item value="description" className="border-b border-[var(--border)]">
                <Accordion.Header>
                  <Accordion.Trigger className="flex w-full items-center justify-between py-4 text-sm font-medium group">
                    Description
                    <ChevronRight className="h-4 w-4 transition-transform group-data-[state=open]:rotate-90" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="pb-4 text-sm text-[var(--muted-foreground)] leading-relaxed">
                  {product.description}
                </Accordion.Content>
              </Accordion.Item>
              <Accordion.Item value="care" className="border-b border-[var(--border)]">
                <Accordion.Header>
                  <Accordion.Trigger className="flex w-full items-center justify-between py-4 text-sm font-medium group">
                    Care Instructions
                    <ChevronRight className="h-4 w-4 transition-transform group-data-[state=open]:rotate-90" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="pb-4">
                  <ul className="space-y-2 text-sm text-[var(--muted-foreground)]">
                    {product.careInstructions.map((c) => (
                      <li key={c} className="flex gap-2">
                        <span className="text-[var(--primary)]">•</span>
                        {c}
                      </li>
                    ))}
                  </ul>
                </Accordion.Content>
              </Accordion.Item>
              <Accordion.Item value="reviews" className="border-b border-[var(--border)]">
                <Accordion.Header>
                  <Accordion.Trigger className="flex w-full items-center justify-between py-4 text-sm font-medium group">
                    Reviews ({reviews.length})
                    <ChevronRight className="h-4 w-4 transition-transform group-data-[state=open]:rotate-90" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="pb-4 space-y-4">
                  {reviews.length === 0 ? (
                    <p className="text-sm text-[var(--muted-foreground)]">
                      No reviews yet.
                    </p>
                  ) : (
                    reviews.map((r) => (
                      <div key={r.id} className="border-b border-[var(--border)] last:border-0 pb-4 last:pb-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[var(--accent)] text-sm">
                            {"★".repeat(r.rating)}
                          </span>
                          <span className="text-sm font-medium">{r.author}</span>
                          {r.verified && (
                            <span className="text-[10px] text-[var(--primary)]">
                              Verified
                            </span>
                          )}
                        </div>
                        <p className="text-sm font-medium">{r.title}</p>
                        <p className="text-sm text-[var(--muted-foreground)] mt-1">
                          {r.content}
                        </p>
                      </div>
                    ))
                  )}
                </Accordion.Content>
              </Accordion.Item>
            </Accordion.Root>
          </div>
        </div>

        {/* You may also like */}
        {related.length > 0 && (
          <section className="mt-20 lg:mt-28">
            <h2 className="font-serif text-2xl sm:text-3xl mb-8">
              You may also like
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Sticky mobile ATC bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white border-t border-[var(--border)] p-4 shadow-lg">
        <div className="flex items-center gap-3">
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">{product.name}</p>
            <p className="text-sm text-[var(--muted-foreground)]">
              {formatPrice(selectedVariant.price)}
            </p>
          </div>
          <Button
            variant="luxury"
            size="lg"
            onClick={handleAddToCart}
            disabled={selectedVariant.stock < 1}
          >
            Add to Bag
          </Button>
        </div>
      </div>

      {/* Size Guide Modal */}
      {sizeGuideOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setSizeGuideOpen(false)}
          />
          <div className="relative bg-white rounded-xl max-w-md w-full p-6 shadow-xl max-h-[90vh] overflow-y-auto">
            <h3 className="font-serif text-xl mb-4">Size Guide</h3>
            <div className="space-y-4 text-sm text-[var(--muted-foreground)]">
              <p>
                <strong className="text-[var(--foreground)]">Length:</strong> Measured
                from the crown (top of head) to the ends. Common choices: 14–16″
                (shoulder), 18–20″ (mid-back), 22–26″ (long).
              </p>
              <p>
                <strong className="text-[var(--foreground)]">Density:</strong> 130–150%
                looks natural for everyday. 180%+ is fuller and more glamorous.
              </p>
              <p>
                <strong className="text-[var(--foreground)]">Cap Size:</strong> Most
                of our units are medium/adjustable and fit head circumferences of
                54–58 cm. Small and Large options are available on select styles.
              </p>
              <p>
                Still unsure? Message us on WhatsApp — we’re happy to help you
                choose.
              </p>
            </div>
            <Button
              className="w-full mt-6"
              onClick={() => setSizeGuideOpen(false)}
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
