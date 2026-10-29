import HeroBanner from "@/components/banner/HeroBanner";
import Accordion2 from "@/components/accordion/Accordion2";
import { SectionWithContainer } from "@/components/sectionComponants";
import SectionHeading from "@/components/typography/SectionHeading";
import { SectionHeading2 } from "@/components/typography/SectionHeading2";
import { guideMeta, guideSchema } from "../components/guides";
import JsonLd from "@/components/seo/JsonLd";

const articleData = {
  // ✅ URL is exactly: bonfire-experience-resort-hills-india
  slug: "bonfire-experience-resort-hills-india",
  metaData: {
    title: "Bonfire Experience at a Resort in the Hills of India: What Makes It Worth Planning Around | EBC Mussoorie",
    description:
      "A great hill resort bonfire needs cold air, real forest and a quiet estate. What sets it apart, the best regions in India, and how to pick the right stay.",
  },
  banner: {
    title: "Bonfire Experience at a Resort in the Hills of India",
    subTitle: "What Makes It Worth Planning Around",
    description:
      "A bonfire at a hill resort sounds simple, until you have had a truly good one. Then you see why guests come back and talk about it. The fire, the night air, the forest around it, and an evening outdoors high in the hills.",
    image: "/banner/bnr2.png", // Replace with a bonfire banner if available
  },
  intro: {
    title: "Bonfire Experience at a Resort in the Hills of India",
    description: [
      "A bonfire at a hill resort in India sounds simple, until you have had a truly good one. Then you see why guests at places like EBC Mussoorie bring it up first when they talk about their stay. Not the room. Not the view. The fire, the night air and the forest around it. An evening outdoors, high in the hills, with nothing else pulling at your attention.",
      "This guide covers what makes a hill resort bonfire worth planning a trip around. It looks at which regions and types of stay do it best. And it shows what to look for in a resort where the evening fire is the main event, not an afterthought.",
    ],
  },
  details: {
    title: "The Ultimate Bonfire Guide",
    subtitle: "Plan Your Evening Escape",
    description: [
      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">Why is a bonfire at a hill resort different from a city firepit?</h2>
       <p>The basics are the same. The feeling is not. Here is why:</p>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>The cold gives the fire a purpose:</strong> At 2,000 metres and above in the Mussoorie hills, evenings in October and November drop to 10 to 15 degrees Celsius. Even in May, the nights turn cool. At these temperatures a bonfire is not decor. It is warmth you need. You shuffle closer. The heat reaches your face while the cold stays on your back. A city firepit on a 28-degree evening cannot match that.</li>
         <li><strong>The setting wakes up every sense:</strong> Picture a bonfire in a deodar forest, with the Doon Valley below and tall trees all around. The smoke picks up the scent of deodar resin, and it smells like nowhere else. The crackle of the fire mixes with wind high in the trees and the calls of night birds. In some directions, the fire is the only light for hundreds of metres. Good hill resorts give you exactly this. You cannot recreate it on the plains or in a built-up area.</li>
         <li><strong>People talk differently:</strong> Around a fire at night, far from city timetables, the mood shifts. There is no background noise, no screens and none of the props of a restaurant or bar. Couples, families and work teams all tell us the same thing. Bonfire evenings bring out conversations that do not happen anywhere else.</li>
       </ul>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">How is the bonfire built into the design of EBC Mussoorie?</h2>
       <p>EBC Mussoorie is a luxury glamping resort on a private forest estate in Park Estate, on the western Mussoorie ridge, near Sir George Everest's House. We light a bonfire every evening, and access is included with every room. You can also book a private bonfire set up just for you.</p>
       <p>A few things about the estate make the fire here more than a standard hill resort offering:</p>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>The George Everest heritage:</strong> Nearby stands the restored house of Sir George Everest, Surveyor General of India and the man Mount Everest is named after. He lived on this ridge for about 11 years, using the house as his home, observatory and laboratory. Sitting by a fire next to that history gives the evening a sense of place that a generic bonfire lacks.</li>
         <li><strong>The forest estate:</strong> Our bonfire clearing sits inside a private estate of deodar, pine and rhododendron. The trees around the fire change the light, the sound and the smell of the evening. There is no road-facing seating and very little light pollution on Hathipaon Road. So the sky above the fire stays truly dark.</li>
         <li><strong>A small, private crowd:</strong> We have 14 rooms. They sleep 28 guests without extra beds and up to 50 with them. So the bonfire at EBC Mussoorie is never a public event. Depending on who is staying, it feels private or close to it. Couples and small groups who come in quieter weeks may have the clearing almost to themselves.</li>
         <li><strong>Food and comfort by the fire:</strong> We provide seating and warm blankets. Marshmallows and snacks come on request, and some nights bring live Garhwali folk music. Park Café, on the estate, can turn a fire into a full evening. Its "Barbeque in the Shadows" adds a private bonfire, a candlelit table, butler service and mashal torches. Hot cocoa and kafuli by the fire are hard to beat.</li>
       </ul>
       <p>Browse the <a href="/rooms/" class="text-secondary underline">accommodation options at EBC Mussoorie</a> to choose the right stay for a bonfire trip. The Andrew's Villa even has its own private bonfire area.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">Which hill regions in India are best for a resort bonfire?</h2>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>Uttarakhand: Mussoorie and the Garhwal Hills.</strong> Height, deodar forest and cool air all year make Uttarakhand the strongest region in India for a hill resort bonfire. The smell of deodar resin in cold air beside a fire is one of the lasting memories of a Mussoorie stay. Best seasons: October to November for cold, clear, dry evenings. April to June for cool evenings without the winter bite. December to February for the most dramatic cold-weather fires.</li>
         <li><strong>Himachal Pradesh: Kasauli, the Shimla hinterland, Manali.</strong> Resorts in Himachal above 1,500 metres have much the same height and forest as Uttarakhand. Kasauli and Chail are especially good for bonfire evenings with wide valley views.</li>
         <li><strong>Coorg, Karnataka: coffee estate bonfires.</strong> The forest here feels nothing like the Himalayan foothills. A bonfire on a coffee and pepper estate in Coorg feels tropical, not alpine. It is best in the cooler months, from November to February.</li>
         <li><strong>Rajasthan: desert camp bonfires.</strong> This is the classic Indian setting for a fire under a wide, clear desert sky. You give up the forest. In return, the stars above a desert camp near Jaisalmer more than make up for it.</li>
       </ul>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">What should you look for in a hill resort bonfire?</h2>
       <p>Not every resort with a bonfire gives you an evening worth seeking out. These are the details that matter:</p>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>Private or shared fire:</strong> A bonfire shared by 50 guests at a big resort is a party. A private fire on an estate you nearly have to yourself is something else. The small scale of EBC Mussoorie makes the second far more likely.</li>
         <li><strong>Forest clearing or paved yard:</strong> A fire in a real forest clearing, with earth and grass underfoot and trees all round, is the real thing. A firepit in a paved yard between buildings is just a firepit.</li>
         <li><strong>Seating:</strong> Logs, stone seats or proper outdoor chairs should sit at the right distance. Close enough for warmth, and spread out enough to dodge the smoke. That is the difference between a cosy two-hour evening and an awkward one.</li>
         <li><strong>Food and drink:</strong> Hot drinks, bhuttas (roasted corn), a barbecue or a proper dinner by the fire turn a thirty-minute activity into a three-hour evening. Ask what food and drink you can have at the fire when you book.</li>
         <li><strong>The season:</strong> In the monsoon (July to September), ask how the resort handles rain. The fire usually goes ahead once an evening shower stops. In winter (December to February), make sure the fire is big enough for the cold. In peak summer (May to June), check that the bonfire still runs on warm days.</li>
       </ul>
       <p>For a guest's view of an evening on the estate, <a href="https://tripoto.com/india/trips/did-you-know-that-just-8-hours-from-delhi-there-s-an-everest-base-camp-no-we-re-not-kidding-3aea3a54f8628a1c8" class="text-secondary underline" target="_blank" rel="noopener">this Tripoto account of EBC Mussoorie</a> gives honest detail from the ground.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">How do you plan a stay around the bonfire?</h2>
       <p>If the bonfire is the heart of your visit to EBC Mussoorie, or any hill resort, shape the day so you arrive at the fire at your best:</p>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>Morning:</strong> Get outside and move. Join the guided forest walk from 7 to 9 AM, hike to a viewpoint or go birding on the estate. Exercise in cool mountain air builds an appetite. It makes a lazy evening by the fire feel earned.</li>
         <li><strong>Afternoon:</strong> Rest. Have a long lunch at Park Café, spend a quiet hour in your room, or take a short nature walk. The afternoon is not the main event. Save your energy for the evening.</li>
         <li><strong>Before the bonfire:</strong> Shower, put on warm layers and be there when the fire is lit. The first twenty minutes are the best part. The fire is building and the light is fading from dusk to dark. Do not miss it.</li>
         <li><strong>At the fire:</strong> Stay longer than you plan to. A hill bonfire gets better over the first hour. The fire settles, the air cools and the talk goes deeper. Two to three hours is the natural length of a good bonfire evening.</li>
       </ul>
       <p>As <a href="https://www.hotelierindia.com/operations/experience-tranquil-adventure-in-the-heart-of-mussoorie-with-ebc-mussoorie" class="text-secondary underline" target="_blank" rel="noopener">this Hotelier India feature on EBC Mussoorie</a> describes, our outdoor experience is built around exactly this kind of evening.</p>`,
    ],
  },
  faqs: [
    {
      question: "Which season is best for a bonfire at a hill resort in India?",
      answer:
        "October to November is the best window. It is cold enough for the fire to truly warm you, with clear skies and dry weather. December to February gives the most dramatic cold-weather bonfires, but you will need proper winter clothes.",
    },
    {
      question: "Does EBC Mussoorie include the bonfire in the room rate?",
      answer:
        "Yes. Access to the evening bonfire, a shared fire, is included with every room. A private bonfire just for your group is an add-on. Ask for it when you book.",
    },
    {
      question: "Can a bonfire be arranged for a large corporate group at EBC Mussoorie?",
      answer:
        "Yes. EBC Mussoorie hosts work groups of 8 to 48 guests, with bonfire sessions in the evening. Contact us directly to plan a group bonfire and group dining.",
    },
    {
      question: "Is a bonfire available at EBC Mussoorie in monsoon?",
      answer:
        "We stay open through the monsoon, and every tent and cottage is weather-proofed. The bonfire depends on the evening weather, and it usually goes ahead once the rain stops. For July to September dates, check road advisories before you drive and keep your plans flexible.",
    },
    {
      question: "What should I wear to a bonfire at a Mussoorie hill resort?",
      answer:
        "A warm fleece or down jacket, comfortable outdoor trousers and closed shoes. At 2,160 metres, even summer evenings cool down fast after 7 PM. Bring one more layer than you think you need.",
    },
    {
      question: "How far is EBC Mussoorie from Delhi for a bonfire weekend trip?",
      answer:
        "About 280 km, or 5.5 to 6.5 hours by road, via NH58 through Roorkee or NH334 through Haridwar. Leave on Friday, arrive that evening, and you have all of Saturday for the day and the fire. Let us know if you will arrive late.",
    },
  ],
};

export const metadata = guideMeta("bonfire-experience-resort-hills-india", articleData.metaData);

export default function BonfireExperiencePage() {
  const renderContent = (htmlString: string) => {
    return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
  };

  return (
    <main className="bg-[#0C150D] text-[#F7F5EE]">
      <JsonLd data={guideSchema("bonfire-experience-resort-hills-india", articleData)} />
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
              description="Everything you need to know before planning your bonfire experience at a hill resort."
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