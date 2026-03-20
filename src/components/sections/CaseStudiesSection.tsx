"use client";

import { motion } from "framer-motion";
import SectionReveal from "@/components/animations/SectionReveal";

const caseStudies = [
  {
    tag: "Migration",
    title: "AngularJS → React Migration at Enterprise Scale",
    problem:
      "Legacy AngularJS codebase across multiple enterprise applications was becoming unmaintainable — slow builds, no TypeScript support, and a shrinking talent pool made every feature release risky and expensive.",
    solution:
      "Led a phased migration strategy: built a centralized React UI component library (60+ components), automated route migration and parity validation using AI tools (Claude Code, GPT), and ensured full business logic parity with zero production disruptions.",
    impact: [
      "40% reduction in development effort via AI-powered automation",
      "35% smaller bundle size with modern React architecture",
      "Zero production incidents during migration",
      "Standardized frontend architecture across all teams",
    ],
    gradient: "from-violet-500/10 to-fuchsia-500/10",
    accentColor: "#7c6cfc",
  },
  {
    tag: "Performance",
    title: "Tendershark & Credlix: SEO + Performance Overhaul",
    problem:
      "Tendershark.com had poor search rankings and slow page loads, losing potential enterprise customers. Credlix.com's React frontend lacked SSR, hurting SEO discoverability for supply chain finance leads.",
    solution:
      "Rebuilt Tendershark end-to-end with Angular SSR for search-engine-visible content. Optimized Credlix.com using Next.js with SSR, image optimization, and CleverTap integration. Revamped Moglix L2/L3 pages with responsive widgets and RESTful API integrations.",
    impact: [
      "45% traffic increase on Tendershark",
      "20% improvement in SEO rankings on Credlix",
      "15% faster page load speed",
      "30% UX improvement on Moglix L2/L3 pages",
    ],
    gradient: "from-cyan-500/10 to-blue-500/10",
    accentColor: "#22d3ee",
  },
  {
    tag: "Government Scale",
    title: "Tele-MANAS: Mental Health Platform for 100K+ Users",
    problem:
      "India's Ministry of Health needed a digital mental health platform that could serve teleconsultations across the entire country — requiring accessibility, security (ABHA card integration), and scale for government-level traffic.",
    solution:
      "Built the Tele-MANAS frontend with Angular 16 with EY team, integrated ABHA card authentication into e-Manas (Karnataka Govt.) for secure patient records. Developed Let's Talk Life (NIMHANS) frontend with Angular 17 and Figma, applying responsive design for accessibility.",
    impact: [
      "100,000+ users served across India",
      "10,000+ patient records secured via ABHA integration",
      "40% improvement in accessibility scores",
      "Successfully deployed across 3 government platforms",
    ],
    gradient: "from-green-500/10 to-emerald-500/10",
    accentColor: "#4ade80",
  },
];

export default function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionReveal>
          <span className="font-mono text-xs text-violet-400 uppercase tracking-widest">
            Proven Results
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black mt-2 mb-4">
            Case <span className="text-gradient-accent">Studies</span>
          </h2>
          <p className="text-zinc-400 mb-16 max-w-2xl">
            Real problems. Architecture-first solutions. Measurable impact.
          </p>
        </SectionReveal>

        <div className="space-y-8">
          {caseStudies.map((study, i) => (
            <SectionReveal key={study.title} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.25 }}
                className={`relative rounded-2xl border border-white/8 bg-gradient-to-br ${study.gradient} overflow-hidden`}
              >
                <div className="p-6 sm:p-8">
                  {/* Tag */}
                  <span
                    className="inline-block px-3 py-1 rounded-full text-[10px] font-mono font-bold mb-4"
                    style={{
                      background: `${study.accentColor}15`,
                      color: study.accentColor,
                      border: `1px solid ${study.accentColor}30`,
                    }}
                  >
                    {study.tag}
                  </span>

                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-6">
                    {study.title}
                  </h3>

                  <div className="grid sm:grid-cols-3 gap-6">
                    {/* Problem */}
                    <div>
                      <h4
                        className="text-xs font-mono font-bold uppercase tracking-wider mb-2"
                        style={{ color: study.accentColor }}
                      >
                        Problem
                      </h4>
                      <p className="text-sm text-zinc-400 leading-relaxed">
                        {study.problem}
                      </p>
                    </div>

                    {/* Solution */}
                    <div>
                      <h4
                        className="text-xs font-mono font-bold uppercase tracking-wider mb-2"
                        style={{ color: study.accentColor }}
                      >
                        Solution
                      </h4>
                      <p className="text-sm text-zinc-400 leading-relaxed">
                        {study.solution}
                      </p>
                    </div>

                    {/* Impact */}
                    <div>
                      <h4
                        className="text-xs font-mono font-bold uppercase tracking-wider mb-2"
                        style={{ color: study.accentColor }}
                      >
                        Impact
                      </h4>
                      <ul className="space-y-1.5">
                        {study.impact.map((item) => (
                          <li
                            key={item}
                            className="text-sm text-zinc-300 flex items-start gap-2"
                          >
                            <span
                              className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                              style={{ background: study.accentColor }}
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
