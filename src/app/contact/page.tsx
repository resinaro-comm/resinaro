"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_TYPES = ["application/pdf", "image/jpeg", "image/png"];
const MAX_FILES = 5;

type FAQ = { question: string; answer: string | React.ReactElement };

type ServiceKey =
  | "passport"
  | "cie"
  | "aire"
  | "nin"
  | "spid"
  | "housing"
  | "translation"
  | "benefits"
  | "other";

type Requirement = {
  id: string;
  label: string;
  hint?: string;
  type: "text" | "select" | "checkbox" | "date";
  required?: boolean;
  options?: { value: string; label: string }[];
};

type ServiceGuide = {
  title: string;
  blurb: string;
  checklistTitle: string;
  requirements: Requirement[];
  messagePrompts: string[];
};

const SERVICE_GUIDES: Record<ServiceKey, ServiceGuide> = {
  passport: {
    title: "Italian Passport (UK Consulate)",
    blurb:
      "We help prepare your application pack, confirm the right consulate, and advise on booking windows and urgent routes.",
    checklistTitle: "Tell us & upload (if you can):",
    requirements: [
      {
        id: "passportType",
        label: "Is this a renewal or first-time passport?",
        type: "select",
        required: true,
        options: [
          { value: "renewal", label: "Renewal" },
          { value: "first", label: "First-time / Primo rilascio" },
          { value: "lost", label: "Lost or stolen" },
        ],
      },
      { id: "height", label: "Your height (cm) – as required by consulates", type: "text", required: true, hint: "E.g., 172" },
      {
        id: "maritalStatus",
        label: "Marital status",
        type: "select",
        options: [
          { value: "single", label: "Single" },
          { value: "married", label: "Married" },
          { value: "divorced", label: "Divorced" },
          { value: "widowed", label: "Widowed" },
        ],
      },
      {
        id: "hasAIRE",
        label: "Are you AIRE-registered at your current UK address?",
        type: "select",
        required: true,
        options: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No / Not sure" },
        ],
      },
      {
        id: "proofAddress",
        label: "Do you have UK proof of address?",
        type: "select",
        required: true,
        options: [
          { value: "council-tax", label: "Council tax" },
          { value: "utility", label: "Utility bill" },
          { value: "bank", label: "Bank statement" },
          { value: "tenancy", label: "Tenancy agreement" },
          { value: "none", label: "None yet" },
        ],
      },
      {
        id: "urgency",
        label: "Is this urgent (travel, work, lost/stolen)?",
        type: "select",
        options: [
          { value: "not-urgent", label: "Not urgent" },
          { value: "travel", label: "Urgent — upcoming travel" },
          { value: "work", label: "Urgent — work/employer needs" },
          { value: "lost", label: "Urgent — lost/stolen" },
        ],
      },
    ],
    messagePrompts: [
      "Consulate that covers your UK address (if known) and postcode.",
      "Preferred days/times for appointments you can attend.",
      "Any previous attempts/booking references (Prenot@Mi or email).",
      "If lost/stolen: police report number + date (if you have it).",
    ],
  },
  cie: {
    title: "Italian Electronic ID Card (CIE)",
    blurb:
      "From UK consulates, we’ll confirm eligibility, photo specs, and booking steps for adults and minors.",
    checklistTitle: "Tell us & upload (if you can):",
    requirements: [
      {
        id: "cieFor",
        label: "Is this for an adult or a minor?",
        type: "select",
        required: true,
        options: [
          { value: "adult", label: "Adult" },
          { value: "minor", label: "Minor" },
        ],
      },
      {
        id: "hasAIRE",
        label: "AIRE status at current UK address",
        type: "select",
        required: true,
        options: [
          { value: "yes", label: "Registered (AIRE)" },
          { value: "no", label: "Not registered / Not sure" },
        ],
      },
      {
        id: "photosReady",
        label: "Do you already have biometric photos that meet consulate specs?",
        type: "select",
        options: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" },
        ],
      },
      { id: "wantsCIE", label: "Confirm you want a CIE (Carta d’Identità Elettronica)", type: "checkbox", required: true },
    ],
    messagePrompts: [
      "Consulate jurisdiction (if known) and UK postcode.",
      "If for a minor: both parents’ status (AIRE/UK) and availability for consent.",
      "Any name changes or mismatches between documents.",
    ],
  },
  aire: {
    title: "AIRE Registration / Updates",
    blurb:
      "We prepare a consulate-specific checklist and guide you through FAST IT submission or in-person steps.",
    checklistTitle: "Tell us & upload (if you can):",
    requirements: [
      {
        id: "aireType",
        label: "What do you need?",
        type: "select",
        required: true,
        options: [
          { value: "register", label: "Register with AIRE" },
          { value: "update-address", label: "Update address" },
          { value: "update-marital", label: "Update marital status/name" },
          { value: "family-event", label: "Register birth/marriage" },
        ],
      },
      {
        id: "proofAddress",
        label: "UK proof of address available?",
        type: "select",
        required: true,
        options: [
          { value: "council-tax", label: "Council tax" },
          { value: "utility", label: "Utility bill" },
          { value: "bank", label: "Bank statement" },
          { value: "tenancy", label: "Tenancy agreement" },
          { value: "none", label: "None yet" },
        ],
      },
      {
        id: "docsTranslated",
        label: "If registering a family event, do you have translations/apostille?",
        type: "select",
        options: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No / Need help" },
          { value: "n/a", label: "Not applicable" },
        ],
      },
    ],
    messagePrompts: [
      "Comune of registration in Italy (if known).",
      "Any differences in names across documents.",
      "Timeline constraints (e.g., upcoming consular appointments).",
    ],
  },
  nin: {
    title: "National Insurance Number (NIN)",
    blurb:
      "We help you apply or replace, prepare supporting documents, and understand HMRC steps.",
    checklistTitle: "Tell us & upload (if you can):",
    requirements: [
      { id: "hasJobOffer", label: "Do you have a job offer?", type: "select", options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }] },
      { id: "proofAddress", label: "UK proof of address", type: "select", options: [{ value: "bank", label: "Bank statement" }, { value: "tenancy", label: "Tenancy" }, { value: "utility", label: "Utility bill" }, { value: "none", label: "None" }] },
      { id: "lostNIN", label: "Is this a replacement (lost/forgotten)?", type: "select", options: [{ value: "no", label: "No" }, { value: "yes", label: "Yes" }] },
    ],
    messagePrompts: ["Employer deadline (if any).", "Any prior contact with HMRC."],
  },
  spid: {
    title: "SPID / CIE ID Access",
    blurb:
      "We advise on providers, NFC compatibility and login troubleshooting for Italian digital services.",
    checklistTitle: "Tell us & upload (if you can):",
    requirements: [
      { id: "nfcPhone", label: "Do you have an NFC-capable phone?", type: "select", options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No / Not sure" }] },
      { id: "hasCIE", label: "Do you have a valid CIE with PIN/PUK?", type: "select", options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }] },
    ],
    messagePrompts: ["Provider you tried (if any).", "Exact error messages or screenshots."],
  },
  housing: {
    title: "Housing Guidance (UK)",
    blurb:
      "We share search strategy, scam checks, and deposit/renter rights basics tailored to your situation.",
    checklistTitle: "Tell us & upload (if you can):",
    requirements: [
      { id: "city", label: "City/area you’re searching in", type: "text", required: true },
      { id: "budget", label: "Budget per month (£)", type: "text" },
      { id: "moveDate", label: "Target move date", type: "date" },
      { id: "household", label: "Total people / pets", type: "text", hint: "E.g., 2 adults + 1 cat" },
    ],
    messagePrompts: ["Any references/UK guarantor status.", "Your must-haves vs nice-to-haves."],
  },
  translation: {
    title: "Certified Translations (IT ↔ EN)",
    blurb:
      "Legally formatted translations via certified partners. Share a scan/photo; we’ll confirm quote & turnaround.",
    checklistTitle: "Tell us & upload (if you can):",
    requirements: [
      { id: "languageDir", label: "Direction", type: "select", options: [{ value: "it-en", label: "Italian → English" }, { value: "en-it", label: "English → Italian" }] },
      { id: "docType", label: "Document type", type: "text", hint: "E.g., birth cert, marriage cert, diploma" },
      { id: "urgency", label: "Urgency", type: "select", options: [{ value: "standard", label: "Standard" }, { value: "express", label: "Express" }] },
    ],
    messagePrompts: ["If apostille/legalisation is required.", "Target authority that will receive the translation."],
  },
  benefits: {
    title: "Benefits & Entitlements (UK)",
    blurb:
      "We provide eligibility guidance and signpost to official support routes. We don’t take a cut of your benefits.",
    checklistTitle: "Tell us & upload (if you can):",
    requirements: [
      { id: "benefitType", label: "Benefit area", type: "text", hint: "E.g., UC, council tax reduction, housing" },
      { id: "immigrationStatus", label: "Immigration status (if comfortable sharing)", type: "text" },
      { id: "household", label: "Household details", type: "text" },
    ],
    messagePrompts: ["Deadlines or letters you’ve received.", "Local council (if known)."],
  },
  other: {
    title: "Something else",
    blurb:
      "Not on the list? No problem — tell us what you need and we’ll point you in the right direction.",
    checklistTitle: "Tell us & upload (if you can):",
    requirements: [{ id: "topic", label: "Brief summary of your request", type: "text", required: true }],
    messagePrompts: ["Any deadlines.", "What success looks like for you."],
  },
};

export default function Contact() {
  const [formStatus, setFormStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [service, setService] = useState<ServiceKey>("passport");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const guide = useMemo(() => SERVICE_GUIDES[service], [service]);

  // ----- File handling -----
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const newFiles = Array.from(e.target.files);

    if (selectedFiles.length + newFiles.length > MAX_FILES) {
      setFormStatus(`❌ You can upload up to ${MAX_FILES} files.`);
      return;
    }

    const validFiles = newFiles.filter((file) => {
      if (file.size > MAX_FILE_SIZE) {
        setFormStatus(`❌ ${file.name} is larger than 5MB.`);
        return false;
      }
      if (!ALLOWED_TYPES.includes(file.type)) {
        setFormStatus(`❌ ${file.name} is not an allowed type (PDF/JPG/PNG).`);
        return false;
      }
      return true;
    });

    setSelectedFiles((prev) => [...prev, ...validFiles]);
    e.currentTarget.value = "";
  };

  const removeFile = (idx: number) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== idx));
  };

  // ----- Client-side validation for dynamic fields -----
  const validate = (data: FormData) => {
    const newErrors: Record<string, string> = {};
    guide.requirements.forEach((r) => {
      if (!r.required) return;
      if (r.type === "checkbox") {
        const checked = data.get(r.id) === "on";
        if (!checked) newErrors[r.id] = "Required";
      } else {
        const val = String(data.get(r.id) || "").trim();
        if (!val) newErrors[r.id] = "Required";
      }
    });

    // basic email/phone checks
    const email = String(data.get("email") || "");
    if (!/^\S+@\S+\.\S+$/.test(email)) newErrors.email = "Enter a valid email";
    const phone = String(data.get("phone") || "");
    if (!/^[\d+()\-.\s]{7,}$/.test(phone)) newErrors.phone = "Enter a valid phone";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ----- Submit -----
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("");
    setLoading(true);
    setErrors({});

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.set("service", service);

    selectedFiles.forEach((file) => formData.append("files", file, file.name));

    if (!validate(formData)) {
      setLoading(false);
      setFormStatus("⚠️ Please check required fields.");
      return;
    }

    try {
      const res = await fetch("/api/contact", { method: "POST", body: formData });
      const json = await res.json().catch(() => ({}));
      if (res.ok) {
        setFormStatus("✅ Thanks — we’ve received your request. We’ll reply within 2 business days.");
        form.reset();
        setSelectedFiles([]);
      } else {
        setFormStatus(`❌ Error: ${json.error || "Please try again."}`);
      }
    } catch (err) {
      console.error(err);
      setFormStatus("⚠️ Network error, please try later.");
    } finally {
      setLoading(false);
    }
  };

  const faqs: FAQ[] = [
    {
      question: "Why do you ask for proof of address or AIRE?",
      answer: (
        <>
          Consulates and UK bodies rely on jurisdiction and identity checks. Evidence like{" "}
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
          <form
            onSubmit={handleSubmit}
            encType="multipart/form-data"
            className="space-y-8 bg-white p-6 rounded-xl shadow-sm border border-gray-200"
          >
            {/* Step 1: Your details */}
            <div>
              <h2 className="text-xl font-bold text-green-900 mb-3">Your details</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <input name="firstName" placeholder="First name *" required className="w-full border rounded px-3 py-2" />
                </div>
                <div>
                  <input name="lastName" placeholder="Last name *" required className="w-full border rounded px-3 py-2" />
                </div>
                <div>
                  <input
                    name="phone"
                    placeholder="Phone (incl. country code) *"
                    required
                    className={`w-full border rounded px-3 py-2 ${errors.phone ? "border-red-500" : ""}`}
                  />
                  {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <input
                    name="email"
                    type="email"
                    placeholder="Email *"
                    required
                    className={`w-full border rounded px-3 py-2 ${errors.email ? "border-red-500" : ""}`}
                  />
                  {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                </div>
                <div className="md:col-span-2">
                  <input name="postcode" placeholder="UK postcode (for jurisdiction)" className="w-full border rounded px-3 py-2" />
                </div>
              </div>
            </div>

            {/* Step 2: Choose service */}
            <div>
              <h2 className="text-xl font-bold text-green-900 mb-3">What do you need help with?</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {(
                  [
                    ["passport", "Passport"],
                    ["cie", "CIE (ID Card)"],
                    ["aire", "AIRE"],
                    ["nin", "NIN"],
                    ["spid", "SPID / CIE ID"],
                    ["housing", "Housing"],
                    ["translation", "Translations"],
                    ["benefits", "Benefits"],
                    ["other", "Other"],
                  ] as [ServiceKey, string][]
                ).map(([key, label]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setService(key)}
                    className={`rounded-lg border px-4 py-3 text-left hover:bg-gray-50 ${
                      service === key ? "border-green-600 ring-2 ring-green-200" : "border-gray-300"
                    }`}
                  >
                    <span className="font-medium">{label}</span>
                    <p className="text-xs text-gray-600 mt-1">
                      {SERVICE_GUIDES[key].blurb}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Dynamic checklist */}
            <div>
              <h3 className="text-lg font-semibold text-green-900">{guide.title}</h3>
              <p className="text-sm text-gray-700 mt-1">{guide.blurb}</p>

              <div className="mt-4 grid md:grid-cols-2 gap-4">
                {guide.requirements.map((r) => {
                  const base = `w-full border rounded px-3 py-2 ${errors[r.id] ? "border-red-500" : ""}`;
                  if (r.type === "select") {
                    return (
                      <div key={r.id}>
                        <label className="block text-sm mb-1">{r.label}{r.required && " *"}</label>
                        <select name={r.id} className={base} defaultValue="">
                          <option value="" disabled>
                            Select…
                          </option>
                          {r.options?.map((o) => (
                            <option key={o.value} value={o.value}>
                              {o.label}
                            </option>
                          ))}
                        </select>
                        {r.hint && <p className="text-xs text-gray-500 mt-1">{r.hint}</p>}
                        {errors[r.id] && <p className="text-xs text-red-600 mt-1">{errors[r.id]}</p>}
                      </div>
                    );
                  }
                  if (r.type === "checkbox") {
                    return (
                      <div key={r.id} className="flex items-center gap-2">
                        <input type="checkbox" name={r.id} className="h-4 w-4" />
                        <span className="text-sm">{r.label}{r.required && " *"}</span>
                        {errors[r.id] && <p className="text-xs text-red-600">{errors[r.id]}</p>}
                      </div>
                    );
                  }
                  return (
                    <div key={r.id}>
                      <label className="block text-sm mb-1">{r.label}{r.required && " *"}</label>
                      <input name={r.id} type={r.type === "date" ? "date" : "text"} className={base} />
                      {r.hint && <p className="text-xs text-gray-500 mt-1">{r.hint}</p>}
                      {errors[r.id] && <p className="text-xs text-red-600 mt-1">{errors[r.id]}</p>}
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="font-medium text-green-900">To help us act fast, include:</p>
                <ul className="list-disc pl-5 text-sm mt-2 space-y-1">
                  {guide.messagePrompts.map((t, i) => (
                    <li key={i}>{t}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium mb-1">Your message *</label>
              <textarea
                name="message"
                rows={6}
                required
                placeholder="Write in Italian or English. Bullet points are fine."
                className="w-full border rounded px-3 py-2"
              />
            </div>

            {/* Uploads */}
            <div>
              <label className="block text-sm font-medium mb-2">Upload documents (optional)</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:bg-gray-50">
                <input
                  id="fileUpload"
                  type="file"
                  name="files"
                  multiple
                  accept=".pdf,.jpg,.jpeg,.png"
                  className="hidden"
                  onChange={handleFileChange}
                />
                <label htmlFor="fileUpload" className="cursor-pointer text-green-700 font-semibold">
                  📎 Click to choose up to {MAX_FILES} files
                </label>
                <p className="text-sm text-gray-600 mt-2">Allowed: PDF, JPG, PNG (max 5MB each).</p>
              </div>

              {selectedFiles.length > 0 && (
                <ul className="mt-3 space-y-2 text-sm">
                  {selectedFiles.map((f, i) => (
                    <li key={i} className="flex items-center justify-between rounded border px-3 py-2">
                      <span>
                        {f.name} — {(f.size / 1024 / 1024).toFixed(2)} MB
                      </span>
                      <button type="button" onClick={() => removeFile(i)} className="text-red-600 hover:underline text-xs">
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Consent */}
            <div className="flex items-start gap-2">
              <input type="checkbox" name="consent" required className="mt-1" />
              <p className="text-sm">
                I agree to Resinaro handling my data in line with the{" "}
                <Link href="/privacy-policy" className="text-green-700 underline" target="_blank">
                  Privacy Policy
                </Link>{" "}
                (UK GDPR).
              </p>
            </div>

            {/* Submit */}
            <div className="flex items-center gap-3">
              <button
                type="submit"
                disabled={loading}
                className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-lg font-medium"
              >
                {loading ? "Sending…" : "Send message"}
              </button>
              <p className="text-sm text-gray-600">We usually reply within 2 business days.</p>
            </div>

            {formStatus && (
              <div
                className={`rounded-lg px-4 py-3 text-sm ${
                  formStatus.startsWith("✅")
                    ? "bg-green-50 text-green-800 border border-green-200"
                    : "bg-amber-50 text-amber-800 border border-amber-200"
                }`}
              >
                {formStatus}
              </div>
            )}
          </form>
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
            <a href="mailto:help@resinaro.com" className="underline text-green-800">
              help@resinaro.com
            </a>{" "}
            and paste the prompts above. We read Italian and English.
          </p>
        </div>
      </section>
    </main>
  );
}
