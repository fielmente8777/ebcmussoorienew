import HeroBanner from "@/components/banner/HeroBanner";
import Accordion2 from "@/components/accordion/Accordion2";
import { SectionWithContainer } from "@/components/sectionComponants";
import SectionHeading from "@/components/typography/SectionHeading";
import { SectionHeading2 } from "@/components/typography/SectionHeading2";
import { guideMeta, guideSchema } from "../components/guides";
import JsonLd from "@/components/seo/JsonLd";

const articleData = {
  slug: "adventure-camping-near-dehradun",
  metaData: {
    title: "Adventure Camping Near Dehradun: The Activity-First Guide for Outdoor Travellers | EBC Mussoorie",
    description:
      "Adventure camping near Dehradun means treks, rappelling, cycling and rafting from a hill base. Trail picks, a two-night plan, packing and safety tips.",
  },
  banner: {
    title: "Adventure Camping Near Dehradun",
    subTitle: "The Activity-First Guide for Outdoor Travellers",
    description:
      "Trekking, trail hikes, rappelling and mountain cycling. Here is how to plan a camping trip where the activity matters as much as the bed.",
    image: "/banner/bnr2.png",
  },
  intro: {
    title: "Adventure Camping Near Dehradun",
    description: [
      "Not every camping trip to the Dehradun hills is built around a bonfire and a pretty tent. Some travellers come for the effort itself. They want burning legs on a steep climb and cold air at height. They want the deep tiredness that only a full day outdoors can give. This guide is for that traveller. Adventure camping near Dehradun is a trip where the activity counts as much as the stay. It is not a rest cure. It is a way to plan days around treks, trail finding and outdoor challenge. The camp or glamping base is where you recover each night and set out again each morning.",
    ],
  },
  details: {
    title: "What Adventure Camping Near Dehradun Actually Involves",
    subtitle: "An Activity-First Approach",
    description: [
      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">What does adventure camping near Dehradun actually involve?</h2>
       <p>Dehradun sits at the foot of the Garhwal Himalayas. Within a short drive, the land climbs fast. It rises from river valley at 600 metres to forest ridges at 2,000 metres and beyond. That range is what makes this area work for more than one sport. You can trek, climb, ride and raft in the same trip.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">Which activities can you do in this zone?</h2>
       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">Where can you go trekking and trail hiking?</h3>
       <p>Trekking is the most reliable activity here for most of the year. In the monsoon, trails turn slick, so keep routes short and check conditions each day. The routes vary a great deal in effort:</p>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>Camel's Back Road and the George Everest Peak approach (Mussoorie belt):</strong> 2 to 4 hours return. Good for active beginners and families with older children.</li>
         <li><strong>Nag Tibba base trek from Pantwari:</strong> about 16 kilometres return. It tops out at 3,022 metres. Best for seasoned day hikers.</li>
         <li><strong>Hathi Paon to George Everest Peak via the forest loop:</strong> a longer take on the George Everest Peak route. It adds extra stretches of forest trail.</li>
       </ul>
       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">Is rappelling or rock climbing an option?</h3>
       <p>Yes. Several operators in the Rishikesh and Mussoorie belt run rappelling sessions on fixed cliff faces. These are not technical climbs that need a long skills course. They are still hard on the body, and you need a head for heights. They suit fit adults and teenagers aged 14 and above.</p>
       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">Can you add white water rafting on the Rishikesh corridor?</h3>
       <p>Rafting sits outside the Mussoorie glamping zone, about an hour or so beyond Dehradun. The Ganga stretch from Shivpuri to Rishikesh has Grade 2 to Grade 4 rapids, by section. Most people do it as a half-day trip. You can pair it with a night at a camp nearby. Rafting usually pauses in the monsoon, so check with your operator first.</p>
       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">What is mountain cycling like here?</h3>
       <p>There are trail rides on the edges of Mussoorie and along the Landour ridge. This one rewards experience. Mountain roads at 2,000 metres rise and fall sharply. You need good fitness and real comfort riding on rough ground.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">Why base your adventure at a camp near George Everest Peak?</h2>
       <p>Your base decides what you can reach each morning without a car. In the Mussoorie belt, a camp near George Everest Peak gives you three things:</p>
       <ul class="list-disc pl-6 space-y-1">
         <li>Trails you can walk to straight from your door</li>
         <li>Height already gained, at about 2,160 metres, so the drive to higher trailheads is shorter</li>
         <li>A true outdoor feel that gets you in the mood, with no shift from a city hotel</li>
       </ul>
       <p><strong>Everest Base Camp Mussoorie</strong> was set up with this in mind. Our glamping resort on Hathipaon Road sits on the edge of good trail country, among deodar, pine and rhododendron. You can leave early and still get a proper night's sleep. Every stay includes a guided morning walk from 7 to 9 AM, a gentle way to test your legs. You can see the tents and cottages on <a href="/rooms/" class="text-secondary underline">EBC Mussoorie's rooms page</a>.</p>
       <p>Our page on <a href="/activities/" class="text-secondary underline">adventure experiences at EBC Mussoorie</a> shows what the outdoor access looks like on the ground.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">How do you plan a two-night adventure camping trip near Dehradun?</h2>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>Day 1:</strong> Drive up from Dehradun, 35 km away, and arrive by early afternoon. Take an easy walk from camp toward the George Everest Peak trail, 1 to 2 hours. Have dinner and sort your kit for the next day.</li>
         <li><strong>Day 2 (main adventure day):</strong> Leave early for the full George Everest Peak or forest loop trek. Allow 3 to 5 hours in all. Spend the afternoon resting and stretching, with a short nature walk if you like. End with the evening bonfire and a chat about the day.</li>
         <li><strong>Day 3:</strong> Do a short trail or ridge walk before check-out. If you have time, add a half-day of rafting near Rishikesh on the way back to Dehradun.</li>
       </ul>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">What should you pack for adventure camping near Dehradun?</h2>
       <p>Bring these in any season:</p>
       <ul class="list-disc pl-6 space-y-1">
         <li>Trekking boots with ankle support, not trail runners, for steep ground</li>
         <li>A base layer that wicks sweat, and a warm mid layer</li>
         <li>A waterproof outer layer, even in summer</li>
         <li>Trekking poles, if your knees ache on the way down</li>
         <li>A small first aid kit, with blister care and pain relief</li>
         <li>Bottles that hold at least 2 litres of water (you can refill at camp)</li>
         <li>A head torch for starts before dawn</li>
         <li>Sun care for height: SPF 50 sunscreen, UV-blocking sunglasses and a hat</li>
       </ul>
       <p>At <a href="/" class="text-secondary underline">Everest Base Camp Mussoorie</a>, bedding and lighting are provided. Check what we supply and what to bring when you book through <a href="/rooms/" class="text-secondary underline">EBC Mussoorie's accommodation page</a>.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">How do you stay safe on an adventure camping trip near Dehradun?</h2>
       <p>Outdoor sport always carries some risk. Be honest with yourself about it:</p>
       <ul class="list-disc pl-6 space-y-1">
         <li>Trek grades are a guide, not a promise. Your pace, your fitness and the trail on the day all change the outcome.</li>
         <li>Mountain weather turns fast at 2,000 metres and above. Start early. Leave time to get down before the afternoon cloud rolls in.</li>
         <li>Tell your camp your route and when you expect to be back before any solo or small group trek.</li>
         <li>Height above 2,500 metres can affect some people. Mussoorie, at around 2,160 metres, is well within a safe range for most. Still, listen to your body.</li>
         <li>In the monsoon, landslides can close hill roads. Check advisories before you drive, keep your plans loose, and choose shorter walks over long treks.</li>
       </ul>`,
    ],
  },
  faqs: [
    {
      question: "What adventure activities are available near Dehradun for camping travellers?",
      answer:
        "You can trek, hike forest trails, rappel, ride mountain bikes and raft white water. All of these are within reach of camps in the Mussoorie and Rishikesh belt.",
    },
    {
      question: "Is adventure camping near Dehradun suitable for beginners?",
      answer:
        "Yes, if you pick the right activity. The George Everest Peak trek suits active beginners. Technical sports like rappelling need a trained operator to guide you.",
    },
    {
      question: "What is the best season for adventure camping near Dehradun?",
      answer:
        "March to May and September to November give the most reliable trails. The monsoon, July to September, is quiet and green, but it suits slow stays and short walks. Expect slippery paths and possible road closures, and check advisories before you drive.",
    },
    {
      question: "How fit do I need to be for a trekking camp near Dehradun?",
      answer:
        "For treks in the Mussoorie belt, regular walking fitness is enough. Longer routes like Nag Tibba need some real training first.",
    },
    {
      question: "Are guided treks available from glamping camps near Dehradun?",
      answer:
        "Some camps offer them. At EBC Mussoorie, a guided morning nature walk from 7 to 9 AM comes with every stay. For longer treks, confirm the guide and route options with the property before you book.",
    },
    {
      question: "Is adventure camping near Dehradun suitable for groups?",
      answer:
        "Yes. Group bookings for trekking camps and adventure stays are common. EBC Mussoorie hosts groups of 8 to 48 guests. Confirm space and group activities with your chosen property.",
    },
  ],
};

export const metadata = guideMeta("adventure-camping-near-dehradun", articleData.metaData);

export default function AdventureCampingPage() {
  const renderContent = (htmlString: string) => {
    return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
  };

  return (
    <main className="bg-[#0C150D] text-[#F7F5EE]">
      <JsonLd data={guideSchema("adventure-camping-near-dehradun", articleData)} />
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
              description="Everything you need to know before booking your adventure camping trip near Dehradun."
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