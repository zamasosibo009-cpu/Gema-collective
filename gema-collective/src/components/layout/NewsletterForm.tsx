"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    // TODO: Wire to newsletter API (e.g. Mailchimp, Klaviyo, or custom)
    await new Promise((r) => setTimeout(r, 800));
    toast.success("Thank you for subscribing!");
    setEmail("");
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <Input
        type="email"
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-white/40"
        aria-label="Email for newsletter"
      />
      <Button
        type="submit"
        variant="secondary"
        size="sm"
        disabled={loading}
        className="w-full"
      >
        {loading ? "Joining..." : "Subscribe"}
      </Button>
    </form>
  );
}
