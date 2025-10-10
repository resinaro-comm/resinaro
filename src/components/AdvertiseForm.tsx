"use client";
import React, { useMemo, useState } from "react";

type Sector = "legal" | "tax" | "property" | "banking" | "recruitment" | "education" | "other";
type Tier = "starter" | "pro" | "exclusive";
type Budget = "<1000" | "1000-3000" | "3000-7000" | ">7000";

type FormState = {
  company: string;
  website: string;
  sector: Sector;
  contact: string;
  email: string;
  phone: string;
  goals: string;
  tier: Tier;
  budget: Budget;
  regions: string[];
  message: string;
  consent: boolean;
  hp_field: string; // honeypot
};

function pushDL(evt: Record<string, unknown>) {
  try {
    const w = window as unknown as { dataLayer?: { push?: (e: Record<string, unknown>) => void } };
    w.dataLayer?.push?.(evt);
  } catch {
    // no-op
  }
}

// Lightweight anti-spam (honeypot + human math)
function useCaptcha() {
  const [a, b] = useMemo(() => {
    const a = Math.floor(1 + Math.random() * 8);
    const b = Math.floor(1 + Math.random() * 8);
    return [a, b];
  }, []);
  const [answer, setAnswer] = useState(0);
  const valid = a + b === Number(answer);
  return { a, b, answer, setAnswer, valid };
}

export default function AdvertiseForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState(false);
  const { a, b, answer, setAnswer, valid } = useCaptcha();

  const [form, setForm] = useState<FormState>({
    company: "",
    website: "",
    sector: "legal",
    contact: "",
    email: "",
    phone: "",
    goals: "",
    tier: "pro",
    budget: "1000-3000",
    regions: [],
    message: "",
    consent: false,
    hp_field: "",
  });

  function onChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    if (type === "checkbox" && name === "consent") {
      setForm((s) => ({ ...s, consent: checked }));
    } else if (type === "checkbox" && name.startsWith("region:")) {
      const region = name.split(":")[1];
      setForm((s) => ({
        ...s,
        regions: checked ? Array.from(new Set([...s.regions, region])) : s.regions.filter((r) => r !== region),
      }));
    } else if (name === "hp_field") {
      setForm((s) => ({ ...s, hp_field: value }));
    } else {
      // All remaining fields are simple strings (company, website, sector, contact, email, phone, goals, tier, budget, message)
      setForm((s) => ({ ...s, [name]: value } as FormState));
    }
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setOk(false);

    if (!form.company.trim() || !form.contact.trim() || !form.email.trim()) {
      setError("Please complete company, contact and email.");
      return;
    }
    if (!form.consent) {
      setError("Please provide GDPR consent to continue.");
      return;
    }
    if (!valid) {
      setError("Please solve the human check.");
      return;
    }

    try {
      setLoading(true);
  // Event tracking hooks (best-effort)
  pushDL({ event: "ad_lead_started" });

      const res = await fetch("/api/ads/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "Submission failed");
      }
      setOk(true);
      pushDL({ event: "ad_lead_submitted" });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Submission failed";
      setError(message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate aria-label="Advertiser application form">
      {error && <div className="text-red-700 bg-red-50 border border-red-200 rounded p-3 text-sm" role="alert">{error}</div>}
      {ok && (
        <div className="text-green-800 bg-green-50 border border-green-200 rounded p-3 text-sm">
          Thank you. We received your application. We’ll get back to you within 2 business days.
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Company *</label>
          <input name="company" value={form.company} onChange={onChange} className="mt-1 w-full border rounded px-3 py-2" required />
        </div>
        <div>
          <label className="block text-sm font-medium">Website</label>
          <input name="website" value={form.website} onChange={onChange} className="mt-1 w-full border rounded px-3 py-2" placeholder="https://" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Primary sector</label>
          <select name="sector" value={form.sector} onChange={onChange} className="mt-1 w-full border rounded px-3 py-2">
            <option value="legal">Legal (primary)</option>
            <option value="tax">Tax / accounting</option>
            <option value="property">Property / lettings</option>
            <option value="banking">Banking / fintech</option>
            <option value="recruitment">Recruitment</option>
            <option value="education">Education</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium">Contact name *</label>
          <input name="contact" value={form.contact} onChange={onChange} className="mt-1 w-full border rounded px-3 py-2" required />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium">Email *</label>
          <input name="email" type="email" value={form.email} onChange={onChange} className="mt-1 w-full border rounded px-3 py-2" required />
        </div>
        <div>
          <label className="block text-sm font-medium">Phone / WhatsApp</label>
          <input name="phone" value={form.phone} onChange={onChange} className="mt-1 w-full border rounded px-3 py-2" placeholder="+44..." />
        </div>
        <div>
          <label className="block text-sm font-medium">Regions (optional)</label>
          <div className="mt-1 grid grid-cols-2 gap-2 text-sm">
            {[
              ["London","london"], ["Manchester","manchester"], ["Birmingham","birmingham"], ["Leeds","leeds"], ["Glasgow","glasgow"], ["Other","other"],
            ].map(([label, key]) => (
              <label key={key} className="inline-flex items-center gap-2">
                <input type="checkbox" name={`region:${key}`} onChange={onChange} />
                <span>{label}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium">Goals</label>
        <textarea name="goals" rows={3} value={form.goals} onChange={onChange} className="mt-1 w-full border rounded px-3 py-2" placeholder="e.g. Intake for immigration consultations, student visas, conveyancing, etc." />
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium">Interest tier</label>
          <select name="tier" value={form.tier} onChange={onChange} className="mt-1 w-full border rounded px-3 py-2">
            <option value="starter">Starter</option>
            <option value="pro">Pro</option>
            <option value="exclusive">Exclusive</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium">Monthly budget</label>
          <select name="budget" value={form.budget} onChange={onChange} className="mt-1 w-full border rounded px-3 py-2">
            <option value="<1000">Under £1k</option>
            <option value="1000-3000">£1k–£3k</option>
            <option value="3000-7000">£3k–£7k</option>
            <option value=">7000">£7k+</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium">Human check *</label>
          <div className="mt-1 flex items-center gap-2">
            <span className="px-2 py-1 rounded bg-neutral-100">{a} + {b} =</span>
            <input type="number" value={answer} onChange={(e) => setAnswer(Number(e.target.value))} className="w-24 border rounded px-3 py-2" required />
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium">Message</label>
        <textarea name="message" rows={4} value={form.message} onChange={onChange} className="mt-1 w-full border rounded px-3 py-2" placeholder="Tell us about your campaign, timelines and KPIs." />
      </div>

      {/* Honeypot */}
      <input type="text" name="hp_field" value={form.hp_field} onChange={onChange} className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="text-sm">
        <label className="inline-flex items-start gap-2">
          <input type="checkbox" name="consent" checked={form.consent} onChange={onChange} />
          <span>
            I agree to the processing of this data for advertising enquiries. See our <a href="/privacy" className="underline">Privacy Policy</a>.
          </span>
        </label>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 pt-2">
        <button type="submit" disabled={loading} className={`px-5 py-2 rounded text-white ${loading ? "bg-gray-400" : "bg-green-800 hover:bg-green-900"}`}>
          {loading ? "Submitting…" : "Apply to advertise"}
        </button>
      </div>
    </form>
  );
}
