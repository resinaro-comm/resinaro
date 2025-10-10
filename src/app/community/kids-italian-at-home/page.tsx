// app/community/kids-italian-at-home/page.tsx
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Raising Bilingual Kids: Italian at Home Starter Pack",
  description:
    "Games, books and tools to keep Italian alive in the UK: picture dictionaries, story time, labels and music.",
  alternates: { canonical: "/community/kids-italian-at-home" },
};

export default function Page() {
  return (
    <main className="bg-[#F9F6F1] text-gray-800 py-12">
      <div className="container mx-auto max-w-4xl px-6">
        {/* Hero Image */}
        <div className="relative w-full h-72 md:h-96 mb-6 overflow-hidden rounded-xl">
          <Image
            src="/images/raising-bilingual-kids.jpg"
            alt="Raising Bilingual Kids - Italian at Home"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          <div className="absolute bottom-0 w-full p-6 text-white">
            <div className="inline-block mb-2 px-3 py-1 rounded-full text-xs font-medium bg-green-700 text-white shadow-sm">
              FAMILY
            </div>
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
          Raising Bilingual Kids: Italian at Home Starter Pack
        </h1>

        {/* Publication info */}
        <div className="flex items-center text-sm text-gray-600 mb-4">
          <span>Published: October 8, 2025</span>
          <span className="mx-2">•</span>
          <span>By Resinaro Team</span>
        </div>
        
        <p className="mb-6">Want your children to grow up speaking Italian while living in the UK? These tools make bilingual learning fun and natural at home.</p>

        <ul className="list-disc pl-5 space-y-2">
          <li>Picture dictionaries / first words (<a rel="nofollow sponsored" className="underline text-green-800" href="https://www.amazon.co.uk/s?k=italian+picture+dictionary+kids&tag=resinaroamzn-21">browse</a>)</li>
          <li>Bedtime story collections (<a rel="nofollow sponsored" className="underline text-green-800" href="https://www.amazon.co.uk/s?k=storie+per+bambini+italiano&tag=resinaroamzn-21">fav picks</a>)</li>
          <li>Label stickers for household items (<a rel="nofollow sponsored" className="underline text-green-800" href="https://www.amazon.co.uk/s?k=label+stickers+home&tag=resinaroamzn-21">labels</a>)</li>
          <li>Italian music playlists + kid-safe headphones (<a rel="nofollow sponsored" className="underline text-green-800" href="https://www.amazon.co.uk/s?k=kids+headphones+volume+limited&tag=resinaroamzn-21">headphones</a>)</li>
          <li>Whiteboard for daily vocab (<a rel="nofollow sponsored" className="underline text-green-800" href="https://www.amazon.co.uk/s?k=small+magnetic+whiteboard&tag=resinaroamzn-21">whiteboards</a>)</li>
        </ul>

        {/* Tips section */}
        <div className="mt-8 bg-white rounded-lg border shadow-sm p-5">
          <h2 className="text-xl font-semibold text-green-900 mb-3">Bilingual home tips</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Create language zones: designate specific areas or times of day for Italian only</li>
            <li>Use tech wisely: Italian subtitles on favorite shows</li>
            <li>Connect with other Italian families for playdates</li>
            <li>Be consistent but keep it fun—language learning works best through play</li>
            <li>Regular video calls with Italian grandparents/family create real motivation</li>
          </ul>
        </div>

        {/* Resources section */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-green-900 mb-2">Free resources</h2>
          <ul className="list-disc pl-5">
            <li>RAI Yoyo (free Italian children&apos;s channel) has an app with games and videos</li>
            <li>Italian nursery rhymes playlists on YouTube</li>
            <li>Local libraries often have multilingual children&apos;s books</li>
          </ul>
        </div>

        <p className="mt-8 text-xs text-gray-500 italic">Affiliate note: small commission, no extra cost.</p>
      </div>
    </main>
  );
}