import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Page not found – EBC Mussoorie" },
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="bg-[#162218] min-h-[70vh] flex items-center justify-center px-6 py-32">
      <div className="flex flex-col items-center gap-6 text-center max-w-xl">
        <span className="uppercase text-secondary text-sm tracking-wider">404</span>
        <h1 className="font-primary text-white text-4xl md:text-6xl leading-[1.1]">This page could not be found</h1>
        <p className="text-[#A0A0A0]">The page may have moved. Our rooms, guides and booking are a click away.</p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="/" className="rounded-md bg-[#d2ab62] px-6 py-3 text-sm font-semibold uppercase tracking-wider text-black">
            Home
          </Link>
          <Link href="/rooms/" className="rounded-md border border-secondary px-6 py-3 text-sm uppercase tracking-wider text-secondary">
            Rooms
          </Link>
          <Link href="/services/" className="rounded-md border border-secondary px-6 py-3 text-sm uppercase tracking-wider text-secondary">
            Travel guides
          </Link>
        </div>
      </div>
    </main>
  );
}
