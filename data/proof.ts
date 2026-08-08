// ==================================================================
// SOCIAL PROOF — placeholders only. Wire in your real data later:
//   clients: actual client names/logos
//   stats:   only real, verifiable numbers (e.g. views edited)
//   testimonial: a real quote from a client
// Leave values empty to hide the block entirely.
// ==================================================================

export type Client = {
  name: string;
  note: string;
};

export const proof = {
  headline: "BUILT FOR ATTENTION.",
  // Keep items to 5–9 for a clean row. Remove all items to hide.
  clients: [
    { name: "CLIENT 01", note: "YOUR CLIENT" },
    { name: "CLIENT 02", note: "YOUR CLIENT" },
    { name: "CLIENT 03", note: "YOUR CLIENT" },
    { name: "CLIENT 04", note: "YOUR CLIENT" },
    { name: "CLIENT 05", note: "YOUR CLIENT" },
    { name: "CLIENT 06", note: "YOUR CLIENT" },
  ] as Client[],

  // Only real, verifiable numbers. "—" as a placeholder value.
  stats: [
    { value: "—", label: "PROJECTS EDITED" },
    { value: "—", label: "REELS DELIVERED" },
    { value: "—", label: "SECONDS OF FOOTAGE" },
    { value: "—", label: "SHOTS CUT" },
    { value: "—", label: "LATE NIGHT EXPORTS" },
  ] as { value: string; label: string }[],

  // Leave quote empty ("") to hide the testimonial block.
  testimonial: {
    quote: "",
    name: "",
    role: "",
  },
} as const;