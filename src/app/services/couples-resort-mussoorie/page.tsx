import HeroBanner from "@/components/banner/HeroBanner";
import Accordion2 from "@/components/accordion/Accordion2";
import { SectionWithContainer } from "@/components/sectionComponants";
import SectionHeading from "@/components/typography/SectionHeading";
import { SectionHeading2 } from "@/components/typography/SectionHeading2";
import { guideMeta, guideSchema } from "../components/guides";
import JsonLd from "@/components/seo/JsonLd";
import RelatedGuides from "@/components/seo/RelatedGuides";

const articleData = {
  slug: "couples-resort-mussoorie",
  metaData: {
    title: "More Than a Romantic View: Finding a Couples Resort in Mussoorie That Delivers | EBC Mussoorie",
    description:
      "The right couples resort in Mussoorie gets three things right: privacy, setting and evenings on site. What to look for beyond the view, and when to go.",
  },
  banner: {
    title: "More Than a Romantic View",
    subTitle: "Finding a Couples Resort That Delivers",
    description:
      "Privacy, setting and evening atmosphere: what makes a couples trip to Mussoorie work. A guide that looks beyond the view.",
    image: "/banner/bnr2.png",
  },
  intro: {
    title: "More Than a Romantic View",
    description: [
      "You do not need to be on your honeymoon to want a couples resort in Mussoorie that works. Anniversaries, long-overdue breaks, trips to reconnect and spur-of-the-moment weekends all call for the same thing. You want a place that gives two people space and a good setting. It should also have enough going on to fill two or three days, without you having to invent your own plan. Mussoorie has plenty of places to stay. What it has less of is the right mix of privacy, outdoor access and evening atmosphere. That mix is what makes a couples trip feel different from a family holiday or a solo stay. This guide is for couples who have already chosen Mussoorie and want to know what to look for in a resort.",
    ],
  },
  details: {
    title: "What a Couples Resort in Mussoorie Must Get Right",
    subtitle: "Three Key Factors",
    description: [
      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">What Must a Couples Resort in Mussoorie Get Right?</h2>
       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">1. How Much Space Is There Between You and the Next Guest?</h3>
       <p>In most hill station hotels, rooms share walls, corridors and dining rooms. Two people trying to talk quietly over breakfast end up surrounded by other guests doing the same. A property that works for couples solves this with space. That might mean <strong>standalone cottages</strong> or <strong>well-spaced glamping tents</strong>. Or it might mean so few rooms that the common areas never feel crowded. When you weigh up a couples resort, check how many rooms it has in total. A property with a handful of rooms feels nothing like one with forty.</p>
       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">2. Is There a Setting That Replaces Conversation?</h3>
       <p>The best couples trips are the ones where you sit somewhere beautiful and do not need to say much. The view, the cool air and the light do the work. A couples resort in Mussoorie should give you this without effort. Look for a ridgeline view, a forest path from your door, or enough height for clear evening skies.</p>
       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">3. Can You Have an Evening That Does Not Require Leaving the Property?</h3>
       <p>A bonfire, outdoor seats with blankets and a simple meal under the open sky make an evening most restaurants cannot match. For couples, the chance to stay on the property after dinner, watch the stars or sit by the fire adds something a hotel dining room simply cannot.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">What Sets a Glamping Couples Resort Apart from a Standard Mussoorie Hotel?</h2>
       <p><strong>Everest Base Camp Mussoorie</strong> is a luxury glamping resort near George Everest Peak that meets all three needs above. It has just 14 rooms in seven categories, with tents and cottages spread through deodar forest, so there is natural space between guests. The setting near the peak and the Doon Valley ridge lets the scenery do its own work. And the evening belongs to the property. There is a bonfire every evening with blankets, and you can ask for a candlelit dinner at your cottage with 24 hours' notice. Honeymooners get a rose-petal welcome at no charge, and Andrew's Villa is the room most requested for honeymoons. If you have stayed in Mussoorie before and found the usual hotel flat, this is a clear step up in how you live the mountain setting.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">Which Activities Are Worth Doing as a Couple in Mussoorie?</h2>
       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">Morning Treks Near George Everest Peak</h3>
       <p>The trek to George Everest Peak takes two to three hours at an easy pace. Couples without outdoor training can manage it. The trail runs through forest and opens onto a ridgeline with views across the Doon Valley. Go early in the morning, when the light is clearest. At EBC, the guided nature walk runs daily from 7 to 9 AM, and it is included in every stay.</p>
       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">Camel's Back Road Walk</h3>
       <p>This is a three-kilometre walk along the ridge. It is quiet enough for a proper conversation and scenic enough to feel worth it. It takes little effort, gives a lot back, and needs no planning. Go in the morning or the evening.</p>
       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">Landour Exploration</h3>
       <p>Landour, the old cantonment, moves at a much slower pace than Mussoorie town. Spend a few hours at the Char Dukan tea stalls and among the old colonial buildings on the upper ridge. It rounds out a trip without much physical effort.</p>
       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">Lal Tibba Viewpoint</h3>
       <p>At 2,275 metres, this is the highest point in Mussoorie. On a clear day between October and February, you can see peaks such as Bandarpunch and Kedarnath. The Japanese telescope at the viewpoint gives you a closer look at the snow line.</p>
       <p>Look through the rooms and tents at <a href="/rooms/" class="text-secondary underline">EBC Mussoorie</a> to plan the right days around your stay.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">Practical Checklist: What Should You Ask Before You Book a Couples Resort in Mussoorie?</h2>
       <p>Use these questions to narrow your shortlist:</p>
       <ul class="list-disc pl-6 space-y-1">
         <li>Does the room give you real privacy, not just a door that closes?</li>
         <li>What is the view from the room itself, rather than from a shared terrace?</li>
         <li>Is there an outdoor evening setup, either included or on request?</li>
         <li>What can you do from the property without arranging transport?</li>
         <li>How many guests can the property hold in total?</li>
         <li>Is the cancellation policy fair if your plans change?</li>
       </ul>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">When Should You Go for a Couples Trip to Mussoorie?</h2>
       <p><strong>Best windows:</strong> October and November bring the clearest skies, open trails and fewer crowds. March to May brings warmth, colour and easy evenings.</p>
       <p><strong>The monsoon, July to September:</strong> For two people, this is the most private time of year. The forest turns deep green, mist drifts through the deodars, and every tent and cottage at EBC is weather-proofed. Plan long evenings in, not long treks. Landslides can close hill roads, so check advisories before you drive.</p>
       <p><strong>Worth considering:</strong> December and January suit couples who want a quieter, colder Mussoorie. The nights are crisp and the bonfire comes into its own. Choose a room with good heating and pack warm layers. It is a less active trip, but a memorable one.</p>
       <p>The <a href="/rooms/" class="text-secondary underline">rooms, cottages and tents at EBC Mussoorie</a> each feel different from season to season. Picking the right window makes a big difference.</p>`,
    ],
  },
  faqs: [
    {
      question: "What makes a resort suitable for couples in Mussoorie?",
      answer:
        "Private rooms, a fine outdoor setting, few other guests, and an evening you can enjoy without leaving the property.",
    },
    {
      question: "Is Mussoorie good for a couples anniversary trip?",
      answer:
        "Yes. The hill setting, easy access to treks and the choice of intimate glamping stays make it a strong pick for an anniversary.",
    },
    {
      question: "How long should a couples trip to Mussoorie be?",
      answer:
        "Two nights are enough. Three nights give you a slower pace and an extra day for Dhanaulti or Landour.",
    },
    {
      question: "Are couples resorts in Mussoorie available year-round?",
      answer:
        "Most stay open all year, though the activities change with the season. EBC Mussoorie stays open through the monsoon too. Confirm details with the property.",
    },
    {
      question: "What is the price range for a couples glamping stay in Mussoorie?",
      answer:
        "Prices vary. Contact properties directly for current rates and what each package includes.",
    },
    {
      question: "Is early check-in available at couples resorts in Mussoorie?",
      answer:
        "It depends on the property and on availability. At EBC, standard check-in is 2:00 PM. Ask for early check-in when you book.",
    },
  ],
};

export const metadata = guideMeta("couples-resort-mussoorie", articleData.metaData);

export default function CouplesResortPage() {
  const renderContent = (htmlString: string) => {
    return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
  };

  return (
    <main className="bg-[#0C150D] text-[#F7F5EE]">
      <JsonLd data={guideSchema("couples-resort-mussoorie", articleData)} />
      <HeroBanner {...articleData.banner} />

      <SectionWithContainer sectionClassName="bg-[#0C150D] py-16">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full border border-secondary/20 bg-secondary/10 px-3 py-1 text-xs uppercase tracking-[0.35em] text-secondary">
              {articleData.details.subtitle}
            </span>
            <SectionHeading title={articleData.details.title} titleColor="white" />
            <div className="space-y-5 text-base leading-relaxed text-[#EDE7D9] md:text-lg">
              {articleData.intro.description.map((text, index) => (
                <p key={`intro-${index}`}>{text}</p>
              ))}
              {articleData.details.description.map((html, index) => (
                <div key={`details-${index}`} className="space-y-3">
                  {renderContent(html)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWithContainer>

      <SectionWithContainer sectionClassName="bg-[#F7F5EE] py-16">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="space-y-3 text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-secondary">Common Questions</p>
            <SectionHeading2
              title="Frequently Asked Questions"
              description="Everything you need to know before booking your couples resort stay."
              textCenter
              titleColor="#0C150D"
              descriptionColor="#4A5A47"
            />
          </div>
          <div className="space-y-4">
            {articleData.faqs.map((faq, index) => (
              <Accordion2 key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </SectionWithContainer>
      <RelatedGuides slug="couples-resort-mussoorie" />
    </main>
  );
}