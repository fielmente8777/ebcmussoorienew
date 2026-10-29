import HeroBanner from "@/components/banner/HeroBanner";
import Accordion2 from "@/components/accordion/Accordion2";
import { SectionWithContainer } from "@/components/sectionComponants";
import SectionHeading from "@/components/typography/SectionHeading";
import { SectionHeading2 } from "@/components/typography/SectionHeading2";
import { guideMeta, guideSchema } from "../components/guides";
import JsonLd from "@/components/seo/JsonLd";

const articleData = {
  // ✅ URL is exactly: glamping-tent-monsoon-experience
  slug: "glamping-tent-monsoon-experience",
  metaData: {
    title: "The Glamping Tent Monsoon Experience: What It Actually Feels Like and How to Have the Best Version of It | EBC Mussoorie",
    description:
      "The glamping tent monsoon experience: rain on canvas, misty dawns, a bonfire after the rain, and how to choose a stay that is fully monsoon-ready.",
  },
  banner: {
    title: "The Glamping Tent Monsoon Experience",
    subTitle: "What It Actually Feels Like and How to Have the Best Version of It",
    description:
      "One moment defines the glamping tent monsoon experience. It is 8 PM, the rain has eased, the bonfire is lit, and there is nowhere you would rather be. At the right place, that moment is yours.",
    image: "/banner/bnr2.png", // Replace with a glamping monsoon banner if available
  },
  intro: {
    title: "The Glamping Tent Monsoon Experience",
    description: [
      "One moment defines the glamping tent monsoon experience for most guests who have had it done right. It is 8 PM. The heavy rain that fell all afternoon has eased. The air is 14 degrees and smells of wet deodar forest and woodsmoke, a mix you find nowhere else. A bonfire has been lit in the clearing outside the tent. The valley below the ridge, hidden under cloud all afternoon, shows its lights through gaps in the drifting overcast. You sit by the fire in a fleece, holding something warm, and there is nowhere you would rather be.",
      "That moment is real, and it is not an accident. It happens at certain places, in certain conditions, when the people who built and run the stay have made the right choices. This guide is about those choices. It shows how to find a place that makes that moment likely, not lucky. At EBC Mussoorie, the monsoon (July to September) is the quietest and most atmospheric season, and every tent and cottage is weather-proofed. The roads need respect. Heavy rain can bring landslides and close hill roads for a day or two. Check advisories before you drive, travel in daylight and keep a spare day.",
    ],
  },
  details: {
    title: "The Monsoon Glamping Guide",
    subtitle: "Rain on Canvas",
    description: [
      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">What Does the Glamping Tent Monsoon Experience Actually Consist Of?</h2>
       <p>Break it into its parts, because each one asks something specific of the place you stay:</p>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>The tent interior during rain:</strong> Rain on a well-made canvas tent makes a steady, rhythmic, deeply pleasant drumming. Guests name it as one of their strongest memories of a monsoon glamping stay. You only get that sound from real canvas pulled taut overhead. A nylon tent or a solid roof will not give it to you. Inside, the tent must stay warm, dry and comfortable while it rains. That means a raised floor, so the cold does not seep up from below. It means insulation or a lining to hold the warmth when the canvas is wet outside. And it means good bedding that stays warm at 14 to 16 degrees Celsius. At EBC, The Glamper is a luxury canvas tent with heating and an attached bathroom.</li>
         <li><strong>The private outdoor space as the weather shifts:</strong> A well-designed glamping tent has its own outdoor area: a sit-out, a veranda or a deck. In the monsoon, this is the most valuable part of the tent. In light rain, you can sit out there, partly sheltered, and watch the rain fall on the forest. In heavy rain, a covered version keeps you close to the outdoors without getting soaked. The Glamper and The Surveyor Suite both have a private deck, so ask which setup suits you.</li>
         <li><strong>The shared evening:</strong> The bonfire matters more in the monsoon than at any other time. It is the social and atmospheric anchor of the day. At EBC Mussoorie, a bonfire is lit every evening, with seating and blankets, and a private one can be arranged. For monsoon stays, ask whether it still runs when the rain eases in the evening. Ask whether there is partial cover, how fast it can be set up once the rain stops, and what happens if the evening never clears.</li>
         <li><strong>The morning mist walk:</strong> In the Mussoorie hills during the monsoon, early morning is when the mist hangs inside the canopy. The light is softened to an unusual degree. This is the most atmospheric outdoor moment of the stay. A place that lets you step straight onto a forest trail at this hour, with no transport or permits, gives you something no later hour can match. At EBC Mussoorie, a guided walk leaves every morning from 7 to 9 AM, and the estate sits beside George Everest's House. The house is a couple of minutes' walk from Park Cafe and is at its best in morning mist.</li>
       </ul>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">Which Property Design Elements Make a Monsoon Glamping Experience Work?</h2>
       <p>These are the design choices that separate a monsoon stay you remember from one you would rather forget:</p>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>Where the tent sits under the canopy:</strong> A tent right under dense canopy gets a steady drip from the branches long after the rain stops. That can be irritating, and it adds noise. A tent at the canopy edge, open to the sky on one side and under trees on the other, gets the rain sound without the drip that follows. Ask where each tent sits in relation to the forest canopy.</li>
         <li><strong>Paths and drainage between the tent and shared spaces:</strong> In the monsoon, the 30-metre walk from your tent to the café or the bonfire matters. A well-drained gravel or paved path stays walkable. A mud path in steady rain becomes a hazard. At EBC Mussoorie, ask about the paths between the rooms and Park Cafe or the bonfire area.</li>
         <li><strong>Evening lighting on the estate:</strong> When the evening rain clears, guests move between their tents and the shared spaces. Warm, soft lighting and safely lit paths that still keep the sky dark create the evening mood that monsoon glamping does best. EBC sits on Hathipaon Road, well away from the glow of Mall Road, where light pollution is minimal. That makes this mood easy to achieve here.</li>
         <li><strong>A kitchen that bends with the weather:</strong> Some kitchens shut at a fixed time, whether the day ran late or early. That is hard to live with in the monsoon. Look for one that can shift mealtimes for a group. Park Cafe at EBC Mussoorie handles group dining. Confirm its timings when you book a monsoon stay.</li>
       </ul>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">A Walk Through a Monsoon Glamping Day at EBC Mussoorie: What Does It Feel Like?</h2>
       <p>To make this concrete, here is what a well-run monsoon glamping day at EBC Mussoorie could look like:</p>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>6:30 AM:</strong> Wake to the last of the night's rain on the canvas. Get up, add layers and step out onto the deck of The Glamper. The forest is inside the cloud. You can see perhaps 25 metres. Everything is a deep, soaked green.</li>
         <li><strong>7:00 AM:</strong> Join the guided walk through the estate in the mist. George Everest's House emerges from the white as you approach. The trail is quiet. Birds are busy in the canopy above, and sound carries differently in the damp morning air up here.</li>
         <li><strong>9:00 AM:</strong> Breakfast, which comes with every room, with the forest still dripping all around you.</li>
         <li><strong>10 to 11 AM:</strong> The rain starts to build. Head back to The Glamper. Sit at the door of the tent and watch cloud fill the valley below. By 11 AM the Doon Valley has vanished. You are above the cloud. The rain on the canvas begins.</li>
         <li><strong>11 AM to 4 PM:</strong> Time indoors. The drumming on the canvas. A book. If you are in the Zenith Luxury Cottage instead, its private veranda frames the monsoon forest. Lunch is a short walk to Park Cafe in your rain jacket.</li>
         <li><strong>5 PM:</strong> The rain starts to ease. The cloud in the valley begins to break. Now and then, Dehradun's lights show through the gaps.</li>
         <li><strong>7 PM:</strong> The bonfire is set up on the estate. Everything is wet, and the smoke carries the smell of deodar resin as the fire catches. It drifts into the forest with the last of the damp air.</li>
         <li><strong>9 PM:</strong> The cloud has cleared, and the valley lights are fully visible below. Above you, the George Everest ridge is dark except for the soft estate lights. The fire is still burning. This is the moment.</li>
       </ul>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">What Should You Look for in a Monsoon Glamping Property?</h2>
       <p>When you weigh up a glamping stay for the monsoon, these features matter most:</p>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>Canvas quality:</strong> 380 to 500 gsm treated canvas with a polyurethane or acrylic waterproof coating. Ask for the spec.</li>
         <li><strong>Floor construction:</strong> A raised wooden or concrete floor, not a groundsheet. It should sit at least 15 cm off the ground.</li>
         <li><strong>Internal lining:</strong> An insulated or lined interior that holds warmth when the canvas is wet outside.</li>
         <li><strong>En-suite bathroom:</strong> An attached, properly plumbed and waterproofed bathroom. Not a shared block reached by an outdoor path.</li>
         <li><strong>Covered outdoor space:</strong> A private sit-out or veranda with some shelter, for use in light rain.</li>
         <li><strong>Communal indoor space:</strong> A restaurant or lounge where guests can gather on days of full rain. At EBC, that is Park Cafe, and The Den is a private lounge on the estate that you can reserve.</li>
       </ul>
       <p>For a guest's view of the EBC Mussoorie estate and its outdoor stay, <a href="https://tripoto.com/india/trips/did-you-know-that-just-8-hours-from-delhi-there-s-an-everest-base-camp-no-we-re-not-kidding-3aea3a54f8628a1c8" class="text-secondary underline" target="_blank" rel="noopener">this Tripoto account of EBC Mussoorie</a> gives useful first-hand detail.</p>`,
    ],
  },
  faqs: [
    {
      question: "What makes a glamping tent sound good in rain?",
      answer:
        "Canvas tension and weight. A well-framed glamping tent with 380 to 500 gsm treated canvas makes that rhythmic drumming. A thin nylon tent makes a higher-pitched patter. The fabric and the frame decide the sound.",
    },
    {
      question: "Is the monsoon bonfire experience at EBC Mussoorie reliable?",
      answer:
        "A bonfire is lit at EBC Mussoorie every evening, and a private one can be arranged for your room. In the monsoon, the rain decides the timing. Ask how the team handles evenings after rain and whether there is partial cover for the seating.",
    },
    {
      question: "What is the temperature inside a luxury glamping tent during monsoon at 2,000 metres?",
      answer:
        "With a lined tent and good bedding, the inside can stay at a comfortable 18 to 22 degrees Celsius when it drops to 12 to 16 degrees outside. EBC sits a little higher, at 2,160 m, and The Glamper and The Camper both have heating. Ask about it when you book July or August dates.",
    },
    {
      question: "Is the monsoon glamping experience suitable for first-time glampers?",
      answer:
        "Yes, with the right place and honest expectations. First-time glampers should choose a stay with attached bathrooms, solid floors and a proper on-site restaurant, not a basic tent camp.",
    },
    {
      question: "How do I know if a glamping property's tent is genuinely monsoon-ready?",
      answer:
        "Ask six structural questions. How high is the floor? How heavy is the canvas, and how is it waterproofed? Is there an inner lining? How is the drainage designed? Is there an en-suite bathroom? And how has the place coped in past monsoons?",
    },
    {
      question: "What is the best way to book EBC Mussoorie for a monsoon glamping experience?",
      answer:
        "Message EBC Mussoorie on WhatsApp at +91 91190 01126, or book through the official site. EBC stays open through the monsoon. Confirm availability for The Glamper, the bonfire plans, and the date-change policy in case weather disrupts your July or August trip.",
    },
  ],
};

export const metadata = guideMeta("glamping-tent-monsoon-experience", articleData.metaData);

export default function GlampingTentExperiencePage() {
  const renderContent = (htmlString: string) => {
    return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
  };

  return (
    <main className="bg-[#0C150D] text-[#F7F5EE]">
      <JsonLd data={guideSchema("glamping-tent-monsoon-experience", articleData)} />
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
              description="Everything you need to know before booking your monsoon glamping experience."
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