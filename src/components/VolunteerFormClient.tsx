"use client";
import Link from "next/link";
import { p, useLocaleFromPathname } from "@/lib/localePath";
// src/components/VolunteerFormClient.tsx
import { useEffect, useState } from "react";

type FormState = {
  name: string;
  email: string;
  interests: string;
  website?: string; // honeypot
  consent: boolean;
};

const initialForm: FormState = {
  name: "",
  email: "",
  interests: "",
  website: "",
  consent: false,
};

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function VolunteerFormClient() {
  const locale = useLocaleFromPathname();
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [submittedName, setSubmittedName] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  function validate(f: FormState) {
    const e: Record<string, string> = {};
    if (!f.name || f.name.trim().length < 2) e.name = "Please provide your full name.";
    if (!f.email || !emailRe.test(f.email)) e.email = "Please provide a valid email address.";
    if (!f.interests || f.interests.trim().length < 10)
      e.interests = "Please describe how you can help (minimum 10 characters).";
    if (!f.consent) e.consent = "Please confirm you accept our privacy policy to proceed.";
    return e;
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value, type } = e.target as HTMLInputElement | HTMLTextAreaElement;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setSubmitError(null);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitError(null);

    const validation = validate(form);
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      const firstKey = Object.keys(validation)[0];
      const el = document.querySelector(`[name="${firstKey}"]`) as HTMLElement | null;
      el?.focus();
      return;
    }

    // Honeypot: silent spam trap
    if (form.website && form.website.trim().length > 0) {
      setSubmitError("Submission flagged as spam.");
      return;
    }

    setLoading(true);

    const payload = {
      name: form.name.trim(),
      email: form.email.trim(),
      interests: form.interests.trim(),
      timestamp: new Date().toISOString(),
    };

    try {
      const res = await fetch("/api/volunteer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setSubmittedName(payload.name.split(" ")[0] ?? payload.name);
        setForm(initialForm);
        setErrors({});
      } else {
        setSubmitError("Unable to submit at this time. Please try again later.");
        console.error("volunteer submission failed", res.status);
      }
    } catch (err) {
      console.error("volunteer submission error", err);
      setSubmitError("Network error. Check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (submitError) {
      const elm = document.getElementById("form-status");
      elm?.focus();
    }
  }, [submitError]);

  if (submittedName) {
    return (
      <div className="bg-white p-8 rounded-2xl shadow-md text-center">
        <h2 className="text-2xl font-semibold text-green-900 mb-2">Thank you, {submittedName}!</h2>
        <p className="text-gray-700">We will contact you soon about volunteer opportunities. If this is urgent, please <Link href={p(locale, "/contact")} className="underline text-green-900">contact us</Link>.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-md space-y-5" noValidate>
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          required
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "error-name" : undefined}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-300"
          minLength={2}
        />
        {errors.name && <p id="error-name" className="text-red-600 text-sm mt-1">{errors.name}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "error-email" : undefined}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-300"
        />
        {errors.email && <p id="error-email" className="text-red-600 text-sm mt-1">{errors.email}</p>}
      </div>

      {/* Interests */}
      <div>
        <label htmlFor="interests" className="block text-sm font-medium text-gray-700 mb-1">Interests / Skills</label>
        <textarea
          id="interests"
          name="interests"
          value={form.interests}
          onChange={handleChange}
          placeholder="Briefly tell us how you would like to help (events, translations, admin, outreach, etc.)"
          rows={6}
          required
          aria-invalid={!!errors.interests}
          aria-describedby={errors.interests ? "error-interests" : undefined}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-300"
        />
        {errors.interests && <p id="error-interests" className="text-red-600 text-sm mt-1">{errors.interests}</p>}
      </div>

      {/* Honeypot */}
      <div style={{ display: "none" }} aria-hidden>
        <label htmlFor="website">Website</label>
        <input id="website" name="website" value={form.website} onChange={handleChange} tabIndex={-1} autoComplete="off" />
      </div>

      {/* Consent */}
      <div className="flex items-start gap-3">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          checked={form.consent}
          onChange={(e) => setForm((prev) => ({ ...prev, consent: (e.target as HTMLInputElement).checked }))}
          className="mt-1 h-4 w-4 text-green-900 border-gray-300 rounded"
        />
        <label htmlFor="consent" className="text-sm text-gray-700">
          I confirm I have read the <Link href={p(locale, "/privacy-policy")} className="underline text-green-900">privacy policy</Link> and I consent to being contacted about volunteering.
        </label>
      </div>
      {errors.consent && <p id="error-consent" className="text-red-600 text-sm mt-1">{errors.consent}</p>}

      {/* Error status */}
      {submitError && (
        <div id="form-status" role="alert" aria-live="assertive" className="text-red-700 bg-red-50 border border-red-100 p-3 rounded">
          {submitError}
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={loading}
          className={`inline-flex items-center justify-center rounded-lg bg-green-900 text-white px-5 py-2 text-sm font-semibold shadow ${loading ? "opacity-70 cursor-wait" : "hover:bg-green-800"}`}
        >
          {loading ? "Submitting..." : "Register Interest as a Volunteer"}
        </button>

        <button
          type="button"
          onClick={() => { setForm(initialForm); setErrors({}); setSubmitError(null); }}
          className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-4 py-2 text-sm"
        >
          Reset
        </button>
      </div>
    </form>
  );
}
