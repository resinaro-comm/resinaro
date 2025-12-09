// src/components/community/address-proof/AddressProofExpiryTracker.tsx
"use client";

import React, { useMemo, useState } from "react";

type SupportedLocale = "en" | "it";

type TrackerRow = {
  id: number;
  docType: string;
  issueDate: string; // yyyy-mm-dd
  validityMonths: number;
};

type AddressProofExpiryTrackerProps = {
  locale?: SupportedLocale;
};

function monthsBetween(issueDate: string): number | null {
  if (!issueDate) return null;
  const issue = new Date(issueDate);
  if (Number.isNaN(issue.getTime())) return null;
  const now = new Date();
  const years = now.getFullYear() - issue.getFullYear();
  const months = now.getMonth() - issue.getMonth();
  const totalMonths = years * 12 + months;
  // if we're before the day of month, nudge slightly down
  if (now.getDate() < issue.getDate()) {
    return totalMonths - 1;
  }
  return totalMonths;
}

export default function AddressProofExpiryTracker({
  locale = "en",
}: AddressProofExpiryTrackerProps) {
  const isItalian = locale === "it";

  const [rows, setRows] = useState<TrackerRow[]>([]);
  const [docType, setDocType] = useState("");
  const [issueDate, setIssueDate] = useState("");
  const [validityMonths, setValidityMonths] = useState(3);

  const title = isItalian
    ? "Tracker di validità dei documenti"
    : "Document freshness tracker";
  const intro = isItalian
    ? "Tieni d’occhio da quanto tempo sono stati emessi i tuoi documenti (council, banca, datore di lavoro). In tanti controlli UK vogliono lettere “recenti”, spesso entro 3 mesi."
    : "Keep an eye on how old your letters are (council, bank, employer). Many UK checks want documents issued recently, often within 3 months.";
  const helper = isItalian
    ? "I dati restano solo nel tuo browser: è un piccolo aiuto personale, non salviamo nulla sul server."
    : "Everything here stays in your browser only – this is just a personal helper, nothing is stored on our servers.";

  const docLabel = isItalian ? "Tipo di documento" : "Document type";
  const issueLabel = isItalian ? "Data di emissione" : "Issue date";
  const validityLabel = isItalian
    ? "Validità indicativa"
    : "Typical validity";
  const addButton = isItalian ? "Aggiungi alla tabella" : "Add to table";

  const validityOptions = useMemo(
    () => [
      { value: 3, label: isItalian ? "3 mesi (molti enti UK)" : "3 months (many checks)" },
      { value: 6, label: isItalian ? "6 mesi" : "6 months" },
      { value: 12, label: isItalian ? "12 mesi" : "12 months" },
    ],
    [isItalian],
  );

  const handleAdd = () => {
    if (!docType.trim() || !issueDate) return;
    setRows((prev) => [
      ...prev,
      {
        id: prev.length ? prev[prev.length - 1].id + 1 : 1,
        docType: docType.trim(),
        issueDate,
        validityMonths,
      },
    ]);
    setDocType("");
    setIssueDate("");
    setValidityMonths(3);
  };

  const handleRemove = (id: number) => {
    setRows((prev) => prev.filter((row) => row.id !== id));
  };

  const getStatus = (row: TrackerRow) => {
    const months = monthsBetween(row.issueDate);
    if (months === null) {
      return {
        label: isItalian ? "Data non valida" : "Invalid date",
        tone: "neutral" as const,
      };
    }

    if (months < row.validityMonths / 2) {
      return {
        label: isItalian ? "Fresco" : "Fresh",
        tone: "good" as const,
      };
    }
    if (months <= row.validityMonths) {
      return {
        label: isItalian ? "Ok per molti controlli" : "OK for most checks",
        tone: "ok" as const,
      };
    }
    return {
      label: isItalian
        ? "Forse troppo vecchio — valuta una nuova lettera"
        : "Might be too old – consider requesting a new letter",
      tone: "warn" as const,
    };
  };

  const statusClass = (tone: "good" | "ok" | "warn" | "neutral") => {
    switch (tone) {
      case "good":
        return "bg-emerald-50 text-emerald-800 border-emerald-200";
      case "ok":
        return "bg-amber-50 text-amber-800 border-amber-200";
      case "warn":
        return "bg-red-50 text-red-800 border-red-200";
      default:
        return "bg-neutral-50 text-neutral-700 border-neutral-200";
    }
  };

  return (
    <section
      aria-labelledby="address-proof-expiry-heading"
      className="mb-10"
    >
      <div className="rounded-2xl border bg-white shadow-sm p-5 md:p-6">
        <header className="mb-4">
          <h2
            id="address-proof-expiry-heading"
            className="text-xl md:text-2xl font-semibold text-emerald-900"
          >
            {title}
          </h2>
          <p className="mt-1 text-sm text-gray-700">{intro}</p>
          <p className="mt-1 text-xs text-gray-500">{helper}</p>
        </header>

        {/* Input row */}
        <div className="mb-4 grid gap-3 md:grid-cols-[2fr,1.2fr,1.3fr,auto] text-xs md:text-sm">
          <div>
            <label className="mb-1 block text-[11px] font-medium text-gray-700">
              {docLabel}
            </label>
            <input
              type="text"
              value={docType}
              onChange={(e) => setDocType(e.target.value)}
              className="w-full rounded-md border-gray-300 text-sm focus:border-emerald-500 focus:ring-emerald-500"
              placeholder={
                isItalian
                  ? "Es. Lettera council, lettera GP..."
                  : "e.g. Council letter, GP letter..."
              }
            />
          </div>
          <div>
            <label className="mb-1 block text-[11px] font-medium text-gray-700">
              {issueLabel}
            </label>
            <input
              type="date"
              value={issueDate}
              onChange={(e) => setIssueDate(e.target.value)}
              className="w-full rounded-md border-gray-300 text-sm focus:border-emerald-500 focus:ring-emerald-500"
            />
          </div>
          <div>
            <label className="mb-1 block text-[11px] font-medium text-gray-700">
              {validityLabel}
            </label>
            <select
              value={validityMonths}
              onChange={(e) => setValidityMonths(Number(e.target.value))}
              className="w-full rounded-md border-gray-300 text-sm focus:border-emerald-500 focus:ring-emerald-500"
            >
              {validityOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-end">
            <button
              type="button"
              onClick={handleAdd}
              className="inline-flex w-full items-center justify-center rounded-md bg-emerald-700 px-3 py-2 text-xs md:text-sm font-semibold text-white shadow-sm hover:bg-emerald-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              {addButton}
            </button>
          </div>
        </div>

        {/* Table */}
        {rows.length === 0 ? (
          <p className="mt-2 text-xs text-gray-500">
            {isItalian
              ? "Aggiungi 1–3 documenti che userai come prova di indirizzo per capire quando potrebbe servirti una versione aggiornata."
              : "Add 1–3 documents you plan to use as proof of address to see when you might need fresher versions."}
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full text-xs md:text-sm border-t border-gray-200">
              <thead className="bg-neutral-50">
                <tr className="[&>th]:px-3 [&>th]:py-2 [&>th]:text-left [&>th]:text-[11px] [&>th]:font-semibold [&>th]:text-gray-700">
                  <th>{docLabel}</th>
                  <th>{issueLabel}</th>
                  <th>{validityLabel}</th>
                  <th>{isItalian ? "Stato" : "Status"}</th>
                  <th className="text-right">
                    {isItalian ? "Azioni" : "Actions"}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {rows.map((row) => {
                  const months = monthsBetween(row.issueDate);
                  const status = getStatus(row);

                  return (
                    <tr key={row.id} className="[&>td]:px-3 [&>td]:py-2">
                      <td className="align-top">{row.docType}</td>
                      <td className="align-top">
                        {row.issueDate || (isItalian ? "—" : "—")}
                        {months !== null && (
                          <span className="mt-0.5 block text-[11px] text-gray-500">
                            {isItalian
                              ? `Circa ${months} mesi fa`
                              : `About ${months} month(s) ago`}
                          </span>
                        )}
                      </td>
                      <td className="align-top">
                        {row.validityMonths}{" "}
                        {isItalian ? "mesi indicativi" : "months guideline"}
                      </td>
                      <td className="align-top">
                        <span
                          className={`inline-flex rounded-full border px-2 py-[2px] text-[11px] font-medium ${statusClass(
                            status.tone,
                          )}`}
                        >
                          {status.label}
                        </span>
                      </td>
                      <td className="align-top text-right">
                        <button
                          type="button"
                          onClick={() => handleRemove(row.id)}
                          className="text-[11px] font-medium text-gray-500 hover:text-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded"
                        >
                          {isItalian ? "Rimuovi" : "Remove"}
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}
