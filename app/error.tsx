
"use client";

import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4">

      <h1 className="text-4xl font-bold">
        Something went wrong!
      </h1>

      <p>{error.message}</p>

      <button
        onClick={() => reset()}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg"
      >
        Try Again
      </button>

      <Link href="/" className="text-blue-600 underline">
        Home
      </Link>

    </main>
  );
}
