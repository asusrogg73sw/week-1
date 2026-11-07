"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center gap-6 bg-background px-6 text-foreground text-center">
      
      {/* Icon or Status Badge */}
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-destructive/10 text-destructive text-3xl font-bold">
        ⚠️
      </div>

      <h1 className="text-4xl font-extrabold tracking-tight">
        Something went wrong!
      </h1>

      <p className="max-w-md text-muted-foreground">
        {error.message || "An unexpected error has occurred. Please try again or go back home."}
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
        <Button
          onClick={() => reset()}
          size="lg"
          className="rounded-xl px-7 font-semibold"
        >
          Try Again
        </Button>

        <Button asChild variant="outline" size="lg" className="rounded-xl px-7 font-semibold">
          <Link href="/">
            Go Home →
          </Link>
        </Button>
      </div>

    </div>
  );
}