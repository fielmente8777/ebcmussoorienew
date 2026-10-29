import HeroBanner from "@/components/banner/HeroBanner";
import Accordion2 from "@/components/accordion/Accordion2";
import { SectionWithContainer } from "@/components/sectionComponants";
import SectionHeading from "@/components/typography/SectionHeading";
import { SectionHeading2 } from "@/components/typography/SectionHeading2";
import { guideMeta, guideSchema } from "../components/guides";
import JsonLd from "@/components/seo/JsonLd";

const articleData = {
  // ✅ URL is exactly: honeymoon-resorts-in-mussoorie
  slug: "honeymoon-resorts-in-mussoorie",
  metaData: {
    title: "Honeymoon Resorts in Mussoorie: A Practical Guide to Choosing the Right Property for Your Stay | EBC Mussoorie",
    description:
      "Honeymoon resorts in Mussoorie compared: heritage hotels, boutique stays and forest glamping. What each offers, what to ask, and when to go.",
  },
  banner: {
    title: "Honeymoon Resorts in Mussoorie",
    subTitle: "A Practical Guide to Choosing the Right Property for Your Stay",
    description:
      "Couples have honeymooned in Mussoorie for over a century. What has changed is where they stay. The classic big hotel is no longer the obvious first choice.",
    image: "/banner/bnr2.png", // Replace with a honeymoon banner if available
  },
  intro: {
    title: "Honeymoon Resorts in Mussoorie",
    description: [
      "Couples have honeymooned in Mussoorie for over a century. The appeal has always been simple. It is a hill station within reach of Delhi, with cool air and forested ridges. Places to stay range from colonial-era heritage hotels to modern boutique resorts. What has changed is the choice itself. There are far more kinds of stay today, and the classic big hotel is no longer the obvious best pick.",
      "This guide walks through the main kinds of honeymoon stay in Mussoorie today. It shows how to match the right kind to what you want from the trip. It also explains what EBC Mussoorie offers couples, so you can judge it fairly before you book.",
    ],
  },
  details: {
    title: "The Honeymoon Guide",
    subtitle: "Find Your Perfect Stay",
    description: [
      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">What Are Couples Really Looking for in a Mussoorie Honeymoon Resort?</h2>
       <p>When couples book a Mussoorie honeymoon, their priorities tend to fall into this order:</p>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>Privacy above all else.</strong> Picture thirty other couples at breakfast, sound carrying down the corridors and school groups in the lounge. That is not the closeness a honeymoon calls for.</li>
         <li><strong>A setting that is part of the stay, not just a backdrop.</strong> The best honeymoon resorts in Mussoorie are not hotels with a hill view outside the window. In the best ones, the forest, the valley view and the open evening air are part of the stay itself.</li>
         <li><strong>Evenings that work.</strong> A good honeymoon resort gets the evening right as well as the day. That means a private outdoor space, a bonfire, good food on site, and a setting where the night air and the hills feel as close as the room.</li>
         <li><strong>Clear, specific features, not vague claims of luxury.</strong> Couples who were let down by a Mussoorie hotel before tend to say the same thing: it looked better in the photos. The fix is to look for specific, stated features rather than the word "luxury".</li>
       </ul>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">What Kinds of Honeymoon Resorts Can You Choose From in Mussoorie?</h2>
       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">Are Heritage Hotels Right for a Honeymoon?</h3>
       <p>The large old hotels on the Mussoorie ridge have hosted honeymooners for decades. The Savoy is the best-known. They offer formal dining, grand old buildings and a famous name. The catch is size. These are busy hotels with many guests at once, so privacy is not built into the design.</p>
       <p><strong>Best for:</strong> couples who value heritage, formal service and a well-known name more than privacy.</p>

       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">Boutique Guesthouses</h3>
       <p>These are smaller, owner-run places, often with 8 to 15 rooms. Service is more personal than at large hotels. Quality varies a lot. Read reviews from couples and honeymooners in particular before you book.</p>
       <p><strong>Best for:</strong> couples who want character and personal service at a moderate price.</p>

       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">Why Choose a Luxury Glamping or Nature Resort?</h3>
       <p>This is the newest and most distinctive kind of honeymoon stay in Mussoorie. These resorts sit outside the busy town centre, inside forest estates. They offer premium rooms built around the outdoors. The forest itself is the main draw, more than any hotel facility.</p>
       <p>EBC Mussoorie is the leading example of this kind of stay in Mussoorie. We are in the Park Estate on Hathipaon Road, close to Sir George Everest's House on the western ridge, at 2,160 m. The estate sits in deodar, pine and rhododendron forest. We have 14 rooms across seven categories, with clear, stated features that suit a honeymoon well.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">What Does EBC Mussoorie Offer Honeymoon Couples?</h2>
       <p>Here is what EBC Mussoorie offers that matters most to a honeymoon couple:</p>
       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">Which rooms suit couples best?</h3>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>The Andrew's Villa</strong> is our flagship and the room most requested for honeymoons. It is a fully private villa at the edge of the deodar forest. It has its own entrance, a king bedroom, a terrace with Himalayan views and its own bonfire area.</li>
         <li><strong>The Zenith Luxury Cottage</strong> is our signature cottage. It stands on its own in the forest, with a king bed and a private, east-facing veranda. Couples love it for sunrise and for breakfast out on the veranda.</li>
         <li><strong>The Glamper</strong> is our luxury canvas tent, with a private deck, a comfortable double bed and an attached bathroom. It suits couples who want the romance of sleeping under canvas with every comfort inside.</li>
       </ul>
       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">What is included, and what can be added?</h3>
       <ul class="list-disc pl-6 space-y-1">
         <li>Breakfast for two, included with every room</li>
         <li>Evening bonfire every night, with a private bonfire for your room on request</li>
         <li>A rose-petal welcome for honeymooners, at no charge</li>
         <li>A candlelit dinner at your cottage, with 24 hours' notice</li>
         <li>Barbeque in the Shadows at our Park Café: a private bonfire, a candlelit table and butler service</li>
         <li>Stargazing on clear nights, with guided sessions on request</li>
         <li>Wi-Fi throughout the property, and free parking</li>
         <li>Pets welcome; just tell us in advance</li>
         <li>A guided nature walk each morning from 7 to 9 AM, with Sir George Everest's House a short walk away</li>
       </ul>
       <p>See the <a href="/rooms/" class="text-secondary underline">full range of rooms, cottages and tents at EBC Mussoorie</a>, then message us to plan your honeymoon. Tell us your preferred room, any special requests and your dates.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">When Is the Best Time for a Mussoorie Honeymoon?</h2>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>October to November (our top pick for a honeymoon):</strong> After the rains, the air is clear. This is the best season for valley and mountain views from the estate. Days are crisp and cool, at about 8 to 18 degrees Celsius, so a bonfire evening feels truly warm. Clear skies make stargazing from the ridge a real treat. The town centre is busy but not packed.</li>
         <li><strong>April to June (a strong spring window):</strong> Days are warm and evenings are cool. You can do the most outdoors. The deodar forest is at its freshest green. May is peak season, so book well ahead.</li>
         <li><strong>December to February (a winter honeymoon):</strong> Cold and quiet. A chance of snow on the ridge gives this season its own look. Make sure your room is heated; all our rooms at EBC have heating. It suits couples who want a fireside honeymoon under warm blankets.</li>
         <li><strong>July to September (a monsoon honeymoon):</strong> This is our quietest and most atmospheric season, and EBC stays open throughout. Forest mist, valley cloud and bonfire evenings are at their most dramatic, and every tent and cottage is weather-proofed. It is a season for slow stays rather than sightseeing. Rain can cause landslides and close roads, so check advisories before you drive and keep your plans flexible.</li>
       </ul>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">What Should You Ask Before Booking a Mussoorie Honeymoon Resort?</h2>
       <p>Ask these before you commit. They head off the most common honeymoon letdowns:</p>
       <ul class="list-disc pl-6 space-y-1">
         <li>Is our room standalone, or does it share walls with the rooms next door?</li>
         <li>How full is the resort usually on our dates?</li>
         <li>Does the resort host group events, parties or corporate groups at the same time as couples?</li>
         <li>Is the bonfire included, or is it charged extra?</li>
         <li>What are the options for a quiet dinner for two?</li>
         <li>What is the cancellation and date-change policy?</li>
       </ul>
       <p>A resort that answers these clearly and in writing deserves far more trust than one that hides behind vague "luxury experience" talk.</p>
       <p>As <a href="https://www.hotelierindia.com/operations/experience-tranquil-adventure-in-the-heart-of-mussoorie-with-ebc-mussoorie" class="text-secondary underline" target="_blank" rel="noopener">this Hotelier India feature on EBC Mussoorie</a> describes, EBC is built around a clear idea of outdoor hospitality. The result feels quite different from a standard hotel stay.</p>
       <p>For a first-hand account of the resort and the feel of the estate, <a href="https://tripoto.com/india/trips/did-you-know-that-just-8-hours-from-delhi-there-s-an-everest-base-camp-no-we-re-not-kidding-3aea3a54f8628a1c8" class="text-secondary underline" target="_blank" rel="noopener">this Tripoto piece on EBC Mussoorie</a> is the most grounded outside account there is.</p>`,
    ],
  },
  faqs: [
    {
      question: "What is the most romantic accommodation at EBC Mussoorie for a honeymoon?",
      answer:
        "The Andrew's Villa is the room most requested for honeymoons: a private villa with its own entrance, terrace and bonfire area. The Zenith Luxury Cottage is a freestanding forest cottage with a private, east-facing veranda. The Glamper is a luxury canvas tent with a private deck, for the classic glamping feel.",
    },
    {
      question: "Is EBC Mussoorie better than a heritage hotel for a Mussoorie honeymoon?",
      answer:
        "It depends on what you want. If privacy, forest and quiet evenings outdoors matter more to you than formal dining and grand architecture, EBC offers a very different kind of stay. With 14 rooms spread through the forest, it is far more private than a large heritage hotel.",
    },
    {
      question: "What is the best season for a honeymoon in Mussoorie?",
      answer:
        "October to November for the clearest skies and best views. April to June for the most time outdoors. December to February for cosy winter bonfires. July to September for the quietest, most atmospheric stay, with flexible plans in case of road closures.",
    },
    {
      question: "How far is EBC Mussoorie from the main Mussoorie town?",
      answer:
        "EBC is in the Park Estate on Hathipaon Road, near Sir George Everest's House on the western ridge. That is about 6 km west of Mall Road, well away from the busy town centre. The last stretch of road is rough in places, so drive with care.",
    },
    {
      question: "Does EBC Mussoorie offer any honeymoon-specific packages?",
      answer:
        "Honeymoons are our most popular occasion. We offer a rose-petal welcome at no charge. We can also arrange a candlelit dinner at your cottage with 24 hours' notice, a private bonfire and other romantic touches on request. Message us to plan yours.",
    },
    {
      question: "Is EBC Mussoorie pet-friendly for couples travelling with pets?",
      answer:
        "Yes. Pets are welcome at EBC Mussoorie. Please tell us in advance so we can make the stay comfortable for you and your pet.",
    },
  ],
};

export const metadata = guideMeta("honeymoon-resorts-in-mussoorie", articleData.metaData);

export default function HoneymoonResortsPage() {
  const renderContent = (htmlString: string) => {
    return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
  };

  return (
    <main className="bg-[#0C150D] text-[#F7F5EE]">
      <JsonLd data={guideSchema("honeymoon-resorts-in-mussoorie", articleData)} />
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