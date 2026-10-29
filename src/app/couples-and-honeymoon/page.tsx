import HeroBanner from "@/components/banner/HeroBanner";
import FamilyStaySection from "../family-stays/components/FamilyStaySection";
import CoupleRoomSection from "./components/CoupleRoomSection";
import RomanticInclusionSection from "./components/RomanticInclusionSection";
import TestimonialSection from "./components/TestimonialSection";
import { couplesAndHoneymoonPageData } from "./pageData";

import JsonLd from "@/components/seo/JsonLd";
import { pageMeta } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = pageMeta({
  title: "Honeymoon & Couples Glamping in Mussoorie – EBC Mussoorie",
  description: "Private cottages and forest tents for couples: in-room breakfast, stargazing evenings, and a rose-petal welcome and candlelit dinner on request.",
  path: "/couples-and-honeymoon/",
});


const page = () => {
  return (
    <main>
      <JsonLd data={[breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Couples & Honeymoon", path: "/couples-and-honeymoon/" }])]} />
      <HeroBanner {...couplesAndHoneymoonPageData?.bannerData} />
      <FamilyStaySection {...couplesAndHoneymoonPageData?.familyStaySection} />
      <RomanticInclusionSection
        {...couplesAndHoneymoonPageData?.romanticInclusionSection}
      />
      <CoupleRoomSection {...couplesAndHoneymoonPageData?.coupleRoomSection} />
      <TestimonialSection
        testimonials={couplesAndHoneymoonPageData?.testimonialSection}
      />
    </main>
  );
};

export default page;
