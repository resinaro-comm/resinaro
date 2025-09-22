"use client";

import { useState } from "react";

export default function Contact() {
  const [formStatus, setFormStatus] = useState("");
  const [fileName, setFileName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setFormStatus("✅ Message sent successfully!");
        form.reset();
        setFileName("");
      } else {
        setFormStatus("❌ Something went wrong. Please try again.");
      }
    } catch (err) {
      setFormStatus("⚠️ Network error, please try later.");
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <main className="bg-[#F9F6F1] text-gray-800 py-16">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-4xl font-bold text-green-900 mb-6">Contact Us</h1>
        <p className="mb-8">
          Have a question, need support, or want to get involved?  
          Reach out using the form below or contact us directly via email.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input type="text" name="name" required className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input type="email" name="email" required className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              name="message"
              rows={5}
              required
              className="w-full border rounded px-3 py-2"
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Upload Documents</label>
            <input
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              className="w-full"
              onChange={handleFileChange}
            />
            {fileName && <p className="text-sm text-gray-600 mt-2">File selected: {fileName}</p>}
          </div>
          <button
            type="submit"
            disabled={loading}
            className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
          {formStatus && <p className="mt-4">{formStatus}</p>}
        </form>

        <div className="mt-12 bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Direct Contact</h2>
          <p>
            <strong>Email:</strong> help@resinaro.com <br />
            <strong>Phone:</strong> +44 20 1234 5678 <br />
            <strong>Address:</strong> Resinaro Community, London, UK
          </p>
        </div>
      </div>
    </main>
  );
}
