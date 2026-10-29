import HeroBanner from "@/components/banner/HeroBanner";
import Accordion2 from "@/components/accordion/Accordion2";
import { SectionWithContainer } from "@/components/sectionComponants";
import SectionHeading from "@/components/typography/SectionHeading";
import { SectionHeading2 } from "@/components/typography/SectionHeading2";
import { guideMeta, guideSchema } from "../components/guides";
import JsonLd from "@/components/seo/JsonLd";

const articleData = {
  slug: "corporate-offsite-mussoorie",
  metaData: {
    title: "Corporate Offsite in Mussoorie: A Practical Planner's Guide to Getting It Right | EBC Mussoorie",
    description:
      "Plan a corporate offsite in Mussoorie: how to choose a property, build a two-night agenda, estimate costs and avoid the mistakes planners make most.",
  },
  banner: {
    title: "Corporate Offsite in Mussoorie",
    subTitle: "A Practical Planner's Guide to Getting It Right",
    description:
      "Group logistics, spend sign-offs, Wi-Fi and team dynamics. A guide written for the person who is really doing the planning.",
    image: "/banner/bnr2.png",
  },
  intro: {
    title: "Corporate Offsite in Mussoorie",
    description: [
      "Planning a corporate offsite is one of the more thankless jobs in a company. You juggle group logistics, food needs, spend sign-offs, Wi-Fi hopes, team moods and what the leaders want. You do it all at once, often on top of your real job. This guide is for the person doing that planning. It covers the Mussoorie area and why it works for an offsite. It lists what to ask a property before you commit. And it shows how to build a two-night plan that gets something done, rather than one that just fills time.",
      "Let us start with the practical case, not the scenic one. Mussoorie is about 280 km from Delhi by road. The drive takes 5.5 to 6.5 hours, on NH58 via Roorkee or NH334 via Haridwar. Jolly Grant Airport near Dehradun has direct flights from Delhi, Mumbai and Bangalore. That matters for teams spread across cities. From the airport, EBC is about 55 km, or 1.5 hours by road. Once you are in the hills, Mussoorie offers something most Indian offsite spots do not. You get a true break from city routines, with enough set-up to run a working event. Choose well and one property can give you a meeting space, steady food, good rooms and a 2-hour forest trek. That mix is rarer than all the 'corporate retreat' labels on resort websites suggest.",
    ],
  },
  details: {
    title: "Choosing the Right Property for a Mussoorie Corporate Offsite",
    subtitle: "A Planner's Guide",
    description: [
      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">Conference Hotel or Experience Property: Which Suits Your Team?</h2>
       <p>Mussoorie has two clear types of property for corporate offsites.</p>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>Conference-style properties</strong> sit in or near the town. They offer hotel-standard meeting rooms, banquet halls and steady, predictable service. They work well for large groups of 50 plus, where meeting logistics drive the agenda.</li>
         <li><strong>Experience-style properties</strong> sit outside the main town. Most are boutique nature resorts or glamping properties. Groups are smaller, meetings can move outdoors, and activities are built into the stay. They work best for leadership retreats, strategy offsites and team-building, where the quality of the talk matters more than the size of the event.</li>
       </ul>
       <p><a href="/" class="text-secondary underline">EBC Mussoorie</a> sits in the second group. It has 14 rooms in seven categories, set above the Mussoorie valley, with the activities and the stay on one estate. It takes corporate groups of 8 to 48 guests. Book the full property and no other guests are on site. It suits teams that want real engagement rather than a set-piece conference. See the <a href="/rooms/" class="text-secondary underline">rooms and retreat setup at EBC</a> to picture the space before you ask for a group proposal.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">How Should You Build a Mussoorie Corporate Offsite Agenda?</h2>
       <p>A two-night offsite in Mussoorie works best when each half-day block has one clear purpose.</p>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>Block 1 (Day 1, afternoon and evening): Arrival and social reset.</strong> No formal sessions. Walk the property, take an optional short nature trail, and share a group dinner. The aim is to get people out of travel mode and into offsite mode before any work starts.</li>
         <li><strong>Block 2 (Day 2, morning): Core strategy or team session.</strong> Put your most important content here, since focus is strongest in the morning. Outdoor meetings work well in Mussoorie before and after the monsoon. At EBC, the guided forest walk from 7 to 9 AM makes a calm reset before the session.</li>
         <li><strong>Block 3 (Day 2, afternoon): Team activity.</strong> Make it physical or hands-on. Think of a trek, a birdwatching contest, a photo walk or an outdoor problem-solving task. Pick based on your team's fitness and your goal. Do you want bonding, a personal stretch or a shared output?</li>
         <li><strong>Block 4 (Day 2, evening): Informal review and social.</strong> Plan a campfire dinner, team reflections and loose time. This is often where the most useful offsite talks happen.</li>
         <li><strong>Block 5 (Day 3, morning): Wrap-up and commitments.</strong> What are we taking back? Keep it to two or three hours at most. Write down the actions, the owners and the dates. Leave by noon.</li>
       </ul>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">What Should You Ask a Mussoorie Property Before Signing a Group Booking?</h2>
       <p>These questions will save you trouble later.</p>
       <ul class="list-disc pl-6 space-y-1">
         <li>What is the most guests the property can host for rooms and dining at the same time?</li>
         <li>Is there a covered meeting space, or is the outdoor area the only option?</li>
         <li>What is the Wi-Fi speed, and how does it hold up with 15 to 25 users at once?</li>
         <li>Which team activities come with the corporate package, and which cost extra?</li>
         <li>What is the cancellation policy if the weather disrupts your plans?</li>
         <li>Can the property handle AV needs, such as a projector, screen and microphone for 20 people?</li>
         <li>Which dietary needs can the kitchen meet?</li>
         <li>Will one coordinator own the logistics for your booking?</li>
       </ul>
       <p>Get written answers to each of these before you pay a group deposit. That one step heads off about 80 per cent of the problems planners face on site.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">What Are the Common Mistakes in Corporate Offsite Planning at Hill Destinations?</h2>
       <ul class="list-disc pl-6 space-y-1">
         <li><strong>Overloading the agenda:</strong> The hills are part of the input. Free time is not wasted time. It is where informal leadership talks happen and team bonds form. Treat white space as a feature, not a gap in the schedule.</li>
         <li><strong>Choosing scenic over functional:</strong> Great views will not make up for weak Wi-Fi. Nor will they fix a meeting room that seats 12 when your team is 20, or a kitchen that cannot handle the group's diets. The frustration will outweigh the scenery.</li>
         <li><strong>Skipping the recce:</strong> If your company runs regular offsites, visit your shortlisted properties in person. It is worth the day trip. Photos and brochures do not show how a room sounds, its true size, or how far apart the rooms are.</li>
         <li><strong>Booking too close to the date:</strong> Good Mussoorie properties fill up 3 to 4 weeks ahead for peak-season weekends. A full property buyout needs at least 6 to 8 weeks' notice. May and June are the busiest months of all.</li>
         <li><strong>Forgetting the monsoon roads:</strong> From July to September, landslides can close hill roads for a while. Check advisories before the team drives, and build slack into travel times. The season itself can suit a focused offsite. At EBC it is the quietest time of year, and every tent and cottage is weather-proofed.</li>
       </ul>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">What Does the Mussoorie Setting Actually Do to Group Dynamics?</h2>
       <p>This is worth saying plainly. It is the real reason to go to Mussoorie rather than a hotel in Gurgaon.</p>
       <p>When people leave their usual setting, their roles in a group loosen. The colleague who is quiet in the boardroom often speaks first on a trail. The senior leader who dominates a formal session often turns more open once the structure falls away.</p>
       <p>These shifts are not certain. But an outdoor hill property creates more chances for them than a city hotel does. Height, forest, physical activity and shared meals, with no city schedule cutting in, change the mood of a group from the ground up.</p>
       <p>This is why the best offsites tend to happen where the setting does part of the work. It should not just sit in the background. This <a href="https://www.hotelierindia.com/operations/experience-tranquil-adventure-in-the-heart-of-mussoorie-with-ebc-mussoorie" class="text-secondary underline" target="_blank" rel="noopener">Hotelier India feature on EBC Mussoorie</a> describes a property built on that idea. A calm outdoor stay is the base for a different kind of hospitality, and so for a different kind of corporate retreat. At EBC, the day ends at the bonfire, and the kitchen cooks Garhwali dishes such as kafuli and mandua ki roti.</p>
       <p>For a traveller's view of the place, this <a href="https://tripoto.com/india/trips/did-you-know-that-just-8-hours-from-delhi-there-s-an-everest-base-camp-no-we-re-not-kidding-3aea3a54f8628a1c8" class="text-secondary underline" target="_blank" rel="noopener">Tripoto trip account of EBC</a> gives a good feel for the property and its surroundings from the ground.</p>`,
    ],
  },
  faqs: [
    {
      question: "How many people does a typical corporate offsite property in Mussoorie accommodate?",
      answer:
        "Boutique and nature-stay properties usually host 10 to 40 people. EBC Mussoorie takes corporate groups of 8 to 48 guests. For groups above 50, larger venues or full hotel buyouts suit better.",
    },
    {
      question: "What is the average cost of a corporate offsite near Mussoorie?",
      answer:
        "For a 2-night, 20-person group at a good experience property, plan for Rs 4 to 9 lakh in total. That covers rooms, meals, activities and group transport from Delhi. Treat it as a rough range and ask for a written quote.",
    },
    {
      question: "Can we customise the team activity programme at Mussoorie properties?",
      answer:
        "Most properties offer a set menu of activities. Some, mainly outdoor or glamping properties, will work with a facilitator you bring in. Confirm this before you book.",
    },
    {
      question: "Is Mussoorie suitable for a product launch or press event?",
      answer:
        "The scenic setting works well for media and influencer events. But AV and connectivity need careful planning. Not every property is equipped for this kind of event.",
    },
    {
      question: "What is the best group size for a Mussoorie corporate offsite?",
      answer:
        "10 to 25 people is the sweet spot for most seasoned properties. That is large enough for real group dynamics, and small enough for good facilitation and personal attention.",
    },
    {
      question: "Do Mussoorie properties provide group transport from Delhi?",
      answer:
        "Most properties do not run group transport themselves, but they can arrange it with local operators. Confirm this when you first enquire.",
    },
  ],
};

export const metadata = guideMeta("corporate-offsite-mussoorie", articleData.metaData);

export default function CorporateOffsitePage() {
  const renderContent = (htmlString: string) => {
    return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
  };

  return (
    <main className="bg-[#0C150D] text-[#F7F5EE]">
      <JsonLd data={guideSchema("corporate-offsite-mussoorie", articleData)} />
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
              description="Everything you need to know before planning your corporate offsite in Mussoorie."
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