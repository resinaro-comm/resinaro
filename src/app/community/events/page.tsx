export default function EventsPage() {
  const events = [
    {
      title: "Peer Support Group (Online)",
      date: "Every Wednesday, 7 PM",
      description:
        "An open and safe online space to share experiences, challenges, and encouragement.",
    },
    {
      title: "Mindfulness Workshop",
      date: "Saturday 5th October, 2 PM – London",
      description:
        "Learn simple techniques to reduce stress and improve wellbeing, guided by trained facilitators.",
    },
    {
      title: "Community Dinner",
      date: "Friday 18th October, 6 PM – Manchester",
      description:
  "Meet other Italians and people over food, stories, and friendship.",
    },
  ];

  return (
    <main className="p-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-green-900 text-center">
        Join Our Events & Groups
      </h1>
      <p className="text-center text-gray-700 mb-12">
  Resinaro hosts regular events to help people and Italians in the UK
        connect, share, and grow. Everyone is welcome.
      </p>

      {/* Events List */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Upcoming Events</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {events.map((event, index) => (
            <div
              key={index}
              className="border rounded-lg shadow-sm bg-white p-6 hover:shadow-md transition"
            >
              <h3 className="text-xl font-bold text-green-800 mb-2">
                {event.title}
              </h3>
              <p className="text-gray-600 mb-2">
                <strong>Date:</strong> {event.date}
              </p>
              <p className="text-gray-700">{event.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Join Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Why Join?</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Reduce feelings of isolation and loneliness</li>
          <li>Build new friendships and connections</li>
          <li>Learn skills for mental health and resilience</li>
          <li>Celebrate Italian and community culture</li>
        </ul>
      </section>

      {/* Call to Action */}
      <div className="mt-10 p-6 bg-green-100 rounded-lg text-center">
        <h3 className="text-xl font-bold mb-2">Be Part of It</h3>
        <p className="mb-4">
          Interested in joining or hosting an event? We’d love to hear from you.
        </p>
        <a
          href="/contact"
          className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition"
        >
          Register Your Interest →
        </a>
      </div>
    </main>
  );
}
