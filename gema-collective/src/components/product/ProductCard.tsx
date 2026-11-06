"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types";
import { formatPrice } from "@/lib/utils";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
  className?: string;
}

export function ProductCard({ product, priority = false, className }: ProductCardProps) {
  return (
    <Link
      href={`/product/${product.slug}`}
      className={cn(
        "group flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] rounded-lg",
        className
      )}
    >
      <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-[var(--muted)]">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority={priority}
        />
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.isNew && (
            <span className="bg-[var(--accent)] text-[var(--accent-foreground)] text-[10px] font-medium uppercase tracking-wider px-2 py-1 rounded">
              New
            </span>
          )}
          {product.isBestseller && (
            <span className="bg-[var(--primary)] text-white text-[10px] font-medium uppercase tracking-wider px-2 py-1 rounded">
              Bestseller
            </span>
          )}
        </div>
      </div>

      <div className="mt-3 flex flex-col gap-1">
        <h3 className="font-medium text-sm sm:text-base line-clamp-1 group-hover:text-[var(--primary)] transition-colors">
          {product.name}
        </h3>
        <p className="text-xs text-[var(--muted-foreground)] line-clamp-1">
          {product.textures.join(" · ")} · {product.hairQuality}
        </p>
        <div className="flex items-center justify-between mt-0.5">
          <p className="font-medium text-sm">
            from {formatPrice(product.basePrice)}
          </p>
          <div className="flex items-center gap-1 text-xs text-[var(--muted-foreground)]">
            <span className="text-[var(--accent)]">★</span>
            {product.rating.toFixed(1)}
            <span className="hidden sm:inline">({product.reviewCount})</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
