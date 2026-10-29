import React from "react";
import { BusinessCaseSection } from "./components/BusinessCaseSection";
import { corporateAndMicePageData } from "./pageData";
import HeroBanner from "@/components/banner/HeroBanner";
import OfferSection from "./components/OfferSection";
import EnquirySection from "./components/EnquirySection";

import JsonLd from "@/components/seo/JsonLd";
import { pageMeta } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = pageMeta({
  title: "Corporate Offsites & MICE in Mussoorie – EBC Mussoorie",
  description: "Corporate retreats and offsites for groups of 8 to 48 guests in a deodar forest setting at EBC Mussoorie, about 280 km from Delhi and 35 km from Dehradun.",
  path: "/corporate-and-mice/",
});


const page = () => {
  return (
    <main>
      <JsonLd data={[breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Corporate & MICE", path: "/corporate-and-mice/" }])]} />
      <HeroBanner {...corporateAndMicePageData?.bannerData} />
      <BusinessCaseSection {...corporateAndMicePageData?.businessCaseSection} />
      <OfferSection {...corporateAndMicePageData?.offeringsSection} />
      <EnquirySection
        title="Group Enquiry"
        subTitle="Tell us about your group and we'll get back to you within 2 hours"
      />
    </main>
  );
};

export default page;
