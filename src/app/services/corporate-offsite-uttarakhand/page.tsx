import HeroBanner from "@/components/banner/HeroBanner";
import Accordion2 from "@/components/accordion/Accordion2";
import { SectionWithContainer } from "@/components/sectionComponants";
import SectionHeading from "@/components/typography/SectionHeading";
import { SectionHeading2 } from "@/components/typography/SectionHeading2";
import { guideMeta, guideSchema } from "../components/guides";
import JsonLd from "@/components/seo/JsonLd";

const articleData = {
  // ✅ URL is exactly: corporate-offsite-uttarakhand
  slug: "corporate-offsite-uttarakhand",
  metaData: {
    title: "Corporate Offsite in Uttarakhand: A State-Wide Guide to Choosing the Right Venue | EBC Mussoorie",
    description:
      "Plan a corporate offsite in Uttarakhand by goal, not map. Compare four zones, from the Mussoorie ridge to Rishikesh, and what to confirm before you commit.",
  },
  banner: {
    title: "Corporate Offsite in Uttarakhand",
    subTitle: "A State-Wide Guide to Choosing the Right Venue",
    description:
      "Uttarakhand is now a default pick for Delhi NCR companies planning offsites. But 'Uttarakhand' is not a venue decision. The state holds four distinct offsite settings. Choose the wrong one and the trip costs the same but achieves less.",
    image: "/banner/bnr2.png", // Replace with a corporate offsite banner if available
  },
  intro: {
    title: "Corporate Offsite in Uttarakhand",
    description: [
      "Uttarakhand is now a default pick for Delhi NCR companies planning offsites, and for good reason. It has good road links, direct flights to Dehradun, real altitude, and a growing set of properties built to host groups. But 'Uttarakhand' is not a venue decision. The state holds four distinct offsite settings, and each one feels very different. Pick the wrong one for your goal and you get a trip that costs the same and achieves less.",
      "This guide maps the state by what your offsite needs to achieve, not by geography.",
    ],
  },
  details: {
    title: "The Corporate Offsite Guide",
    subtitle: "Choose the Right Venue",
    description: [
      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">Step One: What Is the Objective, and Which Zone Fits It?</h2>
       <p>Before you compare properties, answer one question. What is the offsite really for?</p>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>Strategy and leadership alignment:</strong> You need quiet, small scale and a setting that supports long talks. <strong>Garhwal ridge.</strong></li>
         <li><strong>Team bonding and energy:</strong> You need activity set-ups and a shared physical challenge. <strong>Rishikesh.</strong></li>
         <li><strong>Reward and recognition:</strong> You need somewhere distinctive that people will remember. <strong>Garhwal ridge or Corbett.</strong></li>
         <li><strong>Large-format conference:</strong> You need banquet halls and AV at scale. <strong>Dehradun city hotels.</strong></li>
         <li><strong>Deep work with a small senior team:</strong> You need true isolation. <strong>Lansdowne or the western Mussoorie ridge.</strong></li>
       </ul>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">Zone 1: Why Pick the Garhwal Ridge (Mussoorie and George Everest Area)?</h2>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>Access:</strong> About 280 km from Delhi, or 5.5 to 6.5 hours by road. Jolly Grant Airport is about 55 km away, roughly 1.5 hours.</li>
         <li><strong>Altitude:</strong> EBC sits at 2,160 metres.</li>
         <li><strong>Group size suited:</strong> 10 to 30</li>
         <li><strong>Best for:</strong> Leadership retreats, strategy offsites, incentive travel and team cohesion programmes</li>
       </ul>
       <p>This is the strongest zone in Uttarakhand for offsites where the quality of the talk matters more than the size of the event.</p>
       <p>EBC Mussoorie sits here, in deodar, pine and rhododendron forest on Park Estate. George Everest House is a short walk away. Here are the details that matter to corporate planners:</p>
       <ul class="list-disc pl-6 space-y-1">
         <li>14 luxury rooms across seven categories</li>
         <li>Capacity: 28 guests without extra beds, up to 50 with extra beds</li>
         <li>Corporate groups of 8 to 48 guests</li>
         <li>Free Wi-Fi across the property, good for browsing and video calls</li>
         <li>Park Café: a multi-cuisine café on the estate, built where Sir George Everest once kept his stables</li>
         <li>Private bonfire set-ups on the estate</li>
         <li>Outdoor BBQ and picnic set-ups beside the meadow</li>
         <li>Direct road access with free parking</li>
         <li>A setting well away from Mall Road traffic and crowds</li>
       </ul>
       <p>With 14 rooms, a group of 20 to 28 can take the whole property. For an offsite, that is the single most useful feature. The setting belongs to your team, and you do not share it with leisure guests.</p>
       <p>Look through the <a href="/rooms/" class="text-secondary underline">rooms and group setup at EBC Mussoorie</a> before you ask the property for a group proposal.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">Zone 2: Rishikesh</h2>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>Access:</strong> 240 km from Delhi</li>
         <li><strong>Altitude:</strong> 356 metres</li>
         <li><strong>Group size suited:</strong> 20 to 60</li>
         <li><strong>Best for:</strong> Adventure-style team bonding and younger teams</li>
       </ul>
       <p>Rishikesh has the most activity options in Uttarakhand. Think rafting, outdoor challenge courses and planned adventure days through registered operators. The trade-off is low altitude and heavy crowds in peak season. It is best from October to June. Rafting stops or is limited when the river runs high in the monsoon.</p>

       <h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">Zone 3: Jim Corbett and the Kumaon Foothills</h2>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>Access:</strong> 260 to 300 km from Delhi</li>
         <li><strong>Group size suited:</strong> 15 to 40</li>
         <li><strong>Best for:</strong> Incentive travel and reward trips for high performers</li>
       </ul>
       <p>Safari-based reward trips work well here. It suits planned working sessions less well. Dhikala zone permits must be booked ahead, and the zone closes in the monsoon.</p>

       <h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">Zone 4: Lansdowne and Pauri Garhwal</h2>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>Access:</strong> 250 km from Delhi</li>
         <li><strong>Altitude:</strong> 1,706 metres</li>
         <li><strong>Group size suited:</strong> 8 to 20</li>
         <li><strong>Best for:</strong> Small senior teams that need true isolation</li>
       </ul>
       <p>This is the quietest zone in the state. The choice of places to stay is very thin. It suits small leadership groups for whom the lack of distraction is the whole point.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">Zone Comparison for Planners: Which Zone Suits Which Objective?</h2>
       <div class="overflow-x-auto">
         <table class="min-w-full border border-secondary/20 text-sm">
           <thead>
             <tr class="bg-secondary/10">
               <th class="border border-secondary/20 px-4 py-2 text-left font-semibold text-secondary">Objective</th>
               <th class="border border-secondary/20 px-4 py-2 text-left font-semibold text-secondary">Zone</th>
               <th class="border border-secondary/20 px-4 py-2 text-left font-semibold text-secondary">Typical group size</th>
             </tr>
           </thead>
           <tbody>
             <tr>
               <td class="border border-secondary/20 px-4 py-2">Leadership strategy retreat</td>
               <td class="border border-secondary/20 px-4 py-2">Garhwal ridge</td>
               <td class="border border-secondary/20 px-4 py-2">10 to 28</td>
             </tr>
             <tr>
               <td class="border border-secondary/20 px-4 py-2">Team bonding and adventure</td>
               <td class="border border-secondary/20 px-4 py-2">Rishikesh</td>
               <td class="border border-secondary/20 px-4 py-2">20 to 60</td>
             </tr>
             <tr>
               <td class="border border-secondary/20 px-4 py-2">Incentive and reward travel</td>
               <td class="border border-secondary/20 px-4 py-2">Garhwal ridge or Corbett</td>
               <td class="border border-secondary/20 px-4 py-2">15 to 40</td>
             </tr>
             <tr>
               <td class="border border-secondary/20 px-4 py-2">Deep work, senior team</td>
               <td class="border border-secondary/20 px-4 py-2">Lansdowne or western Mussoorie ridge</td>
               <td class="border border-secondary/20 px-4 py-2">8 to 20</td>
             </tr>
             <tr>
               <td class="border border-secondary/20 px-4 py-2">Large conference</td>
               <td class="border border-secondary/20 px-4 py-2">Dehradun city</td>
               <td class="border border-secondary/20 px-4 py-2">100+</td>
             </tr>
           </tbody>
         </table>
       </div>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">What Should You Confirm With Any Uttarakhand Property Before Committing?</h2>
       <ul class="list-disc pl-6 space-y-1">
         <li>Room and dining capacity, at the same time, for your exact headcount</li>
         <li>Whether there is a covered meeting space, and how many it seats in your format</li>
         <li>How the Wi-Fi holds up with your expected number of users at once</li>
         <li>What AV is provided, and whether you need to bring your own</li>
         <li>Which diets the kitchen can handle, and how much notice it needs</li>
         <li>Cancellation terms if the weather disrupts plans</li>
         <li>Whether one coordinator is assigned to your group booking</li>
       </ul>
       <p>For pricing, ask the property for an itemised quote. Costs vary a lot by season, group size and inclusions. A direct quote is the only sound basis for an internal spend approval.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">Seasonal Guidance: When Should You Plan an Uttarakhand Offsite?</h2>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>February to April:</strong> A strong choice. The weather is stable, there are plenty of outdoor options, and the hills are not yet crowded.</li>
         <li><strong>May to June:</strong> Good weather but peak tourist traffic on the roads. Char Dham Yatra traffic also adds congestion on the Haridwar and Dehradun stretches.</li>
         <li><strong>September to November:</strong> The strongest window overall. Skies are the clearest of the year, crowds are moderate and roads are reliable.</li>
         <li><strong>July to August:</strong> This works with careful planning. Landslides can close hill roads, so check advisories before you drive and keep travel times loose. Covered meeting space and indoor options are a must. At EBC, the monsoon is the quietest, most atmospheric season, and every tent and cottage is weather-proofed.</li>
         <li><strong>December to February:</strong> Cold and quiet. It suits indoor-heavy agendas with bonfire evenings. Confirm how rooms are heated.</li>
       </ul>
       <p>This <a href="https://www.hotelierindia.com/operations/experience-tranquil-adventure-in-the-heart-of-mussoorie-with-ebc-mussoorie" class="text-secondary underline" target="_blank" rel="noopener">Hotelier India feature on EBC Mussoorie</a> describes a property built around the outdoors. Mornings start with a guided forest walk from 7 to 9 AM, and evenings end at the bonfire. That gives a group a very different dynamic from a conference hotel.</p>`,
    ],
  },
  faqs: [
    {
      question: "Which Uttarakhand zone is best for a first corporate offsite?",
      answer:
        "The Garhwal ridge around Mussoorie. It is easy to reach, the rooms are good, and it handles the widest range of group formats.",
    },
    {
      question: "What group size does EBC Mussoorie handle?",
      answer:
        "EBC hosts corporate groups of 8 to 48 guests. It has 14 rooms that sleep 28 guests, or up to 50 with extra beds.",
    },
    {
      question: "Does EBC Mussoorie have WiFi suitable for corporate use?",
      answer:
        "Yes. Free Wi-Fi runs across the property, and it is good for browsing and video calls. Signal can vary in the mountains, so share your group's needs when you enquire.",
    },
    {
      question: "How far in advance should we book?",
      answer:
        "Allow at least six to eight weeks for a full-property corporate booking in peak season.",
    },
    {
      question: "Can we do an Uttarakhand offsite in monsoon?",
      answer:
        "Yes, with covered meeting space and indoor options. EBC stays open through the monsoon, and it is the quietest time of year there. Landslides can close hill roads, so check advisories before July or August travel and keep your dates flexible.",
    },
    {
      question: "Should we combine two zones in one offsite?",
      answer:
        "Usually not. Splitting a short offsite across two settings means less depth in both. Choose one zone and stay put.",
    },
  ],
};

export const metadata = guideMeta("corporate-offsite-uttarakhand", articleData.metaData);

export default function CorporateOffsiteUttarakhandPage() {
  const renderContent = (htmlString: string) => {
    return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
  };

  return (
    <main className="bg-[#0C150D] text-[#F7F5EE]">
      <JsonLd data={guideSchema("corporate-offsite-uttarakhand", articleData)} />
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
              description="Everything you need to know before planning your corporate offsite in Uttarakhand."
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