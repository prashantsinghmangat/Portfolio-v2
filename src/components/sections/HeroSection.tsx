"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import ParticleCanvas from "@/components/animations/ParticleCanvas";
import MagneticButton from "@/components/ui/MagneticButton";
import { personalInfo } from "@/data/portfolio";

function useCountUp(target: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const step = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
}

function TypingAnimation({ strings }: { strings: readonly string[] }) {
  const [stringIndex, setStringIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = strings[stringIndex];
    let timeout: NodeJS.Timeout;

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), 60);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), 30);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setStringIndex((i) => (i + 1) % strings.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, stringIndex, strings]);

  return (
    <span className="text-gradient-accent">
      {strings[stringIndex].slice(0, charIndex)}
      <span className="animate-pulse text-accent">|</span>
    </span>
  );
}

export default function HeroSection() {
  const stats = personalInfo.stats.map((stat) => ({
    ...stat,
    ...useCountUp(stat.value),
  }));

  const floatingTechs = personalInfo.floatingTechs;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Particle Background */}
      <ParticleCanvas />

      {/* Radial glow overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-accent/5 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-sm font-mono text-zinc-300">
            Senior Frontend Architect · Full Stack Developer
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="font-display font-black text-5xl sm:text-7xl md:text-8xl leading-none mb-6 text-gradient"
        >
          {personalInfo.name}
        </motion.h1>

        {/* Typing */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-xl sm:text-2xl md:text-3xl font-sans font-light mb-10 h-10"
        >
          <span className="text-zinc-400">I build </span>
          <TypingAnimation strings={personalInfo.typingStrings} />
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex justify-center gap-8 sm:gap-16 mb-12"
        >
          {stats.map((stat) => (
            <div key={stat.label} ref={stat.ref} className="text-center">
              <div className="text-3xl sm:text-4xl font-display font-black text-gradient-accent">
                {stat.count}
                {stat.suffix}
              </div>
              <div className="text-xs sm:text-sm text-zinc-500 font-mono mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex justify-center gap-4 flex-wrap"
        >
          <MagneticButton>
            <a
              href="#projects"
              className="inline-flex items-center px-7 py-3.5 rounded-full bg-gradient-to-r from-accent to-cyan-500 text-white font-semibold text-sm transition-all hover:shadow-lg hover:shadow-accent/25"
            >
              View Projects
            </a>
          </MagneticButton>
          <MagneticButton>
            <a
              href="#contact"
              className="inline-flex items-center px-7 py-3.5 rounded-full border border-white/15 text-white font-semibold text-sm hover:bg-white/5 transition-all"
            >
              Contact Me
            </a>
          </MagneticButton>
        </motion.div>

        {/* Floating tech labels */}
        <div className="absolute inset-0 pointer-events-none hidden lg:block">
          {floatingTechs.map((tech, i) => {
            const positions = [
              { top: "15%", left: "8%" },
              { top: "25%", right: "6%" },
              { top: "60%", left: "5%" },
              { top: "70%", right: "8%" },
              { top: "45%", left: "12%" },
            ];
            const pos = positions[i];
            return (
              <motion.span
                key={tech}
                className="absolute px-3 py-1.5 rounded-full glass text-xs font-mono text-zinc-400"
                style={pos}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3,
                }}
              >
                {tech}
              </motion.span>
            );
          })}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-xs font-mono text-zinc-500">scroll</span>
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-accent to-transparent"
          animate={{ scaleY: [1, 0.5, 1], opacity: [1, 0.3, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
}
