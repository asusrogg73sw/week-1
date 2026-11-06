
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 px-6 text-white">

      <div className="text-center max-w-xl">

        <h1 className="text-9xl font-black tracking-widest bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          404
        </h1>

        <h2 className="text-3xl font-bold mt-4">
          Oops! Page Not Found
        </h2>

        <p className="text-gray-300 mt-4">
          Sorry! Jo page aap dhoond rahe hain,
          woh exist nahi karta.
        </p>

        <div className="flex gap-4 justify-center mt-8">

          <Link
            href="/"
            className="bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-xl font-semibold transition duration-300 shadow-lg"
          >
            Go Home →
          </Link>

        </div>

        <p className="text-gray-500 text-sm mt-12">
          © 2026 | Lost in Space 🚀
        </p>

      </div>
    </main>
  );
}
