"use client";
import { useState } from "react";

 type FormState = {
  name: string;
  email: string;
  phone: string;
  file: File | null;
  message: string;
  privacy: boolean;
};

export default function ServiceForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    file: null,
    message: "",
    privacy: false,
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    const key = target.name as keyof FormState;

    let nextValue: FormState[keyof FormState];
    if (target instanceof HTMLInputElement && target.type === "checkbox") {
      nextValue = target.checked as FormState[keyof FormState];
    } else if (target instanceof HTMLInputElement && target.type === "file") {
      nextValue = (target.files?.[0] ?? null) as FormState[keyof FormState];
    } else {
      nextValue = (target as HTMLInputElement | HTMLTextAreaElement).value as FormState[keyof FormState];
    }

    setForm((prev) => ({
      ...prev,
      [key]: nextValue,
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.privacy) return;
    // Simulate form submission
    console.log({ ...form, file: form.file ? form.file.name : null });
    setSubmitted(true);
  }

  return (
    <form
      className="max-w-xl mx-auto bg-white rounded-xl shadow p-6 mt-8 mb-12"
      onSubmit={handleSubmit}
      noValidate
      aria-label="Service request form"
    >
      <div className="mb-4">
        <label htmlFor="name" className="font-bold block mb-1 text-green-900">
          Full Name <span className="text-red-600">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={handleChange}
          className="border rounded-lg px-3 py-2 w-full"
          autoComplete="name"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="font-bold block mb-1 text-green-900">
          Email <span className="text-red-600">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          className="border rounded-lg px-3 py-2 w-full"
          autoComplete="email"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="font-bold block mb-1 text-green-900">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          className="border rounded-lg px-3 py-2 w-full"
          autoComplete="tel"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="file" className="font-bold block mb-1 text-green-900">
          File Upload
        </label>
        <input
          id="file"
          name="file"
          type="file"
          accept=".pdf,.jpg,.png"
          onChange={handleChange}
          className="border rounded-lg px-3 py-2 w-full bg-white"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="font-bold block mb-1 text-green-900">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          className="border rounded-lg px-3 py-2 w-full"
        />
      </div>
      <div className="mb-4 flex items-center">
        <input
          id="privacy"
          name="privacy"
          type="checkbox"
          checked={form.privacy}
          onChange={handleChange}
          required
          className="mr-2"
        />
        <label htmlFor="privacy" className="text-green-900">
          I agree to the <a href="/privacy" className="underline text-green-800 hover:text-green-900">Privacy Policy</a> <span className="text-red-600">*</span>
        </label>
      </div>
      <button
        type="submit"
        className="bg-green-700 hover:bg-green-800 text-white rounded-lg px-6 py-2 font-semibold mt-2 w-full md:w-auto"
        disabled={!form.privacy}
      >
        Submit
      </button>
      {submitted && (
        <div className="mt-4 text-green-800 font-semibold">Thank you! Weve received your request.</div>
      )}
    </form>
  );
}
