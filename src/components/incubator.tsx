import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lightbulb, Users, Zap, TrendingUp, ArrowRight } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    icon: Lightbulb,
    title: "Submit Your Idea",
    description: "Pitch your product concept to the community. No gatekeepers, no pitch decks—just your vision.",
  },
  {
    icon: Users,
    title: "Community Validation",
    description: "Get real feedback from users who vote with Lightning zaps. Popular ideas rise to the top.",
  },
  {
    icon: Zap,
    title: "Crowdfund Development",
    description: "Successful ideas get funded directly by the community. No VCs, no equity dilution.",
  },
  {
    icon: TrendingUp,
    title: "Launch & Scale",
    description: "Ship on Principium Axis infrastructure. Focus on your product while we handle auth, payments, and scaling.",
  },
];

export function Incubator() {
  return (
    <section id="incubator" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            The Incubator
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From idea to funded product in weeks, not years. Community-driven validation
            and Lightning-powered crowdfunding.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {steps.map((step, index) => (
            <Card key={step.title} className="relative">
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                    {index + 1}
                  </div>
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <step.icon className="h-5 w-5" />
                  </div>
                </div>
                <CardTitle className="text-lg">{step.title}</CardTitle>
                <CardDescription>{step.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-to-r from-purple-600/10 to-orange-500/10 border-none">
          <CardContent className="flex flex-col md:flex-row items-center justify-between gap-6 p-8">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-2xl font-bold">Have a product idea?</h3>
              <p className="text-muted-foreground">
                Join the incubator and let the community help you build it. No permission needed.
              </p>
            </div>
            <Button size="lg" asChild>
              <Link href="https://principium-axis-web.pages.dev/register">
                Submit Your Idea
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
