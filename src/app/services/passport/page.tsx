import ServiceForm from "../../../../components/ServiceForm";

export default function PassportServicePage() {
  return (
    <main className="bg-neutral-50 text-green-900 py-12 px-4 min-h-screen">
      <section className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Passport & Consular Services</h1>
        <p className="italic text-lg text-green-800 mb-6">Fast, transparent support for booking Italian passport appointments in the UK.</p>
      </section>
      <section className="max-w-2xl mx-auto mb-10">
        <h2 className="text-xl font-bold mb-2">What’s Included</h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>Booking passport appointments with Italian consulates in London, Manchester, and Edinburgh.</li>
          <li>Guidance for first-time applications and renewals.</li>
          <li>Help with urgent requests and lost/stolen passports.</li>
          <li>Transparent updates on waiting times and requirements.</li>
        </ul>
        <h2 className="text-xl font-bold mb-2">Documents You’ll Need</h2>
        <ul className="list-disc list-inside space-y-2 mb-2">
          <li>Proof of address in the UK (utility bill, tenancy agreement, bank statement).</li>
          <li>Current passport (if renewing).</li>
          <li>2x biometric passport photos.</li>
          <li>Birth certificate (first application).</li>
        </ul>
  <div className="italic text-green-800 mt-2">Service Fee: £40–£60 — covers admin, research, and community support.</div>
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
