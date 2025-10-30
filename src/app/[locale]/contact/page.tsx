// src/app/[locale]/contact/page.tsx
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
  const base = {
    locale,
    isIt,
    contactH1: isIt ? "Contatta Resinaro" : "Contact Resinaro",
    contactSub: isIt
      ? "Il modo più rapido per ottenere aiuto. Condividi alcuni dettagli e ti risponderemo con i prossimi passi chiari."
      : "The fastest way to get help. Share a few details, and we’ll reply with clear next steps.",
    tri1H: isIt ? "Trasparente" : "Transparent",
    tri1P: isIt ? "Costi e ambito chiari prima di impegnarti." : "Clear fees & scope before you commit.",
    tri2H: isIt ? "Sicuro" : "Secure",
    tri2P: isIt ? "Upload privati, allineati al GDPR UK." : "Private uploads, UK GDPR aligned.",
    tri3H: isIt ? "Reattivo" : "Responsive",
    tri3P: isIt ? "Rispondiamo di solito entro 2 giorni lavorativi." : "Typical reply within 2 business days.",
    needHelpH2: isIt ? "Di cosa hai bisogno?" : "What do you need help with?",
    selectServiceLabel: isIt ? "Seleziona un servizio *" : "Select a service *",
    payInfoYes: isIt
      ? "Dopo l’invio, verrai reindirizzato a una pagina di pagamento Stripe per confermare la prenotazione."
      : "After you submit, you’ll be redirected to a secure Stripe payment page to confirm your booking for this service.",
    payInfoNo: isIt
      ? "Dopo l’invio, ti invieremo i prossimi passi via email. Nessun pagamento immediato richiesto per questa selezione."
      : "After you submit, we’ll email you next steps. No immediate payment or redirect is required for this selection.",
    svcLabel: {
      passport: isIt ? "Passaporto" : "Passport",
      cie: isIt ? "CIE (Carta d’Identità)" : "CIE (ID Card)",
      aire: "AIRE",
      nin: isIt ? "NIN (Numero Assicurazione Nazionale)" : "NIN (National Insurance Number)",
      housing: isIt ? "Casa" : "Housing",
      translation: isIt ? "Traduzioni" : "Translations",
      benefits: isIt ? "Benefici" : "Benefits",
      visa: "Visa",
      other: isIt ? "Altro" : "Other",
    },
    firstNamePh: isIt ? "Nome *" : "First name *",
    lastNamePh: isIt ? "Cognome *" : "Last name *",
    emailPh: "Email *",
    phonePh: isIt ? "Telefono (con prefisso internazionale) *" : "Phone (incl. country code) *",
    postcodePh: isIt ? "CAP Regno Unito (opzionale)" : "UK postcode (optional)",
    msgLabel: isIt ? "Il tuo messaggio *" : "Your message *",
    msgPh: isIt ? "Scrivi in italiano o in inglese. Anche a punti va bene." : "Write in Italian or English. Bullet points are fine.",
    uploadLabel: isIt ? "Carica documenti (opzionale)" : "Upload documents (optional)",
    remove: isIt ? "Rimuovi" : "Remove",
    uploadNote: isIt
      ? `Consentiti: PDF, JPG, PNG (max 5MB ciascuno). Fino a ${MAX_FILES} file.`
      : `Allowed: PDF, JPG, PNG (max 5MB each). Up to ${MAX_FILES} files.`,
    consentTextPrefix: isIt
      ? "Acconsento al trattamento dei miei dati da parte di Resinaro in linea con la "
      : "I agree to Resinaro handling my data in line with the ",
    privacy: isIt ? "Privacy Policy" : "Privacy Policy",
    sending: isIt ? "Invio in corso…" : "Sending…",
    send: isIt ? "Invia messaggio" : "Send message",
    replyEta: isIt ? "Di solito rispondiamo entro 2 giorni lavorativi." : "We usually reply within 2 business days.",
    upToNFiles: isIt ? `Puoi caricare fino a ${MAX_FILES} file.` : `You can upload up to ${MAX_FILES} files.`,
    notAllowed: isIt ? "non è di un tipo consentito (PDF/JPG/PNG)." : "is not an allowed type (PDF/JPG/PNG).",
    tooLarge: isIt ? "è più grande di 5MB." : "is larger than 5MB.",
    needName: isIt ? "Inserisci nome e cognome." : "Please enter your first and last name.",
    badEmail: isIt ? "Inserisci un indirizzo email valido." : "Enter a valid email address.",
    badPhone: isIt ? "Inserisci un numero di telefono valido." : "Enter a valid phone number.",
    needMsg: isIt ? "Scrivi un breve messaggio." : "Please write a short message.",
    needConsent: isIt ? "Conferma il consenso al trattamento dei dati." : "Please confirm you consent to data handling.",
    thanks: isIt
      ? "✅ Grazie — abbiamo ricevuto la tua richiesta. Risponderemo entro 2 giorni lavorativi."
      : "✅ Thanks — we’ve received your request. We’ll reply within 2 business days.",
    netErr: isIt ? "Errore di rete — riprova più tardi." : "Network error — please try later.",
    errPrefix: isIt ? "Errore: " : "Error: ",
    trustH: isIt ? "Perché le persone si fidano di Resinaro" : "Why people trust Resinaro",
    trustBullets: isIt
      ? [
          "• Community-first: ti indirizziamo ai canali ufficiali gratuiti quando sono la via più rapida.",
          "• Prezzi e ambito chiari — nessuna sorpresa o upselling.",
          "• Risultati pratici: checklist, template e supporto passo-passo alle prenotazioni.",
          "• Se commettiamo un errore, rimediamo — o rimborsiamo se appropriato.",
        ]
      : [
          "• Community-first: we’ll point you to official free routes when that’s best.",
          "• Clear prices and scope — no surprises or upselling.",
          "• Practical outcomes: checklists, templates, and step-by-step booking help.",
          "• If we make an error, we fix it — or refund appropriately.",
        ],
    expectTitle: isIt ? "Cosa succede dopo l’invio" : "What to expect after you send this form",
    expectList: isIt
      ? [
          "Confermiamo la ricezione e rivediamo i tuoi dettagli.",
          "Ti rispondiamo con prossimi passi e preventivo/ambito chiari.",
          "Una volta d’accordo, iniziamo — e ti teniamo aggiornato.",
        ]
      : [
          "We confirm receipt and review your details.",
          "We reply with next steps and a clear quote/scope.",
          "Once you agree, we start — and keep you updated.",
        ],
    faqH: isIt ? "Domande frequenti" : "Common questions",

    // 🔧 FIXED: wrap each branch of the ternary so the parser doesn't choke on `as` inside an object literal in .tsx
    faqs:
      isIt
        ? ([
            {
              question: "Perché chiedete la prova di indirizzo o l’AIRE?",
              answer: (
                <>
                  Consolati e autorità UK richiedono verifiche di giurisdizione e identità. Evidenze come{" "}
                  <em>council tax, estratti conto, contratto di affitto</em> o stato AIRE velocizzano prenotazioni e verifiche.
                  Se non li hai, diccelo — suggeriamo alternative.
                </>
              ),
            },
            {
              question: "Come vengono conservati i miei dati?",
              answer: (
                <>
                  I file sono conservati in un’area privata con accesso controllato. Seguiamo il GDPR UK: usiamo i dati solo per
                  erogare il servizio richiesto e li conserviamo solo quanto necessario. Vedi la{" "}
                  <Link href={`/${locale}/privacy-policy`} className="text-green-700 underline">
                    Privacy Policy
                  </Link>
                  .
                </>
              ),
            },
            {
              question: "Quali sono i tempi di risposta?",
              answer: (
                <>
                  Miriamo a rispondere entro <strong>2 giorni lavorativi</strong>. Casi urgenti passaporto/CIE:
                  scrivi “urgente” nell’oggetto e inserisci le date di viaggio per priorità.
                </>
              ),
            },
            {
              question: "Siete come una normale agenzia?",
              answer: (
                <>
                  No. Prima la community: prezzi chiari, niente upselling, e ti mandiamo sui canali ufficiali
                  quando è la via più veloce/economica. Se commettiamo un errore, lo sistemiamo.
                </>
              ),
            },
          ] as FAQ[])
        : ([
            {
              question: "Why do you ask for proof of address or AIRE?",
              answer: (
                <>
                  Consulates and UK bodies rely on jurisdiction and identity checks. Evidence like{" "}
                  <em>council tax, bank statements, tenancy agreements</em> or AIRE status makes booking and verification faster.
                  If you don’t have one yet, tell us — we’ll suggest alternatives.
                </>
              ),
            },
            {
              question: "How is my data stored?",
              answer: (
                <>
                  Files are stored in a private, access-controlled workspace. We follow UK GDPR: data is used only to deliver
                  the service you request and kept no longer than necessary. See our{" "}
                  <Link href={`/${locale}/privacy-policy`} className="text-green-700 underline">
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
                  We aim to reply within <strong>2 business days</strong>. Urgent passport/CIE cases: say “urgent”
                  in the subject and include travel dates so we can triage quickly.
                </>
              ),
            },
            {
              question: "Are you like a typical agency?",
              answer: (
                <>
                  No. We’re community-first: clear pricing, no upselling, and we’ll send you to official routes when that’s the
                  fastest/cheapest option. If we make an error, we’ll put it right.
                </>
              ),
            },
          ] as FAQ[]),

    urgentH: isIt ? "Passaporto/CIE urgenti?" : "Urgent passport/CIE?",
    urgentP: isIt
      ? 'Aggiungi "URGENTE" nell’oggetto ed includi le date di viaggio. Daremo priorità.'
      : 'Add "URGENT" to your subject line and include travel dates. We’ll triage accordingly.',
    footerNote: isIt ? "Preferisci l’email? Scrivi a" : "Prefer email? Contact",
    footerTail: isIt ? "e incolla i prompt qui sopra. Leggiamo italiano e inglese." : "and paste the prompts above. We read Italian and English.",
  };
  return base;
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
  const [lastName, setLastName]   = useState("");
  const [email, setEmail]         = useState("");
  const [phone, setPhone]         = useState("");
  const [postcode, setPostcode]   = useState("");
  const [message, setMessage]     = useState("");
  const [files, setFiles]         = useState<File[]>([]);
  const [consent, setConsent]     = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus]       = useState<string | null>(null);

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

      const res = await fetch("/api/contact", { method: "POST", body: fd });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus(`${errPrefix}${json.error || (isIt ? "riprova per favore." : "please try again.")}`);
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
    <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
      <div className="grid md:grid-cols-2 gap-4">
        <input className="w-full border rounded px-3 py-2" placeholder={firstNamePh} value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        <input className="w-full border rounded px-3 py-2" placeholder={lastNamePh} value={lastName} onChange={(e) => setLastName(e.target.value)} />
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <input className="w-full border rounded px-3 py-2" type="email" placeholder={emailPh} value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className="w-full border rounded px-3 py-2" placeholder={phonePh} value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>
      <input className="w-full border rounded px-3 py-2" placeholder={postcodePh} value={postcode} onChange={(e) => setPostcode(e.target.value)} />
      <div>
        <label className="block text-sm font-medium mb-1">{msgLabel}</label>
        <textarea className="w-full border rounded px-3 py-2" rows={6} placeholder={msgPh} value={message} onChange={(e) => setMessage(e.target.value)} />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">{uploadLabel}</label>
        <input type="file" multiple accept=".pdf,.jpg,.jpeg,.png" onChange={onFilesChange} />
        {files.length > 0 && (
          <ul className="mt-2 space-y-1 text-sm">
            {files.map((f, i) => (
              <li key={i} className="flex items-center justify-between rounded border px-3 py-2">
                <span>
                  {f.name} — {(f.size / 1024 / 1024).toFixed(2)} MB
                </span>
                <button type="button" onClick={() => removeFile(i)} className="text-red-600 text-xs underline">
                  {remove}
                </button>
              </li>
            ))}
          </ul>
        )}
        <p className="text-xs text-gray-600 mt-1">{uploadNote}</p>
      </div>
      <label className="flex items-start gap-2 text-sm">
        <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} />
        <span>
          {consentTextPrefix}
          <Link href={`/${locale}/privacy-policy`} className="text-green-700 underline" target="_blank">
            {privacy}
          </Link>
          .
        </span>
      </label>
      <div className="flex items-center gap-3">
        <button type="submit" disabled={submitting} className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-lg font-medium">
          {submitting ? sending : send}
        </button>
        <p className="text-sm text-gray-600">{replyEta}</p>
      </div>
      {status && (
        <div
          className={`rounded-lg px-4 py-3 text-sm ${
            status.startsWith("✅")
              ? "bg-green-50 text-green-800 border border-green-200"
              : "bg-amber-50 text-amber-800 border border-amber-200"
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

  return (
    <main className="bg-[#F9F6F1] text-gray-800">
      {/* Header / Trust strip */}
      <header className="bg-gradient-to-r from-green-900 via-green-800 to-green-900 text-white">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 py-8 sm:py-10">
          <h1 className="text-3xl md:text-4xl font-extrabold">{contactH1}</h1>
          <p className="mt-2 text-white/90">{contactSub}</p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            <div className="rounded-lg bg-white/10 p-4">
              <p className="font-semibold">{tri1H}</p>
              <p className="text-white/80">{tri1P}</p>
            </div>
            <div className="rounded-lg bg-white/10 p-4">
              <p className="font-semibold">{tri2H}</p>
              <p className="text-white/80">{tri2P}</p>
            </div>
            <div className="rounded-lg bg-white/10 p-4">
              <p className="font-semibold">{tri3H}</p>
              <p className="text-white/80">{tri3P}</p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-2 sm:px-6 py-6 sm:py-10 grid lg:grid-cols-3 gap-6 sm:gap-8">
        {/* FORM CARD */}
        <section className="lg:col-span-2">
          <div className="space-y-6 bg-white p-3 sm:p-6 rounded-xl shadow-sm border border-gray-200">
            <div>
              <h2 className="text-xl font-bold text-green-900 mb-3">{needHelpH2}</h2>
              <div className="grid md:grid-cols-2 gap-3 items-start">
                <div>
                  <label className="block text-sm mb-1">{selectServiceLabel}</label>
                  <select
                    className="w-full border rounded px-3 py-2"
                    value={service}
                    onChange={(e) => setService(e.target.value as ServiceKey)}
                  >
                    <option value="passport">{svcLabel.passport}</option>
                    <option value="cie">{svcLabel.cie}</option>
                    <option value="aire">{svcLabel.aire}</option>
                    <option value="nin">{svcLabel.nin}</option>
                    <option value="housing">{svcLabel.housing}</option>
                    <option value="translation">{svcLabel.translation}</option>
                    <option value="benefits">{svcLabel.benefits}</option>
                    <option value="visa">{svcLabel.visa}</option>
                    <option value="other">{svcLabel.other}</option>
                  </select>
                </div>
                <div className="text-xs bg-neutral-50 border rounded p-3">
                  {PAY_ELIGIBLE.has(service) ? <p>{payInfoYes}</p> : <p>{payInfoNo}</p>}
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
              {service === "visa" && <VisaForm />}
              {service === "other" && <OtherContactForm serviceKey={"other"} />}
            </div>
          </div>
        </section>

        {/* RIGHT SIDEBAR: Trust + FAQs */}
        <aside className="space-y-8">
          {/* Trust */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <h3 className="text-lg font-bold text-green-900">{trustH}</h3>
            <ul className="mt-3 space-y-2 text-sm">
              {trustBullets.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
            <div className="mt-4 rounded-lg bg-neutral-50 border p-4 text-xs text-neutral-700">
              <p className="font-medium">{expectTitle}</p>
              <ol className="list-decimal pl-5 mt-2 space-y-1">
                {expectList.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
            </div>
          </div>

          {/* FAQs */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <h3 className="text-lg font-bold text-green-900">{faqH}</h3>
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
            <p className="font-semibold text-green-900">{urgentH}</p>
            <p className="text-sm mt-1">{urgentP}</p>
          </div>
        </aside>
      </div>

      {/* Footer note */}
      <section className="max-w-6xl mx-auto px-2 sm:px-6 pb-8 sm:pb-12">
        <div className="bg-white rounded-xl border border-gray-200 p-3 sm:p-6 text-sm text-gray-700">
          <p>
            {footerNote}{" "}
            <a href="mailto:resinaro@proton.me" className="underline text-green-800">
              resinaro@proton.me
            </a>{" "}
            {footerTail}
          </p>
        </div>
      </section>
    </main>
  );
}
