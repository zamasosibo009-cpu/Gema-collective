import { Hero } from "@/components/home/Hero";
import { CategoryTiles } from "@/components/home/CategoryTiles";
import { Bestsellers } from "@/components/home/Bestsellers";
import { Reviews } from "@/components/home/Reviews";
import { InstagramGallery } from "@/components/home/InstagramGallery";
import { FAQ } from "@/components/home/FAQ";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategoryTiles />
      <Bestsellers />
      <Reviews />
      <InstagramGallery />
      <FAQ />
    </>
  );
}
