import ServiceForm from "../../../../components/ServiceForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bureaucracy Help | Resinaro",
  description: "Cut through the red tape — Resinaro helps you with Italian and UK admin."
};

export default function BureaucracyHelpPage() {
  return (
    <main className="bg-neutral-50 text-green-900 py-12 px-4 min-h-screen">
      <section className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Bureaucracy Help (SPID, AIRE, Benefits, and More)</h1>
        <p className="italic text-lg text-green-800 mb-6">Cut through the red tape — Resinaro helps you with Italian and UK admin.</p>
      </section>
      <section className="max-w-2xl mx-auto mb-10">
        <h2 className="text-xl font-bold mb-2">What’s Included</h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>AIRE registration support (Anagrafe degli Italiani Residenti all’Estero).</li>
          <li>SPID setup for accessing Italian digital services.</li>
          <li>Guidance with UK benefit applications.</li>
          <li>Italian ID Card assistance: help obtaining or renewing your Italian ID card in the UK, including document guidance, appointment booking, and application support.</li>
          <li>General bureaucratic paperwork support (letters, forms, translations).</li>
        </ul>
        <h2 className="text-xl font-bold mb-2">Documents You’ll Need</h2>
        <ul className="list-disc list-inside space-y-2 mb-2">
          <li>Valid ID or passport.</li>
          <li>Proof of UK residence.</li>
          <li>Any official forms/letters related to your request.</li>
        </ul>
  <div className="italic text-green-800 mt-2">Service Fee: £30 — helps us provide fair, transparent assistance.</div>
      </section>
      <ServiceForm />
      <section className="w-full bg-green-800 py-8 mt-12">
        <div className="max-w-2xl mx-auto text-center text-white">
          <p className="text-lg mb-4">Need urgent help? Contact us directly at <a href="mailto:help@resinaro.com" className="underline text-amber-300">help@resinaro.com</a></p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md mx-auto">
            <a href="/contact" className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-2 rounded-lg shadow w-full sm:w-auto">Contact Us</a>
            <a href="/contact" className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-lg shadow w-full sm:w-auto">Get Help</a>
          </div>
        </div>
      </section>
    </main>
  );
}
