import Link from "next/link";
import { Instagram, Facebook, Mail } from "lucide-react";
import { NewsletterForm } from "@/components/layout/NewsletterForm";

const footerLinks = {
  shop: [
    { href: "/shop", label: "All Wigs" },
    { href: "/shop?texture=Body+Wave", label: "Body Wave" },
    { href: "/shop?texture=Deep+Wave", label: "Deep Wave" },
    { href: "/shop?texture=Straight", label: "Straight" },
    { href: "/shop?texture=Curly", label: "Curly" },
    { href: "/shop?texture=Bob", label: "Bob Styles" },
  ],
  help: [
    { href: "/shipping-returns", label: "Shipping & Returns" },
    { href: "/contact", label: "Contact Us" },
    { href: "/about", label: "About Gema" },
    { href: "/#faq", label: "FAQ" },
  ],
  legal: [
    { href: "/shipping-returns", label: "Returns Policy" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms of Service" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[var(--foreground)] text-[var(--background)] mt-auto">
      <div className="container-luxury py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="font-serif text-2xl tracking-tight">
              Gema Collective
            </Link>
            <p className="mt-4 text-sm text-white/70 max-w-sm leading-relaxed">
              Premium human hair wigs crafted for the modern woman. Natural
              beauty, exceptional quality, delivered with care across South
              Africa.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="mailto:hello@gemacollective.co.za"
                aria-label="Email"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-serif text-lg mb-4">Shop</h3>
            <ul className="space-y-2.5">
              {footerLinks.shop.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-serif text-lg mb-4">Help</h3>
            <ul className="space-y-2.5">
              {footerLinks.help.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-serif text-lg mb-4">Stay in the know</h3>
            <p className="text-sm text-white/70 mb-4">
              New arrivals, exclusive offers & styling tips.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Gema Collective. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs text-white/50 hover:text-white/80 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
