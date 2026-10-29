/**
 * Images referenced by blog, room and guide data that do not exist in /public
 * (checked 29 Oct 2026). Pages fall back to the brand image for social previews
 * and structured data when an image is listed here. Remove an entry once the
 * file is added. A static list is used instead of reading the filesystem so
 * Vercel does not bundle the whole /public folder into serverless functions.
 */
export const MISSING_PUBLIC_IMAGES = new Set<string>([
  "/blog/andrews-villa-mussoorie.webp",
  "/blog/best-hill-stations-india.webp",
  "/blog/besttimetovisit.webp",
  "/blog/bird-watching-mussoorie.webp",
  "/blog/easy-treks-mussoorie.webp",
  "/blog/glamping-experience-india.webp",
  "/blog/hill-station-near-delhi.webp",
  "/blog/monsoon-family-trip-uttarakhand.webp",
  "/blog/monsoon-glamping-india.webp",
  "/blog/monsoon-treks-mussoorie.webp",
  "/blog/mussoorie-hiking.webp",
  "/blog/nature-walks-deodar.webp",
  "/blog/thingstodo.webp",
  "/blog/trekking-in-mussoorie.webp",
  "/blog/trekking-mussoorie.webp",
  "/blog/uttarakhand-trip-package.webp",
]);
