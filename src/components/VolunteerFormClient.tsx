"use client";

// src/components/VolunteerFormClient.tsx

import { useEffect, useState } from "react";
import Link from "next/link";
import { p } from "@/lib/localePath";

type Locale = "en" | "it";

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

type Props = {
  locale: Locale;
};

export default function VolunteerFormClient({ locale }: Props) {
  const copy =
    locale === "it"
      ? {
          stepTitle: "Step 1 · Raccontaci chi sei",
          stepIntro:
            "Bastano pochi minuti. Indica competenze, città e disponibilità: ti risponderemo se c’è un buon match con i ruoli attuali.",
          labelName: "Nome e cognome",
          labelEmail: "Email",
          labelInterests: "Interessi / competenze",
          phInterests:
            "Come ti piacerebbe aiutare? (es. traduzioni IT–EN, eventi a Manchester, social media, amministrazione, 3–4 ore a settimana, ecc.)",
          consentLabelPrefix: "Confermo di aver letto la ",
          consentLabelLink: "privacy policy",
          consentLabelSuffix:
            " e acconsento a essere contattata/o riguardo opportunità di volontariato.",
          btnSubmit: "Invia candidatura come volontaria/o",
          btnSubmitting: "Invio in corso...",
          btnReset: "Reset",
          thanksTitle: "Grazie,",
          thanksTail: "!",
          thanksBody:
            "Ti contatteremo presto per le opportunità di volontariato. Se è urgente, puoi anche ",
          thanksContact: "contattarci qui",
          errorName: "Per favore inserisci il tuo nome e cognome.",
          errorEmail: "Per favore inserisci un indirizzo email valido.",
          errorInterests:
            "Descrivi brevemente come puoi aiutare (almeno 10 caratteri).",
          errorConsent:
            "Per procedere devi confermare di accettare la privacy policy.",
          errorSpam: "Invio segnalato come spam.",
          errorServer:
            "Al momento non è possibile inviare il form. Riprova più tardi.",
          errorNetwork:
            "Errore di rete. Controlla la connessione e riprova.",
        }
      : {
          stepTitle: "Step 1 · Tell us about you",
          stepIntro:
            "This takes just a couple of minutes. Share your skills, city and availability so we can see if there’s a good match.",
          labelName: "Full name",
          labelEmail: "Email",
          labelInterests: "Interests / skills",
          phInterests:
            "Briefly tell us how you’d like to help (e.g. IT–EN translations, events in London, admin, social media, 3–4 hours per week, etc.)",
          consentLabelPrefix: "I confirm I have read the ",
          consentLabelLink: "privacy policy",
          consentLabelSuffix:
            " and I consent to being contacted about volunteering.",
          btnSubmit: "Register interest as a volunteer",
          btnSubmitting: "Submitting...",
          btnReset: "Reset",
          thanksTitle: "Thank you,",
          thanksTail: "!",
          thanksBody:
            "We’ll contact you soon about volunteer opportunities. If this is urgent, please ",
          thanksContact: "contact us",
          errorName: "Please provide your full name.",
          errorEmail: "Please provide a valid email address.",
          errorInterests:
            "Please describe how you can help (minimum 10 characters).",
          errorConsent:
            "Please confirm you accept our privacy policy to proceed.",
          errorSpam: "Submission flagged as spam.",
          errorServer:
            "Unable to submit at this time. Please try again later.",
          errorNetwork:
            "Network error. Check your connection and try again.",
        };

  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [submittedName, setSubmittedName] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  function validate(f: FormState) {
    const e: Record<string, string> = {};
    if (!f.name || f.name.trim().length < 2) e.name = copy.errorName;
    if (!f.email || !emailRe.test(f.email)) e.email = copy.errorEmail;
    if (!f.interests || f.interests.trim().length < 10)
      e.interests = copy.errorInterests;
    if (!f.consent) e.consent = copy.errorConsent;
    return e;
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value, type } = e.target as
      | HTMLInputElement
      | HTMLTextAreaElement;
    const nextValue =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : value;

    setForm((prev) => ({
      ...prev,
      [name]: nextValue,
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
      const el = document.querySelector(
        `[name="${firstKey}"]`
      ) as HTMLElement | null;
      el?.focus();
      return;
    }

    // Honeypot: silent spam trap
    if (form.website && form.website.trim().length > 0) {
      setSubmitError(copy.errorSpam);
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
        const firstName = payload.name.split(" ")[0] ?? payload.name;
        setSubmittedName(firstName);
        setForm(initialForm);
        setErrors({});
      } else {
        setSubmitError(copy.errorServer);
        console.error("volunteer submission failed", res.status);
      }
    } catch (err) {
      console.error("volunteer submission error", err);
      setSubmitError(copy.errorNetwork);
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
        <h2 className="text-2xl font-semibold text-green-900 mb-2">
          {copy.thanksTitle} {submittedName}
          {copy.thanksTail}
        </h2>
        <p className="text-gray-700">
          {copy.thanksBody}
          <Link
            href={p(locale, "/contact")}
            className="underline text-green-900"
          >
            {copy.thanksContact}
          </Link>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-2xl shadow-md space-y-5"
      noValidate
    >
      <div className="mb-1">
        <h2 className="text-base font-semibold text-green-900">
          {copy.stepTitle}
        </h2>
        <p className="mt-1 text-xs text-gray-600">{copy.stepIntro}</p>
      </div>

      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {copy.labelName}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          required
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "error-name" : undefined}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-300"
          minLength={2}
        />
        {errors.name && (
          <p id="error-name" className="text-red-600 text-sm mt-1">
            {errors.name}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {copy.labelEmail}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "error-email" : undefined}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-300"
        />
        {errors.email && (
          <p id="error-email" className="text-red-600 text-sm mt-1">
            {errors.email}
          </p>
        )}
      </div>

      {/* Interests */}
      <div>
        <label
          htmlFor="interests"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {copy.labelInterests}
        </label>
        <textarea
          id="interests"
          name="interests"
          value={form.interests}
          onChange={handleChange}
          placeholder={copy.phInterests}
          rows={6}
          required
          aria-invalid={!!errors.interests}
          aria-describedby={errors.interests ? "error-interests" : undefined}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-300"
        />
        {errors.interests && (
          <p id="error-interests" className="text-red-600 text-sm mt-1">
            {errors.interests}
          </p>
        )}
      </div>

      {/* Honeypot */}
      <div style={{ display: "none" }} aria-hidden>
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          value={form.website}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Consent */}
      <div className="flex items-start gap-3">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          checked={form.consent}
          onChange={handleChange}
          className="mt-1 h-4 w-4 text-green-900 border-gray-300 rounded"
          aria-invalid={!!errors.consent}
          aria-describedby={errors.consent ? "error-consent" : undefined}
        />
        <label htmlFor="consent" className="text-sm text-gray-700">
          {copy.consentLabelPrefix}
          <Link
            href={p(locale, "/privacy-policy")}
            className="underline text-green-900"
          >
            {copy.consentLabelLink}
          </Link>
          {copy.consentLabelSuffix}
        </label>
      </div>
      {errors.consent && (
        <p id="error-consent" className="text-red-600 text-sm mt-1">
          {errors.consent}
        </p>
      )}

      {/* Error status */}
      {submitError && (
        <div
          id="form-status"
          role="alert"
          aria-live="assertive"
          className="text-red-700 bg-red-50 border border-red-100 p-3 rounded text-sm"
        >
          {submitError}
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={loading}
          className={`inline-flex items-center justify-center rounded-lg bg-green-900 text-white px-5 py-2 text-sm font-semibold shadow ${
            loading ? "opacity-70 cursor-wait" : "hover:bg-green-800"
          }`}
        >
          {loading ? copy.btnSubmitting : copy.btnSubmit}
        </button>

        <button
          type="button"
          onClick={() => {
            setForm(initialForm);
            setErrors({});
            setSubmitError(null);
          }}
          className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-4 py-2 text-sm"
        >
          {copy.btnReset}
        </button>
      </div>
    </form>
  );
}
