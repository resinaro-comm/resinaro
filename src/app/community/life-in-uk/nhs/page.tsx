export default function NHSPost() {
  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        Navigating NHS Healthcare as an Italian in the UK
      </h1>
      <p className="mb-4 text-gray-700">
        Accessing healthcare in the UK can feel overwhelming, but the NHS
        provides free services to residents, including EU nationals living in the
  country. Here’s how Italians and other people can register and use NHS
        services.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">Registering with a GP</h2>
      <p className="mb-4 text-gray-700">
        To access most NHS services, you need to register with a local General
        Practitioner (GP). Bring proof of ID and address to your nearest GP
        surgery. Registration is free and does not depend on immigration status.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">Healthcare Services Available</h2>
      <ul className="list-disc pl-6 mb-4 text-gray-700">
        <li>GP appointments and check-ups</li>
        <li>Hospital emergency services (A&E)</li>
        <li>Maternity and child healthcare</li>
        <li>Mental health services and referrals</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-3">Tips for Italians</h2>
      <p className="mb-4 text-gray-700">
        Bring your Italian health card (Tessera Sanitaria) if you’re newly
        arrived — it can be useful in some cases. Long-term residents should
        switch fully to NHS registration for seamless care.
      </p>

      <div className="bg-green-100 p-6 mt-8 rounded-lg text-center">
        <h3 className="text-xl font-bold mb-2">Need help registering?</h3>
        <p className="mb-4">
          Resinaro provides guidance and hands-on support for people navigating
          NHS paperwork and GP registrations.
        </p>
        <a
          href="/contact"
          className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition"
        >
          Get Healthcare Support →
        </a>
      </div>
    </main>
  );
}
