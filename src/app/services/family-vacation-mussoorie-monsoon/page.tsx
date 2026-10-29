import HeroBanner from "@/components/banner/HeroBanner";
import Accordion2 from "@/components/accordion/Accordion2";
import { SectionWithContainer } from "@/components/sectionComponants";
import SectionHeading from "@/components/typography/SectionHeading";
import { SectionHeading2 } from "@/components/typography/SectionHeading2";
import { guideMeta, guideSchema } from "../components/guides";
import JsonLd from "@/components/seo/JsonLd";

const articleData = {
  // ✅ URL is exactly: family-vacation-mussoorie-monsoon
  slug: "family-vacation-mussoorie-monsoon",
  metaData: {
    title: "Family Vacation in Mussoorie During Monsoon: An Honest Planning Guide for Parents | EBC Mussoorie",
    description:
      "Planning a family vacation in Mussoorie in the monsoon? How to set expectations, pick the right stay, and plan a rainy-season trip that works for all.",
  },
  banner: {
    title: "Family Vacation in Mussoorie During Monsoon",
    subTitle: "An Honest Planning Guide for Parents",
    description:
      "The honest answer: it depends on the place you choose and the expectations you set. A monsoon family trip built around sightseeing will struggle. One built around the right resort can be one of the best trips you take.",
    image: "/banner/bnr2.png", // Replace with a family monsoon banner if available
  },
  intro: {
    title: "Family Vacation in Mussoorie During Monsoon",
    description: [
      "Let me start with the question every parent asks. Is a monsoon trip to Mussoorie with children a good idea? Or is it two days of managing bored kids stuck indoors? The honest answer is that it depends on the place you choose and the expectations you set before you leave. A monsoon family trip built around sightseeing will struggle. A trip built around a place with space, things to do on site and a real forest setting can be one of the best family trips you take. The monsoon is EBC's quietest and most atmospheric season, and many guests call it their favourite.",
      "This guide covers setting expectations, what a monsoon family stay needs, a realistic plan, and how to make the trip work for parents and children alike.",
    ],
  },
  details: {
    title: "The Family Monsoon Guide",
    subtitle: "Plan Your Family Escape",
    description: [
      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">How Should You Set Expectations Before You Book?</h2>
       <p>Tell the children honestly what the trip is, before you go:</p>
       <ul class="list-disc pl-6 space-y-1">
         <li>We will do our outdoor time in the mornings, early, before the rain</li>
         <li>We will spend a lot of the day at the resort, and that is the plan, not a failure of it</li>
         <li>The forest looks completely different in the rain, and that is why we are going now</li>
         <li>There may be a day when we do not leave the resort at all</li>
       </ul>
       <p>Children handle this well. What they handle badly is being promised waterfalls and ropeways, then spending eight hours in a hotel room watching the rain.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">What Does a Monsoon Family Property Need?</h2>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>Room for the family to spread out:</strong> One hotel room with two adults and two children on a full day of rain is hard going. Interconnected or larger rooms change everything. At EBC Mussoorie, the Twin Luxury Cottages are two interconnected cottages. Each has a king bedroom and its own bathroom, and they share a garden terrace. The Surveyor is a roomy suite with a large private sit-out, and extra beds can be added. The Andrew's Villa is the private flagship, with its own entrance and terrace. Pair it with other rooms for larger or multi-generational groups.</li>
         <li><strong>Grounds the children can use:</strong> A secure private forest estate is a very different thing from a hotel with a small garden. Between showers, children can walk, explore and be outdoors without leaving the grounds.</li>
         <li><strong>Dining on site, no drive needed:</strong> Park Cafe at EBC Mussoorie is a multi-cuisine café on the estate, beside a meadow. Breakfast is included with every room. For families, not having to drive a wet ridge road for every meal is a real advantage.</li>
         <li><strong>Outdoor fun that fits short dry spells:</strong> The evening bonfire and barbecue setups give the day an end that children enjoy. The guided morning walk and the George Everest heritage site next door give the mornings a purpose.</li>
       </ul>
       <p>Look over the <a href="/rooms/" class="text-secondary underline">accommodation options at EBC Mussoorie</a> and check which one fits your family before you enquire.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">What Does a Realistic Monsoon Family Itinerary Look Like?</h2>
       <p><strong>Day one, arrival:</strong> Leave Delhi in the morning, not the evening. The 280 km drive takes 5.5 to 6.5 hours in dry weather and longer in rain. Arriving with children after dark on a wet ridge road is no way to start. Aim to arrive in the mid to late afternoon, as check-in is from 2 PM. Let the children explore the grounds. Have an early dinner at Park Cafe. Sit by the bonfire if the evening clears.</p>
       <p><strong>Day two, the full day:</strong> 7 to 9 AM: the guided forest walk. Get everyone up for it. The forest in morning mist is the thing children remember most from a monsoon trip to the hills, and it lifts by 9 AM. Walk to George Everest's House, the heritage site a couple of minutes from Park Cafe. Tell the children the story. Sir George Everest led the survey that mapped India from its southern tip north towards the Himalayas. The world's highest mountain was later named after him, and he even objected to the honour. Children take to that far more than to any viewpoint.</p>
       <p>9 AM: breakfast. From mid-morning, enjoy the resort. Play the board games you brought, read, spend time together and take a long lunch. This is where room size matters most. Evening: the bonfire, and a barbecue if the weather allows.</p>
       <p><strong>Day three, departure morning:</strong> One more early walk. Breakfast. Check-out is at 11 AM, but leave by 10 AM to give yourself a buffer for the roads.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">What Should You Pack for a Monsoon Family Trip?</h2>
       <ul class="list-disc pl-6 space-y-1">
         <li>Waterproof shoes with grip for everyone, adults and children</li>
         <li>Two rain jackets each if you can, since one will always be wet</li>
         <li>Warm layers: evenings drop to 14 to 16 degrees Celsius up here, even in July</li>
         <li>Indoor games you bring yourselves: books, cards, board games</li>
         <li>A basic first aid kit</li>
         <li>Dry bags for phones and other electronics</li>
       </ul>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">What Are the Honest Tradeoffs?</h2>
       <ul class="list-disc pl-6 space-y-1">
         <li>Kempty Falls in the monsoon is spectacular and full of water. But the approach can be crowded and slippery. Judge it with your children in mind.</li>
         <li>Roads around Mussoorie can be affected for 24 to 48 hours after heavy rain, and landslides do happen. Check advisories before you drive, and book with a flexible cancellation policy.</li>
         <li>Long day trips to Dhanaulti or Chakrata are best saved for a drier season when you have children with you.</li>
       </ul>
       <p>EBC Mussoorie stays open right through the monsoon, and all tents and cottages are weather-proofed. Still, ask the team about road conditions for your July or August dates before you set off.</p>
       <p>The <a href="https://www.hotelierindia.com/operations/experience-tranquil-adventure-in-the-heart-of-mussoorie-with-ebc-mussoorie" class="text-secondary underline" target="_blank" rel="noopener">Hotelier India feature on EBC Mussoorie</a> covers the resort's outdoor style of hosting. That is why it works for families whose plans need to bend around the weather.</p>`,
    ],
  },
  faqs: [
    {
      question: "Is Mussoorie suitable for a family monsoon trip?",
      answer:
        "Yes, with the right resort and honest expectations. Choose a place with space and things to do on site. Do not plan the trip around sightseeing.",
    },
    {
      question: "Which EBC Mussoorie accommodation suits a family?",
      answer:
        "The Twin Luxury Cottages give you interconnected family space. The Surveyor suite has the most living space, with extra beds on request. The Andrew's Villa offers the most privacy and can be paired with other rooms for larger groups.",
    },
    {
      question: "Is the property safe for children?",
      answer:
        "The grounds are fully secured, so children can explore safely, and there is free parking on site. Talk to the resort about any special needs for your children when you book.",
    },
    {
      question: "Can we bring our pet on a family trip?",
      answer:
        "Yes. Pets are welcome at EBC Mussoorie. Just tell the resort in advance.",
    },
    {
      question: "What is the drive time from Delhi with children?",
      answer:
        "Allow 7 to 8 hours in the monsoon, with breaks. In dry weather the drive is about 5.5 to 6.5 hours.",
    },
    {
      question: "What if it rains the entire time?",
      answer:
        "Plan for it. Choose a room with space, bring indoor games, and treat the morning as your outdoor time. Families who plan this way have good trips. Families who plan around sightseeing do not.",
    },
  ],
};

export const metadata = guideMeta("family-vacation-mussoorie-monsoon", articleData.metaData);

export default function FamilyVacationMussoorieMonsoonPage() {
  const renderContent = (htmlString: string) => {
    return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
  };

  return (
    <main className="bg-[#0C150D] text-[#F7F5EE]">
      <JsonLd data={guideSchema("family-vacation-mussoorie-monsoon", articleData)} />
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
              description="Everything you need to know before planning your family monsoon vacation in Mussoorie."
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