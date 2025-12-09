// src/components/community/address-proof/AddressProofBuilder.tsx
"use client";

import React, { useMemo, useState } from "react";

type SupportedLocale = "en" | "it";

type Strength = "strong" | "supporting";

type ProofDoc = {
  id: string;
  strength: Strength;
  group: "bank" | "housing" | "employer" | "government" | "other";
  labelEn: string;
  labelIt: string;
  hintEn?: string;
  hintIt?: string;
};

type AddressProofBuilderProps = {
  locale?: SupportedLocale;
};

const DOCS: ProofDoc[] = [
  // BANK
  {
    id: "bank-welcome",
    group: "bank",
    strength: "strong",
    labelEn: "Bank welcome / confirmation letter to your address",
    labelIt: "Welcome letter / lettera di conferma della banca a casa tua",
    hintEn: "Ordered through your bank app or branch.",
    hintIt: "Richiesta tramite app della banca o filiale.",
  },
  {
    id: "bank-statement",
    group: "bank",
    strength: "supporting",
    labelEn: "Recent bank statement (PDF or post) with full address",
    labelIt:
      "Estratto conto recente (PDF o cartaceo) con indirizzo completo",
  },

  // HOUSING
  {
    id: "tenancy",
    group: "housing",
    strength: "strong",
    labelEn: "Tenancy / lodger agreement in your name",
    labelIt: "Contratto di affitto / lodger agreement a tuo nome",
  },
  {
    id: "landlord-letter",
    group: "housing",
    strength: "strong",
    labelEn: "Landlord / agency address confirmation letter",
    labelIt: "Lettera di conferma indirizzo da landlord / agenzia",
  },
  {
    id: "host-note",
    group: "housing",
    strength: "supporting",
    labelEn: "C/O host permission note + your name on mailbox",
    labelIt: "Nota di permesso C/O dell’ospitante + nome sulla cassetta",
  },

  // EMPLOYER / EDUCATION
  {
    id: "employer-letter",
    group: "employer",
    strength: "strong",
    labelEn: "Employer letter on headed paper with your address",
    labelIt: "Lettera del datore di lavoro su carta intestata con indirizzo",
  },
  {
    id: "university-letter",
    group: "employer",
    strength: "supporting",
    labelEn: "University / college enrolment letter with address",
    labelIt:
      "Lettera di iscrizione università / college con il tuo indirizzo",
  },

  // GOVERNMENT / NHS
  {
    id: "council-tax",
    group: "government",
    strength: "strong",
    labelEn: "Council Tax bill / general council letter",
    labelIt: "Council Tax bill / lettera generica del council",
  },
  {
    id: "hmrc-letter",
    group: "government",
    strength: "strong",
    labelEn: "HMRC or other UK government letter",
    labelIt: "Lettera HMRC o di altro ente governativo UK",
  },
  {
    id: "gp-letter",
    group: "government",
    strength: "supporting",
    labelEn: "GP registration / NHS letter with address",
    labelIt: "Lettera di registrazione GP / NHS con indirizzo",
  },

  // OTHER
  {
    id: "utilities",
    group: "other",
    strength: "supporting",
    labelEn: "Mobile / broadband / utility contract in your name",
    labelIt:
      "Contratto mobile / broadband / utenze intestato a te",
  },
  {
    id: "insurance",
    group: "other",
    strength: "supporting",
    labelEn: "Insurance schedule (car / home / contents)",
    labelIt: "Polizza assicurativa (auto / casa / contenuti)",
  },
];

export default function AddressProofBuilder({
  locale = "en",
}: AddressProofBuilderProps) {
  const [selected, setSelected] = useState<string[]>([]);
  const isItalian = locale === "it";

  const toggle = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id],
    );
  };

  const { strongCount, supportingCount } = useMemo(() => {
    let strong = 0;
    let supporting = 0;
    for (const doc of DOCS) {
      if (!selected.includes(doc.id)) continue;
      if (doc.strength === "strong") strong += 1;
      else supporting += 1;
    }
    return { strongCount: strong, supportingCount: supporting };
  }, [selected]);

  const recommendation = useMemo(() => {
    if (isItalian) {
      if (strongCount >= 2 && supportingCount >= 1) {
        return {
          title: "Ottimo pacchetto di prove ✅",
          body:
            "Hai già almeno due documenti forti e uno di supporto. Per molte banche / enti questo è più che sufficiente; controlla sempre la lista ufficiale prima di inviare.",
        };
      }
      if (strongCount === 1 && supportingCount >= 2) {
        return {
          title: "Quasi pronto, aggiungi un altro documento forte",
          body:
            "Prova a ottenere un secondo documento forte (per esempio council, banca o contratto di affitto) per rendere il pacchetto più sicuro.",
        };
      }
      if (strongCount === 0) {
        return {
          title: "Inizia da un documento forte",
          body:
            "Concentrati prima su un contratto di affitto, una lettera del datore di lavoro o una lettera ufficiale del council / governo. Poi aggiungi 1–2 prove di supporto.",
        };
      }
      return {
        title: "Buon inizio",
        body:
          "Continua ad aggiungere documenti forti e di supporto. In generale punta a 2 prove forti + 1–2 di supporto.",
      };
    }

    // English
    if (strongCount >= 2 && supportingCount >= 1) {
      return {
        title: "Solid bundle ✅",
        body:
          "You already have at least two strong proofs and one supporting document. For many banks/services this is more than enough – always double-check their official list before sending.",
      };
    }
    if (strongCount === 1 && supportingCount >= 2) {
      return {
        title: "Almost there – add one more strong proof",
        body:
          "Try to secure a second strong document (for example council letter, bank letter or tenancy) to make your bundle more robust.",
      };
    }
    if (strongCount === 0) {
      return {
        title: "Start with one strong document",
        body:
          "Focus on getting a tenancy agreement, employer letter or council/government letter first. Then add 1–2 supporting proofs.",
      };
    }
    return {
      title: "Good start",
      body:
        "Keep adding strong and supporting docs. As a rule of thumb, aim for 2 strong proofs + 1–2 supporting documents.",
    };
  }, [isItalian, strongCount, supportingCount]);

  const title = isItalian
    ? "Costruisci il tuo pacchetto di prove"
    : "Build your proof-of-address bundle";
  const intro = isItalian
    ? "Spunta i documenti che hai già o che puoi ottenere facilmente. Sotto vedi un piccolo piano su cosa aggiungere."
    : "Tick the documents you already have or can realistically get soon. Below you’ll see a short plan for what to add next.";
  const strongLabel = isItalian ? "Documenti forti" : "Strong documents";
  const supportingLabel = isItalian
    ? "Documenti di supporto"
    : "Supporting documents";

  return (
    <section
      aria-labelledby="address-proof-builder-heading"
      className="mb-10"
    >
      <div className="rounded-2xl border bg-white shadow-sm p-5 md:p-6">
        <header className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
          <div>
            <h2
              id="address-proof-builder-heading"
              className="text-xl md:text-2xl font-semibold text-emerald-900"
            >
              {title}
            </h2>
            <p className="mt-1 text-sm text-gray-700">{intro}</p>
          </div>
          <div className="mt-2 md:mt-0 text-xs text-gray-600">
            <p>
              {strongLabel}:{" "}
              <span className="font-semibold text-emerald-900">
                {strongCount}
              </span>
            </p>
            <p>
              {supportingLabel}:{" "}
              <span className="font-semibold text-emerald-900">
                {supportingCount}
              </span>
            </p>
          </div>
        </header>

        <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3 text-sm">
          {["bank", "housing", "employer", "government", "other"].map(
            (groupKey) => {
              const groupDocs = DOCS.filter((d) => d.group === groupKey);
              if (groupDocs.length === 0) return null;

              const groupTitle = (() => {
                if (isItalian) {
                  switch (groupKey) {
                    case "bank":
                      return "Banca";
                    case "housing":
                      return "Affitto / alloggio";
                    case "employer":
                      return "Lavoro / studio";
                    case "government":
                      return "Governo / NHS";
                    default:
                      return "Altre prove";
                  }
                } else {
                  switch (groupKey) {
                    case "bank":
                      return "Bank";
                    case "housing":
                      return "Housing";
                    case "employer":
                      return "Work / study";
                    case "government":
                      return "Government / NHS";
                    default:
                      return "Other proofs";
                  }
                }
              })();

              return (
                <div
                  key={groupKey}
                  className="rounded-xl border border-gray-200 bg-neutral-50/70 p-3"
                >
                  <h3 className="mb-1 text-sm font-semibold text-emerald-900">
                    {groupTitle}
                  </h3>
                  <div className="space-y-2">
                    {groupDocs.map((doc) => {
                      const checked = selected.includes(doc.id);
                      const label = isItalian ? doc.labelIt : doc.labelEn;
                      const hint = isItalian
                        ? doc.hintIt ?? doc.hintEn
                        : doc.hintEn ?? doc.hintIt;
                      const badgeText =
                        doc.strength === "strong"
                          ? isItalian
                            ? "forte"
                            : "strong"
                          : isItalian
                            ? "supporto"
                            : "support";

                      return (
                        <label
                          key={doc.id}
                          className="flex items-start gap-2 rounded-lg border border-gray-200 bg-white px-2.5 py-2 hover:border-emerald-300 cursor-pointer transition"
                        >
                          <input
                            type="checkbox"
                            className="mt-1 h-4 w-4 rounded border-gray-300 text-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                            checked={checked}
                            onChange={() => toggle(doc.id)}
                            aria-checked={checked}
                          />
                          <span className="flex-1">
                            <span className="flex items-center gap-1.5">
                              <span className="font-medium text-gray-900">
                                {label}
                              </span>
                              <span className="inline-flex items-center rounded-full bg-emerald-50 px-2 py-[2px] text-[10px] font-semibold uppercase tracking-wide text-emerald-800">
                                {badgeText}
                              </span>
                            </span>
                            {hint && (
                              <span className="mt-0.5 block text-[11px] text-gray-600">
                                {hint}
                              </span>
                            )}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </div>
              );
            },
          )}
        </div>

        <div className="mt-5 rounded-xl border border-emerald-100 bg-emerald-50 px-3 py-3 text-sm">
          <p className="font-semibold text-emerald-900">
            {recommendation.title}
          </p>
          <p className="mt-1 text-gray-800 text-xs md:text-sm">
            {recommendation.body}
          </p>
        </div>
      </div>
    </section>
  );
}
