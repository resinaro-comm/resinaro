import ServiceForm from "../../../../components/ServiceForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "National Insurance (NIN) Support | Resinaro",
  description: "Step-by-step help with NIN applications and replacements."
};

export default function NINSupportPage() {
  return (
    <main className="bg-neutral-50 text-green-900 py-12 px-4 min-h-screen">
      <section className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">National Insurance (NIN) Support</h1>
        <p className="italic text-lg text-green-800 mb-6">Step-by-step help with NIN applications and replacements.</p>
      </section>
      <section className="max-w-2xl mx-auto mb-10">
        <h2 className="text-xl font-bold mb-2">What’s Included</h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>Guidance on applying for a new National Insurance Number.</li>
          <li>Assistance with lost or forgotten NIN.</li>
          <li>Help preparing documents and contacting HMRC.</li>
          <li>Practical advice on timelines and avoiding delays.</li>
        </ul>
        <h2 className="text-xl font-bold mb-2">Documents You’ll Need</h2>
        <ul className="list-disc list-inside space-y-2 mb-2">
          <li>Passport or valid ID.</li>
          <li>Proof of address (utility bill, council tax, bank statement).</li>
          <li>Employment details (if requested by HMRC).</li>
        </ul>
  <div className="italic text-green-800 mt-2">Service Fee: £20 — supports admin and follow-up help.</div>
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
