import HeroBanner from "@/components/banner/HeroBanner";
import Accordion2 from "@/components/accordion/Accordion2";
import { SectionWithContainer } from "@/components/sectionComponants";
import SectionHeading from "@/components/typography/SectionHeading";
import { SectionHeading2 } from "@/components/typography/SectionHeading2";
import { guideMeta, guideSchema } from "../components/guides";
import JsonLd from "@/components/seo/JsonLd";

const articleData = {
  slug: "resort-near-mussoorie-with-bonfire",
  metaData: {
    title: "Resort Near Mussoorie With Bonfire: Hill Evenings Done Right",
    description:
      "A good bonfire near Mussoorie needs cold air, open forest and proper seating. How to pick the right resort, plan the day around it, and when to go.",
  },
  banner: {
    title: "The Bonfire and the Hills",
    subTitle: "What a Resort Near Mussoorie With Bonfire Should Offer",
    description:
      "The air turns cold, the fire gives real warmth, and nobody wants to move. A guide to the true bonfire evening, high in the Mussoorie hills.",
    image: "/banner/bnr2.png",
  },
  intro: {
    title: "The Bonfire and the Hills",
    description: [
      "Most people who have sat by a Mussoorie bonfire remember one moment clearly. The air has turned cold enough that the fire gives real warmth, not just a glow. Above, the sky is either clear and thick with stars or carries a slow drift of Himalayan cloud. Both put on their own show. Dinner is done, and there is no reason to move. That moment does not happen in a hotel dining room. It does not happen on a city rooftop with a gas fire pit. It needs the right height, the right open setting, a well-built fire and room around it. This guide is about exactly that. It shows how to find a resort near Mussoorie with a bonfire that gives you this feeling. It explains why a hill bonfire differs from the city copy. And it sets out how the rest of your stay should build up to it.",
    ],
  },
  details: {
    title: "Why a Bonfire Hits Differently at 2,000 Metres",
    subtitle: "A Practical Guide",
    description: [
      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">Why Does a Bonfire Feel Different at 2,000 Metres?</h2>
       <p>The science is simple. Mussoorie sits at about 2,000 metres above sea level, and EBC a little higher at 2,160 m. Even in May, when the plains below pass 40 degrees Celsius, the Mussoorie ridge falls to 12 to 15 degrees after sunset. In September and October it can reach 8 to 10 degrees by late evening. In December and January, single digits before 9 PM are common.</p>
       <p>At these temperatures, a bonfire is not a backdrop. It is real warmth. It changes how people sit, how long they stay and how much they truly talk.</p>
       <p>The second reason is the quiet. High up and away from Mussoorie town, the night sounds are wind, insects and the odd bird call. A fire crackling into that silence feels nothing like a fire set against traffic and the hum of a city.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">What Makes a Good Bonfire Setup at a Resort Near Mussoorie?</h2>
       <p>Not every bonfire is equal. Before you book a stay for its bonfire, run through this checklist:</p>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>Where the fire is:</strong> Is it in an open space, with seats in a ring around a central fire? Or is it a small gas fixture on a hotel terrace? The first is an evening you remember. The second is just a feature on a list.</li>
         <li><strong>The seating:</strong> Cushioned outdoor seats or solid wooden benches, with blankets, keep guests outside for hours. Poor seats send people indoors within 30 minutes. Then you lose the slow burn that makes a bonfire evening special.</li>
         <li><strong>Food and drink:</strong> Good food served by the fire makes the evening last. Fresh chai, hot snacks or a simple barbecue turn the fire from an activity into the main event.</li>
         <li><strong>Honesty about weather:</strong> A property that promises a fire every night, with no word about weather or season, is not being straight with you. Rain, strong wind and dry-season fire bans all affect whether a fire can be lit. A good host tells you this up front.</li>
       </ul>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">How Does the Bonfire Fit Into a Stay at Everest Base Camp Mussoorie?</h2>
       <p><strong>Everest Base Camp Mussoorie</strong> is a premium glamping resort near George Everest Peak. It treats the bonfire as a core part of every evening, not an optional extra. Bonfire access is included with every room. The fire is lit each evening, with seating and blankets laid out. Marshmallows and snacks come on request, and some nights bring live Garhwali folk music. The estate sits high on the ridge in deodar, pine and rhododendron forest. That setting gives the fire the cold air and the dark it needs.</p>
       <p>The resort is built for guests who want the evening to count as much as the morning walk or the drive up. Cool Mussoorie air, an open fire and the forest all around create a mood that is hard to find elsewhere. EBC calls it the signature experience, the one guests remember most. Couples who want a fire of their own can choose The Andrew's Villa, which has its own bonfire area.</p>
       <p>You can see every cottage, villa and tent on <a href="/rooms/" class="text-secondary underline">Everest Base Camp Mussoorie's rooms and tents page</a>.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">How Should You Plan the Day Before a Bonfire Evening Near Mussoorie?</h2>
       <p>A bonfire evening works best after a day spent on your feet. Here is a plan that gives you the most from the night:</p>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>Morning:</strong> Join the guided nature walk, which runs daily from 7 to 9 AM. After breakfast, if you still have energy, walk on toward George Everest Peak. The route crosses mixed forest and opens to ridge views before you head back for lunch.</li>
         <li><strong>Midday:</strong> Rest, eat a proper lunch and spend time at your cottage with no plan. The quiet of a mountain afternoon is a way to unwind in itself.</li>
         <li><strong>Late afternoon:</strong> Take a short walk to a viewpoint or along the ridge before it gets cold. This is when the light over the Doon Valley is at its best for photos.</li>
         <li><strong>Evening:</strong> The fire is lit as the air cools. Food comes out. The fire builds over the next hour. Talk slows. People stop checking their phones.</li>
       </ul>
       <p>This rhythm is why two nights is the least we would suggest for a Mussoorie bonfire stay. One night does not give you the full day that leads up to the fire.</p>
       <p>For more on the walks, the bonfire and the rest of the day around George Everest Peak, see <a href="/activities/" class="text-secondary underline">EBC Mussoorie's activities page</a>. It sets out what you can do on and around the estate.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">Who Gets the Most From a Bonfire-Centred Mountain Stay?</h2>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>Couples and honeymooners:</strong> A bonfire evening gives you a private, unhurried setting that no restaurant or hotel bar can copy.</li>
         <li><strong>Groups of friends:</strong> A fire brings people together. Groups of four to eight often call the bonfire the best memory of their Mussoorie trip.</li>
         <li><strong>Families with teenagers:</strong> Teens who are bored by standard resort activities often warm to an evening by the fire with food outdoors.</li>
         <li><strong>Corporate groups on an offsite:</strong> A bonfire at the end of a full day outdoors gives teams easy, informal time together. Meeting rooms and formal dinners rarely do that.</li>
       </ul>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">When Is the Best Season for a Bonfire Near Mussoorie?</h2>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>October to February:</strong> Peak bonfire season. The cold truly calls for a fire, and the evening feels most real in these months. October and November also bring the clearest skies for stars.</li>
         <li><strong>March to May:</strong> Cool evenings make a fire pleasant, if not needed. It is still a fine evening, above all in March and April.</li>
         <li><strong>June:</strong> Pre-monsoon warmth softens the effect. Early evenings are milder.</li>
         <li><strong>July to September:</strong> Monsoon. This is EBC's quietest season, and the rooms are proofed against the rain. Rain and wind can stop an open fire on some nights, so treat each fire as a bonus. Landslides can close hill roads, so check advisories before you set out.</li>
       </ul>`,
    ],
  },
  faqs: [
    {
      question: "Is a bonfire available every night at resorts near Mussoorie?",
      answer:
        "It depends on the weather, the season and the property's rules. At EBC the bonfire is lit every evening, weather allowing. Elsewhere, confirm when you book and again on the day you arrive.",
    },
    {
      question: "Is the bonfire included in the resort package or priced separately?",
      answer:
        "It varies. Some properties include it in the room rate, and others charge for it. At EBC, evening bonfire access is included with every room, along with breakfast for two and the guided morning walk.",
    },
    {
      question: "What time of year is best for a bonfire evening near Mussoorie?",
      answer:
        "October to February brings the coldest evenings, when a fire feels most natural and most welcome.",
    },
    {
      question: "Are bonfire setups at resorts near Mussoorie safe?",
      answer:
        "Well-run properties keep fires in set areas with staff watching over them. Follow any safety advice the property gives you.",
    },
    {
      question: "Can a bonfire be arranged for a group booking near Mussoorie?",
      answer:
        "Yes. Most glamping stays with a bonfire can host a group around it. EBC takes corporate groups of 8 to 48 guests. Confirm numbers and the setup when you book.",
    },
    {
      question: "Is the bonfire experience suitable for children?",
      answer:
        "Yes, with an adult watching and seats set at a safe distance from the fire. If you are bringing young children, let the property know in advance.",
    },
  ],
};

export const metadata = guideMeta("resort-near-mussoorie-with-bonfire", articleData.metaData);

export default function BonfireResortPage() {
  const renderContent = (htmlString: string) => {
    return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
  };

  return (
    <main className="bg-[#0C150D] text-[#F7F5EE]">
      <JsonLd data={guideSchema("resort-near-mussoorie-with-bonfire", articleData)} />
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
              description="Everything you need to know before booking a bonfire stay near Mussoorie."
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