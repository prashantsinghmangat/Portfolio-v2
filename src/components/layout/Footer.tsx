export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-mono text-sm text-zinc-500">
          © {new Date().getFullYear()}{" "}
          <span className="text-accent">PS.dev</span> · Prashant Singh
        </span>
        <span className="text-xs text-zinc-600 font-mono">
          Crafted with Next.js, Tailwind & Framer Motion
        </span>
      </div>
    </footer>
  );
}
