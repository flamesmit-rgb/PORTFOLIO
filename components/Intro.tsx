"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { site } from "@/data/site";
import { EASE } from "@/lib/anim";

export default function Intro() {
  const reduced = useReducedMotion();
  const [hidden, setHidden] = useState(false);
  const [unmounted, setUnmounted] = useState(false);

  useEffect(() => {
    if (reduced) {
      const raf = requestAnimationFrame(() => {
        setHidden(true);
        setUnmounted(true);
      });
      return () => cancelAnimationFrame(raf);
    }
    const t1 = window.setTimeout(() => setHidden(true), 1500);
    const t2 = window.setTimeout(() => setUnmounted(true), 2100);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [reduced]);

  if (unmounted) return null;

  const letters = site.name.split("");

  return (
    <motion.div
      aria-hidden
      initial={{ opacity: 1 }}
      animate={{ opacity: hidden ? 0 : 1 }}
      transition={{ duration: 0.4 }}
      className="pointer-events-none fixed inset-0 z-[120] flex items-center justify-center bg-ink"
    >
      <div className="flex items-center gap-1 overflow-hidden">
        {letters.map((letter, i) => (
          <motion.span
            key={i}
            initial={{ y: "120%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.12 + i * 0.05, duration: 0.6, ease: EASE }}
            className="font-sans text-4xl font-bold uppercase tracking-[0.2em] text-cream md:text-5xl"
          >
            {letter}
          </motion.span>
        ))}
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, duration: 0.4, ease: EASE }}
          className="ml-3 block size-2.5 rounded-full bg-ember"
        />
      </div>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.1, duration: 1.1, ease: EASE }}
        className="absolute bottom-10 left-1/2 h-px w-40 -translate-x-1/2 origin-center bg-ember"
      />
    </motion.div>
  );
}