// src/components/PassportForm.tsx
"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { useLocaleFromPathname, p } from "@/lib/localePath";

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
type Locale = "en" | "it";

type PersonDetails = {
  name: string;
  dob: string;
  heightCm: string;
  eyeColour: string;
  maritalStatus: Marital;
};

type ExtraAccount = {
  email: string;
  password: string;
  show: boolean;
};

/* ---------- i18n ---------- */
function t(locale: Locale) {
  const en = {
    steps: ["Service", "Contact", "AIRE", "Details", "Uploads"],
    serviceQ: "What do you need?",
    prenotamiTitle: "Prenot@Mi booking",
    prenotamiAge: "(Age 12+/adults)",
    prenotamiNote: "We use Prenot@Mi to book. The Consulate controls availability.",
    under12Title: "Under-12 Passport Assistance",
    under12Note: "We assist with the process.",
    continue: "Continue",
    back: "Back",
    contact: {
      first: "First name *",
      last: "Last name *",
      email: "Email *",
      phone: "Phone *",
      noteLabel: "Anything we should know?",
      notePH: "Travel dates, lost/stolen, special circumstances…",
      err: "Add your name, email and phone.",
    },
    aireQ: "Are you AIRE-registered in the correct district? *",
    yes: "Yes",
    noOpenFast: "No — open FAST.IT",
    unsure: "Unsure",
    stuck: "If you’re stuck, email",
    beforePaying: "before paying.",
    openFast: "Open FAST.IT",
    aireErr: "You must be AIRE-registered. Tap FAST.IT for help, or email us.",
    details: {
      aboutYou: "About you (required for booking)",
      height: "Height (cm) *",
      heightPH: "e.g. 175",
      eyes: "Eye colour *",
      eyesPH: "e.g. Brown",
      marital: "Marital status *",
      mSingle: "Single",
      mMarried: "Married",
      mDivorced: "Divorced",
      mWidowed: "Widowed",
      mOther: "Other",
      alsoBooking: "Also booking for another age 12+ / adult?",
      howMany: "How many additional people?",
      teensNote: "Teens aged 12–17 need the same details. Add each person below.",
      person: "Person",
      fullName: "Full name *",
      fullNamePH: "As on ID",
      dob: "DOB (dd/mm/yyyy) *",
      dobPH: "dd/mm/yyyy",
      extraAccountsTitle: "Additional Prenot@Mi accounts required",
      extraAccountsHelp:
        "Each person needs their own Prenot@Mi account. You already provided your account above, so you need one additional account for each extra person.",
      accountEmail: "Prenot@Mi email *",
      accountPassword: "Prenot@Mi password *",
      show: "Show",
      hide: "Hide",
      mainAccCreate: "Create & manage a Prenot@Mi account for me",
      plus20: "(+£20)",
      mainAccEmail: "Prenot@Mi email *",
      mainAccPassword: "Prenot@Mi password *",
      usedOnlyToBook: "Used only to book. You can change it after.",
      acceptFee: "I accept the £20 account creation fee.",
      extraErrPrefix: "Extra person",
      extraErrSuffix: "fill name, DOB, height, eye colour, marital status.",
      mainTripleErr: "Add height (cm), eye colour and marital status.",
      accChoiceErr: "Add Prenot@Mi email + password, or tick ‘Create account (+£20)’.",
      accFeeErr: "Please accept the £20 account creation fee.",
      extraAccErrPrefix: "Extra account",
      extraAccErrSuffix: "needs email and password.",
    },
    u12: {
      children: "Children under 12 *",
      postalNote:
        "Postal only. Note: we suggest not booking travel until passport arrives.",
      childFullName: (i: number) => `Child ${i} full name *`,
      childDob: (i: number) => `Child ${i} DOB (dd/mm/yyyy) *`,
      bullets: [
        "Parents’ IDs must be passport/ID card (no driving licences).",
        "2 photos ≤6 months; one countersigned with authentication form.",
        "Include Special Delivery return envelope (≤500g).",
        "Note: First passport + birth registration cannot be sent together (since 28 May 2025).",
      ],
      childErr: (i: number) => `Child ${i}: name + DOB (dd/mm/yyyy).`,
    },
    uploads: {
      proof: `Proof of UK address (≤3 months) — PDF/JPG/PNG, ≤${MAX_MB}MB`,
      emailInstead: "I’ll email documents to",
      instead2: "instead",
    },
    mini: {
      identity: "Identity & consent",
      photos: "Photos",
      postage: "Postage & extras",
      tips: "Tips",
      tipsList: [
        "IDs must be passport/ID card — no UK driving licences.",
        "Signatures on the consent must match the ID.",
      ],
      photoChecklist: "Photo checklist",
      photoList: [
        "Recent (≤6 months), plain background, correct size.",
        "Countersignatory not a relative; known 2+ years in UK/EU.",
      ],
      headsUp: "Heads-up",
      headsUpList: [
        "Include a prepaid Special Delivery return envelope (≤500g).",
        "First passport + birth registration cannot be sent together (rule from 28 May 2025).",
      ],
      prev: "Prev section",
      next: "Next section",
      u12Fields: {
        appForm: "U12 application form",
        parentIDs: "Both parents’ IDs (no driving licences)",
        consentForm: "Parents’ consent form",
        photos: "Child photos (2)",
        photoHelp: "One must be countersigned per ICAO/authentication rules.",
        photoAuth: "Photo authentication form",
        specDel: "Special Delivery (return) proof",
        prevID: "Previous Italian passport / other ID (optional)",
        lostForm: "Lost/Stolen form (if applicable)",
        police: "Police report or Report My Loss (if applicable)",
      },
    },
    agreements: {
      title: "Agreements (required)",
      startNow:
        "I ask you to start work immediately. I understand I have a 14-day cooling-off period, but if I cancel after work has begun you may deduct a proportionate amount for work already completed; once the service is fully performed within 14 days, I will lose my right to cancel.",
      refund1: "I have read and agree to the",
      refund2:
        "Refund & Credit Policy. I understand Resinaro’s default remedy is account credit valid for 12 months, and cash refunds are only provided where legally required.",
      privacy1:
        "I consent to Resinaro handling my data and, if provided, using my Prenot@Mi credentials solely to book.",
      privacy2: "Privacy Policy",
      errStart: "Please confirm you want us to start now and understand the cooling-off terms.",
      errRefund: "Please confirm you agree to the Refund & Credit Policy.",
      errConsent: "Please agree to data handling.",
    },
    submit: {
      submit: "Submit & Pay",
      submitting: "Submitting…",
      foot:
        "We are not the Consulate. Appointment supply and passport decisions are theirs. If unsure, email",
      errFile: (label: string) => `${label}: PDF/JPG/PNG, ≤${MAX_MB}MB`,
      fail: "Submission failed. Try again or email us.",
      proofLabel: "Proof of address",
    },
  } as const;

  const it = {
    steps: ["Servizio", "Contatti", "AIRE", "Dettagli", "Allegati"],
    serviceQ: "Di cosa hai bisogno?",
    prenotamiTitle: "Prenot@Mi (prenotazione)",
    prenotamiAge: "(Età 12+ / adulti)",
    prenotamiNote: "Usiamo Prenot@Mi per prenotare. La disponibilità dipende dal Consolato.",
    under12Title: "Passaporto minori di 12 anni",
    under12Note: "Ti assistiamo nella procedura.",
    continue: "Continua",
    back: "Indietro",
    contact: {
      first: "Nome *",
      last: "Cognome *",
      email: "Email *",
      phone: "Telefono *",
      noteLabel: "C’è qualcosa che dovremmo sapere?",
      notePH: "Date di viaggio, smarrimento/furto, particolarità…",
      err: "Aggiungi nome, email e telefono.",
    },
    aireQ: "Sei iscritto AIRE nel distretto corretto? *",
    yes: "Sì",
    noOpenFast: "No — apri FAST.IT",
    unsure: "Non so",
    stuck: "Se hai difficoltà, scrivi a",
    beforePaying: "prima di pagare.",
    openFast: "Apri FAST.IT",
    aireErr: "Devi essere iscritto AIRE. Apri FAST.IT per aiuto oppure scrivici.",
    details: {
      aboutYou: "Dati obbligatori per la prenotazione",
      height: "Altezza (cm) *",
      heightPH: "es. 175",
      eyes: "Colore occhi *",
      eyesPH: "es. Marroni",
      marital: "Stato civile *",
      mSingle: "Celibe/Nubile",
      mMarried: "Sposato/a",
      mDivorced: "Divorziato/a",
      mWidowed: "Vedovo/a",
      mOther: "Altro",
      alsoBooking: "Prenoti anche per altre persone 12+ / adulti?",
      howMany: "Quante persone aggiuntive?",
      teensNote:
        "I ragazzi 12–17 richiedono gli stessi dati. Inseriscili qui sotto.",
      person: "Persona",
      fullName: "Nome e cognome *",
      fullNamePH: "Come sul documento",
      dob: "Data di nascita (gg/mm/aaaa) *",
      dobPH: "gg/mm/aaaa",
      extraAccountsTitle:
        "Account Prenot@Mi aggiuntivi richiesti",
      extraAccountsHelp:
        "Ogni persona ha bisogno del proprio account Prenot@Mi. Hai già fornito il tuo account sopra, quindi serve un account aggiuntivo per ogni persona extra.",
      accountEmail: "Email Prenot@Mi *",
      accountPassword: "Password Prenot@Mi *",
      show: "Mostra",
      hide: "Nascondi",
      mainAccCreate: "Create & manage a Prenot@Mi account for me",
      plus20: "(+£20)",
      mainAccEmail: "Email Prenot@Mi *",
      mainAccPassword: "Password Prenot@Mi *",
      usedOnlyToBook: "Usata solo per prenotare. Potrai cambiarla dopo.",
      acceptFee: "Accetto il costo di £20 per la creazione dell’account.",
      extraErrPrefix: "Persona aggiuntiva",
      extraErrSuffix:
        ": inserisci nome, data di nascita, altezza, colore occhi e stato civile.",
      mainTripleErr:
        "Inserisci altezza (cm), colore occhi e stato civile.",
      accChoiceErr:
        "Inserisci email + password Prenot@Mi, oppure spunta ‘Create account (+£20)’.",
      accFeeErr:
        "Accetta il costo di £20 per la creazione dell’account.",
      extraAccErrPrefix: "Account aggiuntivo",
      extraAccErrSuffix: ": inserisci email e password.",
    },
    u12: {
      children: "Minori di 12 anni *",
      postalNote:
        "Solo per posta. Consigliamo di non prenotare viaggi finché il passaporto non arriva.",
      childFullName: (i: number) => `Minore ${i} nome e cognome *`,
      childDob: (i: number) => `Minore ${i} data di nascita (gg/mm/aaaa) *`,
      bullets: [
        "Documenti genitori: passaporto/CIE (no patenti).",
        "2 foto ≤6 mesi; una controfirmata con modulo autenticazione.",
        "Busta di ritorno Special Delivery (≤500g).",
        "Nota: Primo passaporto + registrazione nascita non si inviano insieme (dal 28 maggio 2025).",
      ],
      childErr: (i: number) => `Minore ${i}: nome + data di nascita (gg/mm/aaaa).`,
    },
    uploads: {
      proof: `Prova di indirizzo UK (≤3 mesi) — PDF/JPG/PNG, ≤${MAX_MB}MB`,
      emailInstead: "Invierò i documenti a",
      instead2: "via email",
    },
    mini: {
      identity: "Identità & consenso",
      photos: "Foto",
      postage: "Spedizione & allegati",
      tips: "Suggerimenti",
      tipsList: [
        "Documenti: passaporto/CIE — niente patenti UK.",
        "Le firme nel consenso devono coincidere col documento.",
      ],
      photoChecklist: "Checklist foto",
      photoList: [
        "Recenti (≤6 mesi), sfondo uniforme, formato corretto.",
        "Firmatario non parente; conoscenza 2+ anni in UK/UE.",
      ],
      headsUp: "Attenzione",
      headsUpList: [
        "Inserisci busta prepagata Special Delivery (≤500g).",
        "Primo passaporto + registrazione nascita non insieme (regola dal 28/05/2025).",
      ],
      prev: "Sezione precedente",
      next: "Sezione successiva",
      u12Fields: {
        appForm: "Modulo domanda U12",
        parentIDs: "Documenti di entrambi i genitori (no patenti)",
        consentForm: "Modulo consenso genitori",
        photos: "Foto del minore (2)",
        photoHelp: "Una deve essere controfirmata secondo le regole ICAO.",
        photoAuth: "Modulo autenticazione foto",
        specDel: "Prova Special Delivery (ritorno)",
        prevID: "Precedente passaporto/ID italiano (opzionale)",
        lostForm: "Modulo smarrimento/furto (se applicabile)",
        police: "Rapporto di polizia / Report My Loss (se applicabile)",
      },
    },
    agreements: {
      title: "Consensi (obbligatori)",
      startNow:
        "Chiedo di iniziare subito il lavoro. Capisco il diritto di recesso di 14 giorni; se annullo dopo l’avvio potranno essere detratti costi proporzionati; se il servizio è completato entro 14 giorni perderò il diritto di recesso.",
      refund1: "Ho letto e accetto la",
      refund2:
        "Politica Rimborsi & Crediti. Capisco che il rimedio predefinito è un credito valido 12 mesi; i rimborsi in denaro sono forniti solo ove previsti dalla legge.",
      privacy1:
        "Acconsento al trattamento dei miei dati e, se forniti, all’uso delle credenziali Prenot@Mi esclusivamente per prenotare.",
      privacy2: "Privacy Policy",
      errStart:
        "Conferma che vuoi iniziare subito e di aver compreso i termini di recesso.",
      errRefund: "Conferma di accettare la Politica Rimborsi & Crediti.",
      errConsent: "Acconsenti al trattamento dei dati.",
    },
    submit: {
      submit: "Invia e paga",
      submitting: "Invio in corso…",
      foot:
        "Non siamo il Consolato. Disponibilità appuntamenti e decisioni sul passaporto dipendono da loro. In caso di dubbi, scrivi a",
      errFile: (label: string) => `${label}: PDF/JPG/PNG, ≤${MAX_MB}MB`,
      fail: "Invio non riuscito. Riprova o scrivici.",
      proofLabel: "Prova di indirizzo",
    },
  } as const;

  return locale === "it" ? it : en;
}

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

/** Robust UUID (v4) with fallbacks for older browsers */
function safeUUID(): string {
  try {
    if (typeof crypto !== "undefined") {
      // Some TS lib versions may not type randomUUID
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if (typeof (crypto as any).randomUUID === "function") return (crypto as any).randomUUID();
      if (typeof crypto.getRandomValues === "function") {
        const buf = new Uint8Array(16);
        crypto.getRandomValues(buf);
        buf[6] = (buf[6] & 0x0f) | 0x40; // version 4
        buf[8] = (buf[8] & 0x3f) | 0x80; // variant 10
        const h = Array.from(buf, (b) => b.toString(16).padStart(2, "0"));
        return `${h.slice(0, 4).join("")}-${h.slice(4, 6).join("")}-${h
          .slice(6, 8)
          .join("")}-${h.slice(8, 10).join("")}-${h.slice(10, 16).join("")}`;
      }
    }
  } catch {}
  return `rsr-${Date.now().toString(36)}-${Math.random()
    .toString(36)
    .slice(2, 10)}`;
}

/* ---------- Main component ---------- */

export default function PassportForm() {
  const locale = useLocaleFromPathname() as Locale;
  const tr = t(locale);

  /** Wizard state */
  const [step, setStep] = useState<1 | 2 | 3 | 4 | 5>(1); // 1 Service → 2 Contact → 3 AIRE → 4 Details → 5 Uploads
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

  /** Prenot@Mi — account choice (main applicant) */
  const [createAcc, setCreateAcc] = useState(false);
  const [acceptFee, setAcceptFee] = useState(false);
  const [pEmail, setPEmail] = useState("");
  const [pPass, setPPass] = useState("");
  const [showPass, setShowPass] = useState(false);

  /** Prenot@Mi — additional 12+/adult applicants (e.g., teens 12–17) */
  const [extraCount, setExtraCount] = useState(0);
  const [extraPeople, setExtraPeople] = useState<PersonDetails[]>([]);
  const [extraAccounts, setExtraAccounts] = useState<ExtraAccount[]>([]);

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

  /** Agreements / UX */
  const [startNowConsent, setStartNowConsent] = useState(false);
  const [refundPolicyAgree, setRefundPolicyAgree] = useState(false);
  const [consent, setConsent] = useState(false); // privacy
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
    // details per person
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
    // one Prenot@Mi account per additional person
    setExtraAccounts((prev) => {
      const a = [...prev];
      while (a.length < v) a.push({ email: "", password: "", show: false });
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
      setErr(t(locale).submit.errFile(label));
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
        setErr(t(locale).submit.errFile(label));
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
        return setErr(tr.contact.err);
      }
      return setStep(3);
    }

    if (step === 3) {
      if (aire !== "yes") {
        return setErr(tr.aireErr);
      }
      return setStep(4);
    }

    if (step === 4) {
      if (service === "prenotami") {
        // Main applicant requirements
        if (!heightCm.trim() || !eyeColour.trim() || !maritalStatus) {
          return setErr(tr.details.mainTripleErr);
        }
        // Extra people details
        for (let i = 0; i < extraCount; i++) {
          const p = extraPeople[i];
          if (
            !p?.name.trim() ||
            !p?.dob.trim() ||
            !p?.heightCm.trim() ||
            !p?.eyeColour.trim() ||
            !p?.maritalStatus
          ) {
            return setErr(
              `${tr.details.extraErrPrefix} ${i + 1}: ${tr.details.extraErrSuffix}`
            );
          }
        }
        // Main account choice
        if (!createAcc && (!pEmail.trim() || !pPass)) {
          return setErr(tr.details.accChoiceErr);
        }
        if (createAcc && !acceptFee) {
          return setErr(tr.details.accFeeErr);
        }
        // Require one extra account per additional person
        for (let i = 0; i < extraCount; i++) {
          const acc = extraAccounts[i];
          if (!acc?.email.trim() || !acc?.password) {
            return setErr(
              `${tr.details.extraAccErrPrefix} ${i + 1} ${tr.details.extraAccErrSuffix}`
            );
          }
        }
      } else if (service === "under12") {
        for (let i = 0; i < kids; i++) {
          if (!kidsData[i]?.name.trim() || !kidsData[i]?.dob.trim()) {
            return setErr(t(locale).u12.childErr(i + 1));
          }
        }
      }
      return setStep(5);
    }
  }

  function back() {
    setErr(null);
    setStep((s) => Math.max(1, s - 1) as 1 | 2 | 3 | 4 | 5);
  }

  /* ---------- Submit ---------- */

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);

    if (!startNowConsent) {
      return setErr(tr.agreements.errStart);
    }
    if (!refundPolicyAgree) {
      return setErr(tr.agreements.errRefund);
    }
    if (!consent) {
      return setErr(tr.agreements.errConsent);
    }

  const bookingId = safeUUID();
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
      startNowConsent: startNowConsent ? "1" : "0",
      refundPolicyAgree: refundPolicyAgree ? "1" : "0",
      privacyConsent: consent ? "1" : "0",
      policyVersion: "2025-10-18",
      locale,
    };

    if (service === "prenotami") {
      // Main applicant
      data.heightCm = heightCm.trim();
      data.eyeColour = eyeColour.trim();
      data.maritalStatus = maritalStatus;

      // Account (main)
      data.createPrenotami = createAcc ? "1" : "0";
      data.prenotamiEmail = pEmail.trim();
      if (!createAcc && pPass) {
        data.prenotamiPassword = pPass;
        data.prenotami_password = pPass; // legacy
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
      // Extra Prenot@Mi accounts
      extraAccounts.forEach((a, i) => {
        const n = i + 1;
        data[`extra_${n}_prenotami_email`] = a.email.trim();
        data[`extra_${n}_prenotami_password`] = a.password;
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
      if (service === "under12") {
        window.location.href = "https://buy.stripe.com/dRmdR9gVU3td9Ut6AOaMU0c";
        return;
      }
      // Special pricing links for multi-person Prenot@Mi assistance
      if (service === "prenotami") {
        const totalPeople = 1 + (extraCount || 0);
        if (totalPeople === 2) {
          // £70 total for 2 people
          window.location.href = "https://buy.stripe.com/7sYdR98pofbVc2B1guaMU0g";
          return;
        }
        if (totalPeople === 3) {
          // £105 total for 3 people
          window.location.href = "https://buy.stripe.com/4gMcN58poe7R4A9cZcaMU0f";
          return;
        }
      }
      const pay = await fetch("/api/services/book", { method: "POST", body: fd });
      if (!pay.ok) throw new Error(await pay.text().catch(() => "Checkout error."));
      const { url } = await pay.json();
      if (!url) throw new Error("No payment link returned.");
      window.location.href = url;
    } catch (e) {
      const errMsg =
        e instanceof Error && e.message ? e.message : t(locale).submit.fail;
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
        {tr.steps.map((tlabel, i) => {
          const active = step >= i + 1;
          return (
            <li
              key={tlabel}
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
              <span className="truncate">{tlabel}</span>
            </li>
          );
        })}
      </ol>

      {/* STEP 1: service */}
      {step === 1 && (
        <div className="bg-white border border-gray-200 rounded-xl p-4 space-y-3 shadow-sm">
          <SectionTitle>{tr.serviceQ}</SectionTitle>
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
                <strong>{tr.prenotamiTitle}</strong> {tr.prenotamiAge}
              </span>
              <p className="text-xs text-gray-600 mt-1">{tr.prenotamiNote}</p>
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
                <strong>{tr.under12Title}</strong>
              </span>
              <p className="text-xs text-gray-600 mt-1">{tr.under12Note}</p>
            </label>
          </div>
          {err && <div className="text-red-600 text-sm">{err}</div>}
          <div className="flex justify-end">
            <button
              type="button"
              onClick={next}
              className="px-4 py-2 rounded bg-green-900 text-white"
            >
              {tr.continue}
            </button>
          </div>
        </div>
      )}

      {/* STEP 2: contact */}
      {step === 2 && (
        <div className="bg-white border border-gray-200 rounded-xl p-4 space-y-3 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium">{tr.contact.first}</label>
              <input
                value={first}
                onChange={(e) => setFirst(e.target.value)}
                className="mt-1 block w-full rounded border px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">{tr.contact.last}</label>
              <input
                value={last}
                onChange={(e) => setLast(e.target.value)}
                className="mt-1 block w_full rounded border px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">{tr.contact.email}</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full rounded border px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">{tr.contact.phone}</label>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-1 block w-full rounded border px-3 py-2"
                placeholder="+44…"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium">{tr.contact.noteLabel}</label>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              rows={3}
              className="mt-1 block w-full rounded border px-3 py-2"
              placeholder={tr.contact.notePH}
            />
          </div>
          {err && <div className="text-red-600 text-sm">{err}</div>}
          <div className="flex justify-between">
            <button type="button" onClick={back} className="px-3 py-2 rounded border">
              {tr.back}
            </button>
            <button
              type="button"
              onClick={next}
              className="px-4 py-2 rounded bg-green-900 text-white"
            >
              {tr.continue}
            </button>
          </div>
        </div>
      )}

      {/* STEP 3: AIRE */}
      {step === 3 && (
        <div className="bg-white border border-gray-200 rounded-xl p-4 space-y-3 shadow-sm">
          <SectionTitle>{tr.aireQ}</SectionTitle>
          <div className="flex flex-wrap gap-5">
            <label className="inline-flex items-center gap-2">
              <input
                type="radio"
                name="aire"
                checked={aire === "yes"}
                onChange={() => setAire("yes")}
              />
              <span>{tr.yes}</span>
            </label>
            <label className="inline-flex items-center gap-2">
              <input
                type="radio"
                name="aire"
                checked={aire === "no"}
                onChange={() => setAire("no")}
              />
              <span>{tr.noOpenFast}</span>
            </label>
            <label className="inline-flex items-center gap-2">
              <input
                type="radio"
                name="aire"
                checked={aire === "unsure"}
                onChange={() => setAire("unsure")}
              />
              <span>{tr.unsure}</span>
            </label>
          </div>
          {aire !== "yes" && (
            <div className="mt-2 text-xs">
              <button
                type="button"
                onClick={openFastIt}
                className="px-3 py-1.5 rounded bg-amber-500 text-white"
              >
                {tr.openFast}
              </button>
              <p className="mt-1 text-gray-600">
                {tr.stuck}{" "}
                <a className="underline" href="mailto:resinaro@proton.me">
                  resinaro@proton.me
                </a>{" "}
                {tr.beforePaying}
              </p>
            </div>
          )}
          {err && <div className="text-red-600 text-sm">{err}</div>}
          <div className="flex justify-between">
            <button type="button" onClick={back} className="px-3 py-2 rounded border">
              {tr.back}
            </button>
            <button
              type="button"
              onClick={next}
              className="px-4 py-2 rounded bg-green-900 text-white"
            >
              {tr.continue}
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
                <SectionTitle>{tr.details.aboutYou}</SectionTitle>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-2">
                  <div>
                    <label className="block text-sm font-medium">{tr.details.height}</label>
                    <input
                      value={heightCm}
                      onChange={(e) => setHeightCm(e.target.value)}
                      className="mt-1 block w-full rounded border px-3 py-2"
                      placeholder={tr.details.heightPH}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">{tr.details.eyes}</label>
                    <input
                      value={eyeColour}
                      onChange={(e) => setEyeColour(e.target.value)}
                      className="mt-1 block w-full rounded border px-3 py-2"
                      placeholder={tr.details.eyesPH}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">{tr.details.marital}</label>
                    <select
                      value={maritalStatus}
                      onChange={(e) => setMaritalStatus(e.target.value as Marital)}
                      className="mt-1 block w-full rounded border px-3 py-2"
                    >
                      <option value="single">{tr.details.mSingle}</option>
                      <option value="married">{tr.details.mMarried}</option>
                      <option value="divorced">{tr.details.mDivorced}</option>
                      <option value="widowed">{tr.details.mWidowed}</option>
                      <option value="other">{tr.details.mOther}</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Main applicant Prenot@Mi account */}
              <div>
                <SectionTitle>{tr.details.mainAccCreate}</SectionTitle>
                <div className="grid grid-cols-1 gap-3 mt-2">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={createAcc}
                      onChange={(e) => setCreateAcc(e.target.checked)}
                    />
                    <span className="text-sm">
                      {tr.details.mainAccCreate} {tr.details.plus20}
                    </span>
                  </label>
                  
                  {createAcc ? (
                    <div className="space-y-3">
                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={acceptFee}
                          onChange={(e) => setAcceptFee(e.target.checked)}
                        />
                        <span className="text-sm">{tr.details.acceptFee}</span>
                      </label>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-sm font-medium">{tr.details.mainAccEmail}</label>
                        <input
                          value={pEmail}
                          onChange={(e) => setPEmail(e.target.value)}
                          className="mt-1 block w-full rounded border px-3 py-2"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium">{tr.details.mainAccPassword}</label>
                        <div className="relative">
                          <input
                            type={showPass ? "text" : "password"}
                            value={pPass}
                            onChange={(e) => setPPass(e.target.value)}
                            className="mt-1 block w-full rounded border px-3 py-2 pr-16"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPass(!showPass)}
                            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600 text-xs underline"
                          >
                            {showPass ? tr.details.hide : tr.details.show}
                          </button>
                        </div>
                        <p className="text-xs text-gray-600 mt-1">{tr.details.usedOnlyToBook}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Extra 12+/adult applicants */}
              <div>
                <SectionTitle>{tr.details.alsoBooking}</SectionTitle>
                <div className="mt-2">
                  <label className="block text-sm font-medium">{tr.details.howMany}</label>
                  <input
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    value={extraCount === 0 ? "" : extraCount}
                    onChange={(e) => {
                      const val = e.target.value.replace(/[^0-9]/g, "");
                      setExtra(val === "" ? 0 : parseInt(val, 10));
                    }}
                    placeholder="0"
                    className="mt-1 block w-full rounded border px-3 py-2"
                    autoComplete="off"
                  />
                </div>
                <p className="text-xs text-gray-700 mt-2">{tr.details.teensNote}</p>

                {/* Extra persons details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                  {extraPeople.slice(0, extraCount).map((ppl, i) => (
                    <div key={i} className="mt-3 rounded-xl border p-3 bg-gray-50 space-y-3">
                      <p className="text-sm font-medium">
                        {tr.details.person} {i + 1}
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-sm font-medium">{tr.details.fullName}</label>
                          <input
                            value={ppl.name}
                            onChange={(e) =>
                              setExtraPeople((prev) =>
                                prev.map((x, idx) => (idx === i ? { ...x, name: e.target.value } : x))
                              )
                            }
                            className="mt-1 block w-full rounded border px-3 py-2"
                            placeholder={tr.details.fullNamePH}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium">{tr.details.dob}</label>
                          <input
                            value={ppl.dob}
                            onChange={(e) =>
                              setExtraPeople((prev) =>
                                prev.map((x, idx) => (idx === i ? { ...x, dob: e.target.value } : x))
                              )
                            }
                            className="mt-1 block w-full rounded border px-3 py-2"
                            placeholder={tr.details.dobPH}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <div>
                          <label className="block text-sm font-medium">{tr.details.height}</label>
                          <input
                            value={ppl.heightCm}
                            onChange={(e) =>
                              setExtraPeople((prev) =>
                                prev.map((x, idx) => (idx === i ? { ...x, heightCm: e.target.value } : x))
                              )
                            }
                            className="mt-1 block w-full rounded border px-3 py-2"
                            placeholder="e.g. 160"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium">{tr.details.eyes}</label>
                          <input
                            value={ppl.eyeColour}
                            onChange={(e) =>
                              setExtraPeople((prev) =>
                                prev.map((x, idx) => (idx === i ? { ...x, eyeColour: e.target.value } : x))
                              )
                            }
                            className="mt-1 block w-full rounded border px-3 py-2"
                            placeholder="e.g. Green"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium">{tr.details.marital}</label>
                          <select
                            value={ppl.maritalStatus}
                            onChange={(e) =>
                              setExtraPeople((prev) =>
                                prev.map((x, idx) =>
                                  idx === i ? { ...x, maritalStatus: e.target.value as Marital } : x
                                )
                              )
                            }
                            className="mt-1 block w-full rounded border px-3 py-2"
                          >
                            <option value="single">{tr.details.mSingle}</option>
                            <option value="married">{tr.details.mMarried}</option>
                            <option value="divorced">{tr.details.mDivorced}</option>
                            <option value="widowed">{tr.details.mWidowed}</option>
                            <option value="other">{tr.details.mOther}</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Extra Prenot@Mi accounts required */}
                {extraCount > 0 && (
                  <div className="mt-4 rounded-xl border p-3 bg-emerald-50/60">
                    <p className="text-sm font-semibold text-emerald-900">
                      {tr.details.extraAccountsTitle}
                    </p>
                    <p className="text-xs text-gray-700 mt-1">{tr.details.extraAccountsHelp}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                      {extraAccounts.slice(0, extraCount).map((acc, i) => (
                        <div key={i} className="rounded-lg border bg-white p-3 space-y-2">
                          <p className="text-sm font-medium">
                            {tr.details.person} {i + 1} — Prenot@Mi
                          </p>
                          <div>
                            <label className="block text-sm font-medium">{tr.details.accountEmail}</label>
                            <input
                              value={acc.email}
                              onChange={(e) =>
                                setExtraAccounts((prev) =>
                                  prev.map((x, idx) => (idx === i ? { ...x, email: e.target.value } : x))
                                )
                              }
                              className="mt-1 block w-full rounded border px-3 py-2"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium">{tr.details.accountPassword}</label>
                            <div className="relative">
                              <input
                                type={acc.show ? "text" : "password"}
                                value={acc.password}
                                onChange={(e) =>
                                  setExtraAccounts((prev) =>
                                    prev.map((x, idx) => (idx === i ? { ...x, password: e.target.value } : x))
                                  )
                                }
                                className="mt-1 block w-full rounded border px-3 py-2 pr-16"
                              />
                              <button
                                type="button"
                                onClick={() =>
                                  setExtraAccounts((prev) =>
                                    prev.map((x, idx) => (idx === i ? { ...x, show: !x.show } : x))
                                  )
                                }
                                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600 text-xs underline"
                              >
                                {acc.show ? tr.details.hide : tr.details.show}
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {service === "under12" && (
            <div className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium">
                    {tr.u12.children}
                  </label>
                  <input
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    value={kids === 1 ? "" : kids}
                    onChange={(e) => {
                      const val = e.target.value.replace(/[^0-9]/g, "");
                      setKidsCount(val === "" ? 1 : parseInt(val, 10));
                    }}
                    placeholder="1"
                    className="mt-1 block w-full rounded border px-3 py-2"
                    autoComplete="off"
                  />
                </div>
                <p className="text-xs text-gray-700 self-end">
                  {tr.u12.postalNote}
                </p>
              </div>

              {kidsData.slice(0, kids).map((c, i) => (
                <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium">
                      {tr.u12.childFullName(i + 1)}
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
                      {tr.u12.childDob(i + 1)}
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
                      placeholder="gg/mm/aaaa"
                    />
                  </div>
                </div>
              ))}

              <ul className="text-xs text-gray-700 list-disc list-inside">
                {tr.u12.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          )}

          {err && <div className="text-red-600 text-sm">{err}</div>}
          <div className="flex justify-between">
            <button type="button" onClick={back} className="px-3 py-2 rounded border">
              {tr.back}
            </button>
            <button
              type="button"
              onClick={next}
              className="px-4 py-2 rounded bg-green-900 text-white"
            >
              {tr.continue}
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
              {tr.uploads.proof}
            </label>
            <input
              ref={proofRef}
              type="file"
              accept=".pdf,image/png,image/jpeg"
              className="mt-2 block w-full"
              onChange={(e) => pickOne(e, setProof, t(locale).submit.proofLabel)}
              disabled={emailDocsLater}
            />
            <label className="inline-flex items-center gap-2 mt-2">
              <input
                type="checkbox"
                checked={emailDocsLater}
                onChange={(e) => setEmailDocsLater(e.target.checked)}
              />
              <span className="text-xs text-gray-700">
                {tr.uploads.emailInstead}{" "}
                <a className="underline" href="mailto:resinaro@proton.me">
                  resinaro@proton.me
                </a>{" "}
                {tr.uploads.instead2}
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
                  {[tr.mini.identity, tr.mini.photos, tr.mini.postage].map((tlabel, i) => {
                    const active = u12UploadStep >= ((i + 1) as 1 | 2 | 3);
                    return (
                      <li
                        key={tlabel}
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
                        <span className="truncate">{tlabel}</span>
                      </li>
                    );
                  })}
                </ol>
              </div>

              {/* MINI STEP 1: Identity & consent */}
              {u12UploadStep === 1 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <UploadCard
                    title={tr.mini.u12Fields.appForm}
                    onChange={(e) => pickOne(e, setU12AppForm, "Application form")}
                    accept=".pdf,image/png,image/jpeg"
                  />
                  <UploadCard
                    title={tr.mini.u12Fields.parentIDs}
                    onChange={(e) => pickMany(e, setU12ParentIDs, "Parents' IDs")}
                    accept=".pdf,image/png,image/jpeg"
                    multiple
                  />
                  <UploadCard
                    title={tr.mini.u12Fields.consentForm}
                    onChange={(e) => pickOne(e, setU12Consent, "Parents' consent")}
                    accept=".pdf,image/png,image/jpeg"
                  />
                  <div className="rounded-lg border p-3 text-xs text-gray-700 md:col-span-2">
                    <p className="font-medium">{tr.mini.tips}</p>
                    <ul className="list-disc list-inside">
                      {tr.mini.tipsList.map((x, i) => (
                        <li key={i}>{x}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* MINI STEP 2: Photos */}
              {u12UploadStep === 2 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <UploadCard
                    title={tr.mini.u12Fields.photos}
                    help={tr.mini.u12Fields.photoHelp}
                    onChange={(e) => pickMany(e, setU12Photos, "Photos")}
                    accept=".jpg,.jpeg,.png"
                    multiple
                  />
                  <UploadCard
                    title={tr.mini.u12Fields.photoAuth}
                    onChange={(e) => pickOne(e, setU12PhotoAuth, "Photo authentication")}
                    accept=".pdf,image/png,image/jpeg"
                  />
                  <div className="rounded-lg border p-3 text-xs text-gray-700 md:col-span-2">
                    <p className="font-medium">{tr.mini.photoChecklist}</p>
                    <ul className="list-disc list-inside">
                      {tr.mini.photoList.map((x, i) => (
                        <li key={i}>{x}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* MINI STEP 3: Postage & extras */}
              {u12UploadStep === 3 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <UploadCard
                    title={tr.mini.u12Fields.specDel}
                    onChange={(e) => pickOne(e, setU12SpecDel, "Special Delivery proof")}
                    accept=".pdf,image/png,image/jpeg"
                  />
                  <UploadCard
                    title={tr.mini.u12Fields.prevID}
                    onChange={(e) => pickOne(e, setU12PrevID, "Previous ID")}
                    accept=".pdf,image/png,image/jpeg"
                  />
                  <UploadCard
                    title={tr.mini.u12Fields.lostForm}
                    onChange={(e) => pickOne(e, setU12LostForm, "Lost/Stolen form")}
                    accept=".pdf,image/png,image/jpeg"
                  />
                  <UploadCard
                    title={tr.mini.u12Fields.police}
                    onChange={(e) => pickOne(e, setU12Police, "Police/ReportMyLoss")}
                    accept=".pdf,image/png,image/jpeg"
                  />
                  <div className="rounded-lg border p-3 text-xs text-gray-700 md:col-span-2">
                    <p className="font-medium">{tr.mini.headsUp}</p>
                    <ul className="list-disc list-inside">
                      {tr.mini.headsUpList.map((x, i) => (
                        <li key={i}>{x}</li>
                      ))}
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
                    {tr.mini.prev}
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setU12UploadStep((s) => (s === 3 ? 3 : ((s + 1) as 1 | 2 | 3)))
                    }
                    className="px-3 py-2 rounded border w-full sm:w-auto"
                  >
                    {tr.mini.next}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Agreements (required) */}
          <div className="rounded-xl border border-green-200 bg-green-50 p-3">
            <p className="text-sm font-semibold text-green-900">{tr.agreements.title}</p>
            <div className="mt-2 space-y-3 text-sm text-gray-800">
              <label className="flex items-start gap-2">
                <input
                  type="checkbox"
                  checked={startNowConsent}
                  onChange={(e) => setStartNowConsent(e.target.checked)}
                  className="mt-1"
                />
                <span>{tr.agreements.startNow}</span>
              </label>

              <label className="flex items-start gap-2">
                <input
                  type="checkbox"
                  checked={refundPolicyAgree}
                  onChange={(e) => setRefundPolicyAgree(e.target.checked)}
                  className="mt-1"
                />
                <span>
                  {tr.agreements.refund1}{" "}
                  <Link href={p(locale, "/refund-policy")} className="underline text-green-900">
                    {locale === "it" ? "Politica Rimborsi & Crediti" : "Refund & Credit Policy"}
                  </Link>
                  . {tr.agreements.refund2}
                </span>
              </label>

              <label className="flex items-start gap-2">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-1"
                />
                <span>
                  {tr.agreements.privacy1}{" "}
                  <Link href={p(locale, "/privacy-policy")} className="underline text-green-900">
                    {tr.agreements.privacy2}
                  </Link>
                </span>
              </label>
            </div>
          </div>

          {err && <div className="text-red-600 text-sm">{err}</div>}

          <div className="flex flex-col sm:flex-row gap-2 sm:justify-between">
            <button
              type="button"
              onClick={back}
              className="px-3 py-2 rounded border w-full sm:w-auto"
            >
              {tr.back}
            </button>
            <button
              type="submit"
              disabled={
                submitting || aire !== "yes" || !startNowConsent || !refundPolicyAgree || !consent
              }
              className={`px-4 py-2 rounded text-white w-full sm:w-auto ${
                submitting || aire !== "yes" || !startNowConsent || !refundPolicyAgree || !consent
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-green-900 hover:bg-green-800"
              }`}
            >
              {submitting ? tr.submit.submitting : tr.submit.submit}
            </button>
          </div>

          <p className="text-[11px] text-gray-600">
            {tr.submit.foot}{" "}
            <a className="underline" href="mailto:resinaro@proton.me">
              resinaro@proton.me
            </a>
            .
          </p>
        </div>
      )}
    </form>
  );
}
