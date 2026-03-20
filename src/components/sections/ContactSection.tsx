"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Package } from "lucide-react";
import SectionReveal from "@/components/animations/SectionReveal";
import MagneticButton from "@/components/ui/MagneticButton";

const contacts = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/prashantsinghmangat",
    hoverColor: "hover:bg-zinc-700/30 hover:border-zinc-500/30",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/prashantsinghmangat/",
    hoverColor: "hover:bg-blue-900/20 hover:border-blue-500/30",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:prashantsinghmangat@gmail.com",
    hoverColor: "hover:bg-violet-900/20 hover:border-violet-500/30",
  },
  {
    icon: Package,
    label: "npm",
    href: "https://www.npmjs.com/package/tracebug-sdk",
    hoverColor: "hover:bg-red-900/20 hover:border-red-500/30",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-radial from-accent/5 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 right-1/4 w-48 h-48 bg-cyan-500/10 rounded-full blur-[80px]" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <SectionReveal>
          <span className="font-mono text-xs text-violet-400 uppercase tracking-widest">
            Get in Touch
          </span>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black mt-4 mb-6 leading-tight">
            Let&apos;s Build{" "}
            <span className="sm:block" />
            <span className="text-gradient-accent">Something</span>{" "}
            <span className="sm:block" />
            Together
          </h2>
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto mb-12">
            Open to senior frontend roles, interesting projects, and exciting
            collaborations. Let&apos;s talk.
          </p>
        </SectionReveal>

        <SectionReveal delay={0.3}>
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {contacts.map((contact) => (
              <MagneticButton key={contact.label}>
                <motion.a
                  href={contact.href}
                  target={contact.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/10 text-sm font-medium text-zinc-300 transition-all ${contact.hoverColor}`}
                  whileHover={{ scale: 1.05 }}
                  style={{ cursor: "pointer" }}
                >
                  <contact.icon size={16} />
                  {contact.label}
                </motion.a>
              </MagneticButton>
            ))}
          </div>
        </SectionReveal>

        {/* Availability badge */}
        <SectionReveal delay={0.4}>
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full glass">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
            </span>
            <span className="text-sm text-zinc-300">
              Available for Senior Frontend roles · India / Remote
            </span>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
