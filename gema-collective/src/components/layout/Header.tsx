"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ShoppingBag, Menu, X, Search, Heart } from "lucide-react";
import { useCartStore } from "@/store/cart";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/shop", label: "Shop" },
  { href: "/shop?category=lace-front", label: "Lace Fronts" },
  { href: "/shop?category=full-lace", label: "Full Lace" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const totalItems = useCartStore((s) => s.totalItems());
  const openCart = useCartStore((s) => s.openCart);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[var(--border)]"
          : "bg-[var(--background)]"
      )}
    >
      <div className="container-luxury">
        <div className="flex h-[var(--header-height)] items-center justify-between gap-4">
          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 -ml-2 text-[var(--foreground)]"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>

          {/* Logo */}
          <Link
            href="/"
            className="font-serif text-2xl tracking-tight text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
          >
            Gema<span className="font-light"> Collective</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-px after:w-0 after:bg-[var(--primary)] after:transition-all hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-1 sm:gap-2">
            <Button variant="ghost" size="icon" aria-label="Search" className="hidden sm:inline-flex">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Wishlist" className="hidden sm:inline-flex">
              <Heart className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              aria-label={`Cart with ${totalItems} items`}
              onClick={openCart}
              className="relative"
            >
              <ShoppingBag className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-[var(--primary)] text-[10px] font-medium text-white">
                  {totalItems > 9 ? "9+" : totalItems}
                </span>
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute left-0 top-0 bottom-0 w-[min(320px,85vw)] bg-white shadow-xl flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-[var(--border)]">
              <span className="font-serif text-xl">Menu</span>
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="p-2"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex flex-col p-4 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-3 text-base font-medium text-[var(--foreground)] hover:bg-[var(--muted)] rounded-md transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="my-3 border-t border-[var(--border)]" />
              <Link
                href="/shipping-returns"
                onClick={() => setMobileOpen(false)}
                className="px-3 py-3 text-sm text-[var(--muted-foreground)]"
              >
                Shipping & Returns
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
