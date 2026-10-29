import { contacts } from "@/utils/constant";
import { SITE_NAME, SITE_URL, absoluteUrl } from "./seo";

/**
 * schema.org builders. Every value here is taken from content already published
 * on this site (contact block, FAQ, packages page, room pages) or from EBC's own
 * Google Business Profile pin. Do not add facts here that the pages do not state.
 */

export const RESORT_ID = `${SITE_URL}/#resort`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

type Json = Record<string, unknown>;

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: "Park Estate, Hathipaon Road",
  addressLocality: "Mussoorie",
  addressRegion: "Uttarakhand",
  postalCode: "248179",
  addressCountry: "IN",
};

const sameAs = [
  contacts.socialContacts.instagram,
  contacts.socialContacts.facebook,
  contacts.socialContacts.youtube,
  contacts.socialContacts.tripadvisor,
];

const amenity = (name: string): Json => ({
  "@type": "LocationFeatureSpecification",
  name,
  value: true,
});

export function resortSchema(): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Resort",
    "@id": RESORT_ID,
    name: SITE_NAME,
    alternateName: "Everest Base Camp Mussoorie",
    description:
      "Luxury glamping resort in Mussoorie with 14 rooms across seven categories (forest tents, luxury cottages and villas) at Park Estate, Hathipaon Road, home to Park Café and The Den.",
    url: `${SITE_URL}/`,
    logo: absoluteUrl("/LogoEBC.png"),
    image: [
      absoluteUrl("/og/ebc-mussoorie.jpg"),
      absoluteUrl("/andrew-villa/Suite-Bedroom-2.png"),
      absoluteUrl("/The Zenith/RoomImage1.jpg"),
    ],
    telephone: contacts.phone[0],
    email: contacts.email[0],
    address: postalAddress,
    geo: { "@type": "GeoCoordinates", latitude: 30.4592927, longitude: 78.025305 },
    hasMap: contacts.addresses[0].addressUrl,
    checkinTime: "14:00",
    checkoutTime: "11:00",
    petsAllowed: true,
    numberOfRooms: 14,
    priceRange: "₹10,000 – ₹20,000 per night (plus GST)",
    currenciesAccepted: "INR",
    amenityFeature: [
      amenity("Breakfast included"),
      amenity("Evening bonfire"),
      amenity("Guided morning nature walk"),
      amenity("Free Wi-Fi"),
      amenity("Free parking"),
      amenity("Pet friendly"),
      amenity("On-site restaurant (Park Café)"),
    ],
    containsPlace: [
      {
        "@type": "Restaurant",
        "@id": `${SITE_URL}/park-cafe/#restaurant`,
        name: "Park Café",
        url: absoluteUrl("/park-cafe/"),
        servesCuisine: ["Multi-cuisine", "Garhwali"],
      },
      {
        "@type": "EventVenue",
        "@id": `${SITE_URL}/den/#venue`,
        name: "The Den",
        url: absoluteUrl("/den/"),
      },
    ],
    sameAs,
  };
}

export function websiteSchema(): Json {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: SITE_NAME,
    alternateName: "Everest Base Camp Mussoorie",
    url: `${SITE_URL}/`,
    inLanguage: "en-IN",
    publisher: { "@id": RESORT_ID },
  };
}

export function restaurantSchema(): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${SITE_URL}/park-cafe/#restaurant`,
    name: "Park Café",
    description:
      "Multi-cuisine café at EBC Mussoorie on Hathipaon Road, serving dishes from the Garhwal hills alongside Indian and English breakfasts.",
    url: absoluteUrl("/park-cafe/"),
    servesCuisine: ["Multi-cuisine", "Garhwali"],
    telephone: contacts.phone[0],
    address: postalAddress,
    geo: { "@type": "GeoCoordinates", latitude: 30.4592927, longitude: 78.025305 },
    containedInPlace: { "@id": RESORT_ID },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]): Json {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]): Json {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function hotelRoomSchema(room: {
  name: string;
  description: string;
  path: string;
  image?: string;
  features: string[];
  bed?: string;
  beds?: number;
}): Json {
  return {
    "@context": "https://schema.org",
    "@type": "HotelRoom",
    "@id": `${absoluteUrl(room.path)}#room`,
    name: room.name,
    description: room.description,
    url: absoluteUrl(room.path),
    ...(room.image ? { image: absoluteUrl(room.image) } : {}),
    ...(room.bed ? { bed: { "@type": "BedDetails", typeOfBed: room.bed, numberOfBeds: room.beds ?? 1 } } : {}),
    amenityFeature: room.features.map(amenity),
    containedInPlace: { "@id": RESORT_ID },
  };
}

export function blogPostingSchema(post: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Json {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    url: absoluteUrl(post.path),
    mainEntityOfPage: { "@type": "WebPage", "@id": absoluteUrl(post.path) },
    ...(post.image ? { image: absoluteUrl(post.image) } : {}),
    inLanguage: "en-IN",
    author: { "@type": "Organization", name: SITE_NAME, url: `${SITE_URL}/` },
    publisher: { "@id": RESORT_ID },
  };
}
