// src/components/TranslationOnboardingForm.tsx
"use client";

import React, { useState } from "react";

type Locale = "en" | "it";

interface Props {
  locale: Locale;
  bookingId?: string;
  paymentIntentId?: string;
  pages?: string;
}

const FORMS_API_BASE =
  process.env.NEXT_PUBLIC_FORMS_API_BASE ||
  "https://y1se62wura.execute-api.eu-west-2.amazonaws.com";

function fileToDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export default function TranslationOnboardingForm({
  locale,
  bookingId,
  paymentIntentId,
  pages,
}: Props) {
  const it = locale === "it";

  const [deadline, setDeadline] = useState("");
  const [docFile, setDocFile] = useState<File | null>(null);

  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const title = it
    ? "Inviaci il documento da tradurre"
    : "Send us the document to translate";
  const helper = it
    ? "Carica una foto o un PDF del documento e dicci per quando ti serve. Useremo i dati di contatto inseriti prima del pagamento."
    : "Upload a photo or PDF of the document and tell us when you need it. We’ll use the contact details you gave before payment.";

  const deadlineLabel = it
    ? "Per quando ti serve la traduzione? *"
    : "When do you need the translation by? *";
  const deadlineHint = it
    ? "Se possibile inserisci una data precisa (es. 20/01/2026)."
    : "If possible, give a precise date (e.g. 20/01/2026).";

  const fileLabel = it
    ? "Documento da tradurre (foto o PDF) *"
    : "Document to translate (photo or PDF) *";
  const fileHint = it
    ? "Carica una foto chiara o un PDF. Se hai più pagine, puoi caricare un unico PDF o un’immagine per pagina."
    : "Upload a clear photo or a PDF. If you have multiple pages, you can upload a single PDF or one image per page.";

  const submitLabel = submitting
    ? it
      ? "Invio in corso…"
      : "Sending…"
    : it
    ? "Invia dettagli"
    : "Send details";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus(null);

    if (!deadline.trim() || !docFile) {
      setStatus(
        it
          ? "Indica una data e carica il documento da tradurre."
          : "Please add a deadline and upload the document to translate.",
      );
      return;
    }

    if (!FORMS_API_BASE) {
      setStatus(
        it
          ? "Configurazione modulo non completa (manca FORMS_API_BASE)."
          : "Form configuration is missing (FORMS_API_BASE).",
      );
      return;
    }

    try {
      setSubmitting(true);

      const docData = await fileToDataUrl(docFile);

      const res = await fetch(`${FORMS_API_BASE}/forms/submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          site: "resinaro",
          formSlug: "translation_onboarding",
          email: null, // contact details are stored from the main checkout step
          name: null,
          phone: null,
          sourceUrl:
            typeof window !== "undefined" ? window.location.href : undefined,
          payload: {
            bookingId: bookingId || null,
            paymentIntentId: paymentIntentId || null,
            pages: pages || null,
            deadline: deadline.trim(),
            locale,
            document: {
              filename: docFile.name,
              mimeType: docFile.type,
              data: docData,
            },
          },
        }),
      });

      const json = await res.json().catch((): Record<string, unknown> => ({}));

      if (!res.ok || !json.ok) {
        setStatus(
          it
            ? "Qualcosa è andato storto. Riprova tra poco o scrivici via email."
            : "Something went wrong. Please try again shortly or email us.",
        );
        return;
      }

      setStatus(
        it
          ? "✅ Dettagli ricevuti. Ti confermeremo via email la consegna e i prossimi passi."
          : "✅ We’ve received your details. We’ll confirm delivery and next steps by email.",
      );
      setDeadline("");
      setDocFile(null);
    } catch (err) {
      console.error("Translation onboarding error", err);
      setStatus(
        it
          ? "Errore di rete. Controlla la connessione e riprova."
          : "Network error. Please check your connection and try again.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-3xl bg-[#FFFCF5] p-6 shadow-sm ring-1 ring-slate-200"
    >
      <div>
        <h2 className="text-lg font-semibold text-emerald-950">{title}</h2>
        <p className="mt-1 text-sm text-slate-700">{helper}</p>
        {bookingId && (
          <p className="mt-2 text-xs text-slate-500">
            {it ? "Riferimento pagamento: " : "Payment reference: "}
            <span className="font-mono text-slate-700">{bookingId}</span>
          </p>
        )}
        {pages && (
          <p className="mt-1 text-xs text-slate-500">
            {it ? "Pagine prenotate: " : "Pages booked: "}
            <span className="font-semibold">{pages}</span>
          </p>
        )}
      </div>

      {/* Deadline – free text, easy to type */}
      <label className="block text-sm text-slate-900">
        {deadlineLabel}
        <input
          type="text"
          className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
          placeholder={it ? "gg / mm / aaaa" : "dd / mm / yyyy"}
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
        <p className="mt-1 text-[11px] text-slate-500">{deadlineHint}</p>
      </label>

      {/* Fancy upload card */}
      <label className="block text-sm text-slate-900">
        {fileLabel}
        <div className="mt-2 rounded-2xl border border-dashed border-emerald-200 bg-white/80 px-4 py-4 shadow-sm">
          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                📎
              </div>
              <div className="text-xs text-slate-700">
                <p className="font-semibold">
                  {it
                    ? "Carica una foto chiara o un PDF."
                    : "Upload a clear photo or a PDF."}
                </p>
                <p className="mt-0.5 text-[11px] text-slate-500">
                  {it
                    ? "Formati supportati: JPG, PNG, PDF (max qualche MB)."
                    : "Supported formats: JPG, PNG, PDF (a few MB is fine)."}
                </p>
              </div>
            </div>

            <label className="relative inline-flex cursor-pointer items-center justify-center rounded-full bg-emerald-700 px-4 py-2 text-xs font-semibold text-emerald-50 shadow-sm shadow-emerald-700/40 hover:bg-emerald-800">
              <span>
                {docFile
                  ? it
                    ? "Sostituisci file"
                    : "Replace file"
                  : it
                  ? "Scegli file"
                  : "Choose file"}
              </span>
              <input
                type="file"
                accept=".jpg,.jpeg,.png,.pdf"
                className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                onChange={(e) => setDocFile(e.target.files?.[0] ?? null)}
              />
            </label>
          </div>

          {docFile && (
            <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-[11px] text-emerald-900">
              <span className="truncate">{docFile.name}</span>
              <span className="text-emerald-700/80">
                {(docFile.size / 1024 / 1024).toFixed(2)} MB
              </span>
            </div>
          )}

          <p className="mt-2 text-[11px] text-slate-500">{fileHint}</p>
        </div>
      </label>

      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={submitting}
          className={`inline-flex items-center justify-center rounded-xl px-5 py-2 text-sm font-semibold ${
            submitting
              ? "cursor-not-allowed border border-slate-300 bg-slate-100 text-slate-500"
              : "border border-emerald-700 bg-emerald-700 text-emerald-50 shadow-sm shadow-emerald-700/40 hover:bg-emerald-800"
          }`}
        >
          {submitLabel}
        </button>
        <p className="text-[11px] text-slate-500">
          {it
            ? "Se hai più documenti, puoi rispondere alla nostra email con allegati extra."
            : "If you have more documents, you can reply to our email with extra attachments."}
        </p>
      </div>

      {status && (
        <div
          className={`mt-2 rounded-xl px-4 py-3 text-xs ${
            status.startsWith("✅")
              ? "border border-emerald-200 bg-emerald-50 text-emerald-800"
              : "border border-amber-200 bg-amber-50 text-amber-800"
          }`}
        >
          {status}
        </div>
      )}
    </form>
  );
}
