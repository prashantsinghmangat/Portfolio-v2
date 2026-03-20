"use client";

import { motion } from "framer-motion";
import SectionReveal from "@/components/animations/SectionReveal";
import { useUIStore } from "@/store/uiStore";

const pillars = [
  {
    number: "01",
    headline: "I ship at enterprise scale",
    detail: "Led AngularJS → React migration across enterprise platforms without a single production disruption. Built Moglix, Tendershark, Tele-MANAS — systems serving 100K+ users.",
    metric: "100K+ users served",
    icon: "🚀",
  },
  {
    number: "02",
    headline: "I engineer measurable performance",
    detail: "SEO rankings up 20%. Page load speed improved 15%. Traffic increased 45% on Tendershark. Core Web Vitals: LCP 4.2s → 1.8s, CLS 0.3 → 0.05. These are auditable results.",
    metric: "SEO +20% · Speed +15%",
    icon: "⚡",
  },
  {
    number: "03",
    headline: "I automate with AI",
    detail: "Built AI-powered PR review workflows and automated route migration using Claude Code and GPT. Reduced development effort by 40% across migration initiatives. Created Indexa MCP — cutting LLM token usage by 50–70%.",
    metric: "40% dev effort saved",
    icon: "🤖",
  },
  {
    number: "04",
    headline: "I lead and architect",
    detail: "Defined frontend architecture and coding standards across teams. Mentored junior developers into independent contributors. Built centralized component libraries used across enterprise shell architectures.",
    metric: "60+ component system",
    icon: "🏛️",
  },
];

export default function WhyHireMeSection() {
  const setCursorLabel = useUIStore((s) => s.setCursorLabel);

  return (
    <section id="why-hire-me" className="py-24 px-6" style={{ background: "var(--bg2)" }}>
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <span className="font-mono text-xs uppercase tracking-widest" style={{ color: "var(--accent)" }}>
            The Case
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black mt-2 mb-4">
            Why{" "}
            <span className="text-gradient-accent">Hire Me?</span>
          </h2>
          <p className="max-w-xl text-lg mb-16" style={{ color: "var(--text-muted)" }}>
            Anyone can write React. Here&apos;s what separates senior engineers from the rest.
          </p>
        </SectionReveal>

        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {pillars.map((p, i) => (
            <SectionReveal key={p.number} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                onMouseEnter={() => setCursorLabel("Read")}
                onMouseLeave={() => setCursorLabel("")}
                className="relative rounded-2xl p-6 h-full flex flex-col gap-4 overflow-hidden group"
                style={{
                  background: "var(--bg)",
                  border: "1px solid var(--border)",
                }}
              >
                {/* Glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{
                    background: "radial-gradient(ellipse at top left, color-mix(in srgb, var(--accent) 8%, transparent), transparent 60%)",
                  }}
                />

                <div className="flex items-start gap-4">
                  <span className="text-3xl">{p.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="font-mono text-xs" style={{ color: "var(--accent)" }}>
                        {p.number}
                      </span>
                      <div className="h-px flex-1" style={{ background: "var(--border)" }} />
                    </div>
                    <h3 className="font-display text-xl font-bold" style={{ color: "var(--text)" }}>
                      {p.headline}
                    </h3>
                  </div>
                </div>

                <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--text-muted)" }}>
                  {p.detail}
                </p>

                <div
                  className="self-start px-3 py-1 rounded-full text-xs font-mono font-semibold"
                  style={{
                    background: "color-mix(in srgb, var(--accent) 12%, transparent)",
                    color: "var(--accent)",
                    border: "1px solid color-mix(in srgb, var(--accent) 25%, transparent)",
                  }}
                >
                  {p.metric}
                </div>
              </motion.div>
            </SectionReveal>
          ))}
        </div>

        {/* CTA Row */}
        <SectionReveal delay={0.4}>
          <div
            className="rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
            style={{
              background: "var(--bg)",
              border: "1px solid var(--border)",
            }}
          >
            <div>
              <p className="font-display text-2xl font-bold" style={{ color: "var(--text)" }}>
                Ready to build something great?
              </p>
              <p className="mt-1" style={{ color: "var(--text-muted)" }}>
                Open to Senior Frontend, Lead, and Full Stack roles — remote or hybrid.
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <motion.a
                href="mailto:prashantsinghmangat@gmail.com"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onMouseEnter={() => setCursorLabel("Open")}
                onMouseLeave={() => setCursorLabel("")}
                className="px-6 py-3 rounded-xl font-semibold text-sm transition-all"
                style={{
                  background: "var(--accent)",
                  color: "#fff",
                }}
              >
                Let&apos;s Talk
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/prashantsinghmangat/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onMouseEnter={() => setCursorLabel("Open")}
                onMouseLeave={() => setCursorLabel("")}
                className="px-6 py-3 rounded-xl font-semibold text-sm transition-all"
                style={{
                  border: "1px solid var(--accent)",
                  color: "var(--accent)",
                  background: "transparent",
                }}
              >
                LinkedIn
              </motion.a>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
