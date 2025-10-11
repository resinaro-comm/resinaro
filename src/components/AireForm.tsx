// src/components/AireForm.tsx
"use client";

import React, { useState } from "react";

// Google Apps Script endpoint + token (same as other forms)
const GAS_URL =
  "https://script.google.com/macros/s/AKfycbx_S1yGOb31CWMQVvi6qShVzgRA350Sj40aKnLVNl4ctdHxm77nzjYZIgnhVmgY1BQ/exec";
const GAS_TOKEN = "abc123!abidsdjaosda!!!hhda2314532"; // must match AUTH_TOKEN in Apps Script

export default function AireForm() {
  // Group booking logic
  const [numOthers, setNumOthers] = useState(0); // number of additional people (not including self)
  const [group, setGroup] = useState([] as { name: string; dob: string; idFile: File | null }[]);
  const MAX_GROUP = 8;
  const [hasItalianId, setHasItalianId] = useState(""); // "yes" | "no"

  function handleNumOthersChange(e: React.ChangeEvent<HTMLInputElement>) {
    const n = Math.max(0, Math.min(MAX_GROUP - 1, parseInt(e.target.value) || 0));
    setNumOthers(n);
    setGroup((prev) => {
      const arr = [...prev];
      while (arr.length < n) arr.push({ name: "", dob: "", idFile: null });
      while (arr.length > n) arr.pop();
      return arr;
    });
  }
  function handleGroupField(idx: number, field: "name" | "dob", value: string) {
    setGroup((prev) => prev.map((p, i) => i === idx ? { ...p, [field]: value } : p));
  }
  function handleGroupIdFile(idx: number, e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0] ?? null;
    setGroup((prev) => prev.map((p, i) => i === idx ? { ...p, idFile: f } : p));
  }
  // Pricing logic
  let price = 35;
  const totalPeople = 1 + numOthers;
  if (totalPeople === 1) price = 35;
  else if (totalPeople === 2) price = 35;
  else if (totalPeople >= 3) price = 50;
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
      <div className="bg-yellow-100 border-l-4 border-yellow-400 rounded p-4 mb-2">
        <h2 className="text-base font-bold mb-1 text-green-900">AIRE Registration Pricing</h2>
        <ul className="list-disc pl-5 text-sm text-gray-800 mb-2">
          <li><strong>£35</strong> for a single person or a couple (2 people)</li>
          <li><strong>£50</strong> for a family/group of 3 or more</li>
        </ul>
        <p className="text-xs text-gray-700">You can register a whole household in one go. Price is based on the number of people included in this booking.</p>
      </div>
      <div className="bg-gray-50 border rounded p-3 mb-2">
        <label className="block text-sm font-medium mb-1">How many other people are you registering (not including yourself)?</label>
        <input type="number" min={0} max={MAX_GROUP - 1} value={numOthers} onChange={handleNumOthersChange} className="mt-1 block w-24 rounded border px-3 py-2" />
        <p className="text-xs text-gray-600 mt-1">For a couple, enter 1. For a family, enter the number of additional people (adults + children) besides yourself.</p>
      </div>
      {group.slice(0, numOthers).map((person, idx) => (
        <fieldset key={idx} className="border-2 border-green-200 rounded-xl bg-white mb-6 px-4 py-5 shadow-sm">
          <legend className="px-2 py-1 text-base font-semibold text-green-900 bg-green-50 border border-green-200 rounded mb-4">Person {idx+2} details</legend>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Full name *</label>
            <input value={person.name} onChange={e => handleGroupField(idx, 'name', e.target.value)} className="mt-1 block w-full rounded border px-3 py-2" placeholder="Full name" required />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Date of birth *</label>
            <input type="text" inputMode="text" pattern="\d{2}/\d{2}/\d{4}" placeholder="dd/mm/yyyy" value={person.dob} onChange={e => handleGroupField(idx, 'dob', e.target.value)} className="mt-1 block w-full rounded border px-3 py-2" required />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Upload valid ID for this person *</label>
            <input type="file" accept=".pdf,.jpg,.jpeg,.png" onChange={e => handleGroupIdFile(idx, e)} className="mt-1 text-base w-full" required />
            {person.idFile && <span className="text-sm text-gray-600 ml-2">{person.idFile.name}</span>}
            <p className="text-sm text-gray-500 mt-1">PDF, JPG, PNG. One file per person. <strong>At least one person must have an Italian ID (passport or carta d&apos;identità).</strong></p>
          </div>
        </fieldset>
      ))}
      <div className="bg-red-50 border-l-4 border-red-400 rounded p-3 mb-2 text-xs text-red-800">
        <strong>Important:</strong> At least one person in your group must have a valid Italian ID (passport or carta d&apos;identità). If no one has an Italian ID, we cannot help register you for AIRE.
      </div>
      <div className="bg-green-50 border-l-4 border-green-400 rounded p-3 mb-2 text-sm text-green-900">
        <strong>Total price for this booking: £{price}</strong>
      </div>
      <div>
        <label className="block text-sm font-medium">First name *</label>
        <input value={firstName} onChange={(e) => setFirstName(e.target.value)} className="mt-1 block w-full rounded border px-3 py-2" required />
      </div>
      <div>
        <label className="block text-sm font-medium">Last name *</label>
        <input value={lastName} onChange={(e) => setLastName(e.target.value)} className="mt-1 block w-full rounded border px-3 py-2" required />
      </div>
      <div>
        <label className="block text-sm font-medium">Email *</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 block w-full rounded border px-3 py-2" required />
      </div>
      <div>
        <label className="block text-sm font-medium">Telephone *</label>
        <input value={telephone} onChange={(e) => setTelephone(e.target.value)} className="mt-1 block w-full rounded border px-3 py-2" placeholder="+44..." required />
      </div>
      <div>
        <label className="block text-sm font-medium">Date of birth *</label>
        <input type="text" inputMode="text" pattern="\d{2}/\d{2}/\d{4}" placeholder="dd/mm/yyyy" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} className="mt-1 block w-full rounded border px-3 py-2" required />
      </div>
      <div>
        <label className="block text-sm font-medium">Place of birth *</label>
        <input value={placeOfBirth} onChange={(e) => setPlaceOfBirth(e.target.value)} className="mt-1 block w-full rounded border px-3 py-2" required />
      </div>
      <div>
        <label className="block text-sm font-medium">Country of birth *</label>
        <input value={countryOfBirth} onChange={(e) => setCountryOfBirth(e.target.value)} className="mt-1 block w-full rounded border px-3 py-2" required />
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
