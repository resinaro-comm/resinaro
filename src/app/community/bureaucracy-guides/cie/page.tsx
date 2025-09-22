export default function CieGuide() {
  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-green-900">
        Understanding the Italian ID Card (CIE) in the UK
      </h1>
      <p className="text-gray-700 mb-6">
        The CIE (Carta d’Identità Elettronica) is Italy’s official electronic ID card.
        It is valid for travel across the EU and serves as proof of identity.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Who Can Apply</h2>
      <p className="text-gray-700 mb-4">
        Italian citizens registered with AIRE and living abroad are eligible to apply
        for a CIE through their Consulate.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Required Documents</h2>
      <ul className="list-disc pl-6 text-gray-700">
        <li>Valid Italian passport or expired ID</li>
        <li>Proof of residence in the UK</li>
        <li>Passport-style photos</li>
      </ul>

      <div className="mt-8 p-6 bg-green-100 rounded-lg text-center">
        <h3 className="text-xl font-bold mb-2">Need help applying for your CIE?</h3>
        <p className="mb-4">Resinaro can assist with preparing and submitting your ID application.</p>
        <a
          href="/contact"
          className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition"
        >
          Get Help →
        </a>
      </div>
    </main>
  );
}
