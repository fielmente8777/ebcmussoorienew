import { existsSync } from "fs";
import path from "path";

/**
 * Returns `src` if it is a remote URL or a file that exists in /public,
 * otherwise `fallback`. Used at build time so social previews and structured
 * data never advertise an image that 404s.
 */
export function existingPublicAsset(src: string | undefined, fallback: string): string {
  if (!src) return fallback;
  if (/^https?:\/\//.test(src)) return src;
  return existsSync(path.join(process.cwd(), "public", decodeURI(src))) ? src : fallback;
}
