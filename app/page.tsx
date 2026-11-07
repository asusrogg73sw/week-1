import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import Link from "next/link";
import ProductList from "@/components/ProductList";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative flex min-h-[85vh] items-center overflow-hidden px-6 py-20">
        {/* Background Effects using theme tokens */}
        <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-primary/5 blur-[120px]" />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 md:grid-cols-2">
          {/* Left Content */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Welcome to My Website
            </span>

            <h1 className="mt-7 text-5xl font-extrabold leading-tight tracking-tight md:text-6xl lg:text-7xl">
              Create Something
              <span className="block bg-linear-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                Extraordinary.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground md:text-lg">
              Discover innovative ideas, creative solutions, and modern
              experiences designed to help you achieve more. Let&apos;s build
              something amazing together.
            </p>

            {/* Buttons using Shadcn Button with asChild */}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button asChild size="lg" className="rounded-xl px-7 py-6 font-semibold">
                <Link href="/about">
                  Get Started →
                </Link>
              </Button>

              <Button asChild variant="outline" size="lg" className="rounded-xl border-border px-7 py-6 font-semibold hover:border-primary hover:text-primary">
                <Link href="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-14 flex flex-wrap gap-10 border-t border-border pt-8">
              <div>
                <h3 className="text-3xl font-bold">100+</h3>
                <p className="mt-1 text-sm text-muted-foreground">Happy Clients</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">50+</h3>
                <p className="mt-1 text-sm text-muted-foreground">Projects Done</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">5+</h3>
                <p className="mt-1 text-sm text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Right Visual Card */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute inset-0 rounded-[40px] bg-linear-to-br from-primary/10 to-blue-600/10 blur-3xl" />

            <Card className="relative overflow-hidden rounded-[32px] border border-border bg-card p-8 shadow-2xl text-card-foreground">
              <CardHeader className="p-0">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Your Next Chapter</p>
                    <h2 className="mt-2 text-2xl font-bold">
                      Think Beyond Limits.
                    </h2>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-2xl text-primary">
                    ✦
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-0">
                <div className="my-12 flex aspect-square items-center justify-center rounded-3xl border border-border bg-linear-to-br from-primary/10 via-primary/5 to-card">
                  <div className="flex h-48 w-48 items-center justify-center rounded-full border border-primary/30 bg-primary/5 shadow-2xl md:h-60 md:w-60">
                    <div className="flex h-36 w-36 items-center justify-center rounded-full border border-primary/40 bg-linear-to-br from-primary to-blue-600 text-6xl font-black text-primary-foreground shadow-2xl md:h-44 md:w-44">
                      M
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between rounded-2xl border border-border bg-muted/50 p-5">
                  <div>
                    <p className="text-sm text-muted-foreground">Make It Happen</p>
                    <p className="mt-1 font-semibold">Ideas into Reality</p>
                  </div>

                  <span className="text-3xl text-primary">↗</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Product List Section */}
      <ProductList />
    </div>
  );
}