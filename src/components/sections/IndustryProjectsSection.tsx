"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Building2 } from "lucide-react";
import SectionReveal from "@/components/animations/SectionReveal";
import { StaggerContainer, StaggerItem } from "@/components/animations/SectionReveal";
import { industryProjects } from "@/data/portfolio";

function IndustryCard({ project }: { project: typeof industryProjects[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const x = ((e.clientY - centerY) / (rect.height / 2)) * -18;
    const y = ((e.clientX - centerX) / (rect.width / 2)) * 18;
    setRotation({ x, y });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative rounded-2xl border border-white/8 bg-white/[0.03] overflow-hidden hover:border-violet-400/30 transition-colors"
      style={{ perspective: "800px" }}
      animate={{ rotateX: rotation.x, rotateY: rotation.y }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-violet-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

      <div className={`h-28 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative`}>
        <span className="text-4xl">{project.emoji}</span>
        <span className="absolute top-3 left-3 px-2 py-0.5 rounded-full text-[10px] font-mono font-medium bg-black/40 text-zinc-300 backdrop-blur-sm">
          {project.category}
        </span>
        <span className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-violet-500/80 text-white">
          Industry
        </span>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold text-white group-hover:text-violet-400 transition-colors mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-zinc-400 mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-mono px-2 py-0.5 rounded bg-violet-400/10 text-violet-400"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-violet-400 transition-colors"
            style={{ cursor: "pointer" }}
          >
            <ExternalLink size={14} />
            Visit Site
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function IndustryProjectsSection() {
  return (
    <section id="industry-projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionReveal>
          <span className="font-mono text-xs text-violet-400 uppercase tracking-widest">
            Professional Work
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black mt-2 mb-4">
            Industry &amp; <span className="text-gradient-accent">Client Projects</span>
          </h2>
          <p className="text-zinc-400 mb-12 max-w-2xl">
            Enterprise platforms, government portals, and product companies I&apos;ve contributed to professionally.
          </p>
        </SectionReveal>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industryProjects.map((project) => (
            <StaggerItem key={project.title}>
              <IndustryCard project={project} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <SectionReveal>
          <div className="mt-10 flex items-start gap-3 p-4 rounded-xl border border-white/8 bg-white/[0.02]">
            <Building2 size={16} className="text-violet-400 mt-0.5 shrink-0" />
            <p className="text-xs text-zinc-500">
              Industry projects represent professional contributions to client and product companies. Source code is proprietary and not publicly available.
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
