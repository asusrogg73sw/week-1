import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

const values = [
  {
    icon: "🎯",
    title: "Our Mission",
    description:
      "Our mission is to deliver meaningful digital experiences through creativity, innovation, and modern technology.",
  },
  {
    icon: "👁️",
    title: "Our Vision",
    description:
      "We envision a future where technology and creativity work together to make life easier and businesses better.",
  },
  {
    icon: "💡",
    title: "Our Values",
    description:
      "We believe in quality, transparency, continuous improvement, and building long-term relationships.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-background text-foreground">

      {/* Hero Section */}
      <section className="relative px-6 py-24 md:py-32">
        <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-primary/5 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl text-center">
          <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-5 py-2 text-sm font-medium text-primary">
            Get to Know Us
          </span>

          <h1 className="mx-auto mt-7 max-w-4xl text-5xl font-extrabold leading-tight md:text-7xl">
            We Believe in
            <span className="block bg-linear-to-r from-primary to-blue-500 bg-clip-text text-transparent">
              Making a Difference.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">
            We are passionate about creating innovative solutions,
            meaningful experiences, and building a better digital future
            through creativity and technology.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">

          {/* Visual */}
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-primary/10 blur-3xl" />

            <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-3xl border border-border bg-card">
              <div className="absolute left-8 top-8 h-24 w-24 rounded-full border border-primary/20" />
              <div className="absolute bottom-8 right-8 h-40 w-40 rounded-full border border-blue-400/20" />

              <div className="text-center">
                <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-7xl shadow-2xl">
                  ✦
                </div>

                <h2 className="mt-8 text-3xl font-bold">
                  Think. Create. Inspire.
                </h2>

                <p className="mt-3 text-muted-foreground">
                  Driven by Innovation
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="font-semibold uppercase tracking-widest text-primary">
              Who We Are
            </span>

            <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
              Turning Ideas Into
              <span className="text-primary"> Impact.</span>
            </h2>

            <p className="mt-7 leading-8 text-muted-foreground">
              We are a team of creative thinkers and problem solvers who
              believe that great things start with great ideas. Our approach
              combines modern technology, thoughtful design, and a passion
              for delivering quality.
            </p>

            <p className="mt-5 leading-8 text-muted-foreground">
              Whether it is building something new or improving an existing
              experience, we focus on creating solutions that are simple,
              effective, and valuable.
            </p>

            <div className="mt-9">
              <Button asChild size="lg" className="rounded-xl px-7 py-6 font-semibold">
                <Link href="/contact">
                  Let&apos;s Connect →
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values using Shadcn Card */}
      <section className="bg-muted/40 px-6 py-24">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="font-semibold uppercase tracking-widest text-primary">
              What Drives Us
            </span>

            <h2 className="mt-5 text-4xl font-bold md:text-5xl">
              Our Purpose & Principles
            </h2>

            <p className="mt-5 leading-7 text-muted-foreground">
              Everything we do is guided by our commitment to innovation,
              quality, and meaningful results.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-3">
            {values.map((value) => (
              <Card
                key={value.title}
                className="group rounded-2xl border border-border bg-card p-8 transition duration-300 hover:-translate-y-2 hover:border-primary/50 text-card-foreground shadow-sm flex flex-col justify-between"
              >
                <CardHeader className="p-0">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-3xl transition group-hover:bg-primary/20 text-primary">
                    {value.icon}
                  </div>
                  <CardTitle className="mt-7 text-2xl font-bold">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="p-0 mt-4">
                  <p className="leading-7 text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl rounded-3xl border border-primary/20 bg-card px-6 py-16 text-center md:px-16 md:py-20 shadow-xl">
          <h2 className="text-4xl font-bold md:text-5xl">
            Let&apos;s Build Something
            <span className="block mt-2 text-primary">
              Great Together.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl leading-8 text-muted-foreground">
            Have an idea, a project, or simply want to connect?
            We would love to hear from you.
          </p>

          <div className="mt-9">
            <Button asChild size="lg" className="rounded-xl px-8 py-6 font-semibold">
              <Link href="/contact">
                Contact Us →
              </Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}