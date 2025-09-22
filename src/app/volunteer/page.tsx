"use client";
import { useState } from "react";

export default function Volunteer() {
  const [form, setForm] = useState({ name: "", email: "", interests: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just simulate submission
    console.log("Volunteer form submitted:", form);
    setSubmitted(true);
  };

  return (
    <main className="bg-[#F9F6F1] text-gray-800 py-16">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-4xl font-bold text-green-900 mb-6">Volunteer with Resinaro</h1>
        <p className="mb-8 text-lg">
          Resinaro is built by the community, for the community.  
          Volunteers play a vital role in helping people navigate life in the UK — from language support to event organizing and outreach.  
          By joining us, you’re not just helping with tasks, you’re strengthening solidarity and inclusivity for all.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow space-y-4">
            <div>
              <label className="block font-bold mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block font-bold mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block font-bold mb-1">Interests / Skills</label>
              <textarea
                name="interests"
                value={form.interests}
                onChange={handleChange}
                placeholder="Tell us how you’d like to help (events, translations, admin, outreach, etc.)"
                className="w-full border rounded px-3 py-2"
                rows={4}
              />
            </div>
            <button
              type="submit"
              className="bg-green-900 hover:bg-red-700 text-white px-6 py-2 rounded"
            >
              Register as Volunteer
            </button>
          </form>
        ) : (
          <div className="bg-white p-6 rounded shadow text-center">
            <h2 className="text-2xl font-bold text-green-900 mb-4">Thank you!</h2>
            <p>We’ve received your details and will contact you soon about volunteer opportunities.</p>
          </div>
        )}
      </div>
    </main>
  );
}
