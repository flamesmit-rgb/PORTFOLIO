"use client";

import { useState } from "react";
import { motion } from "motion/react";
import type { Project } from "@/data/projects";
import { EASE } from "@/lib/anim";

type ProjectCardProps = {
  project: Project;
  detailed?: boolean;
};

export default function ProjectCard({
  project,
  detailed = true,
}: ProjectCardProps) {
  const [playing, setPlaying] = useState(false);

  const aspectClass =
    project.span === "tall" ? "aspect-[4/5]" : "aspect-[3/2] sm:aspect-video";

  const enter = () => {
    if (project.video) setPlaying(true);
  };
  const leave = () => setPlaying(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: EASE }}
      data-cursor={project.video ? "PLAY" : "VIEW"}
      className="group relative"
    >
      <div
        onMouseEnter={enter}
        onMouseLeave={leave}
        className="relative overflow-hidden rounded-xl border border-line bg-card"
      >
        {/* Media */}
        <div className={`relative w-full ${aspectClass} overflow-hidden`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.thumbnail}
            alt={project.title}
            loading="lazy"
            className={`absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out ${
              playing ? "scale-105" : "group-hover:scale-[1.06]"
            }`}
          />

          {project.video && playing && (
            <video
              src={project.video}
              poster={project.thumbnail}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="absolute inset-0 h-full w-full object-cover"
            />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-70" />

          {/* category tag */}
          <span className="absolute left-4 top-4 rounded-full border border-cream/20 bg-ink/60 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.3em] text-cream/90 backdrop-blur-sm">
            {project.category}
          </span>

          {/* index */}
          <span className="absolute bottom-4 right-4 font-sans text-5xl font-bold leading-none text-cream/15 transition-colors duration-500 group-hover:text-ember/30">
            {project.index}
          </span>

          {/* mobile play toggle */}
          {project.video && (
            <button
              type="button"
              onClick={() => setPlaying(!playing)}
              aria-label={playing ? `Pause ${project.title}` : `Play ${project.title}`}
              className="absolute bottom-4 left-4 z-10 flex size-11 items-center justify-center rounded-full bg-ember text-white opacity-100 transition-opacity duration-300 md:hidden"
            >
              {playing ? (
                <span className="flex gap-1" aria-hidden>
                  <span className="block h-3 w-0.5 bg-white" />
                  <span className="block h-3 w-0.5 bg-white" />
                </span>
              ) : (
                <svg width="10" height="12" viewBox="0 0 10 12" fill="none" aria-hidden>
                  <path d="M1 1 L9 6 L1 11 Z" fill="#fff" />
                </svg>
              )}
            </button>
          )}
        </div>
      </div>

      {/* Meta */}
      <div className="mt-5 flex items-start justify-between gap-6">
        <div>
          <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-smoke">
            <span>{project.category}</span>
            <span aria-hidden className="text-ember">/</span>
            <span>{project.year}</span>
          </div>
          <h3 className="mt-2.5 font-sans text-xl font-bold uppercase tracking-tight text-cream transition-colors duration-300 group-hover:text-ember md:text-2xl">
            {project.title}
          </h3>
          {detailed && (
            <p className="mt-2 max-w-md text-sm leading-relaxed text-smoke">
              {project.description}
            </p>
          )}
        </div>

        {project.link || project.video ? (
          <a
            href={project.link || project.video || "#work"}
            target={project.link || project.video ? "_blank" : undefined}
            rel={project.link || project.video ? "noreferrer" : undefined}
            aria-label={`Open ${project.title}`}
            data-cursor="VIEW"
            className="mt-1 flex shrink-0 items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-cream/70 transition-colors duration-300 hover:text-ember"
          >
            VIEW PROJECT
            <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        ) : null}
      </div>
    </motion.article>
  );
}