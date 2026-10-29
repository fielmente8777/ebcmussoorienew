import HeroBanner from "@/components/banner/HeroBanner";
import Accordion2 from "@/components/accordion/Accordion2";
import { SectionWithContainer } from "@/components/sectionComponants";
import SectionHeading from "@/components/typography/SectionHeading";
import { SectionHeading2 } from "@/components/typography/SectionHeading2";
import { guideMeta, guideSchema } from "../components/guides";
import JsonLd from "@/components/seo/JsonLd";

const articleData = {
  slug: "mussoorie-trip-package-from-delhi",
  metaData: {
    title: "Planning a Mussoorie Trip Package from Delhi: The Complete Breakdown | EBC Mussoorie",
    description:
      "Mussoorie is about 280 km from Delhi, 5.5 to 6.5 hours by road. What trip packages include, what to check before you pay, and a two-night plan that works.",
  },
  banner: {
    title: "Planning a Mussoorie Trip Package from Delhi",
    subTitle: "The Complete Breakdown",
    description:
      "A plain guide to planning and judging a Mussoorie trip package from Delhi: what to look for, what to avoid, and how to plan the trip yourself.",
    image: "/banner/bnr2.png",
  },
  intro: {
    title: "Planning a Mussoorie Trip Package from Delhi",
    description: [
      "A Mussoorie trip package from Delhi sounds simple until you compare a few. Some cover only the room and breakfast. Others bundle the car, activities and meals into one price. A few promise things that turn out to be seasonal, sold out or hedged in the fine print. This guide shows how to plan and judge a Mussoorie package from Delhi. It covers what a good package should include, and how to plan your own trip if you would rather travel on your own.",
    ],
  },
  details: {
    title: "What Does a Mussoorie Trip Package from Delhi Actually Cover?",
    subtitle: "A Practical Breakdown",
    description: [
      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">What Does a Mussoorie Trip Package from Delhi Actually Cover?</h2>
       <p>Most packages take one of three forms.</p>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>Packages with transport:</strong> These cover the round trip from Delhi, usually by private or shared cab, plus your room. Meals may or may not be in. They suit travellers who do not want to sort out a car.</li>
         <li><strong>Packages with activities:</strong> These include your room, a few outings and some or all meals. Think a Kempty Falls visit, local sightseeing and a bonfire evening. They suit first-timers who like a set plan.</li>
         <li><strong>Glamping stays:</strong> These are offered by the resort itself, such as <a href="/" class="text-secondary underline">Everest Base Camp Mussoorie</a>. At EBC, every room includes breakfast for two, the evening bonfire, a guided morning nature walk, Wi-Fi and free parking. There are 14 rooms in seven categories, from forest tents to a private villa. Walks near George Everest Peak are right on the doorstep. This is the richest of the three in what you actually do, and it has grown steadily popular with Delhi NCR travellers.</li>
       </ul>
       <p>See what each room offers on <a href="/rooms/" class="text-secondary underline">EBC Mussoorie's rooms and tents page</a> before you compare it with tour operator deals.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">What Is a Good Two-Night Plan for a Mussoorie Trip From Delhi?</h2>
       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">Day 1: How Do You Get From Delhi to Mussoorie?</h3>
       <ul class="list-disc pl-6 space-y-1">
         <li>Leave Delhi by 5:00 to 6:00 AM to beat the morning traffic on NH-58</li>
         <li>Route: NH58 via Roorkee or NH334 via Haridwar to Dehradun</li>
         <li>Delhi to EBC Mussoorie: about 280 km, or 5.5 to 6.5 hours in all</li>
         <li>The last stretch from Dehradun is about 35 km, or 1 to 1.5 hours</li>
         <li>Check in from 2 PM. Arriving earlier? Ask about early check-in when you book.</li>
         <li>Afternoon: rest, or take a short walk around the property</li>
         <li>Evening: the bonfire, then dinner</li>
       </ul>
       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">Day 2: What Should You Do on Your Full Day?</h3>
       <ul class="list-disc pl-6 space-y-1">
         <li>Early morning: the guided nature walk, which runs daily from 7 to 9 AM</li>
         <li>Morning: walk toward George Everest Peak (2 to 3 hours there and back at an easy pace). The George Everest House is open from 9 AM to 6 PM.</li>
         <li>Late breakfast or lunch at the property or the Park Café</li>
         <li>Afternoon: Lal Tibba or the 3 km Camel's Back Road walk, as energy allows</li>
         <li>Evening: a trip to Landour Bazaar, or a second night by the fire</li>
       </ul>
       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">Day 3: How Do You Get Back to Delhi on Time?</h3>
       <ul class="list-disc pl-6 space-y-1">
         <li>An early walk along the ridge</li>
         <li>Check out in the late morning (confirm the time when you book)</li>
         <li>Drive back to Delhi via Dehradun</li>
         <li>Reach Delhi by early evening in normal traffic</li>
       </ul>
       <p>This plan works just as well for couples, families and small groups. Shape Day 2 around your group's pace and interests.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">What Should You Check Before You Confirm a Package?</h2>
       <p>Whatever the format, go through this list before you pay.</p>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>Room:</strong> What is the exact tent or room type? Is the bathroom attached or shared? Are there warm blankets and heating for the cold months?</li>
         <li><strong>Meals:</strong> Which meals are included? Can they handle your diet? Are meals at set times or on request?</li>
         <li><strong>Activities:</strong> Which activities are in the price, and which cost extra? Do any depend on the season or the weather?</li>
         <li><strong>Transport:</strong> Is pickup from Delhi included? What kind of car is it? Is the driver with you all trip, or only for transfers?</li>
         <li><strong>Cancellation:</strong> What happens if the weather makes the drive unwise? Can you get a refund or move your dates? At EBC, the cancellation and date-change terms are on the packages page. Read them before you book.</li>
         <li><strong>Monsoon trips:</strong> EBC stays open from July to September, its quietest season. Hill roads can close after heavy rain, so check advisories before you drive and keep a spare day.</li>
       </ul>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">Should You Book a Package or Travel Independently From Delhi?</h2>
       <p><strong>Choose a package if:</strong></p>
       <ul class="list-disc pl-6 space-y-1">
         <li>This is your first trip</li>
         <li>You want every detail handled for you</li>
         <li>You are in a group with mixed tastes</li>
         <li>You want a set plan of activities</li>
       </ul>
       <p><strong>Travel on your own if:</strong></p>
       <ul class="list-disc pl-6 space-y-1">
         <li>You have your own car and like to keep plans loose</li>
         <li>You want to add Dhanaulti or another stop</li>
         <li>You know mountain travel well and like to book each part yourself</li>
       </ul>
       <p>For most first-timers from Delhi NCR, a glamping stay at a place like <a href="/" class="text-secondary underline">Everest Base Camp Mussoorie</a> makes the trip much easier. <a href="https://tripoto.com/india/trips/did-you-know-that-just-8-hours-from-delhi-there-s-an-everest-base-camp-no-we-re-not-kidding-3aea3a54f8628a1c8" class="text-secondary underline" target="_blank" rel="noopener">Tripoto's guide to EBC Mussoorie</a> sets out the road, rail and air routes from Delhi.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">How Far Is Mussoorie From Delhi and Nearby Cities?</h2>
       <table class="w-full border-collapse my-4 text-sm md:text-base">
         <thead>
           <tr class="border-b border-secondary/30">
             <th class="text-left py-2 font-semibold text-secondary">Departure Point</th>
             <th class="text-left py-2 font-semibold text-secondary">Distance</th>
             <th class="text-left py-2 font-semibold text-secondary">Estimated Drive Time</th>
           </tr>
         </thead>
         <tbody>
           <tr class="border-b border-secondary/20">
             <td class="py-2 pr-4">Delhi</td>
             <td class="py-2 pr-4">About 280 km</td>
             <td class="py-2 pr-4">5.5 to 6.5 hours</td>
           </tr>
           <tr class="border-b border-secondary/20">
             <td class="py-2 pr-4">Gurugram</td>
             <td class="py-2 pr-4">A little more than from Delhi</td>
             <td class="py-2 pr-4">Allow extra time for traffic</td>
           </tr>
           <tr class="border-b border-secondary/20">
             <td class="py-2 pr-4">Noida</td>
             <td class="py-2 pr-4">About the same as from Delhi</td>
             <td class="py-2 pr-4">Allow extra time for traffic</td>
           </tr>
           <tr class="border-b border-secondary/20">
             <td class="py-2 pr-4">Chandigarh</td>
             <td class="py-2 pr-4">About 170 km to Dehradun, then 35 km up the hill</td>
             <td class="py-2 pr-4">About 5 hours</td>
           </tr>
           <tr class="border-b border-secondary/20">
             <td class="py-2 pr-4">Dehradun</td>
             <td class="py-2 pr-4">35 km</td>
             <td class="py-2 pr-4">1 to 1.5 hours</td>
           </tr>
           <tr>
             <td class="py-2 pr-4">Jolly Grant Airport, Dehradun</td>
             <td class="py-2 pr-4">About 55 km</td>
             <td class="py-2 pr-4">1.5 hours</td>
           </tr>
         </tbody>
       </table>
       <p>Distances are to EBC Mussoorie on Hathipaon Road. By train, the Shatabdi Express runs from Delhi to Dehradun in about 5.5 hours. Dehradun station is 35 km from EBC, and the team can arrange a transfer if you ask when you book.</p>`,
    ],
  },
  faqs: [
    {
      question: "How do I book a Mussoorie trip package from Delhi?",
      answer:
        "Book with the resort itself for a stay at that property. For a package with transport, use a registered travel operator. Either way, get the inclusions in writing.",
    },
    {
      question: "What is the best time to book a Mussoorie package from Delhi?",
      answer:
        "For peak season, book four to six weeks ahead. Long weekends and national holidays fill up first.",
    },
    {
      question: "Are Mussoorie trip packages available for groups?",
      answer:
        "Yes. Most resorts and operators take groups and can tailor a package for larger bookings. EBC Mussoorie hosts groups of 8 to 48 guests.",
    },
    {
      question: "How much does a basic Mussoorie trip package from Delhi cost?",
      answer:
        "It varies a lot by format and season. Ask each property for current rates and what is included.",
    },
    {
      question: "Is a two‑night package sufficient for Mussoorie?",
      answer:
        "Yes. Two nights covers the main things comfortably for most travellers.",
    },
    {
      question: "Can I customise a Mussoorie trip package?",
      answer:
        "Many places will adjust meals, activities and transport. Ask the property what can be changed. At EBC, extras such as a candlelit dinner at your cottage or a private bonfire can be added on request.",
    },
  ],
};

export const metadata = guideMeta("mussoorie-trip-package-from-delhi", articleData.metaData);

export default function MussoorieTripPackagePage() {
  const renderContent = (htmlString: string) => {
    return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
  };

  return (
    <main className="bg-[#0C150D] text-[#F7F5EE]">
      <JsonLd data={guideSchema("mussoorie-trip-package-from-delhi", articleData)} />
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
              description="Everything you need to know before booking your Mussoorie trip package from Delhi."
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
    </main>
  );
}