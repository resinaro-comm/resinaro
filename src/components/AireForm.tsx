// src/components/AireForm.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLocaleFromPathname, p } from "@/lib/localePath";

// Google Apps Script endpoint + token (same as other forms)
const GAS_URL =
  "https://script.google.com/macros/s/AKfycbx_S1yGOb31CWMQVvi6qShVzgRA350Sj40aKnLVNl4ctdHxm77nzjYZIgnhVmgY1BQ/exec";
const GAS_TOKEN = "abc123!abidsdjaosda!!!hhda2314532"; // must match AUTH_TOKEN in Apps Script

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB
const ALLOWED = ["application/pdf", "image/jpeg", "image/jpg", "image/png"];

/** Types **/
type Locale = "en" | "it";

/* ---------- i18n ---------- */
function t(locale: Locale) {
  const en = {
    steps: ["Household", "Group", "You", "Birth & family", "Agreements"],
    level1: {
      title: "Level 1 — Household & pricing",
      subtitle: "{tr.level1.subtitle}",
      pricing: {
        single: "single or couple",
        family: "family / 3+ people",
        note: "Price is per booking. Consulate decisions and timing are outside our control."
      },
      howMany: "How many other people (besides you)?",
      coupleHint: "For a couple, enter 1. For a family, enter total additional people.",
      emailLater: "I'll email ID uploads later to",
      totalPrice: "Total price for this booking:",
      continue: "Continue"
    },
    level2: {
      title: "Level 2 — Group member",
      of: "of",
      subtitle: "Add details for each additional person.",
      noOthers: "No additional people added. You can continue.",
      progress: "Progress",
      fullName: "Full name",
      fullNamePlaceholder: "Full name",
      dob: "Date of birth (dd/mm/yyyy)",
      dobPlaceholder: "dd/mm/yyyy",
      uploadId: "Upload valid ID for this person",
      uploadHint: "{tr.level2.uploadHint}",
      emailLaterLabel: "I'll email ID uploads later to",
      important: "Important:",
      importantNote: "{tr.level2.importantNote}",
      back: "Back",
      prevPerson: "Previous person",
      saveNext: "Save & next person",
      continue: "Continue"
    },
    level3: {
      title: "Level 3 — Your details",
      subtitle: "Lead applicant contact details.",
      firstName: "First name",
      lastName: "Last name",
      email: "Email",
      telephone: "Telephone",
      telephoneHint: "Add country code, e.g. +44 7…",
      back: "Back",
      continue: "Continue"
    },
    level4: {
      title: "Level 4 — Birth & family",
      subtitle: "A few details for AIRE.",
      dob: "Date of birth (dd/mm/yyyy)",
      dobPlaceholder: "dd/mm/yyyy",
      placeOfBirth: "Place of birth",
      countryOfBirth: "Country of birth",
      maritalStatus: "Marital status",
      single: "Single",
      married: "Married",
      spouseName: "Spouse name",
      children: "Children (names, comma-separated)",
      childrenPlaceholder: "e.g. Giulia Rossi, Paolo Rossi",
      multipleCitizenships: "Do you have multiple citizenships?",
      yes: "Yes",
      no: "No",
      back: "Back",
      continue: "Continue"
    },
    level5: {
      title: "Final — Agreements & pay",
      subtitle: "Almost done! Confirm the agreements and submit to get the payment link.",
      agreementsTitle: "Agreements (required)",
      startWork: "I ask you to start work immediately. I understand I have a 14-day cooling-off period, but if I cancel after work has begun you may deduct a proportionate amount for work already completed; once the service is fully performed within 14 days, I will lose my right to cancel.",
      refundPolicy1: "I have read and agree to the",
      refundPolicy2: "Refund & Credit Policy",
      refundPolicy3: ". I understand Resinaro's default remedy is account credit valid for 12 months, and cash refunds are only provided where legally required.",
      privacy1: "I consent to Resinaro storing and processing my information to deliver this service.",
      privacy2: "Privacy Policy",
      totalToPay: "Total to pay:",
      paymentNote: "You'll be redirected to payment after submitting. We're an independent admin support service.",
      back: "Back",
      submit: "Submit & Pay",
      submitting: "Submitting…",
      emailPrefer: "Prefer email? Send details to"
    },
    errors: {
      personDetails: "Person {0}: please add full name and DOB (dd/mm/yyyy).",
      personId: "Person {0}: please upload an ID file or tick \"I'll email ID uploads later\".",
      personIdFormat: "Person {0}: ID must be PDF/JPG/PNG and ≤ 5 MB.",
      firstName: "Please enter your first and last name.",
      email: "Please enter your email.",
      telephone: "Please enter your telephone number.",
      dob: "Please enter your date of birth.",
      placeOfBirth: "Please enter your place of birth.",
      countryOfBirth: "Please enter your country of birth.",
      multipleCitizenships: "Please indicate if you have multiple citizenships.",
      spouseName: "Please provide your spouse's name.",
      startConsent: "Please confirm you want us to start now and understand the cooling-off terms.",
      refundConsent: "Please confirm you agree to the Refund & Credit Policy.",
      privacyConsent: "Please consent to data processing to continue."
    }
  } as const;

  const it = {
    steps: ["Casa", "Gruppo", "Tu", "Nascita e famiglia", "Accordi"],
    level1: {
      title: "Livello 1 — Casa e prezzi",
      subtitle: "Dicci chi è nella prenotazione. Puoi caricare i documenti più tardi se preferisci.",
      pricing: {
        single: "singolo o coppia",
        family: "famiglia / 3+ persone",
        note: "Il prezzo è per prenotazione. Le decisioni e i tempi del Consolato sono fuori dal nostro controllo."
      },
      howMany: "Quante altre persone (oltre a te)?",
      coupleHint: "Per una coppia, inserisci 1. Per una famiglia, inserisci il totale delle persone aggiuntive.",
      emailLater: "Invierò i documenti via email più tardi a",
      totalPrice: "Prezzo totale per questa prenotazione:",
      continue: "Continua"
    },
    level2: {
      title: "Livello 2 — Membro del gruppo",
      of: "di",
      subtitle: "Aggiungi i dettagli per ogni persona aggiuntiva.",
      noOthers: "Nessuna persona aggiuntiva aggiunta. Puoi continuare.",
      progress: "Progresso",
      fullName: "Nome completo",
      fullNamePlaceholder: "Nome completo",
      dob: "Data di nascita (gg/mm/aaaa)",
      dobPlaceholder: "gg/mm/aaaa",
      uploadId: "Carica documento valido per questa persona",
      uploadHint: "PDF/JPG/PNG, fino a 5 MB. Almeno una persona dovrebbe avere un documento italiano (passaporto o carta d'identità).",
      emailLaterLabel: "Invierò i documenti via email più tardi a",
      important: "Importante:",
      importantNote: "Almeno una persona dovrebbe avere un documento italiano valido (passaporto o carta d'identità).",
      back: "Indietro",
      prevPerson: "Persona precedente",
      saveNext: "Salva e persona successiva",
      continue: "Continua"
    },
    level3: {
      title: "Livello 3 — I tuoi dettagli",
      subtitle: "Dettagli di contatto del richiedente principale.",
      firstName: "Nome",
      lastName: "Cognome",
      email: "Email",
      telephone: "Telefono",
      telephoneHint: "Aggiungi il prefisso internazionale, es. +44 7…",
      back: "Indietro",
      continue: "Continua"
    },
    level4: {
      title: "Livello 4 — Nascita e famiglia",
      subtitle: "Alcuni dettagli per AIRE.",
      dob: "Data di nascita (gg/mm/aaaa)",
      dobPlaceholder: "gg/mm/aaaa",
      placeOfBirth: "Luogo di nascita",
      countryOfBirth: "Paese di nascita",
      maritalStatus: "Stato civile",
      single: "Celibe/Nubile",
      married: "Sposato/a",
      spouseName: "Nome del coniuge",
      children: "Figli (nomi, separati da virgola)",
      childrenPlaceholder: "es. Giulia Rossi, Paolo Rossi",
      multipleCitizenships: "Hai cittadinanze multiple?",
      yes: "Sì",
      no: "No",
      back: "Indietro",
      continue: "Continua"
    },
    level5: {
      title: "Finale — Accordi e pagamento",
      subtitle: "Quasi finito! Conferma gli accordi e invia per ottenere il link di pagamento.",
      agreementsTitle: "Accordi (obbligatori)",
      startWork: "Chiedo di iniziare subito il lavoro. Capisco di avere un periodo di recesso di 14 giorni, ma se annullo dopo l'inizio del lavoro potreste detrarre un importo proporzionale per il lavoro già completato; una volta che il servizio è completamente eseguito entro 14 giorni, perderò il diritto di recesso.",
      refundPolicy1: "Ho letto e accetto la",
      refundPolicy2: "Politica Rimborsi e Crediti",
      refundPolicy3: ". Capisco che il rimedio predefinito di Resinaro è un credito dell'account valido per 12 mesi, e i rimborsi in contanti sono forniti solo dove richiesto legalmente.",
      privacy1: "Acconsento a Resinaro di conservare e elaborare le mie informazioni per fornire questo servizio.",
      privacy2: "Politica Privacy",
      totalToPay: "Totale da pagare:",
      paymentNote: "Sarai reindirizzato al pagamento dopo l'invio. Siamo un servizio di supporto amministrativo indipendente.",
      back: "Indietro",
      submit: "Invia e Paga",
      submitting: "Invio in corso…",
      emailPrefer: "Preferisci l'email? Invia i dettagli a"
    },
    errors: {
      personDetails: "Persona {0}: aggiungi nome completo e data di nascita (gg/mm/aaaa).",
      personId: "Persona {0}: carica un file documento o spunta \"Invierò i documenti via email più tardi\".",
      personIdFormat: "Persona {0}: il documento deve essere PDF/JPG/PNG e ≤ 5 MB.",
      firstName: "Inserisci il tuo nome e cognome.",
      email: "Inserisci la tua email.",
      telephone: "Inserisci il tuo numero di telefono.",
      dob: "Inserisci la tua data di nascita.",
      placeOfBirth: "Inserisci il tuo luogo di nascita.",
      countryOfBirth: "Inserisci il tuo paese di nascita.",
      multipleCitizenships: "Indica se hai cittadinanze multiple.",
      spouseName: "Fornisci il nome del tuo coniuge.",
      startConsent: "Conferma che vuoi che iniziamo subito e comprendi i termini di recesso.",
      refundConsent: "Conferma di accettare la Politica Rimborsi e Crediti.",
      privacyConsent: "Acconsenti al trattamento dei dati per continuare."
    }
  } as const;

  return locale === "it" ? it : en;
}

// ---------- Small UI helpers ----------
function Section({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-4 sm:p-5 shadow-sm">
      <div className="mb-3">
        <h3 className="text-base sm:text-lg font-semibold text-green-900">{title}</h3>
        {subtitle && <p className="text-xs sm:text-sm text-gray-700 mt-0.5">{subtitle}</p>}
      </div>
      <div className="grid gap-3">{children}</div>
    </section>
  );
}

function Field({
  label,
  children,
  hint,
  required,
}: {
  label: string;
  children: React.ReactNode;
  hint?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-green-900">
        {label} {required && <span className="text-red-600">*</span>}
      </label>
      <div className="mt-1">{children}</div>
      {hint && <p className="text-[11px] text-gray-600 mt-1">{hint}</p>}
    </div>
  );
}

// ---------- Component ----------
export default function AireForm() {
  const locale = useLocaleFromPathname() as Locale;
  const tr = t(locale);

  // Helper function to format error messages with placeholders
  function formatError(template: string, ...args: (string | number)[]): string {
    return template.replace(/{(\d+)}/g, (match, index) => String(args[index] || match));
  }

  // Wizard steps:
  // 1) Household & pricing
  // 2) Group members (mini-steps per person)
  // 3) Your details
  // 4) Birth & family
  // 5) Agreements & pay
  const [step, setStep] = useState<1 | 2 | 3 | 4 | 5>(1);

  // Progress bar (base steps). We also show mini progress for step 2.
  const pct = [0, 20, 45, 70, 90, 100][step] || 0;

  // Group booking logic (same data model)
  const MAX_GROUP = 8;
  const [numOthers, setNumOthers] = useState(0); // number of additional people (not including self)
  const [group, setGroup] = useState(
    [] as { name: string; dob: string; idFile: File | null }[]
  );
  const [groupIdx, setGroupIdx] = useState(0); // which additional person we’re editing in step 2

  const [emailUploadsLater, setEmailUploadsLater] = useState(false); // allow pay-now, upload later

  function handleNumOthersChange(e: React.ChangeEvent<HTMLInputElement>) {
    // Sanitize for mobile: allow only digits, make it typable
    const digits = (e.target.value || "").replace(/[^0-9]/g, "");
    const nRaw = digits === "" ? 0 : parseInt(digits, 10);
    const n = Math.max(0, Math.min(MAX_GROUP - 1, isNaN(nRaw) ? 0 : nRaw));
    setNumOthers(n);
    setGroupIdx(0);
    setGroup((prev) => {
      const arr = [...prev];
      while (arr.length < n) arr.push({ name: "", dob: "", idFile: null });
      while (arr.length > n) arr.pop();
      return arr;
    });
  }
  function handleGroupField(idx: number, field: "name" | "dob", value: string) {
    setGroup((prev) => prev.map((p, i) => (i === idx ? { ...p, [field]: value } : p)));
  }
  function handleGroupIdFile(idx: number, e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0] ?? null;
    setGroup((prev) => prev.map((p, i) => (i === idx ? { ...p, idFile: f } : p)));
  }

  // Pricing logic (unchanged)
  let price = 35;
  const totalPeople = 1 + numOthers;
  if (totalPeople === 1) price = 35;
  else if (totalPeople === 2) price = 35;
  else if (totalPeople >= 3) price = 50;

  // Primary applicant (same fields)
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [placeOfBirth, setPlaceOfBirth] = useState("");
  const [countryOfBirth, setCountryOfBirth] = useState("");
  const [maritalStatus, setMaritalStatus] = useState<"single" | "married">("single");
  const [spouseName, setSpouseName] = useState("");
  const [childrenNames, setChildrenNames] = useState("");
  const [multipleCitizenships, setMultipleCitizenships] = useState<"yes" | "no" | "">("");

  // Agreements
  const [startNowConsent, setStartNowConsent] = useState(false);
  const [refundPolicyAgree, setRefundPolicyAgree] = useState(false);
  const [consent, setConsent] = useState(false); // privacy

  // UI state
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // File helpers
  function okFile(f: File) {
    return ALLOWED.includes(f.type) && f.size <= MAX_FILE_SIZE;
  }
  async function toB64(f: File) {
    const ab = await f.arrayBuffer();
    let s = "";
    const bytes = new Uint8Array(ab);
    for (let i = 0; i < bytes.length; i += 0x8000) {
      s += String.fromCharCode(...Array.from(bytes.subarray(i, i + 0x8000)));
    }
    return btoa(s);
  }

  // ---------- Step-by-step validation / navigation ----------
  function next() {
    setError(null);

    if (step === 1) {
      if (numOthers === 0) {
        setStep(3); // skip group step entirely
      } else {
        setGroupIdx(0);
        setStep(2);
      }
      return;
    }

    if (step === 2) {
      if (numOthers > 0) {
        const p = group[groupIdx];
        if (!p || !p.name.trim() || !p.dob.trim()) {
          setError(formatError(tr.errors.personDetails, groupIdx + 2));
          return;
        }
        if (!emailUploadsLater) {
          if (!p.idFile) {
            setError(
              `Person ${groupIdx + 2}: please upload an ID file or tick "I’ll email ID uploads later".`
            );
            return;
          }
          if (p.idFile && !okFile(p.idFile)) {
            setError(`Person ${groupIdx + 2}: ID must be PDF/JPG/PNG and ≤ 5 MB.`);
            return;
          }
        }
        if (groupIdx < numOthers - 1) {
          setGroupIdx((i) => i + 1);
          return;
        }
      }
      setStep(3);
      return;
    }

    if (step === 3) {
      if (!firstName.trim() || !lastName.trim())
        return setError("Please enter your first and last name.");
      if (!email.trim()) return setError("Please enter your email.");
      if (!telephone.trim()) return setError("Please enter your telephone number.");
      setStep(4);
      return;
    }

    if (step === 4) {
      if (!dateOfBirth) return setError("Please enter your date of birth.");
      if (!placeOfBirth.trim()) return setError("Please enter your place of birth.");
      if (!countryOfBirth.trim()) return setError("Please enter your country of birth.");
      if (multipleCitizenships === "")
        return setError("Please indicate if you have multiple citizenships.");
      if (maritalStatus === "married" && !spouseName.trim())
        return setError("Please provide your spouse's name.");
      setStep(5);
      return;
    }
  }

  function back() {
    setError(null);

    if (step === 1) return;

    if (step === 2) {
      if (groupIdx > 0) {
        setGroupIdx((i) => i - 1);
      } else {
        setStep(1);
      }
      return;
    }

    if (step === 3) {
      if (numOthers > 0) {
        setStep(2);
        setGroupIdx(Math.max(0, numOthers - 1));
      } else {
        setStep(1);
      }
      return;
    }

    if (step === 4) return setStep(3);
    if (step === 5) return setStep(4);
  }

  // ---------- Submit (same payload, now run only on final step) ----------
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    // Agreements (required)
    if (!startNowConsent)
      return setError(
        "Please confirm you want us to start now and understand the cooling-off terms."
      );
    if (!refundPolicyAgree)
      return setError("Please confirm you agree to the Refund & Credit Policy.");
    if (!consent) return setError("Please consent to data processing to continue.");

    // Soft guidance for group IDs unless emailing later (also validated per-person in step 2)
    if (!emailUploadsLater) {
      for (let i = 0; i < numOthers; i++) {
        const p = group[i];
        if (!p?.name.trim() || !p?.dob.trim())
          return setError(`Person ${i + 2}: please add full name and DOB (dd/mm/yyyy).`);
        if (!p?.idFile)
          return setError(
            `Person ${i + 2}: please upload an ID file or tick "I’ll email ID uploads later".`
          );
        if (p.idFile && !okFile(p.idFile)) {
          return setError(`Person ${i + 2}: ID must be PDF/JPG/PNG and ≤ 5 MB.`);
        }
      }
    } else {
      for (let i = 0; i < numOthers; i++) {
        const p = group[i];
        if (!p?.name.trim() || !p?.dob.trim())
          return setError(`Person ${i + 2}: please add full name and DOB (dd/mm/yyyy).`);
      }
    }

    // Primary applicant + birth & family
    if (!firstName.trim() || !lastName.trim())
      return setError("Please enter your first and last name.");
    if (!email.trim()) return setError("Please enter your email.");
    if (!telephone.trim()) return setError("Please enter your telephone number.");
    if (!dateOfBirth) return setError("Please enter your date of birth.");
    if (!placeOfBirth.trim()) return setError("Please enter your place of birth.");
    if (!countryOfBirth.trim()) return setError("Please enter your country of birth.");
    if (multipleCitizenships === "")
      return setError("Please indicate if you have multiple citizenships.");
    if (maritalStatus === "married" && !spouseName.trim())
      return setError("Please provide your spouse's name.");

    setSubmitting(true);
    try {
      const bookingId = crypto.randomUUID();
      const serviceKey = "aire-registration";

      // Build files payload only when user uploads now
      const filesPayload: Array<{ filename: string; mimeType: string; data: string; tag?: string }> = [];
      if (!emailUploadsLater) {
        for (let i = 0; i < numOthers; i++) {
          const f = group[i]?.idFile;
          if (f) {
            filesPayload.push({
              filename: f.name,
              mimeType: f.type,
              data: await toB64(f),
              tag: `group_person_${i + 2}_id`,
            });
          }
        }
      }

      // Pack data (unchanged fields + group details + agreements)
      const dataPayload: Record<string, string> = {
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        dateOfBirth,
        placeOfBirth: placeOfBirth.trim(),
        countryOfBirth: countryOfBirth.trim(),
        maritalStatus,
        spouseName: spouseName.trim(),
        childrenNames: childrenNames.trim(),
        multipleCitizenships,
        totalPeople: String(totalPeople),
        emailUploadsLater: emailUploadsLater ? "1" : "0",
        quotedPrice: String(price),

        // Agreements for audit trail
        startNowConsent: startNowConsent ? "1" : "0",
        refundPolicyAgree: refundPolicyAgree ? "1" : "0",
        privacyConsent: consent ? "1" : "0",
        policyVersion: "2025-10-18",
      };
      group.slice(0, numOthers).forEach((p, i) => {
        dataPayload[`person_${i + 2}_name`] = p.name.trim();
        dataPayload[`person_${i + 2}_dob`] = p.dob.trim();
      });

      // Send to Google Apps Script
      const r1 = await fetch(GAS_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          token: GAS_TOKEN,
          action: "submit",
          bookingId,
          service: serviceKey,
          name: `${firstName.trim()} ${lastName.trim()}`,
          email: email.trim(),
          telephone: telephone.trim(),
          files: filesPayload, // may be empty if emailing later
          data: dataPayload,
        }),
      });
      type GasResponse = { ok?: boolean; error?: string } | undefined;
      let r1json: GasResponse = undefined;
      try {
        r1json = (await r1.json()) as GasResponse;
      } catch {}
      if (!r1.ok || !(r1json && r1json.ok)) {
        const msg = r1json && r1json.error ? r1json.error : "Could not save submission to Google.";
        throw new Error(msg);
      }

      // Stripe Payment Link and redirect
      const fd = new FormData();
      fd.append("bookingId", bookingId);
      fd.append("service", serviceKey);
      fd.append("email", email.trim());
      fd.append("name", `${firstName.trim()} ${lastName.trim()}`);

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
      const messageText = err instanceof Error ? err.message : String(err);
      setError(messageText || "Submission failed — please try again later.");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } finally {
      setSubmitting(false);
    }
  }

  const submitDisabled =
    submitting || !startNowConsent || !refundPolicyAgree || !consent;

  // ---------- UI ----------
  return (
    <form onSubmit={handleSubmit} className="space-y-4" aria-live="polite">
      {/* Progress */}
      <div className="w-full bg-gray-200/70 h-2 rounded-full">
        <div
          className="h-2 rounded-full bg-green-900 transition-[width] duration-300 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>

      {/* Stepper */}
      <ol className="mt-3 grid grid-cols-1 sm:grid-cols-5 gap-2 text-xs">
        {tr.steps.map((stepTitle, i) => {
          const active = step >= (i + 1);
          return (
            <li
              key={stepTitle}
              className={`flex items-center gap-2 rounded-lg border px-2.5 py-1.5 ${
                active
                  ? "border-green-300 bg-green-50 text-green-900"
                  : "border-gray-200 bg-white text-gray-600"
              }`}
            >
              <span
                className={`inline-flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-semibold ${
                  active ? "bg-green-800 text-white" : "bg-gray-300 text-gray-700"
                }`}
              >
                {i + 1}
              </span>
              <span className="truncate">{stepTitle}</span>
            </li>
          );
        })}
      </ol>

      {/* STEP 1: Household & pricing */}
      {step === 1 && (
        <Section
          title={tr.level1.title}
          subtitle="Tell us who’s in the booking. You can upload IDs later if you prefer."
        >
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg border p-3 bg-green-50">
              <p className="text-sm">
                <strong>£35</strong> — {tr.level1.pricing.single}<br />
                <strong>£50</strong> — {tr.level1.pricing.family}
              </p>
              <p className="text-[11px] text-gray-700 mt-1">
                {tr.level1.pricing.note}
              </p>
            </div>
            <div>
              <Field label={tr.level1.howMany} required>
                <input
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  placeholder="0"
                  value={numOthers === 0 ? "" : numOthers}
                  onChange={handleNumOthersChange}
                  className="block w-28 rounded border px-3 py-2"
                />
              </Field>
              <p className="text-xs text-gray-600 mt-1">
                {tr.level1.coupleHint}
              </p>
              <div className="mt-2 inline-flex items-center gap-2">
                <input
                  id="emailLater"
                  type="checkbox"
                  checked={emailUploadsLater}
                  onChange={(e) => setEmailUploadsLater(e.target.checked)}
                />
                <label htmlFor="emailLater" className="text-sm">
                  I’ll email ID uploads later to{" "}
                  <a className="underline" href="mailto:resinaro@proton.me">resinaro@proton.me</a>
                </label>
              </div>
            </div>
          </div>

          <div className="rounded-lg border p-3 bg-white">
            <p className="text-sm text-green-900">
              <strong>{tr.level1.totalPrice} £{price}</strong>
            </p>
          </div>

          {error && <div className="text-red-600 text-sm">{error}</div>}

          <div className="flex justify-end gap-2">
            <button type="button" onClick={next} className="px-4 py-2 rounded bg-green-900 text-white">
              {tr.level1.continue}
            </button>
          </div>
        </Section>
      )}

      {/* STEP 2: Group members (mini-steps) */}
      {step === 2 && (
        <Section
          title={`${tr.level2.title} ${groupIdx + 2} ${tr.level2.of} ${1 + numOthers}`}
          subtitle={tr.level2.subtitle}
        >
          {numOthers === 0 ? (
            <div className="text-sm text-gray-700">
              {tr.level2.noOthers}
            </div>
          ) : (
            <>
              <div className="w-full bg-gray-200/70 h-2 rounded-full">
                <div
                  className="h-2 rounded-full bg-amber-500 transition-[width] duration-300 ease-out"
                  style={{ width: `${Math.round(((groupIdx + 1) / numOthers) * 100)}%` }}
                />
              </div>
              <p className="text-xs text-gray-600 mt-2">
                {tr.level2.progress} {groupIdx + 1} / {numOthers}
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                <Field label={tr.level2.fullName} required>
                  <input
                    value={group[groupIdx]?.name || ""}
                    onChange={(e) => handleGroupField(groupIdx, "name", e.target.value)}
                    className="block w-full rounded border px-3 py-2"
                    placeholder={tr.level2.fullNamePlaceholder}
                  />
                </Field>
                <Field label={tr.level2.dob} required>
                  <input
                    type="text"
                    inputMode="text"
                    pattern="\d{2}/\d{2}/\d{4}"
                    placeholder={tr.level2.dobPlaceholder}
                    value={group[groupIdx]?.dob || ""}
                    onChange={(e) => handleGroupField(groupIdx, "dob", e.target.value)}
                    className="block w-full rounded border px-3 py-2"
                  />
                </Field>
              </div>

              {/* Upload now vs email later toggle (visible on every group step) */}
              {!emailUploadsLater && (
                <Field
                  label={tr.level2.uploadId}
                  hint="PDF/JPG/PNG, up to 5 MB. At least one person should have Italian ID (passport or carta d’identità)."
                  required
                >
                  <input
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) => handleGroupIdFile(groupIdx, e)}
                    className="block w-full"
                  />
                </Field>
              )}
              <div className="mt-1 inline-flex items-center gap-2">
                <input
                  id={`emailLaterStep2-${groupIdx}`}
                  type="checkbox"
                  checked={emailUploadsLater}
                  onChange={(e) => setEmailUploadsLater(e.target.checked)}
                />
                <label htmlFor={`emailLaterStep2-${groupIdx}`} className="text-sm">
                  I’ll email ID uploads later to{" "}
                  <a className="underline" href="mailto:resinaro@proton.me">resinaro@proton.me</a>
                </label>
              </div>

              <div className="text-xs text-red-800 bg-red-50 border-l-4 border-red-400 rounded p-3">
                                <strong>{tr.level2.important}</strong> {tr.level2.importantNote}
              </div>
            </>
          )}

          {error && <div className="text-red-600 text-sm">{error}</div>}

          <div className="flex justify-between">
            <button type="button" onClick={back} className="px-3 py-2 rounded border">
              {tr.level2.back}
            </button>
            <div className="flex gap-2">
              {groupIdx > 0 && (
                <button
                  type="button"
                  onClick={() => setGroupIdx((i) => Math.max(0, i - 1))}
                  className="px-3 py-2 rounded border"
                >
                  {tr.level2.prevPerson}
                </button>
              )}
              {groupIdx < Math.max(0, numOthers - 1) ? (
                <button
                  type="button"
                  onClick={next}
                  className="px-4 py-2 rounded bg-green-900 text-white"
                >
                  {tr.level2.saveNext}
                </button>
              ) : (
                <button
                  type="button"
                  onClick={next}
                  className="px-4 py-2 rounded bg-green-900 text-white"
                >
                  {tr.level2.continue}
                </button>
              )}
            </div>
          </div>
        </Section>
      )}

      {/* STEP 3: Your details */}
      {step === 3 && (
        <Section title={tr.level3.title} subtitle={tr.level3.subtitle}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Field label={tr.level3.firstName} required>
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="block w-full rounded border px-3 py-2"
              />
            </Field>
            <Field label={tr.level3.lastName} required>
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="block w-full rounded border px-3 py-2"
              />
            </Field>
            <Field label={tr.level3.email} required>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full rounded border px-3 py-2"
              />
            </Field>
            <Field label={tr.level3.telephone} required hint={tr.level3.telephoneHint}>
              <input
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
                className="block w-full rounded border px-3 py-2"
                placeholder="+44…"
              />
            </Field>
          </div>

          {error && <div className="text-red-600 text-sm">{error}</div>}
          <div className="flex justify-between">
            <button type="button" onClick={back} className="px-3 py-2 rounded border">
              Back
            </button>
            <button type="button" onClick={next} className="px-4 py-2 rounded bg-green-900 text-white">
              Continue
            </button>
          </div>
        </Section>
      )}

      {/* STEP 4: Birth & family */}
      {step === 4 && (
        <Section title={tr.level4.title} subtitle={tr.level4.subtitle}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <Field label="Date of birth (dd/mm/yyyy)" required>
              <input
                type="text"
                inputMode="text"
                pattern="\d{2}/\d{2}/\d{4}"
                placeholder="dd/mm/yyyy"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                className="block w-full rounded border px-3 py-2"
              />
            </Field>
            <Field label="Place of birth" required>
              <input
                value={placeOfBirth}
                onChange={(e) => setPlaceOfBirth(e.target.value)}
                className="block w-full rounded border px-3 py-2"
              />
            </Field>
            <Field label="Country of birth" required>
              <input
                value={countryOfBirth}
                onChange={(e) => setCountryOfBirth(e.target.value)}
                className="block w-full rounded border px-3 py-2"
              />
            </Field>
          </div>

          <div className="rounded-lg border bg-gray-50 p-3">
            <p className="text-sm font-medium mb-2">
              Marital status <span className="text-red-600">*</span>
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <label className="inline-flex items-center gap-2">
                <input
                  type="radio"
                  name="marital"
                  checked={maritalStatus === "single"}
                  onChange={() => setMaritalStatus("single")}
                />
                <span>Single</span>
              </label>
              <label className="inline-flex items-center gap-2">
                <input
                  type="radio"
                  name="marital"
                  checked={maritalStatus === "married"}
                  onChange={() => setMaritalStatus("married")}
                />
                <span>Married</span>
              </label>
            </div>

            {maritalStatus === "married" && (
              <div className="mt-3">
                <Field label="Spouse name" required>
                  <input
                    value={spouseName}
                    onChange={(e) => setSpouseName(e.target.value)}
                    className="block w-full rounded border px-3 py-2"
                  />
                </Field>
              </div>
            )}
          </div>

          <Field label="Children (names, comma-separated)">
            <input
              value={childrenNames}
              onChange={(e) => setChildrenNames(e.target.value)}
              className="block w-full rounded border px-3 py-2"
              placeholder="e.g. Giulia Rossi, Paolo Rossi"
            />
          </Field>

          <div className="rounded-lg border bg-gray-50 p-3">
            <p className="text-sm font-medium mb-2">
              Do you have multiple citizenships? <span className="text-red-600">*</span>
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <label className="inline-flex items-center gap-2">
                <input
                  type="radio"
                  name="multiCit"
                  checked={multipleCitizenships === "yes"}
                  onChange={() => setMultipleCitizenships("yes")}
                />
                <span>Yes</span>
              </label>
              <label className="inline-flex items-center gap-2">
                <input
                  type="radio"
                  name="multiCit"
                  checked={multipleCitizenships === "no"}
                  onChange={() => setMultipleCitizenships("no")}
                />
                <span>No</span>
              </label>
            </div>
          </div>

          {error && <div className="text-red-600 text-sm">{error}</div>}
          <div className="flex justify-between">
            <button type="button" onClick={back} className="px-3 py-2 rounded border">
              Back
            </button>
            <button type="button" onClick={next} className="px-4 py-2 rounded bg-green-900 text-white">
              Continue
            </button>
          </div>
        </Section>
      )}

      {/* STEP 5: Agreements & submit */}
      {step === 5 && (
        <Section
          title={tr.level5.title}
          subtitle={tr.level5.subtitle}
        >
          <div className="rounded-2xl border border-green-200 bg-green-50 p-4">
            <p className="text-sm font-semibold text-green-900">{tr.level5.agreementsTitle}</p>
            <div className="mt-2 space-y-3 text-sm text-gray-800">
              <label className="flex items-start gap-2">
                <input
                  type="checkbox"
                  checked={startNowConsent}
                  onChange={(e) => setStartNowConsent(e.target.checked)}
                  className="mt-1"
                />
                <span>
                  I ask you to <strong>start work immediately</strong>. I understand I have a 14-day
                  cooling-off period, but if I cancel after work has begun you may deduct a proportionate
                  amount for work already completed; once the service is <strong>fully performed</strong> within
                  14 days, I will <strong>lose my right to cancel</strong>.
                </span>
              </label>

              <label className="flex items-start gap-2">
                <input
                  type="checkbox"
                  checked={refundPolicyAgree}
                  onChange={(e) => setRefundPolicyAgree(e.target.checked)}
                  className="mt-1"
                />
                <span>
                  I have read and agree to the{" "}
                  <Link href={p(locale, "/refund-policy")} className="underline text-green-900">
                    {tr.level5.refundPolicy2}
                  </Link>
                  . I understand Resinaro’s default remedy is account credit valid for 12 months,
                  and cash refunds are only provided where legally required.
                </span>
              </label>

              <label className="flex items-start gap-2">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-1"
                />
                <span>
                  I consent to Resinaro storing and processing my information to deliver this service.{" "}
                  <Link href={p(locale, "/privacy-policy")} className="underline">
                    {tr.level5.privacy2}
                  </Link>
                </span>
              </label>
            </div>
          </div>

          <div className="rounded-lg border p-3 bg-white">
            <p className="text-sm text-green-900">
              <strong>Total to pay: £{price}</strong>
            </p>
            <p className="text-[11px] text-gray-600 mt-1">
              You’ll be redirected to payment after submitting. We’re an independent admin support service.
            </p>
          </div>

          {error && (
            <div className="text-red-600 text-sm" role="alert">
              {error}
            </div>
          )}

          <div className="flex justify-between">
            <button type="button" onClick={back} className="px-3 py-2 rounded border">
              {tr.level5.back}
            </button>
            <button
              type="submit"
              disabled={submitDisabled}
              className={`px-4 py-2 rounded text-white ${
                submitDisabled ? "bg-gray-400 cursor-not-allowed" : "bg-green-900 hover:bg-green-800"
              }`}
            >
              {submitting ? tr.level5.submitting : `${tr.level5.submit} £${price}`}
            </button>
          </div>

          <p className="text-[11px] text-gray-600 mt-3">
            Prefer email? Send details to{" "}
            <a className="underline" href="mailto:resinaro@proton.me">resinaro@proton.me</a>.
          </p>
        </Section>
      )}
    </form>
  );
}
