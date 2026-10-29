import { GUIDE_SEO_TITLES, withBrand } from "@/lib/seoTitles";
import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE, absoluteUrl, pageMeta } from "@/lib/seo";
import { existingPublicAsset } from "@/lib/publicAsset";
import { blogPostingSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";

/** Every static guide under /services/<slug>/ (kept in sync with the folders). */
export const GUIDE_SLUGS = [
  "adventure-camping-near-dehradun",
  "best-family-resort-near-delhi-monsoon",
  "best-glamping-in-uttarakhand",
  "best-resort-in-mussoorie",
  "best-resort-near-dehradun-for-weekend",
  "bird-watching-resort-uttarakhand",
  "bonfire-experience-resort-hills-india",
  "business-retreat-venue-uttarakhand",
  "camping-in-mussoorie",
  "corporate-offsite-mussoorie",
  "corporate-offsite-uttarakhand",
  "corporate-retreat-near-dehradun",
  "corporate-stay-in-uttarakhand",
  "couple-resort-mussoorie-monsoon",
  "couples-resort-mussoorie",
  "deodar-forest-resort-mussoorie",
  "digital-detox-retreat-near-delhi",
  "family-friendly-glamping-mussoorie",
  "family-resort-near-mussoorie",
  "family-vacation-mussoorie-monsoon",
  "forest-resort-near-dehradun",
  "glamping-near-dehradun",
  "glamping-near-delhi",
  "glamping-near-mussoorie",
  "glamping-tent-monsoon-experience",
  "hathipaon-road-resort-mussoorie",
  "honeymoon-in-mussoorie-monsoon",
  "honeymoon-resort-mussoorie",
  "honeymoon-resorts-in-mussoorie",
  "luxury-camping-mussoorie",
  "luxury-cottage-mussoorie",
  "luxury-cottage-near-mussoorie-with-view",
  "luxury-private-villa-mussoorie",
  "luxury-resort-in-mussoorie",
  "luxury-resort-mussoorie",
  "luxury-tent-stay-monsoon-india",
  "mice-resort-near-delhi-hills",
  "misty-resort-near-mussoorie",
  "monsoon-glamping-near-dehradun",
  "mussoorie-resort-with-mountain-view",
  "mussoorie-trip-package-from-delhi",
  "nature-resort-near-mussoorie",
  "nature-retreat-near-dehradun",
  "peaceful-resort-in-uttarakhand-mountains",
  "pre-monsoon-getaway-from-delhi",
  "private-villa-stay-near-dehradun",
  "resort-near-mussoorie-with-bonfire",
  "resort-with-bonfire-near-dehradun",
  "resort-with-mountain-view-uttarakhand",
  "resort-with-rain-view-mussoorie",
  "romantic-glamping-stay-mussoorie",
  "romantic-monsoon-getaway-india",
  "stargazing-resort-near-delhi",
  "team-building-retreat-monsoon-india",
  "team-outing-near-dehradun",
  "weekend-getaway-from-delhi-mountains",
  "weekend-trip-from-delhi-mountains",
] as const;

/**
 * Guides whose body is a copy of another guide. They keep working for visitors
 * but tell search engines the original is the canonical version, and they are
 * left out of the sitemap.
 */
export const GUIDE_DUPLICATE_OF: Record<string, string> = {
  "luxury-cottage-near-mussoorie-with-view": "private-villa-stay-near-dehradun",
  "glamping-near-delhi": "weekend-getaway-from-delhi-mountains",
};

export function guideMeta(slug: string, meta: { title: string; description: string }): Metadata {
  const title = GUIDE_SEO_TITLES[slug] ? withBrand(GUIDE_SEO_TITLES[slug]) : meta.title;
  const base = pageMeta({ title, description: meta.description, path: `/services/${slug}/`, type: "article" });
  const original = GUIDE_DUPLICATE_OF[slug];
  if (!original) return base;
  const canonical = absoluteUrl(`/services/${original}/`);
  return { ...base, alternates: { canonical }, openGraph: { ...base.openGraph, url: canonical } };
}

/** Date the guide copy was last revised (readability and fact pass). */
export const GUIDES_UPDATED = "2026-10-30";

/** Article + breadcrumb (+ FAQ when the guide has one) schema for a guide page. */
export function guideSchema(
  slug: string,
  data: { metaData: { title: string; description: string }; banner?: { title?: string; image?: string }; faqs?: { question: string; answer: string }[] }
) {
  const path = `/services/${GUIDE_DUPLICATE_OF[slug] ?? slug}/`;
  const headline = data.metaData.title.replace(/\s*\|\s*EBC Mussoorie\s*$/, "");
  return [
    blogPostingSchema({
      title: headline,
      description: data.metaData.description,
      path,
      image: existingPublicAsset(data.banner?.image, DEFAULT_OG_IMAGE),
      dateModified: GUIDE_DUPLICATE_OF[slug] ? undefined : GUIDES_UPDATED,
    }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Travel Guides", path: "/services/" },
      { name: headline, path: `/services/${slug}/` },
    ]),
    ...(data.faqs?.length ? [faqSchema(data.faqs)] : []),
  ];
}

export const GUIDE_CATEGORIES = [
  "Where to stay",
  "Couples & honeymoon",
  "Families",
  "Corporate & groups",
  "Nature & experiences",
  "Monsoon season",
  "Getaways from Delhi & Dehradun",
] as const;

/** Listing data for the /services/ guide hub (duplicates excluded). Generated from each guide's metadata. */
export const GUIDE_INDEX: { slug: string; title: string; description: string; category: (typeof GUIDE_CATEGORIES)[number] }[] = [
  {
    "slug": "forest-picnic",
    "title": "Forest Picnic at EBC Mussoorie",
    "description": "A private forest picnic experience on Hathipaon Road with warm service, local flavours, and nature views.",
    "category": "Nature & experiences"
  },
  {
    "slug": "adventure-camping-near-dehradun",
    "title": "Adventure Camping Near Dehradun: The Activity-First Guide for Outdoor Travellers",
    "description": "Adventure camping near Dehradun means treks, rappelling, cycling and rafting from a hill base. Trail picks, a two-night plan, packing and safety tips.",
    "category": "Nature & experiences"
  },
  {
    "slug": "best-family-resort-near-delhi-monsoon",
    "title": "Best Family Resort Near Delhi in Monsoon: How to Choose When the Weather Is a Variable",
    "description": "The best monsoon family resort near Delhi gives you space, safe grounds, food on site and a plan for rain. Five tests, and how Mussoorie measures up.",
    "category": "Families"
  },
  {
    "slug": "best-glamping-in-uttarakhand",
    "title": "Best Glamping in Uttarakhand: A Region-by-Region Guide for Serious Travellers",
    "description": "The best glamping in Uttarakhand depends on the region. Garhwal, Kumaon, Rishikesh and the high Himalaya: what each offers and how to pick one.",
    "category": "Where to stay"
  },
  {
    "slug": "best-resort-in-mussoorie",
    "title": "How to Choose the Best Resort in Mussoorie for Your Trip",
    "description": "Choose the best resort in Mussoorie by matching it to your trip. Resort types, location, inclusions and tips for couples, families and groups.",
    "category": "Where to stay"
  },
  {
    "slug": "best-resort-near-dehradun-for-weekend",
    "title": "Best Resort Near Dehradun for Weekend: Why Everest Base Camp Mussoorie Answers the Search",
    "description": "For a weekend from Dehradun, EBC Mussoorie is 35 km up the hill: forest tents and cottages, bonfires and trails. Here is the plan, season by season.",
    "category": "Getaways from Delhi & Dehradun"
  },
  {
    "slug": "bird-watching-resort-uttarakhand",
    "title": "Bird Watching Resort in Uttarakhand: A Serious Birder's Guide to the State's Best Stays",
    "description": "The best bird watching resort in Uttarakhand puts you in good forest at first light. Zones, key species, seasons, and what makes a stay birder-friendly.",
    "category": "Nature & experiences"
  },
  {
    "slug": "bonfire-experience-resort-hills-india",
    "title": "Bonfire Experience at a Resort in the Hills of India: What Makes It Worth Planning Around",
    "description": "A great hill resort bonfire needs cold air, deep forest and a quiet estate. What sets it apart, the best regions in India, and how to pick the right stay.",
    "category": "Nature & experiences"
  },
  {
    "slug": "business-retreat-venue-uttarakhand",
    "title": "Business Retreat Venue in Uttarakhand: A Selection Framework for Decision Makers",
    "description": "Pick a business retreat venue in Uttarakhand in four steps: capacity, setting, infrastructure and access. Plus the checklist to get in writing first.",
    "category": "Corporate & groups"
  },
  {
    "slug": "camping-in-mussoorie",
    "title": "Camping in Mussoorie: What to Know Before You Book a Site",
    "description": "Camping in Mussoorie comes in three forms: basic tents, operator camps and glamping. Compare seasons, packing and family fit before you book a site.",
    "category": "Where to stay"
  },
  {
    "slug": "corporate-offsite-mussoorie",
    "title": "Corporate Offsite in Mussoorie: A Practical Planner's Guide to Getting It Right",
    "description": "Plan a corporate offsite in Mussoorie: how to choose a property, build a two-night agenda, estimate costs and avoid the mistakes planners make most.",
    "category": "Corporate & groups"
  },
  {
    "slug": "corporate-offsite-uttarakhand",
    "title": "Corporate Offsite in Uttarakhand: A State-Wide Guide to Choosing the Right Venue",
    "description": "Plan a corporate offsite in Uttarakhand by goal, not map. Compare four zones, from the Mussoorie ridge to Rishikesh, and what to confirm before you commit.",
    "category": "Corporate & groups"
  },
  {
    "slug": "corporate-retreat-near-dehradun",
    "title": "Corporate Retreat Near Dehradun: Why More Companies Are Skipping the Hotel Conference Room",
    "description": "Plan a corporate retreat near Dehradun: why the hills work better, what to look for in a property, likely costs and how to shape a productive offsite.",
    "category": "Corporate & groups"
  },
  {
    "slug": "corporate-stay-in-uttarakhand",
    "title": "Corporate Stay in Uttarakhand: The Complete Zone-by-Zone Guide for Companies Planning Offsites",
    "description": "Match your team's goal to the right corporate stay in Uttarakhand. A zone-by-zone guide to Mussoorie, Rishikesh, Corbett and Lansdowne for offsites.",
    "category": "Corporate & groups"
  },
  {
    "slug": "couple-resort-mussoorie-monsoon",
    "title": "Couple Resort in Mussoorie During Monsoon: Why the Off-Season Is the Better Season for Two",
    "description": "A couple's monsoon stay in Mussoorie gives you more privacy, mist in the deodars and a quieter resort than May. How to choose the room and plan the days.",
    "category": "Couples & honeymoon"
  },
  {
    "slug": "couples-resort-mussoorie",
    "title": "More Than a Romantic View: Finding a Couples Resort in Mussoorie That Delivers",
    "description": "The right couples resort in Mussoorie gets three things right: privacy, setting and evenings on site. What to look for beyond the view, and when to go.",
    "category": "Couples & honeymoon"
  },
  {
    "slug": "deodar-forest-resort-mussoorie",
    "title": "Staying in a Deodar Forest Resort in Mussoorie: What the Trees Actually Change About Your Trip",
    "description": "A deodar forest resort in Mussoorie changes the light, the scent and the birdsong of your stay. Where the best forest is, and how to spot the real thing.",
    "category": "Nature & experiences"
  },
  {
    "slug": "digital-detox-retreat-near-delhi",
    "title": "Why a Digital Detox Retreat Near Delhi Is Not What You Think (And Where to Find a Real One)",
    "description": "A real digital detox retreat near Delhi is built into the place, not the rules. See what sets one apart, where to go, and how to prepare for it.",
    "category": "Nature & experiences"
  },
  {
    "slug": "family-friendly-glamping-mussoorie",
    "title": "Family Friendly Glamping in Mussoorie: What Parents Should Know Before Booking",
    "description": "Family friendly glamping in Mussoorie, explained: what makes it work for children, which room fits your family, and what to check before you book.",
    "category": "Families"
  },
  {
    "slug": "family-resort-near-mussoorie",
    "title": "A Family Resort Near Mussoorie That Works for Everyone, Including the Kids",
    "description": "How to choose a family resort near Mussoorie: space, activities, safe terrain and good facilities, and why glamping suits mixed-age family groups.",
    "category": "Families"
  },
  {
    "slug": "family-vacation-mussoorie-monsoon",
    "title": "Family Vacation in Mussoorie During Monsoon: An Honest Planning Guide for Parents",
    "description": "Planning a family vacation in Mussoorie in the monsoon? How to set expectations, pick the right stay, and plan a rainy-season trip that works for all.",
    "category": "Families"
  },
  {
    "slug": "forest-resort-near-dehradun",
    "title": "Inside the Forest: What Staying at a Forest Resort Near Dehradun Feels Like",
    "description": "What a forest resort near Dehradun feels like: the three forest zones around the city, what a good stay offers, and what to expect in the deodar belt.",
    "category": "Nature & experiences"
  },
  {
    "slug": "glamping-near-dehradun",
    "title": "Glamping Near Dehradun: The Mountain Escape You Can Reach Before Lunch",
    "description": "Glamping near Dehradun: distances, the best ridges to stay on, season tips, and why the Mussoorie ridge is the easiest mountain escape from the city.",
    "category": "Getaways from Delhi & Dehradun"
  },
  {
    "slug": "glamping-near-mussoorie",
    "title": "Glamping Near Mussoorie: The Short List of What to Know Before You Book",
    "description": "Glamping near Mussoorie, the short list: where the best sites are, the terrain, what good stays offer, and how to read a listing before you book.",
    "category": "Where to stay"
  },
  {
    "slug": "glamping-tent-monsoon-experience",
    "title": "The Glamping Tent Monsoon Experience: What It Actually Feels Like and How to Have the Best Version of It",
    "description": "The glamping tent monsoon experience: rain on canvas, misty dawns, a bonfire after the rain, and how to choose a stay that is fully monsoon-ready.",
    "category": "Monsoon season"
  },
  {
    "slug": "hathipaon-road-resort-mussoorie",
    "title": "Hathipaon Road Resort in Mussoorie: Why This Quiet Corner of the Hill Station Has the Best Stays",
    "description": "Hathipaon Road is Mussoorie's quiet western ridge: old deodar forest, open valley views and the calmest resort stays in town. What to know before you book.",
    "category": "Where to stay"
  },
  {
    "slug": "honeymoon-in-mussoorie-monsoon",
    "title": "Honeymoon in Mussoorie During Monsoon: What to Expect, What to Plan, and Why It Works",
    "description": "A monsoon honeymoon in Mussoorie: what to expect, how to pick the right stay, how to plan around the rain, and why the quiet season feels more intimate.",
    "category": "Couples & honeymoon"
  },
  {
    "slug": "honeymoon-resort-mussoorie",
    "title": "Honeymoon Resort in Mussoorie: What Couples Actually Remember After the Trip",
    "description": "How to choose a honeymoon resort in Mussoorie: what makes a stay memorable, what to look for, what to ask, and why glamping suits couples so well.",
    "category": "Couples & honeymoon"
  },
  {
    "slug": "honeymoon-resorts-in-mussoorie",
    "title": "Honeymoon Resorts in Mussoorie: A Practical Guide to Choosing the Right Property for Your Stay",
    "description": "Honeymoon resorts in Mussoorie compared: heritage hotels, boutique stays and forest glamping. What each offers, what to ask, and when to go.",
    "category": "Couples & honeymoon"
  },
  {
    "slug": "luxury-camping-mussoorie",
    "title": "Luxury Camping in Mussoorie: Separating What Is Real From What Is Marketing",
    "description": "How to spot real luxury camping in Mussoorie: what to look for, the red flags, what should be included, and how to check it all before you book.",
    "category": "Where to stay"
  },
  {
    "slug": "luxury-cottage-mussoorie",
    "title": "Luxury Cottage in Mussoorie: Why the Format Still Wins for the Right Traveller",
    "description": "Luxury cottages in Mussoorie explained: what sets them apart, who should pick one over a tent, and what to check before you book your stay.",
    "category": "Where to stay"
  },
  {
    "slug": "luxury-private-villa-mussoorie",
    "title": "The Case for a Luxury Private Villa in Mussoorie Over a Hotel (And How to Find the Right One)",
    "description": "How to choose a luxury private villa in Mussoorie: what a villa gives you that a hotel cannot, what to look for, and the questions to ask before you book.",
    "category": "Where to stay"
  },
  {
    "slug": "luxury-resort-in-mussoorie",
    "title": "What Staying at a Luxury Resort in Mussoorie Actually Feels Like",
    "description": "An honest look at luxury resorts in Mussoorie: what real luxury feels like in the hills, what to look for, and why glamping is changing what premium means.",
    "category": "Where to stay"
  },
  {
    "slug": "luxury-resort-mussoorie",
    "title": "Luxury Resort in Mussoorie: How to Choose the Right Property for Your Stay",
    "description": "How to choose a luxury resort in Mussoorie: the main types of stay, where to be on the ridge, what should be included and what to check beyond the marketing.",
    "category": "Where to stay"
  },
  {
    "slug": "luxury-tent-stay-monsoon-india",
    "title": "Luxury Tent Stay in Monsoon India: What Separates an Exceptional Experience from a Wet Disappointment",
    "description": "A luxury tent stays dry in the monsoon if the floor is raised, the canvas is treated and the bath is attached. Here is what to check and where it works best.",
    "category": "Monsoon season"
  },
  {
    "slug": "mice-resort-near-delhi-hills",
    "title": "MICE Resort Near Delhi Hills: How to Choose the Right Venue When the Stakes Are High",
    "description": "Match the venue to the format. Hill resorts near Delhi suit meetings and incentive trips best. Here’s how to judge rooms, Wi-Fi, food and costs before you book.",
    "category": "Corporate & groups"
  },
  {
    "slug": "misty-resort-near-mussoorie",
    "title": "Misty Resort Near Mussoorie: What Mist Does to the Hill Station and Where to Experience It Best",
    "description": "For real forest mist near Mussoorie, stay high on the ridge in deodar forest and be out by 7 AM. Here is when mist comes, where it is best and what to look for.",
    "category": "Nature & experiences"
  },
  {
    "slug": "monsoon-glamping-near-dehradun",
    "title": "Monsoon Glamping Near Dehradun: What Works & What to Expect",
    "description": "Monsoon glamping near Dehradun works when rooms are weather-proofed and you plan around the rain. What to look for, how to plan a weekend and what to expect.",
    "category": "Monsoon season"
  },
  {
    "slug": "mussoorie-resort-with-mountain-view",
    "title": "Mussoorie Resort With Mountain View: What Is Actually Visible, and When",
    "description": "From Mussoorie you can see Bandarpunch and, on clear autumn days, Kedarnath and the Gangotri peaks. Which peaks, when, and how to check a resort's view claim.",
    "category": "Where to stay"
  },
  {
    "slug": "mussoorie-trip-package-from-delhi",
    "title": "Planning a Mussoorie Trip Package from Delhi: The Complete Breakdown",
    "description": "Mussoorie is about 280 km from Delhi, 5.5 to 6.5 hours by road. What trip packages include, what to check before you pay, and a two-night plan that works.",
    "category": "Getaways from Delhi & Dehradun"
  },
  {
    "slug": "nature-resort-near-mussoorie",
    "title": "The Natural World Around Mussoorie: What a Nature Resort Here Actually Gives You",
    "description": "A true nature resort near Mussoorie puts you inside oak, rhododendron and deodar forest with a guide. Forest types, birds, and what to ask before you book.",
    "category": "Nature & experiences"
  },
  {
    "slug": "nature-retreat-near-dehradun",
    "title": "Nature Retreat Near Dehradun: A Destination-by-Destination Guide to Getting It Right",
    "description": "Near Dehradun you can choose a forest, river, meadow or wildlife retreat. Here is what each one offers, where to find it, and how to match it to your trip.",
    "category": "Nature & experiences"
  },
  {
    "slug": "peaceful-resort-in-uttarakhand-mountains",
    "title": "Peaceful Resort in the Uttarakhand Mountains: A Practical Guide to Finding Quiet That Lasts",
    "description": "Find real quiet in the Uttarakhand mountains: what makes a resort peaceful, the calmest zones from Delhi, and five questions to ask before you book.",
    "category": "Nature & experiences"
  },
  {
    "slug": "pre-monsoon-getaway-from-delhi",
    "title": "Beat the Rain: Your Pre-Monsoon Getaway from Delhi to the Hills",
    "description": "April to mid-June is the best window to swap Delhi's heat for the hills. Where to go, what to do, and how to plan a pre-monsoon mountain break that works.",
    "category": "Monsoon season"
  },
  {
    "slug": "private-villa-stay-near-dehradun",
    "title": "Private Villa Stay Near Dehradun: 6 Locations Worth Considering for Your Next Escape",
    "description": "Six private villa areas near Dehradun: Mussoorie, Dhanaulti, Kanatal, Rishikesh, Chakrata and Lansdowne. What each offers and how to pick the right one.",
    "category": "Getaways from Delhi & Dehradun"
  },
  {
    "slug": "resort-near-mussoorie-with-bonfire",
    "title": "Resort Near Mussoorie With Bonfire: Hill Evenings Done Right",
    "description": "A good bonfire near Mussoorie needs cold air, open forest and proper seating. How to pick the right resort, plan the day around it, and when to go.",
    "category": "Nature & experiences"
  },
  {
    "slug": "resort-with-bonfire-near-dehradun",
    "title": "The Best Resorts with Bonfires Near Dehradun: What to Look for and When to Go",
    "description": "How to find a resort with a real bonfire near Dehradun: what a good fire setup looks like, the best months to go, and which hill areas get it right.",
    "category": "Nature & experiences"
  },
  {
    "slug": "resort-with-mountain-view-uttarakhand",
    "title": "Resort with Mountain View in Uttarakhand: The Full Guide to Finding a View That Is Actually Worth the Trip",
    "description": "Not every 'mountain view' is a Himalayan one. Which Uttarakhand zones show real snow peaks, the best months to see them, and how to check a view before booking.",
    "category": "Where to stay"
  },
  {
    "slug": "resort-with-rain-view-mussoorie",
    "title": "Resort with Rain View in Mussoorie: What the Monsoon Does to This Landscape and Which Properties Actually Deliver It",
    "description": "How the monsoon transforms Mussoorie: what a rain view looks like hour by hour, which ridge positions show it best, and how to plan a safe, slow rainy stay.",
    "category": "Monsoon season"
  },
  {
    "slug": "romantic-glamping-stay-mussoorie",
    "title": "Romantic Glamping Stay in Mussoorie: What the Format Delivers That a Hotel Cannot",
    "description": "A romantic glamping stay in Mussoorie wins on the evening fire, the morning forest walk and a veranda or deck. Here is how to pick the right room at EBC.",
    "category": "Couples & honeymoon"
  },
  {
    "slug": "romantic-monsoon-getaway-india",
    "title": "Romantic Monsoon Getaway in India: Where to Go, What to Expect, and Why It Works",
    "description": "A romantic monsoon getaway in India works best at a quiet forest estate. Where to go, what the rain brings, and how to plan a safe, slow trip for two.",
    "category": "Couples & honeymoon"
  },
  {
    "slug": "stargazing-resort-near-delhi",
    "title": "Stargazing Resort Near Delhi: Where the Sky Actually Opens Up",
    "description": "Real stargazing near Delhi starts about 200 km out and 1,500 m up. How dark skies work, what you can see, and how to choose a resort for the night sky.",
    "category": "Nature & experiences"
  },
  {
    "slug": "team-building-retreat-monsoon-india",
    "title": "Team Building Retreat in Monsoon India: Why the Off-Season Is Actually the Right Season for Corporate Groups",
    "description": "A monsoon team building retreat in India gives you a quiet venue, a slower pace and a team that has to adapt. How to plan it safely, with a sample agenda.",
    "category": "Corporate & groups"
  },
  {
    "slug": "team-outing-near-dehradun",
    "title": "Team Outing Near Dehradun: 7 Formats That Actually Work for Indian Corporate Groups",
    "description": "Seven team outing formats near Dehradun that work, from adventure days to strategy retreats, and how to match each one to your team's size and goal.",
    "category": "Corporate & groups"
  },
  {
    "slug": "weekend-getaway-from-delhi-mountains",
    "title": "Mountain Weekend Getaway from Delhi: A Two-Night Plan",
    "description": "A mountain weekend from Delhi works when you pick the right season and stay in the forest, not in town. Where to go, where to stay and a two-night plan.",
    "category": "Getaways from Delhi & Dehradun"
  },
  {
    "slug": "weekend-trip-from-delhi-mountains",
    "title": "Weekend Trip from Delhi to the Mountains: Your Complete Escape Guide",
    "description": "The best weekend trips from Delhi to the mountains, with drive times, a two-night plan, where to stay and the practical tips that make 48 hours count.",
    "category": "Getaways from Delhi & Dehradun"
  }
];
