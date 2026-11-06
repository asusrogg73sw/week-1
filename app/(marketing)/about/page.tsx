import { error } from "console";
import Link from "next/link";

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
  // throw new Error("About page testing error");

  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">

      {/* Hero Section */}
      <section className="relative px-6 py-24 md:py-32">
        <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl text-center">
          <span className="inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-sm font-medium text-cyan-300">
            Get to Know Us
          </span>

          <h1 className="mx-auto mt-7 max-w-4xl text-5xl font-extrabold leading-tight md:text-7xl">
            We Believe in
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Making a Difference.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-400">
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
            <div className="absolute inset-0 rounded-3xl bg-cyan-500/10 blur-3xl" />

            <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-800 via-slate-900 to-cyan-950">
              <div className="absolute left-8 top-8 h-24 w-24 rounded-full border border-cyan-400/20" />
              <div className="absolute bottom-8 right-8 h-40 w-40 rounded-full border border-blue-400/20" />

              <div className="text-center">
                <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 text-7xl shadow-[0_0_80px_rgba(34,211,238,0.15)]">
                  ✦
                </div>

                <h2 className="mt-8 text-3xl font-bold">
                  Think. Create. Inspire.
                </h2>

                <p className="mt-3 text-slate-400">
                  Driven by Innovation
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="font-semibold uppercase tracking-widest text-cyan-400">
              Who We Are
            </span>

            <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
              Turning Ideas Into
              <span className="text-cyan-400"> Impact.</span>
            </h2>

            <p className="mt-7 leading-8 text-slate-400">
              We are a team of creative thinkers and problem solvers who
              believe that great things start with great ideas. Our approach
              combines modern technology, thoughtful design, and a passion
              for delivering quality.
            </p>

            <p className="mt-5 leading-8 text-slate-400">
              Whether it is building something new or improving an existing
              experience, we focus on creating solutions that are simple,
              effective, and valuable.
            </p>

            <div className="mt-9">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-7 py-3.5 font-semibold text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-300"
              >
                Let's Connect <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="bg-slate-900/60 px-6 py-24">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="font-semibold uppercase tracking-widest text-cyan-400">
              What Drives Us
            </span>

            <h2 className="mt-5 text-4xl font-bold md:text-5xl">
              Our Purpose & Principles
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              Everything we do is guided by our commitment to innovation,
              quality, and meaningful results.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="group rounded-2xl border border-white/10 bg-slate-950 p-8 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/50"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-3xl transition group-hover:bg-cyan-400/20">
                  {value.icon}
                </div>

                <h3 className="mt-7 text-2xl font-bold">
                  {value.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-950 to-slate-900 px-6 py-16 text-center md:px-16 md:py-20">
          <h2 className="text-4xl font-bold md:text-5xl">
            Let's Build Something
            <span className="block mt-2 text-cyan-400">
              Great Together.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl leading-8 text-slate-300">
            Have an idea, a project, or simply want to connect?
            We would love to hear from you.
          </p>

          <Link
            href="/contact"
            className="mt-9 inline-flex rounded-xl bg-cyan-400 px-8 py-3.5 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Contact Us →
          </Link>
        </div>
      </section>

    </main>
  );
}