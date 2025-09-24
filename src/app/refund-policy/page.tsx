export default function RefundPolicy() {
  return (
    <main className="bg-[#F9F6F1] text-gray-800 py-16">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-bold text-green-900 mb-2">Refund Policy</h1>
        <p className="mb-6 text-sm text-gray-600">Last updated: 24 September 2025</p>

        {/* TL;DR summary box */}
        <div className="bg-white border border-amber-100 p-4 rounded-md shadow-sm mb-8">
          <h2 className="font-semibold text-green-900 mb-2">Quick summary</h2>
          <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
            <li>Payments for services are usually final and non-refundable once a service has been delivered.</li>
            <li>We consider refunds in clear exception cases (duplicate payment, processing error, fraudulent charge, or where we fail to deliver a confirmed service).</li>
            <li>To request a refund, contact us with transaction details within 14 days of payment.</li>
            <li>Approved refunds are returned to the original payment method within 5–10 business days where technically possible.</li>
          </ul>
        </div>

        {/* Scope */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">1. Scope</h2>
          <p className="text-gray-700">
            This Refund Policy applies to payments made for Resinaro services booked via our website or by direct agreement with Resinaro staff or volunteers.
            It also covers administrative fees charged for document checking, booking assistance and similar support services. This policy does not cover voluntary donations.
          </p>
        </section>

        {/* General rule */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">2. General rule</h2>
          <p className="text-gray-700">
            Payments are generally considered final once a service has been provided or work has commenced. We set and display fees clearly before booking.
            When a service is cancelled before work begins we will consider partial or full refunds depending on how much work has been completed.
          </p>
        </section>

        {/* Exceptions */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">3. When refunds may be granted</h2>
          <p className="text-gray-700 mb-2">We review refund requests on a case by case basis. Typical eligible reasons include:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>
              <strong>Duplicate payment</strong> — you paid the same service twice in error and can provide evidence.
            </li>
            <li>
              <strong>Processing error</strong> — a technical or administrative error resulted in an incorrect charge.
            </li>
            <li>
              <strong>Fraudulent or unauthorised transaction</strong> — where a payment was made without the account holder&apos;s consent.
            </li>
            <li>
              <strong>Failure to deliver a confirmed service</strong> — where Resinaro agreed to perform a service and did not deliver as promised, and we cannot reasonably remedy the problem.
            </li>
          </ul>
        </section>

        {/* Non-refundable cases */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">4. Common non-refundable situations</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Services that have been fully completed and delivered as agreed.</li>
            <li>Administrative time already spent reviewing documents or making bookings when that work was completed prior to a cancellation request.</li>
            <li>No-shows for booked appointments where prior notice was not provided according to the booking terms.</li>
            <li>Payments for third-party services or fees (for example, official consular fees) that are non-refundable by the third party.</li>
          </ul>
        </section>

        {/* How to request a refund */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">5. How to request a refund</h2>
          <p className="text-gray-700 mb-2">To request a refund, please contact our support team and include the following:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Full name used for the booking.</li>
            <li>Date of transaction and the amount paid.</li>
            <li>Transaction or order ID (from your payment confirmation).</li>
            <li>Clear reason for the refund request and any supporting evidence (screenshot, bank statement, emails).</li>
          </ul>
          <p className="text-gray-700 mt-3">
            Contact: <a href="mailto:help@resinaro.com" className="underline text-green-900">help@resinaro.com</a> or use our <a href="/contact" className="underline text-green-900">contact form</a>.
          </p>
        </section>

        {/* Processing and timeline */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">6. Processing refunds</h2>
          <p className="text-gray-700 mb-2">
            We aim to acknowledge refund requests within 3 business days. Where a refund is approved:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-2">
            <li>We will attempt to return funds to the original payment method where possible.</li>
            <li>Refunds typically appear in the claimant&apos;s account within 5–10 business days, depending on the payment provider and the bank.</li>
            <li>We are not responsible for the time a bank or card issuer takes to post the refund after we initiate it.</li>
          </ul>
          <p className="text-xs text-gray-500">Note: where an original payment was made by cash or a third-party payment method that does not support refunds, we will propose an alternative remedy such as a credit note or bank transfer.</p>
        </section>

        {/* Chargebacks */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">7. Chargebacks and disputes</h2>
          <p className="text-gray-700">
            If you initiate a chargeback with your bank or card issuer, we will investigate and provide evidence to the issuer if we believe the charge was valid.
            Repeated or unjustified chargebacks may result in account restrictions. We prefer that customers contact us first so we can try to resolve the issue quickly.
          </p>
        </section>

        {/* Legal rights */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">8. Your legal rights</h2>
          <p className="text-gray-700">
            This Refund Policy is without prejudice to your statutory rights under applicable consumer protection laws. Nothing in this Refund Policy attempts to limit rights you may have by law.
            For consumer advice in the UK please consult Citizens Advice or official government guidance.
          </p>
        </section>

        {/* Contact */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">9. Getting help and escalation</h2>
          <p className="text-gray-700 mb-2">
            If you have not received an acknowledgement within 3 business days or you are unhappy with our reply, please write to <strong>help@resinaro.com</strong> with the subject line &quot;Refund escalation&quot; and we will escalate your case to a senior representative.
          </p>
          <p className="text-gray-700">
            For full details about how we handle personal data related to payments and refunds, see our <a href="/privacy-policy" className="underline text-green-900">Privacy Policy</a> and <a href="/cookies" className="underline text-green-900">Cookies Policy</a>.
          </p>
        </section>

        {/* CTA */}
        <section className="mt-6">
          <div className="bg-white border-l-4 border-green-900 p-4 rounded-md">
            <h3 className="font-semibold text-green-900 mb-2">Need help now?</h3>
            <p className="text-gray-700 mb-3">Contact our support team with your order details and we will respond within 3 business days.</p>
            <div className="flex gap-3">
              <a href="/contact" className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold px-5 py-2 rounded">Contact form</a>
              <a href="mailto:help@resinaro.com" className="inline-block bg-green-900 hover:bg-green-800 text-white font-semibold px-5 py-2 rounded">Email support</a>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
