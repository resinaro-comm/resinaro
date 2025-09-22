export default function HousingPost() {
  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
  Finding Affordable Housing in London: Guide
      </h1>
      <p className="mb-4 text-gray-700">
        London is one of the most expensive cities in the world, but with the
  right approach, people can find safe and affordable accommodation. This
        guide covers your options, rights, and ways to avoid common pitfalls.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">Where to Search</h2>
      <ul className="list-disc pl-6 mb-4 text-gray-700">
        <li>Property websites like Rightmove, Zoopla, and SpareRoom</li>
        <li>Local Facebook groups and community forums</li>
        <li>Council housing lists (if eligible)</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-3">Avoiding Rental Scams</h2>
      <p className="mb-4 text-gray-700">
        Sadly, scams are common. Always view the property in person, never pay
        cash in advance, and ensure your deposit is protected by a government
        tenancy deposit scheme.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">Know Your Rights</h2>
      <p className="mb-4 text-gray-700">
        Landlords must provide a tenancy agreement, protect deposits, and ensure
  safe living conditions. People have the same rights as UK citizens when
        renting privately.
      </p>

      <div className="bg-green-100 p-6 mt-8 rounded-lg text-center">
        <h3 className="text-xl font-bold mb-2">Struggling to find housing?</h3>
        <p className="mb-4">
          Resinaro can help you navigate the London rental market and connect you
          with trusted housing partners.
        </p>
        <a
          href="/contact"
          className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition"
        >
          Get Housing Support →
        </a>
      </div>
    </main>
  );
}
