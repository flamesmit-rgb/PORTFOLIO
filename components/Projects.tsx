import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function Projects() {
  return (
    <section id="work" className="scroll-mt-20 py-28 md:py-40">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <SectionHeading
          label="WORK"
          title={
            <>
              SELECTED <span className="text-ember">WORK</span>
            </>
          }
          description="Some of the edits, visuals and experiments I've worked on."
        />

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-12 md:gap-y-20">
          {projects.map((project, i) => {
            const even = i % 2 === 1;
            return (
              <div
                key={project.index}
                className={even ? "lg:col-span-5 lg:pt-24" : "lg:col-span-7"}
              >
                <ProjectCard project={project} />
              </div>
            );
          })}
        </div>
        <Reveal className="mt-12 font-mono text-[10px] uppercase tracking-[0.3em] text-smoke">
          <span className="text-ember">{"//"}</span>THUMBNAILS &amp; VIDEOS —
          replace files in <code className="text-cream">/public/images/work</code> and{" "}
          <code className="text-cream">data/projects.ts</code>
        </Reveal>
      </div>
    </section>
  );
}