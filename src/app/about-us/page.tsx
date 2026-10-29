import IntroSection from "@/components/CommonSections/IntroSection";
import { aboutPageData } from "./components/pageData";
import AdventuresSection from "@/components/CommonSections/AdventuresSection";
import StayWith from "@/components/CommonSections/StayWith";
import AboutSection from "@/components/CommonSections/AboutSection";
import ThreeGridLayoutBanner from "@/components/banner/ThreeGridLayoutBanner";
import CozyNight from "./components/CozyNight";

import JsonLd from "@/components/seo/JsonLd";
import { pageMeta } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = pageMeta({
  title: "About EBC Mussoorie – Glamping at Park Estate, Mussoorie",
  description: "The story of Everest Base Camp Mussoorie, a luxury glamping resort in the deodar forest near Sir George Everest's House, and what a stay here feels like.",
  path: "/about-us/",
});


export default function AboutUsPage() {
  return (
    <main>
      <JsonLd data={[breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About Us", path: "/about-us/" }])]} />
      <ThreeGridLayoutBanner {...aboutPageData.bannerData} />
      <IntroSection {...aboutPageData.introData} asPageTitle />
      <AdventuresSection {...aboutPageData.georgeEverestData} />
      <CozyNight {...aboutPageData.experienceData} />
      <AboutSection {...aboutPageData.aroundCampData} />
      <StayWith {...aboutPageData.ctaData} />
    </main>
  );
}
