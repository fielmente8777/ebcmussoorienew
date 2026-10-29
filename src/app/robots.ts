import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

// Open to search engines and AI assistants (GPTBot, OAI-SearchBot, PerplexityBot,
// ClaudeBot, Google-Extended…): being quoted in AI answers is a booking channel.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/thank-you/"] }],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
