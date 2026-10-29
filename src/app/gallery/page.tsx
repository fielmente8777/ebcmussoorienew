import Gallery from "./components/gallery";
import GalleryBanner from "./components/galleryBanner";
import { galleryPageData } from "./components/pageData";

import JsonLd from "@/components/seo/JsonLd";
import { pageMeta } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = pageMeta({
  title: "Photos of EBC Mussoorie: Tents, Cottages & Forest",
  description: "See the tents, cottages, Andrew's Villa, Park Café and The Den at EBC Mussoorie, set in the deodar forest at Park Estate, Hathipaon Road.",
  path: "/gallery/",
});


export default function Page() {
  return (
    <main>
      <JsonLd data={[breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Gallery", path: "/gallery/" }])]} />
      <GalleryBanner  />

      <Gallery galleryImages={galleryPageData.gallerySection.galleryImages} />
    </main>
  );
}




// import ThreeGridTextBanner from "@/components/banner/ThreeGridTextBanner";
// import { galleryPageData } from "./components/pageData";
// import CommonCardSection from "@/components/CommonSections/CommonCardSection";

// export default function GalleryPage() {
//   return (
//     <div>
//       <ThreeGridTextBanner {...galleryPageData.banner} />
//       {galleryPageData.cards.map((card, index) => (
//         <CommonCardSection
//           key={index}
//           {...card}
//           sectionColor={
//             index % 2 !== 0
//               ? "bg-background-1 text-primary"
//               : "bg-primary text-white"
//           }
//           titleColor={index % 2 !== 0 ? "primary" : "white"}
//         />
//       ))}
//     </div>
//   );
// }


