"use client";

import { useState } from "react";
import Link from "next/link";
import PassportForm from "../../components/PassportForm";
import CieForm from "../../components/CieForm";
import AireForm from "../../components/AireForm";
import NinForm from "../../components/NinForm";
import HousingForm from "../../components/HousingForm";
import TranslationForm from "../../components/TranslationForm";
import BenefitsForm from "../../components/BenefitsForm";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_TYPES = ["application/pdf", "image/jpeg", "image/png"];
const MAX_FILES = 5;

type FAQ = { question: string; answer: string | React.ReactElement };

type ServiceKey =
  | "passport"
  | "cie"
  | "aire"
  | "nin"
  | "housing"
  | "translation"
  | "benefits"
  | "other";

// Payment-eligible services (these forms will redirect to Stripe themselves)
const PAY_ELIGIBLE = new Set<ServiceKey>([
  "passport",
  "cie",
  "aire",
  "nin",
  "housing",
  "translation",
  "benefits",
]);

function OtherContactForm({ serviceKey }: { serviceKey: "other" }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [postcode, setPostcode] = useState("");
  const [message, setMessage] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [consent, setConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  function onFilesChange(e: React.ChangeEvent<HTMLInputElement>) {
    setStatus(null);
    const selected = Array.from(e.target.files || []);
    const tooMany = files.length + selected.length > MAX_FILES;
    if (tooMany) {
      setStatus(`You can upload up to ${MAX_FILES} files.`);
      return;
    }
    const valid: File[] = [];
    for (const f of selected) {
      if (!ALLOWED_TYPES.includes(f.type)) {
        setStatus(`${f.name} is not an allowed type (PDF/JPG/PNG).`);
        continue;
      }
      if (f.size > MAX_FILE_SIZE) {
        setStatus(`${f.name} is larger than 5MB.`);
        continue;
      }
      valid.push(f);
    }
    setFiles((prev) => [...prev, ...valid]);
  }

  function removeFile(i: number) {
    setFiles((prev) => prev.filter((_, idx) => idx !== i));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus(null);

    if (!firstName.trim() || !lastName.trim()) return setStatus("Please enter your first and last name.");
    if (!/\S+@\S+\.\S+/.test(email)) return setStatus("Enter a valid email address.");
    if (!/[\d+()\-.\s]{7,}/.test(phone)) return setStatus("Enter a valid phone number.");
    if (!message.trim()) return setStatus("Please write a short message.");
    if (!consent) return setStatus("Please confirm you consent to data handling.");

    try {
      setSubmitting(true);
      const fd = new FormData();
      fd.set("firstName", firstName.trim());
      fd.set("lastName", lastName.trim());
      fd.set("email", email.trim());
      fd.set("phone", phone.trim());
      if (postcode.trim()) fd.set("postcode", postcode.trim());
      fd.set("message", message.trim());
      fd.set("service", serviceKey);
      for (const f of files) fd.append("files", f, f.name);

      const res = await fetch("/api/contact", { method: "POST", body: fd });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus(`Error: ${json.error || "please try again."}`);
      } else {
        setStatus("✅ Thanks — we’ve received your request. We’ll reply within 2 business days.");
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setPostcode("");
        setMessage("");
        setFiles([]);
        setConsent(false);
      }
    } catch (err) {
      setStatus("Network error — please try later.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
      <div className="grid md:grid-cols-2 gap-4">
        <input className="w-full border rounded px-3 py-2" placeholder="First name *" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        <input className="w-full border rounded px-3 py-2" placeholder="Last name *" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <input className="w-full border rounded px-3 py-2" type="email" placeholder="Email *" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className="w-full border rounded px-3 py-2" placeholder="Phone (incl. country code) *" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>
      <input className="w-full border rounded px-3 py-2" placeholder="UK postcode (optional)" value={postcode} onChange={(e) => setPostcode(e.target.value)} />
      <div>
        <label className="block text-sm font-medium mb-1">Your message *</label>
        <textarea className="w-full border rounded px-3 py-2" rows={6} placeholder="Write in Italian or English. Bullet points are fine." value={message} onChange={(e) => setMessage(e.target.value)} />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Upload documents (optional)</label>
        <input type="file" multiple accept=".pdf,.jpg,.jpeg,.png" onChange={onFilesChange} />
        {files.length > 0 && (
          <ul className="mt-2 space-y-1 text-sm">
            {files.map((f, i) => (
              <li key={i} className="flex items-center justify-between rounded border px-3 py-2">
                <span>
                  {f.name} — {(f.size / 1024 / 1024).toFixed(2)} MB
                </span>
                <button type="button" onClick={() => removeFile(i)} className="text-red-600 text-xs underline">Remove</button>
              </li>
            ))}
          </ul>
        )}
        <p className="text-xs text-gray-600 mt-1">Allowed: PDF, JPG, PNG (max 5MB each). Up to {MAX_FILES} files.</p>
      </div>
      <label className="flex items-start gap-2 text-sm">
        <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} />
        <span>
          I agree to Resinaro handling my data in line with the {""}
          <Link href="/privacy-policy" className="text-green-700 underline" target="_blank">Privacy Policy</Link>.
        </span>
      </label>
      <div className="flex items-center gap-3">
        <button type="submit" disabled={submitting} className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-lg font-medium">
          {submitting ? "Sending…" : "Send message"}
        </button>
        <p className="text-sm text-gray-600">We usually reply within 2 business days.</p>
      </div>
      {status && (
        <div className={`rounded-lg px-4 py-3 text-sm ${status.startsWith("✅") ? "bg-green-50 text-green-800 border border-green-200" : "bg-amber-50 text-amber-800 border border-amber-200"}`}>
          {status}
        </div>
      )}
    </form>
  );
}

export default function Contact() {
  const [service, setService] = useState<ServiceKey>("passport");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      question: "Why do you ask for proof of address or AIRE?",
      answer: (
        <>
          Consulates and UK bodies rely on jurisdiction and identity checks. Evidence like {" "}
          <em>council tax, bank statements, tenancy agreements</em> or AIRE status makes booking
          and verification faster. If you don’t have one yet, tell us — we’ll suggest alternatives.
        </>
      ),
    },
    {
      question: "How is my data stored?",
      answer: (
        <>
          Files are stored in a private, access-controlled workspace. We follow UK GDPR:
          data is used only to deliver the service you request and kept no longer than necessary.
          See our{" "}
          <Link href="/privacy-policy" className="text-green-700 underline">
            Privacy Policy
          </Link>
          .
        </>
      ),
    },
    {
      question: "What’s your typical response time?",
      answer: (
        <>
          We aim to reply within <strong>2 business days</strong>. Urgent passport/CIE cases:
          say “urgent” in the subject and include travel dates so we can triage quickly.
        </>
      ),
    },
    {
      question: "Are you like a typical agency?",
      answer: (
        <>
          No. We’re community-first: clear pricing, no upselling, and we’ll send you to official
          routes when that’s the fastest/cheapest option. If we make an error, we’ll put it right.
        </>
      ),
    },
  ];

  return (
    <main className="bg-[#F9F6F1] text-gray-800">
      {/* Header / Trust strip */}
      <header className="bg-gradient-to-r from-green-900 via-green-800 to-green-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <h1 className="text-3xl md:text-4xl font-extrabold">Contact Resinaro</h1>
          <p className="mt-2 text-white/90">
            The fastest way to get help. Share a few details, and we’ll reply with clear next steps.
          </p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            <div className="rounded-lg bg-white/10 p-4">
              <p className="font-semibold">Transparent</p>
              <p className="text-white/80">Clear fees & scope before you commit.</p>
            </div>
            <div className="rounded-lg bg-white/10 p-4">
              <p className="font-semibold">Secure</p>
              <p className="text-white/80">Private uploads, UK GDPR aligned.</p>
            </div>
            <div className="rounded-lg bg-white/10 p-4">
              <p className="font-semibold">Responsive</p>
              <p className="text-white/80">Typical reply within 2 business days.</p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-10 grid lg:grid-cols-3 gap-8">
        {/* FORM CARD */}
        <section className="lg:col-span-2">
          <div className="space-y-6 bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div>
              <h2 className="text-xl font-bold text-green-900 mb-3">What do you need help with?</h2>
              <div className="grid md:grid-cols-2 gap-3 items-start">
                <div>
                  <label className="block text-sm mb-1">Select a service *</label>
                  <select
                    className="w-full border rounded px-3 py-2"
                    value={service}
                    onChange={(e) => setService(e.target.value as ServiceKey)}
                  >
                    <option value="passport">Passport</option>
                    <option value="cie">CIE (ID Card)</option>
                    <option value="aire">AIRE</option>
                    <option value="nin">NIN</option>
                    <option value="housing">Housing</option>
                    <option value="translation">Translations</option>
                    <option value="benefits">Benefits</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="text-xs bg-neutral-50 border rounded p-3">
                  {PAY_ELIGIBLE.has(service) ? (
                    <p>
                      After you submit, you’ll be redirected to a secure Stripe payment page to confirm your booking for this service.
                    </p>
                  ) : (
                    <p>
                      After you submit, we’ll email you next steps. No immediate payment or redirect is required for this selection.
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Render the exact service form component below */}
            <div className="pt-2">
              {service === "passport" && <PassportForm />}
              {service === "cie" && <CieForm />}
              {service === "aire" && <AireForm />}
              {service === "nin" && <NinForm />}
              {service === "housing" && <HousingForm />}
              {service === "translation" && <TranslationForm />}
              {service === "benefits" && <BenefitsForm />}
              {service === "other" && (
                <OtherContactForm serviceKey={"other"} />
              )}
            </div>
          </div>
        </section>

        {/* RIGHT SIDEBAR: Trust + FAQs */}
        <aside className="space-y-8">
          {/* Trust */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <h3 className="text-lg font-bold text-green-900">Why people trust Resinaro</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>• Community-first: we’ll point you to official free routes when that’s best.</li>
              <li>• Clear prices and scope — no surprises or upselling.</li>
              <li>• Practical outcomes: checklists, templates, and step-by-step booking help.</li>
              <li>• If we make an error, we fix it — or refund appropriately.</li>
            </ul>
            <div className="mt-4 rounded-lg bg-neutral-50 border p-4 text-xs text-neutral-700">
              <p className="font-medium">What to expect after you send this form</p>
              <ol className="list-decimal pl-5 mt-2 space-y-1">
                <li>We confirm receipt and review your details.</li>
                <li>We reply with next steps and a clear quote/scope.</li>
                <li>Once you agree, we start — and keep you updated.</li>
              </ol>
            </div>
          </div>

          {/* FAQs */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <h3 className="text-lg font-bold text-green-900">Common questions</h3>
            <div className="mt-3 divide-y">
              {faqs.map((f, i) => (
                <div key={i} className="py-3">
                  <button
                    className="w-full text-left font-medium"
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  >
                    {f.question}
                  </button>
                  {openIndex === i && <div className="mt-2 text-sm text-gray-700">{f.answer}</div>}
                </div>
              ))}
            </div>
          </div>

          {/* Need urgent help? */}
          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <p className="font-semibold text-green-900">Urgent passport/CIE?</p>
            <p className="text-sm mt-1">
              Add <strong>“URGENT”</strong> to your subject line and include travel dates. We’ll triage accordingly.
            </p>
          </div>
        </aside>
      </div>

      {/* Footer note */}
      <section className="max-w-6xl mx-auto px-6 pb-12">
        <div className="bg-white rounded-xl border border-gray-200 p-6 text-sm text-gray-700">
          <p>
            Prefer email? Contact{" "}
              <a href="mailto:resinaro@proton.me" className="underline text-green-800">
                resinaro@proton.me
            </a>{" "}
            and paste the prompts above. We read Italian and English.
          </p>
        </div>
      </section>
    </main>
  );
}
