"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Mail, MessageCircle, MapPin } from "lucide-react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: Wire to your contact form backend / email service
    await new Promise((r) => setTimeout(r, 1000));
    toast.success("Message sent! We’ll get back to you shortly.");
    setLoading(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="container-luxury py-12 lg:py-20">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h1 className="font-serif text-3xl sm:text-4xl">Get in touch</h1>
        <p className="mt-3 text-[var(--muted-foreground)]">
          Questions about fit, colour, or care? We’re here to help.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
        {/* Info */}
        <div className="lg:col-span-2 space-y-8">
          <div className="flex gap-4">
            <div className="h-10 w-10 rounded-full bg-[var(--muted)] flex items-center justify-center shrink-0">
              <MessageCircle className="h-5 w-5 text-[var(--primary)]" />
            </div>
            <div>
              <h3 className="font-medium">WhatsApp</h3>
              <p className="text-sm text-[var(--muted-foreground)] mt-1">
                Fastest response — usually within a few hours during business
                days.
              </p>
              <a
                href="https://wa.me/27612345678"
                className="text-sm text-[var(--primary)] hover:underline mt-1 inline-block"
              >
                Chat with us
              </a>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="h-10 w-10 rounded-full bg-[var(--muted)] flex items-center justify-center shrink-0">
              <Mail className="h-5 w-5 text-[var(--primary)]" />
            </div>
            <div>
              <h3 className="font-medium">Email</h3>
              <p className="text-sm text-[var(--muted-foreground)] mt-1">
                For order enquiries and detailed questions.
              </p>
              <a
                href="mailto:hello@gemacollective.co.za"
                className="text-sm text-[var(--primary)] hover:underline mt-1 inline-block"
              >
                hello@gemacollective.co.za
              </a>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="h-10 w-10 rounded-full bg-[var(--muted)] flex items-center justify-center shrink-0">
              <MapPin className="h-5 w-5 text-[var(--primary)]" />
            </div>
            <div>
              <h3 className="font-medium">Based in South Africa</h3>
              <p className="text-sm text-[var(--muted-foreground)] mt-1">
                We ship nationwide. Showroom visits by appointment only.
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" required className="mt-1.5" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required className="mt-1.5" />
            </div>
          </div>
          <div>
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" required className="mt-1.5" />
          </div>
          <div>
            <Label htmlFor="message">Message</Label>
            <textarea
              id="message"
              required
              rows={5}
              className="mt-1.5 flex w-full rounded-md border border-[var(--border)] bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]"
            />
          </div>
          <Button type="submit" variant="luxury" size="lg" disabled={loading}>
            {loading ? "Sending..." : "Send message"}
          </Button>
        </form>
      </div>
    </div>
  );
}
