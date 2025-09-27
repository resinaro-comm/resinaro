// src/components/ServiceForm.tsx
"use client";

import React, { useState, useRef } from "react";

/**
 * Client-side ServiceForm:
 * - optional proof-of-residence upload
 * - client validation, file previews, consent checkbox
 * - posts multipart/form-data to /api/services/book
 */
export default function ServiceForm(){
  const MAX_FILES = 3;
  const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB
  const ALLOWED_TYPES = ["application/pdf", "image/jpeg", "image/jpg", "image/png"];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [noProof, setNoProof] = useState(false);
  const [noProofExplanation, setNoProofExplanation] = useState("");
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const submitRef = useRef<HTMLButtonElement | null>(null);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    setError(null);
    const selected = e.target.files;
    if (!selected) return;

    const arr = Array.from(selected);
    if (arr.length + files.length > MAX_FILES) {
      setError(`Please upload at most ${MAX_FILES} files.`);
      return;
    }

    for (const f of arr) {
      if (!ALLOWED_TYPES.includes(f.type)) {
        setError("Allowed file types: PDF, JPG, PNG.");
        return;
      }
      if (f.size > MAX_FILE_SIZE) {
        setError("Each file must be under 5 MB.");
        return;
      }
    }

    setFiles((prev) => [...prev, ...arr]);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  function removeFile(index: number) {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSuccessMsg(null);

    if (!name.trim() || !email.trim()) {
      setError("Please enter your full name and email.");
      return;
    }
    if (!consent) {
      setError("Please confirm you consent to us handling your documents.");
      return;
    }
    if (!noProof && files.length === 0) {
      setError("Please upload proof of residence or tick 'I don't have proof'.");
      return;
    }
    if (noProof && noProofExplanation.trim().length < 10) {
      setError("Please briefly explain why you don't have proof of residence (at least 10 characters).");
      return;
    }

    setSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("name", name.trim());
      formData.append("email", email.trim());
      formData.append("phone", phone.trim());
      formData.append("message", message.trim());
      formData.append("noProof", noProof ? "1" : "0");
      formData.append("noProofExplanation", noProofExplanation.trim());
      formData.append("service", "nin");

      files.forEach((f) => formData.append("files", f, f.name));

      const res = await fetch("/api/services/book", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const text = await res.text().catch(() => null);
        throw new Error(text || "Failed to submit. Please try again or email help@resinaro.com.");
      }

      setSuccessMsg("Booking submitted — we will contact you shortly.");
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setFiles([]);
      setNoProof(false);
      setNoProofExplanation("");
      setConsent(false);
      if (submitRef.current) submitRef.current.blur();
    } catch (err: unknown) {
      // safe extraction: prefer Error.message when available
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
          aria-required
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Phone</label>
        <input value={phone} onChange={(e) => setPhone(e.target.value)} className="mt-1 block w-full rounded border px-3 py-2" placeholder="+44..." />
      </div>

      <div>
        <label className="block text-sm font-medium">Short note (optional)</label>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="mt-1 block w-full rounded border px-3 py-2" rows={3} />
      </div>

      <div className="bg-gray-50 border rounded p-3">
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={noProof} onChange={(e) => setNoProof(e.target.checked)} aria-label="I do not have proof of residence" />
          <span className="text-sm">I don&apos;t have proof of residence</span>
        </label>

        {!noProof && (
          <div className="mt-3">
            <label className="block text-sm font-medium">Upload proof of residence (recommended)</label>
            <input ref={fileInputRef} type="file" accept=".pdf,image/png,image/jpeg" multiple onChange={handleFileChange} className="mt-2" aria-describedby="file-help" />
            <p id="file-help" className="text-xs text-gray-500 mt-1">
              Accepted: PDF, JPG, PNG. Up to {MAX_FILES} files, {MAX_FILE_SIZE / (1024 * 1024)} MB each.
            </p>

            {files.length > 0 && (
              <ul className="mt-2 space-y-2">
                {files.map((f, i) => (
                  <li key={i} className="flex items-center justify-between bg-white border px-3 py-2 rounded">
                    <span className="text-sm truncate max-w-[70%]">{f.name} ({Math.round(f.size / 1024)} KB)</span>
                    <button type="button" onClick={() => removeFile(i)} className="text-red-600 text-sm">Remove</button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        {noProof && (
          <div className="mt-3">
            <label className="block text-sm font-medium">Explain briefly why you don&apos;t have proof *</label>
            <textarea value={noProofExplanation} onChange={(e) => setNoProofExplanation(e.target.value)} className="mt-2 block w-full rounded border px-3 py-2" rows={3} placeholder="E.g. newly arrived, waiting for council tax registration..." />
          </div>
        )}
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
      {successMsg && <div className="text-green-700 text-sm" role="status">{successMsg}</div>}

      <div>
        <button ref={submitRef} type="submit" disabled={submitting} className={`bg-green-900 text-white px-4 py-2 rounded ${submitting ? "opacity-60 cursor-wait" : "hover:bg-green-800"}`}>
          {submitting ? "Submitting..." : "Book NIN Support"}
        </button>
      </div>

      <div className="text-xs text-gray-500 mt-2">
        By submitting you agree to our <a className="underline" href="/privacy">Privacy Policy</a>. If you need immediate assistance email <a className="underline" href="mailto:help@resinaro.com">help@resinaro.com</a>.
      </div>
    </form>
  );
}
