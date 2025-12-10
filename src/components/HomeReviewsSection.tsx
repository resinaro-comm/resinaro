// src/components/HomeReviewsSection.tsx
"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

const ENDPOINT = process.env.NEXT_PUBLIC_REVIEWS_ENDPOINT || "";

type Locale = "en" | "it";

interface Review {
  id: string;
  service: string;
  quote: string;
  name: string;
  city: string;
}

const INITIAL_REVIEWS_EN: Review[] = [
  {
    id: "1",
    service: "Passport appointments",
    quote:
      "They found a passport slot when I’d been trying for weeks. Clear instructions and screenshots of every step.",
    name: "Francesca",
    city: "Manchester",
  },
  {
    id: "2",
    service: "AIRE registration",
    quote:
      "AIRE had been stuck for months. With their checklist and follow-up emails it finally moved forward.",
    name: "Luca",
    city: "London",
  },
  {
    id: "3",
    service: "Translations & consulate admin",
    quote:
      "They handled the translations and explained what the consulate actually checks. Much less stress.",
    name: "Chiara & Tom",
    city: "Bristol",
  },
];

const INITIAL_REVIEWS_IT: Review[] = [
  {
    id: "1",
    service: "Appuntamenti passaporto",
    quote:
      "Mi hanno trovato uno slot per il passaporto dopo settimane di tentativi. Istruzioni chiare e screenshot di ogni passaggio.",
    name: "Francesca",
    city: "Manchester",
  },
  {
    id: "2",
    service: "Iscrizione AIRE",
    quote:
      "La mia pratica AIRE era ferma da mesi. Con la loro checklist e le email di follow-up si è finalmente sbloccata.",
    name: "Luca",
    city: "Londra",
  },
  {
    id: "3",
    service: "Traduzioni e burocrazia consolato",
    quote:
      "Hanno gestito le traduzioni e spiegato cosa controlla davvero il consolato. Molto meno stress.",
    name: "Chiara & Tom",
    city: "Bristol",
  },
];

export function HomeReviewsSection() {
  const pathname = usePathname() || "/";
  const locale: Locale = pathname.split("/")[1] === "it" ? "it" : "en";
  const isIt = locale === "it";

  const reviews = isIt ? INITIAL_REVIEWS_IT : INITIAL_REVIEWS_EN;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState<number | null>(null);

  const [busy, setBusy] = useState(false);
  const [info, setInfo] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setInfo(null);

    if (!name.trim()) {
      setError(isIt ? "Scrivi il tuo nome." : "Please add your name.");
      return;
    }

    if (!rating) {
      setError(
        isIt
          ? "Scegli quante stelle vuoi lasciare (1–5)."
          : "Please choose how many stars to leave (1–5).",
      );
      return;
    }

    if (!text.trim()) {
      setError(
        isIt
          ? "Scrivi almeno due righe sulla tua esperienza."
          : "Please write at least a couple of lines about your experience.",
      );
      return;
    }

    if (!ENDPOINT) {
      setError(
        isIt
          ? "Modulo non ancora collegato. Per ora scrivici via pagina Contatti."
          : "Review form isn’t wired up yet. For now, please contact us via the Contact page.",
      );
      return;
    }

    setBusy(true);

    try {
      const body = new URLSearchParams({
        name: name.trim(),
        email: email.trim(),
        service: service || "other",
        text: text.trim(),
        rating: rating.toString(),
        locale,
        source: "homepage-reviews",
      });

      await fetch(ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type":
            "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: body.toString(),
      }).catch(() => {
        // ignore network errors; we still show a success message client-side
      });

      setInfo(
        isIt
          ? "Grazie! Abbiamo ricevuto la tua recensione. Ne leggiamo ogni singola."
          : "Thank you! Your review has been received. We read every single one.",
      );
      setName("");
      setEmail("");
      setService("");
      setText("");
      setRating(null);
    } finally {
      setBusy(false);
    }
  };

  return (
    <section className="border-t border-emerald-100 bg-[#F5F3EC] py-14 md:py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 md:flex-row">
        {/* LEFT: existing reviews & summary */}
        <div className="md:w-1/2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
            {isIt ? "Esperienze reali" : "Real experiences"}
          </p>
          <div className="mt-1 flex items-center gap-2 text-xs text-emerald-900">
            <div className="flex items-center gap-0.5 text-lg">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
            <span className="text-[11px]">
              {isIt
                ? "Media 4,9/5 da clienti reali"
                : "Average 4.9/5 rating from real clients"}
            </span>
          </div>

          <h2 className="mt-3 text-2xl font-extrabold text-emerald-950 md:text-[28px]">
            {isIt
              ? "Cosa dicono le persone su Resinaro"
              : "What people say about Resinaro"}
          </h2>
          <p className="mt-2 max-w-md text-sm text-gray-800">
            {isIt
              ? "Recensioni di persone che abbiamo aiutato con appuntamenti, traduzioni e pratiche consolari. Puoi lasciare anche la tua – leggiamo ogni messaggio."
              : "Reviews from people we’ve helped with appointments, translations and consulate admin. You can leave yours too – we read every single one."}
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-1">
            {reviews.map((r) => (
              <article
                key={r.id}
                className="rounded-2xl border border-emerald-100 bg-white p-4 shadow-sm"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-800">
                  {r.service.toUpperCase()}
                </p>
                <p className="mt-2 text-sm text-gray-900">
                  <span className="text-lg text-emerald-500" aria-hidden>
                    “
                  </span>
                  {r.quote}
                  <span className="text-lg text-emerald-500" aria-hidden>
                    ”
                  </span>
                </p>
                <p className="mt-3 text-xs font-medium text-gray-600">
                  {r.name} · {r.city}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-4 text-[11px] text-gray-600">
            {isIt ? (
              <>
                Se mostriamo la tua recensione sul sito, vedrai solo{" "}
                <span className="font-medium">il tuo nome di battesimo</span> e
                la città. L’email e il cognome non vengono mai pubblicati.
              </>
            ) : (
              <>
                If we feature your review on the site, we only show your{" "}
                <span className="font-medium">first name</span> and city. Your
                email and surname are never published.
              </>
            )}
          </p>
        </div>

        {/* RIGHT: review form with star rating */}
        <div className="md:w-1/2">
          <div className="rounded-3xl border border-emerald-100 bg-white p-5 shadow-sm md:p-6">
            <h3 className="text-base font-semibold text-emerald-950">
              {isIt ? "Lascia una recensione" : "Leave a review"}
            </h3>
            <p className="mt-1 text-xs text-gray-700">
              {isIt
                ? "Bastano poche righe. Usiamo le recensioni per migliorare e dare agli altri un’idea realistica del nostro aiuto."
                : "Just a few lines is enough. We use reviews to improve and give others a realistic idea of our help."}
            </p>

            <form className="mt-4 space-y-3" onSubmit={handleSubmit}>
              {/* Overall rating */}
              <fieldset className="space-y-1">
                <legend className="text-xs font-semibold text-gray-800">
                  {isIt
                    ? "Valutazione complessiva"
                    : "Overall rating (1–5 stars)"}
                </legend>
                <div className="flex items-center gap-1.5">
                  {[1, 2, 3, 4, 5].map((value) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => setRating(value)}
                      className={`flex h-8 w-8 items-center justify-center rounded-full border text-base transition ${
                        rating && value <= rating
                          ? "border-emerald-600 bg-emerald-50 text-emerald-700"
                          : "border-emerald-100 bg-white text-gray-400 hover:border-emerald-300 hover:text-emerald-500"
                      }`}
                      aria-label={
                        isIt
                          ? `${value} stelle`
                          : `${value} star${value > 1 ? "s" : ""}`
                      }
                    >
                      <span aria-hidden>
                        {rating && value <= rating ? "★" : "☆"}
                      </span>
                    </button>
                  ))}
                  <span className="ml-2 text-xs text-gray-600">
                    {rating
                      ? `${rating}/5`
                      : isIt
                      ? "Seleziona da 1 a 5"
                      : "Choose 1–5"}
                  </span>
                </div>
              </fieldset>

              {/* Name */}
              <div className="space-y-1">
                <label
                  htmlFor="review-name"
                  className="text-xs font-semibold text-gray-800"
                >
                  {isIt ? "Nome" : "Name"}
                </label>
                <input
                  id="review-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-9 w-full rounded-xl border border-emerald-100 px-3 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              {/* Email */}
              <div className="space-y-1">
                <label
                  htmlFor="review-email"
                  className="text-xs font-semibold text-gray-800"
                >
                  {isIt
                    ? "Email (non verrà mostrata)"
                    : "Email (won’t be shown)"}
                </label>
                <input
                  id="review-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-9 w-full rounded-xl border border-emerald-100 px-3 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              {/* Service */}
              <div className="space-y-1">
                <label
                  htmlFor="review-service"
                  className="text-xs font-semibold text-gray-800"
                >
                  {isIt
                    ? "Per cosa ti abbiamo aiutato?"
                    : "What did we help with?"}
                </label>
                <select
                  id="review-service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="h-9 w-full rounded-xl border border-emerald-100 bg-white px-3 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="">
                    {isIt ? "Seleziona (opzionale)" : "Select (optional)"}
                  </option>
                  <option value="passport">
                    {isIt ? "Passaporto / Prenot@Mi" : "Passport / Prenot@Mi"}
                  </option>
                  <option value="aire">
                    {isIt ? "AIRE" : "AIRE registration"}
                  </option>
                  <option value="translation">
                    {isIt ? "Traduzioni" : "Translations"}
                  </option>
                  <option value="citizenship">
                    {isIt ? "Cittadinanza" : "Citizenship support"}
                  </option>
                  <option value="other">
                    {isIt ? "Altro" : "Other"}
                  </option>
                </select>
              </div>

              {/* Experience text */}
              <div className="space-y-1">
                <label
                  htmlFor="review-text"
                  className="text-xs font-semibold text-gray-800"
                >
                  {isIt ? "La tua esperienza" : "Your experience"}
                </label>
                <textarea
                  id="review-text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  rows={5}
                  className="w-full rounded-xl border border-emerald-100 px-3 py-2 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              {error && (
                <p className="text-xs text-red-700">
                  {error}
                </p>
              )}
              {info && !error && (
                <p className="text-xs text-emerald-800">
                  {info}
                </p>
              )}

              <p className="text-[11px] text-gray-600">
                {isIt ? (
                  <>
                    Compili tutto in 30 secondi. La recensione va in un foglio
                    protetto; scegliamo a mano qualche frase da mostrare sul
                    sito. Pubblicheremo solo il tuo{" "}
                    <span className="font-medium">nome (non il cognome)</span> e
                    la città, mai l’email.
                  </>
                ) : (
                  <>
                    This takes about 30 seconds. Your review goes to a protected
                    sheet; we hand-pick a few short quotes to show on the site.
                    We only ever show your{" "}
                    <span className="font-medium">first name</span> and city,
                    never your surname or email.
                  </>
                )}
              </p>

              <button
                type="submit"
                disabled={busy}
                className={`mt-2 inline-flex h-10 w-full items-center justify-center rounded-xl text-sm font-semibold text-white ${
                  busy
                    ? "cursor-not-allowed bg-emerald-400"
                    : "bg-emerald-700 hover:bg-emerald-800"
                }`}
              >
                {busy
                  ? isIt
                    ? "Invio…"
                    : "Sending…"
                  : isIt
                  ? "Invia recensione"
                  : "Send review"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
