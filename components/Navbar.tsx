import Link from "next/link";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Pricing", href: "/pricing" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 text-foreground backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold tracking-tight">
          My<span className="text-primary">Website.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-5 py-2.5 text-sm font-medium text-muted-foreground transition duration-300 hover:bg-primary/10 hover:text-primary"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA using Shadcn Button */}
        <div className="hidden md:inline-flex">
          <Link href="/pricing">
            <Button className="rounded-full px-6 font-semibold shadow-sm">
              Get Started →
            </Button>
          </Link>
        </div>

        {/* Mobile Menu - No JavaScript */}
        <details className="group relative md:hidden">
          <summary className="flex cursor-pointer list-none items-center gap-2 rounded-xl border border-border px-4 py-2.5 text-sm font-medium transition hover:border-primary hover:text-primary [&::-webkit-details-marker]:hidden">
            <span className="group-open:hidden">☰</span>
            <span className="hidden group-open:inline">✕</span>
            Menu
          </summary>

          {/* Mobile Dropdown */}
          <div className="absolute right-0 top-14 w-64 rounded-2xl border border-border bg-card p-4 shadow-2xl text-card-foreground">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground transition hover:bg-primary/10 hover:text-primary"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="mt-3 border-t border-border pt-3">
              <Link href="/pricing" className="block w-full">
                <Button className="w-full rounded-xl font-semibold">
                  Get Started →
                </Button>
              </Link>
            </div>
          </div>
        </details>

      </nav>
    </header>
  );
}