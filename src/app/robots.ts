import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

// Open to search engines and AI assistants (GPTBot, OAI-SearchBot, PerplexityBot,
// ClaudeBot, Google-Extended…): being quoted in AI answers is a booking channel.
export default function robots(): MetadataRoute.Robots {
  return {
    // /thank-you/ is not blocked here on purpose: it carries noindex, which crawlers must be able to see.
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
