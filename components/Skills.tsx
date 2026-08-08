import { software, skillCategories } from "@/data/toolkit";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function Skills() {
  return (
    <section id="toolkit" className="scroll-mt-20 py-28 md:py-40">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <SectionHeading
          label="TOOLS"
          title={
            <>
              MY <span className="text-ember">TOOLKIT</span>
            </>
          }
          description="The software I cut, animate and finish with. No percentages — just the stack."
        />

        {/* Software list */}
        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
          {software.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.06} className="h-full">
              <div
                data-cursor="PRO"
                className="group relative flex h-full flex-col justify-between gap-6 bg-card p-6 transition-colors duration-500 hover:bg-ember/10"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-smoke">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-sm font-bold uppercase leading-snug tracking-tight text-cream">
                  {item.name}
                </h3>
                <span className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-smoke">
                    {item.tag}
                  </span>
                  <span
                    aria-hidden
                    className="block h-1 w-1 rounded-full bg-ember opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Skill categories */}
        <div className="mt-14 flex flex-wrap items-center gap-3">
          {skillCategories.map((cat, i) => (
            <Reveal key={cat} delay={i * 0.05}>
              <span
                data-cursor={cat[0]}
                className="group flex cursor-pointer items-center gap-3 rounded-full border border-line py-2 pl-5 pr-3 font-mono text-[11px] uppercase tracking-[0.25em] text-cream/80 transition-all duration-300 hover:border-ember hover:bg-ember hover:text-white"
              >
                {cat}
                <span
                  aria-hidden
                  className="flex size-6 items-center justify-center rounded-full bg-cream/10 font-mono text-[9px] text-smoke transition-colors duration-300 group-hover:bg-white/20 group-hover:text-white"
                >
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <path d="M1 7 7 1M1 1h6v6" stroke="currentColor" />
                  </svg>
                </span>
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}