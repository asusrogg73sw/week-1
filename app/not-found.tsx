import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex items-center justify-center bg-background px-6 text-foreground">
      <div className="text-center max-w-xl">

        <h1 className="text-9xl font-black tracking-widest bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
          404
        </h1>

        <h2 className="text-3xl font-bold mt-4">
          Oops! Page Not Found
        </h2>

        <p className="text-muted-foreground mt-4">
          Sorry! Jo page aap dhoond rahe hain,
          woh exist nahi karta.
        </p>

        <div className="flex gap-4 justify-center mt-8">
          <Link href="/">
            <Button size="lg" className="rounded-xl px-7 py-6 font-semibold shadow-lg">
              Go Home →
            </Button>
          </Link>
        </div>

        <p className="text-muted-foreground/60 text-sm mt-12">
          © 2026 | Lost in Space 🚀
        </p>

      </div>
    </main>
  );
}