import HeroBanner from "@/components/banner/HeroBanner";
import Accordion2 from "@/components/accordion/Accordion2";
import { SectionWithContainer } from "@/components/sectionComponants";
import SectionHeading from "@/components/typography/SectionHeading";
import { SectionHeading2 } from "@/components/typography/SectionHeading2";
import { guideMeta, guideSchema } from "../components/guides";
import JsonLd from "@/components/seo/JsonLd";

const articleData = {
  slug: "weekend-trip-from-delhi-to-mountains",
  metaData: {
    title: "Weekend Trip from Delhi to the Mountains: Your Complete Escape Guide | EBC Mussoorie",
    description:
      "The best weekend trips from Delhi to the mountains, with drive times, a two-night plan, where to stay and the practical tips that make 48 hours count.",
  },
  banner: {
    title: "Weekend Trip from Delhi to the Mountains",
    subTitle: "Your Complete Escape Guide",
    description:
      "Some of India's finest mountain towns sit within 300 km of the capital. Here is how to reset without taking leave.",
    image: "/banner/bnr2.png",
  },
  intro: {
    title: "Weekend Trip from Delhi to the Mountains",
    description: [
      "Most people in Delhi know the feeling. It is Thursday evening, the week has been long, and you are already searching for somewhere to go. The good news is that some of India's finest mountain towns sit within 300 km of the capital. A weekend trip from Delhi to the mountains is more than possible. It is one of the most practical ways to reset without taking leave. This guide covers the best options, the travel details and how to make the most of 48 hours in the hills.",
      "Delhi is lucky in its geography. The Shivaliks and the lower Himalayas begin a few hours from the city, and several hill towns are within reach by Friday night. Here is why mountain weekends from Delhi work. The drive to the most popular hill stations takes 5 to 8 hours. The Delhi-Meerut Expressway has cut time on the first stretch out of the city. There are options for every travel style and every kind of group. And most places offer enough to fill two nights without feeling rushed. The key is to choose the right place for your trip, not just the most popular one.",
    ],
  },
  details: {
    title: "The Mountain Destinations Worth Considering from Delhi",
    subtitle: "Your Escape Guide",
    description: [
      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">Which Mountain Destinations Are Worth Considering from Delhi?</h2>
       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">Why choose Mussoorie?</h3>
       <p><strong>Distance:</strong> about 280 km to EBC Mussoorie. <strong>Drive time:</strong> 5.5 to 6.5 hours via Dehradun. Mussoorie sits at around 2,005 metres. It is one of the easiest true Himalayan hill stations to reach from Delhi, and it works for couples, families and corporate groups alike.</p>
       <p>The choice of places to stay has grown a great deal in recent years. It now runs from heritage hotels to luxury glamping resorts set in the forest above the valley.</p>
       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">Is Lansdowne quieter?</h3>
       <p><strong>Distance:</strong> about 250 km. <strong>Drive time:</strong> 5 to 6 hours. Lansdowne is quieter than Mussoorie and far less commercial. It is a Garhwal Rifles cantonment town, with oak forests, a small lake and very little traffic. It suits travellers who want real quiet more than a busy hill town.</p>
       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">What is Chakrata like?</h3>
       <p><strong>Distance:</strong> about 320 km from Delhi. <strong>Drive time:</strong> 6 to 7 hours. Chakrata is a cantonment town in a restricted area, with dense forests and the well-known Tiger Falls nearby. Places to stay are few, but it is growing popular with photographers and trekkers.</p>
       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">Why go to Kanatal?</h3>
       <p><strong>Distance:</strong> about 310 km. <strong>Drive time:</strong> 6 to 7 hours. Kanatal is a small village between Chamba and Dhanaulti. It has very few crowds, apple orchards and clear night skies. It is good for glamping stays and for couples who want seclusion more than convenience.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">How Should You Plan a 2-Night Mountain Weekend from Delhi?</h2>
       <p>A plan that works for most travellers from Delhi:</p>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>Friday night:</strong> Leave Delhi by 5 PM or earlier and drive to your stay. Check in, have dinner and sleep. If you will arrive late, tell the property in advance.</li>
         <li><strong>Saturday:</strong> A full day for whatever you enjoy. Go trekking, see the sights, walk the local market, or simply stay put if the resort offers enough on its own. At EBC Mussoorie, you need not leave the estate to fill a day. The guided forest walk runs between 7 and 9 AM, and the bonfire is lit every evening.</li>
         <li><strong>Sunday:</strong> Take a morning walk, then check out. At EBC, check-out is at 11:00 AM. Drive back and reach Delhi by evening.</li>
       </ul>
       <p>This plan works because it does not try to do too much. Mountain weekends are best when they are not packed like a city itinerary.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">What Kind of Accommodation Should You Book?</h2>
       <p>That depends entirely on what you want from the trip.</p>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>Standard hotels:</strong> Good if you want a familiar setup and plan to use the hotel mainly as a base for sightseeing.</li>
         <li><strong>Boutique properties:</strong> Better if you want character, personal service and fewer guests around you.</li>
         <li><strong>Glamping resorts:</strong> The strongest choice for nature lovers, couples and groups who want a stay that feels nothing like a city hotel. <a href="/rooms/" class="text-secondary underline">EBC Mussoorie's glamping tents and cottages</a> sit in deodar forest on Hathipaon Road, outside the town, and that changes the whole feel of the stay.</li>
         <li><strong>Homestays:</strong> Simple, locally run, and often the best way to get to know a small hill town.</li>
       </ul>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">What Practical Things Affect Your Weekend Most?</h2>
       <p>A few things most travel guides skip:</p>
       <ul class="list-disc pl-6 space-y-1">
         <li>Book by Wednesday at the latest for weekend travel. The best places in Mussoorie fill up from Thursday onwards in summer and in October and November.</li>
         <li>Leave Delhi before 6 AM or after 9 PM on a Friday to miss the worst traffic around Ghaziabad and Meerut.</li>
         <li>Carry your own snacks for the drive. Food on the Haridwar stretch of the highway is hit and miss.</li>
         <li>In the monsoon, from July to September, check road and weather advisories before any hill drive, above all to Chakrata or Kanatal. Landslides can close roads with no warning. Keep your plans flexible, and make it a slow stay rather than a trekking trip.</li>
         <li>Pack one more warm layer than you think you need. Even in May, Mussoorie evenings drop to around 12 to 15 degrees Celsius.</li>
       </ul>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">What Makes Mussoorie the Default Choice for Most Delhi Travellers?</h2>
       <p>Of all the hill stations within weekend reach of Delhi, Mussoorie is chosen most often. It has the widest range of things to do, the best links by road, rail and air, and places to stay for every style of trip.</p>
       <p>The main draws include:</p>
       <ul class="list-disc pl-6 space-y-1">
         <li>Gun Hill, reached by ropeway, with views across the Doon Valley</li>
         <li>Lal Tibba, the highest point in Mussoorie, where binoculars look out to Bandarpunch and Kedarnath on clear days</li>
         <li>Kempty Falls, 15 km from Mussoorie town, which gets crowded but is truly impressive in full flow; go on a weekday if you can</li>
         <li>Camel's Back Road, a 3 km walking track along the ridge that is lovely at sunrise</li>
         <li>The Library and Landour area, for quieter walks and old bookshops</li>
       </ul>
       <p>If you want to go beyond the town and stay somewhere that feels less like a tourist zone, <a href="/" class="text-secondary underline">EBC Mussoorie</a> sits away from the crowds but stays easy to reach. It is 35 km from Dehradun, and it sits beside Sir George Everest's old house in Park Estate.</p>
       <p>To see what an outdoor mountain stay near Mussoorie looks like on the ground, read this detailed <a href="https://tripoto.com/india/trips/did-you-know-that-just-8-hours-from-delhi-there-s-an-everest-base-camp-no-we-re-not-kidding-3aea3a54f8628a1c8" class="text-secondary underline" target="_blank" rel="noopener">trip account of EBC Mussoorie on Tripoto</a>.</p>`,
    ],
  },
  faqs: [
    {
      question: "Which hill station is closest to Delhi?",
      answer:
        "Lansdowne, at around 250 km, is one of the closest. Mussoorie is a little further, with EBC Mussoorie about 280 km away, but it offers far more to do over a full weekend.",
    },
    {
      question: "Is it possible to do a one‑night mountain trip from Delhi?",
      answer:
        "Yes, but we strongly suggest two nights. With only one night, you spend most of Saturday in the car.",
    },
    {
      question: "What is the best month for a Delhi to the mountains weekend?",
      answer:
        "March to June and October to November are the most reliable windows for good weather and easy roads. The monsoon, from July to September, is the quietest and most atmospheric time in the hills. Go for a slow stay then, check road advisories before you drive, and keep your plans flexible.",
    },
    {
      question: "Is Mussoorie safe for solo travellers?",
      answer:
        "Yes. It is one of the best-connected hill towns near Delhi, with good local services. Dehradun is close by for trains and flights.",
    },
    {
      question: "How much does a two‑night Mussoorie trip cost on average?",
      answer:
        "It depends mostly on where you stay. Simple homestays and guesthouses can come to around Rs 4,000 to 6,000 for two nights. Boutique hotels and luxury glamping cost more, and rates change with the season. At EBC Mussoorie, every room includes breakfast for two, the evening bonfire, a guided morning walk, Wi-Fi and parking, so check what is included when you compare.",
    },
    {
      question: "Do I need to book activities in advance?",
      answer:
        "For trekking guides and special outdoor experiences, yes. For normal sightseeing around Mussoorie town, you can usually just turn up.",
    },
  ],
};

export const metadata = guideMeta("weekend-trip-from-delhi-mountains", articleData.metaData);

export default function WeekendTripPage() {
  const renderContent = (htmlString: string) => {
    return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
  };

  return (
    <main className="bg-[#0C150D] text-[#F7F5EE]">
      <JsonLd data={guideSchema("weekend-trip-from-delhi-mountains", articleData)} />
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
              description="Everything you need to know before planning your weekend mountain trip from Delhi."
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
