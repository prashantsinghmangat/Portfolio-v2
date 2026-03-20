"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 className="font-display text-7xl sm:text-9xl font-black text-gradient-accent mb-4">
        Oops
      </h1>
      <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
        Something went wrong
      </h2>
      <p className="text-zinc-400 max-w-md mb-8">
        An unexpected error occurred. Please try again.
      </p>
      <button
        onClick={reset}
        className="px-6 py-3 rounded-full bg-gradient-to-r from-accent to-cyan-500 text-white font-semibold text-sm hover:shadow-lg hover:shadow-accent/25 transition-all"
      >
        Try Again
      </button>
    </div>
  );
}
