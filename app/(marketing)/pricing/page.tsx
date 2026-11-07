import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

// TypeScript Interface for Plan data typing
interface Plan {
  name: string;
  price: number;
  features: string[];
  popular?: boolean;
}

// Pricing plans data array
const plans: Plan[] = [
  {
    name: "Basic",
    price: 10,
    features: ["1 Project", "Email support"],
  },
  {
    name: "Pro",
    price: 25,
    features: ["10 Projects", "Priority support"],
    popular: true,
  },
  {
    name: "Team",
    price: 50,
    features: ["Unlimited Projects", "24/7 support", "Custom Integrations"],
  },
];

export default function PricingPage() {
  
  return (
    <section className="min-h-screen bg-background px-6 py-20 text-foreground">
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-5 py-2 text-sm font-medium text-primary">
            Simple & Transparent Pricing
          </span>

          <h1 className="mt-7 text-4xl font-extrabold leading-tight md:text-6xl">
            Choose the Right Plan
            <span className="block bg-linear-to-r from-primary to-blue-500 bg-clip-text text-transparent">
              For Your Needs.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
            Flexible pricing plans designed to help you get started and grow
            your business.
          </p>
        </div>

        {/* Pricing Cards Grid (Responsive Layout) */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`flex flex-col rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                plan.popular
                  ? "border-primary bg-card shadow-lg shadow-primary/10 ring-2 ring-primary/20"
                  : "border-border bg-card/50 hover:border-primary/40 text-card-foreground"
              }`}
            >
              {/* Plan Name & Price -> CardHeader & CardTitle */}
              <CardHeader className="p-6 pb-0">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  {plan.popular && (
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      Popular
                    </span>
                  )}
                </div>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold">${plan.price}</span>
                  <span className="text-sm text-muted-foreground">/ month</span>
                </div>
              </CardHeader>

              {/* Features List -> CardContent */}
              <CardContent className="p-6 flex-1">
                <h3 className="text-sm font-semibold text-foreground mb-4">
                  What&apos;s included:
                </h3>
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-sm text-muted-foreground"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs text-primary">
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>

              {/* CTA Button -> CardFooter with Button asChild */}
              <CardFooter className="p-6 pt-0">
                <Button
                  asChild
                  variant={plan.popular ? "default" : "outline"}
                  className="w-full rounded-xl py-6 font-semibold"
                >
                  <Link href="/contact">
                    Get Started →
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}