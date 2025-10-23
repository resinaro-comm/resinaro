// app/refund-policy/page.tsx
import Link from "next/link";
import { p } from "@/lib/localePath";

export default function RefundPolicy({ params }: { params: { locale: "en" | "it" } }) {
  const locale = params.locale;
  return (
    <main className="bg-[#F9F6F1] text-gray-800 py-16">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-bold text-green-900 mb-2">Refund & Credit Policy</h1>
        <p className="mb-6 text-sm text-gray-600">Last updated: 18 October 2025</p>

        {/* TL;DR summary box */}
        <div className="bg-white border border-amber-100 p-4 rounded-md shadow-sm mb-8">
          <h2 className="font-semibold text-green-900 mb-2">Quick summary</h2>
          <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
            <li>Our £35 fee covers the <strong>full service</strong>. We usually <strong>start immediately</strong> after payment.</li>
            <li><strong>No cash refunds</strong> as a commercial policy. For cancellations, we issue a <strong>Resinaro credit</strong> by default, valid for <strong>12 months</strong> and usable on any service.</li>
            <li>You have a 14-day cooling-off right for distance/off-premises purchases. If you ask us to start now and we <em>fully perform</em> the service within that period, the right to cancel ends. If you cancel <em>before</em> completion, we’ll provide credit for the part not supplied (you can request any <strong>legally required cash refund</strong> instead).</li>
            <li>Where the law requires a refund (e.g., duplicate/unauthorised charge or failure to supply), we will refund in full.</li>
          </ul>
        </div>

        {/* 1. Scope */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">1. Scope</h2>
          <p className="text-gray-700">
            This policy applies to payments made for Resinaro services ordered online or by direct agreement. It covers support
            such as document checks, booking assistance and similar services. It does not cover voluntary donations or third-party official fees.
          </p>
        </section>

        {/* 2. Immediate start & cooling-off (CCR 2013) */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">2. Immediate start & your 14-day cooling-off right</h2>
          <p className="text-gray-700 mb-2">
            We typically begin work immediately after payment so we can act quickly. On our forms, we ask you to confirm that you want us to <strong>start now</strong> and acknowledge:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>You have a 14-day cooling-off period from purchase for distance/off-premises contracts.</li>
            <li>If you cancel during that period <em>before</em> the service is fully performed, we will provide a proportionate remedy for the part not yet supplied (see Section 4).</li>
            <li>Once the service is <strong>fully performed</strong> within the cooling-off period, you <strong>lose the right to cancel</strong>.</li>
          </ul>
          <p className="text-xs text-gray-500 mt-2">
            This reflects the UK Consumer Contracts Regulations, which allow performance to start within 14 days if you request it and acknowledge losing the right to cancel once fully performed.
          </p>
        </section>

        {/* 3. Our default remedy: credit, not cash */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">3. Our default remedy: credit (not cash)</h2>
          <p className="text-gray-700">
            As a commercial policy, we do <strong>not</strong> offer cash refunds for voluntary cancellations. Instead we issue a <strong>Resinaro account credit</strong>, valid for <strong>12 months</strong>, redeemable against any of our services. Credits are not redeemable for cash (except where the law requires a cash refund).
          </p>
        </section>

        {/* 4. If you cancel */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">4. If you cancel</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li><strong>Before we start</strong> — we’ll issue a 12-month credit for the full amount. (You may request any legally required cash refund.)</li>
            <li><strong>After we start but before completion (within 14 days)</strong> — we’ll issue a <strong>proportionate credit</strong> for the part not yet supplied. (You may request any legally required cash refund for the unused portion.)</li>
            <li><strong>After the service is completed</strong> — no cancellation right applies and no refund/credit is due unless required by law or we choose to offer goodwill credit.</li>
          </ul>
        </section>

        {/* 5. When we refund in full (statutory) */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">5. When we refund in full (statutory)</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li><strong>Duplicate payment</strong> or <strong>processing error</strong> by us or our provider;</li>
            <li><strong>Unauthorised transaction</strong> (fraud);</li>
            <li><strong>Failure to deliver</strong> the service as agreed, where we cannot reasonably remedy the issue.</li>
          </ul>
        </section>

        {/* 6. Third-party fees */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">6. Third-party fees</h2>
          <p className="text-gray-700">
            Fees charged by third parties (for example, official consular fees) are non-refundable where the third party will not refund them. We’ll assist you in contacting the third party where possible.
          </p>
        </section>

        {/* 7. Non-refundable situations */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">7. Common non-refundable situations</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Services that have been fully completed as agreed.</li>
            <li>Time already spent reviewing documents, preparing submissions or attempting bookings before a cancellation.</li>
            <li>No-shows for booked appointments where notice wasn’t given under the booking terms.</li>
            <li>Third-party fees that are non-refundable by the third party.</li>
          </ul>
        </section>

        {/* 8. How to request a credit or statutory refund */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">8. How to request a credit or statutory refund</h2>
          <p className="text-gray-700 mb-2">Email <a href="mailto:resinaro@proton.me" className="underline text-green-900">resinaro@proton.me</a> or use our <Link href={p(locale, "/contact")} className="underline text-green-900">contact form</Link> and include:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Name, date and amount paid, order/transaction ID;</li>
            <li>Reason and any evidence (e.g., screenshots, bank statement).</li>
          </ul>
        </section>

        {/* 9. Processing timeline */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">9. Processing timeline</h2>
          <p className="text-gray-700 mb-2">
            We aim to acknowledge within 3 business days. Approved credits are applied immediately to your account; approved refunds (where legally required) are sent to the original payment method where possible and typically appear within 5–10 business days, depending on the provider and your bank.
          </p>
        </section>

        {/* 10. Chargebacks */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">10. Chargebacks and disputes</h2>
          <p className="text-gray-700">
            If you raise a chargeback, we’ll provide evidence to the issuer where we believe the charge was valid. Please contact us first so we can resolve issues quickly.
          </p>
        </section>

        {/* 11. Your legal rights */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">11. Your legal rights</h2>
          <p className="text-gray-700">
            This policy does not affect your statutory rights under UK consumer law. In particular, the Consumer Contracts Regulations provide a 14-day cancellation right for distance/off-premises services, which can be lost once a service is fully performed after you asked us to start within the 14 days; and any cancellation charges must reflect only actual/proportionate costs. Where the law requires a cash refund, we will provide it. 
          </p>
        </section>

        {/* CTA */}
        <section className="mt-6">
          <div className="bg-white border-l-4 border-green-900 p-4 rounded-md">
            <h3 className="font-semibold text-green-900 mb-2">Need help now?</h3>
            <p className="text-gray-700 mb-3">Contact our support team with your order details and we will respond within 3 business days.</p>
            <div className="flex gap-3">
              <Link href={p(locale, "/contact")} className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold px-5 py-2 rounded">Contact form</Link>
              <a href="mailto:resinaro@proton.me" className="inline-block bg-green-900 hover:bg-green-800 text-white font-semibold px-5 py-2 rounded">Email support</a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
