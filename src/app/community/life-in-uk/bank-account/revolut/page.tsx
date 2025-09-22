"use client";
import Link from "next/link";

export default function RevolutPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">How to Open a Revolut Account in the UK (2025 Guide)</h1>
      <p className="mb-6 text-lg">
        Revolut is one of the fastest and easiest ways for migrants to open a UK bank account.
        It’s 100% app-based, requires no branch visits, and is widely accepted for payments, salary deposits, and rent.
        For migrants new to the UK, Revolut is an excellent first account.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Step-by-Step Guide</h2>
      <ol className="list-decimal list-inside space-y-2">
        <li>Download the Revolut app on iOS or Android.</li>
        <li>Register with your email address and UK mobile number.</li>
        <li>Verify your identity by scanning your passport or BRP.</li>
        <li>Upload proof of address (utility bill, tenancy agreement, council tax bill).</li>
        <li>Once approved, you’ll receive your UK account number and sort code instantly.</li>
      </ol>

      <h2 className="text-2xl font-semibold mt-8 mb-4">FAQs</h2>
      <ul className="space-y-3">
        <li><strong>Do I need proof of address?</strong> Yes, but Revolut accepts a wide range of documents, including digital bills.</li>
        <li><strong>Can I use Revolut for my salary?</strong> Yes, you get a UK account number and sort code for direct deposits.</li>
        <li><strong>Is Revolut safe?</strong> Revolut is FCA regulated in the UK and funds are protected up to £85,000.</li>
      </ul>

      <div className="bg-green-100 p-6 rounded-lg mt-10 text-center">
        <h3 className="text-lg font-semibold mb-4">Open a Revolut Account Today</h3>
        <p className="mb-4">Fast, easy, and perfect for migrants arriving in the UK.</p>
        <a
          href="https://revolut.com" 
          target="_blank"
          className="inline-block bg-green-900 text-white px-6 py-3 rounded hover:bg-green-700 transition"
        >
          Open Revolut Account →
        </a>
      </div>
    </main>
  );
}
