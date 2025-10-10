// src/components/AireForm.tsx
"use client";

import React, { useState } from "react";

// Google Apps Script endpoint + token (same as other forms)
const GAS_URL =
  "https://script.google.com/macros/s/AKfycbx_S1yGOb31CWMQVvi6qShVzgRA350Sj40aKnLVNl4ctdHxm77nzjYZIgnhVmgY1BQ/exec";
const GAS_TOKEN = "abc123!abidsdjaosda!!!hhda2314532"; // must match AUTH_TOKEN in Apps Script

export default function AireForm() {
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
  const [consent, setConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!firstName.trim() || !lastName.trim()) return setError("Please enter your first and last name.");
    if (!email.trim()) return setError("Please enter your email.");
    if (!telephone.trim()) return setError("Please enter your telephone number.");
    if (!dateOfBirth) return setError("Please enter your date of birth.");
    if (!placeOfBirth.trim()) return setError("Please enter your place of birth.");
    if (!countryOfBirth.trim()) return setError("Please enter your country of birth.");
    if (multipleCitizenships === "") return setError("Please indicate if you have multiple citizenships.");
    if (maritalStatus === "married" && !spouseName.trim()) return setError("Please provide your spouse's name.");
    if (!consent) return setError("Please consent to data processing to continue.");

    setSubmitting(true);
    try {
      const bookingId = crypto.randomUUID();
      const serviceKey = "aire-registration";

      const dataPayload = {
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        dateOfBirth,
        placeOfBirth: placeOfBirth.trim(),
        countryOfBirth: countryOfBirth.trim(),
        maritalStatus,
        spouseName: spouseName.trim(),
        childrenNames: childrenNames.trim(),
        multipleCitizenships,
      };

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
          files: [], // none required for AIRE form
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

      // Request Stripe Payment Link and redirect
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

  const submitDisabled = submitting || !consent;

  return (
    <form onSubmit={handleSubmit} className="space-y-4" aria-live="polite">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">First name *</label>
          <input value={firstName} onChange={(e) => setFirstName(e.target.value)} className="mt-1 block w-full rounded border px-3 py-2" required />
        </div>
        <div>
          <label className="block text-sm font-medium">Last name *</label>
          <input value={lastName} onChange={(e) => setLastName(e.target.value)} className="mt-1 block w-full rounded border px-3 py-2" required />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Email *</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 block w-full rounded border px-3 py-2" required />
        </div>
        <div>
          <label className="block text-sm font-medium">Telephone *</label>
          <input value={telephone} onChange={(e) => setTelephone(e.target.value)} className="mt-1 block w-full rounded border px-3 py-2" placeholder="+44..." required />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium">Date of birth *</label>
          <input type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} className="mt-1 block w-full rounded border px-3 py-2" required />
        </div>
        <div>
          <label className="block text-sm font-medium">Place of birth *</label>
          <input value={placeOfBirth} onChange={(e) => setPlaceOfBirth(e.target.value)} className="mt-1 block w-full rounded border px-3 py-2" required />
        </div>
        <div>
          <label className="block text-sm font-medium">Country of birth *</label>
          <input value={countryOfBirth} onChange={(e) => setCountryOfBirth(e.target.value)} className="mt-1 block w-full rounded border px-3 py-2" required />
        </div>
      </div>

      <div className="bg-gray-50 border rounded p-3">
        <p className="text-sm font-medium mb-2">Marital status *</p>
        <div className="flex items-center gap-6">
          <label className="inline-flex items-center gap-2">
            <input type="radio" name="marital" checked={maritalStatus === "single"} onChange={() => setMaritalStatus("single")} required />
            <span>Single</span>
          </label>
          <label className="inline-flex items-center gap-2">
            <input type="radio" name="marital" checked={maritalStatus === "married"} onChange={() => setMaritalStatus("married")} required />
            <span>Married</span>
          </label>
        </div>
        {maritalStatus === "married" && (
          <div className="mt-3">
            <label className="block text-sm font-medium">Spouse name *</label>
            <input value={spouseName} onChange={(e) => setSpouseName(e.target.value)} className="mt-1 block w-full rounded border px-3 py-2" required />
          </div>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium">Children (first and last names, one per line)</label>
        <textarea value={childrenNames} onChange={(e) => setChildrenNames(e.target.value)} className="mt-1 block w-full rounded border px-3 py-2" rows={3} placeholder="e.g. Anna Rossi\nLuca Bianchi" />
      </div>

      <div className="bg-gray-50 border rounded p-3">
        <p className="text-sm font-medium mb-2">Do you have multiple citizenships? *</p>
        <div className="flex items-center gap-6">
          <label className="inline-flex items-center gap-2">
            <input type="radio" name="multiCit" checked={multipleCitizenships === "yes"} onChange={() => setMultipleCitizenships("yes")} required />
            <span>Yes</span>
          </label>
          <label className="inline-flex items-center gap-2">
            <input type="radio" name="multiCit" checked={multipleCitizenships === "no"} onChange={() => setMultipleCitizenships("no")} required />
            <span>No</span>
          </label>
        </div>
      </div>

      <div className="text-sm">
        <label className="flex items-start gap-2">
          <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} />
          <span>
            I consent to Resinaro storing and processing my documents to deliver this service. <a href="/privacy" className="underline">Privacy Policy</a>
          </span>
        </label>
      </div>

      {error && <div className="text-red-600 text-sm" role="alert">{error}</div>}

      <div className="pt-2">
        <button type="submit" disabled={submitDisabled} className={`px-4 py-2 rounded text-white ${submitDisabled ? "bg-gray-400 cursor-not-allowed" : "bg-green-900 hover:bg-green-800"}`}>
          {submitting ? "Submitting..." : "Submit AIRE details + Pay"}
        </button>
        <p className="text-xs text-gray-600 mt-2">You will be redirected to payment after submitting your details.</p>
      </div>
    </form>
  );
}
