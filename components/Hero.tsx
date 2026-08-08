"use client";

import { useRef } from "react";
import type { ReactNode } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react";
import { site } from "@/data/site";
import MagneticButton from "@/components/ui/MagneticButton";
import { EASE } from "@/lib/anim";

const BASE_DELAY = 1.62;

function Line({ children, delay }: { children: ReactNode; delay: number }) {
  return (
    <span className="block overflow-hidden pb-[0.08em]">
      <motion.span
        initial={{ y: "115%", rotate: 1.2 }}
        animate={{ y: 0, rotate: 0 }}
        transition={{ delay, duration: 0.9, ease: EASE }}
        className="block will-change-transform"
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement | null>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yHeadline = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : -90]);
  const yReel = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 70]);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pb-28 pt-24"
    >
      {/* red glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[20%] -top-[30%] size-[70rem] rounded-full bg-ember/10 blur-[140px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 vignette"
      />

      <motion.div
        style={{ y: yHeadline, opacity: fade }}
        className="relative z-10 mx-auto w-full max-w-[1440px] px-6 md:px-10"
      >
        <div className="grid items-end gap-14 lg:grid-cols-[1fr_auto]">
          {/* Headline column */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: BASE_DELAY - 0.1, duration: 0.6, ease: EASE }}
              className="mb-8 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.4em] text-smoke"
            >
              <span className="block size-1.5 rounded-full bg-ember pulse-dot" />
              {site.displayRole}
            </motion.p>

            <h1 className="font-sans text-[clamp(2.9rem,10.5vw,9rem)] font-bold uppercase leading-[0.92] tracking-[-0.03em] text-cream">
              <Line delay={BASE_DELAY}>{site.hero.headlineA}</Line>
              <Line delay={BASE_DELAY + 0.12}>{site.hero.headlineB}</Line>
              <Line delay={BASE_DELAY + 0.24}>
                {site.hero.headlineC}
                <span className="text-ember">.</span>
              </Line>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: BASE_DELAY + 0.4, duration: 0.7, ease: EASE }}
              className="mt-8 max-w-md text-base leading-relaxed text-smoke md:text-lg"
            >
              {site.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: BASE_DELAY + 0.5, duration: 0.7, ease: EASE }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <MagneticButton href="#work">
                VIEW MY WORK
                <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </MagneticButton>
              <MagneticButton href="#contact" variant="outline">
                LET&apos;S WORK
              </MagneticButton>
            </motion.div>
          </div>

          {/* Reel card (desktop) */}
          <motion.div
            style={{ y: yReel }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: BASE_DELAY + 0.35, duration: 0.9, ease: EASE }}
            className="relative hidden lg:block"
          >
            <motion.a
              href="#showreel"
              data-cursor="PLAY"
              animate={reduced ? undefined : { y: [0, -10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="group relative block w-[300px] overflow-hidden rounded-xl border border-cream/10"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/showreel-poster.svg"
                alt="Showreel placeholder"
                className="aspect-[9/16] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="pulse-ring relative flex size-16 items-center justify-center rounded-full bg-ember/90">
                  <svg width="16" height="18" viewBox="0 0 16 18" fill="none" aria-hidden>
                    <path d="M1 1 L15 9 L1 17 Z" fill="#fff" />
                  </svg>
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/70 to-transparent px-4 pb-3 pt-10 font-mono text-[10px] uppercase tracking-[0.3em] text-cream/80">
                <span>PLAY REEL</span>
                <span>{site.showreel.duration}</span>
              </div>
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* Timeline motif */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: BASE_DELAY + 0.7, duration: 0.8 }}
        className="absolute inset-x-0 bottom-14 z-10 mx-auto w-full max-w-[1440px] px-6 md:px-10"
      >
        <div className="relative h-[3px] w-full overflow-hidden bg-cream/10">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: BASE_DELAY + 0.8, duration: 1, ease: EASE }}
            className="absolute inset-0 origin-left bg-ember/70"
          />
          <div className="playhead absolute top-1/2 h-2 w-14 -translate-y-1/2 bg-ember" />
        </div>
        <div className="mt-3 flex items-center justify-between">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-smoke">
            VIDEO EDITOR / MOTION DESIGNER
          </span>
          <span className="hidden items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-smoke sm:flex">
            {site.scrollLabel} <span aria-hidden className="animate-bounce">↓</span>
          </span>
        </div>
      </motion.div>
    </section>
  );
}