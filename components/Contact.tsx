"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { useRef } from "react";
import { site } from "@/data/site";
import MagneticButton from "@/components/ui/MagneticButton";
import Reveal from "@/components/ui/Reveal";
import { InstagramIcon, LinkedInIcon, MailIcon } from "@/components/icons";

export default function Contact() {
  const ref = useRef<HTMLElement | null>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const yGlow = useTransform(scrollYProgress, [0, 1], [reduced ? 0 : 120, 0]);

  const social = [
    { label: "INSTAGRAM", href: site.contact.instagram, icon: <InstagramIcon /> },
    { label: "LINKEDIN", href: site.contact.linkedin, icon: <LinkedInIcon /> },
    { label: "EMAIL", href: site.contact.emailHref, icon: <MailIcon /> },
  ];

  return (
    <section id="contact" ref={ref} className="scroll-mt-20 relative overflow-hidden py-32 md:py-48">
      {/* red glow */}
      <motion.div
        aria-hidden
        style={{ y: yGlow }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ember/10 blur-[160px]"
      />

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal>
          <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.35em] text-smoke">
            <span className="inline-block size-1.5 rounded-full bg-ember pulse-dot" />
            LET&apos;S TALK
          </p>
        </Reveal>

        <Reveal delay={0.06}>
          <h2 className="mt-8 font-sans text-[clamp(2.4rem,8vw,7rem)] font-bold uppercase leading-[0.95] tracking-[-0.03em] text-cream">
            HAVE SOMETHING
            <br />
            <span className="text-outline">WORTH EDITING?</span>
          </h2>
        </Reveal>

        <Reveal delay={0.14}>
          <p className="mt-8 max-w-lg text-base leading-relaxed text-smoke md:text-xl">
            Let&apos;s turn the raw footage into something people remember.
          </p>
        </Reveal>

        <Reveal delay={0.2} className="mt-12">
          <MagneticButton href={site.contact.emailHref} ariaLabel="Start a project by email">
            START A PROJECT
            <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
          </MagneticButton>
        </Reveal>

        <Reveal delay={0.26}>
          <div className="mt-20 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3">
            {social.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.label === "EMAIL" ? undefined : "_blank"}
                rel={item.label === "EMAIL" ? undefined : "noreferrer"}
                data-cursor="GO"
                className="group flex items-center justify-between gap-4 bg-card p-7 transition-colors duration-500 hover:bg-ember"
              >
                <span className="flex items-center gap-4">
                  <span className="text-cream/70 transition-colors duration-300 group-hover:text-white">
                    {item.icon}
                  </span>
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.3em] text-cream">
                    {item.label}
                  </span>
                </span>
                <span aria-hidden className="text-cream/50 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white">→</span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}