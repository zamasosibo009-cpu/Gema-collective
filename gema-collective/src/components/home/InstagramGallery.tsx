import Image from "next/image";
import Link from "next/link";

const images = [
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&q=80",
  "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=400&q=80",
  "https://images.unsplash.com/photo-1492106087820-4e83caa534d9?w=400&q=80",
  "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc0?w=400&q=80",
  "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=400&q=80",
  "https://images.unsplash.com/photo-1595476108010-b4d1f595b234?w=400&q=80",
];

export function InstagramGallery() {
  return (
    <section className="py-16 lg:py-24 bg-[var(--muted)]/30">
      <div className="container-luxury">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="font-serif text-3xl sm:text-4xl">@gemacollective</h2>
          <p className="mt-3 text-[var(--muted-foreground)]">
            Tag us in your looks for a chance to be featured
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
          {images.map((src, i) => (
            <Link
              key={i}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square overflow-hidden rounded-lg bg-[var(--muted)] group"
            >
              <Image
                src={src}
                alt={`Gema Collective community look ${i + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, 16vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
