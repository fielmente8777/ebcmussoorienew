import { MISSING_PUBLIC_IMAGES } from "./missingPublicImages";

/**
 * Returns `src` unless it is a site image known to be missing from /public,
 * in which case `fallback` is returned. Keeps social previews and structured
 * data from advertising images that 404.
 */
export function existingPublicAsset(src: string | undefined, fallback: string): string {
  if (!src) return fallback;
  if (/^https?:\/\//.test(src)) return src;
  return MISSING_PUBLIC_IMAGES.has(src) ? fallback : src;
}
