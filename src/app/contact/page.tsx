"use client";

import { useState } from "react";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_TYPES = ["application/pdf", "image/jpeg", "image/png"];
const MAX_FILES = 5;

type FAQ = {
  question: string;
  answer: string | React.ReactElement;
};

export default function Contact() {
  const [formStatus, setFormStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // handle files selected via the hidden input
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const newFiles = Array.from(e.target.files);

    if (selectedFiles.length + newFiles.length > MAX_FILES) {
      setFormStatus(`❌ You can only upload up to ${MAX_FILES} files.`);
      return;
    }

    const validFiles = newFiles.filter((file) => {
      if (file.size > MAX_FILE_SIZE) {
        setFormStatus(`❌ ${file.name} is larger than 5MB.`);
        return false;
      }
      if (!ALLOWED_TYPES.includes(file.type)) {
        setFormStatus(`❌ ${file.name} is not an allowed type.`);
        return false;
      }
      return true;
    });

    setSelectedFiles((prev) => [...prev, ...validFiles]);
    e.currentTarget.value = ""; // reset native input so same file can be added later if needed
  };

  const removeFile = (index: number) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  // Submit: build FormData from the form, then append selectedFiles array
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setFormStatus("");

    const form = e.currentTarget;

    // use browser-provided FormData to get text fields and checkbox states reliably
    const formData = new FormData(form);

    // append the selectedFiles array into formData as "files"
    selectedFiles.forEach((file) => {
      formData.append("files", file, file.name);
    });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData, // browser sets the correct multipart/form-data headers
      });

      const json = await res.json().catch(() => ({}));

      if (res.ok) {
        setFormStatus("✅ Message sent successfully!");
        form.reset();
        setSelectedFiles([]);
      } else {
        // show server's error message if present
        setFormStatus(`❌ Something went wrong: ${json.error || "Please try again."}`);
      }
    } catch (err) {
      console.error("Network error sending form:", err);
      setFormStatus("⚠️ Network error, please try later.");
    } finally {
      setLoading(false);
    }
  };

  const faqs: FAQ[] = [
    {
      question: "Why do you need my documents?",
      answer: (
        <>
          We only request documents when absolutely necessary (e.g., passport, proof of address, birth certificates).
          This helps us complete consular bookings, identity checks or other administrative tasks. Under UK GDPR we only
          use your data for the service you requested.
        </>
      ),
    },
    {
      question: "How will my data be stored?",
      answer: (
        <>
          Files are stored privately in our secured Google Drive folder (not public). Only authorised Resinaro staff
          can access them. We follow UK GDPR principles (integrity & confidentiality).
        </>
      ),
    },
    {
      question: "How long do you keep my documents?",
      answer: (
        <>
          We keep documents only for as long as necessary to fulfil the service and any legal retention obligations.
          After completion files are reviewed and removed unless you ask us to keep them.
        </>
      ),
    },
    {
      question: "What rights do I have under UK GDPR?",
      answer: (
        <>
          You can access, correct or request deletion of your data, object to processing, and request retention details.
          We will respond within one month in line with ICO guidance:{" "}
          <a href="https://ico.org.uk/for-the-public/" target="_blank" rel="noopener noreferrer" className="text-green-700 underline">
            ICO: For the public
          </a>
          .
        </>
      ),
    },
  ];

  return (
    <main className="bg-[#F9F6F1] text-gray-800 py-16">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-4xl font-bold text-green-900 mb-2">Contact Us</h1>
        <p className="mb-8 text-lg text-gray-700">
          Fill out the details below and we’ll get back to you as soon as possible.
        </p>

        <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-6 bg-white p-6 rounded-lg shadow">
          <input name="firstName" type="text" required placeholder="First Name" className="w-full border rounded px-3 py-2" />
          <input name="lastName" type="text" required placeholder="Last Name" className="w-full border rounded px-3 py-2" />
          <input name="phone" type="tel" required placeholder="Phone Number" className="w-full border rounded px-3 py-2" />
          <input name="email" type="email" required placeholder="Email" className="w-full border rounded px-3 py-2" />
          <textarea name="message" rows={5} placeholder="Message" required className="w-full border rounded px-3 py-2" />

          {/* File upload */}
          <div>
            <label className="block text-sm font-medium mb-2">Upload Documents</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:bg-gray-50">
              {/* Hidden native input — user clicks the label below */}
              <input
                id="fileUpload"
                type="file"
                name="files"
                multiple
                accept=".pdf,.jpg,.jpeg,.png"
                className="hidden"
                onChange={handleFileChange}
              />
              <label htmlFor="fileUpload" className="cursor-pointer text-green-700 font-semibold">
                📎 Click here to choose up to {MAX_FILES} files
              </label>
              <p className="text-sm text-gray-600 mt-2">Allowed: PDF, JPG, PNG (max 5MB each).</p>
            </div>

            {/* Show selected files */}
            <div className="mt-4">
              <p className="font-medium">Files uploaded so far: {selectedFiles.length}</p>
              <ul className="mt-2 space-y-1 text-sm">
                {selectedFiles.map((file, index) => (
                  <li key={index} className="flex justify-between items-center border rounded px-2 py-1">
                    <span>
                      File {index + 1}: {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
                    </span>
                    <button type="button" onClick={() => removeFile(index)} className="text-red-600 text-xs ml-4 hover:underline">
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex items-start space-x-2">
            <input type="checkbox" name="consent" required className="mt-1" />
            <label className="text-sm text-gray-700">
              I agree to Resinaro handling my data in line with the{" "}
              <a href="/privacy-policy" className="text-green-700 underline" target="_blank" rel="noopener noreferrer">
                Privacy Policy
              </a>{" "}
              and UK GDPR.
            </label>
          </div>

          <button type="submit" disabled={loading} className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800">
            {loading ? "Sending..." : "Send Message"}
          </button>

          {formStatus && <p className="mt-4">{formStatus}</p>}
        </form>

        {/* FAQ Accordion */}
        <div className="mt-12 bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Privacy & Data Protection FAQ</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-t pt-4">
                <button className="w-full text-left font-semibold text-green-900" onClick={() => setOpenIndex(openIndex === idx ? null : idx)}>
                  {faq.question}
                </button>
                {openIndex === idx && <div className="mt-2 text-gray-700">{faq.answer}</div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
