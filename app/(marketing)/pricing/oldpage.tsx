// pricing page



import Link from "next/link";

const pricingPlans = [
  {
    name: "Starter",
    description: "Perfect for individuals and small projects.",
    price: "19",
    popular: false,
    features: [
      "1 Website Project",
      "Responsive Design",
      "Basic Support",
      "5 Pages",
      "Basic SEO Optimization",
    ],
  },
  {
    name: "Professional",
    description: "Everything you need to grow your business.",
    price: "49",
    popular: true,
    features: [
      "5 Website Projects",
      "Responsive Design",
      "Priority Support",
      "Unlimited Pages",
      "Advanced SEO Optimization",
      "Performance Optimization",
      "Custom Design",
    ],
  },
  {
    name: "Enterprise",
    description: "Advanced solutions for growing businesses.",
    price: "99",
    popular: false,
    features: [
      "Unlimited Projects",
      "Premium Responsive Design",
      "24/7 Priority Support",
      "Unlimited Pages",
      "Advanced SEO Optimization",
      "Performance Optimization",
      "Custom Features",
      "Dedicated Assistance",
    ],
  },
];

export default function PricingPage() {
  // await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 px-6 py-20 text-white">

      {/* Background Effects */}
      <div className="pointer-events-none absolute left-1/4 top-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="pointer-events-none absolute right-1/4 top-96 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />

      {/* Pricing Header */}
      <section className="relative mx-auto max-w-7xl">

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-sm font-medium text-cyan-300">
            Simple & Transparent Pricing
          </span>

          <h1 className="mt-7 text-4xl font-extrabold leading-tight md:text-6xl">
            Choose the Right Plan
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              For Your Needs.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 md:text-lg">
            Flexible pricing plans designed to help you get started,
            grow your business, and achieve your goals.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-3xl border p-8 transition duration-300 hover:-translate-y-2 ${
                plan.popular
                  ? "border-cyan-400 bg-gradient-to-b from-cyan-950/60 to-slate-900 shadow-xl shadow-cyan-950/30"
                  : "border-white/10 bg-slate-900/70 hover:border-cyan-400/40"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-cyan-400 px-5 py-2 text-xs font-bold uppercase tracking-wider text-slate-950">
                  Most Popular
                </span>
              )}

              {/* Plan Details */}
              <div>
                <h2 className="text-2xl font-bold">{plan.name}</h2>

                <p className="mt-3 min-h-12 text-sm leading-6 text-slate-400">
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mt-8 border-b border-white/10 pb-8">
                <div className="flex items-end gap-2">
                  <span className="text-5xl font-extrabold">
                    ${plan.price}
                  </span>

                  <span className="mb-2 text-sm text-slate-400">
                    / month
                  </span>
                </div>

                <p className="mt-3 text-sm text-slate-500">
                  Billed monthly. Cancel anytime.
                </p>
              </div>

              {/* Features */}
              <div className="flex-1 py-8">
                <h3 className="mb-6 font-semibold">
                  What&apos;s included:
                </h3>

                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm text-slate-300"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 text-xs text-cyan-400">
                        ✓
                      </span>

                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Button */}
              <Link
                href="/contact"
                className={`block rounded-xl px-6 py-3.5 text-center font-semibold transition duration-300 ${
                  plan.popular
                    ? "bg-cyan-400 text-slate-950 hover:bg-cyan-300"
                    : "border border-white/10 bg-white/5 text-white hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-400"
                }`}
              >
                Get Started →
              </Link>
            </div>
          ))}

        </div>
      </section>

      {/* Custom Plan CTA */}
      <section className="relative mx-auto mt-24 max-w-7xl">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-cyan-950/50 px-6 py-14 text-center md:px-16">

          <h2 className="text-3xl font-bold md:text-4xl">
            Need Something
            <span className="text-cyan-400"> Custom?</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-400">
            Have unique requirements? Let&apos;s discuss your project and
            create a pricing plan that works perfectly for you.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-xl bg-cyan-400 px-8 py-3.5 font-semibold text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-300"
          >
            Contact Our Team →
          </Link>

        </div>
      </section>

      {/* Footer Note */}
      <p className="relative mt-12 text-center text-sm text-slate-500">
        Have questions about our plans? We&apos;re here to help.
      </p>

    </main>
  );
}


