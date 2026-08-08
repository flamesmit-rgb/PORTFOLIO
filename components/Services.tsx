import { services } from "@/data/services";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function Services() {
  return (
    <section id="services" className="scroll-mt-20 py-28 md:py-40">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <SectionHeading
          label="OFFERINGS"
          title={
            <>
              WHAT <span className="text-ember">I DO</span>
            </>
          }
          description="Five ways I help creators and brands hold attention."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.index} delay={(i % 3) * 0.08}>
              <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-xl border border-line bg-card p-7 transition-colors duration-500 hover:border-ember/40">
                {/* ghost number */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-3 -top-8 font-sans text-[7rem] font-bold leading-none text-cream/[0.05] transition-colors duration-500 group-hover:text-ember/10"
                >
                  {service.index}
                </span>

                <span className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.4em] text-smoke">
                  <span className="text-ember">{service.index}</span>
                  <span className="h-px w-8 bg-cream/20" />
                </span>

                <h3 className="mt-16 text-xl font-bold uppercase tracking-tight text-cream md:text-2xl">
                  {service.title}
                </h3>

                <div className="mt-8 flex items-end justify-between gap-4">
                  <p className="max-w-xs text-sm leading-relaxed text-smoke">
                    {service.description}
                  </p>
                  <span
                    aria-hidden
                    className="mb-1 block h-px w-8 translate-x-0 bg-ember opacity-40 transition-all duration-500 group-hover:w-14 group-hover:opacity-100"
                  />
                </div>
              </div>
            </Reveal>
          ))}

          {/* fifth + filler card to balance the grid */}
          <Reveal delay={0.16}>
            <a
              href="#contact"
              data-cursor="GO"
              className="group relative flex h-full flex-col items-center justify-center gap-3 overflow-hidden rounded-xl border border-dashed border-cream/15 bg-ink-2 p-7 text-center transition-colors duration-500 hover:border-ember/50"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.4em] text-smoke">
                NEED SOMETHING LIKE THIS?
              </span>
              <span className="font-sans text-lg font-bold uppercase text-ember">
                TALK TO ME
              </span>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-ember/5 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}