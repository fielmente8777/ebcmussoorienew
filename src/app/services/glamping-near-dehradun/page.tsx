import HeroBanner from "@/components/banner/HeroBanner";
import Accordion2 from "@/components/accordion/Accordion2";
import { SectionWithContainer } from "@/components/sectionComponants";
import SectionHeading from "@/components/typography/SectionHeading";
import { SectionHeading2 } from "@/components/typography/SectionHeading2";
import { guideMeta, guideSchema } from "../components/guides";
import JsonLd from "@/components/seo/JsonLd";
import RelatedGuides from "@/components/seo/RelatedGuides";

const articleData = {
  slug: "glamping-near-dehradun",
  metaData: {
    title: "Glamping Near Dehradun: The Mountain Escape You Can Reach Before Lunch | EBC Mussoorie",
    description:
      "Glamping near Dehradun: distances, the best ridges to stay on, season tips, and why the Mussoorie ridge is the easiest mountain escape from the city.",
  },
  banner: {
    title: "Glamping Near Dehradun",
    subTitle: "The Mountain Escape You Can Reach Before Lunch",
    description:
      "The most accessible glamping corridor in north India runs from Dehradun up to the Mussoorie ridge. Reach the hills in under 90 minutes and wake up in a different climate.",
    image: "/banner/bnr2.png",
  },
  intro: {
    title: "Glamping Near Dehradun: A Practical Guide",
    description: [
      "Dehradun is not just a place to pass through. For most travellers arriving by train or plane from Delhi, Mumbai or Chandigarh, it is the last big city before the mountains begin. Fewer people realise that the land between Dehradun and Mussoorie is one of the easiest glamping corridors to reach in north India. The best of it lies along the forested ridge that runs towards George Everest Peak. If you are searching for glamping near Dehradun, you are in the right area. This guide covers what the area offers, how far each option is from the city and what the landscape is like. It also explains why the region keeps drawing travellers from across India for short mountain breaks.",
    ],
  },
  details: {
    title: "Why Dehradun Is the Gateway to the Best Mountain Glamping",
    subtitle: "Gateway Guide",
    description: [
      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">Why Is Dehradun the Gateway to the Best Mountain Glamping in the Region?</h2>
       <p>Dehradun sits at about 640 metres above sea level in the Doon Valley. Within 35 to 50 kilometres of the city, the road climbs steeply into Mussoorie country, to around 2,000 metres. EBC Mussoorie sits at 2,160 m. This sharp rise over a short distance is what makes the Dehradun to Mussoorie belt so distinctive for glamping.</p>
       <p><strong>Three things make this zone work for glamping:</strong></p>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>Easy access from Jolly Grant Airport:</strong> Dehradun's airport has daily flights from Delhi, Mumbai and Bangalore. For travellers from outside Delhi, that is a big advantage over hill stations that take several legs to reach. The airport is about 55 km from EBC, or 1.5 hours by road.</li>
         <li><strong>Railway links:</strong> Dehradun Railway Station sits on a major line, with trains to Delhi, Howrah and Mumbai. The Shatabdi Express from Delhi takes 5.5 hours. The drive on to Mussoorie takes under an hour and a half.</li>
         <li><strong>Road quality:</strong> The Dehradun to Mussoorie road is well kept for most of the year. The climb is comfortable even in a small car.</li>
       </ul>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">What Does the Glamping Landscape Look Like Near Dehradun?</h2>
       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">Why Is the Mussoorie Ridge Zone the First Choice?</h3>
       <p>This is the main glamping zone within reach of Dehradun. Stays here sit between 1,800 and 2,200 metres, among oak, deodar, pine and rhododendron forest. Depending on which way they face, the views open across the Doon Valley or towards the Himalayan snowline.</p>
       <p><strong>Everest Base Camp Mussoorie</strong> is in this zone, close to George Everest Peak, in deodar, pine and rhododendron forest. It has 14 rooms in seven categories, from canvas tents to cottages and a private villa. Guided forest walks, nightly bonfires and access to nearby trails are part of the stay. You can compare tent and cottage options on <a href="/rooms/" class="text-secondary underline">EBC Mussoorie's accommodation page</a>.</p>
       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">Is the Dhanaulti Zone Worth the Extra Drive?</h3>
       <p>Dhanaulti sits about 24 kilometres beyond Mussoorie, at around 2,286 metres. It is quieter than Mussoorie, with eco parks and dense deodar forest, partly looked after by the Uttarakhand Forest Department. Several seasonal camps run here between September and June.</p>
       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">Who Is the Chakrata Zone Best For?</h3>
       <p>Chakrata is about 90 kilometres from Dehradun, at roughly 2,118 metres. It sees far fewer visitors than Mussoorie and feels off the beaten path. Facilities are limited, so it suits seasoned travellers more than first-timers.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">How Far Are These Glamping Options from Dehradun?</h2>
       <p>Clear travel distances matter when you plan a short trip.</p>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>Mussoorie Ridge (George Everest Peak area):</strong> 35 to 50 kilometres from Dehradun. About 1 to 1.5 hours by road. EBC is 35 km from the city.</li>
         <li><strong>Dhanaulti:</strong> 65 to 70 kilometres from Dehradun. About 1.5 to 2 hours.</li>
         <li><strong>Chakrata:</strong> about 90 kilometres from Dehradun. About 2.5 to 3 hours.</li>
       </ul>
       <p>With one night, the Mussoorie zone is the only realistic choice. With two nights or more, Dhanaulti adds variety without much more time in the car.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">What Should You Expect from a Glamping Stay Near Dehradun?</h2>
       <p>A well-run glamping stay in this zone gives you:</p>
       <ul class="list-disc pl-6 space-y-1">
         <li>Furnished luxury tents with proper beds, warm bedding and power</li>
         <li>Hot water, either in an attached bathroom or in a separate washroom block. Every room at EBC has its own bathroom.</li>
         <li>A bonfire when the weather and season allow. At EBC it is lit every evening.</li>
         <li>Guided or self-guided access to nearby trails</li>
         <li>Meals, either included or served on site. EBC includes breakfast for two with every room.</li>
       </ul>
       <p>A stay near Dehradun is shaped by the climb. You wake up in a different climate from the city below. The air is cooler, the sounds are softer, and the morning light looks different up high. This piece on <a href="https://www.hotelierindia.com/operations/experience-tranquil-adventure-in-the-heart-of-mussoorie-with-ebc-mussoorie" class="text-secondary underline" target="_blank" rel="noopener">adventure in the heart of Mussoorie with EBC Mussoorie</a> makes the same point. Being close to Dehradun, with a setting this good, makes the zone ideal for short stays.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">When Is the Best Season for Glamping Near Dehradun?</h2>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>March to May:</strong> Comfortable temperatures, clear skies and open trails. The best window for a first glamping trip.</li>
         <li><strong>June:</strong> Heat builds in the valley before the monsoon, but the ridge stays cooler. Early June is fine. May and June are busy, so book ahead.</li>
         <li><strong>July to September:</strong> Monsoon. Mist settles in the forest, and every tent and cottage at EBC is weather-proofed. From Dehradun it is a short climb, but trails get slippery and landslides can hit the hill road. Check advisories before you drive and plan an unhurried stay.</li>
         <li><strong>October to November:</strong> Excellent conditions. Clear air after the rains, open trails and fewer crowds than the summer peak. Stargazing is at its best.</li>
         <li><strong>December to February:</strong> Cold, especially at night, with crisp evenings made for bonfires. Some places stay open all year, so check heating before you book. Every room at EBC has heating.</li>
       </ul>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">Who Should Choose Glamping Near Dehradun?</h2>
       <p>This zone works especially well for:</p>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>Couples and honeymooners</strong> who want a private, scenic setting a short flight from major cities</li>
         <li><strong>Corporate groups</strong> from Dehradun or elsewhere in Uttarakhand looking for a one-night offsite. EBC hosts groups of 8 to 48 guests.</li>
         <li><strong>Families with older children</strong> who want trekking without a full day of driving</li>
         <li><strong>Solo travellers and digital nomads</strong> who want a quiet workation base. EBC has free Wi-Fi throughout, good for video calls, though mountain signal can vary.</li>
       </ul>
       <p>It is especially useful if you arrive by air or rail and want less time on the road and more time in the mountains.</p>`,
    ],
  },
  faqs: [
    {
      question: "How far is glamping from Dehradun city centre?",
      answer:
        "The nearest glamping stays near Mussoorie are 35 to 50 kilometres from Dehradun, roughly a 1 to 1.5-hour drive. EBC Mussoorie is 35 km away.",
    },
    {
      question: "Can I reach glamping near Dehradun without a private vehicle?",
      answer:
        "Yes. Shared taxis and hired cabs are easy to find at Dehradun Railway Station and Jolly Grant Airport. EBC can also arrange a transfer if you ask when you book.",
    },
    {
      question: "Is glamping near Dehradun suitable in winter?",
      answer:
        "Yes, at places built for the cold. Check heating and bathroom setups before you book. At EBC, every tent and cottage has heating and an attached bathroom.",
    },
    {
      question: "What activities are available at glamping sites near Dehradun?",
      answer:
        "Trekking, nature walks, bonfires and stargazing are common. What is on depends on the season and the place.",
    },
    {
      question: "Is pet-friendly glamping available near Dehradun?",
      answer:
        "Some places accept pets, with conditions. EBC Mussoorie welcomes pets if you tell the resort in advance.",
    },
    {
      question: "What is the best time to book glamping near Dehradun?",
      answer:
        "For peak season visits from April to June and in October, book four to six weeks ahead.",
    },
  ],
};

export const metadata = guideMeta("glamping-near-dehradun", articleData.metaData);

export default function GlampingNearDehradunPage() {
  const renderContent = (htmlString: string) => {
    return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
  };

  return (
    <main className="bg-[#0C150D] text-[#F7F5EE]">
      <JsonLd data={guideSchema("glamping-near-dehradun", articleData)} />
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
              description="Everything you need to know before booking your glamping stay near Dehradun."
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
      <RelatedGuides slug="glamping-near-dehradun" />
    </main>
  );
}