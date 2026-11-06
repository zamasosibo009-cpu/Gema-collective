import { getBestsellers } from "@/lib/data/products";
import { ProductCard } from "@/components/product/ProductCard";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export async function Bestsellers() {
  const products = await getBestsellers();

  return (
    <section className="py-16 lg:py-24 bg-[var(--muted)]/40">
      <div className="container-luxury">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 lg:mb-14">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl">Bestsellers</h2>
            <p className="mt-2 text-[var(--muted-foreground)]">
              Loved by thousands of women across South Africa
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link href="/shop?sort=bestselling">View all</Link>
          </Button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.slice(0, 4).map((product, i) => (
            <ProductCard
              key={product.id}
              product={product}
              priority={i < 2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
