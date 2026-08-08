import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { asset } from "@/lib/asset";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Smit Dhandar — Video Editor & Motion Designer",
    template: "%s — Smit Dhandar",
  },
  description:
    "Portfolio of Smit Dhandar, a video editor specializing in reels, short-form content, motion graphics and visual effects.",
  keywords: [
    "video editor",
    "reel editor",
    "motion graphics",
    "vfx",
    "short form content",
    "after effects",
    "premiere pro",
    "smit dhandar",
  ],
  authors: [{ name: "Smit Dhandar", url: siteUrl }],
  creator: "Smit Dhandar",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Smit Dhandar — Video Editor & Motion Designer",
    description:
      "Portfolio of Smit Dhandar, a video editor specializing in reels, short-form content, motion graphics and visual effects.",
    siteName: "SMITXFX",
    locale: "en_US",
    images: [{ url: asset("/og.svg"), width: 1200, height: 630, alt: "SMITXFX — Video Editing portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Smit Dhandar — Video Editor & Motion Designer",
    description:
      "Portfolio of Smit Dhandar, a video editor specializing in reels, short-form content, motion graphics and visual effects.",
    images: [asset("/og.svg")],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink text-cream">
        {children}
      </body>
    </html>
  );
}