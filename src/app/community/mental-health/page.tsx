
export const metadata = { title: "Mental Health Support in the UK | Resinaro", description: "Guides, groups and resources to access NHS help and build wellbeing.", alternates: { canonical: "/community/mental-health" },

export default function MentalHealthPage() {
  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-green-900">
        You Are Not Alone
      </h1>
      <p className="text-gray-700 mb-6">
        Moving to a new country is exciting but can also feel overwhelming.
        At Resinaro, we believe nobody should face loneliness, anxiety,
        or stress alone. This space is here to give hope, guidance, and connection.
      </p>

      {/* Immediate Help Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Immediate Help</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-4 border rounded-lg shadow-sm bg-green-50">
            <h3 className="font-bold text-lg mb-2">NHS Mental Health Support</h3>
            <p className="text-gray-700 mb-2">Call NHS 111 (Option 2) for urgent mental health help.</p>
            <p className="text-gray-700">If it’s an emergency, call <strong>999</strong> immediately.</p>
          </div>
          <div className="p-4 border rounded-lg shadow-sm bg-green-50">
            <h3 className="font-bold text-lg mb-2">Helplines</h3>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Samaritans: 116 123 (24/7, free)</li>
              <li>Mind Infoline: 0300 123 3393</li>
              <li>Italian-speaking volunteers available via Resinaro</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Community Support */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Community Support</h2>
        <p className="text-gray-700 mb-4">
          Healing is easier together. Resinaro connects you with:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4">
          <li>Peer-support groups (online & in person)</li>
          <li>Workshops on wellbeing, mindfulness, and resilience</li>
          <li>Safe spaces to share stories without judgment</li>
        </ul>
        <a
          href="/events"
          className="inline-block bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition"
        >
          See Upcoming Groups →
        </a>
      </section>

      {/* Stories of Hope */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Stories of Hope</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-4 border rounded-lg shadow-sm bg-white">
            <p className="italic text-gray-700">
              “When I felt isolated in London, Resinaro connected me to people who truly understood.
              It gave me hope again.” — <strong>Giulia, Milan</strong>
            </p>
          </div>
          <div className="p-4 border rounded-lg shadow-sm bg-white">
            <p className="italic text-gray-700">
              “The peer group became like a second family to me. I wasn’t judged, just heard.”
              — <strong>Omar, Palermo</strong>
            </p>
          </div>
          <div className="p-4 border rounded-lg shadow-sm bg-white">
            <p className="italic text-gray-700">
              “Through Resinaro I found not only help, but kindness I thought I had lost.”
              — <strong>Sofia, Naples</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <div className="mt-10 p-6 bg-green-100 rounded-lg text-center">
        <h3 className="text-xl font-bold mb-2">We’re Here for You</h3>
        <p className="mb-4">
          Whether you need someone to talk to, or want to help others, Resinaro
          is a community built on dignity, fairness, and kindness.
        </p>
        <a
          href="/contact"
          className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition"
        >
          Reach Out →
        </a>
      </div>
    </main>
  );
}
