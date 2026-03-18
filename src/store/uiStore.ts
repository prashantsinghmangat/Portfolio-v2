"use client";

import { create } from "zustand";

interface TerminalEntry {
  cmd: string;
  output: Array<{ text: string; type: string }>;
}

interface UIState {
  cursorVariant: "default" | "hover" | "click";
  activeSection: string;
  navOpen: boolean;
  terminalHistory: TerminalEntry[];
  setCursorVariant: (variant: "default" | "hover" | "click") => void;
  setActiveSection: (section: string) => void;
  setNavOpen: (open: boolean) => void;
  addTerminalEntry: (entry: TerminalEntry) => void;
  clearTerminal: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  cursorVariant: "default",
  activeSection: "hero",
  navOpen: false,
  terminalHistory: [],
  setCursorVariant: (variant) => set({ cursorVariant: variant }),
  setActiveSection: (section) => set({ activeSection: section }),
  setNavOpen: (open) => set({ navOpen: open }),
  addTerminalEntry: (entry) =>
    set((state) => ({
      terminalHistory: [...state.terminalHistory, entry],
    })),
  clearTerminal: () => set({ terminalHistory: [] }),
}));
