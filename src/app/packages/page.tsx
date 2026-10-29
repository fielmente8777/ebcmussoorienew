import BookingPolicySection from "./components/BookingPolicySection";
import PricingInfoSection from "./components/PriceInfoSection";
import RoomPricingSection from "./components/RoomPricingSection";
import { packagesPageData } from "./pageData";
import HeroHeaderSection from "@/components/CommonSections/HeroHeaderSection";

import JsonLd from "@/components/seo/JsonLd";
import { pageMeta } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = pageMeta({
  title: "Room Rates & Packages – EBC Mussoorie",
  description: "Nightly rates from ₹10,000 to ₹20,000 plus GST, what every stay includes, add-on experiences, and booking and cancellation policies at EBC Mussoorie.",
  path: "/packages/",
});


const page = () => {
  return (
    <main>
      <JsonLd data={[breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Packages & Pricing", path: "/packages/" }])]} />
      <HeroHeaderSection {...packagesPageData.hero} />
      <RoomPricingSection {...packagesPageData?.roomPricingSection} />
      <PricingInfoSection
        alwaysIncluded={packagesPageData.alwaysIncluded}
        seasonalPricingNotes={packagesPageData.seasonalPricingNotes}
        addOns={packagesPageData.addOns}
      />
      <BookingPolicySection
        {...packagesPageData?.termsAndConditionsData}
      />
    </main>
  );
};

export default page;
