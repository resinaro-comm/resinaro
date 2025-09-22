"use client";

import { useState } from "react";

export default function Donate() {
  const [amount, setAmount] = useState<number | string>(20);
  const [recurring, setRecurring] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(
      `Thank you for your ${
        recurring ? "monthly" : "one-time"
      } donation of £${amount}! (Payment integration coming soon)`
    );
  };

  return (
    <main className="bg-[#F9F6F1] text-gray-800 py-16">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-4xl font-bold text-green-900 mb-6">Support Resinaro</h1>
        <p className="mb-8 text-lg">
          Your donation keeps our services running and helps people across the UK
          with documents, mental health, and integration support. Every contribution makes
          a difference.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white p-6 rounded-lg shadow"
        >
          <h2 className="text-2xl font-bold mb-4">Choose an amount</h2>

          <div className="flex gap-4 mb-4">
            {[10, 20, 40, 60].map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => setAmount(value)}
                className={`px-4 py-2 rounded border ${
                  amount === value
                    ? "bg-green-700 text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                £{value}
              </button>
            ))}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Custom amount (£)</label>
            <input
              type="number"
              min="1"
              placeholder="Enter amount"
              className="w-full border rounded px-3 py-2"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>

          <div className="flex items-center mt-4">
            <input
              id="recurring"
              type="checkbox"
              className="mr-2"
              checked={recurring}
              onChange={() => setRecurring(!recurring)}
            />
            <label htmlFor="recurring">Make this a monthly donation</label>
          </div>

          <button
            type="submit"
            className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800 mt-6"
          >
            Donate Securely
          </button>

          {status && <p className="text-green-700 mt-4">{status}</p>}
        </form>

        <div className="mt-12 bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Where your donation goes</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Help people book passports, ID cards, and NIN appointments</li>
            <li>Provide mental health resources and community support</li>
            <li>Run workshops and integration programs</li>
            <li>Support our volunteers and outreach initiatives</li>
          </ul>
        </div>

        <p className="mt-6 text-sm text-gray-500">
          Payments will be securely processed via Stripe or PayPal.  
          Resinaro does not store your card details.
        </p>
      </div>
    </main>
  );
}
