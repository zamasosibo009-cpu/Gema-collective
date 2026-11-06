import { Suspense } from "react";
import { getProducts } from "@/lib/data/products";
import { ShopContent } from "@/components/product/ShopContent";

export const metadata = {
  title: "Shop All Wigs",
  description:
    "Browse our full collection of premium human hair wigs. Filter by texture, length, density, lace type and more.",
};

export default async function ShopPage() {
  const products = await getProducts();

  return (
    <div className="container-luxury py-10 lg:py-14">
      <div className="mb-8 lg:mb-12">
        <h1 className="font-serif text-3xl sm:text-4xl">Shop All Wigs</h1>
        <p className="mt-2 text-[var(--muted-foreground)]">
          {products.length} styles crafted for natural beauty
        </p>
      </div>

      <Suspense fallback={<ShopSkeleton />}>
        <ShopContent products={products} />
      </Suspense>
    </div>
  );
}

function ShopSkeleton() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="space-y-3">
          <div className="aspect-[3/4] skeleton" />
          <div className="h-4 skeleton w-3/4" />
          <div className="h-3 skeleton w-1/2" />
        </div>
      ))}
    </div>
  );
}
