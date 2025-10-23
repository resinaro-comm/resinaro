// src/components/AireForm.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";

// Google Apps Script endpoint + token (same as other forms)
const GAS_URL =
  "https://script.google.com/macros/s/AKfycbx_S1yGOb31CWMQVvi6qShVzgRA350Sj40aKnLVNl4ctdHxm77nzjYZIgnhVmgY1BQ/exec";
const GAS_TOKEN = "abc123!abidsdjaosda!!!hhda2314532"; // must match AUTH_TOKEN in Apps Script

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB
const ALLOWED = ["application/pdf", "image/jpeg", "image/jpg", "image/png"];

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
  // Wizard steps:
  // 1) Household & pricing
  // 2) Group members (mini-steps per person)
  // 3) Your details
  // 4) Birth & family
  // 5) Agreements & pay
  const [step, setStep] = useState<1 | 2 | 3 | 4 | 5>(1);

  // Progress bar (base steps). We also show mini progress for step 2.
  const stepTitles = ["Household", "Group", "You", "Birth & family", "Agreements"];
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
          setError(`Person ${groupIdx + 2}: please add full name and DOB (dd/mm/yyyy).`);
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

      {/* STEP 1: Household & pricing */}
      {step === 1 && (
        <Section
          title="Level 1 — Household & pricing"
          subtitle="Tell us who’s in the booking. You can upload IDs later if you prefer."
        >
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg border p-3 bg-green-50">
              <p className="text-sm">
                <strong>£35</strong> — single or couple<br />
                <strong>£50</strong> — family / 3+ people
              </p>
              <p className="text-[11px] text-gray-700 mt-1">
                Price is per booking. Consulate decisions and timing are outside our control.
              </p>
            </div>
            <div>
              <Field label="How many other people (besides you)?" required>
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
                For a couple, enter <strong>1</strong>. For a family, enter total additional people.
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
              <strong>Total price for this booking: £{price}</strong>
            </p>
          </div>

          {error && <div className="text-red-600 text-sm">{error}</div>}

          <div className="flex justify-end gap-2">
            <button type="button" onClick={next} className="px-4 py-2 rounded bg-green-900 text-white">
              Continue
            </button>
          </div>
        </Section>
      )}

      {/* STEP 2: Group members (mini-steps) */}
      {step === 2 && (
        <Section
          title={`Level 2 — Group member ${groupIdx + 2} of ${1 + numOthers}`}
          subtitle="Add details for each additional person."
        >
          {numOthers === 0 ? (
            <div className="text-sm text-gray-700">
              No additional people added. You can continue.
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
                Progress {groupIdx + 1} / {numOthers}
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                <Field label="Full name" required>
                  <input
                    value={group[groupIdx]?.name || ""}
                    onChange={(e) => handleGroupField(groupIdx, "name", e.target.value)}
                    className="block w-full rounded border px-3 py-2"
                    placeholder="Full name"
                  />
                </Field>
                <Field label="Date of birth (dd/mm/yyyy)" required>
                  <input
                    type="text"
                    inputMode="text"
                    pattern="\d{2}/\d{2}/\d{4}"
                    placeholder="dd/mm/yyyy"
                    value={group[groupIdx]?.dob || ""}
                    onChange={(e) => handleGroupField(groupIdx, "dob", e.target.value)}
                    className="block w-full rounded border px-3 py-2"
                  />
                </Field>
              </div>

              {/* Upload now vs email later toggle (visible on every group step) */}
              {!emailUploadsLater && (
                <Field
                  label="Upload valid ID for this person"
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
                <strong>Important:</strong> At least one person should have a valid Italian ID (passport or carta d’identità).
              </div>
            </>
          )}

          {error && <div className="text-red-600 text-sm">{error}</div>}

          <div className="flex justify-between">
            <button type="button" onClick={back} className="px-3 py-2 rounded border">
              Back
            </button>
            <div className="flex gap-2">
              {groupIdx > 0 && (
                <button
                  type="button"
                  onClick={() => setGroupIdx((i) => Math.max(0, i - 1))}
                  className="px-3 py-2 rounded border"
                >
                  Previous person
                </button>
              )}
              {groupIdx < Math.max(0, numOthers - 1) ? (
                <button
                  type="button"
                  onClick={next}
                  className="px-4 py-2 rounded bg-green-900 text-white"
                >
                  Save & next person
                </button>
              ) : (
                <button
                  type="button"
                  onClick={next}
                  className="px-4 py-2 rounded bg-green-900 text-white"
                >
                  Continue
                </button>
              )}
            </div>
          </div>
        </Section>
      )}

      {/* STEP 3: Your details */}
      {step === 3 && (
        <Section title="Level 3 — Your details" subtitle="Lead applicant contact details.">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Field label="First name" required>
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="block w-full rounded border px-3 py-2"
              />
            </Field>
            <Field label="Last name" required>
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="block w-full rounded border px-3 py-2"
              />
            </Field>
            <Field label="Email" required>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full rounded border px-3 py-2"
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
        <Section title="Level 4 — Birth & family" subtitle="A few details for AIRE.">
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
          title="Final — Agreements & pay"
          subtitle="Almost done! Confirm the agreements and submit to get the payment link."
        >
          <div className="rounded-2xl border border-green-200 bg-green-50 p-4">
            <p className="text-sm font-semibold text-green-900">Agreements (required)</p>
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
                  <Link href="/refund-policy" className="underline text-green-900">
                    Refund & Credit Policy
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
                  <Link href="/privacy-policy" className="underline">
                    Privacy Policy
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
              Back
            </button>
            <button
              type="submit"
              disabled={submitDisabled}
              className={`px-4 py-2 rounded text-white ${
                submitDisabled ? "bg-gray-400 cursor-not-allowed" : "bg-green-900 hover:bg-green-800"
              }`}
            >
              {submitting ? "Submitting…" : `Submit & Pay £${price}`}
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
