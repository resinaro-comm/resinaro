// src/components/FamilyTripChecklistCta.tsx
"use client";

import React, { useState } from "react";

type Locale = "en" | "it";

const ENDPOINT = process.env.NEXT_PUBLIC_NEWSLETTER_ENDPOINT || "";

function copy(locale: Locale) {
  const it = locale === "it";
  return {
    label: it
      ? "Vuoi una piccola checklist stampabile per i viaggi UK → Italia con i bimbi?"
      : "Want a tiny printable checklist for UK → Italy family trips?",
    placeholder: "you@email.com",
    button: it ? "Scarica il PDF" : "Download the PDF",
    helper: it
      ? "Inserendo la tua email accetti che la salviamo per mandarti aggiornamenti occasionali. Puoi cancellarti quando vuoi."
      : "By entering your email you agree we can save it and send occasional useful updates. You can unsubscribe any time.",
    errEmail: it
      ? "Inserisci una email valida."
      : "Please enter a valid email address.",
    modalTitle: it ? "La tua checklist è pronta" : "Your checklist is ready",
    modalBody: it
      ? "Puoi scaricare subito il PDF con i documenti e i promemoria per il viaggio UK → Italia con i bambini."
      : "You can download the PDF with documents and reminders for UK → Italy trips with kids.",
    modalDownload: it ? "Scarica il PDF" : "Download the PDF",
    modalClose: it ? "Chiudi" : "Close",
    previewAlt: it
      ? "Anteprima checklist viaggio famiglia UK → Italia"
      : "Preview of UK → Italy family trip checklist",
  };
}

export function FamilyTripChecklistCta({ locale }: { locale: Locale }) {
  const copyText = copy(locale);
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  // Use the right PDF per locale
  const pdfPath =
    locale === "it"
      ? "/checklists/resinaro-it-italy-family-trip-checklist.pdf"
      : "/checklists/resinaro-uk-italy-family-trip-checklist.pdf";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    const ok = /\S+@\S+\.\S+/.test(email);
    if (!ok) {
      setError(copyText.errEmail);
      return;
    }

    setBusy(true);
    try {
      if (ENDPOINT) {
        const body = new URLSearchParams({
          email: email.trim(),
          source: "family-trip-checklist",
        });

        // no-cors so Apps Script can receive it even without CORS headers
        await fetch(ENDPOINT, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type":
              "application/x-www-form-urlencoded;charset=UTF-8",
          },
          body: body.toString(),
        }).catch(() => {
          // ignore errors – still show the modal
        });
      }

      setOpen(true);
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="mt-6 flex flex-col gap-2 rounded-2xl bg-white/85 p-3 text-sm shadow-lg sm:flex-row sm:items-center sm:p-4"
      >
        <p className="sm:flex-1 sm:pr-3 text-gray-900">
          {copyText.label}
        </p>

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:min-w-[360px]">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={copyText.placeholder}
            className="h-11 w-full rounded-xl border border-emerald-200 bg-white px-4 text-sm text-gray-900 outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-emerald-400"
          />
          <button
            type="submit"
            disabled={busy}
            className={`h-11 whitespace-nowrap rounded-xl px-5 text-sm font-semibold text-white ${
              busy
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-emerald-600 hover:bg-emerald-700"
            }`}
          >
            {busy ? "…" : copyText.button}
          </button>
        </div>

        {error && (
          <p className="mt-1 text-xs text-red-700">{error}</p>
        )}

        <p className="mt-1 text-[11px] text-gray-600">
          {copyText.helper}
        </p>
      </form>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-40 flex items-center justify-center bg-black/50 px-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="w-full max-w-lg rounded-2xl bg-white p-5 shadow-xl">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  {copyText.modalTitle}
                </h2>
                <p className="mt-1 text-sm text-gray-700">
                  {copyText.modalBody}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-sm text-gray-500 hover:text-gray-800"
                aria-label={copyText.modalClose}
              >
                ×
              </button>
            </div>

            <div className="mt-4 overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
              <iframe
                src={`${pdfPath}#view=FitH`}
                title={copyText.previewAlt}
                className="h-64 w-full md:h-80"
              />
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
              <a
                href={pdfPath}
                download
                className="inline-flex h-11 items-center justify-center rounded-xl bg-emerald-600 px-5 text-sm font-semibold text-white hover:bg-emerald-700"
              >
                {copyText.modalDownload}
              </a>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-sm font-semibold text-gray-700 hover:text-gray-900"
              >
                {copyText.modalClose}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
