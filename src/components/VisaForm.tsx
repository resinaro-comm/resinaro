// src/components/VisaForm.tsx
"use client";

import React, { useRef, useState } from "react";

/** Google Apps Script endpoint + token **/
const GAS_URL =
  "https://script.google.com/macros/s/AKfycbx_S1yGOb31CWMQVvi6qShVzgRA350Sj40aKnLVNl4ctdHxm77nzjYZIgnhVmgY1BQ/exec";
const GAS_TOKEN = "abc123!abidsdjaosda!!!hhda2314532"; // must match AUTH_TOKEN in Apps Script

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB
const ALLOWED_TYPES = ["application/pdf", "image/jpeg", "image/jpg", "image/png"];

export default function VisaForm() {
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

  // Employment details (requested)
  const [profession, setProfession] = useState("");
  const [employerName, setEmployerName] = useState("");
  const [employerAddress, setEmployerAddress] = useState("");

  // Proof of UK residence (required upload)
  const [proofOfAddress, setProofOfAddress] = useState<File | null>(null);

  // Other
  const [notes, setNotes] = useState("");

  // Consent + UI
  const [consent, setConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Helpers
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

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    // Required field checks
  if (!firstName.trim() || !lastName.trim()) return setError("Please enter your first and last name.");
    if (!email.trim()) return setError("Please enter your email.");
    if (!telephone.trim()) return setError("Please enter your telephone number.");
    if (!dateOfBirth) return setError("Please enter your date of birth.");
  if (!countryOfBirth.trim()) return setError("Please enter your country of birth.");
  if (!currentNationality.trim()) return setError("Please enter your current nationality.");
    if (!placeOfBirth.trim()) return setError("Please enter your place of birth (city/town).");
    if (!passportNumber.trim()) return setError("Please enter your passport number.");
    if (!passportExpiry) return setError("Please enter your passport expiry date.");
    if (marriedToEU === "") return setError("Please tell us if you are married to a European citizen.");
    if (!profession.trim()) return setError("Please enter your profession.");
    if (!employerName.trim()) return setError("Please enter your employer name.");
    if (!employerAddress.trim()) return setError("Please enter your employer address.");
    if (!proofOfAddress) return setError("Please upload your proof of UK residence.");
    if (!notes.trim()) return setError("Please provide additional context in the notes field.");
    if (!consent) return setError("Please consent to data processing to continue.");

    setSubmitting(true);

    try {
      // a) Create a booking reference so we can link payment to the sheet row
      const bookingId = crypto.randomUUID();

      // b) Build uploads payload (base64)
      const filesPayload: Array<{ filename: string; mimeType: string; data: string }> = [];
      if (proofOfAddress) {
        filesPayload.push({
          filename: proofOfAddress.name,
          mimeType: proofOfAddress.type,
          data: await fileToBase64(proofOfAddress),
        });
      }

      // c) Pack variable answers into one JSON blob
      const dataPayload = {
        passportNumber: passportNumber.trim(),
        passportExpiry,
        dateOfBirth,
  countryOfBirth: countryOfBirth.trim(),
  currentNationality: currentNationality.trim(),
        placeOfBirth: placeOfBirth.trim(),
        marriedToEU,
        profession: profession.trim(),
        employerName: employerName.trim(),
        employerAddress: employerAddress.trim(),
        notes: notes.trim(),
      };

      // d) Send to Google Apps Script (saves files, appends a row, emails you)
      // Use text/plain to avoid CORS preflight (Apps Script reads postData.contents)
     // d) Send to Google Apps Script (saves files, appends a row, emails you)
// Use text/plain to avoid CORS preflight (Apps Script reads postData.contents)
const r1 = await fetch(GAS_URL, {
  method: "POST",
  headers: { "Content-Type": "text/plain;charset=utf-8" },
  body: JSON.stringify({
    token: GAS_TOKEN, // must match AUTH_TOKEN in Apps Script
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
  // ignore JSON parse errors — we'll rely on r1.ok
}
if (!r1.ok || !(r1json && r1json.ok)) {
  const msg = r1json && r1json.error ? r1json.error : "Could not save submission to Google.";
  throw new Error(msg);
}

      // e) Ask our API for the correct Stripe Payment Link and redirect
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
      window.location.href = url; // -> Stripe
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
    <div className="bg-white rounded-xl shadow-lg max-w-2xl mx-auto px-2 sm:px-6 py-6 sm:py-8 border border-gray-200">
      {/* Remove duplicate title/intro block inside the form */}

      <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data" aria-live="polite">
      {/* Contact */}
      <div>
        <label className="block text-sm font-medium">First name *</label>
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="mt-1 block w-full rounded border px-3 py-2"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Last name *</label>
        <input
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="mt-1 block w-full rounded border px-3 py-2"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Email *</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full rounded border px-3 py-2"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Telephone *</label>
        <input
          value={telephone}
          onChange={(e) => setTelephone(e.target.value)}
          className="mt-1 block w-full rounded border px-3 py-2"
          placeholder="+44..."
          required
        />
      </div>

      {/* Birth details */}
      <div>
        <label className="block text-sm font-medium">Date of birth *</label>
        <input
          type="text"
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
          className="mt-1 block w-full rounded border px-3 py-2"
          placeholder="dd/mm/yyyy"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Country of birth *</label>
        <input
          value={countryOfBirth}
          onChange={(e) => setCountryOfBirth(e.target.value)}
          className="mt-1 block w-full rounded border px-3 py-2"
          placeholder="e.g. Italy"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Current nationality *</label>
        <input
          value={currentNationality}
          onChange={(e) => setCurrentNationality(e.target.value)}
          className="mt-1 block w-full rounded border px-3 py-2"
          placeholder="e.g. Italian, Albanian, etc."
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Place of birth (city/town) *</label>
        <input
          value={placeOfBirth}
          onChange={(e) => setPlaceOfBirth(e.target.value)}
          className="mt-1 block w-full rounded border px-3 py-2"
          placeholder="e.g. Milan"
          required
        />
      </div>

      {/* Passport */}
      <div>
        <label className="block text-sm font-medium">Passport number *</label>
        <input
          value={passportNumber}
          onChange={(e) => setPassportNumber(e.target.value)}
          className="mt-1 block w-full rounded border px-3 py-2"
          placeholder="As shown on passport"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Passport expiry date *</label>
        <input
          type="text"
          value={passportExpiry}
          onChange={(e) => setPassportExpiry(e.target.value)}
          className="mt-1 block w-full rounded border px-3 py-2"
          placeholder="dd/mm/yyyy"
          required
        />
      </div>

      {/* Status question */}
      <div className="bg-gray-50 border rounded p-3">
        <p className="text-sm font-medium mb-2">Are you married to a European citizen? *</p>
        <div className="flex gap-6 items-center">
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

      {/* Profession and employer */}
      <div>
        <label className="block text-sm font-medium">Profession *</label>
        <input
          value={profession}
          onChange={(e) => setProfession(e.target.value)}
          className="mt-1 block w-full rounded border px-3 py-2"
          placeholder="e.g. driver, doctor, cleaner, teacher"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Employer name *</label>
        <input
          value={employerName}
          onChange={(e) => setEmployerName(e.target.value)}
          className="mt-1 block w-full rounded border px-3 py-2"
          placeholder="Company / organisation"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Employer address *</label>
        <input
          value={employerAddress}
          onChange={(e) => setEmployerAddress(e.target.value)}
          className="mt-1 block w-full rounded border px-3 py-2"
          placeholder="Street, city, postcode"
          required
        />
      </div>

      {/* Proof of UK residence */}
      <div className="bg-gray-50 border rounded p-3">
        <label className="block text-sm font-medium">Proof of UK residence *</label>
        <p className="text-xs text-gray-600 mb-2">
          Acceptable examples: council tax bill, tenancy agreement, utility bill, bank statement,
          HMRC/DWP/NHS letter. Must show your name and current UK address.
        </p>
        <input
          ref={addressRef}
          type="file"
          accept=".pdf,image/png,image/jpeg"
          onChange={onAddressProofChange}
          className="mt-1"
        />
        <p className="text-xs text-gray-500 mt-1">
          PDF / JPG / PNG. One file, up to {MAX_FILE_SIZE / (1024 * 1024)} MB.
        </p>

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
      </div>

      {/* Notes */}
      <div>
        <label className="block text-sm font-medium">Anything else we should know? *</label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="mt-1 block w-full rounded border px-3 py-2"
          rows={4}
          placeholder="Deadlines, dependants, previous refusals, where you will apply, etc."
          required
        />
      </div>

      {/* Consent */}
      <div className="text-sm">
        <p className="text-gray-700">
          Service fee: <strong>£35</strong> (administrative support). Government/provider fees are separate and paid to the authority.
        </p>
        <label className="flex items-start gap-2 mt-2">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
          />
          <span>
            I consent to Resinaro storing and processing my documents strictly to deliver this service.{" "}
            <a href="/privacy" className="underline">Privacy Policy</a>
          </span>
        </label>
      </div>

      {error && <div className="text-red-600 text-sm" role="alert">{error}</div>}

      <div className="pt-2">
        <button
          type="submit"
          disabled={submitDisabled}
          className={`px-4 py-2 rounded text-white ${
            submitDisabled ? "bg-gray-400 cursor-not-allowed" : "bg-green-900 hover:bg-green-800"
          }`}
        >
          {submitting ? "Submitting..." : "Submit visa application details + Pay"}
        </button>
        <p className="text-xs text-gray-600 mt-2">You will be redirected to payment after submitting your details.</p>
      </div>
      </form>
    </div>
  );
}
