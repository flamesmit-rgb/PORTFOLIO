"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useReducedMotion } from "motion/react";
import { processSteps } from "@/data/process";
import SectionHeading from "@/components/ui/SectionHeading";
import { EASE } from "@/lib/anim";

export default function Process() {
  const listRef = useRef<HTMLDivElement | null>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 70%", "end 55%"],
  });
  const lineScale = useSpring(scrollYProgress, { stiffness: 90, damping: 26, restDelta: 0.001 });

  return (
    <section id="process" className="scroll-mt-20 py-28 md:py-40">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <SectionHeading
          label="PROCESS"
          title={
            <>
              HOW I <span className="text-ember">WORK</span>
            </>
          }
          description="A clean pipeline from idea to shipped cut."
        />

        <div ref={listRef} className="relative mt-16 pl-10 md:pl-0">
          {/* progress rail */}
          {!reduced && (
            <div
              aria-hidden
              className="absolute bottom-6 left-[5px] top-2 hidden w-px bg-cream/10 md:block"
            >
              <motion.div
                style={{ scaleY: lineScale }}
                className="absolute inset-0 origin-top bg-ember"
              />
            </div>
          )}

          <div className="grid gap-2 md:pl-24">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.index}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: EASE }}
                className="group relative border-b border-line py-10 md:py-12"
              >
                {/* rail dot */}
                {!reduced && (
                  <span
                    aria-hidden
                    className="absolute -left-[29px] top-16 hidden size-[11px] -translate-y-1/2 rounded-full border-2 border-ink bg-ember transition-transform duration-300 group-hover:scale-125 md:block"
                  />
                )}

                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-baseline gap-6">
                    <span className="font-mono text-sm font-semibold uppercase tracking-[0.3em] text-ember">
                      {step.index}
                    </span>
                    <h3 className="font-sans text-2xl font-bold uppercase tracking-tight text-cream transition-colors duration-300 group-hover:text-ember md:text-4xl">
                      {step.title}
                    </h3>
                  </div>
                  <p className="max-w-md text-sm leading-relaxed text-smoke md:text-right md:text-base">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}