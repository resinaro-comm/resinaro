// src/components/BureaucracyForm.tsx
"use client";

import React, { useRef, useState } from "react";

const MAX_ADDITIONAL_FILES = 3;
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB
const ALLOWED_TYPES = ["application/pdf", "image/jpeg", "image/jpg", "image/png"];

export default function BureaucracyForm() {
  const proofRef = useRef<HTMLInputElement | null>(null);
  const addRef = useRef<HTMLInputElement | null>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  // Required proof of residence (single file)
  const [proof, setProof] = useState<File | null>(null);

  // Optional additional support docs
  const [additionalFiles, setAdditionalFiles] = useState<File[]>([]);

  const [consent, setConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  function handleProofChange(e: React.ChangeEvent<HTMLInputElement>) {
    setError(null);
    const f = e.target.files?.[0] ?? null;
    if (!f) {
      setProof(null);
      return;
    }
    if (!ALLOWED_TYPES.includes(f.type)) {
      setError("Proof must be PDF, JPG or PNG.");
      if (proofRef.current) proofRef.current.value = "";
      return;
    }
    if (f.size > MAX_FILE_SIZE) {
      setError("Proof file must be under 5 MB.");
      if (proofRef.current) proofRef.current.value = "";
      return;
    }
    setProof(f);
  }

  function handleAdditionalChange(e: React.ChangeEvent<HTMLInputElement>) {
    setError(null);
    const sel = e.target.files;
    if (!sel) return;
    const arr = Array.from(sel);

    if (arr.length + additionalFiles.length > MAX_ADDITIONAL_FILES) {
      setError(`You may upload up to ${MAX_ADDITIONAL_FILES} additional files.`);
      if (addRef.current) addRef.current.value = "";
      return;
    }

    for (const f of arr) {
      if (!ALLOWED_TYPES.includes(f.type)) {
        setError("Additional files must be PDF, JPG or PNG.");
        if (addRef.current) addRef.current.value = "";
        return;
      }
      if (f.size > MAX_FILE_SIZE) {
        setError("Each additional file must be under 5 MB.");
        if (addRef.current) addRef.current.value = "";
        return;
      }
    }

    setAdditionalFiles((prev) => [...prev, ...arr]);
    if (addRef.current) addRef.current.value = "";
  }

  function removeAdditionalFile(index: number) {
    setAdditionalFiles((prev) => prev.filter((_, i) => i !== index));
  }

  function removeProof() {
    setProof(null);
    if (proofRef.current) proofRef.current.value = "";
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    // Validation
    if (!name.trim() || !email.trim()) {
      setError("Please enter your full name and email.");
      return;
    }
    if (!proof) {
      setError("Proof of residence is required to proceed. Please upload a document showing your UK address.");
      return;
    }
    if (!consent) {
      setError("Please confirm you agree to our privacy policy.");
      return;
    }

    setSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("name", name.trim());
      formData.append("email", email.trim());
      formData.append("phone", phone.trim());
      formData.append("message", message.trim());
      // mark the service so your backend can route/price correctly
      formData.append("service", "bureaucracy-help");

      // required proof field (explicit name)
      formData.append("proofOfResidence", proof, proof.name);

      // optional additional files
      additionalFiles.forEach((f) => formData.append("files", f, f.name));

      // POST to your existing booking endpoint
      const res = await fetch("/api/services/book", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const text = await res.text().catch(() => null);
        throw new Error(text || "Submission failed — please try again or email help@resinaro.com.");
      }

      setSuccess("Request submitted — we will contact you shortly with next steps.");
      // reset
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setProof(null);
      setAdditionalFiles([]);
      setConsent(false);
      if (proofRef.current) proofRef.current.value = "";
      if (addRef.current) addRef.current.value = "";
    } catch (err: unknown) {
      // safe error extraction
      const messageText = err instanceof Error ? err.message : String(err);
      setError(messageText || "Submission failed — please try again later.");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data" aria-live="polite">
      <div>
        <label className="block text-sm font-medium">Full name *</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full rounded border px-3 py-2"
          required
          aria-required
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
        <label className="block text-sm font-medium">Phone</label>
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="mt-1 block w-full rounded border px-3 py-2"
          placeholder="+44..."
        />
      </div>

      {/* REQUIRED Proof of Residence */}
      <div className="bg-gray-50 border rounded p-3">
        <label className="block text-sm font-medium">PROOF OF RESIDENCE (required)</label>
        <p className="text-xs text-gray-600 mb-2">
          Upload one document showing your UK address (council tax, tenancy, utility bill, bank, NHS letter, etc). This is required to book many services.
        </p>
        <input
          ref={proofRef}
          type="file"
          accept=".pdf,image/png,image/jpeg"
          onChange={handleProofChange}
          className="mt-1"
          aria-describedby="proof-help"
        />
        <p id="proof-help" className="text-xs text-gray-500 mt-1">
          PDF / JPG / PNG. One file, up to {MAX_FILE_SIZE / (1024 * 1024)} MB.
        </p>

        {proof && (
          <div className="mt-2 flex items-center justify-between bg-white border px-3 py-2 rounded">
            <div className="truncate">
              <strong className="text-sm">{proof.name}</strong>
              <div className="text-xs text-gray-500">{Math.round(proof.size / 1024)} KB</div>
            </div>
            <button type="button" onClick={removeProof} className="text-red-600 text-sm">
              Remove
            </button>
          </div>
        )}
      </div>

      {/* Additional optional files */}
      <div>
        <label className="block text-sm font-medium">Additional documents (optional)</label>
        <p className="text-xs text-gray-600 mb-1">Upload up to {MAX_ADDITIONAL_FILES} supporting files (PDF, JPG, PNG).</p>
        <input ref={addRef} type="file" accept=".pdf,image/png,image/jpeg" multiple onChange={handleAdditionalChange} className="mt-1" />
        {additionalFiles.length > 0 && (
          <ul className="mt-2 space-y-2">
            {additionalFiles.map((f, i) => (
              <li key={i} className="flex items-center justify-between bg-white border px-3 py-2 rounded">
                <div className="truncate max-w-[70%]">
                  <strong className="text-sm">{f.name}</strong>
                  <div className="text-xs text-gray-500">{Math.round(f.size / 1024)} KB</div>
                </div>
                <button type="button" onClick={() => removeAdditionalFile(i)} className="text-red-600 text-sm">
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium">Short description of your need</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-1 block w-full rounded border px-3 py-2"
          rows={4}
          placeholder="E.g. 'Need help updating AIRE after moving to London; consulate: ...'"
        />
      </div>

      <div className="text-sm">
        <label className="flex items-start gap-2">
          <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} />
          <span>
            I consent to Resinaro storing and processing my documents for the purpose of this service. Files are stored securely and may be deleted on request.
            <a href="/privacy" className="underline ml-1">Privacy Policy</a>
          </span>
        </label>
      </div>

      {error && <div className="text-red-600 text-sm" role="alert">{error}</div>}
      {success && <div className="text-green-700 text-sm" role="status">{success}</div>}

      <div>
        <button
          type="submit"
          disabled={submitting}
          className={`bg-green-900 text-white px-4 py-2 rounded ${submitting ? "opacity-60 cursor-wait" : "hover:bg-green-800"}`}
        >
          {submitting ? "Submitting..." : "Request help"}
        </button>
      </div>

      <div className="text-xs text-gray-500 mt-2">
        By submitting you agree to our <a className="underline" href="/privacy">Privacy Policy</a>. If you need immediate assistance email <a className="underline" href="mailto:help@resinaro.com">help@resinaro.com</a>.
      </div>
    </form>
  );
}
