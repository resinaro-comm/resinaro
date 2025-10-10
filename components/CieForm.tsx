// components/CieForm.tsx
"use client";

import React, { useRef, useState } from "react";

const GAS_URL =
  "https://script.google.com/macros/s/AKfycbx_S1yGOb31CWMQVvi6qShVzgRA350Sj40aKnLVNl4ctdHxm77nzjYZIgnhVmgY1BQ/exec";
const GAS_TOKEN = "abc123!abidsdjaosda!!!hhda2314532";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB
const ALLOWED_TYPES = ["application/pdf", "image/jpeg", "image/jpg", "image/png"];

export default function CieForm() {
  const proofRef = useRef<HTMLInputElement | null>(null);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [email, setEmail] = useState("");
  const [placeOfBirth, setPlaceOfBirth] = useState("");
  const [countryOfBirth, setCountryOfBirth] = useState("");
  const [telephone, setTelephone] = useState("");
  const [heightCm, setHeightCm] = useState("");
  const [under18ChildrenCount, setUnder18ChildrenCount] = useState("");
  const [proof, setProof] = useState<File | null>(null);
  const [consent, setConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

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

    if (!firstName.trim() || !lastName.trim()) return setError("Please enter your name and surname.");
    if (!dateOfBirth) return setError("Please enter your date of birth.");
    if (!placeOfBirth.trim()) return setError("Please enter your place of birth.");
    if (!countryOfBirth.trim()) return setError("Please enter your country of birth.");
  if (!telephone.trim()) return setError("Please enter your telephone number.");
  if (!email.trim()) return setError("Please enter your email address.");
    if (!proof) return setError("Please upload your proof of UK address.");
    if (!consent) return setError("Please consent to data processing to continue.");

    setSubmitting(true);
    try {
      const bookingId = crypto.randomUUID();
      const serviceKey = "id-card";

      const filesPayload: Array<{ filename: string; mimeType: string; data: string }> = [];
      filesPayload.push({ filename: proof.name, mimeType: proof.type, data: await fileToBase64(proof) });

      const dataPayload = {
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        dateOfBirth,
        placeOfBirth: placeOfBirth.trim(),
        countryOfBirth: countryOfBirth.trim(),
  telephone: telephone.trim(),
        heightCm: heightCm.trim(),
        under18ChildrenCount: under18ChildrenCount.trim(),
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
          email: email.trim(),
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
          <label className="block text-sm font-medium">Name *</label>
          <input value={firstName} onChange={(e) => setFirstName(e.target.value)} className="mt-1 block w-full rounded border px-3 py-2" required />
        </div>
        <div>
          <label className="block text-sm font-medium">Surname *</label>
          <input value={lastName} onChange={(e) => setLastName(e.target.value)} className="mt-1 block w-full rounded border px-3 py-2" required />
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Height (cm)</label>
            <input value={heightCm} onChange={(e) => setHeightCm(e.target.value)} className="mt-1 block w-full rounded border px-3 py-2" placeholder="e.g. 175" />
          </div>
          <div>
            <label className="block text-sm font-medium">How many children under 18?</label>
            <input type="number" min="0" value={under18ChildrenCount} onChange={(e) => setUnder18ChildrenCount(e.target.value)} className="mt-1 block w-full rounded border px-3 py-2" placeholder="0, 2, 6" />
          </div>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Telephone *</label>
          <input value={telephone} onChange={(e) => setTelephone(e.target.value)} className="mt-1 block w-full rounded border px-3 py-2" placeholder="+44..." required />
        </div>
        <div>
          <label className="block text-sm font-medium">Email *</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 block w-full rounded border px-3 py-2" required />
        </div>
      </div>

      {/* Removed multiple citizenships section as requested */}

      <div className="bg-gray-50 border rounded p-3">
        <label className="block text-sm font-medium">Proof of UK address *</label>
        <p className="text-xs text-gray-600 mb-2">Upload a utility bill, council tax, tenancy agreement or bank statement showing your UK address.</p>
        <input ref={proofRef} type="file" accept=".pdf,image/png,image/jpeg" onChange={onProofChange} className="mt-1" />
        <p className="text-xs text-gray-500 mt-1">PDF / JPG / PNG. One file, up to {MAX_FILE_SIZE / (1024 * 1024)} MB.</p>
      </div>

      <div className="text-sm bg-amber-50 border-l-4 border-amber-300 p-3 rounded">
        Disclaimer: During booking we may need you to provide a one-time passcode (OTP) that is sent to your email. We will request this securely when needed.
      </div>

      <div className="text-sm mt-2">
        <label className="flex items-start gap-2">
          <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} />
          <span>
            I consent to Resinaro storing and processing my documents strictly to deliver this service. <a href="/privacy" className="underline">Privacy Policy</a>
          </span>
        </label>
      </div>

      {error && <div className="text-red-600 text-sm" role="alert">{error}</div>}

      <div className="pt-2">
        <button type="submit" disabled={submitDisabled} className={`px-4 py-2 rounded text-white ${submitDisabled ? "bg-gray-400 cursor-not-allowed" : "bg-green-900 hover:bg-green-800"}`}>
          {submitting ? "Submitting..." : "Submit CIE details + Pay"}
        </button>
        <p className="text-xs text-gray-600 mt-2">You will be redirected to payment after submitting your details.</p>
      </div>
    </form>
  );
}
