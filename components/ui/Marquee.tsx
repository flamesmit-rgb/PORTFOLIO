import { marquee } from "@/data/toolkit";

export default function Marquee() {
  const items = marquee;

  return (
    <div className="relative overflow-hidden border-y border-line py-5 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className="marquee-track flex w-max items-center whitespace-nowrap">
        {[0, 1].map((copy) => (
          <div
            key={copy}
            aria-hidden={copy === 1}
            className="flex items-center pr-2"
          >
            {items.map((item) => (
              <span
                key={`${copy}-${item}`}
                className="flex items-center font-sans text-sm font-semibold uppercase tracking-[0.3em] text-cream/70"
              >
                <span className="px-7">{item}</span>
                <span className="text-ember">/</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}