"use client";

import { useState } from "react";

export default function NameInput() {
  const [text, setText] = useState<string>("");

  return (
    <div className="mt-4 flex flex-col gap-2">
      <input
        type="text"
        value={text}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setText(e.target.value)
        }
        placeholder="Apna naam likhein..."
        className="rounded border border-slate-700 bg-slate-900 px-3 py-2 text-white"
      />
      <p className="text-sm text-slate-300">Aap ka text: {text}</p>
    </div>
  );
}
