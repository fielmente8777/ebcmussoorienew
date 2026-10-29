import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";
import blogData from "./blogs/components/blogData";
import { roomDetailsPageData } from "./rooms/[roomdetails]/components/pageData";
import { GUIDE_DUPLICATE_OF, GUIDE_SLUGS } from "./services/components/guides";

// Indexable pages only: no thank-you page, no placeholder or unverified
// service pages, no duplicate guides, no retired blog slugs.
const STATIC_PATHS = [
  "/",
  "/rooms/",
  "/packages/",
  "/park-cafe/",
  "/den/",
  "/activities/",
  "/family-stays/",
  "/couples-and-honeymoon/",
  "/corporate-and-mice/",
  "/gallery/",
  "/about-us/",
  "/faq/",
  "/contact-us/",
  "/blogs/",
  "/services/",
  "/privacy-policy/",
  "/terms-and-conditions/",
];

const INDEXABLE_SERVICE_PAGES = ["forest-picnic"];

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...STATIC_PATHS,
    ...roomDetailsPageData.map((room) => `/rooms/${room.slug}/`),
    ...blogData.map((post) => `/blogs/${post.slug}/`),
    ...GUIDE_SLUGS.filter((slug) => !GUIDE_DUPLICATE_OF[slug]).map((slug) => `/services/${slug}/`),
    ...INDEXABLE_SERVICE_PAGES.map((slug) => `/services/${slug}/`),
  ];
  return [...new Set(paths)].map((path) => ({ url: absoluteUrl(path) }));
}
