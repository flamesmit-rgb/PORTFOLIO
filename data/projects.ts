// ==================================================================
// PROJECTS — replace these placeholder projects with your own work.
// `video` is optional; if set, it plays on hover (desktop) or on
// tap (mobile). `link` can point to a case study or external host.
// ==================================================================

export type Project = {
  index: string;
  title: string;
  category: string;
  year: string;
  description: string;
  thumbnail: string;
  video?: string;
  poster?: string;
  link?: string;
  span: "tall" | "wide";
};

export const projects: Project[] = [
  {
    index: "01",
    title: "HIGH RETENTION REELS",
    category: "SHORT-FORM",
    year: "2026",
    description:
      "Fast, retention-first reels built around hooks, pacing and visual rhythm.",
    thumbnail: "/images/work/p01.svg",
    video: "",
    span: "tall",
  },
  {
    index: "02",
    title: "MOTION EXPERIMENTS",
    category: "MOTION GRAPHICS",
    year: "2026",
    description:
      "Typographic and shape-driven motion pieces pushed from sketch to screen.",
    thumbnail: "/images/work/p02.svg",
    video: "",
    span: "wide",
  },
  {
    index: "03",
    title: "SOCIAL CAMPAIGN",
    category: "SOCIAL MEDIA",
    year: "2025",
    description:
      "Multi-asset campaign edits optimized for platform-native viewing.",
    thumbnail: "/images/work/p03.svg",
    video: "",
    span: "tall",
  },
  {
    index: "04",
    title: "VISUAL FX",
    category: "VFX",
    year: "2025",
    description:
      "Compositing, cleanup and effect-driven passes that push footage further.",
    thumbnail: "/images/work/p04.svg",
    video: "",
    span: "wide",
  },
  {
    index: "05",
    title: "CREATOR CONTENT",
    category: "REELS",
    year: "2025",
    description:
      "On-page fast cuts and sound-driven edits built for creator channels.",
    thumbnail: "/images/work/p05.svg",
    video: "",
    span: "tall",
  },
  {
    index: "06",
    title: "EDITING EXPERIMENTS",
    category: "CREATIVE EDITING",
    year: "2024",
    description:
      "A running archive of style tests, transitions and experimental cuts.",
    thumbnail: "/images/work/p06.svg",
    video: "",
    span: "wide",
  },
];