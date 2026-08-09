// ==================================================================
// SITE CONFIG — edit this file to update links, contact info,
// and media paths. Everything in the site reads from here.
// ==================================================================

export const site = {
  name: "SMITXFX",
  fullName: "Smit Dhandar",
  role: "VIDEO EDITOR / MOTION DESIGNER",
  displayRole: "Video Editor • Reels • Motion Graphics • VFX",
  tagline:
    "I turn raw footage into fast, engaging and visually-driven content built for attention.",

  hero: {
    headlineA: "EDITING THAT",
    headlineB: "MAKES PEOPLE",
    headlineC: "STOP SCROLLING",
  },

  showreel: {
    // Drop your reel at /public/videos/showreel.mp4, then set
    // hasVideo = true. The poster is used until the video loads.
    src: "/videos/showreel.mp4",
    poster: "/images/showreel-poster.svg",
    hasVideo: false,
    title: "SHOWREEL 2026",
    duration: "01:14",
  },

  // ----------------------------------------------------------------
  //  CONTACT + SOCIAL — replace the placeholder values below.
  // ----------------------------------------------------------------
  contact: {
    email: "smitxfx@gmail.com",
    emailHref: "mailto:smitxfx@gmail.com",
    instagram: "https://www.instagram.com/smitxfx/",
    linkedin: "https://www.linkedin.com/in/smit-dhandar-317669375/",
    location: "PUNE, INDIA",
  },

  nav: [
    { label: "WORK", href: "#work" },
    { label: "ABOUT", href: "#about" },
    { label: "SERVICES", href: "#services" },
    { label: "CONTACT", href: "#contact" },
  ],

  scrollLabel: "SCROLL TO EXPLORE",
} as const;

export type Site = typeof site;