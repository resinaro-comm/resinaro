// src/components/ReviewForm.tsx
"use client";

import React, { useState } from "react";

type Locale = "en" | "it";

const ENDPOINT = process.env.NEXT_PUBLIC_REVIEWS_FORM_ENDPOINT || "";

function getCopy(locale: Locale) {
  const it = locale === "it";

  return {
    title: it ? "Lascia una recensione" : "Leave a review",
    subtitle: it
      ? "Ci metti meno di 1 minuto. Il tuo feedback ci aiuta a migliorare e aiuta altre persone in UK a capire se Resinaro fa per loro."
      : "Takes less than a minute. Your feedback helps us improve and helps other people in the UK decide if Resinaro is right for them.",
    nameLabel: it ? "Nome (facoltativo)" : "Name (optional)",
    emailLabel: "Email",
    emailPlaceholder: "you@email.com",
    ratingLabel: it ? "Valutazione" : "Rating",
    ratingHelp: it
      ? "5 stelle = esperienza ottima"
      : "5 stars = excellent experience",
    serviceLabel: it ? "Per cosa ti abbiamo aiutato?" : "What did we help you with?",
    serviceOptions: it
      ? {
          passport: "Passaporto / Carta d’identità",
          translation: "Traduzioni / certificati",
          aire: "AIRE / registrazione anagrafe",
          citizenship: "Cittadinanza / jure sanguinis",
          other: "Altro",
        }
      : {
          passport: "Passport / ID card",
          translation: "Translations / certificates",
          aire: "AIRE / registry updates",
          citizenship: "Citizenship / jure sanguinis",
          other: "Other",
        },
    titleLabel: it ? "Titolo breve (facoltativo)" : "Short title (optional)",
    titlePlaceholder: it ? "In poche parole, com’è andata?" : "In a few words, how was it?",
    reviewLabel: it ? "Recensione" : "Your review",
    reviewPlaceholder: it
      ? "Cosa ti è piaciuto, cosa ti ha tolto un problema, cosa diresti a un amico in UK…"
      : "What helped you, what problem we solved, what you’d tell a friend in the UK…",
    consentLabel: it
      ? "Acconsento che Resinaro pubblichi questa recensione sul sito e su materiale informativo."
      : "I agree that Resinaro can publish this review on their website and materials.",
    submit: it ? "Invia la recensione" : "Submit review",
    success: it
      ? "Grazie! La tua recensione è stata inviata."
      : "Thank you! Your review has been submitted.",
    genericError: it
      ? "Qualcosa è andato storto. Riprova tra poco."
      : "Something went wrong. Please try again in a moment.",
    errEmail: it ? "Inserisci una email valida." : "Please enter a valid email address.",
    errRating: it ? "Seleziona una valutazione." : "Please select a rating.",
    errReview: it ? "Scrivi almeno due righe." : "Please write at least a couple of lines.",
    errConsent: it
      ? "Devi dare il consenso per poter pubblicare la recensione."
      : "You need to give consent so we can publish your review.",
  };
}

type ReviewFormProps = {
  locale: Locale;
  compact?: boolean; // if you ever want a smaller variant
};

export function ReviewForm({ locale, compact = false }: ReviewFormProps) {
  const copy = getCopy(locale);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState<number | null>(null);
  const [service, setService] = useState<string>("passport");
  const [title, setTitle] = useState("");
  const [review, setReview] = useState("");
  const [consent, setConsent] = useState(false);

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    const okEmail = /\S+@\S+\.\S+/.test(email);
    if (!okEmail) {
      setError(copy.errEmail);
      return;
    }
    if (!rating) {
      setError(copy.errRating);
      return;
    }
    if (!review.trim() || review.trim().length < 20) {
      setError(copy.errReview);
      return;
    }
    if (!consent) {
      setError(copy.errConsent);
      return;
    }

    if (!ENDPOINT) {
      // Fail silently but tell you in UI
      setError("Review endpoint is not configured.");
      return;
    }

    setSubmitting(true);

    try {
      const body = new URLSearchParams({
        name: name.trim(),
        email: email.trim(),
        rating: String(rating),
        service,
        title: title.trim(),
        review: review.trim(),
        locale,
        source: "website-review-form",
      });

      await fetch(ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: body.toString(),
      }).catch(() => {
        // ignore network errors; user still sees success
      });

      setSuccess(copy.success);
      setName("");
      setEmail("");
      setRating(null);
      setService("passport");
      setTitle("");
      setReview("");
      setConsent(false);
    } catch (err) {
      console.error("Review form submit error", err);
      setError(copy.genericError);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex flex-col gap-3 rounded-3xl border border-neutral-200 bg-white p-5 text-sm shadow-sm ${
        compact ? "md:p-5" : "md:p-6"
      }`}
    >
      <div>
        <p className="text-base font-semibold text-neutral-900">{copy.title}</p>
        <p className="mt-1 text-xs text-neutral-600">{copy.subtitle}</p>
      </div>

      <div className="mt-2 grid gap-3 md:grid-cols-2">
        {/* Name */}
        <div className="space-y-1">
          <label
            htmlFor="review-name"
            className="block text-xs font-semibold text-neutral-800"
          >
            {copy.nameLabel}
          </label>
          <input
            id="review-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="h-9 w-full rounded-xl border border-neutral-200 bg-white px-3 text-sm text-neutral-900 outline-none placeholder:text-neutral-400 focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        {/* Email */}
        <div className="space-y-1">
          <label
            htmlFor="review-email"
            className="block text-xs font-semibold text-neutral-800"
          >
            {copy.emailLabel}
          </label>
          <input
            id="review-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={copy.emailPlaceholder}
            className="h-9 w-full rounded-xl border border-neutral-200 bg-white px-3 text-sm text-neutral-900 outline-none placeholder:text-neutral-400 focus:ring-2 focus:ring-emerald-500"
          />
        </div>
      </div>

      {/* Rating */}
      <div className="space-y-1">
        <label className="block text-xs font-semibold text-neutral-800">
          {copy.ratingLabel}
        </label>
        <div className="flex items-center gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              type="button"
              key={star}
              onClick={() => setRating(star)}
              className={`flex h-8 w-8 items-center justify-center rounded-full border text-sm transition ${
                rating && star <= rating
                  ? "border-amber-400 bg-amber-100 text-amber-700"
                  : "border-neutral-200 bg-white text-neutral-500 hover:border-neutral-300"
              }`}
              aria-label={`${star} ${star === 1 ? "star" : "stars"}`}
            >
              {star}
            </button>
          ))}
          <span className="ml-2 text-[11px] text-neutral-500">{copy.ratingHelp}</span>
        </div>
      </div>

      {/* Service type */}
      <div className="space-y-1">
        <label
          htmlFor="review-service"
          className="block text-xs font-semibold text-neutral-800"
        >
          {copy.serviceLabel}
        </label>
        <select
          id="review-service"
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="h-9 w-full rounded-xl border border-neutral-200 bg-white px-3 text-sm text-neutral-900 outline-none focus:ring-2 focus:ring-emerald-500"
        >
          {Object.entries(copy.serviceOptions).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>

      {/* Title */}
      <div className="space-y-1">
        <label
          htmlFor="review-title"
          className="block text-xs font-semibold text-neutral-800"
        >
          {copy.titleLabel}
        </label>
        <input
          id="review-title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder={copy.titlePlaceholder}
          className="h-9 w-full rounded-xl border border-neutral-200 bg-white px-3 text-sm text-neutral-900 outline-none placeholder:text-neutral-400 focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      {/* Review text */}
      <div className="space-y-1">
        <label
          htmlFor="review-text"
          className="block text-xs font-semibold text-neutral-800"
        >
          {copy.reviewLabel}
        </label>
        <textarea
          id="review-text"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder={copy.reviewPlaceholder}
          rows={4}
          className="w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-900 outline-none placeholder:text-neutral-400 focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      {/* Consent */}
      <label className="mt-1 flex items-start gap-2 text-[11px] text-neutral-600">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5 h-3.5 w-3.5 rounded border-neutral-300 text-emerald-600 focus:ring-emerald-500"
        />
        <span>{copy.consentLabel}</span>
      </label>

      {error && <p className="mt-1 text-xs text-red-700">{error}</p>}
      {success && !error && (
        <p className="mt-1 text-xs text-emerald-700">{success}</p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className={`mt-2 inline-flex h-10 items-center justify-center rounded-xl px-5 text-sm font-semibold text-white ${
          submitting
            ? "cursor-not-allowed bg-neutral-400"
            : "bg-emerald-600 hover:bg-emerald-700"
        }`}
      >
        {submitting ? "…" : copy.submit}
      </button>
    </form>
  );
}
