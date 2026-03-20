"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import SectionReveal from "@/components/animations/SectionReveal";
import { StaggerContainer, StaggerItem } from "@/components/animations/SectionReveal";
import { projects } from "@/data/portfolio";

function ProjectCard({ project }: { project: typeof projects[0] }) {
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
      className="group relative rounded-2xl border border-white/8 bg-white/[0.03] overflow-hidden hover:border-accent/20 transition-colors"
      style={{
        perspective: "800px",
      }}
      animate={{
        rotateX: rotation.x,
        rotateY: rotation.y,
      }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      {/* Hover glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

      {/* Gradient thumbnail */}
      <div className={`h-32 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative`}>
        <span className="text-4xl">{project.emoji}</span>
        {project.featured && (
          <span className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-accent text-white">
            Featured
          </span>
        )}
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold text-white group-hover:text-accent transition-colors mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-zinc-400 mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-400/10 text-cyan-400"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          {project.github && project.github !== "#" && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors"
              style={{ cursor: "pointer" }}
            >
              <Github size={14} />
              Code
            </a>
          )}
          {project.live && project.live !== "#" && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-accent transition-colors"
              style={{ cursor: "pointer" }}
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionReveal>
          <span className="font-mono text-xs text-violet-400 uppercase tracking-widest">
            Portfolio
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black mt-2 mb-4">
            Personal <span className="text-gradient-accent">Projects</span>
          </h2>
          <p className="text-zinc-400 mb-12 max-w-2xl">
            Open-source and side projects built to explore new technologies and solve real problems.
          </p>
        </SectionReveal>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <StaggerItem key={project.title}>
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
