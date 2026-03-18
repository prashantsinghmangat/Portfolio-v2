"use client";

import { create } from "zustand";

export type Theme = "default" | "cyberpunk" | "minimal" | "matrix";
export type CursorVariant = "default" | "hover" | "click";
export type CursorLabel = "" | "View" | "Open" | "Type" | "Read";

interface TerminalEntry {
  cmd: string;
  output: Array<{ text: string; type: string }>;
}

interface UIState {
  cursorVariant: CursorVariant;
  cursorLabel: CursorLabel;
  activeSection: string;
  navOpen: boolean;
  theme: Theme;
  performanceMode: boolean;
  terminalHistory: TerminalEntry[];
  scrollTarget: string | null;
  setCursorVariant: (variant: CursorVariant) => void;
  setCursorLabel: (label: CursorLabel) => void;
  setActiveSection: (section: string) => void;
  setNavOpen: (open: boolean) => void;
  setTheme: (theme: Theme) => void;
  setPerformanceMode: (mode: boolean) => void;
  addTerminalEntry: (entry: TerminalEntry) => void;
  clearTerminal: () => void;
  setScrollTarget: (target: string | null) => void;
}

export const useUIStore = create<UIState>((set) => ({
  cursorVariant: "default",
  cursorLabel: "",
  activeSection: "hero",
  navOpen: false,
  theme: "default",
  performanceMode: false,
  terminalHistory: [],
  scrollTarget: null,
  setCursorVariant: (variant) => set({ cursorVariant: variant }),
  setCursorLabel: (label) => set({ cursorLabel: label }),
  setActiveSection: (section) => set({ activeSection: section }),
  setNavOpen: (open) => set({ navOpen: open }),
  setTheme: (theme) => set({ theme }),
  setPerformanceMode: (mode) => set({ performanceMode: mode }),
  addTerminalEntry: (entry) =>
    set((state) => ({
      terminalHistory: [...state.terminalHistory, entry],
    })),
  clearTerminal: () => set({ terminalHistory: [] }),
  setScrollTarget: (target) => set({ scrollTarget: target }),
}));
