// src/app/[locale]/services/proof/appointments-prenotami-booked/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { AppointmentProofGallery } from "@/components/proof/AppointmentProofGallery";

type Locale = "en" | "it";

export const metadata: Metadata = {
  title: "Real Prenot@Mi appointments booked from the UK | Resinaro proof",
  description:
    "Gallery of real Prenot@Mi passport appointments booked for clients living in the UK. Only clients’ own accounts are used; all personal data is blurred.",
  alternates: { canonical: "/services/proof/appointments-prenotami-booked" },
  openGraph: {
    title: "Real Prenot@Mi appointments booked from the UK",
    description:
      "See real screenshots of Prenot@Mi passport appointments booked with clients’ own accounts. No secret channels, no queue-jumping.",
    type: "article",
  },
};

function t(locale: Locale) {
  const it = locale === "it";

  return {
    backLabel: it
      ? "← Torna alla guida Prenot@Mi"
      : "← Back to Prenot@Mi guide",
    backHref: "/community/prenotami-uk-guide",
    heroBadge: it ? "Prove reali" : "Real proof",
    heroTitle: it
      ? "Appuntamenti Prenot@Mi reali dal Regno Unito"
      : "Real Prenot@Mi appointments from the UK",
    heroLead: it
      ? "Tutte le schermate arrivano da account Prenot@Mi di clienti residenti in UK. I dati personali sono oscurati; il passaporto viene sempre rilasciato dal consolato."
      : "Every screenshot comes from the Prenot@Mi account of a client living in the UK. All personal data is blurred; the passport is always issued only by the consulate.",
  };
}

export default function Page({ params }: { params: { locale: Locale } }) {
  const locale = params.locale;
  const copy = t(locale);

  return (
    <main className="bg-[#F9F6F1] text-gray-800 antialiased">
      <section className="mx-auto max-w-5xl px-6 pt-20 pb-10">
        <Link
          href={copy.backHref}
          className="text-xs font-semibold text-emerald-800 underline underline-offset-4"
        >
          {copy.backLabel}
        </Link>

        <div className="mt-4 rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <p className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-semibold text-emerald-900">
            {copy.heroBadge}
          </p>
          <h1 className="mt-3 text-2xl md:text-3xl font-bold text-gray-900">
            {copy.heroTitle}
          </h1>
          <p className="mt-2 text-sm md:text-base text-gray-700">
            {copy.heroLead}
          </p>
        </div>

        <AppointmentProofGallery
          locale={locale}
          variant="section"
          emphasis="strong"
          limit={20}
          title={
            locale === "it"
              ? "Schermate di appuntamenti Prenot@Mi confermati"
              : "Screenshots of confirmed Prenot@Mi appointments"
          }
          subtitle={
            locale === "it"
              ? "Se scorri la galleria trovi appuntamenti in diverse sedi consolari UK, con date e servizi diversi. Tutti gli screenshot vengono dagli account dei clienti."
              : "Scroll through for confirmed appointments at different UK consulates, with various dates and services. All screenshots come from clients’ own accounts."
          }
        />
      </section>
    </main>
  );
}
