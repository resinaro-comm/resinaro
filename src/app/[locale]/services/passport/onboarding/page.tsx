// src/app/[locale]/services/passport/onboarding/page.tsx
import React from "react";
import PassportOnboardingForm from "@/components/PassportOnboardingForm";

type Locale = "en" | "it";

interface PageProps {
  params: { locale: Locale };
  searchParams?: {
    paid?: string;
    ref?: string;
    payment_intent?: string;
    redirect_status?: string;
    qty?: string;
  };
}

export default function PassportOnboardingPage({
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
  const qtyStr = searchParams.qty ?? "1";
  const qty = Number.isFinite(Number(qtyStr)) ? Number(qtyStr) : 1;

  const title = it
    ? "Completa l’onboarding passaporto"
    : "Finish your passport onboarding";
  const subtitle = it
    ? "Abbiamo ricevuto il pagamento. Ora compila questa scheda così possiamo iniziare a lavorare sul tuo caso."
    : "We’ve received your payment. Now complete this short form so we can start working on your case.";

  const paidBadge = paid
    ? it
      ? "Pagamento confermato da Stripe."
      : "Payment confirmed by Stripe."
    : null;

  const qtyLine = it
    ? `Hai pagato per ${qty} appuntamento${
        qty > 1 ? "i" : ""
      } passaporto. Completa una scheda per ogni persona inclusa.`
    : `You paid for ${qty} passport appointment${
        qty > 1 ? "s" : ""
      }. Please fill in one card for each person.`;

  return (
    <div className="bg-[#f7f5ef] py-10 sm:py-12">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 sm:px-6 lg:px-0">
        {/* Hero */}
        <section className="rounded-3xl bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 px-6 py-9 text-emerald-50 shadow-lg sm:px-8 sm:py-10">
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-100/80">
            {it ? "Passaporto · Prenot@Mi 12+" : "Passport · Prenot@Mi 12+"}
          </p>

          <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <h1 className="text-2xl font-semibold sm:text-3xl">{title}</h1>
              <p className="mt-2 text-sm text-emerald-50/90">{subtitle}</p>
              <p className="mt-2 text-xs text-emerald-100/80">{qtyLine}</p>
            </div>

            {paidBadge && (
              <div className="mt-2 flex sm:mt-0 sm:justify-end">
                <p className="inline-flex items-center rounded-full bg-emerald-700/85 px-3 py-1 text-xs font-medium shadow-sm">
                  {paidBadge}
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Onboarding form – centered card */}
        <section className="mx-auto w-full max-w-3xl">
          <PassportOnboardingForm
            locale={locale}
            bookingId={bookingId}
            paymentIntentId={paymentIntentId}
          />
        </section>
      </div>
    </div>
  );
}
