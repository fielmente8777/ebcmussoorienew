import JsonLd from "@/components/seo/JsonLd";
import { pageMeta } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

// page.tsx in this route is a client component, so its metadata lives here.
export const metadata = pageMeta({
  title: "The Den – Private Event Venue in Mussoorie | EBC",
  description: "A reservation-only lounge in the forest at EBC Mussoorie for celebrations, private dinners and small business gatherings, with its own private bar.",
  path: "/den/",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "The Den", path: "/den/" }])} />
      {children}
    </>
  );
}
