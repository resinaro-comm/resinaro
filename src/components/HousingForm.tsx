"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";

const GAS_URL =
  "https://script.google.com/macros/s/AKfycbx_S1yGOb31CWMQVvi6qShVzgRA350Sj40aKnLVNl4ctdHxm77nzjYZIgnhVmgY1BQ/exec";
const GAS_TOKEN = "abc123!abidsdjaosda!!!hhda2314532"; // must match AUTH_TOKEN in Apps Script

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB
const ALLOWED_TYPES = ["application/pdf", "image/jpeg", "image/jpg", "image/png"];

type Locale = "en" | "it";

/* ============================== i18n COPY =============================== */

function t(locale: Locale) {
  const it = locale === "it";

  return {
    fullNameLabel: it ? "Nome e cognome *" : "Full name *",
    emailLabel: "Email *",
    telephoneLabel: it ? "Telefono *" : "Telephone *",
    telephonePlaceholder: it ? "+44..." : "+44...",
    packageLabel: it
      ? "Che tipo di aiuto ti serve? *"
      : "Which service best fits your situation? *",
    packageHint: it
      ? "Puoi scrivere in italiano o inglese — ti confermeremo via email se è il servizio giusto prima di iniziare."
      : "You can write in Italian or English — we’ll confirm by email if this is the right service before starting.",
    packageOptions: [
      {
        value: "Rental Scam & Listing Check",
        label: it
          ? "Controllo truffe & annunci in affitto"
          : "Rental Scam & Listing Check",
      },
      {
        value: "Tenant Action Plan (repairs/deposit/eviction)",
        label: it
          ? "Tenant Action Plan (riparazioni/caparra/sfratto)"
          : "Tenant Action Plan (repairs/deposit/eviction)",
      },
      {
        value: "Council Housing & Homelessness Navigation",
        label: it
          ? "Council Housing & Homelessness Navigation"
          : "Council Housing & Homelessness Navigation",
      },
      {
        value: "Not sure / other",
        label: it ? "Non sono sicuro / altro" : "Not sure / other",
      },
    ],

    situationLabel: it
      ? "Raccontaci in breve la tua situazione (in italiano o inglese) *"
      : "Tell us briefly about your situation (in Italian or English) *",
    situationPlaceholder: it
      ? "Es: ho trovato una stanza a Londra e chiedono la caparra prima della visita... / Ci sono problemi di muffa e il proprietario non risponde..."
      : "Example: I found a room in London and they are asking for a deposit before I visit... / Ho problemi con la muffa e il proprietario non risponde...",

    urgencyLabel: it ? "Quanto è urgente? *" : "How urgent is this? *",
    urgencyOptions: [
      {
        value: "Not urgent / general advice",
        label: it
          ? "Non urgente / consulenza generale"
          : "Not urgent / general advice",
      },
      {
        value: "Important within 1–2 weeks",
        label: it ? "Importante entro 1–2 settimane" : "Important within 1–2 weeks",
      },
      {
        value: "Urgent (risk of homelessness/eviction soon)",
        label: it
          ? "Urgente (rischio di rimanere senza casa/sfratto a breve)"
          : "Urgent (risk of homelessness/eviction soon)",
      },
    ],

    deadlineLabel: it
      ? "Scadenze o date importanti (facoltativo)"
      : "Deadlines or dates (optional)",
    deadlinePlaceholder: it
      ? "Data di sfratto, appuntamento col council, data di ingresso/uscita..."
      : "Eviction date, council appointment, move-in date...",

    languageLabel: it ? "Lingua preferita" : "Preferred language",
    languageOptions: [
      {
        value: "Either / Nessuna preferenza",
        label: it ? "Nessuna preferenza" : "Either / no preference",
      },
      { value: "Italiano", label: "Italiano" },
      { value: "English", label: "English" },
    ],

    filesLabel: it
      ? "Allega documenti (facoltativo)"
      : "Attach documents (optional)",
    filesSelectedPrefix: it ? "Selezionati:" : "Selected:",

    consentText: it
      ? "Acconsento che Resinaro tratti i miei dati e documenti per erogare questo servizio."
      : "I consent to Resinaro processing my data and files to deliver this service.",
    privacyLinkLabel: it ? "Informativa privacy" : "Privacy Policy",

    submitLabel: it
      ? "Invia richiesta housing + vai al pagamento"
      : "Submit housing request + go to payment",
    submittingLabel: it ? "Invio in corso..." : "Submitting...",
    redirectNote: it
      ? "Dopo l’invio verrai reindirizzato al pagamento."
      : "You’ll be redirected to payment after submitting.",

    // Errors
    errorName: it ? "Per favore inserisci il tuo nome completo." : "Please enter your full name.",
    errorEmail: it ? "Per favore inserisci la tua email." : "Please enter your email address.",
    errorTelephone: it
      ? "Per favore inserisci il tuo numero di telefono."
      : "Please enter your telephone number.",
    errorNotes: it
      ? "Per favore descrivi brevemente la tua situazione."
      : "Please briefly describe your situation.",
    errorConsent: it
      ? "Per continuare devi acconsentire al trattamento dei dati."
      : "Please consent to data processing to continue.",
    errorFileType: it
      ? "I file devono essere in formato PDF/JPG/PNG."
      : "Files must be PDF/JPG/PNG.",
    errorFileSize: it
      ? "Ogni file deve essere inferiore a 10 MB."
      : "Each file must be under 10 MB.",
    errorGeneric: it
      ? "Invio non riuscito — per favore riprova più tardi."
      : "Submission failed — please try again later.",
  };
}

/* =============================== COMPONENT ============================== */

export default function HousingForm({
  locale = "en",
}: {
  locale?: Locale;
}) {
  const copy = t(locale as Locale);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  // package selection (reuses issueType field so existing GAS sheet still works)
  const [issueType, setIssueType] = useState<string>(
    "Rental Scam & Listing Check"
  );
  const [notes, setNotes] = useState("");
  const [urgency, setUrgency] = useState<string>(
    "Not urgent / general advice"
  );
  const [deadlineInfo, setDeadlineInfo] = useState("");
  const [language, setLanguage] = useState<string>(
    "Either / Nessuna preferenza"
  );
  const [files, setFiles] = useState<File[]>([]);
  const [consent, setConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement | null>(null);

  function onFilesChange(e: React.ChangeEvent<HTMLInputElement>) {
    setError(null);
    const fs = Array.from(e.target.files || []);
    const valid: File[] = [];
    for (const f of fs) {
      if (!ALLOWED_TYPES.includes(f.type)) {
        setError(copy.errorFileType);
        continue;
      }
      if (f.size > MAX_FILE_SIZE) {
        setError(copy.errorFileSize);
        continue;
      }
      valid.push(f);
    }
    setFiles(valid);
  }

  async function fileToBase64(file: File) {
    const buf = await file.arrayBuffer();
    let binary = "";
    const bytes = new Uint8Array(buf);
    const chunk = 0x8000;
    for (let i = 0; i < bytes.length; i += chunk) {
      const slice = bytes.subarray(i, i + chunk);
      binary += String.fromCharCode(...Array.from(slice));
    }
    return btoa(binary);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!name.trim()) return setError(copy.errorName);
    if (!email.trim()) return setError(copy.errorEmail);
    if (!telephone.trim()) return setError(copy.errorTelephone);
    if (!notes.trim()) return setError(copy.errorNotes);
    if (!consent) return setError(copy.errorConsent);

    setSubmitting(true);
    try {
      const bookingId = crypto.randomUUID();
      const serviceKey = "housing-guidance";

      const filesPayload: Array<{
        filename: string;
        mimeType: string;
        data: string;
      }> = [];
      for (const f of files) {
        filesPayload.push({
          filename: f.name,
          mimeType: f.type,
          data: await fileToBase64(f),
        });
      }

      const r1 = await fetch(GAS_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          token: GAS_TOKEN,
          action: "submit",
          bookingId,
          service: serviceKey,
          name: name.trim(),
          email: email.trim(),
          telephone: telephone.trim(),
          files: filesPayload,
          data: {
            issueType, // package name (English value)
            notes: notes.trim(),
            urgency,
            deadlineInfo: deadlineInfo.trim(),
            language,
            locale,
          },
        }),
      });

      type GasResponse = { ok?: boolean; error?: string } | undefined;
      let r1json: GasResponse = undefined;
      try {
        r1json = (await r1.json()) as GasResponse;
      } catch {
        // ignore JSON parse error and rely on status
      }

      if (!r1.ok || !(r1json && r1json.ok)) {
        const msg =
          r1json && r1json.error
            ? r1json.error
            : "Could not save submission to Google.";
        throw new Error(msg);
      }

      const fd = new FormData();
      fd.append("bookingId", bookingId);
      fd.append("service", serviceKey);
      fd.append("email", email.trim());
      fd.append("name", name.trim());
      fd.append("issueType", issueType);
      fd.append("urgency", urgency);
      fd.append("locale", locale);

      const r2 = await fetch("/api/services/book", { method: "POST", body: fd });
      if (!r2.ok) {
        const text = await r2.text().catch(() => "");
        throw new Error(text || "Could not prepare checkout.");
      }
      const { url } = (await r2.json()) as { url?: string };
      if (!url) throw new Error("No payment link returned.");
      window.location.href = url;
      return;
    } catch (err: unknown) {
      const messageText =
        err instanceof Error ? err.message : String(err);
      setError(messageText || copy.errorGeneric);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } finally {
      setSubmitting(false);
    }
  }

  const submitDisabled = submitting || !consent;

  return (
    <form onSubmit={handleSubmit} className="space-y-4" aria-live="polite">
      <div>
        <label className="block text-sm font-medium">
          {copy.fullNameLabel}
        </label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full rounded border px-3 py-2"
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">
            {copy.emailLabel}
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full rounded border px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">
            {copy.telephoneLabel}
          </label>
          <input
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
            className="mt-1 block w-full rounded border px-3 py-2"
            placeholder={copy.telephonePlaceholder}
            required
          />
        </div>
      </div>

      {/* Package selection */}
      <div>
        <label className="block text-sm font-medium">
          {copy.packageLabel}
        </label>
        <select
          value={issueType}
          onChange={(e) => setIssueType(e.target.value)}
          className="mt-1 block w-full rounded border px-3 py-2 text-sm"
        >
          {copy.packageOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <p className="text-xs text-gray-600 mt-1">
          {copy.packageHint}
        </p>
      </div>

      {/* Situation description */}
      <div>
        <label className="block text-sm font-medium">
          {copy.situationLabel}
        </label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="mt-1 block w-full rounded border px-3 py-2 text-sm min-h-[90px]"
          placeholder={copy.situationPlaceholder}
          required
        />
      </div>

      {/* Urgency + deadlines */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">
            {copy.urgencyLabel}
          </label>
          <select
            value={urgency}
            onChange={(e) => setUrgency(e.target.value)}
            className="mt-1 block w-full rounded border px-3 py-2 text-sm"
          >
            {copy.urgencyOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium">
            {copy.deadlineLabel}
          </label>
          <input
            value={deadlineInfo}
            onChange={(e) => setDeadlineInfo(e.target.value)}
            className="mt-1 block w-full rounded border px-3 py-2 text-sm"
            placeholder={copy.deadlinePlaceholder}
          />
        </div>
      </div>

      {/* Language preference */}
      <div>
        <label className="block text-sm font-medium">
          {copy.languageLabel}
        </label>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="mt-1 block w-full rounded border px-3 py-2 text-sm"
        >
          {copy.languageOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {/* Files */}
      <div>
        <label className="block text-sm font-medium">
          {copy.filesLabel}
        </label>
        <input
          ref={fileRef}
          type="file"
          accept=".pdf,image/png,image/jpeg"
          multiple
          onChange={onFilesChange}
          className="mt-1"
        />
        {files.length > 0 && (
          <p className="text-xs text-gray-600 mt-1">
            {copy.filesSelectedPrefix}{" "}
            {files.map((f) => f.name).join(", ")}
          </p>
        )}
      </div>

      {/* Consent */}
      <div className="text-sm">
        <label className="flex items-start gap-2">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
          />
          <span>
            {copy.consentText}{" "}
            <Link
              href={`/${locale}/privacy-policy`}
              className="underline"
            >
              {copy.privacyLinkLabel}
            </Link>
          </span>
        </label>
      </div>

      {error && (
        <div className="text-red-600 text-sm" role="alert">
          {error}
        </div>
      )}

      <div className="pt-2">
        <button
          type="submit"
          disabled={submitDisabled}
          className={`px-4 py-2 rounded text-white ${
            submitDisabled
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-900 hover:bg-green-800"
          }`}
        >
          {submitting ? copy.submittingLabel : copy.submitLabel}
        </button>
        <p className="text-xs text-gray-600 mt-2">
          {copy.redirectNote}
        </p>
      </div>
    </form>
  );
}
