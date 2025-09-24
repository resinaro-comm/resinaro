// src/components/CookiePreferencesClient.tsx
"use client";

import { useEffect, useState } from "react";

/**
 * Minimal client-side cookie preferences component.
 * - Keeps UI and event handlers client-side (fixes the server runtime error).
 * - Demonstrates saving preferences to localStorage.
 * Replace the save/decline logic with your real consent-manager integration.
 */

type Prefs = {
  performance: boolean;
  marketing: boolean;
};

const DEFAULT_PREFS: Prefs = { performance: true, marketing: true };

export default function CookiePreferencesClient({
  initialPrefs,
}: {
  initialPrefs?: Prefs | null;
}) {
  const [prefs, setPrefs] = useState<Prefs>(() => {
    // Use initialPrefs (when passed) otherwise read from localStorage
    if (typeof window === "undefined") return DEFAULT_PREFS;
    try {
      const raw = window.localStorage.getItem("resinaro_cookie_preferences");
      return raw ? (JSON.parse(raw) as Prefs) : initialPrefs ?? DEFAULT_PREFS;
    } catch {
      return initialPrefs ?? DEFAULT_PREFS;
    }
  });

  // Keep a small mounted flag for safety
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  function save(p: Prefs) {
    try {
      window.localStorage.setItem("resinaro_cookie_preferences", JSON.stringify(p));
      // TODO: Replace with real consent manager integration:
      // e.g. enable/disable analytics scripts, or call CMP API.
      // Example placeholder:
      if (p.performance) {
        // loadAnalytics();
      } else {
        // unloadAnalytics();
      }
      setPrefs(p);
      // subtle UX feedback - replace with toast/inline message in real UI:
      alert("Preferences saved (demo). Replace this with your consent manager integration.");
    } catch (err) {
      console.error("Failed to save cookie preferences", err);
      alert("Unable to save preferences in this browser.");
    }
  }

  function handleSave() {
    save(prefs);
  }

  function handleDeclineNonEssential() {
    save({ performance: false, marketing: false });
  }

  if (!mounted) {
    // avoid hydration mismatch by rendering nothing until mounted
    return null;
  }

  return (
    <div className="mt-6 bg-gray-50 border border-gray-200 rounded-lg p-4">
      <p className="font-semibold">Cookie preferences</p>
      <p className="text-sm text-gray-600 mt-2">
        Choose which cookies you allow. Essential cookies are always required.
      </p>

      <div className="mt-4 space-y-3">
        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={prefs.performance}
            onChange={(e) => setPrefs({ ...prefs, performance: e.target.checked })}
            className="w-4 h-4"
          />
          <span className="text-sm">Performance (analytics)</span>
        </label>

        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={prefs.marketing}
            onChange={(e) => setPrefs({ ...prefs, marketing: e.target.checked })}
            className="w-4 h-4"
          />
          <span className="text-sm">Marketing (personalised ads)</span>
        </label>
      </div>

      <div className="mt-4 flex gap-3">
        <button
          onClick={handleSave}
          className="rounded-lg bg-green-900 text-white px-4 py-2 shadow hover:bg-green-800"
        >
          Save preferences
        </button>
        <button
          onClick={handleDeclineNonEssential}
          className="rounded-lg border border-gray-300 px-4 py-2"
        >
          Decline non-essential
        </button>
      </div>

      <p className="mt-3 text-sm text-gray-500">
        Note: This component is a demo. To actually block third-party scripts you must integrate with your consent manager or conditionally load scripts based on these preferences.
      </p>
    </div>
  );
}
