"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "motion/react";

export default function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const reduced = useReducedMotion();

  const springConfig = reduced
    ? { stiffness: 50, damping: 20, mass: 0.2 }
    : { stiffness: 600, damping: 45, mass: 0.4 };

  const sx = useSpring(x, springConfig);
  const sy = useSpring(y, springConfig);

  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [label, setLabel] = useState("");

  useEffect(() => {
    const fine = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    ).matches;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (!fine || reducedMotion) return;

    const raf = requestAnimationFrame(() => setEnabled(true));
    document.body.classList.add("has-cursor");

    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    };

    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const el = target?.closest?.("[data-cursor]") as HTMLElement | null;
      if (el) {
        setLabel(el.dataset.cursor || "VIEW");
      } else {
        setLabel("");
      }
    };

    const leave = () => setVisible(false);

    window.addEventListener("pointermove", move);
    window.addEventListener("mouseover", over);
    document.documentElement.addEventListener("mouseleave", leave);

    return () => {
      document.body.classList.remove("has-cursor");
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("mouseover", over);
      document.documentElement.removeEventListener("mouseleave", leave);
    };
  }, [x, y, reduced]);

  if (!enabled) return null;

  const expanded = label.length > 0;

  return (
    <>
      <motion.div
        aria-hidden
        style={{ x: sx, y: sy, opacity: visible ? 1 : 0 }}
        className="pointer-events-none fixed left-0 top-0 z-[95]"
      >
        <div className="h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ember" />
      </motion.div>

      <motion.div
        aria-hidden
        style={{ x: sx, y: sy, opacity: visible ? 1 : 0 }}
        className="pointer-events-none fixed left-0 top-0 z-[94]"
      >
        <motion.div
          animate={{
            width: expanded ? 76 : 40,
            height: expanded ? 76 : 40,
            backgroundColor: expanded
              ? "rgba(255,43,43,0.92)"
              : "rgba(255,255,255,0.02)",
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="-translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full border border-cream/20 backdrop-blur-[2px]"
        >
          <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-white">
            {expanded ? label : ""}
          </span>
        </motion.div>
      </motion.div>
    </>
  );
}