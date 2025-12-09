"use client";

import { useState } from "react";

const checklistItems = [
  "I have a valid passport or BRP with me.",
  "I have a UK mobile number that can receive SMS.",
  "I have an address in the UK where I can receive the card.",
  "I understand I may be asked for a proof of address document.",
];

export default function ReadyToApplyChecklist() {
  const [checked, setChecked] = useState<boolean[]>(
    new Array(checklistItems.length).fill(false)
  );

  const completedCount = checked.filter(Boolean).length;
  const progress = Math.round((completedCount / checklistItems.length) * 100);

  return (
    <section
      id="monzo-checklist"
      className="mt-8 bg-white border border-gray-200 rounded-xl p-5 shadow-sm"
      aria-labelledby="ready-to-apply-title"
    >
      <h2
        id="ready-to-apply-title"
        className="text-xl font-semibold text-green-900 mb-2"
      >
        Ready to apply? Quick self-check
      </h2>
      <p className="text-sm text-gray-700 mb-3">
        Spunta questi punti prima di iniziare la registrazione in app. It won&apos;t
        guarantee approval, but it reduces the most common problems people have
        when opening Monzo or other app-based UK banks.
      </p>

      <div className="mb-3 h-2 w-full bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-green-700 transition-all"
          style={{ width: `${progress}%` }}
          aria-hidden="true"
        />
      </div>

      <p className="text-xs text-gray-600 mb-3">
        Checklist progress: {completedCount}/{checklistItems.length} ({progress}
        %)
      </p>

      <ul className="space-y-2">
        {checklistItems.map((item, index) => (
          <li key={item} className="flex items-start gap-2">
            <input
              id={`monzo-check-${index}`}
              type="checkbox"
              className="mt-1 h-4 w-4 rounded border-gray-300 text-green-700 focus:ring-green-700"
              checked={checked[index]}
              onChange={() => {
                const next = [...checked];
                next[index] = !next[index];
                setChecked(next);
              }}
            />
            <label
              htmlFor={`monzo-check-${index}`}
              className="text-sm text-gray-800 cursor-pointer"
            >
              {item}
            </label>
          </li>
        ))}
      </ul>
    </section>
  );
}
