import { proof } from "@/data/proof";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function Proof() {
  const showClients = proof.clients.length > 0;
  const showTestimonial = proof.testimonial.quote.length > 0;
  const showStats = proof.stats.length > 0;

  return (
    <section id="proof" className="scroll-mt-20 py-28 md:py-40">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <SectionHeading
          label="SOCIAL PROOF"
          title={
            <>
              BUILT FOR <span className="text-ember">ATTENTION</span>
            </>
          }
          description="Where the work ends up — and what happens when it does."
        />

        <div className="mt-16 space-y-16">
          {showClients && (
            <Reveal>
              <p className="mb-8 font-mono text-[10px] uppercase tracking-[0.4em] text-smoke">
                WORKED WITH
              </p>
              <div className="flex flex-wrap items-center gap-6">
                {proof.clients.map((client) => (
                  <span
                    key={client.name}
                    data-cursor="+"
                    className="group relative flex select-none flex-col gap-1 border border-line bg-card px-8 py-6 transition-all duration-300 hover:border-ember/50 hover:bg-ink-2"
                  >
                    <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-smoke">
                      {client.note}
                    </span>
                    <span className="font-sans text-base font-bold uppercase tracking-tight text-cream transition-colors duration-300 group-hover:text-ember">
                      {client.name}
                    </span>
                  </span>
                ))}
                <span className="w-full font-mono text-[10px] uppercase tracking-[0.3em] text-smoke md:w-auto">
                  <span className="text-ember">{"//"}</span>replace in{" "}
                  <code className="text-cream">data/proof.ts</code>
                </span>
              </div>
            </Reveal>
          )}

          {showStats && (
            <Reveal delay={0.1}>
              <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line lg:grid-cols-4">
                {proof.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col gap-2 bg-card p-8 text-center md:p-10"
                  >
                    <span className="font-sans text-4xl font-bold tracking-tight text-cream md:text-5xl">
                      {stat.value}
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-smoke">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          )}

          {showTestimonial && (
            <Reveal delay={0.15}>
              <figure className="relative overflow-hidden rounded-xl border border-line bg-card p-8 md:p-14">
                <span
                  aria-hidden
                  className="pointer-events-none absolute -left-2 -top-10 font-sans text-[12rem] font-bold leading-none text-ember/10"
                >
                  &rdquo;
                </span>
                <blockquote className="relative max-w-3xl font-sans text-2xl font-semibold leading-snug tracking-tight text-cream md:text-4xl">
                  &ldquo;{proof.testimonial.quote}&rdquo;
                </blockquote>
                <figcaption className="relative mt-8 flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.3em] text-smoke">
                  <span className="size-10 rounded-full bg-ember/20" />
                  <span>
                    <span className="block text-cream">{proof.testimonial.name}</span>
                    {proof.testimonial.role}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}