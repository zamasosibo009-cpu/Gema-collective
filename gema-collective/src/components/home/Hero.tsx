import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[70vh] lg:min-h-[80vh] py-12 lg:py-0">
          {/* Text */}
          <div className="order-2 lg:order-1 flex flex-col items-start gap-6 max-w-xl">
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--primary)] font-medium">
              Premium Human Hair
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.1] text-balance">
              Beauty that feels like you
            </h1>
            <p className="text-[var(--muted-foreground)] text-base sm:text-lg leading-relaxed">
              Discover luxury wigs crafted from the finest virgin human hair.
              Natural movement, undetectable lace, and styles that celebrate
              every version of you.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button variant="luxury" size="xl" asChild>
                <Link href="/shop">Shop the Collection</Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link href="/about">Our Story</Link>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative aspect-[4/5] lg:aspect-auto lg:h-[75vh] rounded-2xl overflow-hidden bg-[var(--muted)]">
            <Image
              src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=85"
              alt="Model wearing a premium Gema Collective wig"
              fill
              priority
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
