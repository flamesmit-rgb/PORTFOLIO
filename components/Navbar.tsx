"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { site } from "@/data/site";
import { EASE } from "@/lib/anim";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[100] transition-all duration-500 ${
          scrolled
            ? "border-b border-line bg-ink/75 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-6 md:px-10">
          <a
            href="#top"
            onClick={close}
            className="group flex items-center gap-2.5"
            aria-label="SMITXFX — back to top"
          >
            <motion.span
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.5, ease: EASE }}
              className="flex items-center gap-2 font-mono text-sm font-bold uppercase tracking-[0.35em] text-cream"
            >
              SMITXFX
              <span className="block size-1.5 rounded-full bg-ember pulse-dot" />
            </motion.span>
          </a>

          <div className="hidden items-center gap-10 md:flex">
            <motion.span
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.5, ease: EASE }}
              className="mr-2 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-smoke"
            >
              <span className="block size-1.5 rounded-full bg-emerald-500 pulse-dot" />
              OPEN
            </motion.span>
            {site.nav.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 + i * 0.07, duration: 0.5, ease: EASE }}
                className="group relative font-mono text-[11px] font-semibold uppercase tracking-[0.3em] text-cream/80 transition-colors hover:text-cream"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-ember transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="relative flex h-10 w-10 flex-col items-center justify-center gap-[6px] md:hidden"
          >
            <span
              className={`block h-px w-6 bg-cream transition-all duration-300 ${
                open ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-cream transition-all duration-300 ${
                open ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed inset-0 z-[110] flex flex-col bg-ink/95 backdrop-blur-xl md:hidden"
          >
            <div className="mx-auto flex h-16 w-full max-w-[1440px] items-center justify-between px-6">
              <span className="font-mono text-sm uppercase tracking-[0.35em] text-cream">
                SMITXFX
              </span>
              <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-smoke">
                <span className="block size-1.5 rounded-full bg-ember pulse-dot" />
                MENU
              </span>
            </div>

            <div className="flex flex-1 flex-col justify-center gap-2 px-8">
              {site.nav.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={close}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ delay: 0.08 + i * 0.06, duration: 0.4, ease: EASE }}
                  className="group flex items-baseline gap-4 border-b border-line py-6"
                >
                  <span className="font-mono text-xs text-ember">0{i + 1}</span>
                  <span className="font-sans text-[clamp(2rem,9vw,3rem)] font-bold uppercase leading-none tracking-[-0.02em] text-cream transition-colors group-hover:text-ember">
                    {link.label}
                  </span>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="flex items-center justify-between px-8 pb-10 font-mono text-[10px] uppercase tracking-[0.3em] text-smoke"
            >
              <span>{site.contact.location}</span>
              <a href={site.contact.emailHref} onClick={close}>
                EMAIL
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}