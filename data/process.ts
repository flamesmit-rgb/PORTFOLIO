// ==================================================================
// CREATIVE PROCESS — the 4 steps shown in the process section.
// ==================================================================

export type ProcessStep = {
  index: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    index: "01",
    title: "UNDERSTAND",
    description: "Understand the idea, audience and objective.",
  },
  {
    index: "02",
    title: "BUILD",
    description: "Structure the footage, pacing and storytelling.",
  },
  {
    index: "03",
    title: "POLISH",
    description: "Add motion, sound design, VFX, transitions and visual details.",
  },
  {
    index: "04",
    title: "DELIVER",
    description: "Export optimized content ready for the platform.",
  },
];