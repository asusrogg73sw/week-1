"use client";

import { useState } from "react";

interface CounterProps {
  label: string;
  initialValue?: number;
}

export default function Counter({ label, initialValue = 0 }: CounterProps) {
  const [count, setCount] = useState(initialValue);

  return (
    <div className="mt-4 flex items-center gap-3">
      <span>
        {label}: {count}
      </span>

      <button
        onClick={() => setCount(count + 1)}
        className="rounded bg-blue-600 px-3 py-1 text-white"
      >
        +1
      </button>
    </div>
  );
}
