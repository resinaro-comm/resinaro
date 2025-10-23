// src/components/VisaForm.tsx
"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";

/** Google Apps Script endpoint + token **/
const GAS_URL =
  "https://script.google.com/macros/s/AKfycbx_S1yGOb31CWMQVvi6qShVzgRA350Sj40aKnLVNl4ctdHxm77nzjYZIgnhVmgY1BQ/exec";
const GAS_TOKEN = "abc123!abidsdjaosda!!!hhda2314532"; // must match AUTH_TOKEN in Apps Script

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB
const ALLOWED_TYPES = ["application/pdf", "image/jpeg", "image/jpg", "image/png"];

/* ---------- Small UI helpers ---------- */
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
        {subtitle && (
          <p className="text-xs sm:text-sm text-gray-700 mt-0.5">{subtitle}</p>
        )}
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

/* ---------- Component ---------- */
export default function VisaForm() {
  // Wizard steps (one-at-a-time)
  // 1) Contact  2) Identity  3) Address proof  4) Notes & agreements
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const stepTitles = ["Contact", "Identity", "Address", "Notes & consent"];
  const pct = [0, 25, 50, 75, 100][step] || 0;

  // Refs
  const addressRef = useRef<HTMLInputElement | null>(null);

  // Contact (required)
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");

  // Identity & birth details (required)
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [countryOfBirth, setCountryOfBirth] = useState("");
  const [currentNationality, setCurrentNationality] = useState("");
  const [placeOfBirth, setPlaceOfBirth] = useState("");

  // Passport (required)
  const [passportNumber, setPassportNumber] = useState("");
  const [passportExpiry, setPassportExpiry] = useState("");

  // Status question (required)
  const [marriedToEU, setMarriedToEU] = useState<"yes" | "no" | "">("");

  // Proof of UK residence (upload now or later)
  const [proofOfAddress, setProofOfAddress] = useState<File | null>(null);
  const [sendDocsLater, setSendDocsLater] = useState(false);

  // Other
  const [notes, setNotes] = useState("");

  // Agreements
  const [startNowConsent, setStartNowConsent] = useState(false); // NEW
  const [refundPolicyAgree, setRefundPolicyAgree] = useState(false);
  const [consent, setConsent] = useState(false);

  // UI
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  /* ---------- Helpers ---------- */
  function validateFile(f: File, label: string): string | null {
    if (!ALLOWED_TYPES.includes(f.type)) return `${label} must be PDF, JPG or PNG.`;
    if (f.size > MAX_FILE_SIZE) return `${label} must be under ${MAX_FILE_SIZE / (1024 * 1024)} MB.`;
    return null;
  }

  function onAddressProofChange(e: React.ChangeEvent<HTMLInputElement>) {
    setError(null);
    const f = e.target.files?.[0] ?? null;
    if (!f) {
      setProofOfAddress(null);
      return;
    }
    const v = validateFile(f, "Proof of address");
    if (v) {
      setError(v);
      if (addressRef.current) addressRef.current.value = "";
      return;
    }
    setProofOfAddress(f);
  }

  function removeProofOfAddress() {
    setProofOfAddress(null);
    if (addressRef.current) addressRef.current.value = "";
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

  /* ---------- Step navigation with per-step validation ---------- */
  function next() {
    setError(null);

    if (step === 1) {
      if (!firstName.trim() || !lastName.trim())
        return setError("Please enter your first and last name.");
      if (!email.trim()) return setError("Please enter your email.");
      if (!telephone.trim()) return setError("Please enter your telephone number.");
      setStep(2);
      return;
    }

    if (step === 2) {
      if (!dateOfBirth) return setError("Please enter your date of birth.");
      if (!placeOfBirth.trim()) return setError("Please enter your place of birth (city/town).");
      if (!countryOfBirth.trim()) return setError("Please enter your country of birth.");
      if (!currentNationality.trim()) return setError("Please enter your current nationality.");
      if (!passportNumber.trim()) return setError("Please enter your passport number.");
      if (!passportExpiry) return setError("Please enter your passport expiry date.");
      if (marriedToEU === "") return setError("Please tell us if you are married to a European citizen.");
      setStep(3);
      return;
    }

    if (step === 3) {
      // Address proof is optional; we just proceed.
      setStep(4);
      return;
    }
  }

  function back() {
    setError(null);
    if (step === 1) return;
    if (step === 2) return setStep(1);
    if (step === 3) return setStep(2);
    if (step === 4) return setStep(3);
  }

  /* ---------- Submit (final step) ---------- */
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    // Final checks (agreements + a quick sanity on notes)
    if (!notes.trim()) return setError("Please add a short note about your situation.");
    if (!startNowConsent)
      return setError(
        "Please confirm you want us to start now and understand the cooling-off terms."
      );
    if (!refundPolicyAgree)
      return setError("Please confirm you agree to the Refund & Credit Policy.");
    if (!consent) return setError("Please consent to data processing to continue.");

    setSubmitting(true);

    try {
      const bookingId = crypto.randomUUID();

      // Build uploads payload (base64)
      const filesPayload: Array<{ filename: string; mimeType: string; data: string }> = [];
      if (proofOfAddress) {
        filesPayload.push({
          filename: proofOfAddress.name,
          mimeType: proofOfAddress.type,
          data: await fileToBase64(proofOfAddress),
        });
      }

      // Pack answers
      const dataPayload = {
        passportNumber: passportNumber.trim(),
        passportExpiry,
        dateOfBirth,
        countryOfBirth: countryOfBirth.trim(),
        currentNationality: currentNationality.trim(),
        placeOfBirth: placeOfBirth.trim(),
        marriedToEU,
        notes: notes.trim(),
        sendDocsLater: sendDocsLater ? "1" : "0",

        // Agreements (audit trail)
        startNowConsent: startNowConsent ? "1" : "0",
        refundPolicyAgree: refundPolicyAgree ? "1" : "0",
        privacyConsent: consent ? "1" : "0",
        policyVersion: "2025-10-18",
      };

      // Send to Google Apps Script
      const r1 = await fetch(GAS_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          token: GAS_TOKEN,
          action: "submit",
          bookingId,
          service: "visa-application",
          name: `${firstName.trim()} ${lastName.trim()}`,
          email: email.trim(),
          telephone: telephone.trim(),
          files: filesPayload,
          data: dataPayload,
        }),
      });

      type GasResponse = { ok?: boolean; error?: string } | undefined;
      let r1json: GasResponse = undefined;
      try {
        r1json = (await r1.json()) as GasResponse;
      } catch {
        /* Some Apps Script deploys return empty body on success */
      }
      if (!r1.ok || !(r1json && r1json.ok)) {
        const msg = r1json && r1json.error ? r1json.error : "Could not save submission to Google.";
        throw new Error(msg);
      }

      // Stripe Payment Link
      const fd = new FormData();
      fd.append("bookingId", bookingId);
      fd.append("service", "visa-application");
      fd.append("email", email.trim());
      fd.append("name", `${firstName.trim()} ${lastName.trim()}`);

      const r2 = await fetch("/api/services/book", { method: "POST", body: fd });
      if (!r2.ok) {
        const text = await r2.text().catch(() => "");
        throw new Error(text || "Could not prepare checkout.");
      }
      const { url } = (await r2.json()) as { url?: string };
      if (!url) throw new Error("No payment link returned.");
      window.location.href = url; // → Stripe
    } catch (err: unknown) {
      const messageText = err instanceof Error ? err.message : String(err);
      setError(messageText || "Submission failed — please try again later.");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } finally {
      setSubmitting(false);
    }
  }

  const submitDisabled = submitting || !startNowConsent || !refundPolicyAgree || !consent;

  /* ---------- UI ---------- */
  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
      encType="multipart/form-data"
      aria-live="polite"
    >
      {/* Progress */}
      <div className="w-full bg-gray-200/70 h-2 rounded-full">
        <div
          className="h-2 rounded-full bg-green-900 transition-[width] duration-300 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>

      {/* Stepper */}
      <ol className="mt-3 grid grid-cols-1 sm:grid-cols-4 gap-2 text-xs">
        {stepTitles.map((t, i) => {
          const active = step >= (i + 1);
          return (
            <li
              key={t}
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
              <span className="truncate">{t}</span>
            </li>
          );
        })}
      </ol>

      {/* STEP 1: Contact */}
      {step === 1 && (
        <Section
          title="Level 1 — Contact"
          subtitle="Say hi 👋 We’ll use these to send your checklist and booking info."
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Field label="First name" required>
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="block w-full rounded border px-3 py-2"
                placeholder="Mario"
              />
            </Field>
            <Field label="Last name" required>
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="block w-full rounded border px-3 py-2"
                placeholder="Rossi"
              />
            </Field>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Field label="Email" required>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full rounded border px-3 py-2"
                placeholder="you@example.com"
              />
            </Field>
            <Field label="Telephone" required hint="Add country code, e.g. +44 7…">
              <input
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
                className="block w-full rounded border px-3 py-2"
                placeholder="+44…"
              />
            </Field>
          </div>

          {error && <div className="text-red-600 text-sm">{error}</div>}

          <div className="flex justify-end">
            <button
              type="button"
              onClick={next}
              className="px-4 py-2 rounded bg-green-900 text-white"
            >
              Continue
            </button>
          </div>
        </Section>
      )}

      {/* STEP 2: Identity */}
      {step === 2 && (
        <Section
          title="Level 2 — Identity"
          subtitle="Exactly as they appear on your passport/birth documents."
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Field label="Date of birth" required hint="Format: dd/mm/yyyy">
              <input
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                className="block w-full rounded border px-3 py-2"
                placeholder="dd/mm/yyyy"
              />
            </Field>
            <Field label="Place of birth (city/town)" required>
              <input
                value={placeOfBirth}
                onChange={(e) => setPlaceOfBirth(e.target.value)}
                className="block w-full rounded border px-3 py-2"
                placeholder="e.g. Milan"
              />
            </Field>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Field label="Country of birth" required>
              <input
                value={countryOfBirth}
                onChange={(e) => setCountryOfBirth(e.target.value)}
                className="block w-full rounded border px-3 py-2"
                placeholder="e.g. Italy"
              />
            </Field>
            <Field label="Current nationality" required>
              <input
                value={currentNationality}
                onChange={(e) => setCurrentNationality(e.target.value)}
                className="block w-full rounded border px-3 py-2"
                placeholder="e.g. Italian"
              />
            </Field>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Field label="Passport number" required>
              <input
                value={passportNumber}
                onChange={(e) => setPassportNumber(e.target.value)}
                className="block w-full rounded border px-3 py-2"
                placeholder="As shown on passport"
              />
            </Field>
            <Field label="Passport expiry date" required hint="Format: dd/mm/yyyy">
              <input
                value={passportExpiry}
                onChange={(e) => setPassportExpiry(e.target.value)}
                className="block w-full rounded border px-3 py-2"
                placeholder="dd/mm/yyyy"
              />
            </Field>
          </div>

          <div className="rounded-lg border bg-gray-50 p-3">
            <p className="text-sm font-medium mb-2">
              Are you married to a European citizen?{" "}
              <span className="text-red-600">*</span>
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <label className="inline-flex items-center gap-2">
                <input
                  type="radio"
                  name="marriedToEU"
                  checked={marriedToEU === "yes"}
                  onChange={() => setMarriedToEU("yes")}
                />
                <span>Yes</span>
              </label>
              <label className="inline-flex items-center gap-2">
                <input
                  type="radio"
                  name="marriedToEU"
                  checked={marriedToEU === "no"}
                  onChange={() => setMarriedToEU("no")}
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
            <button
              type="button"
              onClick={next}
              className="px-4 py-2 rounded bg-green-900 text-white"
            >
              Continue
            </button>
          </div>
        </Section>
      )}

      {/* STEP 3: Address proof */}
      {step === 3 && (
        <Section
          title="Level 3 — Address proof"
          subtitle="Upload now or send it later — whichever is easier."
        >
          <div className="rounded-lg border bg-gray-50 p-3">
            <Field
              label="Proof of UK residence"
              hint="Examples: council tax, tenancy, utility bill, bank statement, HMRC/DWP/NHS letter — must show your name & current UK address. PDF/JPG/PNG, up to 5 MB."
            >
              <input
                ref={addressRef}
                type="file"
                accept=".pdf,image/png,image/jpeg"
                onChange={onAddressProofChange}
                className="block w-full"
              />
            </Field>
            {proofOfAddress && (
              <div className="mt-2 flex items-center justify-between bg-white border px-3 py-2 rounded">
                <div className="truncate">
                  <strong className="text-sm">{proofOfAddress.name}</strong>
                  <div className="text-xs text-gray-500">
                    {Math.round(proofOfAddress.size / 1024)} KB
                  </div>
                </div>
                <button
                  type="button"
                  onClick={removeProofOfAddress}
                  className="text-red-600 text-sm"
                >
                  Remove
                </button>
              </div>
            )}
            <label className="flex items-center gap-2 mt-3">
              <input
                type="checkbox"
                checked={sendDocsLater}
                onChange={(e) => setSendDocsLater(e.target.checked)}
              />
              <span className="text-sm">
                I’ll email any missing documents later to{" "}
                <a className="underline" href="mailto:resinaro@proton.me">
                  resinaro@proton.me
                </a>
                .
              </span>
            </label>
          </div>

          {error && <div className="text-red-600 text-sm">{error}</div>}
          <div className="flex justify-between">
            <button type="button" onClick={back} className="px-3 py-2 rounded border">
              Back
            </button>
            <button
              type="button"
              onClick={next}
              className="px-4 py-2 rounded bg-green-900 text-white"
            >
              Continue
            </button>
          </div>
        </Section>
      )}

      {/* STEP 4: Notes & agreements (final) */}
      {step === 4 && (
        <Section
          title="Level 4 — Notes & agreements"
          subtitle="A couple of quick confirmations and we’re done 🎉"
        >
          <Field
            label="Tell us about your situation"
            hint="Deadlines, dependants, previous refusals, where you’ll apply, etc."
            required
          >
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="block w-full rounded border px-3 py-2"
              rows={4}
              placeholder="A few sentences help us tailor your checklist."
            />
          </Field>

          <div className="rounded-2xl border border-green-200 bg-green-50 p-4">
            <p className="text-sm text-gray-800">
              Service fee: <strong>£35</strong> for administrative assistance.{" "}
              <em>Government/provider fees are separate</em> and paid on the official portal. We’re
              not UKVI/TLS/VFS and can’t guarantee appointment availability or outcomes — but we’ll
              make it as easy as possible.
            </p>

            <div className="mt-3 space-y-3 text-sm">
              <label className="flex items-start gap-2">
                <input
                  type="checkbox"
                  checked={startNowConsent}
                  onChange={(e) => setStartNowConsent(e.target.checked)}
                  className="mt-1"
                />
                <span>
                  I ask you to <strong>start work immediately</strong>. I understand I have a 14-day
                  cooling-off period, but if I cancel after work has begun you may deduct a
                  proportionate amount for work already completed; once the service is{" "}
                  <strong>fully performed</strong> within 14 days, I will{" "}
                  <strong>lose my right to cancel</strong>.
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
                  <Link href="/refund-policy" className="underline text-green-900">
                    Refund & Credit Policy
                  </Link>
                  . I understand Resinaro’s default remedy is account credit valid for 12 months, and
                  cash refunds are only provided where legally required.
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
                  I consent to Resinaro storing and processing my information to deliver this
                  service.{" "}
                  <Link href="/privacy-policy" className="underline">
                    Privacy Policy
                  </Link>
                </span>
              </label>
            </div>
          </div>

          {error && (
            <div className="text-red-600 text-sm" role="alert">
              {error}
            </div>
          )}

          <div className="flex justify-between">
            <button type="button" onClick={back} className="px-3 py-2 rounded border">
              Back
            </button>
            <button
              type="submit"
              disabled={submitDisabled}
              className={`px-4 py-2 rounded text-white ${
                submitDisabled
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-green-900 hover:bg-green-800"
              }`}
            >
              {submitting ? "Submitting…" : "Submit details & Pay £35"}
            </button>
          </div>

          <p className="text-[11px] text-gray-600 mt-3">
            Prefer email? Send the same details to{" "}
            <a className="underline" href="mailto:resinaro@proton.me">
              resinaro@proton.me
            </a>
            .
          </p>
        </Section>
      )}
    </form>
  );
}
