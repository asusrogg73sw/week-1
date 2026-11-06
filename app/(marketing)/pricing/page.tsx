import Link from "next/link";

// STEP D: TypeScript Interface for Plan data typing
interface Plan {
  name: string;
  price: number;
  features: string[];
  popular?: boolean; // Optional property for the Pro/Popular plan highlight
}

// Pricing plans data array as required in the assignment
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
    popular: true, // Pro plan ko highlight karne ke liye
  },
  {
    name: "Team",
    price: 50,
    features: ["Unlimited Projects", "24/7 support", "Custom Integrations"],
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-sm font-medium text-cyan-300">
            Simple & Transparent Pricing
          </span>

          <h1 className="mt-7 text-4xl font-extrabold leading-tight md:text-6xl">
            Choose the Right Plan {/* Tailwind v4 compatible linear gradient */}
            <span className="block bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              For Your Needs.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base text-slate-400 md:text-lg">
            Flexible pricing plans designed to help you get started and grow
            your business.
          </p>
        </div>

        {/* Pricing Cards Grid (Responsive Layout) */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col rounded-xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                plan.popular
                  ? "border-cyan-400 bg-slate-900 shadow-cyan-950/50"
                  : "border-white/10 bg-slate-900/50 hover:border-cyan-400/40"
              }`}
            >
              {/* Plan Name & Price */}
              <div>
                <h2 className="text-2xl font-bold">{plan.name}</h2>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold">${plan.price}</span>
                  <span className="text-sm text-slate-400">/ month</span>
                </div>
              </div>

              {/* Features List (Nested .map() implementation) */}
              <div className="mt-8 flex-1">
                <h3 className="text-sm font-semibold text-slate-300 mb-4">
                  What&apos;s included:
                </h3>
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-sm text-slate-400"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 text-xs text-cyan-400">
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <div className="mt-8">
                <Link
                  href="/contact"
                  className={`block w-full rounded-xl py-3 text-center font-semibold transition ${
                    plan.popular
                      ? "bg-cyan-400 text-slate-950 hover:bg-cyan-300"
                      : "border border-white/10 bg-white/5 text-white hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-400"
                  }`}
                >
                  Get Started →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
