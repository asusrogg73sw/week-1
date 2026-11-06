
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Pricing", href: "/pricing" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 text-white backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold tracking-tight">
          My<span className="text-cyan-400">Website.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-5 py-2.5 text-sm font-medium text-slate-300 transition duration-300 hover:bg-cyan-400/10 hover:text-cyan-400"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link
          href="/pricing"
          className="hidden rounded-full bg-cyan-400 px-6 py-2.5 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-300 md:inline-flex"
        >
          Get Started →
        </Link>

        {/* Mobile Menu - No JavaScript */}
        <details className="group relative md:hidden">
          <summary className="flex cursor-pointer list-none items-center gap-2 rounded-xl border border-white/10 px-4 py-2.5 text-sm font-medium transition hover:border-cyan-400 hover:text-cyan-400 [&::-webkit-details-marker]:hidden">
            <span className="group-open:hidden">☰</span>
            <span className="hidden group-open:inline">✕</span>
            Menu
          </summary>

          {/* Mobile Dropdown */}
          <div className="absolute right-0 top-14 w-64 rounded-2xl border border-white/10 bg-slate-900 p-4 shadow-2xl shadow-black/40">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-cyan-400/10 hover:text-cyan-400"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="mt-3 border-t border-white/10 pt-3">
              <Link
                href="/pricing"
                className="block rounded-xl bg-cyan-400 px-4 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Get Started →
              </Link>
            </div>
          </div>
        </details>

      </nav>
    </header>
  );
}
