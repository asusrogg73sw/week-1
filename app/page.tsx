import Link from "next/link";
import ProductList from "@/components/ProductList";
// import Counter from "@/components/Counter";
// import UtilCheck from "@/components/UtilCheck";
// import NameInput from "@/components/NameInput";

export default function Home() {
  return (
    <main>
      <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-slate-950 px-6 py-20 text-white">
        {/* Background Effects */}
        <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 md:grid-cols-2">
          {/* Left Content */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              Welcome to My Website
            </span>

            <h1 className="mt-7 text-5xl font-extrabold leading-tight tracking-tight md:text-6xl lg:text-7xl">
              Create Something
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Extraordinary.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-400 md:text-lg">
              Discover innovative ideas, creative solutions, and modern
              experiences designed to help you achieve more. Let&apos;s build
              something amazing together.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="rounded-xl bg-cyan-400 px-7 py-3.5 font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-300"
              >
                Get Started →
              </Link>

              <Link
                href="/contact"
                className="rounded-xl border border-slate-700 px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400"
              >
                Contact Us
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-14 flex flex-wrap gap-10 border-t border-white/10 pt-8">
              <div>
                <h3 className="text-3xl font-bold text-white">100+</h3>
                <p className="mt-1 text-sm text-slate-400">Happy Clients</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white">50+</h3>
                <p className="mt-1 text-sm text-slate-400">Projects Done</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white">5+</h3>
                <p className="mt-1 text-sm text-slate-400">Years Experience</p>
              </div>
            </div>

            {/* Counter Component */}
            {/* <Counter label="My Counter" /> */}
            {/* <Counter label="Score" initialValue={10} /> */}
            {/* <UtilCheck /> */}
            {/* <NameInput /> */}
            
          </div>

          {/* Right Visual */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-cyan-500/20 to-blue-600/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 p-8 shadow-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Your Next Chapter</p>
                  <h2 className="mt-2 text-2xl font-bold">
                    Think Beyond Limits.
                  </h2>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-2xl text-cyan-400">
                  ✦
                </div>
              </div>

              <div className="my-12 flex aspect-square items-center justify-center rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-slate-900">
                <div className="flex h-48 w-48 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/5 shadow-[0_0_80px_rgba(34,211,238,0.15)] md:h-60 md:w-60">
                  <div className="flex h-36 w-36 items-center justify-center rounded-full border border-cyan-400/40 bg-gradient-to-br from-cyan-400 to-blue-600 text-6xl font-black text-white shadow-2xl md:h-44 md:w-44">
                    M
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-5">
                <div>
                  <p className="text-sm text-slate-400">Make It Happen</p>
                  <p className="mt-1 font-semibold">Ideas into Reality</p>
                </div>

                <span className="text-3xl text-cyan-400">↗</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product List Section - New Section */}
      <ProductList />
    </main>
  );
}
