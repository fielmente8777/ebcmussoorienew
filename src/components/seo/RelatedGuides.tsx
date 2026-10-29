import Link from "next/link";
import { SectionWithContainer } from "@/components/sectionComponants";
import { GUIDE_INDEX } from "@/app/services/components/guides";

/**
 * "More travel guides" block for the foot of each guide page. Lists other
 * guides from the same category (then the next category) so every guide is
 * linked from its siblings, not only from the /services/ hub.
 */
export default function RelatedGuides({ slug, count = 4 }: { slug: string; count?: number }) {
  const self = GUIDE_INDEX.find((g) => g.slug === slug);
  const others = GUIDE_INDEX.filter((g) => g.slug !== slug && g.slug !== "forest-picnic");
  const same = others.filter((g) => g.category === self?.category);
  // Rotate the list by this guide's position so siblings link to different neighbours.
  const start = Math.max(0, same.findIndex((g) => g.slug > slug));
  const rotated = [...same.slice(start), ...same.slice(0, start)];
  const picks = [...rotated, ...others.filter((g) => !rotated.includes(g))].slice(0, count);
  if (!picks.length) return null;

  return (
    <SectionWithContainer sectionClassName="bg-[#0C150D] py-14">
      <nav aria-labelledby="more-guides" className="mx-auto max-w-4xl space-y-6">
        <h2 id="more-guides" className="text-2xl md:text-3xl font-primary font-bold text-white">
          More travel guides{self ? `: ${self.category}` : ""}
        </h2>
        <ul className="grid gap-4 md:grid-cols-2">
          {picks.map((g) => (
            <li key={g.slug}>
              <Link
                href={`/services/${g.slug}/`}
                className="block h-full rounded-xl border border-secondary/30 p-5 text-[#EDE7D9] transition-colors hover:border-secondary"
              >
                <span className="block font-primary text-lg text-white">{g.title}</span>
              </Link>
            </li>
          ))}
        </ul>
        <p>
          <Link href="/services/" className="text-secondary underline underline-offset-4">
            See all travel guides
          </Link>
        </p>
      </nav>
    </SectionWithContainer>
  );
}
