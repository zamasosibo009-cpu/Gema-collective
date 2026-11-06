import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container-luxury py-24 lg:py-32 text-center">
      <p className="text-sm uppercase tracking-widest text-[var(--primary)] mb-4">
        404
      </p>
      <h1 className="font-serif text-4xl sm:text-5xl mb-4">Page not found</h1>
      <p className="text-[var(--muted-foreground)] max-w-md mx-auto mb-8">
        The page you’re looking for doesn’t exist or may have been moved.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <Button variant="luxury" asChild>
          <Link href="/">Back to home</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/shop">Browse the shop</Link>
        </Button>
      </div>
    </div>
  );
}
