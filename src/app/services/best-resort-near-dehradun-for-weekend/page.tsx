import HeroBanner from "@/components/banner/HeroBanner";
import Accordion2 from "@/components/accordion/Accordion2";
import { SectionWithContainer } from "@/components/sectionComponants";
import SectionHeading from "@/components/typography/SectionHeading";
import { SectionHeading2 } from "@/components/typography/SectionHeading2";
import { guideMeta, guideSchema } from "../components/guides";
import JsonLd from "@/components/seo/JsonLd";

const articleData = {
  slug: "best-resort-near-dehradun-weekend",
  metaData: {
    title: "Best Resort Near Dehradun for Weekend: Why Everest Base Camp Mussoorie Answers the Search | EBC Mussoorie",
    description:
      "For a weekend from Dehradun, EBC Mussoorie is 35 km up the hill: forest tents and cottages, bonfires and trails. Here is the plan, season by season.",
  },
  banner: {
    title: "Best Resort Near Dehradun for Weekend",
    subTitle: "Everest Base Camp Mussoorie Answers the Search",
    description:
      "A two-night stay in the mountains that is worth the drive, the planning and the spend. Here is how it runs, from arrival to departure.",
    image: "/banner/bnr2.png",
  },
  intro: {
    title: "Best Resort Near Dehradun for Weekend",
    description: [
      "When someone looks for the best resort near Dehradun for a weekend, they do not want a list of every hotel within 100 kilometres. They are asking one clear question. With only two or three days, where do I go for a mountain stay that is worth the drive, the planning and the spend? At Everest Base Camp Mussoorie, we have a clear and honest answer. This is not a broad survey of places near Dehradun. It is a plain account of what we offer. It explains why our spot near George Everest Peak suits most weekend travellers from Dehradun. And it shows what two nights here really look like, from arrival to departure.",
    ],
  },
  details: {
    title: "What Makes a Weekend Resort Near Dehradun Worth Choosing",
    subtitle: "The Honest Criteria",
    description: [
      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">What makes a weekend resort near Dehradun worth choosing?</h2>
       <p>Before we recommend anything, the tests matter. A weekend near Dehradun is only worth it when three things are true at once.</p>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>The drive should not eat the weekend.</strong> A resort more than 90 minutes from Dehradun on a winding hill road takes all of Friday evening to reach. It takes all of Sunday to leave. What is left is barely time to settle in. <strong>Everest Base Camp Mussoorie</strong> is 35 km from Dehradun. The drive takes 1 to 1.5 hours on a normal day. You arrive with your weekend intact.</li>
         <li><strong>The setting should feel truly different from the city.</strong> A hill station hotel is really a city hotel at height. It does not justify a weekend away. It just moves you. What we offer instead is a living forest at 2,160 metres, among deodar, pine and rhododendron near George Everest Peak. The air, the cool, the quiet and the views are all a world apart from the Dehradun valley floor.</li>
         <li><strong>The outdoors should be part of the stay, not handed to an operator.</strong> For most travellers, the best weekend resort near Dehradun is one where you need no extra car, no outside guide and no drive to somewhere else. At EBC Mussoorie, the main walk, toward George Everest Peak, starts from the property itself.</li>
       </ul>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">What does Everest Base Camp Mussoorie offer?</h2>
       <p><strong>Everest Base Camp Mussoorie</strong> is a luxury glamping resort and nature retreat near George Everest Peak, in the Mussoorie hills of Uttarakhand. There are 14 stays in seven categories, from luxury tents to private cottages and a villa. Each has a proper bed, power and an attached bathroom. The forest stays at the centre of the experience, not off to one side.</p>
       <p>You can see every option on <a href="/rooms/" class="text-secondary underline">EBC Mussoorie's rooms and tent page</a>. Check the room types, what is included and dates before you book.</p>
       <p>We are built on one idea. The best weekend resort near Dehradun is not the one with the most extras. It is the one where the setting does the work. Nature, height, time outdoors and a good bonfire evening give you what a spa menu or a rooftop pool cannot.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">Why does being near George Everest Peak matter?</h2>
       <p>George Everest Peak takes its name from Sir George Everest. He led the Great Trigonometrical Survey of India from 1823 and was Surveyor General of India from 1830 to 1843. He also lived on this ridge, at Park House, for about 11 years. The peak sits at about 2,000 metres. A kept trail climbs to it from Park Estate, near Mussoorie.</p>
       <p>For weekend guests from Dehradun, this is a real practical edge. Most hill resorts near Dehradun mean a separate day trip to trek, or a tour that takes you away from your stay. The George Everest Peak trail starts close to EBC Mussoorie. It is a 2 to 3-hour return walk. So your morning is planned with no extra effort.</p>
       <p>From the top, the view takes in the Doon Valley to the south. On clear autumn and winter mornings, you can see the Himalayan snowline to the north. These views are not a bonus. They are why we chose this place.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">What does a weekend itinerary at EBC Mussoorie look like?</h2>
       <p>Here is how two nights near Dehradun go when the resort and the setting work together.</p>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>Saturday:</strong> Leave Dehradun by late morning. Stop for lunch at Park Café, on the estate where Sir George Everest once kept his stables. Check in from 2:00 PM and get to know the grounds. Take a short walk on the lower trail near the property. Gather at the evening bonfire and have dinner outside as the air cools after sunset. Spend your first night in the forest at 2,160 metres.</li>
         <li><strong>Sunday:</strong> Set off for George Everest Peak by 6:30 AM, for the best light. If you prefer a guide, join the morning nature walk from 7 to 9 AM instead. Return by 9:30 to 10:00 AM for a late breakfast. Rest at midday, or take a short walk through the deodar forest. In the afternoon, you could drive across town to Landour Bazaar or the Lal Tibba viewpoint. End with a second bonfire evening and dinner.</li>
         <li><strong>Monday:</strong> Watch the sunrise from the ridge or from your own veranda. The Zenith veranda faces east. Check out by 11:00 AM and be back in Dehradun by early afternoon.</li>
       </ul>
       <p>This plan is neither rushed nor padded. It makes good use of two nights. It gets Dehradun guests home early on Monday afternoon.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">Who is this resort near Dehradun best for?</h2>
       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">Is it right for couples and honeymooners?</h3>
       <p>Couples need real privacy, a lovely setting and an evening that belongs to the outdoors. Our forest stays, the open ridge and the nightly bonfire give you exactly that. Honeymooners get a rose-petal welcome, and a candlelit dinner at your cottage can be set up with a day's notice. For a romantic weekend near Dehradun, this is the format that works.</p>
       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">Does it work for families with older children?</h3>
       <p>Children aged ten and above with normal outdoor fitness can manage the George Everest Peak trek. The open grounds give younger guests room to roam. And because Dehradun is close, medical help stays within easy reach if you need it.</p>
       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">Can it host corporate and small group offsites?</h3>
       <p>Teams from Dehradun gain a lot from a weekend offsite in the forest. They get time outdoors, a bonfire that brings people together and real distance from the office. We host groups of 8 to 48 guests, and the full property can be booked.</p>
       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">Is it good for young professionals and remote workers?</h3>
       <p>Dehradun has a growing number of professionals, many in tech and services. They work in the city and spend weekends in the hills. A luxury resort near Dehradun with real comfort, free Wi-Fi and trails close by suits them well.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">When is the best time to visit for a weekend?</h2>
       <p>The seasons are not equal at 2,160 metres.</p>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>October to November:</strong> After the rains, the air is at its clearest. These months bring the best mountain views of the year. Trails are in great shape. Bonfires feel best, as the cold sets in fast after sunset. This is the strongest window for a weekend away from Dehradun.</li>
         <li><strong>March to May:</strong> Spring brings warm afternoons. Rhododendrons bloom through March and April. This is a strong second window for time outdoors.</li>
         <li><strong>December to February:</strong> Cold, with nights near or below freezing. With proper heating, a winter stay in the mountains is one to remember. Best for people who want a cold-weather glamping trip.</li>
         <li><strong>July to September:</strong> The monsoon. This is our quietest and most atmospheric season, and every tent and cottage is weather-proofed. Trails get slippery, so keep walks short. Heavy rain can cause landslides and slow the roads. Check advisories before you drive, keep your plans flexible, and treat it as a slow stay rather than a trekking trip.</li>
       </ul>
       <p>As this piece on <a href="https://www.hotelierindia.com/operations/experience-tranquil-adventure-in-the-heart-of-mussoorie-with-ebc-mussoorie" class="text-secondary underline" target="_blank" rel="noopener">adventure in the heart of Mussoorie with EBC Mussoorie</a> shows, the stay changes a lot with the season. Picking the right window makes a real difference.</p>
       <p>If you come by train or plane from outside Uttarakhand, Dehradun is the natural starting point. Before you travel, browse <a href="/rooms/" class="text-secondary underline">the tents, cottages and villa at EBC Mussoorie</a> to choose your stay.</p>`,
    ],
  },
  faqs: [
    {
      question: "How far is Everest Base Camp Mussoorie from Dehradun?",
      answer:
        "About 35 km from Dehradun, or 1 to 1.5 hours by road on a normal day. Dehradun railway station is also 35 km away, and we can arrange a transfer.",
    },
    {
      question: "Is EBC Mussoorie suitable for a one‑night weekend stay from Dehradun?",
      answer:
        "One night works. We suggest two, so you can do the George Everest Peak trek and enjoy a full bonfire evening without either feeling rushed.",
    },
    {
      question: "What is included in a standard weekend stay at EBC Mussoorie?",
      answer:
        "Every room includes breakfast for two, evening bonfire access, a guided morning nature walk, Wi-Fi and free parking. Other meals and add-ons can be arranged. Confirm the details when you book.",
    },
    {
      question: "Is EBC Mussoorie suitable for couples as a weekend resort near Dehradun?",
      answer:
        "Yes. Private forest stays, the ridge setting and the nightly bonfire make it a natural fit for a romantic weekend near Dehradun. Honeymooners get a rose-petal welcome on request.",
    },
    {
      question: "What is the best season to visit EBC Mussoorie for a weekend?",
      answer:
        "October to November and March to May give the most reliable weather outdoors. October is the pick for clear mountain views and cosy bonfire evenings. The monsoon is quiet and misty, and good for a slow stay.",
    },
    {
      question: "How do I book a weekend stay at Everest Base Camp Mussoorie?",
      answer:
        "Book directly with us so we can confirm exactly what is included. You can message or call us on WhatsApp at +91 91190 01126. Check packages and dates before you confirm.",
    },
  ],
};

export const metadata = guideMeta("best-resort-near-dehradun-for-weekend", articleData.metaData);

export default function BestResortNearDehradunPage() {
  const renderContent = (htmlString: string) => {
    return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
  };

  return (
    <main className="bg-[#0C150D] text-[#F7F5EE]">
      <JsonLd data={guideSchema("best-resort-near-dehradun-for-weekend", articleData)} />
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
              description="Everything you need to know before booking your weekend stay at Everest Base Camp Mussoorie."
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