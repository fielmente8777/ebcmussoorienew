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
  const base = pageMeta({ title: meta.title, description: meta.description, path: `/services/${slug}/`, type: "article" });
  const original = GUIDE_DUPLICATE_OF[slug];
  if (!original) return base;
  const canonical = absoluteUrl(`/services/${original}/`);
  return { ...base, alternates: { canonical }, openGraph: { ...base.openGraph, url: canonical } };
}

/** Article + breadcrumb (+ FAQ when the guide has one) schema for a guide page. */
export function guideSchema(
  slug: string,
  data: { metaData: { title: string; description: string }; banner?: { title?: string; image?: string }; faqs?: { question: string; answer: string }[] }
) {
  const path = `/services/${GUIDE_DUPLICATE_OF[slug] ?? slug}/`;
  const headline = data.metaData.title.replace(/\s*\|\s*EBC Mussoorie\s*$/, "");
  return [
    blogPostingSchema({ title: headline, description: data.metaData.description, path, image: existingPublicAsset(data.banner?.image, DEFAULT_OG_IMAGE) }),
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
    "description": "A practical guide to adventure camping near Dehradun – trekking, rappelling, cycling, and more. Plan your activity-first trip with trail tips, itineraries, and safety advice.",
    "category": "Nature & experiences"
  },
  {
    "slug": "best-family-resort-near-delhi-monsoon",
    "title": "Best Family Resort Near Delhi in Monsoon: How to Choose When the Weather Is a Variable",
    "description": "A complete guide to choosing the best family resort near Delhi for monsoon – five criteria that decide whether your trip works, and why Mussoorie is the strongest option.",
    "category": "Families"
  },
  {
    "slug": "best-glamping-in-uttarakhand",
    "title": "Best Glamping in Uttarakhand: A Region-by-Region Guide for Serious Travellers",
    "description": "A region-by-region guide to glamping in Uttarakhand. Garhwal, Kumaon, Rishikesh, and the higher Himalayan zones – what each offers and how to choose.",
    "category": "Where to stay"
  },
  {
    "slug": "best-resort-in-mussoorie",
    "title": "How to Choose the Best Resort in Mussoorie for Your Trip",
    "description": "Practical guide to choosing the best resort in Mussoorie. Categories, location, amenities, and tips for couples, families, and groups. Plan your stay with confidence.",
    "category": "Where to stay"
  },
  {
    "slug": "best-resort-near-dehradun-for-weekend",
    "title": "Best Resort Near Dehradun for Weekend: Why Everest Base Camp Mussoorie Answers the Search",
    "description": "A direct account of why Everest Base Camp Mussoorie is the best resort near Dehradun for a weekend – location, accommodation, itinerary, and seasonal guidance.",
    "category": "Getaways from Delhi & Dehradun"
  },
  {
    "slug": "bird-watching-resort-uttarakhand",
    "title": "Bird Watching Resort in Uttarakhand: A Serious Birder's Guide to the State's Best Stays",
    "description": "A serious birder's guide to Uttarakhand's best bird watching resorts – zones, species, seasons, and what makes a property genuinely birder-friendly.",
    "category": "Nature & experiences"
  },
  {
    "slug": "bonfire-experience-resort-hills-india",
    "title": "Bonfire Experience at a Resort in the Hills of India: What Makes It Worth Planning Around",
    "description": "A complete guide to the bonfire experience at hill resorts in India – what makes it different, which regions deliver it best, and how to choose a property where the evening around the fire is the centrepiece.",
    "category": "Nature & experiences"
  },
  {
    "slug": "business-retreat-venue-uttarakhand",
    "title": "Business Retreat Venue in Uttarakhand: A Selection Framework for Decision Makers",
    "description": "A complete selection framework for choosing a business retreat venue in Uttarakhand – capacity, environment, infrastructure, and what to verify in writing before committing.",
    "category": "Corporate & groups"
  },
  {
    "slug": "camping-in-mussoorie",
    "title": "Camping in Mussoorie: What to Know Before You Book a Site",
    "description": "A complete guide to camping in Mussoorie – types of camping, best seasons, packing tips, and family suitability. Make an informed choice for your mountain stay.",
    "category": "Where to stay"
  },
  {
    "slug": "corporate-offsite-mussoorie",
    "title": "Corporate Offsite in Mussoorie: A Practical Planner's Guide to Getting It Right",
    "description": "A practical planner's guide to corporate offsites in Mussoorie – property selection, agenda building, costs, and common mistakes to avoid. Written for the person doing the planning.",
    "category": "Corporate & groups"
  },
  {
    "slug": "corporate-offsite-uttarakhand",
    "title": "Corporate Offsite in Uttarakhand: A State-Wide Guide to Choosing the Right Venue",
    "description": "A complete guide to planning a corporate offsite in Uttarakhand – mapping the state by objective, choosing the right zone, and what to confirm before committing.",
    "category": "Corporate & groups"
  },
  {
    "slug": "corporate-retreat-near-dehradun",
    "title": "Corporate Retreat Near Dehradun: Why More Companies Are Skipping the Hotel Conference Room",
    "description": "A practical guide to planning a corporate retreat near Dehradun – why the hills work better, what to look for in a property, and how to structure a productive offsite.",
    "category": "Corporate & groups"
  },
  {
    "slug": "corporate-stay-in-uttarakhand",
    "title": "Corporate Stay in Uttarakhand: The Complete Zone-by-Zone Guide for Companies Planning Offsites",
    "description": "A complete zone-by-zone guide to corporate stays in Uttarakhand – Mussoorie, Rishikesh, Corbett, and Lansdowne. Match your team's objective to the right destination.",
    "category": "Corporate & groups"
  },
  {
    "slug": "couple-resort-mussoorie-monsoon",
    "title": "Couple Resort in Mussoorie During Monsoon: Why the Off-Season Is the Better Season for Two",
    "description": "A complete guide to a couple's monsoon stay in Mussoorie – why the off-season delivers more privacy, better rates, and a more atmospheric experience than peak season.",
    "category": "Couples & honeymoon"
  },
  {
    "slug": "couples-resort-mussoorie",
    "title": "More Than a Romantic View: Finding a Couples Resort in Mussoorie That Delivers",
    "description": "A practical guide for couples looking for a resort in Mussoorie that delivers on privacy, setting, and evening atmosphere. Beyond the view, what actually makes a stay memorable.",
    "category": "Couples & honeymoon"
  },
  {
    "slug": "deodar-forest-resort-mussoorie",
    "title": "Staying in a Deodar Forest Resort in Mussoorie: What the Trees Actually Change About Your Trip",
    "description": "A guide to deodar forest resorts in Mussoorie – what makes the setting distinct, where the best forest cover exists, and what a genuine forest resort stay delivers.",
    "category": "Nature & experiences"
  },
  {
    "slug": "digital-detox-retreat-near-delhi",
    "title": "Why a Digital Detox Retreat Near Delhi Is Not What You Think (And Where to Find a Real One)",
    "description": "A practical guide to genuine digital detox retreats near Delhi – what separates a real one from a wellness hotel, where to find them, and how to prepare.",
    "category": "Nature & experiences"
  },
  {
    "slug": "family-friendly-glamping-mussoorie",
    "title": "Family Friendly Glamping in Mussoorie: What Parents Should Know Before Booking",
    "description": "A complete guide to family friendly glamping in Mussoorie – what makes it work for families, which accommodation suits your family size, and what to verify before booking.",
    "category": "Families"
  },
  {
    "slug": "family-resort-near-mussoorie",
    "title": "A Family Resort Near Mussoorie That Works for Everyone, Including the Kids",
    "description": "A practical guide to choosing a family resort near Mussoorie – space, activities, facilities, and why glamping works for mixed-age groups. Plan your family mountain trip with confidence.",
    "category": "Families"
  },
  {
    "slug": "family-vacation-mussoorie-monsoon",
    "title": "Family Vacation in Mussoorie During Monsoon: An Honest Planning Guide for Parents",
    "description": "A complete guide to a family monsoon vacation in Mussoorie – setting expectations, choosing the right property, and planning a trip that works for parents and children.",
    "category": "Families"
  },
  {
    "slug": "forest-resort-near-dehradun",
    "title": "Inside the Forest: What Staying at a Forest Resort Near Dehradun Feels Like",
    "description": "A sensory guide to forest resorts near Dehradun – what the forests actually contain, how a quality stay feels, and what to expect from the oak‑rhododendron zone.",
    "category": "Nature & experiences"
  },
  {
    "slug": "glamping-near-dehradun",
    "title": "Glamping Near Dehradun: The Mountain Escape You Can Reach Before Lunch",
    "description": "A complete guide to glamping near Dehradun – distance, destinations, seasonal tips, and why the Mussoorie ridge is the most accessible mountain glamping corridor in northern India.",
    "category": "Getaways from Delhi & Dehradun"
  },
  {
    "slug": "glamping-near-mussoorie",
    "title": "Glamping Near Mussoorie: The Short List of What to Know Before You Book",
    "description": "A direct breakdown of glamping options near Mussoorie: location, terrain, accommodation standards, and how to identify the best properties. Know before you book.",
    "category": "Where to stay"
  },
  {
    "slug": "glamping-tent-monsoon-experience",
    "title": "The Glamping Tent Monsoon Experience: What It Actually Feels Like and How to Have the Best Version of It",
    "description": "A complete guide to the glamping tent monsoon experience – what it actually feels like, the sensory moments that define it, and how to choose a property that delivers the best version.",
    "category": "Monsoon season"
  },
  {
    "slug": "hathipaon-road-resort-mussoorie",
    "title": "Hathipaon Road Resort in Mussoorie: Why This Quiet Corner of the Hill Station Has the Best Stays",
    "description": "A guide to Hathipaon Road in Mussoorie – the quiet western ridge with mature deodar forest, valley views, and the town's most genuinely peaceful resort stays.",
    "category": "Where to stay"
  },
  {
    "slug": "honeymoon-in-mussoorie-monsoon",
    "title": "Honeymoon in Mussoorie During Monsoon: What to Expect, What to Plan, and Why It Works",
    "description": "A complete guide to a monsoon honeymoon in Mussoorie – what the experience delivers, how to choose the right property, and why the rain makes it more intimate, not less.",
    "category": "Couples & honeymoon"
  },
  {
    "slug": "honeymoon-resort-mussoorie",
    "title": "Honeymoon Resort in Mussoorie: What Couples Actually Remember After the Trip",
    "description": "A practical guide for honeymooners choosing a resort in Mussoorie – what makes a stay memorable, what to look for, and why glamping works best for couples.",
    "category": "Couples & honeymoon"
  },
  {
    "slug": "honeymoon-resorts-in-mussoorie",
    "title": "Honeymoon Resorts in Mussoorie: A Practical Guide to Choosing the Right Property for Your Stay",
    "description": "A complete guide to honeymoon resorts in Mussoorie – what the property categories offer, how to match the right type to your stay, and why EBC Mussoorie's specific offering is worth understanding before you book.",
    "category": "Couples & honeymoon"
  },
  {
    "slug": "luxury-camping-mussoorie",
    "title": "Luxury Camping in Mussoorie: Separating What Is Real From What Is Marketing",
    "description": "A practical guide to identifying genuine luxury camping in Mussoorie. What to look for, red flags, inclusions, and how to verify before you book.",
    "category": "Where to stay"
  },
  {
    "slug": "luxury-cottage-mussoorie",
    "title": "Luxury Cottage in Mussoorie: Why the Format Still Wins for the Right Traveller",
    "description": "A practical guide to luxury cottages in Mussoorie – what defines the format, who should choose it over a tent, and what to look for when booking.",
    "category": "Where to stay"
  },
  {
    "slug": "luxury-private-villa-mussoorie",
    "title": "The Case for a Luxury Private Villa in Mussoorie Over a Hotel (And How to Find the Right One)",
    "description": "A practical guide to choosing a luxury private villa in Mussoorie – what the format delivers that a hotel cannot, what to look for, and how to find the right property.",
    "category": "Where to stay"
  },
  {
    "slug": "luxury-resort-in-mussoorie",
    "title": "What Staying at a Luxury Resort in Mussoorie Actually Feels Like",
    "description": "A clear-eyed look at premium accommodation in Mussoorie – what genuine luxury delivers, what to look for, and why glamping is redefining the experience.",
    "category": "Where to stay"
  },
  {
    "slug": "luxury-resort-mussoorie",
    "title": "Luxury Resort in Mussoorie: How to Choose the Right Property for Your Stay",
    "description": "A practical guide to choosing a luxury resort in Mussoorie – property types, location, inclusions, and what to look for beyond the marketing. Make an informed decision.",
    "category": "Where to stay"
  },
  {
    "slug": "luxury-tent-stay-monsoon-india",
    "title": "Luxury Tent Stay in Monsoon India: What Separates an Exceptional Experience from a Wet Disappointment",
    "description": "A complete guide to luxury tent stays in monsoon India – what separates premium glamping from disappointing canvas, which regions work best, and what questions to ask before booking.",
    "category": "Monsoon season"
  },
  {
    "slug": "mice-resort-near-delhi-hills",
    "title": "MICE Resort Near Delhi Hills: How to Choose the Right Venue When the Stakes Are High",
    "description": "A practical guide to choosing a MICE resort near Delhi hills – meetings, incentives, conferences, and exhibitions. Assessment criteria, budget framework, and zone-by-zone guidance.",
    "category": "Corporate & groups"
  },
  {
    "slug": "misty-resort-near-mussoorie",
    "title": "Misty Resort Near Mussoorie: What Mist Does to the Hill Station and Where to Experience It Best",
    "description": "A complete guide to misty stays near Mussoorie – the geography of mist, the best seasons to visit, and what to look for in a forested resort that actually delivers the immersive experience.",
    "category": "Nature & experiences"
  },
  {
    "slug": "monsoon-glamping-near-dehradun",
    "title": "Monsoon Glamping Near Dehradun: What Works & What to Expect",
    "description": "A complete guide to monsoon glamping near Dehradun – what to look for in a property, how to plan your weekend, and honest tradeoffs to know before booking.",
    "category": "Monsoon season"
  },
  {
    "slug": "mussoorie-resort-with-mountain-view",
    "title": "Mussoorie Resort With Mountain View: What Is Actually Visible, and When",
    "description": "A specific breakdown of mountain views near Mussoorie – which peaks are visible, from where, in which seasons, and how to choose a resort that delivers the view it advertises.",
    "category": "Where to stay"
  },
  {
    "slug": "mussoorie-trip-package-from-delhi",
    "title": "Planning a Mussoorie Trip Package from Delhi: The Complete Breakdown",
    "description": "A practical breakdown of Mussoorie trip packages from Delhi – what they cover, how to evaluate them, and a two‑night itinerary that works for couples, families, and groups.",
    "category": "Getaways from Delhi & Dehradun"
  },
  {
    "slug": "nature-resort-near-mussoorie",
    "title": "The Natural World Around Mussoorie: What a Nature Resort Here Actually Gives You",
    "description": "A guide to the natural ecosystem around Mussoorie – forest types, bird life, and what a genuine nature resort should provide beyond a scenic view.",
    "category": "Nature & experiences"
  },
  {
    "slug": "nature-retreat-near-dehradun",
    "title": "Nature Retreat Near Dehradun: A Destination-by-Destination Guide to Getting It Right",
    "description": "A destination-by-destination guide to nature retreats near Dehradun – forest immersion, river stays, meadow retreats, and wildlife zones. Match the right retreat to your travel purpose.",
    "category": "Nature & experiences"
  },
  {
    "slug": "peaceful-resort-in-uttarakhand-mountains",
    "title": "Peaceful Resort in the Uttarakhand Mountains: A Practical Guide to Finding Quiet That Lasts",
    "description": "A practical guide to finding genuine quiet in Uttarakhand mountain resorts – structural peace, quiet zones, and how to verify a resort's noise profile before booking.",
    "category": "Nature & experiences"
  },
  {
    "slug": "pre-monsoon-getaway-from-delhi",
    "title": "Beat the Rain: Your Pre-Monsoon Getaway from Delhi to the Hills",
    "description": "A practical guide to the pre-monsoon window (April to mid-June) – where to go, what to do, and why the weeks before the rains are the best time for a mountain escape from Delhi.",
    "category": "Monsoon season"
  },
  {
    "slug": "private-villa-stay-near-dehradun",
    "title": "Private Villa Stay Near Dehradun: 6 Locations Worth Considering for Your Next Escape",
    "description": "A guide to private villa stays near Dehradun – Mussoorie, Dhanaulti, Kanatal, Rishikesh, Chakrata, and Lansdowne. What each offers and how to choose the right one.",
    "category": "Getaways from Delhi & Dehradun"
  },
  {
    "slug": "resort-near-mussoorie-with-bonfire",
    "title": "The Bonfire and the Hills: What a Resort Near Mussoorie With Bonfire Actually Delivers",
    "description": "A practical guide to bonfire evenings at resorts near Mussoorie – what makes them different at 2,000 metres, how to choose the right setup, and why the experience is worth planning around.",
    "category": "Nature & experiences"
  },
  {
    "slug": "resort-with-bonfire-near-dehradun",
    "title": "The Best Resorts with Bonfires Near Dehradun: What to Look for and When to Go",
    "description": "A practical guide to finding resorts with bonfires near Dehradun – what makes a good bonfire experience, the best seasons, and where to find the right property.",
    "category": "Nature & experiences"
  },
  {
    "slug": "resort-with-mountain-view-uttarakhand",
    "title": "Resort with Mountain View in Uttarakhand: The Full Guide to Finding a View That Is Actually Worth the Trip",
    "description": "A comprehensive guide to finding resorts with genuine mountain views in Uttarakhand – zones, peak visibility, seasonality, and how to verify a property's view claim before booking.",
    "category": "Where to stay"
  },
  {
    "slug": "resort-with-rain-view-mussoorie",
    "title": "Resort with Rain View in Mussoorie: What the Monsoon Does to This Landscape and Which Properties Actually Deliver It",
    "description": "A complete guide to monsoon rain view stays in Mussoorie – what the landscape looks like, which property positions deliver the best view, and how to plan your rainy retreat.",
    "category": "Monsoon season"
  },
  {
    "slug": "romantic-glamping-stay-mussoorie",
    "title": "Romantic Glamping Stay in Mussoorie: What the Format Delivers That a Hotel Cannot",
    "description": "A complete guide to a romantic glamping stay in Mussoorie – what the format delivers, which unit to choose, and why the outdoor experience matters more than the room.",
    "category": "Couples & honeymoon"
  },
  {
    "slug": "romantic-monsoon-getaway-india",
    "title": "Romantic Monsoon Getaway in India: Where to Go, What to Expect, and Why It Works",
    "description": "A complete guide to a romantic monsoon getaway in India – the best destinations, what the season delivers, and why the right property makes the monsoon the most romantic season of all.",
    "category": "Couples & honeymoon"
  },
  {
    "slug": "stargazing-resort-near-delhi",
    "title": "Stargazing Resort Near Delhi: Where the Sky Actually Opens Up",
    "description": "A practical guide to stargazing near Delhi – light pollution distance, elevation advantage, what you can actually see, and how to choose the right resort for dark skies.",
    "category": "Nature & experiences"
  },
  {
    "slug": "team-building-retreat-monsoon-india",
    "title": "Team Building Retreat in Monsoon India: Why the Off-Season Is Actually the Right Season for Corporate Groups",
    "description": "A complete guide to planning a monsoon team building retreat in India – lower costs, fewer crowds, and a weather environment that builds better team dynamics.",
    "category": "Corporate & groups"
  },
  {
    "slug": "team-outing-near-dehradun",
    "title": "Team Outing Near Dehradun: 7 Formats That Actually Work for Indian Corporate Groups",
    "description": "A practical guide to team outings near Dehradun – 7 formats that actually work, from adventure days to strategy retreats. Match your team's size and objective with the right format.",
    "category": "Corporate & groups"
  },
  {
    "slug": "weekend-getaway-from-delhi-mountains",
    "title": "The Mountain Weekend Getaway from Delhi That Actually Delivers",
    "description": "A practical guide to planning a mountain weekend from Delhi that delivers. Destinations, accommodation, itinerary, and season tips for a two-night escape.",
    "category": "Getaways from Delhi & Dehradun"
  },
  {
    "slug": "weekend-trip-from-delhi-mountains",
    "title": "Weekend Trip from Delhi to the Mountains: Your Complete Escape Guide",
    "description": "A complete guide to weekend mountain trips from Delhi – destinations, itinerary, accommodation options, and practical tips to make the most of 48 hours in the hills.",
    "category": "Getaways from Delhi & Dehradun"
  }
];
