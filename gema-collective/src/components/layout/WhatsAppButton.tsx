"use client";

import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  // Replace with real WhatsApp business number
  const phone = "27612345678"; // example SA number format
  const message = encodeURIComponent(
    "Hi Gema Collective! I’d love to know more about your wigs."
  );
  const href = `https://wa.me/${phone}?text=${message}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
    >
      <MessageCircle className="h-7 w-7" fill="currentColor" />
    </a>
  );
}
