import HeroBanner from "@/components/banner/HeroBanner";
import Accordion2 from "@/components/accordion/Accordion2";
import { SectionWithContainer } from "@/components/sectionComponants";
import SectionHeading from "@/components/typography/SectionHeading";
import { SectionHeading2 } from "@/components/typography/SectionHeading2";
import { guideMeta, guideSchema } from "../components/guides";
import JsonLd from "@/components/seo/JsonLd";
import RelatedGuides from "@/components/seo/RelatedGuides";

const articleData = {
  slug: "family-resort-near-mussoorie",
  metaData: {
    title: "A Family Resort Near Mussoorie That Works for Everyone, Including the Kids | EBC Mussoorie",
    description:
      "How to choose a family resort near Mussoorie: space, activities, safe terrain and good facilities, and why glamping suits mixed-age family groups.",
  },
  banner: {
    title: "A Family Resort Near Mussoorie That Works for Everyone",
    subTitle: "Including the Kids",
    description:
      "Space, things to do, easy terrain and proper facilities: what families really need from a mountain resort near Mussoorie.",
    image: "/banner/bnr2.png",
  },
  intro: {
    title: "A Family Resort Near Mussoorie That Works for Everyone",
    description: [
      "A family trip to the mountains is simple in theory and tricky in practice. The adults want views and good meals. The children want to run around and do things. Grandparents, if they come, need gentle paths and comfortable beds. And everyone needs a bathroom that works. The right family resort near Mussoorie solves all of this at once. The wrong one solves one or two and creates friction around the rest. This guide is written from a practical, family-travel point of view. It covers what to look for in a family resort near Mussoorie and which activities work for mixed ages. It also explains why a glamping stay can beat a regular hotel for families.",
    ],
  },
  details: {
    title: "What Families Actually Need From a Resort Near Mussoorie",
    subtitle: "A Family Travel Guide",
    description: [
      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">What Do Families Actually Need From a Resort Near Mussoorie?</h2>
       <p>Let us start with the honest list:</p>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>Space:</strong> Children need room to move. A resort where everything happens in a corridor or on a small balcony does not work for kids under 12. Open lawns, paths from your room and shared outdoor areas are a must.</li>
         <li><strong>Nature, but not too remote:</strong> Young children need easy outdoor spaces, not wild terrain. A gentle nature path, a forest edge within five minutes' walk and safe outdoor areas cover most of what they need to feel outdoors.</li>
         <li><strong>The basics, done well:</strong> Clean bathrooms with hot water, reliable power, and a kitchen that can work around children's timings and tastes. Families with young children eat earlier and sleep earlier. They need more give in the day than couples or solo travellers do.</li>
         <li><strong>Activities for every age:</strong> A resort that lists only trekking and bonfires is fine for adults but falls short for families. Look for nature walks of different lengths, outdoor games and a clear shared outdoor space.</li>
         <li><strong>Safe road access:</strong> In a medical emergency, it helps to know that Dehradun, with its hospitals and pharmacies, is 35 km away. That is about 1 to 1.5 hours by road. It matters most to parents with young children or elderly relatives.</li>
       </ul>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">Why Does the Mussoorie Belt Work So Well for Family Travel?</h2>
       <p>Mussoorie and the area around it tick most boxes for a family trip to the mountains. The George Everest Peak zone is about 1.5 hours from Dehradun. EBC sits there at 2,160 m, a height that is not a concern for healthy children. Trails range from gentle ridge walks to more active climbs of two to three hours, so each family can pick its own pace.</p>
       <p><strong>Everest Base Camp Mussoorie</strong>, the luxury glamping resort near George Everest Peak, welcomes families. Its grounds are fully secured and give children room to explore, not just a view from a window. The Twin Luxury Cottages and The Andrew's Villa offer the most space. You can compare the options on <a href="/rooms/" class="text-secondary underline">EBC Mussoorie's rooms page</a>.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">Which Activities Work for Families Near Mussoorie?</h2>
       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">Are Gentle Nature Walks Good for Young Children?</h3>
       <p>Yes. Short, flat or gently sloping walks through forest or along ridge paths suit children from about age five. Part of the George Everest Peak path works as a nature walk on its own, without the full trek. At EBC, a guided walk runs daily from 7 to 9 AM. It takes 45 to 90 minutes and is easy to moderate. Guides point out birds, wildflowers and, now and then, pugmarks in the mud.</p>
       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">Is the George Everest Peak Trek Suitable for Older Children?</h3>
       <p>The full trek to George Everest Peak takes 2 to 3 hours there and back at a relaxed pace. Active children aged ten and up manage it well. Younger ones do better on the lower part of the trail, turning back when the family is ready. The peak is named after Sir George Everest, who led the Great Trigonometrical Survey of India in the 19th century. Tell children this story on the way. It turns a walk in the hills into something they will remember.</p>
       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">Why Are Bonfire Evenings a Family Favourite?</h3>
       <p>A well-laid bonfire wins over children and adults alike. In autumn and winter, cool evenings and a fire make a family memory that needs no skill or planning. At EBC the bonfire is lit every evening, with seating and blankets. There are marshmallows on request, and now and then live Garhwali folk music.</p>
       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">Is a Kempty Falls Day Trip Worth It With Kids?</h3>
       <p>Kempty Falls is a well-known waterfall about 15 kilometres from Mussoorie, and children love it. Go early in the day to beat the crowds. Weekdays are quieter still.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">What Should You Check Before Booking a Family Resort Near Mussoorie?</h2>
       <p>Run through this list for any place you are seriously thinking about:</p>
       <ul class="list-disc pl-6 space-y-1">
         <li>Can the whole family stay in one room, or in rooms next to each other?</li>
         <li>Is there a clear outdoor space where children can play away from any road?</li>
         <li>Are meals served at family-friendly times, such as an early dinner or a quick breakfast?</li>
         <li>Where is the nearest hospital or pharmacy?</li>
         <li>Are the treks graded by difficulty or by age?</li>
         <li>What is the policy on young children sharing a room with parents?</li>
       </ul>
       <p>You can see how Everest Base Camp Mussoorie sets up its rooms for different groups on <a href="/rooms/" class="text-secondary underline">EBC Mussoorie's rooms and tents page</a>. The drive from Delhi is about 280 km, or 5.5 to 6.5 hours by road. Once you know your dates, <a href="/rooms/" class="text-secondary underline">compare the tents, cottages and villa at Everest Base Camp near Mussoorie</a> to find the right fit.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">When Is the Best Time to Visit Mussoorie With Family?</h2>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>April to early June:</strong> School holidays, warm days and open trails. This is the most popular time for families from Delhi NCR, Punjab and Haryana. May and June are busy, so book ahead.</li>
         <li><strong>October to November:</strong> After the rains. Clear skies, open trails and comfortable days, with fewer crowds than in summer.</li>
         <li><strong>December to January:</strong> The winter break. Cold but manageable with the right clothes, and the crisp nights are made for bonfires. A chance of snow thrills children, but check road conditions before you travel.</li>
         <li><strong>July to September:</strong> The monsoon empties the hills and turns the forest deep green. EBC stays open, and its tents and cottages are weather-proofed. Trails get slippery, so keep walks short for little legs. Heavy rain can cause landslides, so check advisories before you drive with the family.</li>
       </ul>`,
    ],
  },
  faqs: [
    {
      question: "Is glamping near Mussoorie suitable for young children?",
      answer:
        "Yes, when the place has enclosed bathrooms, open outdoor space and gentle terrain nearby. At EBC Mussoorie every room, tents included, has an attached bathroom and heating. Check facilities and activities with the resort for your dates.",
    },
    {
      question: "What is the best family-friendly activity near Mussoorie?",
      answer:
        "Gentle nature walks, a visit to Kempty Falls and bonfire evenings suit most ages.",
    },
    {
      question: "How far is Mussoorie from Dehradun for a family with children?",
      answer:
        "About 35 kilometres, or 1 to 1.5 hours by road. Dehradun has hospitals and all the essentials.",
    },
    {
      question: "Are family rooms available at glamping resorts near Mussoorie?",
      answer:
        "Some resorts have them. At EBC, the Twin Luxury Cottages and The Andrew's Villa offer the most family space, and extra beds can be added. Confirm room size and bed setup before you book.",
    },
    {
      question: "Is altitude a concern for families visiting Mussoorie?",
      answer:
        "At EBC's 2,160 metres, altitude is generally not a concern for healthy adults and children. Anyone with a health condition should check with a doctor before travel.",
    },
    {
      question: "What should families pack for a mountain trip to Mussoorie?",
      answer:
        "Warm layers for the evenings, sturdy shoes for walks, sunscreen, any regular medicines, and something to keep younger children busy on the drive.",
    },
  ],
};

export const metadata = guideMeta("family-resort-near-mussoorie", articleData.metaData);

export default function FamilyResortPage() {
  const renderContent = (htmlString: string) => {
    return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
  };

  return (
    <main className="bg-[#0C150D] text-[#F7F5EE]">
      <JsonLd data={guideSchema("family-resort-near-mussoorie", articleData)} />
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
              description="Everything you need to know before booking your family resort stay near Mussoorie."
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
      <RelatedGuides slug="family-resort-near-mussoorie" />
    </main>
  );
}