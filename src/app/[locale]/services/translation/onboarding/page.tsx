// src/app/[locale]/services/translation/onboarding/page.tsx
import React from "react";
import TranslationOnboardingForm from "@/components/TranslationOnboardingForm";

type Locale = "en" | "it";

interface PageProps {
  params: { locale: Locale };
  searchParams?: {
    paid?: string;
    ref?: string;
    payment_intent?: string;
    redirect_status?: string;
    pages?: string;
  };
}

export default function TranslationOnboardingPage({
  params,
  searchParams = {},
}: PageProps) {
  const locale: Locale = params.locale === "it" ? "it" : "en";
  const it = locale === "it";

  const bookingId =
    typeof searchParams.ref === "string" && searchParams.ref.length > 0
      ? searchParams.ref
      : undefined;

  const paymentIntentId =
    typeof searchParams.payment_intent === "string" &&
    searchParams.payment_intent.length > 0
      ? searchParams.payment_intent
      : undefined;

  const paid = searchParams.paid === "1";
  const pages = searchParams.pages;

  const title = it
    ? "Onboarding traduzione – un ultimo passo"
    : "Translation onboarding – one last step";
  const subtitle = it
    ? "Abbiamo ricevuto il pagamento. Ora carica il documento da tradurre e dicci per quando ti serve."
    : "We’ve received your payment. Now upload the document to translate and tell us when you need it.";

  const paidBadge = paid
    ? it
      ? "Pagamento confermato da Stripe."
      : "Payment confirmed by Stripe."
    : null;

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-6 pb-10 pt-4 sm:pt-6">
      {/* Hero */}
      <section className="rounded-3xl bg-emerald-900 px-5 py-6 text-emerald-50 sm:px-8 sm:py-8">
        <p className="text-xs font-semibold uppercase tracking-wide opacity-80">
          {it ? "Traduzioni certificate" : "Certified translations"}
        </p>
        <h1 className="mt-2 text-2xl font-semibold sm:text-3xl">
          {title}
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-emerald-50/90">
          {subtitle}
        </p>
        {paidBadge && (
          <p className="mt-4 inline-flex items-center rounded-full bg-emerald-700/80 px-3 py-1 text-xs font-medium">
            {paidBadge}
          </p>
        )}
        {pages && (
          <p className="mt-2 text-xs text-emerald-100/90">
            {it ? "Pacchetto pagine: " : "Pages package: "}
            <span className="font-semibold">{pages}</span>
          </p>
        )}
      </section>

      {/* Onboarding form */}
      <section>
        <TranslationOnboardingForm
          locale={locale}
          bookingId={bookingId}
          paymentIntentId={paymentIntentId}
          pages={pages}
        />
      </section>
    </div>
  );
}
