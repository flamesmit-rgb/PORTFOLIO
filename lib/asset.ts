// Resolves asset URLs that stay correct when the site is hosted
// under a sub-path (e.g. GitHub Pages: https://user.github.io/PORTFOLIO/).
//
// NEXT_PUBLIC_BASE_PATH is set automatically by the deploy workflow —
// keep it empty when running locally.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  return `${basePath}${path}`;
}