import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  products: [
    { href: "https://principium-axis-web.pages.dev", label: "SSO Platform" },
    { href: "https://meme-factory-api.principiumaxis.workers.dev", label: "Meme Factory" },
    { href: "#incubator", label: "Incubator" },
  ],
  developers: [
    { href: "https://docs.principiumaxis.com", label: "Documentation" },
    { href: "https://github.com/principiumaxis-hash", label: "GitHub" },
    { href: "#", label: "API Reference" },
  ],
  community: [
    { href: "https://nostr.com", label: "Nostr" },
    { href: "#", label: "Discord" },
    { href: "#", label: "Twitter" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
                Principium Axis
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Decentralized product factory. Build, validate, and scale products
              powered by Lightning and Nostr.
            </p>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Products</h4>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Developers */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Developers</h4>
            <ul className="space-y-2">
              {footerLinks.developers.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    {...(link.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Community</h4>
            <ul className="space-y-2">
              {footerLinks.community.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Principium Axis. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
