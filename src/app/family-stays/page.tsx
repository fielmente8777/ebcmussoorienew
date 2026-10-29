import HeroBanner from "@/components/banner/HeroBanner";
import React from "react";
import { familyStayPageData } from "./pageData";
import FamilyStaySection from "./components/FamilyStaySection";
import WhyLoveEBC from "./components/WhyLoveEBCSection";
import ActivitiesSection from "./components/ActivitiesSection";
import FamilyRoomSection from "./components/FamilyRoomSection";
import CtaSection from "@/components/CommonSections/CtaSection";
import TestimonialSection from "../couples-and-honeymoon/components/TestimonialSection";

import JsonLd from "@/components/seo/JsonLd";
import { pageMeta } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = pageMeta({
  title: "Family Resort in Mussoorie with Nature Activities – EBC",
  description: "A screen-free nature holiday for families at EBC Mussoorie: safe, enclosed grounds, kid-friendly activities and spacious cottages and villa stays.",
  path: "/family-stays/",
});


const page = () => {
  return (
    <main>
      <JsonLd data={[breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Family Stays", path: "/family-stays/" }])]} />
      <HeroBanner {...familyStayPageData?.bannerData} />
      <FamilyStaySection {...familyStayPageData?.familyStaySection} />
      <WhyLoveEBC {...familyStayPageData?.whyFamilyLoveEbcSection} />
      <ActivitiesSection {...familyStayPageData?.activitiesSection} />
      <FamilyRoomSection {...familyStayPageData?.familyRoomSection} />
      <TestimonialSection testimonials={familyStayPageData?.testimonialSection} />
      <CtaSection {...familyStayPageData?.ctaData} />
    </main>
  );
};

export default page;
