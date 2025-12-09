// src/components/community/address-proof/AddressProofChecklist.tsx
"use client";

import React, { useMemo, useState } from "react";

type SupportedLocale = "en" | "it";

type AddressProofChecklistProps = {
  /** Optional locale for EN/IT copy. Defaults to "en". */
  locale?: SupportedLocale;
};

type ChecklistItem = {
  id: string;
  labelEn: string;
  labelIt: string;
  helperEn?: string;
  helperIt?: string;
};

const ITEMS: ChecklistItem[] = [
  {
    id: "id-doc",
    labelEn: "I have a valid passport or BRP.",
    labelIt: "Ho un passaporto valido o una BRP.",
  },
  {
    id: "address-known",
    labelEn: "I know my full UK address and postcode.",
    labelIt: "Conosco il mio indirizzo UK completo e il postcode.",
    helperEn: "Exactly as it appears (or will appear) on official letters.",
    helperIt: "Esattamente come compare (o comparirà) sulle lettere ufficiali.",
  },
  {
    id: "can-receive-mail",
    labelEn: "I can receive letters in my own name at this address.",
    labelIt: "Posso ricevere lettere a mio nome a questo indirizzo.",
    helperEn: "Mailbox label, bell or C/O arrangement in place.",
    helperIt: "Nome sul campanello/cassetta o accordo C/O già impostato.",
  },
  {
    id: "tenancy-or-host",
    labelEn: "I have or can get a tenancy / lodger agreement or host note.",
    labelIt:
      "Ho o posso ottenere un contratto di affitto / lodger agreement o nota dell’ospitante.",
  },
  {
    id: "employer-or-gp",
    labelEn: "I can ask my employer, GP or council for a simple letter.",
    labelIt:
      "Posso chiedere una lettera semplice al datore di lavoro, al GP o al council.",
  },
];

export default function AddressProofChecklist({
  locale = "en",
}: AddressProofChecklistProps) {
  const [checkedIds, setCheckedIds] = useState<string[]>([]);

  const isItalian = locale === "it";

  const progress = useMemo(() => {
    if (ITEMS.length === 0) return 0;
    return Math.round((checkedIds.length / ITEMS.length) * 100);
  }, [checkedIds.length]);

  const handleToggle = (id: string) => {
    setCheckedIds((prev) =>
      prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id],
    );
  };

  const title = isItalian
    ? "Pronto per iniziare?"
    : "Ready to start building your proof of address?";
  const subtitle = isItalian
    ? "Spunta questi punti rapidi. Più sei preparato ora, meno rifiuti e email indietro dopo."
    : "Tick these quick items. The more prepared you are now, the fewer rejections and back-and-forth emails later.";
  const progressLabel = isItalian ? "Completato" : "Complete";
  const allDoneTitle = isItalian
    ? "Hai tutto per iniziare 🎉"
    : "You’re ready to start 🎉";
  const allDoneBody = isItalian
    ? "Ora puoi seguire i passi della guida per costruire il tuo “evidence bundle” di prova di indirizzo."
    : "Now you can follow the steps in this guide to build your proof-of-address evidence bundle.";

  return (
    <section
      aria-labelledby="address-proof-checklist-heading"
      className="mb-8"
    >
      <div className="rounded-2xl border bg-white/90 shadow-sm p-5 md:p-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xl">
            <h2
              id="address-proof-checklist-heading"
              className="text-lg md:text-xl font-semibold text-emerald-900"
            >
              {title}
            </h2>
            <p className="mt-1 text-sm text-gray-700">{subtitle}</p>
          </div>
          <div className="mt-2 md:mt-0 min-w-[160px]">
            <p className="text-xs font-medium text-gray-600 mb-1">
              {progressLabel}: {progress}%
            </p>
            <div
              className="h-2 w-full rounded-full bg-gray-200"
              aria-hidden="true"
            >
              <div
                className="h-2 rounded-full bg-emerald-600 transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        <div className="mt-4 space-y-3">
          {ITEMS.map((item) => {
            const checked = checkedIds.includes(item.id);
            const label = isItalian ? item.labelIt : item.labelEn;
            const helper = isItalian
              ? item.helperIt ?? item.helperEn
              : item.helperEn ?? item.helperIt;

            return (
              <label
                key={item.id}
                className="flex items-start gap-3 rounded-xl border border-gray-200 bg-neutral-50 px-3 py-2.5 text-sm hover:border-emerald-300 cursor-pointer transition"
              >
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 rounded border-gray-300 text-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                  checked={checked}
                  onChange={() => handleToggle(item.id)}
                  aria-checked={checked}
                />
                <span>
                  <span className="font-medium text-gray-900">{label}</span>
                  {helper && (
                    <span className="mt-0.5 block text-[12px] text-gray-600">
                      {helper}
                    </span>
                  )}
                </span>
              </label>
            );
          })}
        </div>

        {checkedIds.length === ITEMS.length && (
          <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2.5 text-sm">
            <p className="font-semibold text-emerald-900">{allDoneTitle}</p>
            <p className="text-gray-700 text-xs mt-0.5">{allDoneBody}</p>
          </div>
        )}
      </div>
    </section>
  );
}
