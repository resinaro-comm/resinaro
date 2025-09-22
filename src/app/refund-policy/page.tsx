export default function RefundPolicy() {
  return (
    <main className="bg-[#F9F6F1] text-gray-800 py-16">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-bold text-green-900 mb-6">Refund Policy</h1>
        <p className="mb-6 text-sm text-gray-600">Last updated: January 2025</p>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">1. Payments Are Final</h2>
          <p>
            Resinaro operates as a community-first, service-fee-based business.  
            As such, payments are generally considered final and non-refundable.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">2. Refund Exceptions</h2>
          <p>
            We recognise that errors can happen. Refunds may be granted in the following cases:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Duplicate payments made by mistake.</li>
            <li>Incorrect payment amounts due to processing errors.</li>
            <li>Fraudulent or unauthorised transactions.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">3. How to Request a Refund</h2>
          <p>
            If you believe you are entitled to a refund, please contact us within{" "}
            <strong>14 days</strong> of the transaction at:
          </p>
          <p className="mt-2">
            Email: <strong>support@resinaro.org</strong><br />
            Phone: +44 20 1234 5678
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">4. Processing Refunds</h2>
          <p>
            Approved refunds will be processed back to the original payment method within{" "}
            5–10 business days. We are unable to refund cash payments.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2">5. Contact Us</h2>
          <p>
            If you have questions about this Refund Policy, please contact us:  
            <br />Email: <strong>support@resinaro.org</strong>  
            <br />Phone: +44 20 1234 5678  
            <br />Address: Resinaro Community, London, UK
          </p>
        </section>
      </div>
    </main>
  );
}
