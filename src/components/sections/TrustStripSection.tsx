"use client";

import { motion } from "framer-motion";

const companies = [
  "Taazaa Inc.",
  "Moglix",
  "Safeguard Properties",
  "Govt. of India",
  "IIIT Bangalore",
];

const metrics = [
  "100K+ users served",
  "45% traffic growth",
  "40% dev effort saved via AI",
  "Pratibha Award Winner",
];

export default function TrustStripSection() {
  return (
    <section className="py-8 px-6 border-y border-white/5" style={{ background: "var(--bg2, #050509)" }}>
      <div className="max-w-5xl mx-auto">
        {/* Companies */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-4"
        >
          <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
            Worked with
          </span>
          {companies.map((name) => (
            <span
              key={name}
              className="text-sm font-semibold text-zinc-400"
            >
              {name}
            </span>
          ))}
        </motion.div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1"
        >
          {metrics.map((m, i) => (
            <span key={m} className="text-xs text-zinc-500 font-mono">
              {i > 0 && <span className="text-zinc-700 mx-1">/</span>}
              {m}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
