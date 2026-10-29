import HeroBanner from "@/components/banner/HeroBanner";
import Accordion2 from "@/components/accordion/Accordion2";
import { SectionWithContainer } from "@/components/sectionComponants";
import SectionHeading from "@/components/typography/SectionHeading";
import { SectionHeading2 } from "@/components/typography/SectionHeading2";
import { guideMeta, guideSchema } from "../components/guides";
import JsonLd from "@/components/seo/JsonLd";

const articleData = {
  slug: "stargazing-resort-near-delhi",
  metaData: {
    title: "Stargazing Resort Near Delhi: Where the Sky Actually Opens Up | EBC Mussoorie",
    description:
      "Real stargazing near Delhi starts about 200 km out and 1,500 m up. How dark skies work, what you can see, and how to choose a resort for the night sky.",
  },
  banner: {
    title: "Stargazing Resort Near Delhi",
    subTitle: "Where the Sky Actually Opens Up",
    description:
      "How far you need to drive, why height helps, and what you can see with the naked eye. A plain guide to dark-sky travel from Delhi.",
    image: "/banner/bnr2.png",
  },
  intro: {
    title: "Stargazing Resort Near Delhi",
    description: [
      "Delhi has a Bortle Class 8 or 9 sky. Put simply, the city's light pollution is so dense that on a clear night you may see only a handful of bright stars and the moon. From truly dark places, the Milky Way shows to the naked eye as a faint, glowing band across the sky. From Delhi and its satellite cities, it is gone. To find a stargazing resort near Delhi with a truly darker sky, you need to know two things. First, how far you must travel before the glow fades. Second, what height and air give the clearest skies once you arrive. This guide answers both. It also covers what a stargazing stay should include to make the night sky worth the trip.",
    ],
  },
  details: {
    title: "How Far From Delhi Do You Need to Go for Real Stars?",
    subtitle: "A Dark-Sky Guide",
    description: [
      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">How Far From Delhi Do You Need to Go for Real Stars?</h2>
       <p>Light pollution does not stop at the city limits. The glow from Delhi, Gurgaon, Noida and the wider NCR forms a dome of skyglow. In the direction of the brightest sprawl, you can see it up to 100 kilometres away.</p>
       <p>The Bortle Dark-Sky Scale runs from 1, a truly pristine sky, to 9, the inner city. To see the Milky Way clearly with the naked eye, you want Class 4 or better. To reach a Class 4 or 5 sky from Delhi, you usually need to be:</p>
       <ul class="list-disc pl-6 space-y-1">
         <li>More than 200 kilometres from the centre of Delhi</li>
         <li>High enough to rise above the haze that sits low on the horizon</li>
         <li>Away from any large town or busy highway</li>
       </ul>
       <p>The Mussoorie ridge meets all three. EBC Mussoorie sits at 2,160 m, about 280 km from Delhi by road. It is above the glow of the Dehradun valley. It is also on Hathipaon Road, near George Everest Peak and well away from the lights of Mall Road. On a clear night here, the sky is darker than most Delhi travellers have seen since childhood.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">Why Does Height Make Stargazing Better?</h2>
       <p>Two simple bits of physics explain why the Mussoorie ridge beats lower dark-sky spots at a similar distance from Delhi.</p>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>Thinner air:</strong> At 2,160 m, you look up through less air than you would at sea level. Less air means less of the scattering that dims and blurs starlight on its way to your eyes. The effect is subtle but real. Stars at height look a little sharper and brighter than at dark sites near sea level.</li>
         <li><strong>Valley inversion:</strong> On many nights, cool air settles in the Doon Valley below Mussoorie. It traps haze and dust close to the valley floor. From the ridge, you look out from above that layer, not through it. So the sky over the ridge is often far clearer than the view from the valley.</li>
       </ul>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">What Can You See With the Naked Eye From Mussoorie on a Clear Night?</h2>
       <p>On a clear night, from a dark spot near George Everest Peak, you can see all of these without a telescope:</p>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>The Milky Way core:</strong> From about April to October, the bright centre of our galaxy rises above the southern horizon. It shows as a soft band of light across the sky. Once your eyes adjust, you can tell it apart from cloud. Give them about 20 minutes of full darkness.</li>
         <li><strong>Andromeda Galaxy (M31):</strong> This is the nearest large galaxy to our own. From August to January, it shows as a faint smudge in the constellation Andromeda. It lies about 2.5 million light-years away. That makes it the most distant thing most people will ever see without a telescope.</li>
         <li><strong>Jupiter, Saturn, Mars and Venus:</strong> All four show up at different times of the year, with no gear at all. Even simple binoculars pick out Jupiter's largest moons.</li>
         <li><strong>Meteors:</strong> From a dark site, you can expect five to ten meteors an hour on any night of the year. The big showers bring far more. During the Perseids in August and the Geminids in December, 50 to 100 an hour is possible under dark, clear skies.</li>
         <li><strong>The Pleiades (Seven Sisters):</strong> A tight cluster of stars, easy to see from October to March. Six stars show to the naked eye. Binoculars reveal dozens more.</li>
       </ul>
       <p>At EBC, the Milky Way is visible to the naked eye on clear nights. The bonfire is lit every evening, so you can sit by the fire, then walk a few steps into the dark and let your eyes adjust.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">What Should a Stargazing Resort Near Delhi Provide?</h2>
       <p>Some resorts truly support stargazing. Others just list it as an amenity. Here is how to tell them apart:</p>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>Seats for looking up, away from indoor lights:</strong> Stargazing means looking up for a long time. You need deck chairs, loungers or a flat spot for a blanket, well away from lamps and windows.</li>
         <li><strong>Soft lighting late at night:</strong> After 10 PM, outdoor lights should be few, low and warm, ideally red or amber. White overhead lights near the viewing spot ruin your night vision and make faint stars much harder to see.</li>
         <li><strong>Someone to show you the sky, even briefly:</strong> A simple star chart, a short talk on what is up tonight, or a guide to the constellations adds a lot. Stargazing without context is pleasant. With context, it stays with you.</li>
         <li><strong>Open sky close to your room:</strong> Forest gives you privacy and shade, but it can also hide large parts of the sky. The best spots are open clearings or bare ridgelines with a wide view overhead.</li>
       </ul>
       <p><strong>Everest Base Camp Mussoorie</strong> sits near George Everest Peak, at 2,160 m on Hathipaon Road, where light pollution is low. Time outdoors is the centre of a stay here, and a clear night of stars is part of the evening. On request, the team can arrange a guided stargazing session with star charts and constellation guidance. To see how the tents and cottages open onto the forest, visit <a href="/rooms/" class="text-secondary underline">EBC Mussoorie's rooms and tents page</a>.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">When Are the Best Months for Stargazing Near Mussoorie From Delhi?</h2>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>October to November:</strong> Some of the clearest, steadiest skies of the year. Orion, one of the easiest constellations to spot, rises through the late evening. At EBC, this is one of the two best windows for stars.</li>
         <li><strong>December to January:</strong> Crisp, cold nights with very clear air. The winter Milky Way is fainter than the summer core, but the sky is at its most transparent. Dress warmly and keep the bonfire close.</li>
         <li><strong>February to April:</strong> February and March are EBC's other best window. April is still good. Haze starts to build in May, before the monsoon.</li>
         <li><strong>June to September:</strong> The monsoon. Cloud often hides the sky, so do not pin a trip on one special night of stars. Clear breaks do come, though, and the air after rain can be very sharp. EBC stays open through these months, and every tent and cottage is weather-proofed. This season suits a slow, misty stay more than an astronomy trip. Hill roads can close after heavy rain, so check advisories before you drive.</li>
       </ul>
       <p>For a practical view of the setting and what you can do outdoors near George Everest Peak, see the <a href="/activities/" class="text-secondary underline">activities and experiences at EBC Mussoorie</a>.</p>
       <p>The Mussoorie ridge is the easiest truly dark sky for travellers from Delhi. At the right property, the stars stop being a side note and become the reason for the trip. Getting there is simpler than most NCR travellers think. The drive takes 5.5 to 6.5 hours, and you can compare the <a href="/rooms/" class="text-secondary underline">tents and cottages at Everest Base Camp in Mussoorie</a> before you go.</p>`,
    ],
  },
  faqs: [
    {
      question: "How far from Delhi do you need to go for proper stargazing?",
      answer:
        "Go at least 200 kilometres from Delhi, and ideally above 1,500 metres, to escape most light pollution. The Mussoorie ridge meets both tests. EBC Mussoorie is about 280 km from Delhi and sits at 2,160 m.",
    },
    {
      question: "Can you see the Milky Way from Mussoorie?",
      answer:
        "Yes. On clear nights from about April to October, the bright core shows from dark spots away from the lights of Mussoorie town. For the clearest air overall, October to November and February to March are the best months at EBC.",
    },
    {
      question: "What equipment do I need for stargazing near Mussoorie?",
      answer:
        "None for simple naked-eye viewing. Binoculars bring out much more detail on the moon, star clusters and planets. A telescope, if you bring one, opens up fainter deep-sky objects.",
    },
    {
      question: "What is the best time of year for stargazing near Delhi in the mountains?",
      answer:
        "October to November and February to March give the clearest air. August brings the Perseid meteor shower, though monsoon cloud can hide it, so keep your plans flexible.",
    },
    {
      question: "Do stargazing resorts near Delhi provide telescopes or guides?",
      answer:
        "Some offer a basic talk or equipment. At EBC Mussoorie, the team can arrange a guided stargazing session with star charts and constellation guidance on request. Confirm what is on offer before you book.",
    },
    {
      question: "Is stargazing affected by moonlight?",
      answer:
        "Yes. A full moon washes out faint objects like the Milky Way. For the darkest skies, plan your trip around the new moon, within about three days either side.",
    },
  ],
};

export const metadata = guideMeta("stargazing-resort-near-delhi", articleData.metaData);

export default function StargazingResortPage() {
  const renderContent = (htmlString: string) => {
    return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
  };

  return (
    <main className="bg-[#0C150D] text-[#F7F5EE]">
      <JsonLd data={guideSchema("stargazing-resort-near-delhi", articleData)} />
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
              description="Everything you need to know before booking a stargazing resort near Delhi."
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