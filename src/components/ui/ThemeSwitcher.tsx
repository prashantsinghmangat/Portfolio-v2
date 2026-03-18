"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useUIStore, type Theme } from "@/store/uiStore";

const themes: { id: Theme; label: string; color: string; icon: string }[] = [
  { id: "default", label: "Default", color: "#7c6cfc", icon: "◈" },
  { id: "cyberpunk", label: "Cyberpunk", color: "#ff006e", icon: "◉" },
  { id: "minimal", label: "Minimal", color: "#6c47ff", icon: "○" },
  { id: "matrix", label: "Matrix", color: "#00ff41", icon: "▣" },
];

export default function ThemeSwitcher() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme, performanceMode, setPerformanceMode } = useUIStore();

  const current = themes.find((t) => t.id === theme)!;

  return (
    <div className="fixed bottom-6 right-6 z-[9990] flex flex-col items-end gap-2">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="glass rounded-2xl p-3 flex flex-col gap-1 min-w-[160px]"
            style={{ border: "1px solid var(--border)" }}
          >
            <p className="text-[10px] font-mono uppercase tracking-widest px-2 pb-1"
               style={{ color: "var(--text-muted)" }}>
              Theme
            </p>
            {themes.map((t) => (
              <button
                key={t.id}
                onClick={() => { setTheme(t.id); setOpen(false); }}
                className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-sm transition-all hover:bg-white/5"
                style={{
                  color: theme === t.id ? t.color : "var(--text-muted)",
                  fontWeight: theme === t.id ? 600 : 400,
                }}
              >
                <span style={{ color: t.color }}>{t.icon}</span>
                {t.label}
                {theme === t.id && (
                  <span className="ml-auto text-[10px]" style={{ color: t.color }}>✓</span>
                )}
              </button>
            ))}

            <div className="h-px my-1" style={{ background: "var(--border)" }} />

            <button
              onClick={() => setPerformanceMode(!performanceMode)}
              className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-sm transition-all hover:bg-white/5"
              style={{ color: performanceMode ? "var(--accent)" : "var(--text-muted)" }}
            >
              <span>{performanceMode ? "⚡" : "🌀"}</span>
              {performanceMode ? "Perf: ON" : "Perf: OFF"}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen((o) => !o)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="w-11 h-11 rounded-full flex items-center justify-center text-lg glass shadow-lg"
        style={{
          border: `1px solid var(--accent)`,
          boxShadow: `0 0 16px color-mix(in srgb, var(--accent) 25%, transparent)`,
          color: current.color,
        }}
        title="Theme switcher"
      >
        {current.icon}
      </motion.button>
    </div>
  );
}
