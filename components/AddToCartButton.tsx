"use client";

import { useState } from "react";

export default function AddToCartButton() {
  const [count, setCount] = useState(0);

  return (
    <button
      onClick={() => setCount((prev) => prev + 1)}
      className="mt-6 flex w-full items-center justify-center gap-3 rounded-xl border border-cyan-400/30 bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-4 font-bold text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-cyan-500/40 active:scale-95"
    >
      <span className="text-xl">🛒</span>

      <span>Add to Cart</span>

      <span className="rounded-full bg-white/20 px-3 py-1 text-sm">
        {count}
      </span>
    </button>
  );
}
