"use client";

import React, { useRef, useState } from "react";

/** GAS endpoint **/
const GAS_URL =
  "https://script.google.com/macros/s/AKfycbx_S1yGOb31CWMQVvi6qShVzgRA350Sj40aKnLVNl4ctdHxm77nzjYZIgnhVmgY1BQ/exec";
const GAS_TOKEN = "abc123!abidsdjaosda!!!hhda2314532";

/** Files **/
const ALLOWED = ["application/pdf", "image/jpeg", "image/jpg", "image/png"];
const MAX_MB = 5;
const MAX = MAX_MB * 1024 * 1024;

/** Links **/
const FAST_IT_URL = "https://serviziconsolari.esteri.it/ScoFE/index.sco";

/** Types **/
type Service = "prenotami" | "under12";
type Aire = "yes" | "no" | "unsure";
type Marital = "single" | "married" | "divorced" | "widowed" | "other";

type PersonDetails = {
  name: string;
  dob: string;
  heightCm: string;
  eyeColour: string;
  maritalStatus: Marital;
};

/* ---------- Small helper components ---------- */

function UploadCard({
  title,
  help,
  multiple,
  accept,
  onChange,
}: {
  title: string;
  help?: string;
  multiple?: boolean;
  accept?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <label className="block rounded-xl border border-green-200 bg-green-50 hover:bg-green-100/60 transition-colors p-3 cursor-pointer">
      <span className="block text-sm font-medium text-green-900">{title}</span>
      {help && <span className="block text-xs text-gray-700 mt-0.5">{help}</span>}
      <input
        type="file"
        accept={accept || ".pdf,image/png,image/jpeg"}
        className="mt-2 block w-full text-sm"
        onChange={onChange}
        multiple={multiple}
      />
    </label>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <p className="text-sm font-semibold">{children}</p>;
}

function okFile(f: File) {
  return ALLOWED.includes(f.type) && f.size <= MAX;
}

async function toB64(f: File) {
  const ab = await f.arrayBuffer();
  let s = "",
    bytes = new Uint8Array(ab); // eslint-disable-line prefer-const
  for (let i = 0; i < bytes.length; i += 0x8000) {
    s += String.fromCharCode(...Array.from(bytes.subarray(i, i + 0x8000)));
  }
  return btoa(s);
}

/* ---------- Main component ---------- */

export default function PassportForm() {
  /** Wizard state */
  const [step, setStep] = useState(1); // 1 Service → 2 Contact → 3 AIRE → 4 Details → 5 Uploads
  const pct = [0, 20, 40, 60, 80, 100][step] || 0;

  /** Core selections */
  const [service, setService] = useState<Service>("prenotami");
  const [aire, setAire] = useState<Aire>("unsure");

  /** Contact (lead applicant) */
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");

  /** Prenot@Mi — main applicant extra details (required) */
  const [heightCm, setHeightCm] = useState("");
  const [eyeColour, setEyeColour] = useState("");
  const [maritalStatus, setMaritalStatus] = useState<Marital>("single");

  /** Prenot@Mi — account choice */
  const [createAcc, setCreateAcc] = useState(false);
  const [acceptFee, setAcceptFee] = useState(false);
  const [pEmail, setPEmail] = useState("");
  const [pPass, setPPass] = useState("");
  const [showPass, setShowPass] = useState(false);

  /** Prenot@Mi — additional 12+/adult applicants (e.g., teens 12–17) */
  const [extraCount, setExtraCount] = useState(0);
  const [extraPeople, setExtraPeople] = useState<PersonDetails[]>([]);

  /** Under-12 minimal (postal) */
  const [kids, setKids] = useState(1);
  const [kidsData, setKidsData] = useState<{ name: string; dob: string }[]>([
    { name: "", dob: "" },
  ]);

  /** U12 upload mini-steps */
  const [u12UploadStep, setU12UploadStep] = useState<1 | 2 | 3>(1);
  const u12Pct = u12UploadStep === 1 ? 33 : u12UploadStep === 2 ? 66 : 100;

  /** Uploads */
  const [emailDocsLater, setEmailDocsLater] = useState(false);
  const proofRef = useRef<HTMLInputElement | null>(null);
  const [proof, setProof] = useState<File | null>(null);

  // U12 buckets
  const [u12AppForm, setU12AppForm] = useState<File | null>(null);
  const [u12ParentIDs, setU12ParentIDs] = useState<File[]>([]);
  const [u12Consent, setU12Consent] = useState<File | null>(null);
  const [u12Photos, setU12Photos] = useState<File[]>([]);
  const [u12PhotoAuth, setU12PhotoAuth] = useState<File | null>(null);
  const [u12SpecDel, setU12SpecDel] = useState<File | null>(null);
  const [u12PrevID, setU12PrevID] = useState<File | null>(null);
  const [u12LostForm, setU12LostForm] = useState<File | null>(null);
  const [u12Police, setU12Police] = useState<File | null>(null);

  /** UX */
  const [consent, setConsent] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  /* ---------- Helpers ---------- */

  function openFastIt() {
    window.open(FAST_IT_URL, "_blank", "noopener");
  }

  function setKidsCount(n: number) {
    const v = Math.max(1, n || 1);
    setKids(v);
    setKidsData((prev) => {
      const a = [...prev];
      while (a.length < v) a.push({ name: "", dob: "" });
      while (a.length > v) a.pop();
      return a;
    });
  }

  function setExtra(n: number) {
    const v = Math.max(0, n || 0);
    setExtraCount(v);
    setExtraPeople((prev) => {
      const a = [...prev];
      while (a.length < v)
        a.push({
          name: "",
          dob: "",
          heightCm: "",
          eyeColour: "",
          maritalStatus: "single",
        });
      while (a.length > v) a.pop();
      return a;
    });
  }

  function pickOne(
    e: React.ChangeEvent<HTMLInputElement>,
    setter: (f: File | null) => void,
    label: string
  ) {
    const f = e.target.files?.[0] || null;
    if (!f) return setter(null);
    if (!okFile(f)) {
      setErr(`${label}: PDF/JPG/PNG, ≤${MAX_MB}MB`);
      e.target.value = "";
      return;
    }
    setter(f);
    e.target.value = "";
  }

  function pickMany(
    e: React.ChangeEvent<HTMLInputElement>,
    setter: (fs: File[]) => void,
    label: string
  ) {
    const sel = e.target.files;
    if (!sel) return;
    const arr = Array.from(sel);
    for (const f of arr) {
      if (!okFile(f)) {
        setErr(`${label}: PDF/JPG/PNG, ≤${MAX_MB}MB`);
        e.target.value = "";
        return;
      }
    }
    setter(arr);
    e.target.value = "";
  }

  /* ---------- Wizard navigation with micro-validation ---------- */

  function next() {
    setErr(null);

    if (step === 1) return setStep(2);

    if (step === 2) {
      if (!first.trim() || !last.trim() || !email.trim() || !phone.trim()) {
        return setErr("Add your name, email and phone.");
      }
      return setStep(3);
    }

    if (step === 3) {
      if (aire !== "yes") {
        return setErr("You must be AIRE-registered. Tap FAST.IT for help, or email us.");
      }
      return setStep(4);
    }

    if (step === 4) {
      if (service === "prenotami") {
        // Main applicant requirements
        if (!heightCm.trim() || !eyeColour.trim() || !maritalStatus) {
          return setErr("Add height (cm), eye colour and marital status.");
        }
        // Extra people (12+/adults) — each needs the same triple
        for (let i = 0; i < extraCount; i++) {
          const p = extraPeople[i];
          if (
            !p?.name.trim() ||
            !p?.dob.trim() ||
            !p?.heightCm.trim() ||
            !p?.eyeColour.trim() ||
            !p?.maritalStatus
          ) {
            return setErr(`Extra person ${i + 1}: fill name, DOB, height, eye colour, marital status.`);
          }
        }
        // Account choice
        if (!createAcc && (!pEmail.trim() || !pPass)) {
          return setErr("Add Prenot@Mi email + password, or tick ‘Create account (+£20)’."); 
        }
        if (createAcc && !acceptFee) {
          return setErr("Please accept the £20 account creation fee.");
        }
      } else if (service === "under12") {
        for (let i = 0; i < kids; i++) {
          if (!kidsData[i]?.name.trim() || !kidsData[i]?.dob.trim()) {
            return setErr(`Child ${i + 1}: name + DOB (dd/mm/yyyy).`);
          }
        }
      }
      return setStep(5);
    }
  }

  function back() {
    setErr(null);
    setStep((s) => Math.max(1, s - 1));
  }

  /* ---------- Submit ---------- */

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);
    if (!consent) return setErr("Please agree to data handling.");

    const bookingId = crypto.randomUUID();
    const files: Array<{ filename: string; mimeType: string; data: string; tag?: string }> = [];

    async function push(f: File | null | undefined, tag: string) {
      if (!f) return;
      files.push({ filename: f.name, mimeType: f.type, data: await toB64(f), tag });
    }
    async function pushMany(fs: File[] | null | undefined, tag: string) {
      if (!fs) return;
      for (const f of fs) await push(f, tag);
    }

    // Proof encouraged for both; not mandatory if emailing later
    if (!emailDocsLater) await push(proof, "proof_of_address");

    if (service === "under12" && !emailDocsLater) {
      await push(u12AppForm, "u12_application_form");
      await pushMany(u12ParentIDs, "u12_parent_ids");
      await push(u12Consent, "u12_parents_consent");
      await pushMany(u12Photos, "u12_photos");
      await push(u12PhotoAuth, "u12_photo_authentication");
      await push(u12SpecDel, "u12_special_delivery");
      await push(u12PrevID, "u12_prev_passport_or_id");
      await push(u12LostForm, "u12_lost_form");
      await push(u12Police, "u12_police_or_report_my_loss");
    }

    const data: Record<string, string> = {
      serviceType: service,
      aire,
      name: `${first.trim()} ${last.trim()}`,
      email: email.trim(),
      telephone: phone.trim(),
      note: note.trim(),
      emailDocsLater: emailDocsLater ? "1" : "0",
    };

    if (service === "prenotami") {
      // Main applicant
      data.heightCm = heightCm.trim();
      data.eyeColour = eyeColour.trim();
      data.maritalStatus = maritalStatus;

      // Account
      data.createPrenotami = createAcc ? "1" : "0";
      data.prenotamiEmail = pEmail.trim();
      if (!createAcc && pPass) {
        data.prenotamiPassword = pPass;
        data.prenotami_password = pPass; // for legacy scripts
      }

      // Extra people (12+/adults)
      data.extraCount = String(extraCount);
      extraPeople.forEach((p, i) => {
        const n = i + 1;
        data[`extra_${n}_name`] = p.name.trim();
        data[`extra_${n}_dob`] = p.dob.trim();
        data[`extra_${n}_heightCm`] = p.heightCm.trim();
        data[`extra_${n}_eyeColour`] = p.eyeColour.trim();
        data[`extra_${n}_maritalStatus`] = p.maritalStatus;
      });
    } else {
      // Under-12
      data.numChildren = String(kids);
      kidsData.forEach((c, i) => {
        data[`child_${i + 1}_name`] = c.name.trim();
        data[`child_${i + 1}_dob`] = c.dob.trim();
      });
    }

    try {
      setSubmitting(true);

      // Save to GAS
      const r = await fetch(GAS_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          token: GAS_TOKEN,
          action: "submit",
          bookingId,
          service:
            service === "prenotami"
              ? createAcc
                ? "passport-prenotami-with-account"
                : "passport-prenotami"
              : "passport-under12-postal",
          name: `${first.trim()} ${last.trim()}`,
          email: email.trim(),
          telephone: phone.trim(),
          files,
          data,
        }),
      });
      const js = await r.json().catch(() => ({}));
      if (!r.ok || !js?.ok) throw new Error(js?.error || "Could not save submission.");

      // Stripe link
      const fd = new FormData();
      fd.append("bookingId", bookingId);
      fd.append(
        "service",
        service === "prenotami"
          ? createAcc
            ? "passport-assistance-account"
            : "passport-assistance"
          : "passport-under12-guidance"
      );
      fd.append("email", email.trim());
      fd.append("name", `${first.trim()} ${last.trim()}`);
      const pay = await fetch("/api/services/book", { method: "POST", body: fd });
      if (!pay.ok) throw new Error(await pay.text().catch(() => "Checkout error."));
      const { url } = await pay.json();
      if (!url) throw new Error("No payment link returned.");
      window.location.href = url;
    } catch (e) {
      const errMsg = (e instanceof Error && e.message) ? e.message : "Submission failed. Try again or email us.";
      setErr(errMsg);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } finally {
      setSubmitting(false);
    }
  }

  /* ---------- UI ---------- */

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
      encType="multipart/form-data"
      aria-live="polite"
    >
      {/* Progress */}
      <div className="w-full bg-gray-200/70 h-2 rounded-full">
        <div
          className="h-2 rounded-full bg-green-900 transition-[width] duration-300 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
      <ol className="mt-3 grid grid-cols-1 sm:grid-cols-5 gap-2 text-xs">
        {["Service", "Contact", "AIRE", "Details", "Uploads"].map((t, i) => {
          const active = step >= i + 1;
          return (
            <li
              key={t}
              className={`flex items-center gap-2 rounded-lg border px-2.5 py-1.5 ${
                active
                  ? "border-green-300 bg-green-50 text-green-900"
                  : "border-gray-200 bg-white text-gray-600"
              }`}
            >
              <span
                className={`inline-flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-semibold ${
                  active ? "bg-green-800 text-white" : "bg-gray-300 text-gray-700"
                }`}
              >
                {i + 1}
              </span>
              <span className="truncate">{t}</span>
            </li>
          );
        })}
      </ol>

      {/* STEP 1: service */}
      {step === 1 && (
        <div className="bg-white border border-gray-200 rounded-xl p-4 space-y-3 shadow-sm">
          <SectionTitle>What do you need?</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <label
              className={`border rounded-lg p-3 cursor-pointer ${
                service === "prenotami" ? "bg-green-50 border-green-300" : ""
              }`}
            >
              <input
                type="radio"
                name="svc"
                className="mr-2"
                checked={service === "prenotami"}
                onChange={() => setService("prenotami")}
              />
              <span className="text-sm">
                <strong>Prenot@Mi booking</strong> (12+/adults)
              </span>
              <p className="text-xs text-gray-600 mt-1">
                We monitor & try to book. The Consulate controls availability.
              </p>
            </label>
            <label
              className={`border rounded-lg p-3 cursor-pointer ${
                service === "under12" ? "bg-green-50 border-green-300" : ""
              }`}
            >
              <input
                type="radio"
                name="svc"
                className="mr-2"
                checked={service === "under12"}
                onChange={() => setService("under12")}
              />
              <span className="text-sm">
                <strong>Under-12 postal</strong>
              </span>
              <p className="text-xs text-gray-600 mt-1">
                We prep your pack & review uploads. You post to the Consulate.
              </p>
            </label>
          </div>
          {err && <div className="text-red-600 text-sm">{err}</div>}
          <div className="flex justify-end">
            <button
              type="button"
              onClick={next}
              className="px-4 py-2 rounded bg-green-900 text-white"
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {/* STEP 2: contact */}
      {step === 2 && (
        <div className="bg-white border border-gray-200 rounded-xl p-4 space-y-3 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium">First name *</label>
              <input
                value={first}
                onChange={(e) => setFirst(e.target.value)}
                className="mt-1 block w-full rounded border px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Last name *</label>
              <input
                value={last}
                onChange={(e) => setLast(e.target.value)}
                className="mt-1 block w-full rounded border px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Email *</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full rounded border px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Phone *</label>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-1 block w-full rounded border px-3 py-2"
                placeholder="+44…"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium">Anything we should know?</label>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              rows={3}
              className="mt-1 block w-full rounded border px-3 py-2"
              placeholder="Travel dates, lost/stolen, special circumstances…"
            />
          </div>
          {err && <div className="text-red-600 text-sm">{err}</div>}
          <div className="flex justify-between">
            <button type="button" onClick={back} className="px-3 py-2 rounded border">
              Back
            </button>
            <button
              type="button"
              onClick={next}
              className="px-4 py-2 rounded bg-green-900 text-white"
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {/* STEP 3: AIRE */}
      {step === 3 && (
        <div className="bg-white border border-gray-200 rounded-xl p-4 space-y-3 shadow-sm">
          <SectionTitle>Are you AIRE-registered in the correct district? *</SectionTitle>
          <div className="flex flex-wrap gap-5">
            <label className="inline-flex items-center gap-2">
              <input
                type="radio"
                name="aire"
                checked={aire === "yes"}
                onChange={() => setAire("yes")}
              />
              <span>Yes</span>
            </label>
            <label className="inline-flex items-center gap-2">
              <input
                type="radio"
                name="aire"
                checked={aire === "no"}
                onChange={() => setAire("no")}
              />
              <span>No — open FAST.IT</span>
            </label>
            <label className="inline-flex items-center gap-2">
              <input
                type="radio"
                name="aire"
                checked={aire === "unsure"}
                onChange={() => setAire("unsure")}
              />
              <span>Unsure</span>
            </label>
          </div>
          {aire !== "yes" && (
            <div className="mt-2 text-xs">
              <button
                type="button"
                onClick={openFastIt}
                className="px-3 py-1.5 rounded bg-amber-500 text-white"
              >
                Open FAST.IT
              </button>
              <p className="mt-1 text-gray-600">
                If you’re stuck, email{" "}
                <a className="underline" href="mailto:resinaro@proton.me">
                  resinaro@proton.me
                </a>{" "}
                before paying.
              </p>
            </div>
          )}
          {err && <div className="text-red-600 text-sm">{err}</div>}
          <div className="flex justify-between">
            <button type="button" onClick={back} className="px-3 py-2 rounded border">
              Back
            </button>
            <button
              type="button"
              onClick={next}
              className="px-4 py-2 rounded bg-green-900 text-white"
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {/* STEP 4: service-specific details */}
      {step === 4 && (
        <div className="bg-white border border-gray-200 rounded-xl p-4 space-y-4 shadow-sm">
          {service === "prenotami" && (
            <div className="space-y-6">
              {/* Main applicant required triple */}
              <div>
                <SectionTitle>About you (required for booking)</SectionTitle>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-2">
                  <div>
                    <label className="block text-sm font-medium">Height (cm) *</label>
                    <input
                      value={heightCm}
                      onChange={(e) => setHeightCm(e.target.value)}
                      className="mt-1 block w-full rounded border px-3 py-2"
                      placeholder="e.g. 175"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Eye colour *</label>
                    <input
                      value={eyeColour}
                      onChange={(e) => setEyeColour(e.target.value)}
                      className="mt-1 block w-full rounded border px-3 py-2"
                      placeholder="e.g. Brown"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Marital status *</label>
                    <select
                      value={maritalStatus}
                      onChange={(e) =>
                        setMaritalStatus(
                          e.target.value as Marital
                        )
                      }
                      className="mt-1 block w-full rounded border px-3 py-2"
                    >
                      <option value="single">Single</option>
                      <option value="married">Married</option>
                      <option value="divorced">Divorced</option>
                      <option value="widowed">Widowed</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Extra 12+/adult applicants */}
              <div>
                <SectionTitle>Also booking for another 12+ / adult?</SectionTitle>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                  <div>
                    <label className="block text-sm font-medium">
                      How many additional people?
                    </label>
                    <input
                      type="number"
                      min={0}
                      value={extraCount}
                      onChange={(e) => setExtra(parseInt(e.target.value || "0", 10))}
                      className="mt-1 block w-full rounded border px-3 py-2"
                    />
                  </div>
                  <p className="text-xs text-gray-700 self-end">
                    Teens aged 12–17 need the same details. Add each person below.
                  </p>
                </div>

                {extraPeople.slice(0, extraCount).map((p, i) => (
                  <div
                    key={i}
                    className="mt-3 rounded-xl border p-3 bg-gray-50 space-y-3"
                  >
                    <p className="text-sm font-medium">Person {i + 1}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-sm font-medium">
                          Full name *
                        </label>
                        <input
                          value={p.name}
                          onChange={(e) =>
                            setExtraPeople((prev) =>
                              prev.map((x, idx) =>
                                idx === i ? { ...x, name: e.target.value } : x
                              )
                            )
                          }
                          className="mt-1 block w-full rounded border px-3 py-2"
                          placeholder="As on ID"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium">
                          DOB (dd/mm/yyyy) *
                        </label>
                        <input
                          value={p.dob}
                          onChange={(e) =>
                            setExtraPeople((prev) =>
                              prev.map((x, idx) =>
                                idx === i ? { ...x, dob: e.target.value } : x
                              )
                            )
                          }
                          className="mt-1 block w-full rounded border px-3 py-2"
                          placeholder="dd/mm/yyyy"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <div>
                        <label className="block text-sm font-medium">
                          Height (cm) *
                        </label>
                        <input
                          value={p.heightCm}
                          onChange={(e) =>
                            setExtraPeople((prev) =>
                              prev.map((x, idx) =>
                                idx === i ? { ...x, heightCm: e.target.value } : x
                              )
                            )
                          }
                          className="mt-1 block w-full rounded border px-3 py-2"
                          placeholder="e.g. 160"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium">
                          Eye colour *
                        </label>
                        <input
                          value={p.eyeColour}
                          onChange={(e) =>
                            setExtraPeople((prev) =>
                              prev.map((x, idx) =>
                                idx === i ? { ...x, eyeColour: e.target.value } : x
                              )
                            )
                          }
                          className="mt-1 block w-full rounded border px-3 py-2"
                          placeholder="e.g. Green"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium">
                          Marital status *
                        </label>
                        <select
                          value={p.maritalStatus}
                          onChange={(e) =>
                            setExtraPeople((prev) =>
                              prev.map((x, idx) =>
                                idx === i
                                  ? { ...x, maritalStatus: e.target.value as Marital }
                                  : x
                              )
                            )
                          }
                          className="mt-1 block w-full rounded border px-3 py-2"
                        >
                          <option value="single">Single</option>
                          <option value="married">Married</option>
                          <option value="divorced">Divorced</option>
                          <option value="widowed">Widowed</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Account choice */}
              <div className="space-y-3">
                <label className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={createAcc}
                    onChange={(e) => setCreateAcc(e.target.checked)}
                  />
                <span className="text-sm">
                  Create & manage a Prenot@Mi account for me <strong>(+£20)</strong>
                </span>
                </label>

                {!createAcc && (
                  <>
                    <div>
                      <label className="block text-sm font-medium">
                        Prenot@Mi email *
                      </label>
                      <input
                        value={pEmail}
                        onChange={(e) => setPEmail(e.target.value)}
                        className="mt-1 block w-full rounded border px-3 py-2"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium">
                        Prenot@Mi password *
                      </label>
                      <div className="relative">
                        <input
                          type={showPass ? "text" : "password"}
                          value={pPass}
                          onChange={(e) => setPPass(e.target.value)}
                          className="mt-1 block w-full rounded border px-3 py-2 pr-12"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPass((s) => !s)}
                          className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600 text-xs underline"
                        >
                          {showPass ? "Hide" : "Show"}
                        </button>
                      </div>
                      <p className="text-xs text-gray-600 mt-1">
                        Used only to book. You can change it after.
                      </p>
                    </div>
                  </>
                )}

                {createAcc && (
                  <label className="inline-flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={acceptFee}
                      onChange={(e) => setAcceptFee(e.target.checked)}
                    />
                    <span className="text-sm">
                      I accept the £20 account creation fee.
                    </span>
                  </label>
                )}
              </div>
            </div>
          )}

          {service === "under12" && (
            <div className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium">
                    Children under 12 *
                  </label>
                  <input
                    type="number"
                    min={1}
                    value={kids}
                    onChange={(e) =>
                      setKidsCount(parseInt(e.target.value || "1", 10))
                    }
                    className="mt-1 block w-full rounded border px-3 py-2"
                  />
                </div>
                <p className="text-xs text-gray-700 self-end">
                  Postal only. Do not book travel until passport arrives.
                </p>
              </div>

              {kidsData.slice(0, kids).map((c, i) => (
                <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium">
                      Child {i + 1} full name *
                    </label>
                    <input
                      value={c.name}
                      onChange={(e) =>
                        setKidsData((prev) =>
                          prev.map((x, idx) =>
                            idx === i ? { ...x, name: e.target.value } : x
                          )
                        )
                      }
                      className="mt-1 block w-full rounded border px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">
                      Child {i + 1} DOB (dd/mm/yyyy) *
                    </label>
                    <input
                      value={c.dob}
                      onChange={(e) =>
                        setKidsData((prev) =>
                          prev.map((x, idx) =>
                            idx === i ? { ...x, dob: e.target.value } : x
                          )
                        )
                      }
                      className="mt-1 block w-full rounded border px-3 py-2"
                      placeholder="dd/mm/yyyy"
                    />
                  </div>
                </div>
              ))}

              <ul className="text-xs text-gray-700 list-disc list-inside">
                <li>
                  Parents’ IDs must be passport/ID card (no driving licences).
                </li>
                <li>
                  2 photos ≤6 months; one countersigned with authentication form.
                </li>
                <li>Include Special Delivery return envelope (≤500g).</li>
                <li>
                  First passport + birth registration cannot be sent together
                  (since 28 May 2025).
                </li>
              </ul>
            </div>
          )}

          {err && <div className="text-red-600 text-sm">{err}</div>}
          <div className="flex justify-between">
            <button type="button" onClick={back} className="px-3 py-2 rounded border">
              Back
            </button>
            <button
              type="button"
              onClick={next}
              className="px-4 py-2 rounded bg-green-900 text-white"
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {/* STEP 5: uploads (includes U12 mini-steps) */}
      {step === 5 && (
        <div className="bg-white border border-gray-200 rounded-xl p-4 space-y-4 shadow-sm">
          {/* Always show proof + email-later */}
          <div className="bg-gray-50 border rounded-lg p-3">
            <label className="block text-sm font-medium">
              Proof of UK address (≤3 months) — PDF/JPG/PNG, ≤{MAX_MB}MB
            </label>
            <input
              ref={proofRef}
              type="file"
              accept=".pdf,image/png,image/jpeg"
              className="mt-2 block w-full"
              onChange={(e) => pickOne(e, setProof, "Proof of address")}
              disabled={emailDocsLater}
            />
            <label className="inline-flex items-center gap-2 mt-2">
              <input
                type="checkbox"
                checked={emailDocsLater}
                onChange={(e) => setEmailDocsLater(e.target.checked)}
              />
              <span className="text-xs text-gray-700">
                I’ll email documents to{" "}
                <a className="underline" href="mailto:resinaro@proton.me">
                  resinaro@proton.me
                </a>{" "}
                instead
              </span>
            </label>
          </div>

          {/* Under-12 uploads split into calm chunks */}
          {service === "under12" && !emailDocsLater && (
            <div className="space-y-4">
              {/* mini progress + stepper */}
              <div>
                <div className="w-full bg-gray-200/70 h-2 rounded-full">
                  <div
                    className="h-2 rounded-full bg-green-900 transition-[width] duration-300 ease-out"
                    style={{ width: `${u12Pct}%` }}
                  />
                </div>
                <ol className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                  {["Identity & consent", "Photos", "Postage & extras"].map(
                    (t, i) => {
                      const active = u12UploadStep >= ((i + 1) as 1 | 2 | 3);
                      return (
                        <li
                          key={t}
                          className={`flex items-center gap-2 rounded-lg border px-2.5 py-1.5 ${
                            active
                              ? "border-green-300 bg-green-50 text-green-900"
                              : "border-gray-200 bg-white text-gray-600"
                          }`}
                        >
                          <span
                            className={`inline-flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-semibold ${
                              active
                                ? "bg-green-800 text-white"
                                : "bg-gray-300 text-gray-700"
                            }`}
                          >
                            {i + 1}
                          </span>
                          <span className="truncate">{t}</span>
                        </li>
                      );
                    }
                  )}
                </ol>
              </div>

              {/* MINI STEP 1: Identity & consent */}
              {u12UploadStep === 1 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <UploadCard
                    title="U12 application form"
                    onChange={(e) => pickOne(e, setU12AppForm, "Application form")}
                    accept=".pdf,image/png,image/jpeg"
                  />
                  <UploadCard
                    title="Both parents’ IDs (no driving licences)"
                    onChange={(e) => pickMany(e, setU12ParentIDs, "Parents' IDs")}
                    accept=".pdf,image/png,image/jpeg"
                    multiple
                  />
                  <UploadCard
                    title="Parents’ consent form"
                    onChange={(e) => pickOne(e, setU12Consent, "Parents' consent")}
                    accept=".pdf,image/png,image/jpeg"
                  />
                  <div className="rounded-lg border p-3 text-xs text-gray-700 md:col-span-2">
                    <p className="font-medium">Tips</p>
                    <ul className="list-disc list-inside">
                      <li>
                        IDs must be passport/ID card — <em>no UK driving licences</em>.
                      </li>
                      <li>Signatures on the consent must match the ID.</li>
                    </ul>
                  </div>
                </div>
              )}

              {/* MINI STEP 2: Photos */}
              {u12UploadStep === 2 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <UploadCard
                    title="Child photos (2)"
                    help="One must be countersigned per ICAO/authentication rules."
                    onChange={(e) => pickMany(e, setU12Photos, "Photos")}
                    accept=".jpg,.jpeg,.png"
                    multiple
                  />
                  <UploadCard
                    title="Photo authentication form"
                    onChange={(e) => pickOne(e, setU12PhotoAuth, "Photo authentication")}
                    accept=".pdf,image/png,image/jpeg"
                  />
                  <div className="rounded-lg border p-3 text-xs text-gray-700 md:col-span-2">
                    <p className="font-medium">Photo checklist</p>
                    <ul className="list-disc list-inside">
                      <li>Recent (≤6 months), plain background, correct size.</li>
                      <li>Countersignatory not a relative; known 2+ years in UK/EU.</li>
                    </ul>
                  </div>
                </div>
              )}

              {/* MINI STEP 3: Postage & extras */}
              {u12UploadStep === 3 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <UploadCard
                    title="Special Delivery (return) proof"
                    onChange={(e) =>
                      pickOne(e, setU12SpecDel, "Special Delivery proof")
                    }
                    accept=".pdf,image/png,image/jpeg"
                  />
                  <UploadCard
                    title="Previous Italian passport / other ID (optional)"
                    onChange={(e) => pickOne(e, setU12PrevID, "Previous ID")}
                    accept=".pdf,image/png,image/jpeg"
                  />
                  <UploadCard
                    title="Lost/Stolen form (if applicable)"
                    onChange={(e) => pickOne(e, setU12LostForm, "Lost/Stolen form")}
                    accept=".pdf,image/png,image/jpeg"
                  />
                  <UploadCard
                    title="Police report or Report My Loss (if applicable)"
                    onChange={(e) => pickOne(e, setU12Police, "Police/ReportMyLoss")}
                    accept=".pdf,image/png,image/jpeg"
                  />
                  <div className="rounded-lg border p-3 text-xs text-gray-700 md:col-span-2">
                    <p className="font-medium">Heads-up</p>
                    <ul className="list-disc list-inside">
                      <li>
                        Include a prepaid <strong>Special Delivery</strong> return
                        envelope (≤500g).
                      </li>
                      <li>
                        First passport + birth registration <strong>cannot</strong> be
                        sent together (rule from 28 May 2025).
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {/* mini step nav */}
              <div className="flex flex-col sm:flex-row gap-2 sm:justify-between">
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      setU12UploadStep((s) => (s === 1 ? 1 : ((s - 1) as 1 | 2 | 3)))
                    }
                    className="px-3 py-2 rounded border w-full sm:w-auto"
                  >
                    Prev section
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setU12UploadStep((s) => (s === 3 ? 3 : ((s + 1) as 1 | 2 | 3)))
                    }
                    className="px-3 py-2 rounded border w-full sm:w-auto"
                  >
                    Next section
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Consent + actions */}
          <div className="text-sm">
            <label className="inline-flex items-start gap-2">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
              />
              <span>
                I consent to Resinaro handling my data and, if provided, using my
                Prenot@Mi credentials solely to book.&nbsp;
                <a href="/privacy" className="underline">
                  Privacy Policy
                </a>
              </span>
            </label>
          </div>

          {err && <div className="text-red-600 text-sm">{err}</div>}

          <div className="flex flex-col sm:flex-row gap-2 sm:justify-between">
            <button
              type="button"
              onClick={back}
              className="px-3 py-2 rounded border w-full sm:w-auto"
            >
              Back
            </button>
            <button
              type="submit"
              disabled={submitting || !consent || aire !== "yes"}
              className={`px-4 py-2 rounded text-white w-full sm:w-auto ${
                submitting || !consent || aire !== "yes"
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-green-900 hover:bg-green-800"
              }`}
            >
              {submitting ? "Submitting…" : "Submit & Pay"}
            </button>
          </div>

          <p className="text-[11px] text-gray-600">
            We are not the Consulate. Appointment supply and passport decisions are
            theirs. If unsure, email{" "}
            <a className="underline" href="mailto:resinaro@proton.me">
              resinaro@proton.me
            </a>{" "}
            before paying.
          </p>
        </div>
      )}
    </form>
  );
}
