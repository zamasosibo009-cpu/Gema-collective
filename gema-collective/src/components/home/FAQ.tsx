"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "Are your wigs made from real human hair?",
    a: "Yes. The majority of our collection uses 100% virgin or Remy human hair. We clearly label each product so you know exactly what you’re getting. Synthetic options are also available for budget-friendly everyday wear.",
  },
  {
    q: "How do I choose the right density and length?",
    a: "Density refers to how full the wig looks — 150% is a natural everyday look, while 180–200%+ is more glamorous and voluminous. Length is measured from the crown. We recommend starting with 16–20″ for versatility. Our size guide and WhatsApp team are happy to help.",
  },
  {
    q: "Do you ship across South Africa?",
    a: "Yes. We deliver nationwide via reliable couriers. Orders placed before 14:00 on business days usually dispatch the same day. Standard delivery takes 2–5 business days depending on your location. Express options are available at checkout.",
  },
  {
    q: "What is your returns policy?",
    a: "We offer a 7-day returns window for unused, unaltered units in original packaging. Because of the hygienic nature of hair products, worn or installed wigs cannot be returned. Please see our Shipping & Returns page for full details.",
  },
  {
    q: "Can I colour or style the wig?",
    a: "Virgin and Remy human hair can be coloured, curled, and straightened just like your own hair. Always use heat protectant and professional-grade products. We recommend a professional colourist for major colour changes.",
  },
  {
    q: "How should I care for my wig?",
    a: "Wash gently with sulfate-free shampoo in lukewarm water, condition thoroughly, and air dry when possible. Store on a wig stand. Sleep on a silk pillowcase or wear a satin bonnet. Full care instructions are included with every order and on each product page.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-16 lg:py-24">
      <div className="container-luxury max-w-3xl">
        <div className="text-center mb-10 lg:mb-14">
          <h2 className="font-serif text-3xl sm:text-4xl">Frequently asked questions</h2>
          <p className="mt-3 text-[var(--muted-foreground)]">
            Everything you need to know about ordering and wearing Gema
          </p>
        </div>

        <Accordion.Root type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <Accordion.Item
              key={i}
              value={`item-${i}`}
              className="border border-[var(--border)] rounded-xl bg-white overflow-hidden"
            >
              <Accordion.Header>
                <Accordion.Trigger className="flex w-full items-center justify-between px-5 py-4 text-left text-sm sm:text-base font-medium hover:bg-[var(--muted)]/50 transition-colors group">
                  {faq.q}
                  <ChevronDown className="h-4 w-4 shrink-0 text-[var(--muted-foreground)] transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                <div className="px-5 pb-4 text-sm text-[var(--muted-foreground)] leading-relaxed">
                  {faq.a}
                </div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
