import HeroBanner from "@/components/banner/HeroBanner";
import Accordion2 from "@/components/accordion/Accordion2";
import { SectionWithContainer } from "@/components/sectionComponants";
import SectionHeading from "@/components/typography/SectionHeading";
import { SectionHeading2 } from "@/components/typography/SectionHeading2";
import { guideMeta, guideSchema } from "../components/guides";
import JsonLd from "@/components/seo/JsonLd";

const articleData = {
  slug: "camping-in-mussoorie",
  metaData: {
    title: "Camping in Mussoorie: What to Know Before You Book a Site | EBC Mussoorie",
    description:
      "Camping in Mussoorie comes in three forms: basic tents, operator camps and glamping. Compare seasons, packing and family fit before you book a site.",
  },
  banner: {
    title: "Camping in Mussoorie",
    subTitle: "What to Know Before You Book a Site",
    description:
      "From a basic tent to a furnished glamping stay, here is how the options differ, and how to pick the right one for your group.",
    image: "/banner/bnr2.png",
  },
  intro: {
    title: "Understanding Your Camping Options",
    description: [
      "There is a kind of camping in Mussoorie where you carry your own tent. You find a flat patch of hillside and cook on a gas stove. That kind still exists. Then there is the kind where you sleep in a furnished tent, on a real mattress, with hot water and a bonfire laid out for you. Both count as camping. But they are very different trips, and mixing them up is how most plans go wrong. This guide covers what camping here really involves and the main types on offer. It also covers what each season brings, and how to pick the right setup for your group.",
    ],
  },
  details: {
    title: "Types of Camping & Practical Tips",
    subtitle: "Make an informed choice",
    description: [
      "Basic Tent Camping: Most basic camps near Mussoorie use rented tents at set sites near the forest. You bring or rent a sleeping bag. You cook your own meals or eat at a nearby dhaba, and washrooms are limited. This is the lowest-cost format. It suits seasoned campers and anyone who wants a raw night outdoors. The downside is real. You are at the mercy of the weather and comfort is thin. It is a poor fit for young children, older guests or a winter trip.",
      "Glamping: Glamping, short for glamorous camping, sits at the other end. You get a furnished tent with a proper bed, power, a washroom close by, and meals on hand. You keep the outdoor setting without giving up comfort. Everest Base Camp Mussoorie is a premium glamping resort near George Everest Peak that runs on this model. It sits in deodar, pine and rhododendron forest at 2,160 m. The feel is closer to a boutique hotel than a campsite.",
      "Seasonal Camps Run by Operators: Several travel firms run seasonal camps near Mussoorie. Most run from October to November and from March to May. These are mostly group trips on a fixed plan, with meals, guided treks and bonfire evenings. Quality varies a great deal from one operator to the next.",
      "Where Can You Camp Near Mussoorie? These are the areas most used for camping near Mussoorie. The George Everest Peak area comes first. You reach it through Park Estate, and it has forest cover, height and good trekking access. This is where Everest Base Camp Mussoorie sits. Dhanaulti is about 30 km from Mussoorie and higher up, in a deodar forest. Group camp operators like it. The Bhatta Falls area is lower and easier to reach, but less scenic for a night out. Landour ridge has few camping options, but day hikers and nature walkers love it.",
      "For a ground-level view of the George Everest Peak zone, read the travel piece titled Did You Know That Just 7 Hours From Delhi, There's An Everest Base Camp? In practice, Delhi is about 280 km away by road. Plan on 5.5 to 6.5 hours.",
      "What Is the Best Season for Camping in Mussoorie? The season is the biggest choice you will make for a camping trip here. Each window feels quite different.",
      "March to May: Days run from 10 to 22 degrees Celsius. Trails are dry, evenings are cool and bonfires burn well. This is the best window for first-time campers.",
      "June: Early June is fine, but the air grows humid as the rains draw near. If you must come in summer, aim for early in the month. May and June are busy, so book ahead.",
      "July to August: This is the monsoon. Rain is steady, trails get wet, and landslides can close hill roads. Basic tent camping is hard work in these weeks. A weather-proofed stay works far better. At EBC every tent and cottage is weather-proofed, and the monsoon is our quietest, most atmospheric season. The forest turns deep green and the mist rolls through the trees. Check road advisories before you drive and keep your plans loose. Treat it as a slow stay, not a trekking trip.",
      "September to November: This is the second-best window of the year. Skies clear, the hills stay green after the rains, and crowds thin out. October and November bring the clearest skies of all. Nights are great for stargazing and long bonfires.",
      "December to February: It is cold, and nights drop near or below freezing. Seasoned campers with the right gear love this time. For beginners and families with small children, a basic tent is a hard ask. A glamping stay with proper bedding makes far more sense, and you should still pack warm layers.",
      "What Should You Pack for Camping in Mussoorie? Some things matter for every kind of camp. Pack layers, with a warm fleece or jacket, even in summer. Add a waterproof outer layer and sturdy closed-toe or trekking shoes. Bring sunscreen and lip balm, since the sun is strong up here. Carry your own medicines, a basic first aid kit and a power bank.",
      "For basic tent camping, add a sleeping bag rated for below 10 degrees Celsius. Bring a headlamp with spare batteries, plus a water filter or enough bottled water. For a glamping stay, the property covers most of this. You only need clothes and personal items.",
      "Is Camping in Mussoorie Suitable for Families and Couples? Yes, with the right format. Glamping resorts like Everest Base Camp Mussoorie host families, couples and small groups. You get closed tents, proper beds and washrooms that basic sites lack. If you travel with children or simply want more comfort, glamping is far more practical than a basic tent. At EBC, every room includes breakfast for two, the evening bonfire and a guided forest walk from 7 to 9 AM. Look through the rooms and tents at EBC Mussoorie before you book, so you know just what you are getting.",
    ],
  },
  faqs: [
    {
      question: "Is camping in Mussoorie safe?",
      answer: "Organised camps and glamping resorts give you a set, supervised base. Camping alone in remote spots carries the usual outdoor risks, so prepare well. In the monsoon, check road and weather advisories before you set out.",
    },
    {
      question: "Can beginners try camping in Mussoorie?",
      answer: "Yes. Glamping suits beginners well. You get the outdoors without needing any camping skills.",
    },
    {
      question: "Is camping available in winter near Mussoorie?",
      answer: "Some properties stay open all year, but you must prepare for the cold. At EBC, December and January bring crisp, cold nights by the bonfire. Confirm dates and conditions with your chosen property.",
    },
    {
      question: "Are pets allowed at camping sites near Mussoorie?",
      answer: "Some glamping properties welcome pets, often with rules. EBC Mussoorie welcomes pets if you tell the team before you arrive. For any other site, check the policy before you book.",
    },
    {
      question: "What is the difference between camping and glamping?",
      answer: "Camping usually means a basic tent with few facilities. Glamping gives you a furnished tent, a proper bed, power and a washroom in the same outdoor setting.",
    },
    {
      question: "How do I book a camping spot near Mussoorie?",
      answer: "Book glamping properties directly on their own websites. Operator camps are usually booked through travel platforms or with the operator itself.",
    },
  ],
};

export const metadata = guideMeta("camping-in-mussoorie", articleData.metaData);

export default function ForestPicnicPage() {
  return (
    <main className="bg-[#0C150D] text-[#F7F5EE]">
      <JsonLd data={guideSchema("camping-in-mussoorie", articleData)} />
      <HeroBanner {...articleData.banner} />

      <SectionWithContainer sectionClassName="bg-[#0C150D] py-16">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full border border-secondary/20 bg-secondary/10 px-3 py-1 text-xs uppercase tracking-[0.35em] text-secondary">
              {articleData.details.subtitle}
            </span>
            <div className="space-y-2">
              <h2 className="text-4xl md:text-5xl font-primary font-bold text-white">
                {articleData.details.title}
              </h2>
            </div>
            <div className="space-y-5 text-base leading-relaxed text-[#EDE7D9] md:text-lg">
              {articleData.intro.description.map((text, index) => (
                <p key={`intro-${index}`}>{text}</p>
              ))}
              {articleData.details.description.map((text, index) => (
                <p key={`details-${index}`}>{text}</p>
              ))}
            </div>
          </div>
        </div>
      </SectionWithContainer>

      <SectionWithContainer sectionClassName="bg-[#F7F5EE] py-16">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="space-y-3 text-center">
            <span className="text-sm uppercase tracking-[0.35em] text-secondary">Common Questions</span>
            <h2 className="text-3xl md:text-4xl font-primary font-bold text-[#0C150D]">Frequently Asked Questions</h2>
            <p className="text-base text-[#4A5A47]">Everything you need to know before booking your camping trip.</p>
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