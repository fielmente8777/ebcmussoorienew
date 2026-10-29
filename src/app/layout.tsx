import { Footer } from "@/components/footers";
import Navbar2 from "@/components/navbars/Navbar2";
import { AppProvider } from "@/contextApi/AppContext";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import "./style.scss";
import Call from "@/components/ContactButton/Call";
import Whatsapp from "@/components/ContactButton/WhatsApp";
import { contacts } from "@/utils/constant";
import Script from "next/script";
import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE, HOME_DESCRIPTION, HOME_TITLE, SITE_NAME, SITE_URL } from "@/lib/seo";
import Analytics from "@/components/seo/Analytics";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
});

// const fontNeutraText = localFont({
//   src: "./font/fonnts.com-NeutraTextTF-Book.ttf",
//   weight: "400",
//   style: "normal",
//   variable: "--font-neutra-text",
// });

// const neutraFont = localFont ({
//   src: [
//     {
//       path: "/font/NeutraText-Bold.otf",
//       weight: "700",
//       style: "normal",
//     },
//   ],
// });

// const fontpppangaia = localFont({
//   src: [
//     {
//       path: "./font/PPPangaia-Bold-BF654c530cc27f8.otf",
//       weight: "700",
//       style: "normal",
//     },
//     {
//       path: "./font/PPPangaia-BoldItalic-BF654c530c8d2fa.otf",
//       weight: "700",
//       style: "italic",
//     },
//     {
//       path: "./font/PPPangaia-Medium-BF654c530cc86d5.otf",
//       weight: "500",
//       style: "normal",
//     },
//     {
//       path: "./font/PPPangaia-MediumItalic-BF654c530bedffb.otf",
//       weight: "500",
//       style: "italic",
//     },
//     {
//       path: "./font/PPPangaia-Ultralight-BF654c530cd00f1.otf",
//       weight: "200",
//       style: "normal",
//     },
//     {
//       path: "./font/PPPangaia-UltralightItalic-BF654c530ca889f.otf",
//       weight: "200",
//       style: "italic",
//     },
//   ],
//   variable: "--font-pppangaia",
// });

// Site-wide defaults only. Each page sets its own title, description and
// canonical through pageMeta(); the root deliberately sets no canonical so a
// page can never inherit the homepage's.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: HOME_TITLE,
  description: HOME_DESCRIPTION,
  openGraph: { siteName: SITE_NAME, locale: "en_IN", type: "website", images: [DEFAULT_OG_IMAGE] },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning={true}
    >
      <body>
        <Analytics />
        <AppProvider>
          <Navbar2 />
          {children}
          <Footer />
          <Call callNumber={contacts.phone[0]} />
          <Whatsapp whatsAppNumber={contacts.phone[0]} />
        </AppProvider>
        <Script id="chatbot" strategy="beforeInteractive">
          {`window.eazbotConfig = {
            ndid: "e53a0946-ed31-455f-b278-37aa1b0c8c00",
            hid: "56369483",
          };`}
        </Script>
        <Script src="https://cb-script.dyq28lyxrazm2.amplifyapp.com/widget/lead-chatbot.js"></Script>
      </body>
    </html>
  );
}
