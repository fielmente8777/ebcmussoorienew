import HeroBanner from "@/components/banner/HeroBanner";
import { SectionWithContainer } from "@/components/sectionComponants";
import SectionHeading from "@/components/typography/SectionHeading";
import FamilyStaySection from "../family-stays/components/FamilyStaySection";
import DineSection from "./components/DineSection";
import Experience from "./components/Experience";
import MilestoneSection from "./components/MilestoneSection";
import { parkCafePageData } from "./components/pageData";
import LinkButton from "@/components/buttons/LinkButton";
import TestimonialSection from "../couples-and-honeymoon/components/TestimonialSection";

import JsonLd from "@/components/seo/JsonLd";
import { pageMeta } from "@/lib/seo";
import { breadcrumbSchema, restaurantSchema } from "@/lib/schema";

export const metadata = pageMeta({
  title: "Park Café – Restaurant at EBC Mussoorie, Hathipaon Road",
  description: "Multi-cuisine café at EBC Mussoorie with dishes from the Garhwal hills, breakfasts, barbecues and picnic add-ons, in the forest at Park Estate.",
  path: "/park-cafe/",
});


export default function ParkCafePage() {
  return (
    <main>
      <JsonLd data={[breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Park Café", path: "/park-cafe/" }]), restaurantSchema()]} />
      <HeroBanner {...parkCafePageData.banner} />
      <FamilyStaySection {...parkCafePageData?.about} />

      <DineSection {...parkCafePageData.dineData} />
      <SectionWithContainer
        sectionClassName="bg-primary"
        containerClassName="flex flex-col gap-8 text-white text-center"
      >
        <SectionHeading title={parkCafePageData.uniqueData.title} textCenter />
        <div className="space-y-6 max-w-6xl mx-auto">
          {parkCafePageData.uniqueData.description.map((item, index) => (
            <p
              key={index}
              className="text-white/75 text-center font-medium "
              dangerouslySetInnerHTML={{ __html: item }}
            ></p>
          ))}
          <LinkButton
            href={parkCafePageData.uniqueData.cta.href}
            label={parkCafePageData.uniqueData.cta.label}
            className=" w-fit mx-auto mt-4 bg-secondary border-none text-white rounded-sm uppercase"
          />
        </div>
      </SectionWithContainer>
      <TestimonialSection testimonials={parkCafePageData?.testimonialSection} />
      <Experience {...parkCafePageData.addOnsData} />
      <MilestoneSection {...parkCafePageData.milestoneData} />
    </main>
  );
}
