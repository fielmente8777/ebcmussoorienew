import HeroHeaderSection from "@/components/CommonSections/HeroHeaderSection";
import { SectionWithContainer } from "@/components/sectionComponants";
import { pageData } from "./components/pageData";
import Accordion2 from "@/components/accordion/Accordion2";
import LinkButton from "@/components/buttons/LinkButton";

import JsonLd from "@/components/seo/JsonLd";
import { pageMeta } from "@/lib/seo";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

export const metadata = pageMeta({
  title: "EBC Mussoorie FAQs: Getting Here, Pets, Check-in & Meals",
  description: "What every stay includes, check-in 2 PM and check-out 11 AM, pets, and how to reach EBC Mussoorie: about 280 km from Delhi and 35 km from Dehradun.",
  path: "/faq/",
});


export default function page() {
  return (
    <main>
      <JsonLd data={[breadcrumbSchema([{ name: "Home", path: "/" }, { name: "FAQ", path: "/faq/" }]), faqSchema(pageData.faq.map((f) => ({ question: f.q, answer: f.a })))]} />
      <HeroHeaderSection
        title=""
        description="Everything you need to know before you arrive"
        subTitle="Frequently Asked Questions"
      />
      <SectionWithContainer sectionClassName="bg-ternary">
        <div className="max-w-5xl mx-auto">
          {pageData.faq.map((item, index) => (
            <Accordion2 key={index} question={item.q} answer={item.a} />
          ))}
        </div>
        <LinkButton
          label={pageData.link.text}
          href={pageData.link.link}
          className="bg-secondary w-fit mx-auto mt-4 text-white border-none rounded-sm uppercase"
        />
      </SectionWithContainer>
    </main>
  );
}
