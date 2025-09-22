import ServiceForm from "../../../../components/ServiceForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mental Health Support | Resinaro",
  description: "Free, inclusive mental health guidance and signposting."
};

export default function MentalHealthSupportPage() {
  return (
    <main className="bg-neutral-50 text-green-900 py-12 px-4 min-h-screen">
      <section className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Mental Health Support</h1>
        <p className="italic text-lg text-green-800 mb-6">Free, inclusive mental health guidance and signposting.</p>
      </section>
      <section className="max-w-2xl mx-auto mb-10">
        <h2 className="text-xl font-bold mb-2">What’s Included</h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>Community support groups (online and offline).</li>
          <li>Guidance on how to access NHS mental health services.</li>
          <li>Practical coping resources for stress, loneliness, and anxiety.</li>
          <li>Confidential, compassionate listening — no judgment.</li>
        </ul>
        <h2 className="text-xl font-bold mb-2">Documents You’ll Need</h2>
  <div className="mb-2">No documents required.</div>
  <div className="italic text-green-800 mt-2">Free Service</div>
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
