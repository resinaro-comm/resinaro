"use client";

export default function MonzoPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">How to Open a Monzo Account in the UK (2025 Guide)</h1>
      <p className="mb-6 text-lg">
        Monzo is a popular digital bank in the UK known for its user-friendly app and budgeting tools.
        For migrants, it’s a great option thanks to quick online signup, transparent fees, and no branch visits.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Step-by-Step Guide</h2>
      <ol className="list-decimal list-inside space-y-2">
        <li>Download the Monzo app from iOS or Android.</li>
        <li>Sign up with your UK mobile number and email.</li>
        <li>Verify your identity by recording a short selfie video and uploading your passport/BRP.</li>
        <li>Provide proof of UK address (digital bills often accepted).</li>
        <li>Wait for approval — usually within 1–2 hours.</li>
      </ol>

      <h2 className="text-2xl font-semibold mt-8 mb-4">FAQs</h2>
      <ul className="space-y-3">
        <li><strong>Can I open without proof of address?</strong> You’ll need at least one form of address proof, but Monzo accepts digital bills and tenancy contracts.</li>
        <li><strong>How much does it cost?</strong> Monzo’s standard account is free with no monthly fees.</li>
        <li><strong>Can I get a debit card?</strong> Yes, Monzo sends a Mastercard debit card to your UK address.</li>
      </ul>

      <div className="bg-green-100 p-6 rounded-lg mt-10 text-center">
        <h3 className="text-lg font-semibold mb-4">Open a Monzo Account Today</h3>
        <p className="mb-4">Simple, fast, and free — ideal for migrants starting life in the UK.</p>
        <a
          href="https://monzo.com" 
          target="_blank"
          className="inline-block bg-green-900 text-white px-6 py-3 rounded hover:bg-green-700 transition"
        >
          Open Monzo Account →
        </a>
      </div>
    </main>
  );
}
