import Link from "next/link";
import HeroHeaderSection from "@/components/CommonSections/HeroHeaderSection";
import { SectionWithContainer } from "@/components/sectionComponants";
import JsonLd from "@/components/seo/JsonLd";
import { absoluteUrl, pageMeta } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { GUIDE_CATEGORIES, GUIDE_INDEX } from "./components/guides";

export const metadata = pageMeta({
  title: "Mussoorie Travel Guides – EBC Mussoorie",
  description:
    "Guides to planning a Mussoorie trip: where to stay, honeymoons, family holidays, corporate offsites, monsoon travel and getaways from Delhi and Dehradun.",
  path: "/services/",
});

export default function GuidesHubPage() {
  return (
    <main>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Travel Guides", path: "/services/" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Mussoorie Travel Guides",
            url: absoluteUrl("/services/"),
            hasPart: GUIDE_INDEX.map((g) => ({
              "@type": "Article",
              headline: g.title,
              url: absoluteUrl(`/services/${g.slug}/`),
            })),
          },
        ]}
      />
      <HeroHeaderSection
        title="Travel Guides"
        subTitle="Plan your Mussoorie trip"
        description="Practical guides from the team at EBC Mussoorie: where to stay, when to go and how to plan for couples, families and groups."
      />
      <SectionWithContainer sectionClassName="bg-ternary" containerClassName="space-y-14">
        {GUIDE_CATEGORIES.map((category) => {
          const guides = GUIDE_INDEX.filter((g) => g.category === category);
          if (!guides.length) return null;
          return (
            <section key={category} className="space-y-6">
              <h2 className="font-primary text-white text-3xl md:text-4xl font-extralight">{category}</h2>
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                {guides.map((guide) => (
                  <Link
                    key={guide.slug}
                    href={`/services/${guide.slug}/`}
                    className="group flex flex-col gap-3 border border-secondary/30 bg-primary rounded-md px-6 py-5 transition-colors duration-300 hover:border-secondary"
                  >
                    <h3 className="text-white text-base leading-[1.3] font-serif">{guide.title}</h3>
                    <p className="text-[#7D7D7D] leading-relaxed text-sm">{guide.description}</p>
                    <span className="mt-auto text-secondary text-xs tracking-[0.15em] uppercase">
                      Read guide →
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </SectionWithContainer>
    </main>
  );
}
