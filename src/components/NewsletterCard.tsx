export default function NewsletterCard() {
  const mailto =
  "mailto:resinaro@proton.me?subject=Subscribe%20to%20Resinaro%20Blog&body=Please%20subscribe%20me%20to%20blog%20updates.";
  return (
    <section className="mt-10">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-green-900">Stay updated — no spam, just useful guides</h3>
            <p className="text-gray-700">Step-by-step posts on passports, AIRE, NIN, NHS, housing, and more.</p>
          </div>
          <a
            href={mailto}
            className="inline-flex items-center justify-center rounded-lg bg-green-900 text-white px-5 py-3 font-medium shadow hover:bg-green-800"
          >
            Subscribe via Email
          </a>
        </div>
      </div>
    </section>
  );
}