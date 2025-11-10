"use client";

import React, { useCallback, useMemo, useRef, useState } from "react";
import Link from "next/link";

const GAS_URL =
  "https://script.google.com/macros/s/AKfycbx_S1yGOb31CWMQVvi6qShVzgRA350Sj40aKnLVNl4ctdHxm77nzjYZIgnhVmgY1BQ/exec";
const GAS_TOKEN = "abc123!abidsdjaosda!!!hhda2314532";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB
const ALLOWED_TYPES = ["application/pdf", "image/jpeg", "image/jpg", "image/png"];

function Section({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-gray-200 bg-white/90 shadow-sm p-5 md:p-6">
      <div className="mb-4 text-center">
        <h3 className="text-lg md:text-xl font-semibold text-green-900">{title}</h3>
        {subtitle && <p className="text-xs sm:text-sm text-gray-700 mt-1">{subtitle}</p>}
      </div>
      <div className="grid gap-3 max-w-2xl mx-auto">{children}</div>
    </section>
  );
}

function Field({
  label,
  children,
  hint,
  required,
  htmlFor,
}: {
  label: string;
  children: React.ReactNode;
  hint?: string;
  required?: boolean;
  htmlFor?: string;
}) {
  return (
    <div className="text-left">
      <label htmlFor={htmlFor} className="block text-sm font-medium text-green-900 text-center md:text-left">
        {label} {required && <span className="text-red-600">*</span>}
      </label>
      <div className="mt-1">{children}</div>
      {hint && <p className="text-[11px] text-gray-600 mt-1 text-center md:text-left">{hint}</p>}
    </div>
  );
}

export default function CieForm() {
  const proofRef = useRef<HTMLInputElement | null>(null);

  // Basic details
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // Touched flags (to avoid premature green ticks)
  const [tFirst, setTFirst] = useState(false);
  const [tLast, setTLast] = useState(false);
  const [tAddr, setTAddr] = useState(false);
  const [tHt, setTHt] = useState(false);
  const [tEye, setTEye] = useState(false);
  const [tMar, setTMar] = useState(false);

  // Date of birth split fields (day, month, year)
  const [dobDay, setDobDay] = useState("");
  const [dobMonth, setDobMonth] = useState("");
  const [dobYear, setDobYear] = useState("");

  const dobDayRef = useRef<HTMLInputElement | null>(null);
  const dobMonthRef = useRef<HTMLInputElement | null>(null);
  const dobYearRef = useRef<HTMLInputElement | null>(null);

  // Requested fields
  const [fullAddress, setFullAddress] = useState("");
  const [height, setHeight] = useState("");
  const [eyeColour, setEyeColour] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [proof, setProof] = useState<File | null>(null);

  // Drag-and-drop state
  const [dragActive, setDragActive] = useState(false);

  // locale for simple EN/IT translations
  const [locale, setLocale] = useState<"en" | "it">("en");

  const [consent, setConsent] = useState(false);
  const [refundConsent, setRefundConsent] = useState(false);
  const [startNowConsent, setStartNowConsent] = useState(false); // required checkbox
  const [emailLater, setEmailLater] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitDisabled = submitting || !consent || !refundConsent || !startNowConsent;

  React.useEffect(() => {
    try {
      const docLang = document.documentElement.lang || "";
      if (docLang.startsWith("it")) setLocale("it");
      else if (docLang.startsWith("en")) setLocale("en");
      else if (window.location.pathname.startsWith("/it")) setLocale("it");
    } catch {
      // ignore
    }
  }, []);

  const t = useCallback((en: string, it: string) => (locale === "it" ? it : en), [locale]);

  const validateFile = useCallback(
    (f: File): string | null => {
      if (!ALLOWED_TYPES.includes(f.type))
        return t("Proof must be PDF, JPG or PNG.", "Il documento deve essere PDF, JPG o PNG.");
      if (f.size > MAX_FILE_SIZE)
        return t("Proof must be under 5 MB.", "Il documento deve essere sotto 5 MB.");
      return null;
    },
    [t]
  );

  function onProofChange(e: React.ChangeEvent<HTMLInputElement>) {
    setError(null);
    const f = e.target.files?.[0] ?? null;
    if (!f) {
      setProof(null);
      return;
    }
    const v = validateFile(f);
    if (v) {
      setError(v);
      if (proofRef.current) proofRef.current.value = "";
      return;
    }
    setProof(f);
  }

  // Drag-and-drop handlers
  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (emailLater) return;
    if (e.type === "dragenter" || e.type === "dragover") setDragActive(true);
    if (e.type === "dragleave") setDragActive(false);
  }, [emailLater]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (emailLater) return;
    const f = e.dataTransfer.files?.[0];
    if (!f) return;
    const v = validateFile(f);
    if (v) {
      setError(v);
      return;
    }
    setProof(f);
  }, [emailLater, validateFile]);

  // Auto-advance between DOB inputs (and smart backspace)
  const onDobDayChange = (val: string) => {
    const clean = val.replace(/[^0-9]/g, "").slice(0, 2);
    setDobDay(clean);
    if (clean.length === 2) dobMonthRef.current?.focus();
  };
  const onDobMonthChange = (val: string) => {
    const clean = val.replace(/[^0-9]/g, "").slice(0, 2);
    setDobMonth(clean);
    if (clean.length === 2) dobYearRef.current?.focus();
  };
  const onDobYearChange = (val: string) => {
    const clean = val.replace(/[^0-9]/g, "").slice(0, 4);
    setDobYear(clean);
  };
  const onDobKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, which: "day" | "month" | "year") => {
    if (e.key !== "Backspace") return;
    const target = e.currentTarget;
    if (target.value.length > 0) return;
    if (which === "month") dobDayRef.current?.focus();
    if (which === "year") dobMonthRef.current?.focus();
  };

  async function fileToBase64(file: File) {
    const buf = await file.arrayBuffer();
    let s = "";
    const bytes = new Uint8Array(buf);
    const chunk = 0x8000;
    for (let i = 0; i < bytes.length; i += chunk) {
      s += String.fromCharCode(...Array.from(bytes.subarray(i, i + chunk)));
    }
    return btoa(s);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    // Validation
    if (!firstName.trim() || !lastName.trim())
      return setError(t("Please enter your name and surname.", "Per favore inserisci nome e cognome."));
    if (!dobDay.trim() || !dobMonth.trim() || !dobYear.trim()) {
      return setError(t("Please enter your date of birth (day, month, year).", "Per favore inserisci la data di nascita (giorno, mese, anno)."));
    }
    const dayNum = parseInt(dobDay, 10);
    const monthNum = parseInt(dobMonth, 10);
    const yearNum = parseInt(dobYear, 10);
    if (
      Number.isNaN(dayNum) ||
      Number.isNaN(monthNum) ||
      Number.isNaN(yearNum) ||
      dayNum < 1 ||
      dayNum > 31 ||
      monthNum < 1 ||
      monthNum > 12 ||
      dobYear.trim().length !== 4
    ) {
      return setError(t("Enter a valid date of birth in DD/MM/YYYY format.", "Inserisci una data di nascita valida in formato GG/MM/AAAA."));
    }
    const pad2 = (s: string) => s.padStart(2, "0");
    const combinedDob = `${dobYear.trim()}-${pad2(dobMonth.trim())}-${pad2(dobDay.trim())}`;
    if (!fullAddress.trim()) return setError(t("Please enter your full address.", "Per favore inserisci l'indirizzo completo."));
    if (!height.trim()) return setError(t("Please enter your height (cm or inches).", "Per favore inserisci la tua altezza (cm o pollici)."));
    if (!eyeColour.trim()) return setError(t("Please enter your eye colour.", "Per favore inserisci il colore degli occhi."));
    if (!maritalStatus.trim()) return setError(t("Please indicate your marital status.", "Per favore indica il tuo stato civile."));
    if (!proof && !emailLater)
      return setError(
        t(
          "Please upload your proof of address (PDF/JPG/PNG) or tick 'Email documents later'.",
          "Carica la prova di indirizzo (PDF/JPG/PNG) oppure seleziona 'Invierò i documenti via email più tardi'."
        )
      );
    if (!consent) return setError(t("Please consent to data processing to continue.", "Per favore acconsenti al trattamento dei dati per continuare."));
    if (!refundConsent) return setError(t("Please accept the refund policy.", "Per favore accetta la politica di rimborso."));
    if (!startNowConsent) return setError(t("Please confirm we can start immediately.", "Conferma che possiamo iniziare subito."));

    setSubmitting(true);
    try {
      const bookingId = crypto.randomUUID();
      const serviceKey = "id-card";

      const filesPayload: Array<{ filename: string; mimeType: string; data: string }> = [];
      if (proof) {
        filesPayload.push({
          filename: proof.name,
          mimeType: proof.type,
          data: await fileToBase64(proof),
        });
      }

      const dataPayload = {
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        dateOfBirth: combinedDob,
        fullAddress: fullAddress.trim(),
        height: height.trim(),
        eyeColour: eyeColour.trim(),
        maritalStatus: maritalStatus.trim(),
        emailDocumentsLater: emailLater ? "1" : "0",
        startNowConsent: startNowConsent ? "1" : "0",
        otpDisclaimer: "User informed we will need a one-time code (OTP) from email during booking.",
      };

      const r1 = await fetch(GAS_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          token: GAS_TOKEN,
          action: "submit",
          bookingId,
          service: serviceKey,
          name: `${firstName.trim()} ${lastName.trim()}`,
          email: "", // email optional for this form
          telephone: "",
          files: filesPayload,
          data: dataPayload,
        }),
      });
      type GasResponse = { ok?: boolean; error?: string } | undefined;
      let r1json: GasResponse = undefined;
      try {
        r1json = (await r1.json()) as GasResponse;
      } catch {}
      if (!r1.ok || !(r1json && r1json.ok)) {
        const msg = r1json && r1json.error ? r1json.error : "Could not save submission to Google.";
        throw new Error(msg);
      }

      // Direct Payment Link for CIE
      window.location.href = "https://buy.stripe.com/4gM28rfRQ3td8Qp1guaMU0k";
      return;
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      setError(msg || "Submission failed — please try again later.");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } finally {
      setSubmitting(false);
    }
  }

  // Helper: check mark when field has value (momentum)
  const Tick = ({ show }: { show: boolean }) =>
    show ? (
      <svg className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20 6L9 17l-5-5" />
      </svg>
    ) : null;

  // Mobile sticky affordance visible only when actionable
  const showMobileBar = useMemo(() => !submitDisabled, [submitDisabled]);

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 max-w-3xl mx-auto px-3 sm:px-4"
      aria-live="polite"
    >
      {/* Basic details */}
      <Section
        title={t("Basic details", "Dati anagrafici")}
        subtitle={t("Exactly as they appear on your documents.", "Esattamente come appaiono sui tuoi documenti.")}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <Field label={t("Name", "Nome")} required htmlFor="firstName">
            <div className="relative">
              <input
                id="firstName"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                  setTFirst(true);
                }}
                className="block w-full rounded-lg border border-gray-300 focus:border-green-700 focus:ring-2 focus:ring-green-200 px-3 py-2"
                placeholder={t("Mario", "Mario")}
                aria-invalid={tFirst && !firstName.trim()}
              />
              <Tick show={!!firstName.trim()} />
            </div>
          </Field>
          <Field label={t("Surname", "Cognome")} required htmlFor="lastName">
            <div className="relative">
              <input
                id="lastName"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                  setTLast(true);
                }}
                className="block w-full rounded-lg border border-gray-300 focus:border-green-700 focus:ring-2 focus:ring-green-200 px-3 py-2"
                placeholder={t("Rossi", "Rossi")}
                aria-invalid={tLast && !lastName.trim()}
              />
              <Tick show={!!lastName.trim()} />
            </div>
          </Field>
        </div>
      </Section>

      {/* Personal information */}
      <Section title={t("Personal information", "Informazioni personali")}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <Field
            label={t("Date of birth", "Data di nascita")}
            required
            hint={t("Type day, month, year (DD/MM/YYYY)", "Digita giorno, mese, anno (GG/MM/AAAA)")}
          >
            <div className="grid grid-cols-3 gap-2" role="group" aria-label={t("Date of birth", "Data di nascita")}>
              <div className="relative">
                <input
                  ref={dobDayRef}
                  type="text"
                  inputMode="numeric"
                  maxLength={2}
                  placeholder={t("DD", "GG")}
                  value={dobDay}
                  onChange={(e) => onDobDayChange(e.target.value)}
                  onKeyDown={(e) => onDobKeyDown(e, "day")}
                  className="block w-full rounded-lg border border-gray-300 focus:border-green-700 focus:ring-2 focus:ring-green-200 px-3 py-2 text-center"
                  aria-label={t("Day", "Giorno")}
                />
                <Tick show={dobDay.length === 2} />
              </div>
              <div className="relative">
                <input
                  ref={dobMonthRef}
                  type="text"
                  inputMode="numeric"
                  maxLength={2}
                  placeholder={t("MM", "MM")}
                  value={dobMonth}
                  onChange={(e) => onDobMonthChange(e.target.value)}
                  onKeyDown={(e) => onDobKeyDown(e, "month")}
                  className="block w-full rounded-lg border border-gray-300 focus:border-green-700 focus:ring-2 focus:ring-green-200 px-3 py-2 text-center"
                  aria-label={t("Month", "Mese")}
                />
                <Tick show={dobMonth.length === 2} />
              </div>
              <div className="relative">
                <input
                  ref={dobYearRef}
                  type="text"
                  inputMode="numeric"
                  maxLength={4}
                  placeholder={t("YYYY", "AAAA")}
                  value={dobYear}
                  onChange={(e) => onDobYearChange(e.target.value)}
                  onKeyDown={(e) => onDobKeyDown(e, "year")}
                  className="block w-full rounded-lg border border-gray-300 focus:border-green-700 focus:ring-2 focus:ring-green-200 px-3 py-2 text-center"
                  aria-label={t("Year", "Anno")}
                />
                <Tick show={dobYear.length === 4} />
              </div>
            </div>
          </Field>

          <Field
            label={t("Full address", "Indirizzo completo")}
            required
            hint={t("House number, street, city and postcode", "Numero civico, via, città e CAP")}
            htmlFor="fullAddress"
          >
            <div className="relative">
              <input
                id="fullAddress"
                value={fullAddress}
                onChange={(e) => {
                  setFullAddress(e.target.value);
                  setTAddr(true);
                }}
                className="block w-full rounded-lg border border-gray-300 focus:border-green-700 focus:ring-2 focus:ring-green-200 px-3 py-2"
                placeholder={t("e.g. 12 Baker St, London, NW1 6XE", "es. Via Roma 1, 00100 Roma")}
                aria-invalid={tAddr && !fullAddress.trim()}
              />
              <Tick show={!!fullAddress.trim()} />
            </div>
          </Field>

          <Field label={t("Height (cm or inches)", "Altezza (cm o pollici)")} required htmlFor="height">
            <div className="relative">
              <input
                id="height"
                value={height}
                onChange={(e) => {
                  setHeight(e.target.value);
                  setTHt(true);
                }}
                className="block w-full rounded-lg border border-gray-300 focus:border-green-700 focus:ring-2 focus:ring-green-200 px-3 py-2"
                placeholder={t("e.g. 175 cm or 5'9\"", "es. 175 cm o 5'9\"")}
                aria-invalid={tHt && !height.trim()}
              />
              <Tick show={!!height.trim()} />
            </div>
          </Field>

          <Field label={t("Eye colour", "Colore degli occhi")} required htmlFor="eyeColour">
            <div className="relative">
              <input
                id="eyeColour"
                value={eyeColour}
                onChange={(e) => {
                  setEyeColour(e.target.value);
                  setTEye(true);
                }}
                className="block w-full rounded-lg border border-gray-300 focus:border-green-700 focus:ring-2 focus:ring-green-200 px-3 py-2"
                placeholder={t("e.g. Brown", "es. Marroni")}
                aria-invalid={tEye && !eyeColour.trim()}
              />
              <Tick show={!!eyeColour.trim()} />
            </div>
          </Field>

          <Field
            label={t("Marital status", "Stato civile")}
            required
            hint={t("e.g. Single, Married", "es. Single, Sposato")}
            htmlFor="maritalStatus"
          >
            <div className="relative">
              <input
                id="maritalStatus"
                value={maritalStatus}
                onChange={(e) => {
                  setMaritalStatus(e.target.value);
                  setTMar(true);
                }}
                className="block w-full rounded-lg border border-gray-300 focus:border-green-700 focus:ring-2 focus:ring-green-200 px-3 py-2"
                placeholder={t("e.g. Single", "es. Single")}
                aria-invalid={tMar && !maritalStatus.trim()}
              />
              <Tick show={!!maritalStatus.trim()} />
            </div>
          </Field>
        </div>
      </Section>

      {/* Proof & consent */}
      <Section
        title={t("Proof & consent", "Documento e consenso")}
        subtitle={t(
          "Upload one proof of address. You can also email documents later: resinaro@proton.me",
          "Carica una prova di indirizzo. Puoi anche inviare i documenti più tardi via email: resinaro@proton.me"
        )}
      >
        <div className="rounded-lg border bg-gray-50 p-3">
          <Field
            label={t("Proof of address", "Prova di indirizzo")}
            required={!emailLater}
            hint={t(
              "Utility bill, old passport, old ID card or bank statement showing your address. PDF/JPG/PNG, up to 5 MB.",
              "Bolletta, vecchio passaporto, vecchia carta d'identità o estratto conto che mostri il tuo indirizzo. PDF/JPG/PNG, fino a 5 MB."
            )}
          >
            {/* Hidden input for click-to-upload */}
            <input
              id="proof-upload"
              ref={proofRef}
              type="file"
              accept=".pdf,image/png,image/jpeg"
              onChange={onProofChange}
              className="sr-only"
              disabled={emailLater}
              aria-disabled={emailLater}
            />

            {/* Drop zone (true drag & drop) */}
            <label
              htmlFor="proof-upload"
              onDragEnter={handleDrag}
              onDragOver={handleDrag}
              onDragLeave={handleDrag}
              onDrop={handleDrop}
              className={`block w-full rounded-lg border-2 border-dashed px-4 py-6 text-center cursor-pointer transition-colors ${
                emailLater
                  ? "opacity-50 cursor-not-allowed"
                  : dragActive
                  ? "border-green-700 bg-green-50/60"
                  : "hover:border-green-600"
              }`}
            >
              {!proof ? (
                <div className="flex flex-col items-center gap-1">
                  <span className="inline-flex items-center justify-center rounded-md border px-3 py-1 text-sm font-medium text-green-900 border-green-700/60 bg-green-50">
                    {t("Click to upload", "Clicca per caricare")}
                  </span>
                  <p className="text-xs text-gray-700">{t("PDF/JPG/PNG — up to 5 MB", "PDF/JPG/PNG — fino a 5 MB")}</p>
                  <p className="text-sm text-gray-600 mt-1">{t("Or drag and drop here", "Oppure trascina qui")}</p>
                </div>
              ) : (
                // File chip with removable "x"
                <div className="mx-auto max-w-md">
                  <div className="flex items-center justify-between bg-white border px-3 py-2 rounded-md">
                    <div className="truncate">
                      <strong className="text-sm">{proof.name}</strong>
                      <div className="text-xs text-gray-500">{Math.round(proof.size / 1024)} KB</div>
                    </div>
                    <button
                      type="button"
                      aria-label={t("Remove file", "Rimuovi file")}
                      onClick={() => {
                        setProof(null);
                        if (proofRef.current) proofRef.current.value = "";
                      }}
                      className="inline-flex items-center justify-center rounded-md w-6 h-6 text-red-600 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-200"
                    >
                      ×
                    </button>
                  </div>
                </div>
              )}
            </label>
          </Field>

          {/* Email later toggle */}
          <label className="inline-flex items-center gap-2 mt-2 text-sm">
            <input
              type="checkbox"
              className="mt-0.5 accent-green-700"
              checked={emailLater}
              onChange={(e) => {
                const v = e.target.checked;
                setEmailLater(v);
                if (v) {
                  setProof(null);
                  if (proofRef.current) proofRef.current.value = "";
                }
              }}
            />
            <span className="text-gray-800">
              {t("I'll email documents later", "Invierò i documenti via email più tardi")} —{" "}
              <a className="underline ml-1" href="mailto:resinaro@proton.me">
                resinaro@proton.me
              </a>
            </span>
          </label>
        </div>

        <div className="rounded-lg border p-4 md:p-5">
          <p className="text-sm text-gray-800 text-center md:text-left">
            {t(
              "Service fee: £50 for administrative assistance. Consulate/government fees are separate and paid to the authority. We are not the Consulate and do not give legal advice; no guarantees of availability or outcome.",
              "Costo del servizio: £50 per assistenza amministrativa. Le tasse consolari/governative sono separate e pagate all'autorità competente. Non siamo il Consolato e non forniamo consulenza legale; nessuna garanzia di esito o disponibilità."
            )}
          </p>

          {/* Trust surface */}
          <p className="mt-2 text-sm text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-md px-3 py-2 text-center md:text-left">
            {t("Money-back if we can’t help.", "Rimborso se non possiamo aiutarti.")}
          </p>

          {/* Consents — inline with better focus */}
          <label className="mt-3 inline-flex items-start gap-2 text-sm">
            <input
              type="checkbox"
              className="mt-0.5 accent-green-700 focus:outline-none focus:ring-2 focus:ring-green-200"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
            />
            <span className="text-gray-900">
              {t(
                "I consent to Resinaro storing and processing my documents strictly to deliver this service.",
                "Acconsento a Resinaro di conservare e trattare i miei documenti esclusivamente per fornire questo servizio."
              )}{" "}
              <Link href="/privacy" className="underline">
                {t("Privacy Policy", "Informativa sulla privacy")}
              </Link>
            </span>
          </label>

          <label className="mt-2 inline-flex items-start gap-2 text-sm">
            <input
              type="checkbox"
              className="mt-0.5 accent-green-700 focus:outline-none focus:ring-2 focus:ring-green-200"
              checked={refundConsent}
              onChange={(e) => setRefundConsent(e.target.checked)}
            />
            <span className="text-gray-900">
              {t("I accept the refund conditions.", "Accetto le condizioni di rimborso.")}{" "}
              <Link href="/refund-policy" className="underline">
                {t("Refund Policy", "Politica di rimborso")}
              </Link>
            </span>
          </label>

          <label className="mt-2 inline-flex items-start gap-2 text-sm">
            <input
              type="checkbox"
              className="mt-0.5 accent-green-700 focus:outline-none focus:ring-2 focus:ring-green-200"
              checked={startNowConsent}
              onChange={(e) => setStartNowConsent(e.target.checked)}
            />
            <span className="text-gray-900">
              {t(
                "I agree for Resinaro to start working on this immediately.",
                "Acconsento che Resinaro inizi subito a lavorare su questo servizio."
              )}
            </span>
          </label>
        </div>
      </Section>

      {/* Error */}
      {error && (
        <div className="text-center text-red-600 text-sm" role="alert" aria-live="assertive">
          {error}
        </div>
      )}

      {/* Actions row */}
      <div className="flex flex-col items-center gap-3">
        <p className="text-[11px] text-gray-600 text-center">
          {t("Questions first? Email", "Prima di procedere? Scrivi a")}{" "}
          <a className="underline" href="mailto:resinaro@proton.me">
            resinaro@proton.me
          </a>
          .
        </p>

        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={submitDisabled}
            className={`px-5 py-2.5 rounded-lg text-white transition ${
              submitDisabled ? "bg-gray-400 cursor-not-allowed" : "bg-green-900 hover:bg-green-800"
            }`}
          >
            {submitting
              ? t("Submitting…", "Invio…")
              : t("send info + pay only £50", "invia informazioni + paga solo £50")}
          </button>

          <div className="flex items-center gap-1 select-none" aria-hidden="true">
            <svg
              className="w-6 h-6 text-green-900 animate-pulse"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
            <span className="text-xs font-medium text-gray-700">{t("Click to pay", "Clicca per pagare")}</span>
          </div>
        </div>
      </div>

      {/* Trust badge */}
      <div className="flex flex-col items-center gap-2">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-50 px-3 py-1">
          <svg
            className="w-4 h-4 text-emerald-700"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 2l7 4v6c0 5-3.5 9.5-7 10-3.5-.5-7-5-7-10V6l7-4z" />
            <path d="M9.5 12.5a2.5 2.5 0 115 0v2h-5v-2z" fill="white" />
          </svg>
          <span className="text-[12px] font-medium text-emerald-900">
            {t("Fully secure + safe", "Completamente sicuro + affidabile")}
          </span>
          <span className="text-[11px] text-emerald-800/80">
            {t("Stripe encrypted checkout", "Pagamento criptato Stripe")}
          </span>
        </div>

        <span className="text-[11px] text-gray-600 text-center">
          {t("Cards, Apple Pay & Google Pay supported", "Carte, Apple Pay e Google Pay supportati")}
        </span>
      </div>

      <p className="text-[11px] text-gray-600 text-center">
        {t(
          "You’ll be redirected to payment after submitting. We’re an independent admin support service and not the Consulate.",
          "Sarai reindirizzato al pagamento dopo l'invio. Siamo un servizio di supporto amministrativo indipendente e non il Consolato."
        )}
      </p>

      {/* Mobile sticky pay bar (shows only when enabled) */}
      {showMobileBar && (
        <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur border-t border-gray-200 shadow-[0_-4px_16px_rgba(0,0,0,0.06)]">
          <div className="mx-auto max-w-3xl px-4 py-3 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-700" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2l7 4v6c0 5-3.5 9.5-7 10-3.5-.5-7-5-7-10V6l7-4z" />
              </svg>
              <span className="text-xs text-emerald-800">{t("Secure checkout", "Pagamento sicuro")}</span>
            </div>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg text-white bg-green-900 hover:bg-green-800 active:translate-y-[1px] transition"
            >
              {t("send info + pay only £50", "invia informazioni + paga solo £50")}
            </button>
          </div>
        </div>
      )}
    </form>
  );
}
