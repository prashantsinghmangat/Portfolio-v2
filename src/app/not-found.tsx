import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 className="font-display text-7xl sm:text-9xl font-black text-gradient-accent mb-4">
        404
      </h1>
      <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
        Page Not Found
      </h2>
      <p className="text-zinc-400 max-w-md mb-8">
        The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you
        back to the portfolio.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-full bg-gradient-to-r from-accent to-cyan-500 text-white font-semibold text-sm hover:shadow-lg hover:shadow-accent/25 transition-all"
      >
        Back to Home
      </Link>
    </div>
  );
}
