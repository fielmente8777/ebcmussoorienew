import HeroBanner from "@/components/banner/HeroBanner";
import Accordion2 from "@/components/accordion/Accordion2";
import { SectionWithContainer } from "@/components/sectionComponants";
import SectionHeading from "@/components/typography/SectionHeading";
import { SectionHeading2 } from "@/components/typography/SectionHeading2";
import { guideMeta, guideSchema } from "../components/guides";
import JsonLd from "@/components/seo/JsonLd";

const articleData = {
  // ✅ URL is exactly: business-retreat-venue-uttarakhand
  slug: "business-retreat-venue-uttarakhand",
  metaData: {
    title: "Business Retreat Venue in Uttarakhand: A Selection Framework for Decision Makers | EBC Mussoorie",
    description:
      "Pick a business retreat venue in Uttarakhand in four steps: capacity, setting, infrastructure and access. Plus the checklist to get in writing first.",
  },
  banner: {
    title: "Business Retreat Venue in Uttarakhand",
    subTitle: "A Selection Framework for Decision Makers",
    description:
      "A good venue does not promise a good retreat. A bad one almost always ruins it. This guide is a way to choose, not a list of names.",
    image: "/banner/bnr2.png", // Replace with a business retreat banner if available
  },
  intro: {
    title: "Business Retreat Venue in Uttarakhand",
    description: [
      "Choosing a business retreat venue is a lopsided risk. A good venue does not promise a good retreat. A bad one almost always ruins it. Think of a meeting room that seats fewer people than your team. Think of Wi-Fi that fails when fifteen people log on at once, or a kitchen that cannot cope with your team's diets. Worst of all is a wedding at the venue on your second night. No amount of good facilitation recovers from these.",
      "So this guide is a way to choose, not a list of names. It covers what to check, in what order, and what to get in writing before you commit.",
    ],
  },
  details: {
    title: "The Business Retreat Framework",
    subtitle: "Assess, Compare, Decide",
    description: [
      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">Assessment Layer One: Can the venue fit your group?</h2>
       <p>This is the first filter. It is also the one most often got wrong.</p>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>Beds:</strong> Confirm how many guests the venue can sleep, not how many rooms it has. These are two different numbers. For example, EBC Mussoorie, on the western Mussoorie ridge, has 14 luxury stays in seven categories. They sleep 28 guests without extra beds and up to 50 with them. A planner who reads "14 units" and assumes two per room will reach the wrong figure.</li>
         <li><strong>Dining, all at once:</strong> Can the venue seat your whole group for one meal at the same time? A place that sleeps 30 but seats 18 will split you into two sittings. That breaks up the shared meals a retreat relies on.</li>
         <li><strong>Meeting space, by layout:</strong> Theatre seating and boardroom seating give very different numbers in the same room. Ask for the seated count in the layout you need.</li>
       </ul>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">Assessment Layer Two: Does the setting do what you need?</h2>
       <p>Once the numbers work, ask whether the setting does its job.</p>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>Distance from distraction:</strong> A venue on a busy hill station main road brings traffic, crowds and tourist noise all day. A venue on a private estate, away from the shops, does not. EBC Mussoorie sits on a private forest estate on Hathipaon Road, near Sir George Everest's House and well away from Mall Road traffic. For a retreat built on focus, that is a practical feature, not just a pretty one.</li>
         <li><strong>Exclusive use:</strong> Can your group take the whole property? At EBC Mussoorie, you can book all 14 stays as a full property block, for groups of up to 48. Then no other guests are on site. You never share common spaces with holidaymakers or another group.</li>
         <li><strong>Outdoor sessions:</strong> At EBC Mussoorie, mornings start with guided forest walks from 7 to 9 AM. Evenings bring bonfire team sessions. Park Café, on Sir George Everest's old stables, can set up a barbecue or picnic. The Everest heritage site is a short walk away. For indoor work or a private evening, <a href="/den/" class="text-secondary underline">The Den</a> is a private venue on the estate.</li>
       </ul>
       <p>Review the <a href="/rooms/" class="text-secondary underline">accommodation and estate setup</a> before you contact us.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">Assessment Layer Three: Is the infrastructure good enough?</h2>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>Connectivity:</strong> Ask how the internet copes when your whole group is online at once, not just its top speed. EBC Mussoorie has free Wi-Fi across the property. It is good for browsing and video calls, though mountain signal can vary. Confirm what to expect for your group size when you enquire.</li>
         <li><strong>AV:</strong> Find out what the venue provides and what you must bring. Projectors, screens, microphones and flip charts are often not standard at boutique venues.</li>
         <li><strong>Power:</strong> Ask about backup power, above all if your retreat leans on presentations.</li>
         <li><strong>Food and drink:</strong> Can meal times move if a session runs long? Can the kitchen handle every diet in your team, and how much notice does it need? At EBC, full board with local Garhwali and continental menus can be arranged.</li>
       </ul>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">Assessment Layer Four: How easy is access, and what are the risks?</h2>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>Travel time and route:</strong> EBC Mussoorie is about 280 km from Delhi, or 5.5 to 6.5 hours by road. It is about 55 km from Jolly Grant Airport, Dehradun, roughly 1.5 hours. The airport has daily flights from Delhi, Mumbai and Bangalore.</li>
         <li><strong>Arrival:</strong> EBC Mussoorie has direct road access and free, secure parking. If your group is coming by coach, confirm vehicle size with us first. Hill roads matter more than you might think.</li>
         <li><strong>Seasonal risk:</strong> February to April and September to November are the most reliable windows. We stay open through the monsoon, and it is our quietest season. For July to August dates, though, heavy rain can bring landslides and road closures. Check advisories, build in a buffer day and keep plans flexible.</li>
         <li><strong>Cancellation terms:</strong> Get them in writing before you pay a deposit, above all for monsoon or winter dates.</li>
       </ul>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">What should you get in writing before you pay?</h2>
       <p>Before you sign off any deposit, get written confirmation of:</p>
       <ul class="list-disc pl-6 space-y-1">
         <li>How many of your group the venue can sleep at once</li>
         <li>How many it can seat for a meal at once</li>
         <li>Seated meeting capacity in the layout you need</li>
         <li>Wi-Fi provision and how it performs for your number of users</li>
         <li>AV provision, and what you must bring</li>
         <li>How the kitchen handles special diets, and how much notice it needs</li>
         <li>Whether the venue will host other groups on your dates</li>
         <li>A named coordinator for your booking</li>
         <li>A full, itemised cost, with what is included and what is not set out clearly</li>
         <li>Cancellation and date-change terms</li>
       </ul>
       <p>An itemised proposal straight from the venue is the only sound basis for a cost approval. Prices change with the season, group size and inclusions. General market guesses are no substitute.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">Why does the setting matter for retreat outcomes?</h2>
       <p>It is worth saying plainly, because it is the real reason to leave the office.</p>
       <p>Take a team out of its usual setting and the office pecking order loosens. The person who runs every meeting often listens more on a forest trail. The person who rarely speaks in meetings often speaks first around a fire.</p>
       <p>Some venues help that happen. Forest cover, height, distance from city routines and shared meals without interruptions all play a part. Such venues give you a different result from one that only offers a nice view. One team who held a 15-person offsite with us said they came back more connected than any workshop had made them. The <a href="https://www.hotelierindia.com/operations/experience-tranquil-adventure-in-the-heart-of-mussoorie-with-ebc-mussoorie" class="text-secondary underline" target="_blank" rel="noopener">Hotelier India feature on EBC Mussoorie</a> covers how the resort builds its guest experience around this idea.</p>`,
    ],
  },
  faqs: [
    {
      question: "What group size does EBC Mussoorie accommodate for a business retreat?",
      answer:
        "We host work groups of 8 to 48 guests. The 14 stays, in seven categories, sleep 28 guests without extra beds and up to 50 with extra beds.",
    },
    {
      question: "Can we book the entire property exclusively?",
      answer:
        "Yes. A full property block gives your group all 14 stays, with no other guests on site. Contact EBC Mussoorie directly to check dates.",
    },
    {
      question: "What is the cost of a business retreat at EBC Mussoorie?",
      answer:
        "Ask us for an itemised proposal. Costs change with group size, dates and inclusions, so a direct quote is the only accurate basis for planning.",
    },
    {
      question: "What is the WiFi situation?",
      answer:
        "Free Wi-Fi covers the whole property. It is good for browsing and video calls, though mountain signal can vary. Tell us how many people will be online at once when you enquire.",
    },
    {
      question: "How far is the property from Jolly Grant Airport?",
      answer:
        "About 55 km, or roughly 1.5 hours. Confirm group transfers with us in advance.",
    },
    {
      question: "When should we avoid booking?",
      answer:
        "We are open all year, so it is more about planning than avoiding. Mid-July to mid-August carries a risk of road disruption, so build in buffer time. May to June brings heavy Char Dham Yatra traffic on the approach routes. February to April and September to November are the most reliable windows.",
    },
  ],
};

export const metadata = guideMeta("business-retreat-venue-uttarakhand", articleData.metaData);

export default function BusinessRetreatVenuePage() {
  const renderContent = (htmlString: string) => {
    return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
  };

  return (
    <main className="bg-[#0C150D] text-[#F7F5EE]">
      <JsonLd data={guideSchema("business-retreat-venue-uttarakhand", articleData)} />
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
              description="Everything you need to know before booking your business retreat venue in Uttarakhand."
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