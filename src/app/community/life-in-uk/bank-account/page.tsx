"use client";
import Link from "next/link";

export default function BankAccountPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">
        Opening a UK Bank Account as a Migrant (2025 Guide)
      </h1>
      <p className="mb-6 text-lg">
        Opening a bank account is one of the first steps for migrants in the UK. Without it,
        getting paid, renting a home, or building your credit history becomes very difficult.
        This guide explains the documents you’ll need, which banks are best for migrants,
        and how to avoid rejection. Resinaro makes the process smoother with clear, step-by-step help.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Documents You Will Need</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Proof of identity: passport or biometric residence permit (BRP)</li>
        <li>Proof of address: utility bill, tenancy agreement, or council tax bill</li>
        <li>Visa or immigration status, if applicable</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Top Banks for Migrants</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <Link href="/community/life-in-uk/bank-account/revolut">
          <div className="p-4 border rounded-lg shadow hover:shadow-md transition">
            <h3 className="font-bold">Revolut</h3>
            <p>Open a UK account in minutes via mobile app — perfect for new arrivals.</p>
          </div>
        </Link>
        <Link href="/community/life-in-uk/bank-account/monzo">
          <div className="p-4 border rounded-lg shadow hover:shadow-md transition">
            <h3 className="font-bold">Monzo</h3>
            <p>Popular app-based bank, easy setup, great budgeting tools.</p>
          </div>
        </Link>
        <Link href="/community/life-in-uk/bank-account/starling">
          <div className="p-4 border rounded-lg shadow hover:shadow-md transition">
            <h3 className="font-bold">Starling</h3>
            <p>Free everyday banking with excellent customer service and no hidden fees.</p>
          </div>
        </Link>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Tips for a Smooth Process</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Book your appointment online before visiting a branch (if required).</li>
        <li>Always bring both original and copies of your documents.</li>
        <li>If proof of address is an issue, some banks accept HMRC or NHS letters.</li>
      </ul>

      <div className="bg-green-100 p-6 rounded-lg mt-10 text-center">
        <h3 className="text-lg font-semibold mb-4">Need help opening your account?</h3>
        <p className="mb-4">
          Resinaro helps migrants secure UK bank accounts quickly and without stress.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-green-900 text-white px-6 py-3 rounded hover:bg-green-700 transition"
        >
          Contact Us for Assistance →
        </Link>
      </div>
    </main>
  );
}
