

export const metadata = {
  title: "Resinaro Governance | Fair, Transparent Migrant Support in the UK",
  description: "Resinaro is built on values of fairness, transparency, and inclusivity. We provide migrant support services in the UK that feel like a community, not a business.",
  keywords: [
    "Resinaro governance",
    "migrant support UK",
    "Italian community UK",
    "fair migrant services",
    "transparent pricing",
    "inclusive migrant support"
  ]
};


export default function GovernancePage() {
  return (
    <main className="min-h-screen bg-white text-green-900">
      {/* Hero Section */}
      <section className="relative bg-gray-50 py-16 px-4 text-center overflow-hidden">
        {/* Subtle green-white-red gradient stripe */}
        <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-green-700 via-white to-red-600 opacity-80" aria-hidden="true"></div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 z-10 relative">Our Values: Governance & Community at Resinaro</h1>
        <p className="text-lg md:text-xl text-green-800 max-w-2xl mx-auto z-10 relative">Support that feels like a community — fair, transparent, and inclusive for Italians and all migrants in the UK.</p>
      </section>

      {/* Fair Pricing */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-3 flex items-center"><span className="mr-2 text-3xl">💰</span>Fair Pricing</h2>
          <p className="mb-2">Resinaro charges only what’s necessary to cover admin and support — never more. Unlike overpriced agencies that exploit migrants, our goal is to make essential services accessible to everyone.</p>
          <ul className="list-disc list-inside ml-6 text-green-800">
            <li>No hidden fees.</li>
            <li>Clear breakdowns before you commit.</li>
            <li>Pricing designed to support fairness, not exploitation.</li>
          </ul>
        </div>
      </section>

      {/* Transparency & Trust */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-3 flex items-center"><span className="mr-2 text-3xl">🔍</span>Transparency & Trust</h2>
          <p className="mb-4">We believe in clear, honest communication. You’ll always know what to expect.</p>
          <ul className="list-disc list-inside ml-6 text-green-800 mb-2">
            <li>Clear timelines for every service.</li>
            <li>Updates if government rules or processes change.</li>
            <li>Honest guidance, even if it means less profit for us.</li>
          </ul>
          <p>Transparency is at the heart of everything we do.</p>
        </div>
      </section>

      {/* Inclusivity & Community */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-3 flex items-center"><span className="mr-2 text-3xl">🤝</span>Inclusivity & Community</h2>
          <p className="mb-4">Resinaro is open to Italians and all migrants, regardless of race, ethnicity, or background. We create a welcoming environment through:</p>
          <ul className="list-disc list-inside ml-6 text-green-800 mb-2">
            <li>Community events & workshops.</li>
            <li>Peer support groups.</li>
            <li>Volunteer opportunities.</li>
          </ul>
          <p>Because solidarity has no borders.</p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-3 flex items-center"><span className="mr-2 text-3xl">🌍</span>Our Mission</h2>
          <p>We exist because no one should feel lost or alone navigating life in a new country. From passports and bureaucracy to housing, health, and integration, Resinaro helps you build a stable life in the UK — with dignity, fairness, and care.</p>
        </div>
      </section>

      {/* Community Trust - Testimonials */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 flex items-center justify-center"><span className="mr-2 text-3xl">🗣️</span>Community Trust</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 shadow-md rounded-lg p-6 italic flex flex-col justify-between min-h-[140px]">
              “Resinaro helped me secure my passport without stress.”
              <span className="block mt-4 not-italic font-semibold text-green-900">— Martina R.</span>
            </div>
            <div className="bg-gray-50 shadow-md rounded-lg p-6 italic flex flex-col justify-between min-h-[140px]">
              “Finally, an honest service for migrants in the UK.”
              <span className="block mt-4 not-italic font-semibold text-green-900">— Luca P.</span>
            </div>
            <div className="bg-gray-50 shadow-md rounded-lg p-6 italic flex flex-col justify-between min-h-[140px]">
              “They guided me with kindness and never overcharged — I recommend Resinaro to everyone.”
              <span className="block mt-4 not-italic font-semibold text-green-900">— Chiara B.</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="w-full bg-green-900 py-10 px-4 text-center mt-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Want to learn more about our work or get involved? Reach out today.</h2>
        <a href="/contact" className="inline-block bg-white text-green-900 hover:bg-green-700 hover:text-white font-semibold px-6 py-3 rounded-lg shadow transition-colors">Contact Us</a>
      </section>
    </main>
  );
}
