export default function Terms() {
  return (
    <main className="bg-[#F9F6F1] text-gray-800 py-16">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-bold text-green-900 mb-6">Terms of Service</h1>
        <p className="mb-6 text-sm text-gray-600">Last updated: January 2025</p>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">1. Introduction</h2>
          <p>
            These Terms of Service (“Terms”) govern your use of the Resinaro website and services.  
            By using our services, you agree to these Terms. If you do not agree, please do not use our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">2. Services</h2>
          <p>
            Resinaro provides community-based support for people in the UK, including assistance with bureaucracy
            (e.g., passports, ID cards, NIN, AIRE) and signposting to mental health and community resources.  
            Services are offered on a transparent, fair-fee basis as a professional business.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">3. Payments</h2>
          <p>
            Resinaro charges clear, fair service fees to cover operating costs.  
            Payments are processed securely via third-party providers (e.g., Stripe, PayPal).  
            We do not store payment card details.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">4. Refunds</h2>
          <p>
            Payments are generally non-refundable. However, if you believe a payment was made in error,  
            please contact us at <strong>support@resinaro.org</strong>. Refund requests will be reviewed on a case-by-case basis.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">5. User Responsibilities</h2>
          <ul className="list-disc pl-6">
            <li>Provide accurate and truthful information when using our services.</li>
            <li>Use our services only for lawful purposes.</li>
            <li>Respect our volunteers and community guidelines.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">6. Limitation of Liability</h2>
          <p>
            Resinaro provides support and guidance but cannot guarantee outcomes (e.g., government decisions,  
            appointment availability). We are not responsible for losses or damages resulting from the use of our services.  
            Nothing in these Terms limits liability for fraud, death, or personal injury caused by negligence.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">7. Privacy</h2>
          <p>
            Your use of our services is also governed by our{" "}
            <a href="/privacy-policy" className="text-green-900 underline">Privacy Policy</a> and{" "}
            <a href="/cookies" className="text-green-900 underline">Cookies Policy</a>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">8. Changes to Terms</h2>
          <p>
            We may update these Terms from time to time. Updates will be posted on this page with a revised date.  
            Continued use of our services means you accept the updated Terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2">9. Contact Us</h2>
          <p>
            If you have questions about these Terms, please contact us:  
            <br />Email: <strong>support@resinaro.org</strong>  
            <br />Phone: +44 20 1234 5678  
            <br />Address: Resinaro Community, London, UK
          </p>
        </section>
      </div>
    </main>
  );
}
