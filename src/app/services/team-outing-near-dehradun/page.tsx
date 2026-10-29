import HeroBanner from "@/components/banner/HeroBanner";
import Accordion2 from "@/components/accordion/Accordion2";
import { SectionWithContainer } from "@/components/sectionComponants";
import SectionHeading from "@/components/typography/SectionHeading";
import { SectionHeading2 } from "@/components/typography/SectionHeading2";
import { guideMeta, guideSchema } from "../components/guides";
import JsonLd from "@/components/seo/JsonLd";

const articleData = {
  slug: "team-outing-near-dehradun",
  metaData: {
    title: "Team Outing Near Dehradun: 7 Formats That Actually Work for Indian Corporate Groups | EBC Mussoorie",
    description:
      "Seven team outing formats near Dehradun that work, from adventure days to strategy retreats, and how to match each one to your team's size and goal.",
  },
  banner: {
    title: "Team Outing Near Dehradun",
    subTitle: "7 Formats That Actually Work for Indian Corporate Groups",
    description:
      "Seven outing formats that bring real value, from adventure days to strategy retreats. Match the format to your team's size and goal.",
    image: "/banner/bnr2.png",
  },
  intro: {
    title: "Team Outing Near Dehradun",
    description: [
      "A team outing near Dehradun is now a fixture on the Indian corporate calendar, above all for companies in Delhi NCR. But these outings vary hugely in quality. Some truly change how a team works together. Others are a day of forced fun that everyone politely sits through, before the same old habits return on Monday. This guide covers seven formats that work and how to match them to your team's size and goal. It also covers the planning details that separate a good outing from a scramble.",
      "The distances are simple. EBC Mussoorie, on the hills above Dehradun, is about 280 km from Delhi, or 5.5 to 6.5 hours by road via Roorkee or Haridwar. From Dehradun, it is 35 km, or 1 to 1.5 hours. Dehradun sits in the valley, while Mussoorie rises to about 2,005 metres and EBC to 2,160 m. You can also take the Shatabdi Express from Delhi to Dehradun in about 5.5 hours. Or fly into Jolly Grant Airport, about 55 km from EBC. A team that leaves Delhi early on a Friday can be in the hills by dinner. It then gets two full days of activity, rest or team sessions, and is home by Sunday evening.",
    ],
  },
  details: {
    title: "7 Team Outing Formats That Work Near Dehradun",
    subtitle: "A Planner's Guide",
    description: [
      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">Format 1: Is the Adventure Day Out Right for Your Team?</h2>
       <p><strong>Best for:</strong> Young teams, sales teams and teams that bond through physical challenge.</p>
       <p><strong>What it involves:</strong> A full day of outdoor activities, one after another. Start with a morning trek of 3 to 4 hours. In the afternoon, head to the river near Rishikesh, about 45 minutes from Dehradun, which has some of India's best white-water rafting. End with a campfire at a hill property above Dehradun.</p>
       <p><strong>Key logistics:</strong> Book a property near Mussoorie or in the Dehradun hills as your base. Book the Rishikesh rafting on its own, with an operator registered with the Uttarakhand Tourism Development Board. Rafting is usually suspended through the peak monsoon, when the Ganga runs high, so plan this format for the drier months. Sort out transport between each stop. The distances are short, but timing matters.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">Format 2: When Does a Strategy Retreat Make Sense?</h2>
       <p><strong>Best for:</strong> Leadership teams, cross-functional project teams and companies going through change.</p>
       <p><strong>What it involves:</strong> Two days of guided work sessions at a hill property. Plan focused agenda blocks in the morning, outdoor breaks in the afternoon and relaxed dinner talks in the evening. The goal is not to escape work. It is to do better work, away from the office.</p>
       <p><a href="/" class="text-secondary underline">EBC Mussoorie</a> is set up for this format. The Den gives your group a private indoor space on the estate. Guided walks through the deodar forest fill the breaks, and Park Café handles group meals. A dedicated host looks after the details. The result feels like real work in good company, not a hotel conference.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">Format 3: Can a Wellness Offsite Help a Tired Team?</h2>
       <p><strong>Best for:</strong> Teams under heavy stress or close to burnout, HR wellbeing programmes, and recovery after a big project.</p>
       <p><strong>What it involves:</strong> A light two-night stay built around rest and time in nature. Add yoga or guided meditation through local teachers, forest walks and plenty of free time. The empty schedule is the whole point.</p>
       <p><strong>What to avoid:</strong> Do not turn a wellness offsite into a strategy retreat in disguise. If leaders use the wellness label to slip in a full day of presentations, the team will notice. The loss of trust will outweigh any wellbeing gain.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">Format 4: The Photography and Creative Challenge</h2>
       <p><strong>Best for:</strong> Design teams, communications teams and mixed teams where each person's voice matters.</p>
       <p><strong>What it involves:</strong> Each team member gets a creative brief for a 90-minute photo walk around the property and the land around it. The group reviews the photos together in the evening. The brief can be a metaphor, such as "capture the team's biggest challenge". It can also be literal, such as "show the best of this trail".</p>
       <p>A guided talk about the photos sparks conversations that a normal team session rarely does. This format works best at nature properties near Dehradun, where the landscape gives real variety. At EBC, deodar forest, ridge trails and over 50 recorded bird species give every photographer plenty to work with.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">Format 5: Is an Overnight Trek Too Much for Your Team?</h2>
       <p><strong>Best for:</strong> Teams of 8 to 20, active groups, and companies that want an outing people will talk about for years.</p>
       <p><strong>What it involves:</strong> An overnight trek on a set route in the Mussoorie or Chakrata area. Nag Tibba, at 3,022 metres, is the easiest overnight summit trek from Mussoorie. Its trail is well kept, and most fit people can manage it with some preparation. A local trekking operator provides the guide, camping gear and meals on the trail.</p>
       <p><strong>Critical note:</strong> Tell the team well ahead how fit they need to be. Never spring an overnight trek on a group that has not been told to prepare. It creates medical risk and resentment in equal measure. Save this format for the drier months, not the monsoon.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">Format 6: The Community Contribution Day</h2>
       <p><strong>Best for:</strong> Companies with CSR goals, teams that want purpose as well as fun, and newer teams building a shared identity.</p>
       <p><strong>What it involves:</strong> A morning spent helping out near Dehradun. It could be at a local school, a village conservation project or a tree-planting drive run by the forest department. Arrange it through a registered NGO or community group. In the afternoon, return to the property to reflect and relax together.</p>
       <p>This format works because it gives the team a shared story that is not about the company. Teams that work together on something that matters outside often bond more strongly than teams that only do internal activities.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">Format 7: The Half-Day Activity Day (For Time-Pressed Groups)</h2>
       <p><strong>Best for:</strong> Large teams, groups short on time, and outings that repeat every month or quarter.</p>
       <p><strong>What it involves:</strong> A day trip from Dehradun or Delhi to a hill property near Mussoorie. Plan a morning activity, such as a nature walk, an outdoor challenge or a team game. Follow it with a group lunch on site, then leave in the afternoon. No overnight stay is needed. Park Café at EBC is open to day visitors who call ahead, and it sits on the site of Sir George Everest's old stables.</p>
       <p>This format gives a team a reset without two nights away. The limit is depth. A day out does not build relationships as well as an overnight stay. Still, it beats a restaurant dinner by a wide margin as a team outing.</p>`,

      `<h2 class="text-2xl font-bold mt-8 mb-3 text-secondary">What Should You Sort First When Planning Logistics?</h2>
       <p>In order of priority:</p>
       <ul class="list-disc pl-6 space-y-1">
         <li>Fix the date and group size before you approach any property. Without them, no one can give you a true quote.</li>
         <li>Choose and book the property, with a confirmed deposit, at least 4 weeks ahead for weekend dates.</li>
         <li>Arrange transport for the whole group, including pickups at Jolly Grant Airport for anyone flying in.</li>
         <li>If the property is not running the activities, book the operators yourself.</li>
         <li>Send dietary and medical needs to the property kitchen at least one week in advance.</li>
         <li>Name one person from the planning team as the on-site coordinator for the day.</li>
         <li>In the monsoon, check road and weather advisories before the group sets off, and keep the plan flexible.</li>
       </ul>`,
    ],
  },
  faqs: [
    {
      question: "What is the minimum group size for a team outing near Dehradun?",
      answer:
        "Most properties treat 8 or more as a group for a team outing. EBC Mussoorie hosts corporate groups of 8 to 48 guests. Smaller groups of 4 to 7 can simply book rooms in the usual way.",
    },
    {
      question: "Is a Dehradun team outing feasible as a day trip from Delhi?",
      answer:
        "It is possible, but tiring. You spend more than 10 hours on the road for a 4 to 5-hour activity window. We strongly suggest an overnight stay.",
    },
    {
      question: "How do we handle a team with mixed fitness levels on an outdoor outing?",
      answer:
        "Choose activities with more than one level, or run two groups side by side. Trail walks with a short, easy route and a longer one suit most fitness levels without leaving anyone out. The guided morning walk at EBC is easy to moderate and lasts 45 to 90 minutes, so most people can join.",
    },
    {
      question: "Are there team outing venues near Dehradun that handle their own facilitation?",
      answer:
        "Some do. <a href='/activities/' class='text-secondary underline'>EBC Mussoorie</a> builds outdoor time into the stay itself, with guided walks and bonfire evenings. For formal work, such as personality tests or leadership tools, bring your own trainer.",
    },
    {
      question: "What is a reasonable per‑person budget for a 2‑night team outing near Dehradun?",
      answer:
        "It depends on the room type, meals, activities and group transport, so ask each property for one all-inclusive group quote. Compare quotes on what is included, not just the headline figure. At EBC Mussoorie, every room includes breakfast, the evening bonfire, the guided morning walk, Wi-Fi and parking, and full-board options are available for groups.",
    },
    {
      question: "When should we avoid planning a team outing near Dehradun?",
      answer:
        "No season is off limits, but two need care. The monsoon, from July to September, is the quietest time in the hills, and EBC stays open with weather-proofed rooms. Roads can close after heavy rain or landslides, though. Check advisories, keep dates flexible and plan a slow stay, not a trek. The Char Dham Yatra peak in May and June brings heavy highway traffic, so leave early on those dates.",
    },
  ],
};

export const metadata = guideMeta("team-outing-near-dehradun", articleData.metaData);

export default function TeamOutingPage() {
  const renderContent = (htmlString: string) => {
    return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
  };

  return (
    <main className="bg-[#0C150D] text-[#F7F5EE]">
      <JsonLd data={guideSchema("team-outing-near-dehradun", articleData)} />
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
              description="Everything you need to know before planning your team outing near Dehradun."
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