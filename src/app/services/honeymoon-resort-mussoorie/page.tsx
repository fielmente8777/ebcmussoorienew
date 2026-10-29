import HeroBanner from "@/components/banner/HeroBanner";
import Accordion2 from "@/components/accordion/Accordion2";
import { SectionWithContainer } from "@/components/sectionComponants";
import SectionHeading from "@/components/typography/SectionHeading";
import { SectionHeading2 } from "@/components/typography/SectionHeading2";
import { guideMeta, guideSchema } from "../components/guides";
import JsonLd from "@/components/seo/JsonLd";

const articleData = {
  slug: "honeymoon-resort-mussoorie",
  metaData: {
    title: "Honeymoon Resort in Mussoorie: What Couples Actually Remember After the Trip | EBC Mussoorie",
    description:
      "How to choose a honeymoon resort in Mussoorie: what makes a stay memorable, what to look for, what to ask, and why glamping suits couples so well.",
  },
  banner: {
    title: "Honeymoon Resort in Mussoorie",
    subTitle: "What Couples Actually Remember After the Trip",
    description:
      "What makes a Mussoorie honeymoon stay special: the moments, the setting and the small details that couples remember for years.",
    image: "/banner/bnr2.png",
  },
  intro: {
    title: "Honeymoon in Mussoorie: Choosing the Right Stay",
    description: [
      "Nobody remembers a honeymoon for the thread count. You remember the moment the tent flap opened to a wall of fog rolling up from the valley. You remember the bonfire that ran three hours longer than planned. Couples who look back on a mountain honeymoon recall the feel of the place, not the size of the room or the number of restaurants. That is the right way to look for a honeymoon resort in Mussoorie. Don't ask which one has the most facilities. Ask which one makes room for those unplanned moments. This guide covers exactly that: what makes a Mussoorie honeymoon special, what to look for, and what to ask before you book.",
    ],
  },
  details: {
    title: "What Makes a Honeymoon Stay in Mussoorie Special",
    subtitle: "A Couple's Guide",
    description: [
      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">What Does Mussoorie Offer Honeymooners That Other Places Do Not?</h2>
       <p>Mussoorie is not Goa. It is not Udaipur. Those places have their own charm. But Mussoorie gives couples something different: a honeymoon that feels like a true break from everyday life.</p>
       <p>The town sits at roughly 2,000 metres, and EBC is a little higher at 2,160 m. Even in summer, the air turns cool soon after sunset. The mountain air has a crispness that no plains city can match. Some mornings open to clear views. On others, cloud rolls in and changes the whole scene in minutes. Both are lovely in their own way.</p>
       <p>The Mussoorie hills also offer couples something rare in popular Indian destinations: <strong>real quiet</strong>. Stay away from Mall Road, within a 10 to 15 kilometre radius of George Everest Peak, and the nights are still.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">What Should You Look For in a Honeymoon Resort in Mussoorie?</h2>
       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">How Private Is the Room?</h3>
       <p>A honeymoon stay should not feel like a hotel corridor. The best choice for couples is a <strong>standalone unit</strong>, such as a private cottage or a luxury tent. Look for no shared walls, and enough space between units that you cannot hear the people next door. Well-spaced luxury tents give you this by design. They offer a kind of separation that most hotel buildings cannot.</p>
       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">Is the Setting as Good as the Room?</h3>
       <p>A beautiful room facing a car park is not a honeymoon stay. What you see and do from your room matters as much as the room itself. Resorts close to trails, ridges or forest give you the sense of being part of the place. That is what makes a hill honeymoon different from a city hotel.</p>
       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">Evening Experience Quality</h3>
       <p>The evenings of a honeymoon matter as much as the days. Ask the resort exactly what evenings look like. Is there a bonfire? Is there outdoor seating? Is there a quiet spot for two that is not a busy dining hall full of other guests?</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">Why Does a Glamping Resort Work So Well for a Mussoorie Honeymoon?</h2>
       <p><strong>Everest Base Camp Mussoorie</strong> is a premium glamping resort on Hathipaon Road, near George Everest Peak. It is built around the kind of stay that suits couples. Our tents and cottages are spread through deodar forest, which gives you privacy. The guided morning walk, held daily from 7 to 9 AM, starts right on the estate. And the evenings don't require you to leave: the bonfire is lit every night.</p>
       <p>Honeymoons are our most popular occasion. The Andrew's Villa, a private villa with its own entrance, terrace and bonfire area, is the room couples ask for most. The Zenith Luxury Cottage, with its private east-facing veranda, is another favourite. We offer honeymooners a rose-petal welcome at no charge, and can set up a candlelit dinner at your cottage with 24 hours' notice.</p>
       <p>This mix of nature and comfort suits a honeymoon better than a standard hotel. In most hotels, the outdoors means a balcony or a pool deck. Here it means a forest path from your front door. See <a href="/rooms/" class="text-secondary underline">EBC Mussoorie's tents, cottages and villa</a> to get a feel for each room before you book.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">A Honeymoon Itinerary Framework for Mussoorie</h2>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>Day 1:</strong> Arrive in the afternoon; check-in is from 2:00 PM. Settle in. Take a walk near the resort before sunset. Spend the evening at the bonfire.</li>
         <li><strong>Day 2:</strong> Set out early toward George Everest Peak. The site is named after Sir George Everest, the Surveyor General of India. It is a 2 to 3-hour return walk, with open views at the top. Have a late breakfast. Keep the afternoon free. Spend a second evening outdoors.</li>
         <li><strong>Day 3:</strong> Enjoy a slow morning. Walk through Landour Bazaar if you want a taste of the local market. Head back by afternoon. If you like, visit Lal Tibba, the highest point in Mussoorie at 2,275 metres, for a wide view.</li>
         <li><strong>Day 4:</strong> A slow breakfast, then drive back at your own pace.</li>
       </ul>
       <p>This is not a checklist. It is a pace that lets two people be present with each other, instead of managing plans.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">What Questions to Ask Before Booking a Honeymoon Resort in Mussoorie</h2>
       <p>Before you confirm any resort, get clear answers to these:</p>
       <ul class="list-disc pl-6 space-y-1">
         <li>Is the room private, or do we share a washroom with other guests?</li>
         <li>What does the evening setup include? Is it there every night, or does it depend on the weather?</li>
         <li>How far is the nearest walking trail?</li>
         <li>What is the cancellation policy if our travel is disrupted?</li>
         <li>Can honeymoon guests check in early or check out late?</li>
       </ul>
       <p>As you will see from <a href="/rooms/" class="text-secondary underline">EBC's rooms near George Everest Peak</a>, the right setting changes the whole stay.</p>`,
    ],
  },
  faqs: [
    {
      question: "Is Mussoorie a good honeymoon destination?",
      answer:
        "Yes. The hill setting, cool air, forest walks and private glamping stays make it a fine choice for honeymooners.",
    },
    {
      question: "What is the best time for a honeymoon in Mussoorie?",
      answer:
        "March to June and October to November bring the most settled weather. October is especially popular for clear skies and mild days. The monsoon, from July to September, is the quietest and most atmospheric time. It suits couples who want a slow stay; keep plans flexible and check road advisories before you drive.",
    },
    {
      question: "Is a luxury glamping resort suitable for a honeymoon?",
      answer:
        "Yes, when the resort offers private rooms, a good outdoor setting and well-planned evenings for two.",
    },
    {
      question: "How far in advance should honeymoon bookings be made in Mussoorie?",
      answer:
        "At least four to six weeks ahead for peak season. Popular glamping resorts fill up faster than standard hotels from April to June and in October.",
    },
    {
      question: "Are there any inclusive honeymoon packages available in Mussoorie?",
      answer:
        "Some resorts offer couples packages with meals, outdoor setups and activities included. Check exactly what is covered before you pay. At EBC, every room includes breakfast for two, a guided morning walk, evening bonfire access, Wi-Fi and parking.",
    },
    {
      question: "Is Mussoorie accessible for a honeymoon from South India?",
      answer:
        "Yes. Jolly Grant Airport in Dehradun has flights from Bangalore and Hyderabad. From there, the drive to EBC is about 55 km and takes around 1.5 hours.",
    },
  ],
};

export const metadata = guideMeta("honeymoon-resort-mussoorie", articleData.metaData);

export default function HoneymoonResortPage() {
  const renderContent = (htmlString: string) => {
    return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
  };

  return (
    <main className="bg-[#0C150D] text-[#F7F5EE]">
      <JsonLd data={guideSchema("honeymoon-resort-mussoorie", articleData)} />
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
              description="Everything you need to know before booking your honeymoon resort in Mussoorie."
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