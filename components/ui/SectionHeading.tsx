import type { ReactNode } from "react";
import Reveal from "@/components/ui/Reveal";

type SectionHeadingProps = {
  label: string;
  title: ReactNode;
  description?: string;
  className?: string;
};

export default function SectionHeading({
  label,
  title,
  description,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`${className}`}>
      <Reveal y={18}>
        <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.35em] text-smoke">
          <span className="inline-block size-1.5 rounded-full bg-ember pulse-dot" />
          {label}
        </p>
      </Reveal>
      <Reveal delay={0.06}>
        <h2 className="mt-6 text-[clamp(2rem,6vw,4.5rem)] font-bold uppercase leading-[0.98] tracking-[-0.02em] text-cream">
          {title}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={0.14}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-smoke md:text-lg">
            {description}
          </p>
        </Reveal>
      ) : null}
      <Reveal delay={0.18}>
        <div className="mt-8 h-0.5 w-24 bg-ember transition-all duration-500 hover:w-40" />
      </Reveal>
    </div>
  );
}