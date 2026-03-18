"use client";

import { useEffect } from "react";
import { useUIStore } from "@/store/uiStore";

export default function ScrollController() {
  const { scrollTarget, setScrollTarget } = useUIStore();

  useEffect(() => {
    if (!scrollTarget) return;
    const el = document.getElementById(scrollTarget);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setScrollTarget(null);
  }, [scrollTarget, setScrollTarget]);

  return null;
}
