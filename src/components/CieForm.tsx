"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";

const GAS_URL =
  "https://script.google.com/macros/s/AKfycbx_S1yGOb31CWMQVvi6qShVzgRA350Sj40aKnLVNl4ctdHxm77nzjYZIgnhVmgY1BQ/exec";
const GAS_TOKEN = "abc123!abidsdjaosda!!!hhda2314532";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB
const ALLOWED_TYPES = ["application/pdf", "image/jpeg", "image/jpg", "image/png"];

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
    <section className="rounded-2xl border border-gray-200 bg-white p-4 sm:p-5">
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

export default function CieForm() {
  const proofRef = useRef<HTMLInputElement | null>(null);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [placeOfBirth, setPlaceOfBirth] = useState("");
  const [countryOfBirth, setCountryOfBirth] = useState("");
  const [telephone, setTelephone] = useState("");
  const [multipleCitizenships, setMultipleCitizenships] = useState<"yes" | "no" | "">("");
  const [proof, setProof] = useState<File | null>(null);

  const [consent, setConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const submitDisabled = submitting || !consent;

  function validateFile(f: File): string | null {
    if (!ALLOWED_TYPES.includes(f.type)) return "Proof must be PDF, JPG or PNG.";
    if (f.size > MAX_FILE_SIZE) return "Proof must be under 5 MB.";
    return null;
  }

  function onProofChange(e: React.ChangeEvent<HTMLInputElement>) {
    setError(null);
    const f = e.target.files?.[0] ?? null;
    if (!f) { setProof(null); return; }
    const v = validateFile(f);
    if (v) { setError(v); if (proofRef.current) proofRef.current.value = ""; return; }
    setProof(f);
  }

  async function fileToBase64(file: File) {
    const buf = await file.arrayBuffer();
    let s = "";
    const bytes = new Uint8Array(buf);
    const chunk = 0x8000;
    for (let i = 0; i < bytes.length; i += chunk) {
      s += String.fromCharCode(...Array.from(bytes.subarray(i, i + chunk)));
    }
    return btoa(s);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    // Keep same validation rules (do not change required info)
    if (!firstName.trim() || !lastName.trim()) return setError("Please enter your name and surname.");
    if (!dateOfBirth) return setError("Please enter your date of birth.");
    if (!placeOfBirth.trim()) return setError("Please enter your place of birth.");
    if (!countryOfBirth.trim()) return setError("Please enter your country of birth.");
    if (!telephone.trim()) return setError("Please enter your telephone number.");
    if (multipleCitizenships === "") return setError("Please indicate if you have multiple citizenships.");
    if (!proof) return setError("Please upload your proof of UK address.");
    if (!consent) return setError("Please consent to data processing to continue.");

    setSubmitting(true);
    try {
      const bookingId = crypto.randomUUID();
      const serviceKey = "id-card";

      const filesPayload: Array<{ filename: string; mimeType: string; data: string }> = [];
      filesPayload.push({
        filename: proof.name,
        mimeType: proof.type,
        data: await fileToBase64(proof),
      });

      const dataPayload = {
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        dateOfBirth,
        placeOfBirth: placeOfBirth.trim(),
        countryOfBirth: countryOfBirth.trim(),
        telephone: telephone.trim(),
        multipleCitizenships,
        otpDisclaimer: "User informed we will need a one-time code (OTP) from email during booking.",
      };

      const r1 = await fetch(GAS_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          token: GAS_TOKEN,
          action: "submit",
          bookingId,
          service: serviceKey,
          name: `${firstName.trim()} ${lastName.trim()}`,
          email: "", // unchanged: email optional for this form
          telephone: telephone.trim(),
          files: filesPayload,
          data: dataPayload,
        }),
      });
      type GasResponse = { ok?: boolean; error?: string } | undefined;
      let r1json: GasResponse = undefined;
      try { r1json = (await r1.json()) as GasResponse; } catch {}
      if (!r1.ok || !(r1json && r1json.ok)) {
        const msg = r1json && r1json.error ? r1json.error : "Could not save submission to Google.";
        throw new Error(msg);
      }

      const fd = new FormData();
      fd.append("bookingId", bookingId);
      fd.append("service", serviceKey);
      fd.append("email", "");
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
      const msg = err instanceof Error ? err.message : String(err);
      setError(msg || "Submission failed — please try again later.");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" aria-live="polite">
      {/* Visual stepper (simple, non-interactive) */}
      <div className="w-full bg-gray-200/70 h-2 rounded-full">
        <div className="h-2 rounded-full bg-green-900 transition-[width] duration-300 ease-out" style={{ width: "100%" }} />
      </div>
      <ol className="mt-3 grid grid-cols-1 sm:grid-cols-4 gap-2 text-xs">
        {["Your details", "Birth info", "Contact & status", "Proof & consent"].map((t, i) => (
          <li
            key={t}
            className="flex items-center gap-2 rounded-lg border px-2.5 py-1.5 border-green-300 bg-green-50 text-green-900"
          >
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-semibold bg-green-800 text-white">
              {i + 1}
            </span>
            <span className="truncate">{t}</span>
          </li>
        ))}
      </ol>

      {/* Sections */}
      <Section title="Basic details" subtitle="Exactly as they appear on your documents.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <Field label="Name" required>
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="block w-full rounded border px-3 py-2"
              placeholder="Mario"
            />
          </Field>
          <Field label="Surname" required>
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="block w-full rounded border px-3 py-2"
              placeholder="Rossi"
            />
          </Field>
        </div>
      </Section>

      <Section title="Birth information">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <Field label="Date of birth" required hint="Use the calendar input">
            <input
              type="date"
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
              placeholder="City/town"
            />
          </Field>
          <Field label="Country of birth" required>
            <input
              value={countryOfBirth}
              onChange={(e) => setCountryOfBirth(e.target.value)}
              className="block w-full rounded border px-3 py-2"
              placeholder="e.g. Italy"
            />
          </Field>
        </div>
      </Section>

      <Section title="Contact & citizenship status">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <Field label="Telephone" required hint="Add country code, e.g. +44 7…">
            <input
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
              className="block w-full rounded border px-3 py-2"
              placeholder="+44…"
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
        </div>
      </Section>

      <Section title="Proof & consent" subtitle="Upload one proof of UK address. You can email documents if you prefer: resinaro@proton.me">
        <div className="rounded-lg border bg-gray-50 p-3">
          <Field
            label="Proof of UK address"
            required
            hint="Utility bill, council tax, tenancy or bank statement showing your UK address. PDF/JPG/PNG, up to 5 MB."
          >
            <input
              ref={proofRef}
              type="file"
              accept=".pdf,image/png,image/jpeg"
              onChange={onProofChange}
              className="block w-full"
            />
          </Field>

          {proof && (
            <div className="mt-2 flex items-center justify-between bg-white border px-3 py-2 rounded">
              <div className="truncate">
                <strong className="text-sm">{proof.name}</strong>
                <div className="text-xs text-gray-500">{Math.round(proof.size / 1024)} KB</div>
              </div>
              <button
                type="button"
                onClick={() => {
                  setProof(null);
                  if (proofRef.current) proofRef.current.value = "";
                }}
                className="text-red-600 text-sm"
              >
                Remove
              </button>
            </div>
          )}
        </div>

        <div className="text-sm bg-amber-50 border-l-4 border-amber-300 p-3 rounded">
          <strong>Heads-up:</strong> during booking, your consulate portal may send a one-time passcode (OTP) to your email. We’ll ask you to share the code securely at that step.
        </div>

        <div className="rounded-lg border p-3">
          <p className="text-sm text-gray-800">
            Service fee: <strong>£35</strong> for administrative assistance.{" "}
            <em>Consulate/government fees are separate</em> and paid to the authority. We are not the Consulate and do not give legal advice;{" "}
            <strong>no guarantees</strong> of availability or outcome.
          </p>
          <label className="flex items-start gap-2 mt-2 text-sm">
            <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} />
            <span>
              I consent to Resinaro storing and processing my documents strictly to deliver this service.{" "}
              <Link href="/privacy" className="underline">Privacy Policy</Link>
            </span>
          </label>
        </div>
      </Section>

      {/* Error + actions */}
      {error && <div className="text-red-600 text-sm" role="alert">{error}</div>}

      <div className="flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
        <p className="text:[11px] text-gray-600">
          Questions first? Email <a className="underline" href="mailto:resinaro@proton.me">resinaro@proton.me</a>.
        </p>
        <button
          type="submit"
          disabled={submitDisabled}
          className={`px-4 py-2 rounded text-white ${
            submitDisabled ? "bg-gray-400 cursor-not-allowed" : "bg-green-900 hover:bg-green-800"
          }`}
        >
          {submitting ? "Submitting…" : "Submit CIE details & Pay £35"}
        </button>
      </div>

      <p className="text-[11px] text-gray-600">
        You’ll be redirected to payment after submitting. We’re an independent admin support service and not the Consulate.
      </p>
    </form>
  );
}
