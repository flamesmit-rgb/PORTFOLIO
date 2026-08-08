import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 py-28 md:py-40">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <SectionHeading
          label="ABOUT"
          title={
            <>
              BEHIND <span className="text-ember">THE EDIT</span>
            </>
          }
        />

        <div className="mt-16 grid items-start gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
          {/* Portrait */}
          <Reveal className="relative lg:sticky lg:top-28">
            <div
              data-cursor="REC"
              className="group relative overflow-hidden rounded-xl border border-line"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/portrait.svg"
                alt="Portrait of Smit Dhandar (placeholder)"
                loading="lazy"
                className="aspect-square w-full object-cover saturate-[0.4] transition-all duration-700 group-hover:scale-[1.02] group-hover:saturate-100 md:aspect-[4/5]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-5 py-4 font-mono text-[10px] uppercase tracking-[0.3em] text-cream/80">
                <span>SMIT DHANDAR</span>
                <span className="flex items-center gap-2 text-smoke">
                  <span className="block size-1.5 rounded-full bg-ember pulse-dot" />
                  REC
                </span>
              </div>
            </div>
          </Reveal>

          {/* Copy */}
          <div>
            <Reveal>
              <h3 className="font-sans text-3xl font-bold uppercase leading-tight tracking-tight text-cream md:text-5xl">
                I&apos;M SMIT. I MAKE
                <br />
                PEOPLE <span className="text-ember">WATCH.</span>
              </h3>
            </Reveal>

            <div className="mt-10 space-y-6 text-base leading-relaxed text-smoke md:text-lg">
              <Reveal delay={0.05}>
                <p>
                  I&apos;m Smit — a video editor focused on turning ideas and raw
                  footage into content people actually want to watch.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p>
                  My work sits somewhere between storytelling, motion design and
                  internet culture. I care about pacing, visual rhythm, sound,
                  transitions and the tiny details that make an edit feel
                  intentional.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <p>
                  I primarily work with short-form content, reels, motion
                  graphics and visual effects.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.2} className="mt-12">
              <div className="flex flex-wrap gap-3">
                {[
                  "AFTER EFFECTS",
                  "PREMIERE PRO",
                  "DAVINCI RESOLVE",
                  "CAPCUT",
                ].map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-line px-4 py-2 font-mono text-[10px] uppercase tracking-[0.3em] text-cream/70 transition-colors duration-300 hover:border-ember hover:text-ember"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <blockquote className="mt-14 border-l-2 border-ember pl-6 font-sans text-xl font-semibold uppercase leading-snug tracking-tight text-cream">
                &ldquo;Good editing is invisible until it makes you feel
                something.&rdquo;
              </blockquote>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}