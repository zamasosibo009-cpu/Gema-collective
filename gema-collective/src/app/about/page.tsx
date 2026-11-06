import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The story behind Gema Collective — premium human hair wigs crafted with care for women across South Africa.",
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[320px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1600&q=80"
          alt="Gema Collective"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="font-serif text-4xl sm:text-5xl text-white text-center px-4">
            Our Story
          </h1>
        </div>
      </section>

      <div className="container-luxury py-16 lg:py-24 max-w-3xl">
        <div className="prose prose-neutral mx-auto space-y-6 text-[var(--muted-foreground)] leading-relaxed">
          <p className="text-lg text-[var(--foreground)]">
            Gema Collective was born from a simple belief: every woman deserves
            hair that makes her feel confident, beautiful, and completely
            herself.
          </p>
          <p>
            Founded in South Africa, we set out to create a wig brand that
            prioritises quality, transparency, and real-world wearability. No
            exaggerated claims — just exceptional virgin and Remy human hair,
            thoughtfully constructed lace systems, and styles that move and
            feel like your own.
          </p>
          <p>
            We work closely with trusted suppliers and artisans to source the
            finest hair and construct each unit with care. From pre-plucked
            hairlines to bleached knots and adjustable caps, the details matter
            to us because they matter to you.
          </p>
          <p>
            Whether you’re looking for a protective style, a confidence boost,
            or a completely new look, we’re here to help you find the piece
            that feels right. Our team is always a WhatsApp message away.
          </p>
          <p className="font-medium text-[var(--foreground)]">
            Welcome to Gema Collective. Beauty that feels like you.
          </p>
        </div>
      </div>
    </div>
  );
}
