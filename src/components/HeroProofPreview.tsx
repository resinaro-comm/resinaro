"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { AppointmentProofCase } from "@/content/appointmentProofCases";

type Props = {
  cases: AppointmentProofCase[];
  locale: "en" | "it";
  label: string;
  caption: string;
};

export default function HeroProofPreview({
  cases,
  locale,
  label,
  caption,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [zoomed, setZoomed] = useState(false);

  const total = cases?.length ?? 0;

  // Keyboard shortcuts for overlay
  useEffect(() => {
    if (!isOpen || !cases || cases.length === 0) return;

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setIsOpen(false);
        setZoomed(false);
      }
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    }

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, total]);

  if (!cases || cases.length === 0) return null;

  const current = cases[index] ?? cases[0];

  const next = () => {
    setZoomed(false);
    setIndex((prev) => (prev + 1) % total);
  };
  const prev = () => {
    setZoomed(false);
    setIndex((prev) => (prev - 1 + total) % total);
  };

  const openLabel =
    locale === "it"
      ? "Clicca per vedere meglio gli appuntamenti"
      : "Click to see these appointments in detail";

  const counterLabel =
    locale === "it"
      ? `${index + 1} di ${total} appuntamenti`
      : `${index + 1} of ${total} appointments`;

  const privacyLine =
    locale === "it"
      ? "Dati dei clienti oscurati. Gli appuntamenti sono stati prenotati negli account reali dei clienti su Prenot@Mi."
      : "Client details are blurred. All appointments were booked inside real client Prenot@Mi accounts.";

  const zoomHint =
    locale === "it"
      ? "Clicca sull’immagine per ingrandire e scorri per vedere tutti i dettagli."
      : "Click the image to zoom and scroll to see all details.";

  const closeOverlay = () => {
    setIsOpen(false);
    setZoomed(false);
  };

  return (
    <>
      {/* HERO CARD PREVIEW */}
      <div className="rounded-2xl border border-emerald-100 bg-emerald-50/50 p-3">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-emerald-900">
          {label}
        </p>

        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="mt-2 block w-full overflow-hidden rounded-xl bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2 focus:ring-offset-emerald-50"
        >
          <div className="relative h-40 w-full sm:h-44">
            <Image
              src={current.image}
              alt={current.alt[locale]}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
            <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between gap-2 text-[10px] text-emerald-50">
              <span className="font-medium">{openLabel}</span>
              <span className="rounded-full bg-black/40 px-2 py-0.5">
                {counterLabel}
              </span>
            </div>
          </div>
        </button>

        <p className="mt-2 text-[11px] leading-snug text-emerald-900/80">
          {caption}
        </p>
      </div>

      {/* FULLSCREEN OVERLAY GALLERY */}
      {isOpen && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/80 px-2 py-4 sm:px-4">
          <div className="relative flex h-[92vh] w-full max-w-6xl flex-col rounded-2xl bg-neutral-950/95 shadow-xl">
            {/* Top bar */}
            <header className="flex items-center justify-between gap-3 border-b border-neutral-800 px-3 py-2 text-[11px] text-neutral-100 sm:px-4">
              <div className="flex flex-col">
                <span className="font-semibold uppercase tracking-[0.16em]">
                  {label}
                </span>
                <span className="mt-0.5 text-[11px] text-neutral-300">
                  {counterLabel}
                </span>
              </div>
              <button
                type="button"
                onClick={closeOverlay}
                className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-neutral-700 bg-neutral-900 text-xs hover:bg-neutral-800"
                aria-label={
                  locale === "it" ? "Chiudi galleria" : "Close gallery"
                }
              >
                ×
              </button>
            </header>

            {/* Image area (click-to-zoom + scroll) */}
            <div
              className="relative flex-1 overflow-auto bg-black cursor-zoom-in"
              onClick={() => setZoomed((z) => !z)}
            >
              <div className="flex min-h-full items-center justify-center">
                <Image
                  src={current.image}
                  alt={current.alt[locale]}
                  width={1600}
                  height={1000}
                  className={`h-auto ${
                    zoomed
                      ? "w-[1500px] max-w-none" // zoomed: allow horizontal scroll on desktop
                      : "w-full max-w-5xl" // fit nicely inside container
                  }`}
                />
              </div>

              {total > 1 && (
                <>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      prev();
                    }}
                    className="absolute left-3 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full border border-neutral-700 bg-neutral-900/90 text-neutral-100 hover:bg-neutral-800"
                    aria-label={
                      locale === "it"
                        ? "Appuntamento precedente"
                        : "Previous appointment"
                    }
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      next();
                    }}
                    className="absolute right-3 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full border border-neutral-700 bg-neutral-900/90 text-neutral-100 hover:bg-neutral-800"
                    aria-label={
                      locale === "it"
                        ? "Appuntamento successivo"
                        : "Next appointment"
                    }
                  >
                    ›
                  </button>
                </>
              )}
            </div>

            {/* Caption */}
            <footer className="border-t border-neutral-800 px-3 py-2 text-[11px] text-neutral-300 sm:px-4">
              <p>{current.caption[locale]}</p>
              <p className="mt-1 text-[10px] text-neutral-400">{privacyLine}</p>
              <p className="mt-1 text-[10px] text-neutral-400">{zoomHint}</p>
            </footer>
          </div>
        </div>
      )}
    </>
  );
}
