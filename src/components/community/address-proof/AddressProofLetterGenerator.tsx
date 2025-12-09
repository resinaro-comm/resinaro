// src/components/community/address-proof/AddressProofLetterGenerator.tsx
"use client";

import React, { useMemo, useState } from "react";

type SupportedLocale = "en" | "it";

type RecipientType = "landlord" | "employer" | "gp" | "bank" | "other";

type AddressProofLetterGeneratorProps = {
  locale?: SupportedLocale;
};

export default function AddressProofLetterGenerator({
  locale = "en",
}: AddressProofLetterGeneratorProps) {
  const isItalian = locale === "it";

  const [recipientType, setRecipientType] = useState<RecipientType>("landlord");
  const [yourName, setYourName] = useState("");
  const [recipientName, setRecipientName] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [cityPostcode, setCityPostcode] = useState("");
  const [purpose, setPurpose] = useState("");

  const recipientLabel = (type: RecipientType) => {
    if (isItalian) {
      switch (type) {
        case "landlord":
          return "Landlord / Agenzia";
        case "employer":
          return "Datore di lavoro (HR)";
        case "gp":
          return "GP / studio medico";
        case "bank":
          return "Banca";
        default:
          return "Altro ente";
      }
    }
    switch (type) {
      case "landlord":
        return "Landlord / Letting agent";
      case "employer":
        return "Employer (HR)";
      case "gp":
        return "GP surgery";
      case "bank":
        return "Bank";
      default:
        return "Other organisation";
    }
  };

  const englishTemplate = useMemo(() => {
    const rName = recipientName.trim() || "To whom it may concern";
    const yName = yourName.trim() || "<Your Full Name>";
    const p =
      purpose.trim() ||
      "open a UK bank account, register with local services and complete basic checks";
    const line1 = addressLine1.trim() || "<House number and street>";
    const line2 = addressLine2.trim();
    const city = cityPostcode.trim() || "<Town / City, Postcode>";

    const headerRecipient =
      rName === "To whom it may concern" ? rName : `Dear ${rName},`;

    const contextLine = (() => {
      switch (recipientType) {
        case "landlord":
          return "I am currently renting a room / property at the address below.";
        case "employer":
          return "I am employed by your organisation and currently live at the address below.";
        case "gp":
          return "I am registered, or in the process of registering, at your practice and currently live at the address below.";
        case "bank":
          return "I am a customer, or in the process of becoming a customer, and currently live at the address below.";
        default:
          return "I am using your services and currently live at the address below.";
      }
    })();

    const closing = "Kind regards,";

    return `${rName === "To whom it may concern" ? rName : headerRecipient}

My name is ${yName}.

${contextLine}

Current address:

${yName}
${line1}
${line2 ? `${line2}\n` : ""}${city}

I kindly ask if you could issue a short letter or PDF confirming my name and current UK address. This is to help me ${p}.

If you need any additional information, please let me know.

${closing}
${yName}`;
  }, [
    addressLine1,
    addressLine2,
    cityPostcode,
    purpose,
    recipientName,
    recipientType,
    yourName,
  ]);

  const italianTemplate = useMemo(() => {
    const yName = yourName.trim() || "<Il tuo nome completo>";
    const p =
      purpose.trim() ||
      "aprire un conto bancario UK, registrarmi dal GP o completare altre pratiche di base";

    const recipientSentence = (() => {
      switch (recipientType) {
        case "landlord":
          return "Questa è una bozza in inglese per chiedere al landlord / agenzia una semplice lettera di conferma indirizzo.";
        case "employer":
          return "Questa è una bozza in inglese per chiedere all’HR una lettera su carta intestata che confermi il tuo indirizzo UK.";
        case "gp":
          return "Questa è una bozza in inglese per chiedere al GP / studio medico una breve conferma del tuo indirizzo.";
        case "bank":
          return "Questa è una bozza in inglese per chiedere alla banca una lettera di conferma indirizzo (welcome letter o simile).";
        default:
          return "Questa è una bozza in inglese per chiedere a un ente una breve lettera che confermi il tuo indirizzo UK.";
      }
    })();

    return `Nota in italiano (da NON inviare, solo per te):

- Nome: ${yName}
- Scopo: ${p}

${recipientSentence}

Copia/incolla il testo inglese sopra, personalizza nomi, indirizzo e motivo, poi invialo dall’email che usi per le pratiche UK.`;
  }, [recipientType, purpose, yourName]);

  const title = isItalian
    ? "Generatore di lettere di conferma indirizzo"
    : "Address confirmation letter generator";
  const intro = isItalian
    ? "Scegli il destinatario, inserisci i tuoi dati e copia la bozza in inglese. Personalizza sempre prima di inviarla."
    : "Choose who you’re writing to, fill in your details, then copy the English draft. Always personalise it before sending.";
  const helper = isItalian
    ? "Suggerimento: manda queste richieste dall’email che usi per banca, lavoro o pratiche ufficiali."
    : "Tip: send these requests from the email you use for banking, work or official paperwork.";

  const englishLabel = isItalian ? "Versione in inglese" : "English version";
  const italianLabel = isItalian
    ? "Spiegazione / appunto in italiano"
    : "Italian explainer note";

  const copyHint = isItalian
    ? "Copia il testo, incollalo nella tua email o lettera e modificalo dove serve."
    : "Copy the text into your email or document and edit any placeholder fields before sending.";

  return (
    <section
      aria-labelledby="address-proof-letter-gen-heading"
      className="mb-10"
    >
      <div className="rounded-2xl border bg-white shadow-sm p-5 md:p-6">
        <header className="mb-4">
          <h2
            id="address-proof-letter-gen-heading"
            className="text-xl md:text-2xl font-semibold text-emerald-900"
          >
            {title}
          </h2>
          <p className="mt-1 text-sm text-gray-700">{intro}</p>
          <p className="mt-1 text-xs text-gray-500">{helper}</p>
        </header>

        {/* Controls */}
        <div className="grid gap-4 md:grid-cols-2 text-sm mb-4">
          <div className="space-y-3">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                {isItalian ? "Destinatario" : "Recipient"}
              </label>
              <select
                value={recipientType}
                onChange={(e) =>
                  setRecipientType(e.target.value as RecipientType)
                }
                className="w-full rounded-md border-gray-300 text-sm focus:border-emerald-500 focus:ring-emerald-500"
              >
                <option value="landlord">{recipientLabel("landlord")}</option>
                <option value="employer">{recipientLabel("employer")}</option>
                <option value="gp">{recipientLabel("gp")}</option>
                <option value="bank">{recipientLabel("bank")}</option>
                <option value="other">{recipientLabel("other")}</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                {isItalian ? "Il tuo nome completo" : "Your full name"}
              </label>
              <input
                type="text"
                value={yourName}
                onChange={(e) => setYourName(e.target.value)}
                className="w-full rounded-md border-gray-300 text-sm focus:border-emerald-500 focus:ring-emerald-500"
                placeholder={isItalian ? "Es. Mario Rossi" : "e.g. Mario Rossi"}
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                {isItalian
                  ? "Nome del destinatario (opzionale)"
                  : "Recipient name (optional)"}
              </label>
              <input
                type="text"
                value={recipientName}
                onChange={(e) => setRecipientName(e.target.value)}
                className="w-full rounded-md border-gray-300 text-sm focus:border-emerald-500 focus:ring-emerald-500"
                placeholder={
                  isItalian ? "Es. HR Department" : "e.g. HR Department"
                }
              />
            </div>
          </div>

          <div className="space-y-3">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                {isItalian ? "Indirizzo — riga 1" : "Address – line 1"}
              </label>
              <input
                type="text"
                value={addressLine1}
                onChange={(e) => setAddressLine1(e.target.value)}
                className="w-full rounded-md border-gray-300 text-sm focus:border-emerald-500 focus:ring-emerald-500"
                placeholder={
                  isItalian
                    ? "Numero civico + via"
                    : "House number and street"
                }
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                {isItalian ? "Indirizzo — riga 2 (opzionale)" : "Address – line 2 (optional)"}
              </label>
              <input
                type="text"
                value={addressLine2}
                onChange={(e) => setAddressLine2(e.target.value)}
                className="w-full rounded-md border-gray-300 text-sm focus:border-emerald-500 focus:ring-emerald-500"
                placeholder={
                  isItalian ? "Palazzo / flat / ecc." : "Building / flat / etc."
                }
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                {isItalian ? "Città + Postcode" : "Town / City + Postcode"}
              </label>
              <input
                type="text"
                value={cityPostcode}
                onChange={(e) => setCityPostcode(e.target.value)}
                className="w-full rounded-md border-gray-300 text-sm focus:border-emerald-500 focus:ring-emerald-500"
                placeholder={
                  isItalian ? "Es. London SW1A 1AA" : "e.g. London SW1A 1AA"
                }
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                {isItalian
                  ? "Motivo (verrà inserito nella bozza)"
                  : "Reason (will appear in the draft)"}
              </label>
              <input
                type="text"
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                className="w-full rounded-md border-gray-300 text-sm focus:border-emerald-500 focus:ring-emerald-500"
                placeholder={
                  isItalian
                    ? "Es. aprire un conto, registrarmi dal GP..."
                    : "e.g. open a bank account, register with a GP..."
                }
              />
            </div>
          </div>
        </div>

        <p className="mb-2 text-xs text-gray-500 italic">{copyHint}</p>

        {/* Output boxes */}
        <div className="grid gap-4 md:grid-cols-2 text-xs md:text-sm">
          <div>
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-gray-600">
              {englishLabel}
            </p>
            <textarea
              readOnly
              value={englishTemplate}
              className="h-56 w-full rounded-lg border border-gray-300 bg-neutral-50 p-3 font-mono text-[11px] md:text-xs focus:outline-none"
            />
          </div>
          <div>
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-gray-600">
              {italianLabel}
            </p>
            <textarea
              readOnly
              value={italianTemplate}
              className="h-56 w-full rounded-lg border border-gray-300 bg-neutral-50 p-3 font-mono text-[11px] md:text-xs focus:outline-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
