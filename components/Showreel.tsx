"use client";

import { useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { site } from "@/data/site";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { EASE } from "@/lib/anim";
import { asset } from "@/lib/asset";

export default function Showreel() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const reduced = useReducedMotion();
  const [playing, setPlaying] = useState<boolean>(site.showreel.hasVideo);
  const [asked, setAsked] = useState(false);

  const hasVideo = site.showreel.src.length > 0;

  const handlePlay = () => {
    setAsked(true);
    if (hasVideo) setPlaying(true);
    if (videoRef.current) videoRef.current.play?.();
  };

  const handlePause = () => {
    setPlaying(false);
    videoRef.current?.pause?.();
  };

  const handleFullscreen = () => {
    const el = videoRef.current;
    if (!el) return;
    if (document.fullscreenElement) document.exitFullscreen();
    else el.requestFullscreen?.();
  };

  return (
    <section id="showreel" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading label="THE REEL" title="SHOWREEL" description="A quick look at what I do." />
          <Reveal delay={0.2} className="hidden font-mono text-[10px] uppercase tracking-[0.3em] text-smoke md:block">
            <span className="text-ember">04</span>:3 · H.264
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-12">
          <div
            data-cursor="PLAY"
            className="group relative aspect-video w-full overflow-hidden rounded-xl border border-line bg-card"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset(site.showreel.poster)}
              alt="Showreel poster placeholder"
              className="absolute inset-0 h-full w-full object-cover opacity-80 transition-all duration-500 group-hover:scale-[1.015] group-hover:opacity-100"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* custom controls */}
            <button
              type="button"
              onClick={handlePlay}
              aria-label={playing ? "Pause showreel" : "Play showreel"}
              className="absolute inset-0 z-10 flex items-center justify-center"
            >
              <motion.span
                animate={reduced ? undefined : { scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="pulse-ring relative flex size-20 items-center justify-center rounded-full border border-cream/30 bg-ink/50 backdrop-blur-sm transition-colors duration-300 group-hover:bg-ember md:size-24"
              >
                {playing ? (
                  <span className="flex gap-1.5" aria-hidden>
                    <span className="block h-6 w-1 bg-white" />
                    <span className="block h-6 w-1 bg-white" />
                  </span>
                ) : (
                  <span aria-hidden className="ml-1 block">
                    <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
                      <path d="M1 1 L15 10 L1 19 Z" fill="#fff" />
                    </svg>
                  </span>
                )}
              </motion.span>
            </button>

            {hasVideo && playing && (
              <video
                ref={videoRef}
                src={asset(site.showreel.src)}
                poster={asset(site.showreel.poster)}
                controls
                autoPlay
                preload="metadata"
                playsInline
                onPause={handlePause}
                className="absolute inset-0 z-20 h-full w-full bg-black"
              />
            )}
          </div>
        </Reveal>

        {!hasVideo && asked && (
          <Reveal delay={0.05}>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="mt-4 border border-line bg-card px-4 py-3 font-mono text-[10px] uppercase tracking-[0.25em] text-smoke"
            >
              <span className="text-ember">{"//"} REEL PLACEHOLDER —</span> drop your
              MP4 at{" "}
              <code className="text-cream">/public/videos/showreel.mp4</code> and
              set <code className="text-cream">hasVideo: true</code> in{" "}
              <code className="text-cream">data/site.ts</code>
            </motion.div>
          </Reveal>
        )}

        <Reveal delay={0.15} className="mt-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-smoke">
          <span>SMITXFX — {site.showreel.title}</span>
          <button
            type="button"
            onClick={handleFullscreen}
            className="flex items-center gap-2 text-cream/70 transition-colors hover:text-ember"
          >
            FULLSCREEN
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path d="M1 5V1h4M13 5V1H9M1 9v4h4M13 9v4H9" stroke="currentColor" />
            </svg>
          </button>
        </Reveal>
      </div>
    </section>
  );
}