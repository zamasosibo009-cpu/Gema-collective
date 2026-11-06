import { reviews } from "@/lib/data/products";

export function Reviews() {
  // Take a few featured reviews
  const featured = reviews.slice(0, 3);

  return (
    <section className="py-16 lg:py-24">
      <div className="container-luxury">
        <div className="text-center max-w-2xl mx-auto mb-10 lg:mb-14">
          <h2 className="font-serif text-3xl sm:text-4xl">What our clients say</h2>
          <p className="mt-3 text-[var(--muted-foreground)]">
            Real stories from women who wear Gema
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {featured.map((review) => (
            <blockquote
              key={review.id}
              className="bg-white border border-[var(--border)] rounded-xl p-6 lg:p-8 flex flex-col"
            >
              <div className="flex gap-0.5 text-[var(--accent)] text-sm mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i}>{i < review.rating ? "★" : "☆"}</span>
                ))}
              </div>
              <p className="font-medium text-sm mb-2">{review.title}</p>
              <p className="text-[var(--muted-foreground)] text-sm leading-relaxed flex-1">
                “{review.content}”
              </p>
              <footer className="mt-6 pt-4 border-t border-[var(--border)] flex items-center justify-between">
                <cite className="not-italic text-sm font-medium">
                  {review.author}
                </cite>
                {review.verified && (
                  <span className="text-[10px] uppercase tracking-wider text-[var(--primary)] font-medium">
                    Verified
                  </span>
                )}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
