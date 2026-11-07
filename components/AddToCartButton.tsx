"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function AddToCartButton() {
  const [count, setCount] = useState(0);

  return (
    <Button
      onClick={() => setCount((prev) => prev + 1)}
      className="mt-6 flex w-full items-center justify-center gap-3 rounded-xl py-6 font-bold shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-1 active:scale-95"
    >
      <span className="text-xl">🛒</span>

      <span>Add to Cart</span>

      <span className="rounded-full bg-primary-foreground/20 px-3 py-1 text-sm text-primary-foreground">
        {count}
      </span>
    </Button>
  );
}