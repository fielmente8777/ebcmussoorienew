import HeroBanner from "@/components/banner/HeroBanner";
import Accordion2 from "@/components/accordion/Accordion2";
import { SectionWithContainer } from "@/components/sectionComponants";
import SectionHeading from "@/components/typography/SectionHeading";
import { SectionHeading2 } from "@/components/typography/SectionHeading2";
import { guideMeta, guideSchema } from "../components/guides";
import JsonLd from "@/components/seo/JsonLd";

const articleData = {
  // ✅ URL is exactly: family-friendly-glamping-mussoorie
  slug: "family-friendly-glamping-mussoorie",
  metaData: {
    title: "Family Friendly Glamping in Mussoorie: What Parents Should Know Before Booking | EBC Mussoorie",
    description:
      "Family friendly glamping in Mussoorie, explained: what makes it work for children, which room fits your family, and what to check before you book.",
  },
  banner: {
    title: "Family Friendly Glamping in Mussoorie",
    subTitle: "What Parents Should Know Before Booking",
    description:
      "Glamping with children sounds either brilliant or unwise, depending on what you picture. Done well, it means a forest stay with proper beds, attached bathrooms and an outdoor life children love.",
    image: "/banner/bnr2.png", // Replace with a family glamping banner if available
  },
  intro: {
    title: "Family Friendly Glamping in Mussoorie",
    description: [
      "Glamping with a family sounds either brilliant or unwise. It depends on what you picture when you hear the word. Parents who imagine a shared toilet block and a groundsheet are right to hesitate. Parents who picture a well-built room with a real bed, an attached bathroom and a forest outside the door are picturing glamping done properly. That is what the best places offer.",
      "This guide explains what family-friendly glamping in Mussoorie involves. It shows which rooms suit which kind of family, and what to check before you book.",
    ],
  },
  details: {
    title: "The Family Glamping Guide",
    subtitle: "Plan Your Family Adventure",
    description: [
      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">What Makes Glamping Work for Families?</h2>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>The outdoors is the entertainment.</strong> Children spend most of the week in classrooms and on screens. A forest with room to move wakes them up. EBC's grounds are fully secured, so they can explore within a boundary parents can manage.</li>
         <li><strong>The novelty is real.</strong> A hotel room in Mussoorie is a hotel room. A glamping tent in deodar and pine forest feels different enough from home that children treat it as an event.</li>
         <li><strong>The evening has a shape.</strong> A bonfire and an outdoor meal give the night a rhythm that a hotel restaurant cannot. Children will sit by a fire in a way they never sit at a buffet. At EBC the bonfire is lit every evening, with blankets, and marshmallows on request.</li>
         <li><strong>The pace suits families.</strong> Glamping is not built around a packed plan. That suits young children far better than a trip driven by sightseeing.</li>
       </ul>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">Matching Accommodation to Your Family: Which Room Fits?</h2>
       <p>EBC Mussoorie has 14 rooms across seven categories. Together they sleep 28 guests, or up to 50 with extra beds. For families, three matter most:</p>

       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">Is The Surveyor Right for a Small Family?</h3>
       <p>The Surveyor is a suite, and it has the most living space at EBC. It comes with a large private sit-out, a king bedroom and its own bathroom. Ask the team about an extra bed for the children. Do not mix it up with The Surveyor Suite, which is a glamping tent with a private deck in the forest canopy.</p>
       <p><strong>Best for:</strong> Two adults and a child or two who want space under one roof. Confirm the bed setup when you book.</p>

       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">Why Do the Twin Luxury Cottages Suit Bigger Families?</h3>
       <p>These are two interconnected cottages. Each has a king bedroom and its own bathroom. They share a garden terrace, and both have Himalayan views. You can book one or both.</p>
       <p><strong>Best for:</strong> Larger families, two families travelling together, or parents who want the children next door but in their own room.</p>

       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">When Is The Andrew's Villa the Best Choice?</h3>
       <p>This is EBC's flagship private villa. It has its own entrance, a private terrace and its own bonfire area. Inside is a luxury king bedroom with panoramic Himalayan views. It is the most private stay on the estate.</p>
       <p><strong>Best for:</strong> Families who want the most privacy on the estate. For a bigger or multi-generational group, pair it with the Twin Cottages.</p>

       <p>Full details are on the <a href="/rooms/" class="text-secondary underline">EBC Mussoorie rooms page</a>. Message the resort to confirm which room suits your family and dates.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">Which Property Features Matter Most to Parents?</h2>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>A secure forest estate:</strong> enclosed grounds that children can explore safely</li>
         <li><strong>Park Cafe:</strong> a multi-cuisine café on the estate, beside a meadow, so meals never need a drive</li>
         <li><strong>A bonfire every evening:</strong> the anchor of the day, with a private one on request</li>
         <li><strong>Barbecue and picnic setups:</strong> fun for children and easier than a formal dinner</li>
         <li><strong>Free parking on site:</strong> less hauling of bags and tired children</li>
         <li><strong>Free Wi-Fi throughout:</strong> for the honest reason that families need it</li>
         <li><strong>Pets welcome:</strong> the family dog can come too; just tell the resort in advance</li>
         <li><strong>George Everest's House nearby:</strong> a restored heritage site, a couple of minutes' walk from Park Cafe, with a story children enjoy</li>
         <li><strong>Sunrise and stars:</strong> the east-facing Zenith veranda catches the dawn, and the Milky Way shows on clear nights</li>
       </ul>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">When Is the Best Season for Family Glamping in Mussoorie?</h2>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>April to June:</strong> This lines up with school summer holidays. Warm days, cool evenings and the most time outdoors. May and June are busy, so book early.</li>
         <li><strong>October to November:</strong> The clearest skies of the year, smaller crowds and superb stargazing. Ideal if your family can travel outside school holidays.</li>
         <li><strong>December to February:</strong> Cold, with crisp nights and a chance of snow on the ridge. Pack warm clothes. Every room at EBC has heating.</li>
         <li><strong>July to September:</strong> The quietest season, with the forest at its greenest. EBC stays open, and all tents and cottages are weather-proofed. With children, plan short walks and slow days. Rain can bring landslides and road closures, so check advisories before you drive.</li>
       </ul>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">What Practical Notes Should Parents Know?</h2>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>Footwear matters more than you think.</strong> Forest paths at 2,160 m are uneven. Every child needs closed shoes with good grip.</li>
         <li><strong>Pack layers, not one warm jacket.</strong> The temperature swings a lot between the morning walk and midday.</li>
         <li><strong>Set up the morning before you arrive.</strong> The guided walk runs from 7 to 9 AM, and it is the best part of the day up here. Children who know this in advance get up for it.</li>
         <li><strong>Bring your own indoor fun.</strong> Books, cards and games. Pack them for a rainy afternoon.</li>
         <li><strong>Confirm special needs in advance.</strong> Food needs, extra bedding and pet plans all go better when agreed before you arrive, not on the day.</li>
       </ul>
       <p>The <a href="https://www.hotelierindia.com/operations/experience-tranquil-adventure-in-the-heart-of-mussoorie-with-ebc-mussoorie" class="text-secondary underline" target="_blank" rel="noopener">Hotelier India feature on EBC Mussoorie</a> covers how the resort shapes its outdoor stay. That is the part families respond to most.</p>`,
    ],
  },
  faqs: [
    {
      question: "Is glamping suitable for young children?",
      answer:
        "Done well, yes. Every room at EBC Mussoorie, even the tents, has an attached bathroom, a proper bed and heating. These are solid, well-built rooms, not basic camping.",
    },
    {
      question: "Which unit accommodates four people?",
      answer:
        "Ask the team, as extra beds can be added. For a family of four, the Twin Luxury Cottages give you two king bedrooms. The Surveyor, a roomy suite, also works well for families.",
    },
    {
      question: "Can we get interconnecting rooms?",
      answer:
        "Yes. The Twin Luxury Cottages are two interconnected cottages with a shared garden terrace, air conditioning and heating.",
    },
    {
      question: "Is there WiFi for the children?",
      answer:
        "Yes, free Wi-Fi runs across the whole property. It handles browsing and video calls, though mountain signal can vary.",
    },
    {
      question: "Can we bring a pet?",
      answer:
        "Yes, pets are welcome at EBC Mussoorie. Just tell the resort in advance so they can prepare for you both.",
    },
    {
      question: "What outdoor activities are available for families?",
      answer:
        "A guided forest walk every morning from 7 to 9 AM, the George Everest heritage site a couple of minutes' walk away, a bonfire each evening, and barbecue and picnic setups. Children also love the bird walks and stargazing. Check what is on for your dates.",
    },
  ],
};

export const metadata = guideMeta("family-friendly-glamping-mussoorie", articleData.metaData);

export default function FamilyFriendlyGlampingPage() {
  const renderContent = (htmlString: string) => {
    return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
  };

  return (
    <main className="bg-[#0C150D] text-[#F7F5EE]">
      <JsonLd data={guideSchema("family-friendly-glamping-mussoorie", articleData)} />
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
              description="Everything you need to know before booking your family glamping stay in Mussoorie."
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