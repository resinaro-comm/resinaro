export default function AireGuide() {
  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-green-900">
        What is AIRE and How to Register
      </h1>
      <p className="text-gray-700 mb-6">
        AIRE (Anagrafe degli Italiani Residenti all’Estero) is the official registry
        for Italians living abroad. Registration is mandatory if you’ve lived outside
        Italy for more than 12 months.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Why It Matters</h2>
      <ul className="list-disc pl-6 text-gray-700">
        <li>Allows you to renew your passport and ID abroad</li>
        <li>Grants access to Italian consular services</li>
        <li>Necessary for voting rights in Italian elections</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">How to Register</h2>
      <p className="text-gray-700 mb-4">
        Registration is done online through the “Fast It” portal or by contacting
        your Consulate. You’ll need proof of address, ID, and your Italian tax code (codice fiscale).
      </p>

      <div className="mt-8 p-6 bg-green-100 rounded-lg text-center">
        <h3 className="text-xl font-bold mb-2">Need help with AIRE?</h3>
        <p className="mb-4">Resinaro can submit your AIRE registration for you and check all documents.</p>
        <a
          href="/contact"
          className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition"
        >
          Get Support →
        </a>
      </div>
    </main>
  );
}
