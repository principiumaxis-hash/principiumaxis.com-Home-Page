import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Sparkles, Rocket, ArrowUpRight } from "lucide-react";

const products = [
  {
    title: "Principium Axis SSO",
    description: "Enterprise-grade OAuth 2.0 + OpenID Connect identity provider. Single sign-on across all your products with one account.",
    icon: Shield,
    status: "Live",
    href: "https://principium-axis-web.pages.dev",
    features: ["OAuth 2.0 + OIDC", "Multi-tenant", "Edge-deployed"],
  },
  {
    title: "Meme Factory",
    description: "AI-powered meme generation with Nostr publishing. Create viral content, track Lightning zaps, climb the leaderboard.",
    icon: Sparkles,
    status: "Beta",
    href: "https://meme-factory-api.principiumaxis.workers.dev",
    features: ["AI Generation", "Nostr Native", "Zap Tracking"],
  },
  {
    title: "Your Product Here",
    description: "Have an idea? Launch your MVP on Nostr, validate with real users paying real sats, and scale what works.",
    icon: Rocket,
    status: "Coming Soon",
    href: "#incubator",
    features: ["Community Funded", "Open Source", "Rapid Iteration"],
  },
];

export function Products() {
  return (
    <section id="products" className="py-20 md:py-32 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Product Ecosystem
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Products built on the Principium Axis platform. Each one validated by the community,
            funded by Lightning, and powered by open protocols.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Card key={product.title} className="relative group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <product.icon className="h-6 w-6" />
                  </div>
                  <Badge variant={product.status === "Live" ? "default" : product.status === "Beta" ? "secondary" : "outline"}>
                    {product.status}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{product.title}</CardTitle>
                <CardDescription className="text-base">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.features.map((feature) => (
                    <Badge key={feature} variant="outline" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
                <Button variant="ghost" className="group/btn" asChild>
                  <Link href={product.href}>
                    {product.status === "Coming Soon" ? "Learn More" : "Try Now"}
                    <ArrowUpRight className="ml-1 h-4 w-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
