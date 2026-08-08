"use client";

import type { ReactNode, MouseEvent } from "react";
import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "motion/react";

type MagneticButtonProps = {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: "solid" | "outline";
  className?: string;
  ariaLabel?: string;
};

export default function MagneticButton({
  href,
  onClick,
  children,
  variant = "solid",
  className = "",
  ariaLabel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement | null>(null);
  const reduced = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 16, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 16, mass: 0.4 });

  const handleMove = (e: MouseEvent<HTMLAnchorElement>) => {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * 0.3);
    y.set((e.clientY - (rect.top + rect.height / 2)) * 0.3);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const base =
    "group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full px-7 py-4 font-mono text-[11px] font-semibold uppercase tracking-[0.3em] transition-colors duration-300";
  const solid =
    "bg-ember text-white hover:bg-[#ff4141]";
  const outline =
    "border border-cream/25 text-cream hover:border-ember hover:text-ember";
  const variants = variant === "solid" ? solid : outline;

  return (
    <motion.a
      ref={ref}
      href={href ?? "#"}
      onClick={() => onClick?.()}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      aria-label={ariaLabel}
      data-cursor="GO"
      style={{ x: sx, y: sy }}
      className={`${base} ${variants} ${className}`}
    >
      <span
        className="pointer-events-none absolute -inset-full bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
      <span className="relative z-10 flex items-center gap-3">{children}</span>
    </motion.a>
  );
}