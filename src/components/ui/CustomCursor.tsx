"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { useUIStore } from "@/store/uiStore";

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const cursorLabel = useUIStore((s) => s.cursorLabel);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const ringX = useSpring(cursorX, { damping: 30, stiffness: 180 });
  const ringY = useSpring(cursorY, { damping: 30, stiffness: 180 });

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) return;

    setVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [cursorX, cursorY]);

  if (!visible) return null;

  const hasLabel = cursorLabel !== "";
  const ringSize = hasLabel ? 60 : 36;

  return (
    <>
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          width: hasLabel ? 6 : 10,
          height: hasLabel ? 6 : 10,
          background: "var(--accent)",
          mixBlendMode: "screen",
        }}
        animate={{ scale: hasLabel ? 0.5 : 1 }}
        transition={{ duration: 0.2 }}
      />

      {/* Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] flex items-center justify-center"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          width: ringSize,
          height: ringSize,
          border: "1px solid",
          borderColor: "var(--accent)",
          opacity: 0.6,
        }}
        animate={{ width: ringSize, height: ringSize }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      >
        <AnimatePresence>
          {hasLabel && (
            <motion.span
              key={cursorLabel}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.15 }}
              className="text-[10px] font-mono font-semibold uppercase tracking-wider select-none"
              style={{ color: "var(--accent)" }}
            >
              {cursorLabel}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
