"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";

/** Google Apps Script endpoint + token (shared with Visa form) **/
const GAS_URL =
  "https://script.google.com/macros/s/AKfycbx_S1yGOb31CWMQVvi6qShVzgRA350Sj40aKnLVNl4ctdHxm77nzjYZIgnhVmgY1BQ/exec";
const GAS_TOKEN = "abc123!abidsdjaosda!!!hhda2314532"; // must match AUTH_TOKEN in Apps Script

export default function ServiceForm() {
  const MAX_FILES: number = 3;
  const MAX_FILE_SIZE: number = 5 * 1024 * 1024; // 5 MB
  const ALLOWED_TYPES: readonly string[] = [
    "application/pdf",
    "image/jpeg",
    "image/jpg",
    "image/png",
  ];

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [files, setFiles] = useState<File[]>([]);
  const [noProof, setNoProof] = useState<boolean>(false);
  const [noProofExplanation, setNoProofExplanation] = useState<string>("");
  const [consent, setConsent] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const submitRef = useRef<HTMLButtonElement | null>(null);

  // Helper to base64-encode a File without using 'any'
  async function fileToBase64(file: File): Promise<string> {
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

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>): void {
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

  function removeFile(index: number): void {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();
    setError(null);
    setSuccessMsg(null);

    if (!firstName.trim() || !lastName.trim() || !email.trim()) {
      setError("Please enter your first and last name and email.");
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
    if (!message.trim()) {
      setError("Please provide a short note about your request.");
      return;
    }
    if (noProof && noProofExplanation.trim().length < 10) {
      setError(
        "Please briefly explain why you don't have proof of residence (at least 10 characters)."
      );
      return;
    }

    setSubmitting(true);

    try {
      // a) Determine service key by pathname
      let serviceKey = "visa-application";
      if (typeof window !== "undefined") {
        const p = window.location?.pathname || "";
        if (p.startsWith("/services/aire")) serviceKey = "aire-registration";
        else if (p.startsWith("/services/id-card")) serviceKey = "id-card";
      }

      // b) Create booking reference
      const bookingId = crypto.randomUUID();

      // c) Build uploads payload for GAS (base64)
      const filesPayload: Array<{ filename: string; mimeType: string; data: string }> = [];
      for (const f of files) {
        filesPayload.push({
          filename: f.name,
          mimeType: f.type,
          data: await fileToBase64(f),
        });
      }

      // d) Pack variable answers
      const dataPayload = {
        message: message.trim(),
        noProof,
        noProofExplanation: noProofExplanation.trim(),
      };

      // e) Send to Google Apps Script first
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
          telephone: phone.trim(),
          files: filesPayload,
          data: dataPayload,
        }),
      });
      type GasResponse = { ok?: boolean; error?: string } | undefined;
      let r1json: GasResponse = undefined;
      try {
        r1json = (await r1.json()) as GasResponse;
      } catch {
        /* Some Apps Script deploys may not return JSON on success */
      }
      if (!r1.ok || !(r1json && r1json.ok)) {
        const msg =
          r1json && r1json.error
            ? r1json.error
            : "Could not save submission to Google.";
        throw new Error(msg);
      }

      // f) Ask our API for the Stripe Payment Link and redirect
      const fd = new FormData();
      fd.append("bookingId", bookingId);
      fd.append("service", serviceKey);
      fd.append("email", email.trim());
      fd.append("name", `${firstName.trim()} ${lastName.trim()}`);

      const res = await fetch("/api/services/book", { method: "POST", body: fd });
      if (!res.ok) {
        const text = await res.text().catch(() => "");
        throw new Error(text || "Could not prepare checkout.");
      }
      const { url } = (await res.json()) as { url?: string };
      if (!url) throw new Error("No payment link returned.");
      window.location.href = url;
    } catch (err: unknown) {
      const messageText = err instanceof Error ? err.message : String(err);
      setError(messageText || "Submission failed — please try again later.");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
      encType="multipart/form-data"
      aria-live="polite"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">First name *</label>
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="mt-1 block w-full rounded border px-3 py-2"
            required
            aria-required={true}
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Last name *</label>
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="mt-1 block w-full rounded border px-3 py-2"
            required
            aria-required={true}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium">Email *</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full rounded border px-3 py-2"
          required
          aria-required={true}
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Phone *</label>
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="mt-1 block w-full rounded border px-3 py-2"
          placeholder="+44..."
          required
          aria-required={true}
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Short note *</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-1 block w-full rounded border px-3 py-2"
          rows={3}
          required
          aria-required={true}
        />
      </div>

      <div className="bg-gray-50 border rounded p-3">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={noProof}
            onChange={(e) => setNoProof(e.target.checked)}
            aria-label="I do not have proof of residence"
          />
          <span className="text-sm">I don&apos;t have proof of residence</span>
        </label>

        {!noProof && (
          <div className="mt-3">
            <label className="block text-sm font-medium">
              Upload proof of residence (recommended)
            </label>
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,image/png,image/jpeg,image/jpg"
              multiple
              onChange={handleFileChange}
              className="mt-2"
              aria-describedby="file-help"
            />
            <p id="file-help" className="text-xs text-gray-500 mt-1">
              Accepted: PDF, JPG, PNG. Up to {MAX_FILES} files,{" "}
              {MAX_FILE_SIZE / (1024 * 1024)} MB each.
            </p>

            {files.length > 0 && (
              <ul className="mt-2 space-y-2">
                {files.map((f, i) => (
                  <li
                    key={`${f.name}-${i}`}
                    className="flex items-center justify-between bg-white border px-3 py-2 rounded"
                  >
                    <span className="text-sm truncate max-w-[70%]">
                      {f.name} ({Math.round(f.size / 1024)} KB)
                    </span>
                    <button
                      type="button"
                      onClick={() => removeFile(i)}
                      className="text-red-600 text-sm"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        {noProof && (
          <div className="mt-3">
            <label className="block text-sm font-medium">
              Explain briefly why you don&apos;t have proof *
            </label>
            <textarea
              value={noProofExplanation}
              onChange={(e) => setNoProofExplanation(e.target.value)}
              className="mt-2 block w-full rounded border px-3 py-2"
              rows={3}
              placeholder="E.g. newly arrived, waiting for council tax registration..."
            />
          </div>
        )}
      </div>

      <div className="text-sm">
        <label className="flex items-start gap-2">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
          />
          <span>
            I consent to Resinaro storing and processing my documents for the
            purpose of this service. Files are stored securely and may be deleted
            on request.
            <Link href="/privacy" className="underline ml-1">
              Privacy Policy
            </Link>
          </span>
        </label>
      </div>

      {error && (
        <div className="text-red-600 text-sm" role="alert">
          {error}
        </div>
      )}
      {successMsg && (
        <div className="text-green-700 text-sm" role="status">
          {successMsg}
        </div>
      )}

      <div>
        <button
          ref={submitRef}
          type="submit"
          disabled={submitting}
          className={`bg-green-900 text-white px-4 py-2 rounded ${
            submitting ? "opacity-60 cursor-wait" : "hover:bg-green-800"
          }`}
        >
          {submitting ? "Submitting..." : "Book service + Pay"}
        </button>
        <p className="text-xs text-gray-600 mt-2">
          You will be redirected to payment after submitting your details.
        </p>
      </div>

      <div className="text-xs text-gray-500 mt-2">
        By submitting you agree to our{" "}
        <Link className="underline" href="/privacy">
          Privacy Policy
        </Link>
        . If you need immediate assistance email{" "}
        <a className="underline" href="mailto:resinaro@proton.me">
          resinaro@proton.me
        </a>
        .
      </div>
    </form>
  );
}
