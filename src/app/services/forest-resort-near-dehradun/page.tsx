import HeroBanner from "@/components/banner/HeroBanner";
import Accordion2 from "@/components/accordion/Accordion2";
import { SectionWithContainer } from "@/components/sectionComponants";
import SectionHeading from "@/components/typography/SectionHeading";
import { SectionHeading2 } from "@/components/typography/SectionHeading2";
import { guideMeta, guideSchema } from "../components/guides";
import JsonLd from "@/components/seo/JsonLd";

const articleData = {
  slug: "forest-resort-near-dehradun",
  metaData: {
    title: "Inside the Forest: What Staying at a Forest Resort Near Dehradun Feels Like | EBC Mussoorie",
    description:
      "What a forest resort near Dehradun feels like: the three forest zones around the city, what a good stay offers, and what to expect in the deodar belt.",
  },
  banner: {
    title: "Inside the Forest",
    subTitle: "What Staying at a Forest Resort Near Dehradun Feels Like",
    description:
      "Light, cool air, sound and scent: what it really means to stay inside a living forest near Dehradun.",
    image: "/banner/bnr2.png",
  },
  intro: {
    title: "Inside the Forest",
    description: [
      "You notice it within the first hour. The light changes when you are inside a living forest. It falls at angles and in amounts that open ground never gives. The temperature is different. The layer of sound is different. The air carries something hard to name, but you sense it at once: no smog and no synthetic scent. Staying at a forest resort near Dehradun is not mainly about trees outside your window. It is about being inside a living ecosystem long enough for your body to tune itself to it. This guide covers the forests of the Dehradun region and which forest settings lie within reach of the city. It also covers what a good forest resort stay here gives you in practice.",
    ],
  },
  details: {
    title: "The Forests Near Dehradun: What Is Actually Out There",
    subtitle: "A Sensory Guide",
    description: [
      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">The Forests Near Dehradun: What Is Actually Out There?</h2>
       <p>Three distinct forest zones ring the Dehradun valley. Each has its own character, its own wildlife and its own feel for visitors.</p>
       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">What Are the Shivalik Sal Forests (Lower Elevation) Like?</h3>
       <p>The Shivalik foothills to the south and south-east of Dehradun are covered in sal (Shorea robusta), a tropical moist forest. These woods form the buffer zones of Rajaji National Park, which begins about 15 kilometres east of Dehradun. Sal forests have a look of their own. The trees are tall and straight, with a high canopy and a fairly open floor. Light falls in shafts. Dry leaves cover the ground and crunch softly underfoot.</p>
       <p>Wildlife in the Rajaji buffer zone includes elephant, leopard, sambar and spotted deer. Birdlife is rich too, with several kinds of hornbill. You need a permit to enter the deep forest, which the Uttarakhand Forest Department manages.</p>
       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">Where Do the Mussoorie Oak and Rhododendron Forests (Mid‑Elevation) Grow?</h3>
       <p>Between 1,500 and 2,100 metres, the forest changes entirely. Banj oak rules many of the slopes around Mussoorie. These forests have a denser understorey and hold more moisture. They support a very different set of birds from the Shivalik zone below. Many forest stays near Dehradun sit in or near this zone. The oak gives steady shade and cool air. The seasons show clearly here. Rhododendron bursts into red in March. The woods stay dense and green through the monsoon, and the light turns soft and golden by November.</p>
       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">Where Do Deodar and Blue Pine Forests (Upper Elevation) Take Over?</h3>
       <p>Higher up, deodar cedar (Cedrus deodara) and blue pine (Pinus wallichiana) take over. EBC Mussoorie sits in this belt at 2,160 m, in deodar, pine and rhododendron forest on Hathipaon Road. These trees also cover the slopes around Dhanaulti, about 24 kilometres beyond Mussoorie. The forest here smells and sounds different from the oak zone below. The resin scent of pine and cedar is easy to pick out. Deodar is one of the most important trees in the Garhwal Himalaya. People have long used it to build temples. It also anchors the forest and helps protect water sources.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">What Does a Quality Forest Resort Near Dehradun Provide?</h2>
       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">Is It Positioned Within the Forest, Not Beside It?</h3>
       <p>Some resorts use the words "forest resort" but sit on a cleared hillside with a row of planted trees. That is not a forest resort. Your room should sit inside a living forest, or right at its true edge. Look for canopy overhead, or within a 2-minute walk.</p>
       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">Does It Keep Light Pollution Low at Night?</h3>
       <p>One of the most overlooked parts of a real forest stay is what happens after dark. A place that limits artificial light protects the night life of the forest near your room. It also keeps the stargazing sharp. Ask about lighting before you book. EBC sits on Hathipaon Road, where light pollution is minimal, and the Milky Way shows on clear nights.</p>
       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">Does It Give You Walking Trails Through Working Forest?</h3>
       <p>You have to walk inside a forest to feel it. Watching it from a terrace is not the same. Stays in the Mussoorie belt, especially near George Everest Peak, offer trails that pass through living forest.</p>
       <p><strong>Everest Base Camp Mussoorie</strong> sits in the George Everest Peak forest zone, and this kind of access is central to the stay. A guided walk runs every morning from 7 to 9 AM on deodar forest and ridge trail routes, and it is included. Read more on <a href="/activities/" class="text-secondary underline">EBC Mussoorie's activities page</a>.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">What Does a Forest Resort Stay Near Dehradun Feel Like, Hour by Hour?</h2>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>Morning:</strong> Before 7:00 AM, birdlife in the forest around Mussoorie is at its peak. The forest builds a layered wall of sound that most people have only heard in documentaries. Sit quietly at the edge of the trees for half an hour before your walk. It is rare, and hard to find anywhere else. Over 50 bird species have been recorded at EBC and in the forest around it.</li>
         <li><strong>Midday:</strong> The canopy gives shade that keeps midday comfortable, even in May, when the plains below are past 40 degrees. This is the best time for slow walks and looking closely at plants.</li>
         <li><strong>Afternoon:</strong> Late afternoon light here has a quality of its own, shaped by this height and latitude. Sun slanting through the canopy makes patterns that photographers love.</li>
         <li><strong>Evening:</strong> As the air cools, the forest wakes up again. Insects take over from the morning birds with a new layer of sound. The cool air carries the smell of leaf litter and soil more clearly than at midday. At EBC, the day ends at the bonfire.</li>
       </ul>
       <p>See what a stay at a forest glamping resort looks like in detail on <a href="/rooms/" class="text-secondary underline">EBC Mussoorie's accommodation page</a>.</p>`,
    ],
  },
  faqs: [
    {
      question: "What type of forest is near Dehradun for a forest resort stay?",
      answer:
        "Three distinct zones. Sal forest grows in the Shivalik foothills. Oak and rhododendron forest covers Mussoorie's middle slopes (1,500 to 2,100 metres). Deodar and pine forest covers the higher ridges, from EBC's 2,160 metres on Hathipaon Road out to Dhanaulti.",
    },
    {
      question: "Are forest resorts near Dehradun open year‑round?",
      answer:
        "Most are. EBC Mussoorie is open all year, including the monsoon (July to September), its quietest and most atmospheric season. Trails get slippery and heavy rain can close roads, so check advisories before you drive and keep plans flexible. The forest is at its most alive in these months.",
    },
    {
      question: "What wildlife might I see near a forest resort near Dehradun?",
      answer:
        "Leopard, deer and many birds in the Shivalik zone. Around Mussoorie, birdlife is rich, with pheasants such as the Kalij, flycatchers such as the Verditer, and laughingthrushes.",
    },
    {
      question: "Are forest resort stays suitable for children?",
      answer:
        "Yes. The forest is engaging and full of lessons for children. Check that the trail terrain suits their age. EBC's guided walk is easy to moderate and lasts 45 to 90 minutes.",
    },
    {
      question: "How close are forest resorts near Dehradun to the city?",
      answer:
        "The nearest forest stays are 35 to 50 kilometres from central Dehradun, about 1 to 1.5 hours by road. EBC Mussoorie is 35 km from the city.",
    },
    {
      question: "Is a guided nature walk part of the forest resort experience?",
      answer:
        "At well-run places, yes. Ask whether guided forest walks are offered and how much the guides explain. At EBC, naturalist guides lead a walk every morning from 7 to 9 AM. They point out birds, wildflowers, medicinal plants and sometimes pugmarks. It is included with every stay.",
    },
  ],
};

export const metadata = guideMeta("forest-resort-near-dehradun", articleData.metaData);

export default function ForestResortPage() {
  const renderContent = (htmlString: string) => {
    return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
  };

  return (
    <main className="bg-[#0C150D] text-[#F7F5EE]">
      <JsonLd data={guideSchema("forest-resort-near-dehradun", articleData)} />
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
              description="Everything you need to know before booking a forest resort stay near Dehradun."
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