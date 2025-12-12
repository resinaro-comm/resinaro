// src/components/PassportOnboardingForm.tsx
"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";

type Locale = "en" | "it";

interface Props {
  locale: Locale;
  bookingId?: string;
  paymentIntentId?: string;
}

const FORMS_API_BASE =
  process.env.NEXT_PUBLIC_FORMS_API_BASE ||
  "https://y1se62wura.execute-api.eu-west-2.amazonaws.com";

// --------- Per-person types ---------
type PersonType = "self" | "child_12_17" | "child_u12" | "adult_other";

interface PersonState {
  type: PersonType | "";
  fullName: string;
  dob: string;
  placeOfBirth: string;
  eyeColour: string;
  heightCm: string;
  maritalStatus: "" | "single" | "married" | "divorced";
  docFile: File | null;

  parentSameAsMain: boolean;
  parentName: string;
  parentEmail: string;
  parentPhone: string;
}

// Helper to clamp qty from URL to 1–3
function clampQty(raw: string | null): number {
  const n = Number(raw ?? "1");
  if (!Number.isFinite(n) || n < 1) return 1;
  if (n > 3) return 3;
  return Math.round(n);
}

// Helper: File -> base64 data URL (for JSON payload)
function fileToDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export default function PassportOnboardingForm({
  locale,
  bookingId,
  paymentIntentId,
}: Props) {
  const it = locale === "it";
  const searchParams = useSearchParams();

  // Qty is read from URL once on mount: ?qty=1|2|3
  const [qty] = useState<number>(() =>
    clampQty(searchParams?.get("qty") ?? null),
  );

  // Main contact fields (top block)
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  // People included in the booking
  const [people, setPeople] = useState<PersonState[]>(() =>
    Array.from({ length: qty }, () => ({
      type: "",
      fullName: "",
      dob: "",
      placeOfBirth: "",
      eyeColour: "",
      heightCm: "",
      maritalStatus: "",
      docFile: null,
      parentSameAsMain: true,
      parentName: "",
      parentEmail: "",
      parentPhone: "",
    })),
  );

  function updatePerson(index: number, patch: Partial<PersonState>) {
    setPeople((prev) =>
      prev.map((p, i) => (i === index ? { ...p, ...patch } : p)),
    );
  }

  function toggleParentSameAsMain(index: number, checked: boolean) {
    setPeople((prev) =>
      prev.map((p, i) => {
        if (i !== index) return p;
        if (!checked) {
          return { ...p, parentSameAsMain: false };
        }
        return {
          ...p,
          parentSameAsMain: true,
          parentName: fullName.trim(),
          parentEmail: email.trim(),
          parentPhone: phone.trim(),
        };
      }),
    );
  }

  // --------- Copy / i18n ---------
  const title = it
    ? "Scheda rapida per iniziare"
    : "Quick onboarding so we can start";
  const helper = it
    ? "Più dettagli ci dai qui, più velocemente possiamo cercare un appuntamento adatto."
    : "The more context you give us here, the faster we can look for a good appointment.";

  const nameLabel = it
    ? "Nome e cognome (contatto principale) *"
    : "Full name (main contact) *";
  const emailLabel = it
    ? "Email (contatto principale) *"
    : "Email (main contact) *";
  const phoneLabel = it
    ? "Telefono / WhatsApp (con prefisso) *"
    : "Phone / WhatsApp (incl. country code) *";

  const submitLabel = submitting
    ? (it ? "Invio in corso…" : "Sending…")
    : it
    ? "Invia scheda"
    : "Send details";

  const peopleTitle = it
    ? "Persone incluse in questa prenotazione"
    : "People included in this booking";
  const peopleHelper = it
    ? `Hai pagato per ${qty} appuntamento${
        qty > 1 ? "i" : ""
      } passaporto. Compila una scheda per ogni persona.`
    : `You paid for ${qty} passport appointment${
        qty > 1 ? "s" : ""
      }. Please fill in one card per person.`;

  const personHeading = (index: number) =>
    it ? `Persona ${index + 1}` : `Person ${index + 1}`;

  const whoLabel = it
    ? "Per chi è questo appuntamento?"
    : "Who is this appointment for?";

  const whoOptions: { value: PersonType; label: string }[] = it
    ? [
        { value: "self", label: "Per me (sono io la persona)" },
        { value: "child_12_17", label: "Per mio/a figlio/a (12–17 anni)" },
        { value: "child_u12", label: "Per mio/a figlio/a (sotto i 12 anni)" },
        { value: "adult_other", label: "Per un’altra persona adulta" },
      ]
    : [
        { value: "self", label: "For me (I am the person)" },
        { value: "child_12_17", label: "For my child (12–17 years old)" },
        { value: "child_u12", label: "For my child (under 12)" },
        { value: "adult_other", label: "For another adult" },
      ];

  const fieldLabels = {
    personName: it ? "Nome e cognome della persona *" : "Person’s full name *",
    dob: it ? "Data di nascita *" : "Date of birth *",
    dobPlaceholder: it ? "gg/mm/aaaa" : "dd/mm/yyyy",
    pob: it ? "Luogo di nascita *" : "Place of birth *",
    eye: it ? "Colore degli occhi *" : "Eye colour *",
    height: it ? "Altezza (in cm) *" : "Height (in cm) *",
    heightPlaceholder: it ? "es. 175" : "e.g. 175",
    marital: it ? "Stato civile *" : "Marital status *",
    maritalSingle: it ? "Celibe/nubile" : "Single",
    maritalMarried: it ? "Sposato/a" : "Married",
    maritalDivorced: it ? "Divorziato/a" : "Divorced",
    docLabel: it
      ? "Foto del passaporto scaduto o di un documento attuale (opzionale)"
      : "Photo of expired passport or current ID (optional)",
    docHelper: it
      ? "Un’immagine chiara aiuta a evitare errori nei dati. Puoi anche inviarla via email se preferisci."
      : "A clear image helps avoid mistakes in the details. You can also email it later if you prefer.",
    parentBlockTitle: it
      ? "Dati del genitore / tutore"
      : "Parent / guardian details",
    parentSameAsMain: it
      ? "Sono io il genitore/tutore e sono il contatto principale sopra."
      : "I am the parent/guardian and I’m the main contact above.",
    parentName: it
      ? "Nome e cognome del genitore/tutore *"
      : "Parent/guardian full name *",
    parentEmail: it ? "Email del genitore/tutore *" : "Parent/guardian email *",
    parentPhone: it
      ? "Telefono / WhatsApp del genitore/tutore *"
      : "Parent/guardian phone / WhatsApp *",
  };

  // --------- Submit handler ---------
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus(null);

    // Basic validation
    if (!fullName.trim() || !email.trim() || !phone.trim()) {
      setStatus(
        it
          ? "Compila tutti i campi obbligatori del contatto principale."
          : "Please fill in all required main contact fields.",
      );
      return;
    }

    // Very simple sanity check on the people cards:
    const incomplete = people.some((p) => {
      if (!p.type) return true;
      if (
        !p.fullName.trim() ||
        !p.dob ||
        !p.placeOfBirth.trim() ||
        !p.eyeColour.trim() ||
        !p.heightCm.trim()
      ) {
        return true;
      }
      if (
        (p.type === "self" || p.type === "adult_other") &&
        !p.maritalStatus
      ) {
        return true;
      }
      if (p.type === "child_12_17" || p.type === "child_u12") {
        const parentName =
          p.parentSameAsMain ? fullName.trim() : p.parentName.trim();
        const parentEmail =
          p.parentSameAsMain ? email.trim() : p.parentEmail.trim();
        const parentPhone =
          p.parentSameAsMain ? phone.trim() : p.parentPhone.trim();
        if (!parentName || !parentEmail || !parentPhone) return true;
      }
      return false;
    });

    if (incomplete) {
      setStatus(
        it
          ? "Controlla le schede delle persone: manca qualche dato obbligatorio."
          : "Please check each person card: some required details are missing.",
      );
      return;
    }

    if (!FORMS_API_BASE) {
      setStatus(
        it
          ? "Configurazione modulo non completa (manca FORMS_API_BASE)."
          : "Form configuration is missing (FORMS_API_BASE).",
      );
      return;
    }

    try {
      setSubmitting(true);

      // Build people payload, including base64-encoded document images
      const peoplePayload = await Promise.all(
        people.map(async (p) => {
          const parent =
            p.type === "child_12_17" || p.type === "child_u12"
              ? {
                  name: p.parentSameAsMain
                    ? fullName.trim()
                    : p.parentName.trim(),
                  email: p.parentSameAsMain
                    ? email.trim()
                    : p.parentEmail.trim(),
                  phone: p.parentSameAsMain
                    ? phone.trim()
                    : p.parentPhone.trim(),
                }
              : null;

          const docData =
            p.docFile && p.docFile.size > 0
              ? await fileToDataUrl(p.docFile)
              : null;

          return {
            type: p.type,
            fullName: p.fullName.trim(),
            dob: p.dob,
            placeOfBirth: p.placeOfBirth.trim(),
            eyeColour: p.eyeColour.trim(),
            heightCm: p.heightCm.trim(),
            maritalStatus:
              p.type === "self" || p.type === "adult_other"
                ? p.maritalStatus || null
                : null,
            parent,
            docFilename: p.docFile?.name ?? null,
            docMimeType: p.docFile?.type ?? null,
            docData, // base64 data URL or null
          };
        }),
      );

      const res = await fetch(`${FORMS_API_BASE}/forms/submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          site: "resinaro",
          formSlug: "passport_appointment_12plus_onboarding",
          email: email.trim(),
          name: fullName.trim(),
          phone: phone.trim(),
          sourceUrl:
            typeof window !== "undefined" ? window.location.href : undefined,
          payload: {
            bookingId: bookingId || null,
            paymentIntentId: paymentIntentId || null,
            notes: null,
            locale,
            qty,
            people: peoplePayload,
          },
        }),
      });

      const json = await res.json().catch((): Record<string, unknown> => ({}));

      if (!res.ok || !json.ok) {
        setStatus(
          it
            ? "Qualcosa è andato storto. Riprova tra poco o scrivici via email."
            : "Something went wrong. Please try again shortly or email us.",
        );
        return;
      }

      setStatus(
        it
          ? "✅ Scheda ricevuta. Ti risponderemo via email appena possibile."
          : "✅ We’ve received your details. We’ll follow up by email as soon as we can.",
      );
      setFullName("");
      setEmail("");
      setPhone("");
      setPeople((prev) =>
        prev.map((p) => ({
          ...p,
          type: "",
          fullName: "",
          dob: "",
          placeOfBirth: "",
          eyeColour: "",
          heightCm: "",
          maritalStatus: "",
          docFile: null,
          parentSameAsMain: true,
          parentName: "",
          parentEmail: "",
          parentPhone: "",
        })),
      );
    } catch (err) {
      console.error("Onboarding submit error", err);
      setStatus(
        it
          ? "Errore di rete. Controlla la connessione e riprova."
          : "Network error. Please check your connection and try again.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-3xl bg-[#FFFCF5] p-6 shadow-sm ring-1 ring-slate-200"
    >
      {/* Main contact */}
      <div>
        <h2 className="text-lg font-semibold text-emerald-950">{title}</h2>
        <p className="mt-1 text-sm text-slate-700">{helper}</p>
        {bookingId && (
          <p className="mt-2 text-xs text-slate-500">
            {it ? "Riferimento prenotazione: " : "Booking reference: "}
            <span className="font-mono text-slate-700">{bookingId}</span>
          </p>
        )}
        <p className="mt-1 text-[11px] text-slate-500">
          {it
            ? "Useremo questi dati per contattarti sui prossimi passi e sugli appuntamenti trovati."
            : "We’ll use these details to contact you about next steps and any appointments we find."}
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm text-slate-900">
          {nameLabel}
          <input
            className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </label>
        <label className="block text-sm text-slate-900">
          {emailLabel}
          <input
            type="email"
            className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </div>

      <label className="block text-sm text-slate-900">
        {phoneLabel}
        <input
          className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </label>

      {/* People cards */}
      <div className="space-y-3">
        <div>
          <h3 className="text-sm font-semibold text-emerald-950">
            {peopleTitle}
          </h3>
          <p className="mt-1 text-xs text-slate-600">{peopleHelper}</p>
        </div>

        <div className="space-y-4">
          {people.map((person, index) => {
            const isChild =
              person.type === "child_12_17" || person.type === "child_u12";
            const isAdult =
              person.type === "self" || person.type === "adult_other";

            return (
              <div
                key={index}
                className="space-y-3 rounded-2xl border border-slate-200 bg-white p-4"
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-emerald-950">
                      {personHeading(index)}
                    </p>
                    <p className="text-[11px] text-slate-500">
                      {it
                        ? "Compila questa scheda per la persona inclusa nell’appuntamento."
                        : "Fill this card for the person included in the appointment."}
                    </p>
                  </div>
                </div>

                {/* Who is this for */}
                <div className="mt-1 space-y-1 text-xs text-slate-900">
                  <p className="font-medium">{whoLabel}</p>
                  <div className="mt-1 grid gap-2 sm:grid-cols-2">
                    {whoOptions.map((opt) => (
                      <label
                        key={opt.value}
                        className="flex cursor-pointer items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-[11px] hover:border-emerald-500"
                      >
                        <input
                          type="radio"
                          className="h-3 w-3"
                          name={`person-${index}-type`}
                          value={opt.value}
                          checked={person.type === opt.value}
                          onChange={() =>
                            updatePerson(index, { type: opt.value })
                          }
                        />
                        <span>{opt.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Person details */}
                {person.type && (
                  <>
                    <div className="mt-3 grid gap-3 sm:grid-cols-2">
                      <label className="block text-xs text-slate-900">
                        {fieldLabels.personName}
                        <input
                          className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-xs focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
                          value={person.fullName}
                          onChange={(e) =>
                            updatePerson(index, {
                              fullName: e.target.value,
                            })
                          }
                        />
                      </label>
                      <label className="block text-xs text-slate-900">
                        {fieldLabels.dob}
                        <input
                          type="text"
                          placeholder={fieldLabels.dobPlaceholder}
                          className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-xs font-mono focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
                          value={person.dob}
                          onChange={(e) =>
                            updatePerson(index, { dob: e.target.value })
                          }
                        />
                      </label>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      <label className="block text-xs text-slate-900">
                        {fieldLabels.pob}
                        <input
                          className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-xs focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
                          value={person.placeOfBirth}
                          onChange={(e) =>
                            updatePerson(index, {
                              placeOfBirth: e.target.value,
                            })
                          }
                        />
                      </label>
                      <label className="block text-xs text-slate-900">
                        {fieldLabels.eye}
                        <input
                          className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-xs focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
                          value={person.eyeColour}
                          onChange={(e) =>
                            updatePerson(index, {
                              eyeColour: e.target.value,
                            })
                          }
                        />
                      </label>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      <label className="block text-xs text-slate-900">
                        {fieldLabels.height}
                        <input
                          type="text"
                          placeholder={fieldLabels.heightPlaceholder}
                          className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-xs font-mono focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
                          value={person.heightCm}
                          onChange={(e) =>
                            updatePerson(index, {
                              heightCm: e.target.value,
                            })
                          }
                        />
                      </label>

                      {isAdult && (
                        <label className="block text-xs text-slate-900">
                          {fieldLabels.marital}
                          <select
                            className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-xs focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
                            value={person.maritalStatus}
                            onChange={(e) =>
                              updatePerson(index, {
                                maritalStatus: e.target
                                  .value as PersonState["maritalStatus"],
                              })
                            }
                          >
                            <option value="">
                              {it ? "Seleziona…" : "Select…"}
                            </option>
                            <option value="single">
                              {fieldLabels.maritalSingle}
                            </option>
                            <option value="married">
                              {fieldLabels.maritalMarried}
                            </option>
                            <option value="divorced">
                              {fieldLabels.maritalDivorced}
                            </option>
                          </select>
                        </label>
                      )}
                    </div>

                    {/* Document upload */}
                    <div className="space-y-1">
                      <p className="block text-xs font-medium text-slate-900">
                        {fieldLabels.docLabel}
                      </p>
                      <label className="mt-1 flex cursor-pointer items-center justify-between gap-2 rounded-xl border border-dashed border-slate-300 bg-slate-50 px-3 py-2 text-[11px] text-slate-700 hover:border-emerald-500">
                        <div className="min-w-0">
                          <p className="font-semibold">
                            {person.docFile
                              ? person.docFile.name
                              : it
                              ? "Carica una foto o un PDF"
                              : "Upload a photo or PDF"}
                          </p>
                          <p className="mt-0.5 truncate text-[11px] text-slate-500">
                            {person.docFile
                              ? `${(person.docFile.size / 1024 / 1024).toFixed(
                                  2,
                                )} MB`
                              : it
                              ? "Formati accettati: JPG, PNG, PDF (max ~5MB)."
                              : "Accepted formats: JPG, PNG, PDF (max ~5MB)."}
                          </p>
                        </div>
                        <span className="shrink-0 rounded-lg bg-white px-3 py-1 text-[11px] font-semibold text-emerald-700 shadow-sm">
                          {person.docFile
                            ? it
                              ? "Cambia file"
                              : "Change file"
                            : it
                            ? "Scegli file"
                            : "Choose file"}
                        </span>
                        <input
                          type="file"
                          accept="image/*,.pdf"
                          className="sr-only"
                          onChange={(e) =>
                            updatePerson(index, {
                              docFile: e.target.files?.[0] ?? null,
                            })
                          }
                        />
                      </label>
                      <p className="text-[11px] text-slate-500">
                        {fieldLabels.docHelper}
                      </p>
                    </div>

                    {/* Parent / guardian block for children */}
                    {isChild && (
                      <div className="mt-3 space-y-2 rounded-xl border border-emerald-100 bg-emerald-50/70 p-3">
                        <p className="text-xs font-semibold text-emerald-900">
                          {fieldLabels.parentBlockTitle}
                        </p>

                        <label className="flex items-start gap-2 text-[11px] text-emerald-900">
                          <input
                            type="checkbox"
                            className="mt-0.5"
                            checked={person.parentSameAsMain}
                            onChange={(e) =>
                              toggleParentSameAsMain(index, e.target.checked)
                            }
                          />
                          <span>{fieldLabels.parentSameAsMain}</span>
                        </label>

                        {!person.parentSameAsMain && (
                          <div className="mt-1 grid gap-2 sm:grid-cols-3">
                            <label className="block text-[11px] text-emerald-900">
                              {fieldLabels.parentName}
                              <input
                                className="mt-1 w-full rounded-xl border border-emerald-200 bg-white px-3 py-2 text-[11px] focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                                value={person.parentName}
                                onChange={(e) =>
                                  updatePerson(index, {
                                    parentName: e.target.value,
                                  })
                                }
                              />
                            </label>
                            <label className="block text-[11px] text-emerald-900">
                              {fieldLabels.parentEmail}
                              <input
                                type="email"
                                className="mt-1 w-full rounded-xl border border-emerald-200 bg-white px-3 py-2 text-[11px] focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                                value={person.parentEmail}
                                onChange={(e) =>
                                  updatePerson(index, {
                                    parentEmail: e.target.value,
                                  })
                                }
                              />
                            </label>
                            <label className="block text-[11px] text-emerald-900">
                              {fieldLabels.parentPhone}
                              <input
                                className="mt-1 w-full rounded-xl border border-emerald-200 bg-white px-3 py-2 text-[11px] focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                                value={person.parentPhone}
                                onChange={(e) =>
                                  updatePerson(index, {
                                    parentPhone: e.target.value,
                                  })
                                }
                              />
                            </label>
                          </div>
                        )}
                      </div>
                    )}
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Submit + status */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={submitting}
          className={`inline-flex items-center justify-center rounded-xl px-5 py-2 text-sm font-semibold ${
            submitting
              ? "cursor-not-allowed border border-slate-300 bg-slate-100 text-slate-500"
              : "border border-emerald-700 bg-emerald-700 text-emerald-50 shadow-sm shadow-emerald-700/40 hover:bg-emerald-800"
          }`}
        >
          {submitLabel}
        </button>
        <p className="text-[11px] text-slate-500">
          {it
            ? "Se hai dimenticato qualcosa, puoi sempre rispondere alla nostra email."
            : "If you forget something, you can always reply to our email later."}
        </p>
      </div>

      {status && (
        <div
          className={`mt-2 rounded-xl px-4 py-3 text-xs ${
            status.startsWith("✅")
              ? "border border-emerald-200 bg-emerald-50 text-emerald-800"
              : "border border-amber-200 bg-amber-50 text-amber-800"
          }`}
        >
          {status}
        </div>
      )}
    </form>
  );
}
