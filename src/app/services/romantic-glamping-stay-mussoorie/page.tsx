import HeroBanner from "@/components/banner/HeroBanner";
import Accordion2 from "@/components/accordion/Accordion2";
import { SectionWithContainer } from "@/components/sectionComponants";
import SectionHeading from "@/components/typography/SectionHeading";
import { SectionHeading2 } from "@/components/typography/SectionHeading2";
import { guideMeta, guideSchema } from "../components/guides";
import JsonLd from "@/components/seo/JsonLd";
import RelatedGuides from "@/components/seo/RelatedGuides";

const articleData = {
  // ✅ URL is exactly: romantic-glamping-stay-mussoorie
  slug: "romantic-glamping-stay-mussoorie",
  metaData: {
    title: "Romantic Glamping Stay in Mussoorie: What the Format Delivers That a Hotel Cannot | EBC Mussoorie",
    description:
      "A romantic glamping stay in Mussoorie wins on the evening fire, the morning forest walk and a veranda or deck. Here is how to pick the right room at EBC.",
  },
  banner: {
    title: "Romantic Glamping Stay in Mussoorie",
    subTitle: "What the Format Delivers That a Hotel Cannot",
    description:
      "Ask a couple what made a stay special, and they rarely name the room. They name the evening. They name the morning walk. They name the moment on the deck when the cloud lifted.",
    image: "/banner/bnr2.png", // Replace with a romantic glamping banner if available
  },
  intro: {
    title: "Romantic Glamping Stay in Mussoorie",
    description: [
      "Ask a couple what made a stay special, and they rarely name the room. They name the evening fire. They name the morning walk. They name the moment on the deck when the cloud lifted. That is why glamping, done well, has become one of the most romantic ways to stay in Mussoorie. It is built around the very things couples remember.",
      "This guide covers what luxury glamping means here, the four things that make it romantic, and how to pick the right room at EBC Mussoorie for your stay.",
    ],
  },
  details: {
    title: "The Romantic Glamping Guide",
    subtitle: "Find Your Perfect Stay",
    description: [
      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">What Does Luxury Glamping Mean in Mussoorie?</h2>
       <p>The word gets stretched. At the top end in Mussoorie, luxury glamping means a few clear things:</p>
       <ul class="list-disc pl-6 space-y-1">
         <li>A solid, well-built room set in the forest, not in a block of rooms</li>
         <li>Full hotel service, with no cooking or cleaning for you to do</li>
         <li>Good beds, attached bathrooms, heating and Wi-Fi</li>
         <li>A deck, veranda or terrace that belongs to your room</li>
         <li>Time outdoors built into the stay, not sold as an extra</li>
       </ul>
       <p>EBC Mussoorie fits that meaning. It has 14 rooms in seven categories, set in deodar, pine and rhododendron forest on Hathipaon Road. The estate sits at 2,160 m. Sir George Everest's old house is a short walk away.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">What Makes Glamping Romantic?</h2>
       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">Is the outdoor space really yours?</h3>
       <p>A hotel balcony looks across at another hotel balcony. A deck at EBC Mussoorie looks into the forest. That is more than a pretty view. It decides whether you spend the evening outside or go back in.</p>
       <p>The Glamper is the classic couple's tent here. It is a luxury canvas tent with a double bed, an attached bathroom, heating and a private deck. The Zenith Luxury Cottage goes one step further. It stands alone in the deodar forest, with an east-facing veranda for sunrise.</p>

       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">What gives the evening its centre?</h3>
       <p>Every romantic stay needs an anchor for the evening. In a city hotel, it is a restaurant. In a forest, it is a fire. Bonfire access is included every evening, with seating and warm blankets. You can also ask for a private bonfire set up just for your room.</p>
       <p>Add the "Barbeque in the Shadows" evening at Park Café, or a candlelit dinner at your cottage. The dinner needs 24 hours' notice. With either one, the night has real shape, and you never need to leave the grounds.</p>

       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">Can you step straight into the morning?</h3>
       <p>The best hours of a Mussoorie day come early. If a forest walk needs a car, most guests skip it. Here, the guided nature walk starts from the estate and runs daily from 7 to 9 AM. It is included with every stay and takes 45 to 90 minutes on deodar forest and ridge trails.</p>
       <p>Sir George Everest's house nearby gives the walk a story. He was Surveyor General of India from 1830 to 1843. In 1856, Andrew Waugh proposed naming Peak XV after him. Today we call it Mount Everest.</p>

       <h3 class="text-xl font-semibold mt-6 mb-2 text-secondary">How does the small scale keep it private?</h3>
       <p>Fourteen rooms. At most 28 guests without extra beds, and up to 50 with them. That is the whole estate. You are not sharing a lobby with two hundred people or queuing at a crowded buffet. Breakfast for two comes with every room.</p>
       <p>See the <a href="/rooms/" class="text-secondary underline">full range of rooms at EBC Mussoorie</a> to compare categories.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">Which Room Should a Couple Choose?</h2>
       <div class="overflow-x-auto">
         <table class="min-w-full border border-secondary/20 text-sm">
           <thead>
             <tr class="bg-secondary/10">
               <th class="border border-secondary/20 px-4 py-2 text-left font-semibold text-secondary">Category</th>
               <th class="border border-secondary/20 px-4 py-2 text-left font-semibold text-secondary">Why It Works for Couples</th>
               <th class="border border-secondary/20 px-4 py-2 text-left font-semibold text-secondary">Your Outdoor Space</th>
             </tr>
           </thead>
           <tbody>
             <tr>
               <td class="border border-secondary/20 px-4 py-2 font-medium">The Glamper</td>
               <td class="border border-secondary/20 px-4 py-2">The classic romantic tent. Canvas walls, a double bed, an attached bathroom and heating.</td>
               <td class="border border-secondary/20 px-4 py-2">Private deck</td>
             </tr>
             <tr>
               <td class="border border-secondary/20 px-4 py-2 font-medium">Zenith Luxury Cottage</td>
               <td class="border border-secondary/20 px-4 py-2">The cottage that put EBC on the map. It stands alone in the deodar forest, with a king bed. The pick for the most privacy.</td>
               <td class="border border-secondary/20 px-4 py-2">East-facing veranda</td>
             </tr>
             <tr>
               <td class="border border-secondary/20 px-4 py-2 font-medium">The Camper</td>
               <td class="border border-secondary/20 px-4 py-2">A compact forest unit with a double bed. Good for couples who plan to spend their days outside, not in the room.</td>
               <td class="border border-secondary/20 px-4 py-2">Forest setting</td>
             </tr>
             <tr>
               <td class="border border-secondary/20 px-4 py-2 font-medium">The Surveyor</td>
               <td class="border border-secondary/20 px-4 py-2">The most living space at EBC, with a king bed. It suits a longer stay or a work week in the hills.</td>
               <td class="border border-secondary/20 px-4 py-2">Large private sit-out</td>
             </tr>
             <tr>
               <td class="border border-secondary/20 px-4 py-2 font-medium">The Surveyor Suite</td>
               <td class="border border-secondary/20 px-4 py-2">A premium glamping tent set high in the forest canopy, with a queen or king bed. For couples who want to feel deep in the trees.</td>
               <td class="border border-secondary/20 px-4 py-2">Private deck</td>
             </tr>
             <tr>
               <td class="border border-secondary/20 px-4 py-2 font-medium">Twin Luxury Cottages</td>
               <td class="border border-secondary/20 px-4 py-2">Two linked cottages, each with a king bedroom and its own bathroom. Good for two couples who travel together but want their own space.</td>
               <td class="border border-secondary/20 px-4 py-2">Shared garden terrace</td>
             </tr>
             <tr>
               <td class="border border-secondary/20 px-4 py-2 font-medium">The Andrew's Villa</td>
               <td class="border border-secondary/20 px-4 py-2">The flagship private villa, with its own entrance and wide Himalayan views. It is the room most often asked for on honeymoons.</td>
               <td class="border border-secondary/20 px-4 py-2">Private terrace and bonfire area</td>
             </tr>
           </tbody>
         </table>
       </div>
       <p class="mt-4">In all, the estate has 14 rooms. They sleep 28 guests without extra beds and up to 50 with them.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">When Is the Best Season for a Romantic Glamping Stay?</h2>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>October to November:</strong> The strongest window. The air is crisp and the valley views are the clearest of the year. Clear nights bring fine stargazing near the George Everest ridge, and the bonfire evenings feel just right.</li>
         <li><strong>April to June:</strong> Warm days and cool evenings, with the most time outdoors. May and June are busy, so book early.</li>
         <li><strong>December to February:</strong> Cold, quiet and full of character. Snow on the ridge is possible. Every room has heating, and the fire matters more than ever.</li>
         <li><strong>July to September:</strong> The monsoon is our quietest and most atmospheric season. The forest turns deep green and mist drifts through the trees. Rooms are weather-proofed for the rain. Hill roads can close after heavy rain, so check advisories before you drive and keep your plans loose.</li>
       </ul>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">What Should You Confirm Before You Book?</h2>
       <ul class="list-disc pl-6 space-y-1">
         <li>Which exact room you will get, not just the category</li>
         <li>Whether you want a private bonfire on top of the shared evening fire</li>
         <li>A candlelit dinner at your cottage, if you want one, booked at least 24 hours ahead</li>
         <li>The rose-petal welcome, which is free for honeymooners on request</li>
         <li>The cancellation and date-change terms for your booking</li>
         <li>Your pet's details, since pets are welcome if you tell the resort in advance</li>
       </ul>
       <p>For an outside overview of the rooms, activities and routes, <a href="https://tripoto.com/india/trips/did-you-know-that-just-8-hours-from-delhi-there-s-an-everest-base-camp-no-we-re-not-kidding-3aea3a54f8628a1c8" class="text-secondary underline" target="_blank" rel="noopener">Tripoto's guide to EBC Mussoorie</a> is a useful read.</p>`,
    ],
  },
  faqs: [
    {
      question: "Is glamping comfortable enough for a honeymoon?",
      answer:
        "At the top end, yes. Rooms at EBC Mussoorie have proper beds, attached bathrooms, heating and free Wi-Fi. Most categories have a king bed. Andrew's Villa is the room most asked for on honeymoons, and the rose-petal welcome is free on request.",
    },
    {
      question: "Which unit is most romantic at EBC Mussoorie?",
      answer:
        "The Glamper gives you the classic tent under the trees. The Zenith Luxury Cottage gives you a cottage of your own and the most privacy. For a honeymoon, Andrew's Villa is the most requested room.",
    },
    {
      question: "Is there WiFi?",
      answer:
        "Yes. Wi-Fi is free across the whole property. It is good for browsing and video calls, though signal can vary in the mountains.",
    },
    {
      question: "What is the location exactly?",
      answer:
        "Park Estate, on Hathipaon Road, close to Sir George Everest's house on the western side of Mussoorie. The estate sits at 2,160 m, well away from the Mall Road crowds. Dehradun is 35 km away.",
    },
    {
      question: "Can we book the whole property for a celebration?",
      answer:
        "Yes, the whole estate can be booked. Message EBC Mussoorie on WhatsApp to talk through dates, numbers and plans.",
    },
    {
      question: "How private is the property?",
      answer:
        "Very. There are fourteen rooms in a private forest estate, with at most 28 guests without extra beds. Most rooms have their own deck, veranda or terrace, and the Zenith cottage stands entirely on its own. You are not sharing a big lobby with hundreds of people. In a hill-town hotel, your quiet depends on your neighbours. Here, the small scale does much of the work.",
    },
  ],
};

export const metadata = guideMeta("romantic-glamping-stay-mussoorie", articleData.metaData);

export default function RomanticGlampingStayPage() {
  const renderContent = (htmlString: string) => {
    return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
  };

  return (
    <main className="bg-[#0C150D] text-[#F7F5EE]">
      <JsonLd data={guideSchema("romantic-glamping-stay-mussoorie", articleData)} />
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
              description="Everything you need to know before booking your romantic glamping stay in Mussoorie."
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
      <RelatedGuides slug="romantic-glamping-stay-mussoorie" />
    </main>
  );
}