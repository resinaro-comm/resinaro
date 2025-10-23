// components/TranslationForm.tsx
"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";

const GAS_URL =
  "https://script.google.com/macros/s/AKfycbx_S1yGOb31CWMQVvi6qShVzgRA350Sj40aKnLVNl4ctdHxm77nzjYZIgnhVmgY1BQ/exec";
const GAS_TOKEN = "abc123!abidsdjaosda!!!hhda2314532";

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB
const ALLOWED_TYPES = ["application/pdf", "image/jpeg", "image/jpg", "image/png"];

export default function TranslationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [languagePair, setLanguagePair] = useState("Italian → English");
  const [deadline, setDeadline] = useState("");
  const [notes, setNotes] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [consent, setConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement | null>(null);

  function onFilesChange(e: React.ChangeEvent<HTMLInputElement>) {
    setError(null);
    const fs = Array.from(e.target.files || []);
    const valid: File[] = [];
    for (const f of fs) {
      if (!ALLOWED_TYPES.includes(f.type)) { setError("Files must be PDF/JPG/PNG"); continue; }
      if (f.size > MAX_FILE_SIZE) { setError("Each file must be under 10 MB"); continue; }
      valid.push(f);
    }
    setFiles(valid);
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

    if (!name.trim()) return setError("Please enter your full name.");
    if (!email.trim()) return setError("Please enter your email address.");
    if (!telephone.trim()) return setError("Please enter your telephone number.");
    if (!consent) return setError("Please consent to data processing to continue.");

    setSubmitting(true);
    try {
      const bookingId = crypto.randomUUID();
      const serviceKey = "translation-assistance";

      const filesPayload: Array<{ filename: string; mimeType: string; data: string }> = [];
      for (const f of files) {
        filesPayload.push({ filename: f.name, mimeType: f.type, data: await fileToBase64(f) });
      }

      const r1 = await fetch(GAS_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          token: GAS_TOKEN,
          action: "submit",
          bookingId,
          service: serviceKey,
          name: name.trim(),
          email: email.trim(),
          telephone: telephone.trim(),
          files: filesPayload,
          data: {
            languagePair,
            deadline,
            notes: notes.trim(),
          },
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
      fd.append("name", name.trim());

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
      <div>
        <label className="block text-sm font-medium">Full name *</label>
        <input value={name} onChange={(e) => setName(e.target.value)} className="mt-1 block w-full rounded border px-3 py-2" required />
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Language pair</label>
          <select value={languagePair} onChange={(e) => setLanguagePair(e.target.value)} className="mt-1 block w-full rounded border px-3 py-2">
            <option>Italian → English</option>
            <option>English → Italian</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium">Desired deadline</label>
          <input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} className="mt-1 block w-full rounded border px-3 py-2" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium">Notes</label>
        <textarea value={notes} onChange={(e) => setNotes(e.target.value)} className="mt-1 block w-full rounded border px-3 py-2" rows={4} placeholder="Document type, certification needs, urgency" />
      </div>
      <div>
        <label className="block text-sm font-medium">Upload documents (PDF/JPG/PNG, up to 10 MB each)</label>
        <input ref={fileRef} type="file" accept=".pdf,image/png,image/jpeg" multiple onChange={onFilesChange} className="mt-1" />
        {files.length > 0 && (
          <p className="text-xs text-gray-600 mt-1">Selected: {files.map((f) => f.name).join(", ")}</p>
        )}
      </div>
      <div className="text-sm">
        <label className="flex items-start gap-2">
          <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} />
          <span>
            I consent to Resinaro processing my data and files to deliver this service.{" "}
            <Link href="/privacy-policy" className="underline">Privacy Policy</Link>
          </span>
        </label>
      </div>

      {error && <div className="text-red-600 text-sm" role="alert">{error}</div>}

      <div className="pt-2">
        <button
          type="submit"
          disabled={submitDisabled}
          className={`px-4 py-2 rounded text-white ${submitDisabled ? "bg-gray-400 cursor-not-allowed" : "bg-green-900 hover:bg-green-800"}`}
        >
          {submitting ? "Submitting..." : "Submit translation request + Pay"}
        </button>
        <p className="text-xs text-gray-600 mt-2">You&apos;ll be redirected to payment after submitting.</p>
      </div>
    </form>
  );
}
