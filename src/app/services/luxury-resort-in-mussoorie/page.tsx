import HeroBanner from "@/components/banner/HeroBanner";
import Accordion2 from "@/components/accordion/Accordion2";
import { SectionWithContainer } from "@/components/sectionComponants";
import SectionHeading from "@/components/typography/SectionHeading";
import { SectionHeading2 } from "@/components/typography/SectionHeading2";
import { guideMeta, guideSchema } from "../components/guides";
import JsonLd from "@/components/seo/JsonLd";

const articleData = {
  slug: "luxury-resort-mussoorie",
  metaData: {
    title: "What Staying at a Luxury Resort in Mussoorie Actually Feels Like | EBC Mussoorie",
    description:
      "An honest look at luxury resorts in Mussoorie: what real luxury feels like in the hills, what to look for, and why glamping is changing what premium means.",
  },
  banner: {
    title: "Luxury Resort in Mussoorie",
    subTitle: "What Staying There Actually Feels Like",
    description:
      "An honest look at premium stays in Mussoorie. What real luxury feels like, what to look for, and why more travellers now choose stays built around the outdoors.",
    image: "/banner/bnr2.png",
  },
  intro: {
    title: "What Staying at a Luxury Resort in Mussoorie Actually Feels Like",
    description: [
      "A luxury resort in Mussoorie should be more than a hotel room with a better mattress and a mountain view. The difference matters. Many places in Mussoorie use the word 'luxury' for what is really a clean mid-range stay with decent food. Real luxury in the hills comes from a mix of things. It is where you are placed and what surrounds you. It is how the space is designed, and what you can do from there. This guide takes an honest look at what premium stays in Mussoorie offer and what to look for. It also explains why more travellers from Delhi NCR and Chandigarh now choose stays built around the outdoors over a standard hotel.",
    ],
  },
  details: {
    title: "What Luxury in the Hills Really Means",
    subtitle: "Beyond the Label",
    description: [
      "Why does location define luxury in Mussoorie? In a city hotel, luxury is mostly about the interiors: thread count, bathroom fittings, the lobby. In a mountain town like Mussoorie, the setting does much of the work. A well-placed resort near George Everest Peak or on the Doon Valley ridge puts you inside the landscape, not beside it. You feel the difference at once. Waking to forest sounds, stepping out into cool mountain air and seeing the horizon from your room are things no makeover can copy.",
      "Height matters too. Resorts above Mussoorie town, at 2,000 metres or more, tend to have cleaner air and less noise. Their setting is also more natural than the town centre. EBC, on Hathipaon Road, sits at 2,160 m in deodar, pine and rhododendron forest.",
      "What kinds of luxury stay can you choose in Mussoorie? The first is the furnished luxury tent, the fastest-growing kind of premium mountain stay. A well-designed luxury tent has a proper bed with good linen and bedding. It has electric lighting and heating for cold nights, and a washroom with hot water, ideally attached. It should have a private deck or seating area, plus access to a bonfire. This is the style at Everest Base Camp Mussoorie, a glamping resort near George Everest Peak. It is made for travellers who want the outdoors without the hardship of basic camping. Our tents, the Glamper, the Surveyor Suite and the Camper, all have their own bathrooms and heating.",
      "The second is the mountain cottage or villa. These stand on their own, often built of stone or wood, along ridges or inside the forest. They are more solid than tents and suit longer stays or winter visits, when staying warm comes first. At EBC, the Zenith Luxury Cottage, the Twin Luxury Cottages and the Andrew's Villa fall into this group. The third is the hotel suite, found at larger hotels in and around Mussoorie. Suites offer a more classic kind of luxury, with several rooms, in-suite service and often a spa or pool. They suit travellers who prefer a full-service hotel, with the mountains as a bonus.",
      "How can you tell real luxury from a basic stay at a premium price? This is the question most travellers forget to ask before they book. Signs of real luxury: clear, detailed information about what each room includes, not generic marketing copy. Look for genuine guest reviews that mention staff by name, the food or details of the room. Look for clear booking and refund rules. And look for a list of things to do that shows local knowledge.",
      "Signs of inflated prices: photos that do not match the actual layout or size of the place. Watch for vague lines like 'stunning views' that never say from which room or at what time of day. Be wary of bundled packages with unclear inclusions, and of no mention of what depends on the season or the weather.",
      "Why are glamping resorts changing what luxury means in Mussoorie? The old model of hill station luxury was a large hotel with a colonial look, a formal dining room and a spa. That model still exists and still has its fans. But a growing number of travellers from Delhi NCR, Chandigarh and Punjab now judge luxury differently. They care about the quality of the stay, not the size of the lobby. Glamping resorts have responded by placing premium comfort inside the landscape, not next to it. The Tripoto story Did You Know That Just 8 Hours From Delhi, There's An Everest Base Camp? makes the point well. Easy access from the big northern cities is part of what makes this kind of stay work. By road, EBC is about 280 km from Delhi, a drive of 5.5 to 6.5 hours.",
      "What can a two-night luxury glamping stay in Mussoorie include? A well-planned two-night stay at a premium glamping resort near Mussoorie gives you this. Day 1 (Arrival): drive from Delhi or Dehradun and check in from 2:00 PM. Settle into your tent, then enjoy the evening bonfire and dinner under open skies. Day 2: a morning walk toward George Everest Peak, a late breakfast and a free afternoon to rest or explore. End with stargazing or a second bonfire evening. Day 3: an early walk along the ridge, check-out mid-morning and the drive home with a clear head.",
      "You cannot keep this rhythm from a town-centre hotel. Being close to the trail, with the outdoors right outside, makes the stay flow without drives in between. At EBC, the guided morning walk runs daily from 7 to 9 AM and is included with every stay. You can see current rooms and tent categories on EBC Mussoorie's rooms page and plan around availability.",
      "Who is this kind of stay best for? Luxury glamping in Mussoorie suits couples on an anniversary or honeymoon who want privacy and scenery. Delhi NCR professionals come for a two-night reset without flying. Families with older children get the outdoors with comfort, and small corporate groups get a retreat in nature. It is less suited to travellers who want lots of shopping, many restaurants nearby or the facilities of a big hotel.",
    ],
  },
  faqs: [
    {
      question: "What is included in a luxury glamping resort stay in Mussoorie?",
      answer:
        "Most include a furnished tent, bedding, a washroom, some meals and things to do on site. Check exactly what is included when you book. At EBC, every room includes breakfast for two, a guided morning nature walk, evening bonfire access, Wi-Fi and free parking.",
    },
    {
      question: "Is a luxury resort in Mussoorie suitable for a honeymoon?",
      answer:
        "Yes. The scenery, the privacy of a tent or cottage and well-planned evenings for two make it a strong honeymoon choice. At EBC, honeymooners get a rose-petal welcome at no charge, and the Andrew's Villa is the room most requested for honeymoons.",
    },
    {
      question: "How does luxury glamping compare in price to a five-star hotel in Mussoorie?",
      answer:
        "Rates vary. Glamping resorts can cost about the same as a full-service five-star hotel, or less, and often give you a more distinctive stay.",
    },
    {
      question: "What is the best season for a luxury resort stay in Mussoorie?",
      answer:
        "March to June and late September to November are the most comfortable months for outdoor-focused stays. The monsoon, from July to September, is quiet and misty, and suits a slow stay in a weather-proofed room. Check road advisories before you drive.",
    },
    {
      question: "Are luxury resorts in Mussoorie pet-friendly?",
      answer:
        "Some resorts welcome pets, often with rules. Always check before you book. Pets are welcome at EBC; just tell us in advance.",
    },
    {
      question: "Do luxury glamping tents have electricity and hot water?",
      answer:
        "Good glamping resorts provide both. Check the details with the resort before you arrive. At EBC, every tent has its own bathroom and heating.",
    },
  ],
};

export const metadata = guideMeta("luxury-resort-in-mussoorie", articleData.metaData);

export default function LuxuryResortPage() {
  return (
    <main className="bg-[#0C150D] text-[#F7F5EE]">
      <JsonLd data={guideSchema("luxury-resort-in-mussoorie", articleData)} />
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
            <p className="text-base text-[#4A5A47]">Everything you need to know about staying at a luxury resort in Mussoorie.</p>
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