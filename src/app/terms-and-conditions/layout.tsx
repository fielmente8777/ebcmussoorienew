import JsonLd from "@/components/seo/JsonLd";
import { pageMeta } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

// page.tsx in this route is a client component, so its metadata lives here.
export const metadata = pageMeta({
  title: "Terms & Conditions – EBC Mussoorie",
  description: "Booking, payment, cancellation and stay terms for EBC Mussoorie, Park Estate, Hathipaon Road, Mussoorie, Uttarakhand.",
  path: "/terms-and-conditions/",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Terms & Conditions", path: "/terms-and-conditions/" }])} />
      {children}
    </>
  );
}
