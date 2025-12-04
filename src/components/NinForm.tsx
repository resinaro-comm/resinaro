// components/NinForm.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";

const GAS_URL =
  "https://script.google.com/macros/s/AKfycbx_S1yGOb31CWMQVvi6qShVzgRA350Sj40aKnLVNl4ctdHxm77nzjYZIgnhVmgY1BQ/exec";
const GAS_TOKEN = "abc123!abidsdjaosda!!!hhda2314532"; // must match AUTH_TOKEN in Apps Script

export default function NinForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [ninStatus, setNinStatus] = useState<
    "" | "no-nin" | "lost" | "unsure"
  >("");
  const [preferredLanguage, setPreferredLanguage] = useState<
    "" | "it" | "en" | "either"
  >("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [agreeRefund, setAgreeRefund] = useState(false);
  const [agreeImmediate, setAgreeImmediate] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!name.trim()) {
      return setError("Please enter your full name.");
    }
    if (!email.trim()) {
      return setError("Please enter your email address.");
    }
    if (!telephone.trim()) {
      return setError("Please enter your telephone number.");
    }
    if (!ninStatus) {
      return setError("Please tell us your current NIN situation.");
    }
    if (!consent) {
      return setError(
        "Please consent to data processing to continue."
      );
    }
    if (!agreeRefund) {
      return setError(
        "Please confirm that you agree to the refund and cancellation policy."
      );
    }
    if (!agreeImmediate) {
      return setError(
        "Please confirm that you want Resinaro to start the service immediately."
      );
    }

    setSubmitting(true);
    try {
      const bookingId = crypto.randomUUID();
      const serviceKey = "nin-support";

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
          files: [],
          data: {
            message: message.trim(),
            ninStatus,
            preferredLanguage,
            agreeRefund,
            agreeImmediate,
          },
        }),
      });

      type GasResponse = { ok?: boolean; error?: string } | undefined;
      let r1json: GasResponse = undefined;
      try {
        r1json = (await r1.json()) as GasResponse;
      } catch {
        // ignore JSON parse error
      }

      if (!r1.ok || !(r1json && r1json.ok)) {
        const msg =
          r1json && r1json.error
            ? r1json.error
            : "Could not save submission to Google.";
        throw new Error(msg);
      }

      const fd = new FormData();
      fd.append("bookingId", bookingId);
      fd.append("service", serviceKey);
      fd.append("email", email.trim());
      fd.append("name", name.trim());

      const r2 = await fetch("/api/services/book", {
        method: "POST",
        body: fd,
      });

      if (!r2.ok) {
        const text = await r2.text().catch(() => "");
        throw new Error(text || "Could not prepare checkout.");
      }

      const { url } = (await r2.json()) as { url?: string };
      if (!url) {
        throw new Error("No payment link returned.");
      }

      window.location.href = url;
    } catch (err: unknown) {
      const messageText =
        err instanceof Error ? err.message : String(err);
      setError(
        messageText ||
          "Submission failed — please try again or email resinaro@proton.me."
      );
      window.scrollTo({ top: 0, behavior: "smooth" });
    } finally {
      setSubmitting(false);
    }
  }

  const submitDisabled =
    submitting || !consent || !agreeRefund || !agreeImmediate;

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
      aria-live="polite"
    >
      {error && (
        <div
          className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-800"
          role="alert"
        >
          {error}
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-emerald-950">
          Full name *
        </label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-emerald-700 focus:outline-none focus:ring-1 focus:ring-emerald-700"
          autoComplete="name"
          required
        />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-emerald-950">
            Email *
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-emerald-700 focus:outline-none focus:ring-1 focus:ring-emerald-700"
            autoComplete="email"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-emerald-950">
            Telephone (with country code) *
          </label>
          <input
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
            className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-emerald-700 focus:outline-none focus:ring-1 focus:ring-emerald-700"
            placeholder="+44..."
            autoComplete="tel"
            required
          />
          <p className="mt-1 text-xs text-gray-600">
            WhatsApp number is fine if you prefer.
          </p>
        </div>
      </div>

      {/* NIN status */}
      <div>
        <label className="block text-sm font-medium text-emerald-950">
          Your current NIN situation *
        </label>
        <p className="mt-1 text-xs text-gray-600">
          This helps us understand which route applies to you.
        </p>
        <div className="mt-2 grid gap-2 text-sm md:grid-cols-3">
          <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 hover:border-emerald-700">
            <input
              type="radio"
              name="ninStatus"
              value="no-nin"
              checked={ninStatus === "no-nin"}
              onChange={() => setNinStatus("no-nin")}
              className="h-4 w-4"
            />
            <span>I don&apos;t have a NIN yet</span>
          </label>
          <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 hover:border-emerald-700">
            <input
              type="radio"
              name="ninStatus"
              value="lost"
              checked={ninStatus === "lost"}
              onChange={() => setNinStatus("lost")}
              className="h-4 w-4"
            />
            <span>I had one but I lost/forgot it</span>
          </label>
          <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 hover:border-emerald-700">
            <input
              type="radio"
              name="ninStatus"
              value="unsure"
              checked={ninStatus === "unsure"}
              onChange={() => setNinStatus("unsure")}
              className="h-4 w-4"
            />
            <span>I&apos;m not sure / need to check</span>
          </label>
        </div>
      </div>

      {/* Preferred language */}
      <div>
        <label className="block text-sm font-medium text-emerald-950">
          Preferred language
        </label>
        <select
          value={preferredLanguage}
          onChange={(e) =>
            setPreferredLanguage(
              e.target.value as "" | "it" | "en" | "either"
            )
          }
          className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-emerald-700 focus:outline-none focus:ring-1 focus:ring-emerald-700"
        >
          <option value="">
            No preference / Nessuna preferenza
          </option>
          <option value="it">Italiano</option>
          <option value="en">English</option>
          <option value="either">Italiano o inglese va bene</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-emerald-950">
          Brief details about your situation
        </label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-emerald-700 focus:outline-none focus:ring-1 focus:ring-emerald-700"
          rows={4}
          placeholder="Tell us what you need help with (for example: new job, HMRC letter you received, missing NIN...)"
        />
        <p className="mt-1 text-xs text-gray-600">
          Please don&apos;t paste full bank details or passwords here.
        </p>
      </div>

      {/* Consent + legal checkboxes */}
      <div className="space-y-2 text-sm">
        <label className="flex items-start gap-2">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="mt-1 h-4 w-4"
          />
          <span>
            I consent to Resinaro processing my data to deliver this NIN
            support service.{" "}
            <Link
              href="/privacy-policy"
              className="underline underline-offset-4"
            >
              Privacy Policy
            </Link>
            .
          </span>
        </label>

        <label className="flex items-start gap-2">
          <input
            type="checkbox"
            checked={agreeRefund}
            onChange={(e) => setAgreeRefund(e.target.checked)}
            className="mt-1 h-4 w-4"
          />
          <span>
            I confirm that I have read and agree to Resinaro&apos;s refund
            and cancellation policy.{" "}
            <Link
              href="/refund-policy"
              className="underline underline-offset-4"
            >
              Refund policy
            </Link>
            .
          </span>
        </label>

        <label className="flex items-start gap-2">
          <input
            type="checkbox"
            checked={agreeImmediate}
            onChange={(e) => setAgreeImmediate(e.target.checked)}
            className="mt-1 h-4 w-4"
          />
          <span>
            I request that Resinaro starts providing the service
            immediately. I understand that once the work has started, I
            may lose some or all of my usual cooling-off rights under
            consumer law.
          </span>
        </label>
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={submitDisabled}
          className={`inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors ${
            submitDisabled
              ? "cursor-not-allowed bg-gray-400"
              : "bg-emerald-700 hover:bg-emerald-800"
          }`}
        >
          {submitting ? "Submitting..." : "Submit NIN request + Pay"}
        </button>
        <p className="mt-2 text-xs text-gray-600">
          You&apos;ll be redirected to a secure payment page after
          submitting. This payment is for Resinaro&apos;s support only — it
          is not a payment to HMRC or the UK government.
        </p>
      </div>
    </form>
  );
}
