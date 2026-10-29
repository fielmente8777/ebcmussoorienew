import HeroBanner from "@/components/banner/HeroBanner";
import Accordion2 from "@/components/accordion/Accordion2";
import { SectionWithContainer } from "@/components/sectionComponants";
import SectionHeading from "@/components/typography/SectionHeading";
import { SectionHeading2 } from "@/components/typography/SectionHeading2";
import { guideMeta, guideSchema } from "../components/guides";
import JsonLd from "@/components/seo/JsonLd";

const articleData = {
  // ✅ URL is exactly: misty-resort-near-mussoorie
  slug: "misty-resort-near-mussoorie",
  metaData: {
    title: "Misty Resort Near Mussoorie: What Mist Does to the Hill Station and Where to Experience It Best | EBC Mussoorie",
    description:
      "For real forest mist near Mussoorie, stay high on the ridge in deodar forest and be out by 7 AM. Here is when mist comes, where it is best and what to look for.",
  },
  banner: {
    title: "Misty Resort Near Mussoorie",
    subTitle: "What Mist Does to the Hill Station and Where to Experience It Best",
    description:
      "In Mussoorie, mist is not bad weather. In the right place, at the right height and the right hour of the morning, it is the reason to come.",
    image: "/banner/bnr2.png", // Replace with a misty forest banner if available
  },
  intro: {
    title: "Misty Resort Near Mussoorie",
    description: [
      "In Mussoorie, mist is not bad weather. In the right place, at the right height and the right hour, it is the reason to come. Picture a deodar forest at first light with the treetops inside a cloud. You can see perhaps 30 metres ahead. The ground is cold. The air smells of pine resin and wet earth. No other hill station in India gives you quite this.",
      "Mist here also comes and goes. It depends on the season, and on exactly where you stay on the ridge. A hotel on a busy street in town will never give you misty forest, whatever the weather. A stay inside an old forest estate on the western ridge, at the right height, is something else. Nothing else within 300 km of Delhi feels like it. This guide explains what makes the mist, when and where it is best, and what to look for in a misty resort near Mussoorie.",
    ],
  },
  details: {
    title: "The Misty Mountain Guide",
    subtitle: "Find Your Dreamy Retreat",
    description: [
      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">Why Is Mussoorie So Misty?</h2>
       <p>Mussoorie sits at about 2,000 metres on the Garhwal ridge, above the Doon Valley. Dehradun lies on the valley floor at around 640 metres. That gap of about 1,360 metres is what makes the mist.</p>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>How the mist forms:</strong> Warm, damp air rises from the valley floor. It meets the cooler air on the ridge and turns to cloud. In the monsoon, from July to September, this happens almost every day. The Doon Valley vanishes under a white sheet most afternoons. In October and November, and again in March and April, a thinner mist forms at dawn. It usually lifts by 9 or 10 AM as the day warms.</li>
         <li><strong>What the forest adds:</strong> A stay ringed by old deodar and oak forest sits inside the mist rather than watching it from afar. The canopy holds moisture from the damp night and from any rain. In the morning it lets that moisture go as a visible haze among the trees. A walk through it at 7 AM, when you can see only 20 to 30 metres, feels nothing like mist seen through a hotel window.</li>
         <li><strong>Why height helps:</strong> Stays higher on the ridge, toward Lal Tibba and the George Everest area, sit above the main town. They are more often at or above the cloud line, not under it. So they get both: mist all around at dawn, and the valley cloud below you later in the day. EBC Mussoorie sits at 2,160 m on Hathipaon Road, in this upper zone.</li>
       </ul>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">When Is the Mist Best in Mussoorie?</h2>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>July to September (monsoon): the most mist.</strong> In the rainy weeks, mist comes almost every day. Cloud fills the Doon Valley by mid-morning. Ridge stays sit inside or above the cloud for long spells. Dawn in the forest is thick and moody. EBC sees this as its quietest, moodiest season, and its tents and cottages are proofed against the weather. Expect more rain and shorter dry spells outdoors. Roads can close after landslides, so check advisories before you drive and keep a spare day.</li>
         <li><strong>October to November (after the rains): mist at dawn, clear by day.</strong> This is the most reliable and pleasant window. Mornings bring a soft mist that lifts by 9 AM on most days. After that, the valley and peaks are sharp and clear. For most guests, this is the best season for a misty stay. You get the mist at dawn, then clear hours for walks and photos.</li>
         <li><strong>March to April (before the rains): some morning mist.</strong> Mist is less certain than in autumn. It is often lovely after an evening shower. The forest is turning green and the birds are busy.</li>
         <li><strong>December to February (winter): fog and frost, not forest mist.</strong> Winter brings fog in the valley below the ridge, and some frost on the grounds. The mood is different from monsoon or autumn mist, but it has a charm of its own.</li>
       </ul>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">How Is a Misty Resort Stay Different From a Regular Mussoorie Hotel?</h2>
       <p>You will not get the forest mist from a hotel room on Mall Road, in any season. Here is why the type of stay and its position matter.</p>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>You need forest around you:</strong> Mist in a forest, with the canopy overhead and tree trunks fading into white, is not the same as mist seen from a terrace. A stay ringed by old deodar and oak gives you the full version. A stay in a cleared or built-up spot gives you only a distant view.</li>
         <li><strong>You need easy early starts:</strong> Outside the peak monsoon, the mist is at its best from about 6 to 9 AM. Choose a place where you can step straight onto forest paths at first light. A place that serves breakfast from 8 AM and keeps its gates shut until then loses the best of it.</li>
         <li><strong>Height above the town helps:</strong> Stays at the western end of the ridge, near the George Everest estate, sit a little higher and further from the town. They are more often inside the mist in the morning.</li>
         <li><strong>What EBC adds:</strong> The grounds open onto forest paths from early morning. The height puts the resort at or above the usual morning cloud line. The forest cover means the mist is all around you, among the trees rather than far off. The guided morning walk, included in every stay, runs daily from 7 to 9 AM.</li>
       </ul>
       <p>This <a href="https://tripoto.com/india/trips/did-you-know-that-just-8-hours-from-delhi-there-s-an-everest-base-camp-no-we-re-not-kidding-3aea3a54f8628a1c8" class="text-secondary underline" target="_blank" rel="noopener">guide to EBC Mussoorie on Tripoto</a> covers the tents, the activities and how to get there.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">What Makes the EBC Mussoorie Estate Good for Misty Forest Stays?</h2>
       <p>A few things about EBC Mussoorie suit a misty stay in particular.</p>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>Next to the George Everest House:</strong> Sir George Everest's old house is a short walk from the resort, on the western ridge. It stands on a ridge with the Doon Valley on one side and the Aglar valley on the other. On a misty morning you can often see white cloud below in the valley while the forest above sits in the mist.</li>
         <li><strong>14 rooms across seven categories:</strong> The rooms range from The Camper and The Glamper tents to The Andrew's Villa. That is the flagship private villa, with its own entrance, terrace and bonfire area. All sit in or beside the forest, so every guest can walk into the trees from the door. The Zenith Luxury Cottage has a private, east-facing veranda with forest and mountain views. It is the best seat for watching the mist lift at sunrise.</li>
         <li><strong>Breakfast in the mist:</strong> The early mist often lasts into breakfast time. Ask for breakfast in your room, or on the veranda if you stay in the Zenith, with the forest half-hidden and the birdsong sounding closer than usual in the still air. The Park Café, on the spot where Sir George Everest once kept his stables, has outdoor seats beside a meadow for later in the day.</li>
         <li><strong>A bonfire every evening:</strong> A fire on a cold, misty evening stays with you. The trees beyond the light are barely there, and the smoke drifts into the white. EBC lights a bonfire every evening, with seating and blankets. A private bonfire for your own room can be added on request.</li>
       </ul>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">How Should You Plan a Misty Resort Stay Near Mussoorie?</h2>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>Pick your season:</strong> Come in October or November for mist at dawn and clear days after. Come in July or August for the most mist, and plan a slow stay around the rain. March and April are a good second choice.</li>
         <li><strong>What to pack:</strong> A warm fleece for morning walks, even in October. A rain layer for monsoon visits. Walking shoes with good grip for wet grass and forest paths. A camera that copes with flat, low-contrast light. Mist washes out contrast, so a camera that shoots raw files does better than a phone on auto.</li>
         <li><strong>How to catch the mist:</strong> Set an alarm for 5:30 AM. Be outside by 6 AM with a flask of tea, or join the guided walk when it sets out. The best mist is usually gone by 8:30 to 9 AM. Sleeping in until breakfast is the most common way to miss the very thing you came for.</li>
         <li><strong>Driving up in the rains:</strong> Drive in daylight, and allow extra time for the wet climb. EBC is 35 km from Dehradun, about 1 to 1.5 hours by road.</li>
       </ul>
       <p>To read how EBC mixes time outdoors with comfort, see <a href="https://www.hotelierindia.com/operations/experience-tranquil-adventure-in-the-heart-of-mussoorie-with-ebc-mussoorie" class="text-secondary underline" target="_blank" rel="noopener">Hotelier India's feature on EBC</a>.</p>`,
    ],
  },
  faqs: [
    {
      question: "When is mist most reliable at Mussoorie resorts?",
      answer:
        "October to November gives the best balance. Mist forms most mornings and lifts by 9 AM, so afternoons are clear. July to September brings the thickest mist, along with monsoon rain, so plan a slow stay with room for wet days.",
    },
    {
      question: "Is the mist experience better inside the forest or from a viewpoint terrace?",
      answer:
        "They are two different things. Mist in the forest at dawn, with the canopy overhead, is something you feel all around you. Mist seen from a terrace over a cloud-filled valley is a view. At EBC Mussoorie you get both: forest paths on the estate, and the open ridge at the George Everest House a short walk away.",
    },
    {
      question: "Does mist affect outdoor activity at Mussoorie resorts?",
      answer:
        "Morning mist rarely gets in the way. Most forest walks are better for it. In the monsoon, cloud and rain can limit outdoor time to the clearer hours from about 6 to 11 AM. Plan your outdoor time for the morning, in any season.",
    },
    {
      question: "Are there specific accommodation units at EBC Mussoorie better suited to the mist experience?",
      answer:
        "The Zenith Luxury Cottage is the best pick. Its private veranda faces east over forest and mountains, so you watch the mist lift at sunrise. The Andrew's Villa has its own terrace and bonfire area. The Surveyor Suite sits in the forest canopy with a private deck. Message the team with your dates and they will suggest the best room for the season.",
    },
    {
      question: "Is winter mist at Mussoorie different from monsoon mist?",
      answer:
        "Yes. In winter you get fog in the valley below the ridge and some frost on the grounds. In the monsoon, cloud rises up through the forest. Both are lovely, but they are not the same thing. In winter you sit above the valley fog rather than inside the forest mist. The view is different, and just as striking.",
    },
  ],
};

export const metadata = guideMeta("misty-resort-near-mussoorie", articleData.metaData);

export default function MistyResortPage() {
  const renderContent = (htmlString: string) => {
    return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
  };

  return (
    <main className="bg-[#0C150D] text-[#F7F5EE]">
      <JsonLd data={guideSchema("misty-resort-near-mussoorie", articleData)} />
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
              description="Everything you need to know before booking your misty mountain getaway near Mussoorie."
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