import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-purple-500 opacity-20 blur-[100px]" />

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Badge */}
          <Badge variant="secondary" className="px-4 py-1.5">
            <Zap className="mr-1 h-3 w-3" />
            Powered by Lightning & Nostr
          </Badge>

          {/* Headline */}
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl">
            Build products.{" "}
            <span className="bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
              Validate fast.
            </span>{" "}
            Scale winners.
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            Principium Axis is a decentralized product factory. Launch MVPs on Nostr,
            validate with Lightning zaps, crowdfund successful products, and scale through
            our unified identity platform.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link href="https://principium-axis-web.pages.dev/register">
                Start Building
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#products">
                Explore Products
              </Link>
            </Button>
          </div>

          {/* Social proof */}
          <div className="pt-8 flex items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-foreground">Open Source</span>
            </div>
            <div className="h-4 w-px bg-border" />
            <div className="flex items-center gap-2">
              <span className="font-semibold text-foreground">Edge-Native</span>
            </div>
            <div className="h-4 w-px bg-border" />
            <div className="flex items-center gap-2">
              <span className="font-semibold text-foreground">Bitcoin-First</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
