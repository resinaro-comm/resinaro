"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { useLocale } from "next-intl";

import PassportForm from "@/components/PassportForm";
import CieForm from "@/components/CieForm";
import AireForm from "@/components/AireForm";
import NinForm from "@/components/NinForm";
import HousingForm from "@/components/HousingForm";
import TranslationForm from "@/components/TranslationForm";
import BenefitsForm from "@/components/BenefitsForm";
import VisaForm from "@/components/VisaForm";

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
  | "visa"
  | "other";

const PAY_ELIGIBLE = new Set<ServiceKey>([
  "passport",
  "cie",
  "aire",
  "nin",
  "housing",
  "translation",
  "benefits",
  "visa",
]);

/* -------------------- Localized strings -------------------- */
function useCopy() {
  const locale = useLocale() as "en" | "it";
  const isIt = locale === "it";

  const contactH1 = isIt
    ? "Parla con il team Resinaro"
    : "Talk to the Resinaro team";

  const contactSub = isIt
    ? "Siamo italiani nel Regno Unito anche noi. Raccontaci la situazione e ti aiutiamo a capire il passo giusto — senza giudizi."
    : "We’re Italians in the UK too. Tell us what’s going on and we’ll help you figure out the right next step — no judgement.";

  const tri1H = isIt ? "Persone vere" : "Real people";
  const tri1P = isIt
    ? "Niente chatbot che ti rimbalzano tra link. Un team che conosce davvero consolati e burocrazia UK."
    : "No endless bots or link mazes. A small team that actually knows consulates and UK paperwork.";

  const tri2H = isIt ? "Chiaro e onesto" : "Clear & honest";
  const tri2P = isIt
    ? "Se un canale ufficiale gratuito è più veloce, ti mandiamo lì. Nessun upselling nascosto."
    : "If an official free route is faster, we send you there. No hidden upselling.";

  const tri3H = isIt ? "Veloci ma accurati" : "Fast, but thoughtful";
  const tri3P = isIt
    ? "In genere rispondiamo entro 2 giorni lavorativi, senza saltare dettagli importanti."
    : "We usually reply within 2 business days, without skipping the details that matter.";

  const needHelpH2 = isIt
    ? "Scegli da dove iniziare"
    : "Choose where you need help";

  const selectServiceLabel = isIt
    ? "Servizio principale"
    : "Main service";

  const payInfoYes = isIt
    ? "Per questo servizio potresti vedere una pagina di pagamento sicura (Stripe) dopo l’invio. Prima però ti spieghiamo sempre cosa include."
    : "For this service you may see a secure Stripe payment page after sending the form. We’ll always explain what’s included first.";

  const payInfoNo = isIt
    ? "Per questa selezione in genere partiamo con orientamento gratuito via email. Nessun pagamento immediato."
    : "For this selection we usually start with free guidance by email. No immediate payment.";

  const svcLabel = {
    passport: isIt ? "Passaporto" : "Passport",
    cie: isIt ? "CIE (Carta d’identità)" : "CIE (ID card)",
    aire: "AIRE",
    nin: isIt
      ? "NIN (Numero Assicurazione Nazionale)"
      : "NIN (National Insurance Number)",
    housing: isIt
      ? "Casa (affitto, landlord, garanzie)"
      : "Housing (rent, landlord, guarantors)",
    translation: isIt ? "Traduzioni e lettere ufficiali" : "Translations & official letters",
    benefits: isIt
      ? "Benefici e supporto al reddito"
      : "Benefits & income support",
    visa: isIt ? "Visti e permessi" : "Visas & permits",
    other: isIt ? "Altro / Non sono sicuro" : "Other / Not sure",
  };

  const firstNamePh = isIt ? "Nome *" : "First name *";
  const lastNamePh = isIt ? "Cognome *" : "Last name *";
  const emailPh = "Email *";
  const phonePh = isIt
    ? "Telefono (con prefisso internazionale) *"
    : "Phone (incl. country code) *";
  const postcodePh = isIt
    ? "CAP Regno Unito (opzionale)"
    : "UK postcode (optional)";
  const msgLabel = isIt ? "Il tuo messaggio *" : "Your message *";
  const msgPh = isIt
    ? "Puoi scrivere in italiano o in inglese. Anche un elenco a punti va benissimo."
    : "You can write in Italian or English. Bullet points are totally fine.";
  const uploadLabel = isIt
    ? "Carica documenti (opzionale)"
    : "Upload documents (optional)";
  const remove = isIt ? "Rimuovi" : "Remove";
  const uploadNote = isIt
    ? `Consentiti: PDF, JPG, PNG (max 5MB ciascuno). Fino a ${MAX_FILES} file.`
    : `Allowed: PDF, JPG, PNG (max 5MB each). Up to ${MAX_FILES} files.`;

  const consentTextPrefix = isIt
    ? "Acconsento al trattamento dei miei dati da parte di Resinaro in linea con la "
    : "I agree to Resinaro handling my data in line with the ";
  const privacy = isIt ? "Privacy Policy" : "Privacy Policy";

  const sending = isIt ? "Invio in corso…" : "Sending…";
  const send = isIt ? "Invia messaggio" : "Send message";
  const replyEta = isIt
    ? "Di solito rispondiamo entro 2 giorni lavorativi."
    : "We usually reply within 2 business days.";

  const upToNFiles = isIt
    ? `Puoi caricare fino a ${MAX_FILES} file.`
    : `You can upload up to ${MAX_FILES} files.`;
  const notAllowed = isIt
    ? "non è di un tipo consentito (PDF/JPG/PNG)."
    : "is not an allowed type (PDF/JPG/PNG).";
  const tooLarge = isIt
    ? "è più grande di 5MB."
    : "is larger than 5MB.";

  const needName = isIt
    ? "Inserisci nome e cognome."
    : "Please enter your first and last name.";
  const badEmail = isIt
    ? "Inserisci un indirizzo email valido."
    : "Enter a valid email address.";
  const badPhone = isIt
    ? "Inserisci un numero di telefono valido."
    : "Enter a valid phone number.";
  const needMsg = isIt
    ? "Scrivi un breve messaggio."
    : "Please write a short message.";
  const needConsent = isIt
    ? "Conferma il consenso al trattamento dei dati."
    : "Please confirm you consent to data handling.";

  const thanks = isIt
    ? "✅ Grazie — abbiamo ricevuto la tua richiesta. Risponderemo entro 2 giorni lavorativi."
    : "✅ Thanks — we’ve received your request. We’ll reply within 2 business days.";
  const netErr = isIt
    ? "Errore di rete — riprova più tardi."
    : "Network error — please try later.";
  const errPrefix = isIt ? "Errore: " : "Error: ";

  const trustH = isIt
    ? "Perché tanti italiani si affidano a Resinaro"
    : "Why many Italians trust Resinaro";

  const trustBullets: string[] = isIt
    ? [
        "Non siamo un call center anonimo: siamo italiani nel Regno Unito anche noi.",
        "Ti mandiamo ai canali ufficiali gratuiti quando sono la via più veloce o economica.",
        "Prezzi e ambito chiari prima che tu paghi: niente sorprese o upselling nascosto.",
        "Se commettiamo un errore, lo sistemiamo — o rimborsiamo quando è il caso.",
      ]
    : [
        "We’re not a generic call centre: we’re Italians living in the UK too.",
        "We send you to official free routes when that’s the fastest or cheapest option.",
        "Clear pricing and scope before you pay: no surprises or hidden upselling.",
        "If we make a mistake, we fix it — or refund where appropriate.",
      ];

  const expectTitle = isIt
    ? "Cosa succede dopo che invii il form"
    : "What happens after you send this form";

  const expectList: string[] = isIt
    ? [
        "Confermiamo la ricezione e rivediamo la tua situazione.",
        "Ti rispondiamo con i prossimi passi chiari e, se serve, un preventivo.",
        "Se sei d’accordo, iniziamo a lavorare sul caso e ti teniamo aggiornato.",
      ]
    : [
        "We confirm we’ve received your message and review your situation.",
        "We reply with clear next steps and, if needed, a simple quote.",
        "If you’re happy, we get to work and keep you updated.",
      ];

  const faqH = isIt ? "Domande frequenti" : "Common questions";

  const faqs: FAQ[] = isIt
    ? [
        {
          question: "Non so se ho scelto il servizio giusto, va bene lo stesso?",
          answer: (
            <>
              Sì. Se non sei sicuro, scegli semplicemente{" "}
              <strong>“Altro / Non sono sicuro”</strong> e descrivi la
              situazione. Se rientra in un servizio specifico (es.
              passaporto, AIRE, benefici), ti indirizziamo noi.
            </>
          ),
        },
        {
          question: "Perché chiedete la prova di indirizzo o lo stato AIRE?",
          answer: (
            <>
              Consolati e uffici UK guardano giurisdizione e identità.
              Evidenze come <em>council tax, estratti conto, contratto
              di affitto</em> o stato AIRE aiutano a evitare rifiuti o
              ritardi. Se non hai nulla ancora, dillo nel messaggio:
              cerchiamo insieme alternative.
            </>
          ),
        },
        {
          question: "Come vengono conservati i miei dati e documenti?",
          answer: (
            <>
              I file sono salvati in un ambiente privato con accesso
              limitato. Seguiamo il GDPR UK: usiamo i dati solo per
              erogare il servizio richiesto e li conserviamo solo per il
              tempo necessario. Puoi leggere di più nella{" "}
              <Link
                href={`/${locale}/privacy-policy`}
                className="text-emerald-700 underline"
              >
                Privacy Policy
              </Link>
              .
            </>
          ),
        },
      ]
    : [
        {
          question: "I’m not sure I picked the right service, is that ok?",
          answer: (
            <>
              Yes. If you’re unsure, just choose{" "}
              <strong>“Other / Not sure”</strong> and describe what’s
              happening. If it clearly fits a specific area (passport,
              AIRE, benefits), we’ll route it correctly on our side.
            </>
          ),
        },
        {
          question: "Why do you ask for proof of address or AIRE status?",
          answer: (
            <>
              Consulates and UK authorities care about jurisdiction and
              identity. Evidence like <em>council tax, bank statements,
              tenancy agreements</em> or AIRE status helps avoid
              rejections or delays. If you don’t have anything yet, say
              so in your message: we can look at alternatives together.
            </>
          ),
        },
        {
          question: "How are my data and documents stored?",
          answer: (
            <>
              Files are stored in a private, access-controlled area. We
              follow UK GDPR: we only use your data to deliver the
              service you’ve asked for, and keep it only as long as
              necessary. You can read more in our{" "}
              <Link
                href={`/${locale}/privacy-policy`}
                className="text-emerald-700 underline"
              >
                Privacy Policy
              </Link>
              .
            </>
          ),
        },
      ];

  const urgentH = isIt
    ? "Passaporto o CIE urgente?"
    : "Urgent passport or CIE?";
  const urgentP = isIt
    ? 'Nel messaggio aggiungi la parola "URGENTE" e le date di viaggio. Faremo il possibile per dare priorità, compatibilmente con i vincoli dei consolati.'
    : 'In your message, add the word "URGENT" and your travel dates. We’ll do our best to prioritise you within consulate constraints.';

  const footerNote = isIt
    ? "Preferisci scrivere direttamente via email?"
    : "Prefer to write directly by email?";
  const footerTail = isIt
    ? "Puoi incollare le stesse informazioni lì. Leggiamo italiano e inglese."
    : "You can paste the same information there. We read Italian and English.";

  return {
    locale,
    isIt,
    contactH1,
    contactSub,
    tri1H,
    tri1P,
    tri2H,
    tri2P,
    tri3H,
    tri3P,
    needHelpH2,
    selectServiceLabel,
    payInfoYes,
    payInfoNo,
    svcLabel,
    firstNamePh,
    lastNamePh,
    emailPh,
    phonePh,
    postcodePh,
    msgLabel,
    msgPh,
    uploadLabel,
    remove,
    uploadNote,
    consentTextPrefix,
    privacy,
    sending,
    send,
    replyEta,
    upToNFiles,
    notAllowed,
    tooLarge,
    needName,
    badEmail,
    badPhone,
    needMsg,
    needConsent,
    thanks,
    netErr,
    errPrefix,
    trustH,
    trustBullets,
    expectTitle,
    expectList,
    faqH,
    faqs,
    urgentH,
    urgentP,
    footerNote,
    footerTail,
  };
}

/* -------------------- “Other” contact form (localized) -------------------- */
function OtherContactForm({ serviceKey }: { serviceKey: "other" }) {
  const {
    locale,
    isIt,
    firstNamePh,
    lastNamePh,
    emailPh,
    phonePh,
    postcodePh,
    msgLabel,
    msgPh,
    uploadLabel,
    remove,
    uploadNote,
    consentTextPrefix,
    privacy,
    sending,
    send,
    replyEta,
    upToNFiles,
    notAllowed,
    tooLarge,
    needName,
    badEmail,
    badPhone,
    needMsg,
    needConsent,
    thanks,
    netErr,
    errPrefix,
  } = useCopy();

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
      setStatus(upToNFiles);
      return;
    }
    const valid: File[] = [];
    for (const f of selected) {
      if (!ALLOWED_TYPES.includes(f.type)) {
        setStatus(`${f.name} ${notAllowed}`);
        continue;
      }
      if (f.size > MAX_FILE_SIZE) {
        setStatus(`${f.name} ${tooLarge}`);
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

    if (!firstName.trim() || !lastName.trim()) return setStatus(needName);
    if (!/\S+@\S+\.\S+/.test(email)) return setStatus(badEmail);
    if (!/[\d+()\-.\s]{7,}/.test(phone)) return setStatus(badPhone);
    if (!message.trim()) return setStatus(needMsg);
    if (!consent) return setStatus(needConsent);

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

      const res = await fetch("/api/contact", {
        method: "POST",
        body: fd,
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus(
          `${errPrefix}${
            json.error ||
            (isIt ? "riprova per favore." : "please try again.")
          }`,
        );
      } else {
        setStatus(thanks);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setPostcode("");
        setMessage("");
        setFiles([]);
        setConsent(false);
      }
    } catch {
      setStatus(netErr);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-4 space-y-5"
      encType="multipart/form-data"
    >
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-wide text-emerald-800">
          {isIt ? "1. Chi sei" : "1. About you"}
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <input
            className="w-full rounded-xl border border-slate-200 bg-white/80 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-400"
            placeholder={firstNamePh}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            className="w-full rounded-xl border border-slate-200 bg-white/80 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-400"
            placeholder={lastNamePh}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          <input
            className="w-full rounded-xl border border-slate-200 bg-white/80 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-400"
            type="email"
            placeholder={emailPh}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="w-full rounded-xl border border-slate-200 bg-white/80 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-400"
            placeholder={phonePh}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <input
          className="w-full rounded-xl border border-slate-200 bg-white/80 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-400"
          placeholder={postcodePh}
          value={postcode}
          onChange={(e) => setPostcode(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-wide text-emerald-800">
          {isIt ? "2. Raccontaci cosa succede" : "2. Tell us what’s going on"}
        </p>
        <label className="block text-xs font-medium text-slate-700">
          {msgLabel}
        </label>
        <textarea
          className="mt-1 w-full rounded-xl border border-slate-200 bg-white/80 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-400"
          rows={6}
          placeholder={msgPh}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <p className="text-xs text-slate-500">
          {isIt
            ? "Puoi includere date importanti, consolato di riferimento, e cosa ti preoccupa di più."
            : "You can include key dates, which consulate is involved, and what worries you most."}
        </p>
      </div>

      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-wide text-emerald-800">
          {isIt
            ? "3. Documenti (se li hai già)"
            : "3. Documents (if you have them)"}
        </p>
        <label className="block text-xs font-medium text-slate-700">
          {uploadLabel}
        </label>
        <input
          type="file"
          multiple
          accept=".pdf,.jpg,.jpeg,.png"
          onChange={onFilesChange}
          className="text-xs"
        />
        {files.length > 0 && (
          <ul className="mt-2 space-y-1 text-xs">
            {files.map((f, i) => (
              <li
                key={i}
                className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-3 py-2"
              >
                <span className="truncate">
                  {f.name} — {(f.size / 1024 / 1024).toFixed(2)} MB
                </span>
                <button
                  type="button"
                  onClick={() => removeFile(i)}
                  className="text-xs font-medium text-red-600 underline underline-offset-2"
                >
                  {remove}
                </button>
              </li>
            ))}
          </ul>
        )}
        <p className="text-xs text-slate-500">{uploadNote}</p>
      </div>

      <label className="flex items-start gap-2 text-xs text-slate-700">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5"
        />
        <span>
          {consentTextPrefix}
          <Link
            href={`/${locale}/privacy-policy`}
            className="text-emerald-700 underline"
            target="_blank"
          >
            {privacy}
          </Link>
          .
        </span>
      </label>

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex h-10 items-center justify-center rounded-xl bg-emerald-700 px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-800 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {submitting ? sending : send}
        </button>
        <p className="text-xs text-slate-600">{replyEta}</p>
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

/* -------------------- Page -------------------- */
export default function Contact() {
  const {
    isIt,
    contactH1,
    contactSub,
    tri1H,
    tri1P,
    tri2H,
    tri2P,
    tri3H,
    tri3P,
    needHelpH2,
    selectServiceLabel,
    payInfoYes,
    payInfoNo,
    svcLabel,
    trustH,
    trustBullets,
    expectTitle,
    expectList,
    faqH,
    faqs,
    urgentH,
    urgentP,
    footerNote,
    footerTail,
  } = useCopy();

  const [service, setService] = useState<ServiceKey>("passport");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const serviceCards = useMemo(
    () => [
      {
        key: "passport" as ServiceKey,
        icon: "🛂",
        title: svcLabel.passport,
        description: isIt
          ? "Prenotazioni a Manchester o altri consolati, rinnovi e casi complessi."
          : "Passport renewals, Manchester consulate appointments and tricky cases.",
      },
      {
        key: "cie" as ServiceKey,
        icon: "💳",
        title: svcLabel.cie,
        description: isIt
          ? "Supporto CIE via Prenot@Mi e chiarimenti su documenti richiesti."
          : "CIE via Prenot@Mi and what documents you really need.",
      },
      {
        key: "aire" as ServiceKey,
        icon: "🏠",
        title: svcLabel.aire,
        description: isIt
          ? "Iscrizioni, aggiornamenti dati e problemi con i comuni italiani."
          : "Registrations, data updates and issues with Italian comuni.",
      },
      {
        key: "nin" as ServiceKey,
        icon: "🧾",
        title: svcLabel.nin,
        description: isIt
          ? "Primi passi per lavorare in UK, lettere e appuntamenti."
          : "Getting started to work in the UK, letters and appointments.",
      },
      {
        key: "housing" as ServiceKey,
        icon: "🔑",
        title: svcLabel.housing,
        description: isIt
          ? "Affitti, garanzie, lettere al landlord e controlli documenti."
          : "Renting, guarantors, landlord letters and document checks.",
      },
      {
        key: "translation" as ServiceKey,
        icon: "📝",
        title: svcLabel.translation,
        description: isIt
          ? "Traduzioni e bozze per email ufficiali, reclami e ricorsi."
          : "Translations and drafts for official emails, complaints and appeals.",
      },
      {
        key: "benefits" as ServiceKey,
        icon: "💷",
        title: svcLabel.benefits,
        description: isIt
          ? "Orientamento iniziale su benefici UK e lettura delle lettere ricevute."
          : "Initial guidance on UK benefits and understanding letters you’ve received.",
      },
      {
        key: "visa" as ServiceKey,
        icon: "🌍",
        title: svcLabel.visa,
        description: isIt
          ? "Supporto di base per visti UK e collegamento a risorse ufficiali."
          : "Basic support for UK visas plus signposting to official resources.",
      },
      {
        key: "other" as ServiceKey,
        icon: "💬",
        title: svcLabel.other,
        description: isIt
          ? "Non sei sicuro? Raccontaci e ti indirizziamo noi."
          : "Not sure what you need? Tell us and we’ll point you in the right direction.",
      },
    ],
    [svcLabel, isIt],
  );

  const selectedCard = serviceCards.find((c) => c.key === service);
  const isPayEligible = PAY_ELIGIBLE.has(service);

  return (
    <main className="bg-[#F6F3EA] text-slate-900">
      {/* HERO */}
      <section className="border-b bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 lg:flex-row lg:items-center lg:py-14">
          <div className="flex-1 space-y-4">
            <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-emerald-50 ring-1 ring-emerald-500/40">
              🇮🇹{" "}
              {isIt ? "Italiani nel Regno Unito" : "Italians in the UK"} •{" "}
              <span className="ml-1">
                {isIt
                  ? "Supporto in italiano e inglese"
                  : "Support in Italian & English"}
              </span>
            </span>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              {contactH1}
            </h1>
            <p className="max-w-2xl text-sm text-emerald-50/90">
              {contactSub}
            </p>
            <div className="grid gap-3 text-xs sm:grid-cols-3">
              <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <p className="font-semibold">{tri1H}</p>
                <p className="mt-1 text-emerald-50/90">{tri1P}</p>
              </div>
              <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <p className="font-semibold">{tri2H}</p>
                <p className="mt-1 text-emerald-50/90">{tri2P}</p>
              </div>
              <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <p className="font-semibold">{tri3H}</p>
                <p className="mt-1 text-emerald-50/90">{tri3P}</p>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="mx-auto max-w-md rounded-3xl bg-white/10 p-4 text-xs shadow-lg ring-1 ring-white/15 backdrop-blur-sm">
              <p className="font-semibold text-emerald-50">
                {isIt
                  ? "Un messaggio, non un modulo infinito"
                  : "One message, not an endless form"}
              </p>
              <p className="mt-2 text-emerald-50/90">
                {isIt
                  ? "Non devi avere già tutto perfetto. Più che un modulo burocratico, pensa a questo come un messaggio a un amico che conosce consolati e burocrazia."
                  : "You don’t need everything figured out yet. Think of this as a message to a friend who knows consulates and UK bureaucracy, not just another form."}
              </p>
              <p className="mt-3 text-[11px] text-emerald-100">
                {isIt
                  ? "Se preferisci, puoi anche scriverci direttamente via email — trovi l’indirizzo in fondo alla pagina."
                  : "If you prefer, you can also email us directly — you’ll find the address at the bottom of this page."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT – now fully on the beige background, no overlap with green */}
      <section className="pb-10 pt-8 sm:pb-14">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 lg:flex-row">
          {/* LEFT: Service selector + form */}
          <section className="w-full lg:w-2/3">
            <div className="space-y-6 rounded-3xl bg-[#FFFCF5] p-4 shadow-sm ring-1 ring-slate-200 sm:p-6">
              <div className="space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <h2 className="text-lg font-bold text-emerald-900 sm:text-xl">
                      {needHelpH2}
                    </h2>
                    <p className="text-xs text-slate-600">
                      {isIt
                        ? "Puoi cambiare servizio in qualsiasi momento, il messaggio rimane valido."
                        : "You can change service at any time — your message will still be valid."}
                    </p>
                  </div>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-medium text-emerald-800">
                    {selectServiceLabel}
                  </span>
                </div>

                {/* Service cards */}
                <div className="mt-2 flex gap-3 overflow-x-auto pb-1 pt-1">
                  {serviceCards.map((card) => {
                    const active = card.key === service;
                    const cardPayEligible = PAY_ELIGIBLE.has(card.key);
                    return (
                      <button
                        key={card.key}
                        type="button"
                        onClick={() => setService(card.key)}
                        className={`flex min-w-[170px] flex-1 flex-col items-start rounded-2xl border px-3 py-3 text-left text-xs shadow-sm transition hover:border-emerald-500/70 hover:bg-emerald-50/60 sm:min-w-[190px] ${
                          active
                            ? "border-emerald-600 bg-emerald-50/80"
                            : "border-slate-200 bg-white"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-base">
                            {card.icon}
                          </span>
                          <p className="text-[13px] font-semibold text-slate-900">
                            {card.title}
                          </p>
                        </div>
                        <p className="mt-2 line-clamp-2 text-[11px] text-slate-600">
                          {card.description}
                        </p>
                        <span className="mt-3 inline-flex items-center rounded-full bg-slate-50 px-2 py-0.5 text-[10px] font-medium text-slate-700">
                          {cardPayEligible
                            ? isIt
                              ? "Servizio a pagamento"
                              : "Paid support"
                            : isIt
                            ? "Orientamento iniziale gratuito"
                            : "Free initial guidance"}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Payment / flow explanation */}
                <div className="rounded-2xl bg-emerald-50/80 p-3 text-xs text-emerald-900 ring-1 ring-emerald-100">
                  <p className="font-medium">
                    {isPayEligible
                      ? isIt
                        ? "Come funziona il pagamento"
                        : "How payment works"
                      : isIt
                      ? "Per questa richiesta"
                      : "For this type of request"}
                  </p>
                  <p className="mt-1">
                    {isPayEligible ? payInfoYes : payInfoNo}
                  </p>
                </div>
              </div>

              {/* Render the exact service form component below */}
              <div className="border-t pt-4">
                {service === "passport" && <PassportForm />}
                {service === "cie" && <CieForm />}
                {service === "aire" && <AireForm />}
                {service === "nin" && <NinForm />}
                {service === "housing" && <HousingForm />}
                {service === "translation" && <TranslationForm />}
                {service === "benefits" && <BenefitsForm />}
                {service === "visa" && <VisaForm />}
                {service === "other" && <OtherContactForm serviceKey="other" />}
              </div>
            </div>
          </section>

          {/* RIGHT: Trust, timeline, FAQs, urgent */}
          <aside className="w-full space-y-6 lg:w-1/3">
            {/* What to expect */}
            <div className="rounded-3xl bg-[#FFFCF5] p-5 shadow-sm ring-1 ring-slate-200">
              <h3 className="text-sm font-semibold text-emerald-900">
                {expectTitle}
              </h3>
              <ol className="mt-3 space-y-2 text-xs text-slate-700">
                {expectList.map((step, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-[11px] font-semibold text-emerald-800">
                      {i + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Trust */}
            <div className="rounded-3xl bg-[#FFFCF5] p-5 shadow-sm ring-1 ring-slate-200">
              <h3 className="text-sm font-semibold text-emerald-900">
                {trustH}
              </h3>
              <ul className="mt-3 space-y-2 text-xs text-slate-700">
                {trustBullets.map((line, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* FAQs */}
            <div className="rounded-3xl bg-[#FFFCF5] p-5 shadow-sm ring-1 ring-slate-200">
              <h3 className="text-sm font-semibold text-emerald-900">
                {faqH}
              </h3>
              <div className="mt-3 divide-y divide-slate-100">
                {faqs.map((f, i) => (
                  <div key={i} className="py-3">
                    <button
                      className="flex w-full items-center justify-between text-left text-xs font-medium text-slate-900"
                      onClick={() =>
                        setOpenIndex(openIndex === i ? null : i)
                      }
                    >
                      <span>{f.question}</span>
                      <span className="ml-2 text-slate-400">
                        {openIndex === i ? "–" : "+"}
                      </span>
                    </button>
                    {openIndex === i && (
                      <div className="mt-2 text-xs text-slate-700">
                        {f.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Urgent */}
            <div className="rounded-3xl bg-emerald-50/90 p-5 text-xs text-emerald-900 ring-1 ring-emerald-100">
              <p className="font-semibold">{urgentH}</p>
              <p className="mt-1">{urgentP}</p>
            </div>
          </aside>
        </div>
      </section>

      {/* Footer note */}
      <section className="pb-10">
        <div className="mx-auto max-w-6xl px-4">
          <div className="rounded-3xl bg-[#FFFCF5] p-4 text-xs text-slate-700 shadow-sm ring-1 ring-slate-200 sm:p-5">
            <p>
              {footerNote}{" "}
              <a
                href="mailto:resinaro@proton.me"
                className="font-medium text-emerald-800 underline underline-offset-2"
              >
                resinaro@proton.me
              </a>{" "}
              {footerTail}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
