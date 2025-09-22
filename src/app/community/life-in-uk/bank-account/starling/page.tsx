"use client";
import Link from "next/link";

export default function StarlingPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">How to Open a Starling Account in the UK (2025 Guide)</h1>
      <p className="mb-6 text-lg">
        Starling Bank is an award-winning UK bank offering free everyday banking with no hidden fees.
        For migrants, Starling is a strong choice because it provides excellent customer service,
        simple account setup, and full FSCS protection.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Step-by-Step Guide</h2>
      <ol className="list-decimal list-inside space-y-2">
        <li>Download the Starling app (iOS or Android).</li>
        <li>Register with your UK mobile number and email address.</li>
        <li>Upload your passport or BRP for ID verification.</li>
        <li>Provide proof of UK address (utility bill, tenancy agreement, council tax).</li>
        <li>Receive your account details and debit card within a few days.</li>
      </ol>

      <h2 className="text-2xl font-semibold mt-8 mb-4">FAQs</h2>
      <ul className="space-y-3">
        <li><strong>Is Starling really free?</strong> Yes, there are no monthly fees for personal accounts.</li>
        <li><strong>Can I open as a new arrival?</strong> Yes, as long as you have valid ID and proof of UK address.</li>
        <li><strong>Is my money safe?</strong> Starling is FSCS protected — your money is covered up to £85,000.</li>
      </ul>

      <div className="bg-green-100 p-6 rounded-lg mt-10 text-center">
        <h3 className="text-lg font-semibold mb-4">Open a Starling Account Today</h3>
        <p className="mb-4">Trusted, free, and secure — perfect for migrants in the UK.</p>
        <a
          href="https://starlingbank.com" 
          target="_blank"
          className="inline-block bg-green-900 text-white px-6 py-3 rounded hover:bg-green-700 transition"
        >
          Open Starling Account →
        </a>
      </div>
    </main>
  );
}
