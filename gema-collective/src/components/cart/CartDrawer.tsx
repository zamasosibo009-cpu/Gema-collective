"use client";

import Image from "next/image";
import Link from "next/link";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { useCartStore } from "@/store/cart";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/utils";
import { cn } from "@/lib/utils";

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal } =
    useCartStore();

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={closeCart}
        aria-hidden={!isOpen}
      />

      {/* Drawer */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
        className={cn(
          "fixed top-0 right-0 z-50 h-full w-full max-w-md bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--border)]">
          <h2 className="font-serif text-xl flex items-center gap-2">
            <ShoppingBag className="h-5 w-5" />
            Your Bag
            {items.length > 0 && (
              <span className="text-sm font-sans text-[var(--muted-foreground)]">
                ({items.reduce((s, i) => s + i.quantity, 0)})
              </span>
            )}
          </h2>
          <button
            onClick={closeCart}
            aria-label="Close cart"
            className="p-2 hover:bg-[var(--muted)] rounded-full transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center gap-4 py-12">
              <ShoppingBag className="h-12 w-12 text-[var(--muted-foreground)] opacity-40" />
              <p className="text-[var(--muted-foreground)]">Your bag is empty</p>
              <Button variant="outline" onClick={closeCart} asChild>
                <Link href="/shop">Continue Shopping</Link>
              </Button>
            </div>
          ) : (
            <ul className="space-y-5">
              {items.map((item) => (
                <li key={item.variantId} className="flex gap-4">
                  <div className="relative h-24 w-20 shrink-0 overflow-hidden rounded-md bg-[var(--muted)]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <Link
                      href={`/product/${item.slug}`}
                      onClick={closeCart}
                      className="font-medium text-sm hover:text-[var(--primary)] line-clamp-2"
                    >
                      {item.name}
                    </Link>
                    <p className="text-xs text-[var(--muted-foreground)] mt-0.5">
                      {item.length}&quot; · {item.density} · {item.laceType}
                    </p>
                    <p className="text-sm font-medium mt-1">
                      {formatPrice(item.price)}
                    </p>
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center border border-[var(--border)] rounded-md">
                        <button
                          onClick={() =>
                            updateQuantity(item.variantId, item.quantity - 1)
                          }
                          className="p-1.5 hover:bg-[var(--muted)]"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="w-8 text-center text-sm">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.variantId, item.quantity + 1)
                          }
                          className="p-1.5 hover:bg-[var(--muted)]"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.variantId)}
                        className="text-xs text-[var(--muted-foreground)] hover:text-[var(--destructive)] underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-[var(--border)] p-5 space-y-4">
            <div className="flex justify-between text-sm">
              <span className="text-[var(--muted-foreground)]">Subtotal</span>
              <span className="font-medium">{formatPrice(subtotal())}</span>
            </div>
            <p className="text-xs text-[var(--muted-foreground)]">
              Shipping & taxes calculated at checkout
            </p>
            <Button
              variant="luxury"
              size="lg"
              className="w-full"
              asChild
              onClick={closeCart}
            >
              <Link href="/checkout">Checkout</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full"
              onClick={closeCart}
              asChild
            >
              <Link href="/shop">Continue Shopping</Link>
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
