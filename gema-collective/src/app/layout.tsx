import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { CookieBanner } from "@/components/layout/CookieBanner";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Gema Collective | Premium Human Hair Wigs",
    template: "%s | Gema Collective",
  },
  description:
    "Discover premium virgin human hair wigs, lace fronts, and closures. Luxury quality, natural finish, delivered across South Africa.",
  keywords: [
    "wigs",
    "human hair wigs",
    "lace front wigs",
    "virgin hair",
    "South Africa",
    "premium wigs",
    "HD lace",
    "Gema Collective",
  ],
  openGraph: {
    type: "website",
    locale: "en_ZA",
    siteName: "Gema Collective",
    title: "Gema Collective | Premium Human Hair Wigs",
    description:
      "Luxury human hair wigs crafted for natural beauty. Shop body wave, deep wave, straight & curly styles.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-ZA" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CartDrawer />
        <WhatsAppButton />
        <CookieBanner />
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              background: "var(--card)",
              color: "var(--foreground)",
              border: "1px solid var(--border)",
            },
          }}
        />
      </body>
    </html>
  );
}
