import type { Metadata } from "next";

/**
 * Single source of truth for SEO across ebcmussoorie.com.
 * Every page builds its <head> through `pageMeta` so that title, description,
 * canonical, Open Graph and Twitter tags always agree and always point at the
 * canonical host (https://www.ebcmussoorie.com, trailing slash).
 */
export const SITE_URL = "https://www.ebcmussoorie.com";
export const SITE_NAME = "EBC Mussoorie";
export const DEFAULT_OG_IMAGE = "/og/ebc-mussoorie.jpg";
export const HOME_TITLE = "Luxury Glamping Resort in Mussoorie – EBC Mussoorie";
export const HOME_DESCRIPTION =
  "14 luxury tents, cottages and villas at Park Estate, Hathipaon Road, Mussoorie. Breakfast, bonfire evenings and guided nature walks included with every stay.";

/** Absolute URL on the canonical host, always with a trailing slash for pages. */
export function absoluteUrl(path = "/"): string {
  if (/^https?:\/\//.test(path)) return path;
  const clean = path.startsWith("/") ? path : `/${path}`;
  const hasExtension = /\.[a-z0-9]{2,5}$/i.test(clean);
  const withSlash = hasExtension || clean.endsWith("/") ? clean : `${clean}/`;
  return `${SITE_URL}${encodeURI(withSlash)}`;
}

interface PageMetaInput {
  title: string;
  description: string;
  /** Path of the page, e.g. "/rooms/". */
  path: string;
  /** Social share image (absolute or site-relative). Defaults to the brand image. */
  image?: string;
  /** Set for thank-you / utility pages that should stay out of the index. */
  noindex?: boolean;
  type?: "website" | "article";
}

export function pageMeta({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  noindex = false,
  type = "website",
}: PageMetaInput): Metadata {
  const url = absoluteUrl(path);
  const img = absoluteUrl(image);
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_IN",
      type,
      // Dimensions are only declared for the brand image, whose size we know.
      images: [image === DEFAULT_OG_IMAGE ? { url: img, width: 1200, height: 630, alt: title } : { url: img, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [img],
    },
    robots: noindex
      ? { index: false, follow: true }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
  };
}
