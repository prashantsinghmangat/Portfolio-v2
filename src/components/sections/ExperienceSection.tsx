"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionReveal from "@/components/animations/SectionReveal";
import { experiences } from "@/data/portfolio";

export default function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionReveal>
          <span className="font-mono text-xs text-violet-400 uppercase tracking-widest">
            Career Path
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black mt-2 mb-16">
            Work <span className="text-gradient-accent">Experience</span>
          </h2>
        </SectionReveal>

        <div ref={containerRef} className="relative">
          {/* Animated timeline line */}
          <div className="absolute left-[19px] sm:left-[23px] top-0 bottom-0 w-px bg-white/5">
            <motion.div
              className="w-full bg-gradient-to-b from-accent via-cyan-400 to-green-400 origin-top"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <SectionReveal key={i} delay={i * 0.15} direction="left">
                <motion.div
                  className="relative pl-12 sm:pl-16 group"
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Timeline dot */}
                  <div
                    className="absolute left-2.5 sm:left-3.5 top-1 w-4 h-4 rounded-full border-2"
                    style={{
                      borderColor: exp.color,
                      boxShadow: `0 0 12px ${exp.color}40`,
                      background: "#050509",
                    }}
                  />

                  {/* Card */}
                  <div className="p-5 sm:p-6 rounded-2xl border border-white/8 bg-white/[0.03] hover:border-white/15 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
                      <span
                        className="text-xs font-mono px-2.5 py-1 rounded-full w-fit"
                        style={{
                          color: exp.color,
                          background: `${exp.color}15`,
                          border: `1px solid ${exp.color}30`,
                        }}
                      >
                        {exp.period}
                      </span>
                      <div>
                        <h3 className="text-lg font-bold text-white">
                          {exp.role}
                        </h3>
                        <p className="text-sm text-zinc-400">{exp.company}</p>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.points.map((point, j) => (
                        <li
                          key={j}
                          className="text-sm text-zinc-400 flex items-start gap-2"
                        >
                          <span
                            className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                            style={{ background: exp.color }}
                          />
                          {point}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-mono px-2 py-0.5 rounded"
                          style={{
                            color: exp.color,
                            background: `${exp.color}10`,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
