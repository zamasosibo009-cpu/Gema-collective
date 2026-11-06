"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCartStore } from "@/store/cart";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { formatPrice } from "@/lib/utils";
import { cn } from "@/lib/utils";
import { ShieldCheck, RotateCcw, Lock } from "lucide-react";
import { toast } from "sonner";

const paymentMethods = [
  {
    id: "payfast",
    name: "PayFast",
    description: "Cards, EFT, SnapScan & more",
    // TODO: Replace with real PayFast hosted checkout redirect
    // Docs: https://developers.payfast.co.za/
  },
  {
    id: "yoco",
    name: "Yoco",
    description: "Card payments",
    // TODO: Integrate Yoco Checkout or Payment Links
  },
  {
    id: "ozow",
    name: "Ozow",
    description: "Instant EFT",
    // TODO: Ozow hosted payment page
  },
  {
    id: "paypal",
    name: "PayPal",
    description: "PayPal balance or linked cards",
    // TODO: PayPal JS SDK or hosted buttons
  },
  {
    id: "card",
    name: "Credit / Debit Card",
    description: "Visa, Mastercard, Amex",
    // TODO: Stripe / Paystack / custom card form
  },
];

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCartStore();
  const [method, setMethod] = useState("payfast");
  const [loading, setLoading] = useState(false);

  const shipping = items.length > 0 ? 99 : 0; // flat rate example
  const total = subtotal() + shipping;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // TODO: Create order on your backend, then redirect to selected payment provider
    // Example for PayFast:
    // const form = document.createElement("form");
    // form.method = "POST";
    // form.action = "https://www.payfast.co.za/eng/process";
    // ... append merchant_id, amount, item_name, return_url, etc.
    // form.submit();

    await new Promise((r) => setTimeout(r, 1500));
    toast.success("Order placed! (Demo mode — no real payment processed)");
    clearCart();
    setLoading(false);
  };

  if (items.length === 0) {
    return (
      <div className="container-luxury py-20 text-center">
        <h1 className="font-serif text-3xl mb-4">Your bag is empty</h1>
        <p className="text-[var(--muted-foreground)] mb-8">
          Add some beautiful pieces before checking out.
        </p>
        <Button asChild>
          <Link href="/shop">Continue Shopping</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container-luxury py-10 lg:py-14">
      <h1 className="font-serif text-3xl sm:text-4xl mb-8">Checkout</h1>

      <form onSubmit={handleSubmit} className="grid lg:grid-cols-5 gap-10 lg:gap-14">
        {/* Left - Forms */}
        <div className="lg:col-span-3 space-y-8">
          {/* Contact */}
          <section>
            <h2 className="font-serif text-xl mb-4">Contact</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required placeholder="you@example.com" className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="firstName">First name</Label>
                <Input id="firstName" required className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="lastName">Last name</Label>
                <Input id="lastName" required className="mt-1.5" />
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" required placeholder="+27" className="mt-1.5" />
              </div>
            </div>
          </section>

          {/* Shipping */}
          <section>
            <h2 className="font-serif text-xl mb-4">Shipping address</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <Label htmlFor="address">Street address</Label>
                <Input id="address" required className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="city">City</Label>
                <Input id="city" required className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="province">Province</Label>
                <Input id="province" required className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="postal">Postal code</Label>
                <Input id="postal" required className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="country">Country</Label>
                <Input id="country" defaultValue="South Africa" required className="mt-1.5" />
              </div>
            </div>
          </section>

          {/* Payment method */}
          <section>
            <h2 className="font-serif text-xl mb-4">Payment method</h2>
            <div className="space-y-3">
              {paymentMethods.map((pm) => (
                <label
                  key={pm.id}
                  className={cn(
                    "flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-colors",
                    method === pm.id
                      ? "border-[var(--primary)] bg-[var(--muted)]/50"
                      : "border-[var(--border)] hover:border-[var(--primary)]/50"
                  )}
                >
                  <input
                    type="radio"
                    name="payment"
                    value={pm.id}
                    checked={method === pm.id}
                    onChange={() => setMethod(pm.id)}
                    className="h-4 w-4 text-[var(--primary)] focus:ring-[var(--primary)]"
                  />
                  <div className="flex-1">
                    <p className="font-medium text-sm">{pm.name}</p>
                    <p className="text-xs text-[var(--muted-foreground)]">
                      {pm.description}
                    </p>
                  </div>
                  {/* Brand colour indicators */}
                  {pm.id === "payfast" && (
                    <span className="text-xs font-medium text-[#00AEEF]">PayFast</span>
                  )}
                  {pm.id === "yoco" && (
                    <span className="text-xs font-medium text-[#1A1A1A]">Yoco</span>
                  )}
                  {pm.id === "ozow" && (
                    <span className="text-xs font-medium text-[#00C853]">Ozow</span>
                  )}
                  {pm.id === "paypal" && (
                    <span className="text-xs font-medium text-[#003087]">PayPal</span>
                  )}
                </label>
              ))}
            </div>
            <p className="mt-3 text-xs text-[var(--muted-foreground)]">
              {/* TODO markers for integrators */}
              Payment providers are currently stubbed. Wire your API keys and
              redirect/hosted-checkout logic in the handleSubmit function.
            </p>
          </section>
        </div>

        {/* Right - Summary */}
        <div className="lg:col-span-2">
          <div className="sticky top-28 bg-[var(--muted)]/40 rounded-xl p-6 border border-[var(--border)]">
            <h2 className="font-serif text-xl mb-5">Order summary</h2>

            <ul className="space-y-4 mb-6 max-h-64 overflow-y-auto">
              {items.map((item) => (
                <li key={item.variantId} className="flex gap-3">
                  <div className="relative h-16 w-14 shrink-0 rounded-md overflow-hidden bg-white">
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="56px"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium line-clamp-1">{item.name}</p>
                    <p className="text-xs text-[var(--muted-foreground)]">
                      {item.length}&quot; · {item.density} · Qty {item.quantity}
                    </p>
                  </div>
                  <p className="text-sm font-medium">
                    {formatPrice(item.price * item.quantity)}
                  </p>
                </li>
              ))}
            </ul>

            <div className="space-y-2 text-sm border-t border-[var(--border)] pt-4">
              <div className="flex justify-between">
                <span className="text-[var(--muted-foreground)]">Subtotal</span>
                <span>{formatPrice(subtotal())}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--muted-foreground)]">Shipping</span>
                <span>{formatPrice(shipping)}</span>
              </div>
              <div className="flex justify-between text-base font-medium pt-2">
                <span>Total</span>
                <span>{formatPrice(total)}</span>
              </div>
              <p className="text-xs text-[var(--muted-foreground)]">ZAR · incl. VAT where applicable</p>
            </div>

            <Button
              type="submit"
              variant="luxury"
              size="xl"
              className="w-full mt-6"
              disabled={loading}
            >
              {loading ? "Processing..." : `Pay ${formatPrice(total)}`}
            </Button>

            {/* Trust badges */}
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              <div className="flex flex-col items-center gap-1">
                <Lock className="h-4 w-4 text-[var(--primary)]" />
                <span className="text-[10px] text-[var(--muted-foreground)]">
                  Secure checkout
                </span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <ShieldCheck className="h-4 w-4 text-[var(--primary)]" />
                <span className="text-[10px] text-[var(--muted-foreground)]">
                  Buyer protection
                </span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <RotateCcw className="h-4 w-4 text-[var(--primary)]" />
                <span className="text-[10px] text-[var(--muted-foreground)]">
                  7-day returns
                </span>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
