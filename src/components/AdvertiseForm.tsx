"use client";
import React, { useMemo, useState } from "react";

type Sector =
  | "legal"
  | "tax"
  | "property"
  | "banking"
  | "recruitment"
  | "education"
  | "hospitality"
  | "retail"
  | "other";

type Placement = "featured" | "category-highlight" | "city-partner" | "not-sure";

// Kept for backend compatibility but hidden in the UI
type Tier = "starter" | "pro" | "exclusive" | "unsure";
type Budget = "<1000" | "1000-3000" | "3000-7000" | ">7000" | "unsure";

type FormState = {
  company: string;
  website: string;
  sector: Sector;
  contact: string;
  email: string;
  phone: string;
  goals: string;
  // new friendly fields
  placement: Placement;
  categories: string[]; // restaurants, delis, shops, services
  regions: string[];
  message: string;
  consent: boolean;
  hp_field: string; // honeypot

  // hidden legacy fields (not shown, just sent)
  tier: Tier;
  budget: Budget;
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
    const x = Math.floor(1 + Math.random() * 8);
    const y = Math.floor(1 + Math.random() * 8);
    return [x, y];
  }, []);
  const [answer, setAnswer] = useState<number | "">("");
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
    placement: "not-sure",
    categories: [],
    regions: [],
    message: "",
    consent: false,
    hp_field: "",
    // hidden legacy defaults (no pricing shown to users)
    tier: "unsure",
    budget: "unsure",
  });

  function onChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const target = e.target as HTMLInputElement;
    const { name, value, type, checked } = target;

    // checkboxes (regions/categories/consent)
    if (type === "checkbox") {
      if (name === "consent") {
        setForm((s) => ({ ...s, consent: checked }));
        return;
      }
      if (name.startsWith("region:")) {
        const region = name.split(":")[1];
        setForm((s) => ({
          ...s,
          regions: checked ? Array.from(new Set([...s.regions, region])) : s.regions.filter((r) => r !== region),
        }));
        return;
      }
      if (name.startsWith("cat:")) {
        const cat = name.split(":")[1];
        setForm((s) => ({
          ...s,
          categories: checked ? Array.from(new Set([...s.categories, cat])) : s.categories.filter((c) => c !== cat),
        }));
        return;
      }
    }

    if (name === "hp_field") {
      setForm((s) => ({ ...s, hp_field: value }));
      return;
    }

    // radio (placement)
    if (name === "placement") {
      setForm((s) => ({ ...s, placement: value as Placement }));
      return;
    }

    // plain text/select fields
    setForm((s) => ({ ...s, [name]: value } as FormState));
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
      // soft reset (keep company/email so they can resubmit tweaks)
      setForm((s) => ({ ...s, goals: "", message: "" }));
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Submission failed";
      setError(message);
    } finally {
      setLoading(false);
    }
  }

  const regionOptions: [string, string][] = [
    ["London", "london"],
    ["Manchester", "manchester"],
    ["Birmingham", "birmingham"],
    ["Leeds", "leeds"],
    ["Bradford", "bradford"],
    ["Liverpool", "liverpool"],
    ["Glasgow", "glasgow"],
    ["Edinburgh", "edinburgh"],
    ["Bristol", "bristol"],
    ["Other / UK-wide", "other"],
  ];

  const categoryOptions: [string, string][] = [
    ["Restaurants", "restaurants"],
    ["Delis", "delis"],
    ["Shops", "shops"],
    ["Services (law, tax, moving…)", "services"],
  ];

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate aria-label="Advertiser application form">
      {error && (
        <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-800" role="alert">
          {error}
        </div>
      )}
      {ok && (
        <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-900">
          Thanks! We’ve received your application. We’ll reply within 2 business days with a simple plan.
        </div>
      )}

      {/* Your business */}
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="block text-sm font-medium">Company *</label>
          <input
            name="company"
            value={form.company}
            onChange={onChange}
            className="mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-400"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Website</label>
          <input
            name="website"
            value={form.website}
            onChange={onChange}
            className="mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-400"
            placeholder="https://"
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="block text-sm font-medium">What do you do?</label>
          <select
            name="sector"
            value={form.sector}
            onChange={onChange}
            className="mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-400"
          >
            <option value="legal">Legal</option>
            <option value="tax">Tax / accounting</option>
            <option value="property">Property / lettings</option>
            <option value="banking">Banking / fintech</option>
            <option value="recruitment">Recruitment</option>
            <option value="education">Education</option>
            <option value="hospitality">Hospitality</option>
            <option value="retail">Retail / e-commerce</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium">Contact name *</label>
          <input
            name="contact"
            value={form.contact}
            onChange={onChange}
            className="mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-400"
            required
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div>
          <label className="block text-sm font-medium">Email *</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={onChange}
            className="mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-400"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Phone / WhatsApp</label>
          <input
            name="phone"
            value={form.phone}
            onChange={onChange}
            className="mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-400"
            placeholder="+44…"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Human check *</label>
          <div className="mt-1 flex items-center gap-2">
            <span className="rounded-lg bg-neutral-100 px-2 py-1">{a} + {b} =</span>
            <input
              type="number"
              value={answer}
              onChange={(e) => setAnswer(e.target.value === "" ? "" : Number(e.target.value))}
              className="w-24 rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-400"
              required
            />
          </div>
          <p className="mt-1 text-xs text-green-700">Just making sure you’re human.</p>
        </div>
      </div>

      {/* Goals */}
      <div>
        <label className="block text-sm font-medium">What would you like to achieve?</label>
        <textarea
          name="goals"
          rows={3}
          value={form.goals}
          onChange={onChange}
          className="mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-400"
          placeholder="e.g. More table bookings in Leeds; enquiries for student visas; sell gift hampers UK-wide."
        />
      </div>

      {/* Placement (radio chips) */}
      <div>
        <label className="block text-sm font-medium">Where should we feature you?</label>
        <div className="mt-2 flex flex-wrap gap-2">
          {[
            ["Featured listing", "featured"],
            ["Category highlight", "category-highlight"],
            ["City partner", "city-partner"],
            ["Help me choose", "not-sure"],
          ].map(([label, value]) => {
            const active = form.placement === (value as Placement);
            return (
              <label
                key={value}
                className={`cursor-pointer rounded-full border px-3 py-1 text-sm ${
                  active ? "bg-emerald-600 text-white border-emerald-600" : "hover:bg-emerald-50"
                }`}
              >
                <input
                  type="radio"
                  name="placement"
                  value={value}
                  checked={active}
                  onChange={onChange}
                  className="hidden"
                />
                {label}
              </label>
            );
          })}
        </div>
      </div>

      {/* Categories (only relevant for directory placements) */}
      <div>
        <label className="block text-sm font-medium">Which areas fit you best? (optional)</label>
        <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {categoryOptions.map(([label, key]) => (
            <label key={key} className="inline-flex items-center gap-2 rounded-xl border bg-white p-2 hover:bg-stone-50">
              <input type="checkbox" name={`cat:${key}`} onChange={onChange} />
              <span className="text-sm">{label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Regions */}
      <div>
        <label className="block text-sm font-medium">Cities / regions (select any)</label>
        <div className="mt-2 grid grid-cols-2 gap-2 md:grid-cols-3">
          {regionOptions.map(([label, key]) => (
            <label key={key} className="inline-flex items-center gap-2 rounded-xl border bg-white p-2 hover:bg-stone-50">
              <input type="checkbox" name={`region:${key}`} onChange={onChange} />
              <span className="text-sm">{label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium">Anything else?</label>
        <textarea
          name="message"
          rows={4}
          value={form.message}
          onChange={onChange}
          className="mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-400"
          placeholder="Timelines, notes, or links we should see."
        />
      </div>

      {/* Honeypot */}
      <input
        type="text"
        name="hp_field"
        value={form.hp_field}
        onChange={onChange}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      {/* Consent */}
      <div className="text-sm">
        <label className="inline-flex items-start gap-2">
          <input type="checkbox" name="consent" checked={form.consent} onChange={onChange} />
          <span>
            I agree to the processing of this data for advertising enquiries. See our{" "}
            <a href="/privacy" className="underline">Privacy Policy</a>.
          </span>
        </label>
      </div>

      {/* Submit */}
      <div className="flex flex-col gap-3 pt-1 sm:flex-row">
        <button
          type="submit"
          disabled={loading}
          className={`px-5 py-2 rounded-xl text-white ${
            loading ? "bg-gray-400" : "bg-green-800 hover:bg-green-900"
          }`}
        >
          {loading ? "Submitting…" : "Start the conversation"}
        </button>
        <p className="text-xs text-green-700">Kind, human onboarding. No pressure.</p>
      </div>
    </form>
  );
}
