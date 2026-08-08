// ==================================================================
// SERVICES — edit the offerings shown in the "WHAT I DO" section.
// ==================================================================

export type Service = {
  index: string;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    index: "01",
    title: "SHORT-FORM EDITING",
    description:
      "Fast-paced, engaging edits designed for Instagram Reels, YouTube Shorts and social-first content.",
  },
  {
    index: "02",
    title: "MOTION GRAPHICS",
    description:
      "Motion-driven visuals, typography, transitions and graphics that make content feel more dynamic.",
  },
  {
    index: "03",
    title: "VISUAL EFFECTS",
    description:
      "Creative VFX and compositing to push ordinary footage into something visually interesting.",
  },
  {
    index: "04",
    title: "SOCIAL MEDIA EDITING",
    description:
      "Content optimized around pacing, hooks, retention and platform-native viewing behavior.",
  },
  {
    index: "05",
    title: "CREATIVE EDITING",
    description:
      "From raw footage to final cut — structure, pacing, sound, visuals and storytelling.",
  },
];