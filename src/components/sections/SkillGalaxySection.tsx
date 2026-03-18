"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionReveal from "@/components/animations/SectionReveal";
import { StaggerContainer, StaggerItem } from "@/components/animations/SectionReveal";
import StarFieldCanvas from "@/components/animations/StarFieldCanvas";
import { skills, type Skill } from "@/data/portfolio";

type Category = "all" | "frontend" | "backend" | "tools";

const categories: { id: Category; label: string }[] = [
  { id: "all", label: "All" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "tools", label: "Tools" },
];

function SkillCard({ skill }: { skill: Skill }) {
  return (
    <motion.div
      className="group relative p-5 rounded-2xl border border-white/8 bg-white/[0.03] hover:border-accent/30 transition-all duration-300"
      whileHover={{ y: -6, boxShadow: "0 0 30px rgba(124,108,252,0.15)" }}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2.5">
            <span className="text-xl">{skill.icon}</span>
            <span className="font-semibold text-white text-sm">{skill.name}</span>
          </div>
          <span className="text-xs font-mono text-zinc-500">{skill.years} yrs</span>
        </div>

        <div className="relative h-1.5 rounded-full bg-white/5 overflow-hidden">
          <motion.div
            className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-accent to-cyan-400"
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          />
        </div>
        <div className="text-right mt-1.5">
          <span className="text-xs font-mono text-accent">{skill.level}%</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function SkillGalaxySection() {
  const [active, setActive] = useState<Category>("all");

  const filtered =
    active === "all" ? skills : skills.filter((s) => s.category === active);

  return (
    <section id="skills" className="relative py-24 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-radial from-purple-950/30 via-bg to-bg" />
      <StarFieldCanvas />

      <div className="relative z-10 max-w-5xl mx-auto">
        <SectionReveal>
          <span className="font-mono text-xs text-violet-400 uppercase tracking-widest">
            Proficiency
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black mt-2 mb-8">
            Skill <span className="text-gradient-accent">Galaxy</span>
          </h2>
        </SectionReveal>

        {/* Filter pills */}
        <SectionReveal delay={0.1}>
          <div className="flex gap-2 mb-10 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`px-4 py-1.5 rounded-full text-sm font-mono transition-all ${
                  active === cat.id
                    ? "bg-accent text-white"
                    : "border border-white/10 text-zinc-400 hover:border-accent/30 hover:text-white"
                }`}
                style={{ cursor: "pointer" }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </SectionReveal>

        <StaggerContainer
          stagger={0.08}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {filtered.map((skill) => (
            <StaggerItem key={skill.name}>
              <SkillCard skill={skill} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
