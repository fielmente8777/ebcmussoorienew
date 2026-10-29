/**
 * Images referenced by blog, room and guide data that do not exist in /public
 * (checked 30 Oct 2026: none missing). Pages fall back to the brand image for social previews
 * and structured data when an image is listed here. Remove an entry once the
 * file is added. A static list is used instead of reading the filesystem so
 * Vercel does not bundle the whole /public folder into serverless functions.
 */
export const MISSING_PUBLIC_IMAGES = new Set<string>([]);
