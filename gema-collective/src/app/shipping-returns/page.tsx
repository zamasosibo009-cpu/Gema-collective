import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shipping & Returns",
  description:
    "Delivery times, shipping rates, and our returns policy for Gema Collective wigs in South Africa.",
};

export default function ShippingReturnsPage() {
  return (
    <div className="container-luxury py-12 lg:py-20 max-w-3xl">
      <h1 className="font-serif text-3xl sm:text-4xl mb-8">
        Shipping & Returns
      </h1>

      <div className="space-y-10 text-[var(--muted-foreground)] leading-relaxed">
        <section>
          <h2 className="font-serif text-xl text-[var(--foreground)] mb-3">
            Shipping across South Africa
          </h2>
          <p>
            We deliver to all major centres and most towns via trusted courier
            partners. Orders placed before 14:00 on business days are typically
            dispatched the same day.
          </p>
          <ul className="mt-4 space-y-2 list-disc pl-5">
            <li>
              <strong className="text-[var(--foreground)]">Standard:</strong>{" "}
              2–5 business days · from R99
            </li>
            <li>
              <strong className="text-[var(--foreground)]">Express:</strong>{" "}
              1–2 business days · available at checkout for major metros
            </li>
          </ul>
          <p className="mt-4">
            You will receive a tracking number by SMS and email once your order
            ships. Remote areas may take slightly longer.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-[var(--foreground)] mb-3">
            Returns policy
          </h2>
          <p>
            We want you to love your Gema piece. If something isn’t right, you
            may return unused, unaltered units within <strong className="text-[var(--foreground)]">7 days</strong> of delivery.
          </p>
          <ul className="mt-4 space-y-2 list-disc pl-5">
            <li>Product must be in original packaging with all tags attached</li>
            <li>Hair must not have been washed, cut, coloured, or installed</li>
            <li>Returns are subject to inspection before a refund is issued</li>
            <li>
              Refunds are processed to the original payment method within 5–10
              business days of approval
            </li>
          </ul>
          <p className="mt-4">
            Because of the personal and hygienic nature of hair products, we
            cannot accept returns on worn or installed wigs. Custom-coloured
            units are final sale unless defective.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-[var(--foreground)] mb-3">
            Defects & quality issues
          </h2>
          <p>
            If your unit arrives damaged or with a manufacturing defect, please
            contact us within 48 hours of delivery with photos. We will arrange
            a replacement or full refund at no extra cost to you.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-[var(--foreground)] mb-3">
            How to start a return
          </h2>
          <p>
            Message us on WhatsApp or email{" "}
            <a
              href="mailto:hello@gemacollective.co.za"
              className="text-[var(--primary)] hover:underline"
            >
              hello@gemacollective.co.za
            </a>{" "}
            with your order number and reason for return. We’ll guide you
            through the process and provide a returns address.
          </p>
        </section>
      </div>
    </div>
  );
}
