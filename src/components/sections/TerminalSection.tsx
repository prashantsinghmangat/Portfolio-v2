"use client";

import { useState, useRef, useEffect, useCallback, KeyboardEvent } from "react";
import { motion } from "framer-motion";
import SectionReveal from "@/components/animations/SectionReveal";
import { terminalCommands } from "@/data/portfolio";

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

const suggestions = ["about", "projects", "skills", "experience", "contact", "help", "clear"];

export default function TerminalSection() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<TerminalOutput[]>([]);
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [history, scrollToBottom]);

  const runCommand = useCallback(
    (cmd: string) => {
      const trimmed = cmd.trim().toLowerCase();
      if (!trimmed) return;

      setCmdHistory((prev) => [...prev, trimmed]);
      setHistoryIndex(-1);

      if (trimmed === "clear") {
        setHistory([]);
        setInput("");
        return;
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
                text: `Command not found: ${trimmed}. Type 'help' for available commands.`,
                type: "error",
              },
            ],
          },
        ]);
      }
      setInput("");
    },
    []
  );

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      runCommand(input);
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
    }
  };

  return (
    <section id="terminal" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionReveal>
          <span className="font-mono text-xs text-violet-400 uppercase tracking-widest">
            Interactive
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black mt-2 mb-12">
            Developer{" "}
            <span className="text-gradient-accent">Terminal</span>
          </h2>
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <div
            className="rounded-2xl border border-white/10 overflow-hidden hover:border-accent/30 transition-colors duration-500"
            style={{ background: "#0d0d16" }}
          >
            {/* Title bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-xs font-mono text-zinc-500 ml-2">
                prashant@portfolio ~ zsh
              </span>
            </div>

            {/* Output */}
            <div
              ref={outputRef}
              className="p-4 font-mono text-sm max-h-[420px] overflow-y-auto space-y-4"
              onClick={() => inputRef.current?.focus()}
            >
              {/* Welcome message */}
              <div className="space-y-1">
                <p className="text-green-400">
                  Welcome to Prashant&apos;s portfolio terminal!
                </p>
                <p className="text-zinc-500">
                  Type &apos;help&apos; or click a command below to get started.
                </p>
              </div>

              {/* History */}
              {history.map((entry, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">$</span>
                    <span className="text-white">{entry.cmd}</span>
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
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent outline-none text-white font-mono text-sm caret-accent"
                  placeholder="Type a command..."
                  autoComplete="off"
                  spellCheck={false}
                  style={{ cursor: "text" }}
                />
              </div>
            </div>

            {/* Suggestion buttons */}
            <div className="px-4 py-3 border-t border-white/5 flex gap-2 flex-wrap">
              {suggestions.map((cmd) => (
                <button
                  key={cmd}
                  onClick={() => runCommand(cmd)}
                  className="px-3 py-1 rounded-md text-xs font-mono text-zinc-400 border border-white/10 hover:border-accent/40 hover:text-accent transition-all"
                  style={{ cursor: "pointer" }}
                >
                  {cmd}
                </button>
              ))}
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
