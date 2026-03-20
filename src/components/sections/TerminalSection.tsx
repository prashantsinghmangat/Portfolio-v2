"use client";

import { useState, useRef, useEffect, useCallback, KeyboardEvent } from "react";
import { motion } from "framer-motion";
import SectionReveal from "@/components/animations/SectionReveal";
import { terminalCommands } from "@/data/portfolio";
import { useUIStore, type Theme } from "@/store/uiStore";

interface TerminalOutput {
  cmd: string;
  lines: Array<{ text: string; type: string }>;
}

const typeColors: Record<string, string> = {
  success: "text-green-400",
  info: "text-cyan-400",
  warn: "text-amber-400",
  normal: "text-zinc-400",
  error: "text-red-400",
  header: "text-white font-bold",
};

const ALL_COMMANDS = [
  "about", "whoami", "hire-me", "projects", "skills", "experience", "contact",
  "open github", "open linkedin", "open npm",
  "goto hero", "goto about", "goto projects", "goto skills", "goto experience", "goto contact",
  "theme default", "theme cyberpunk", "theme minimal", "theme matrix",
  "help", "clear",
];

const OPEN_LINKS: Record<string, string> = {
  "open github": "https://github.com/prashantsinghmangat",
  "open linkedin": "https://www.linkedin.com/in/prashantsinghmangat/",
  "open npm": "https://www.npmjs.com/package/tracebug-sdk",
};

const THEME_MAP: Record<string, Theme> = {
  "theme default": "default",
  "theme cyberpunk": "cyberpunk",
  "theme minimal": "minimal",
  "theme matrix": "matrix",
};

const GOTO_MAP: Record<string, string> = {
  "goto hero": "hero",
  "goto about": "about",
  "goto projects": "projects",
  "goto skills": "skills",
  "goto experience": "experience",
  "goto contact": "contact",
};

const QUICK_SUGGESTIONS = ["about", "projects", "skills", "hire-me", "theme cyberpunk", "help", "clear"];

export default function TerminalSection() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<TerminalOutput[]>([]);
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [tabIndex, setTabIndex] = useState(-1);
  const [tabMatches, setTabMatches] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  const { setTheme, setScrollTarget, setCursorLabel } = useUIStore();

  const scrollToBottom = useCallback(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [history, scrollToBottom]);

  const filteredSuggestions = input.trim()
    ? ALL_COMMANDS.filter((c) => c.startsWith(input.toLowerCase()))
    : QUICK_SUGGESTIONS;

  const runCommand = useCallback(
    (cmd: string) => {
      const trimmed = cmd.trim().toLowerCase();
      if (!trimmed) return;

      setCmdHistory((prev) => [...prev, trimmed]);
      setHistoryIndex(-1);
      setTabIndex(-1);
      setTabMatches([]);

      if (trimmed === "clear") {
        setHistory([]);
        setInput("");
        return;
      }

      // Side effects
      if (OPEN_LINKS[trimmed]) {
        window.open(OPEN_LINKS[trimmed], "_blank", "noopener,noreferrer");
      }
      if (THEME_MAP[trimmed]) {
        setTheme(THEME_MAP[trimmed]);
      }
      if (GOTO_MAP[trimmed]) {
        setScrollTarget(GOTO_MAP[trimmed]);
      }

      const command = terminalCommands[trimmed];
      if (command) {
        setHistory((prev) => [...prev, { cmd: trimmed, lines: command.lines }]);
      } else {
        setHistory((prev) => [
          ...prev,
          {
            cmd: trimmed,
            lines: [
              {
                text: `Command not found: '${trimmed}'. Type 'help' for available commands.`,
                type: "error",
              },
            ],
          },
        ]);
      }
      setInput("");
    },
    [setTheme, setScrollTarget]
  );

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      runCommand(input);
    } else if (e.key === "Tab") {
      e.preventDefault();
      const current = input.toLowerCase();
      const matches = ALL_COMMANDS.filter((c) => c.startsWith(current));
      if (matches.length === 0) return;

      if (tabMatches.length === 0 || tabMatches.join() !== matches.join()) {
        setTabMatches(matches);
        setTabIndex(0);
        setInput(matches[0]);
      } else {
        const next = (tabIndex + 1) % matches.length;
        setTabIndex(next);
        setInput(matches[next]);
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (cmdHistory.length > 0) {
        const newIndex =
          historyIndex === -1
            ? cmdHistory.length - 1
            : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(cmdHistory[newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= cmdHistory.length) {
          setHistoryIndex(-1);
          setInput("");
        } else {
          setHistoryIndex(newIndex);
          setInput(cmdHistory[newIndex]);
        }
      }
    } else {
      // Reset tab cycle on other keys
      setTabIndex(-1);
      setTabMatches([]);
    }
  };

  return (
    <section id="terminal" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionReveal>
          <span className="font-mono text-xs uppercase tracking-widest" style={{ color: "var(--accent)" }}>
            Interactive
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black mt-2 mb-12">
            Developer{" "}
            <span className="text-gradient-accent">Terminal</span>
          </h2>
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <div
            className="rounded-2xl overflow-hidden transition-all duration-500"
            style={{
              background: "var(--bg2)",
              border: "1px solid var(--border)",
              boxShadow: "0 0 0 1px var(--border)",
            }}
            onMouseEnter={() => setCursorLabel("Type")}
            onMouseLeave={() => setCursorLabel("")}
          >
            {/* Title bar */}
            <div
              className="flex items-center gap-2 px-4 py-3"
              style={{ borderBottom: "1px solid var(--border)" }}
            >
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-xs font-mono ml-2" style={{ color: "var(--text-muted)" }}>
                prashant@portfolio ~ zsh
              </span>
              <span className="ml-auto text-[10px] font-mono px-2 py-0.5 rounded"
                    style={{ background: "var(--surface)", color: "var(--accent)", border: "1px solid var(--border)" }}>
                Tab: autocomplete
              </span>
            </div>

            {/* Output */}
            <div
              ref={outputRef}
              className="p-4 font-mono text-sm max-h-[420px] overflow-y-auto space-y-4"
              onClick={() => inputRef.current?.focus()}
            >
              {/* Welcome */}
              <div className="space-y-1">
                <p className="text-green-400">Welcome to Prashant&apos;s portfolio terminal!</p>
                <p style={{ color: "var(--text-muted)" }}>
                  Type &apos;help&apos; for all commands, or try &apos;hire-me&apos;.
                </p>
              </div>

              {/* History */}
              {history.map((entry, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">$</span>
                    <span style={{ color: "var(--text)" }}>{entry.cmd}</span>
                  </div>
                  {entry.lines.map((line, j) => (
                    <p
                      key={j}
                      className={typeColors[line.type] || "text-zinc-400"}
                      style={{ whiteSpace: "pre" }}
                    >
                      {line.text}
                    </p>
                  ))}
                </div>
              ))}

              {/* Input line */}
              <div className="flex items-center gap-2">
                <span className="text-green-400">$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => {
                    setInput(e.target.value);
                    setTabIndex(-1);
                    setTabMatches([]);
                  }}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent outline-none font-mono text-sm"
                  style={{ color: "var(--text)", caretColor: "var(--accent)" }}
                  placeholder="Type a command..."
                  autoComplete="off"
                  spellCheck={false}
                />
              </div>
            </div>

            {/* Suggestion buttons */}
            <div
              className="px-4 py-3 flex gap-2 flex-wrap"
              style={{ borderTop: "1px solid var(--border)" }}
            >
              {(filteredSuggestions.length > 0 ? filteredSuggestions : QUICK_SUGGESTIONS)
                .slice(0, 8)
                .map((cmd) => (
                  <motion.button
                    key={cmd}
                    onClick={() => runCommand(cmd)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-3 py-2 sm:py-1 rounded-md text-xs font-mono transition-all min-h-[44px] sm:min-h-0"
                    style={{
                      color: "var(--text-muted)",
                      border: "1px solid var(--border)",
                      background: "transparent",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
                      (e.currentTarget as HTMLElement).style.color = "var(--accent)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                      (e.currentTarget as HTMLElement).style.color = "var(--text-muted)";
                    }}
                  >
                    {cmd}
                  </motion.button>
                ))}
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
