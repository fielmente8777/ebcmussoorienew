import Script from "next/script";

/**
 * Google Analytics 4. Renders nothing until NEXT_PUBLIC_GA_ID (e.g. "G-XXXXXXX")
 * is set in the Vercel project's environment variables, so it is safe to ship
 * before the measurement ID is known. Cross-domain measurement to the ipms247
 * booking engine is configured so bookings are attributed to their source.
 */
export default function Analytics() {
  const id = process.env.NEXT_PUBLIC_GA_ID;
  if (!id || !/^G-[A-Z0-9]+$/.test(id)) return null;
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${id}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${id}', { linker: { domains: ['ebcmussoorie.com', 'live.ipms247.com'] } });`}
      </Script>
    </>
  );
}
