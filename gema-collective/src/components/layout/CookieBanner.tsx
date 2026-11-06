"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("gema-cookie-consent");
    if (!consent) {
      // Small delay so it doesn't flash on load
      const t = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(t);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("gema-cookie-consent", "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6"
    >
      <div className="container-luxury">
        <div className="mx-auto max-w-3xl rounded-xl border border-[var(--border)] bg-white p-5 shadow-xl flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <p className="text-sm text-[var(--muted-foreground)] flex-1">
            We use cookies to improve your experience and analyse site traffic.
            By continuing you agree to our{" "}
            <Link href="#" className="underline hover:text-[var(--foreground)]">
              Privacy Policy
            </Link>
            .
          </p>
          <div className="flex gap-2 shrink-0">
            <Button variant="outline" size="sm" onClick={accept}>
              Decline
            </Button>
            <Button size="sm" onClick={accept}>
              Accept
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
