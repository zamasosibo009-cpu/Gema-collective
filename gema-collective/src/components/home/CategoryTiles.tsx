import Link from "next/link";
import Image from "next/image";

const categories = [
  {
    name: "Body Wave",
    href: "/shop?texture=Body+Wave",
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&q=80",
  },
  {
    name: "Deep Wave",
    href: "/shop?texture=Deep+Wave",
    image: "https://images.unsplash.com/photo-1595476108010-b4d1f595b234?w=600&q=80",
  },
  {
    name: "Straight",
    href: "/shop?texture=Straight",
    image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&q=80",
  },
  {
    name: "Curly",
    href: "/shop?texture=Curly",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80",
  },
  {
    name: "Bob",
    href: "/shop?texture=Bob",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&q=80",
  },
  {
    name: "Lace Fronts",
    href: "/shop?category=Lace+Front",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc0?w=600&q=80",
  },
];

export function CategoryTiles() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-luxury">
        <div className="text-center max-w-2xl mx-auto mb-10 lg:mb-14">
          <h2 className="font-serif text-3xl sm:text-4xl">Shop by Style</h2>
          <p className="mt-3 text-[var(--muted-foreground)]">
            Find the texture and finish that feels like you
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href={cat.href}
              className="group relative aspect-[4/5] overflow-hidden rounded-xl bg-[var(--muted)] focus-visible:ring-2 focus-visible:ring-[var(--primary)]"
            >
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                <h3 className="font-serif text-lg sm:text-xl text-white">
                  {cat.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
