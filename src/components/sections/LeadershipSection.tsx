"use client";

import { motion } from "framer-motion";
import SectionReveal from "@/components/animations/SectionReveal";
import { StaggerContainer, StaggerItem } from "@/components/animations/SectionReveal";

const leadershipItems = [
  {
    icon: "🏗️",
    title: "Defined Frontend Architecture",
    detail:
      "Designed and standardized frontend architecture across enterprise applications — modular component design, state management patterns, and API integration guidelines adopted by multiple teams.",
  },
  {
    icon: "🔄",
    title: "Led Enterprise Migrations",
    detail:
      "Owned end-to-end AngularJS → React migration strategy for enterprise clients. Built phased rollout plans, automated parity validation, and delivered zero-downtime transitions.",
  },
  {
    icon: "🤖",
    title: "Pioneered AI in Dev Workflows",
    detail:
      "Introduced AI-powered PR review workflows and automated testing pipelines using Claude Code and GPT. Established practices that reduced development effort by 40% across the team.",
  },
  {
    icon: "👥",
    title: "Mentored Developers",
    detail:
      "Mentored junior and mid-level developers through structured code reviews, pair programming, and architecture walkthroughs. Helped team members grow into independent contributors.",
  },
  {
    icon: "📐",
    title: "Established Coding Standards",
    detail:
      "Created and enforced code quality standards — linting rules, component patterns, Git workflow conventions, and documentation practices adopted organization-wide.",
  },
  {
    icon: "📦",
    title: "Built Shared Component Libraries",
    detail:
      "Designed and built a centralized React UI library (60+ components — buttons, tables, forms, dialogs, cards) used across shell architecture by multiple product teams.",
  },
];

const trustSignals = [
  { label: "Taazaa Inc.", type: "company" },
  { label: "Moglix", type: "company" },
  { label: "IIIT Bangalore", type: "institution" },
  { label: "Tele-MANAS (Govt. of India)", type: "government" },
  { label: "e-Manas (Karnataka Govt.)", type: "government" },
  { label: "100K+ users served", type: "metric" },
  { label: "Pratibha Award Q2", type: "award" },
];

export default function LeadershipSection() {
  return (
    <section id="leadership" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionReveal>
          <span className="font-mono text-xs text-violet-400 uppercase tracking-widest">
            Beyond Code
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black mt-2 mb-4">
            Leadership &amp;{" "}
            <span className="text-gradient-accent">Impact</span>
          </h2>
          <p className="text-zinc-400 mb-16 max-w-2xl">
            Engineering leadership is about multiplying team output, not just writing code.
          </p>
        </SectionReveal>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {leadershipItems.map((item) => (
            <StaggerItem key={item.title}>
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="p-5 rounded-2xl border border-white/8 bg-white/[0.03] hover:border-accent/20 transition-colors h-full"
              >
                <span className="text-2xl mb-3 block">{item.icon}</span>
                <h3 className="text-base font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {item.detail}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Trust signals */}
        <SectionReveal delay={0.3}>
          <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-6">
            <h3 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">
              Trusted By
            </h3>
            <div className="flex flex-wrap gap-3">
              {trustSignals.map((signal) => (
                <span
                  key={signal.label}
                  className={`px-4 py-2 rounded-full text-xs font-mono ${
                    signal.type === "government"
                      ? "bg-green-400/10 text-green-400 border border-green-400/20"
                      : signal.type === "award"
                        ? "bg-amber-400/10 text-amber-400 border border-amber-400/20"
                        : signal.type === "metric"
                          ? "bg-cyan-400/10 text-cyan-400 border border-cyan-400/20"
                          : "bg-violet-400/10 text-violet-400 border border-violet-400/20"
                  }`}
                >
                  {signal.label}
                </span>
              ))}
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
