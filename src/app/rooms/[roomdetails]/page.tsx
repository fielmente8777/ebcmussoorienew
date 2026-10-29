import HeroBanner from "@/components/banner/HeroBanner";
import { roomDetailsPageData } from "./components/pageData";
import AboutUs from "./components/AboutUs";
import RoomsFeatures from "./components/RoomsFeatures";
import PerfectForData from "./components/PerfectForData";

import { notFound } from "next/navigation";
import JsonLd from "@/components/seo/JsonLd";
import { pageMeta } from "@/lib/seo";
import { breadcrumbSchema, hotelRoomSchema } from "@/lib/schema";

interface Params {
  params: Promise<{ roomdetails: string }>;
}

// Only the rooms below exist; any other /rooms/<slug>/ is a real 404.
export const dynamicParams = false;

/**
 * Search titles and descriptions per room. Names and prices follow the
 * packages page and homepage ("The Surveyor" = suite, "The Surveyor Suite" =
 * premium glamping); features and beds follow each room's own feature list.
 */
const ROOM_SEO: Record<string, { name: string; title: string; description: string; bed: string }> = {
  "the-andrews-villa": {
    name: "The Andrew's Villa",
    title: "Andrew's Villa – Private Luxury Villa in Mussoorie | EBC",
    description:
      "EBC Mussoorie's flagship private villa with its own entrance and terrace, private bonfire area, king bedroom and Himalayan views. From ₹20,000 a night.",
    bed: "King",
  },
  "twin-luxury-cottages": {
    name: "Twin Luxury Cottages",
    title: "Twin Luxury Cottages for Families & Groups – EBC Mussoorie",
    description:
      "Two interconnected luxury cottages with king bedrooms, en-suite bathrooms and a shared garden terrace, for families or two couples. From ₹20,000 a night.",
    bed: "King",
  },
  "zenith-luxury-cottage": {
    name: "Zenith Luxury Cottage",
    title: "The Zenith – Signature Luxury Cottage in Mussoorie | EBC",
    description:
      "EBC's signature freestanding forest cottage with a private veranda, king bedroom, forest and mountain views and breakfast on the veranda. From ₹18,000 a night.",
    bed: "King",
  },
  "the-surveyor": {
    name: "The Surveyor",
    title: "The Surveyor – Spacious Suite with Private Sit-out | EBC",
    description:
      "A spacious suite at EBC Mussoorie with a large private sit-out terrace, king bedroom and forest views. Breakfast and bonfire included. From ₹16,000 a night.",
    bed: "King",
  },
  "the-surveyor-suite": {
    name: "The Surveyor Suite",
    title: "The Surveyor Suite – Premium Glamping Tent | EBC Mussoorie",
    description:
      "Premium glamping in the forest canopy with a private deck, queen or king bedroom and forest and mountain views at EBC Mussoorie. From ₹14,000 a night.",
    bed: "Queen or King",
  },
  "the-glamper": {
    name: "The Glamper",
    title: "The Glamper – Luxury Canvas Tent in Mussoorie | EBC",
    description:
      "A luxury canvas tent with a private deck, double bed, attached bathroom and forest views at EBC Mussoorie. Breakfast included. From ₹12,000 a night.",
    bed: "Double",
  },
  "the-camper": {
    name: "The Camper",
    title: "The Camper – Forest Glamping Tent in Mussoorie | EBC",
    description:
      "The entry point to glamping at EBC Mussoorie: a compact forest unit with a double bed, attached bathroom, heating and breakfast. From ₹10,000 a night.",
    bed: "Double",
  },
};

export async function generateStaticParams() {
  return roomDetailsPageData.map((room) => ({ roomdetails: room.slug }));
}

export async function generateMetadata({ params }: Params) {
  const { roomdetails } = await params;
  const room = roomDetailsPageData.find((r) => r.slug === roomdetails);
  if (!room) return {};
  const seo = ROOM_SEO[room.slug];
  return pageMeta({
    title: seo?.title ?? room.metaData.title,
    description: seo?.description ?? room.metaData.description,
    path: `/rooms/${room.slug}/`,
    image: room.banner?.image,
  });
}

export default async function RoomDetailsPage({ params }: Params) {
  const path = await params;
  const pageData = roomDetailsPageData.find(
    (post) => post.slug === path.roomdetails
  );

  if (!pageData) notFound();

  const seo = ROOM_SEO[pageData.slug];
  const roomPath = `/rooms/${pageData.slug}/`;
  const roomName = seo?.name ?? pageData.metaData.title.replace(/\s*\|.*$/, "");

  return (
    <main>
      <JsonLd
        data={[
          hotelRoomSchema({
            name: roomName,
            description: seo?.description ?? pageData.metaData.description,
            path: roomPath,
            image: pageData.banner?.image,
            features: pageData.roomsFeatures?.featuresCards?.map((f) => f.title) ?? [],
            bed: seo?.bed,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Rooms", path: "/rooms/" },
            { name: roomName, path: roomPath },
          ]),
        ]}
      />
      {pageData?.banner && <HeroBanner {...pageData.banner} />}
      {pageData?.aboutUsData && <AboutUs {...pageData?.aboutUsData} />}
      {pageData?.roomsFeatures && (
        <RoomsFeatures {...pageData?.roomsFeatures} />
      )}
      {pageData?.perfectForData && (
        <PerfectForData {...pageData?.perfectForData} />
      )}
    </main>
  );
}
