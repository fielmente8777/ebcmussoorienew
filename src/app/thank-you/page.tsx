import ThankUPopUp from "./components/ThankUPopUp";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Thank You – EBC Mussoorie",
  description: "Thank you for your enquiry. The EBC Mussoorie team will reply within 2 hours.",
  path: "/thank-you/", noindex: true,
});


export default function ThankYou() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <ThankUPopUp/>
        </div>
    );
}