export default function PrivacyPolicy() {
  return (
    <main className="bg-[#F9F6F1] text-gray-800 py-16">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-bold text-green-900 mb-6">Privacy Policy</h1>
        <p className="mb-6 text-sm text-gray-600">Last updated: January 2025</p>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">1. Introduction</h2>
          <p>
            Resinaro (“we”, “our”, “us”) respects your privacy and is committed to protecting your personal data.  
            This policy explains how we collect, use, and safeguard your information when you use our website and services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">2. Information We Collect</h2>
          <ul className="list-disc pl-6">
            <li>Personal identification details (name, email, phone) when contacting us or booking services.</li>
            <li>Document details necessary to provide support (passport, ID card, NIN).</li>
            <li>Payment information (processed securely via third-party providers like Stripe or PayPal — we do not store card data).</li>
            <li>Technical data (cookies, IP address, browser type, pages visited).</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">3. How We Use Your Information</h2>
          <p>We process your information for the following purposes:</p>
          <ul className="list-disc pl-6">
            <li>To provide and deliver requested services (passport/ID/NIN bookings).</li>
            <li>To communicate with you regarding your requests.</li>
            <li>To comply with legal and regulatory obligations.</li>
            <li>To improve our services and website functionality.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">4. Legal Basis for Processing (GDPR)</h2>
          <ul className="list-disc pl-6">
            <li>Consent (when you voluntarily provide data).</li>
            <li>Contract (when processing is necessary to provide a service).</li>
            <li>Legal obligation (to comply with UK/EU laws).</li>
            <li>Legitimate interest (to operate and improve our community services).</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">5. Data Sharing</h2>
          <p>
            We only share your personal data with trusted third parties when necessary (e.g., consulates, UK government systems,  
            payment providers). We never sell your personal data to third parties.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">6. Data Retention</h2>
          <p>
            We keep your personal data only as long as necessary to fulfil the purposes outlined in this policy or as required by law.  
            Sensitive documents are deleted once your request is completed.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">7. Your Rights (UK & EU GDPR)</h2>
          <ul className="list-disc pl-6">
            <li>Right to access the data we hold about you.</li>
            <li>Right to correct inaccurate data.</li>
            <li>Right to request deletion of your data.</li>
            <li>Right to restrict or object to processing.</li>
            <li>Right to data portability.</li>
          </ul>
          <p className="mt-2">To exercise these rights, contact us at: <strong>resinaro@proton.me</strong></p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">8. Cookies</h2>
          <p>
            We use cookies to improve your browsing experience. You can control cookie settings through your browser.  
            See our <a href="/cookies" className="text-green-900 underline">Cookies Policy</a> for more details.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">9. Security</h2>
          <p>
            We implement industry-standard security measures to protect your personal data.  
            However, no online transmission is 100% secure, and we cannot guarantee absolute protection.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2">10. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us:  
            <br />Email: <strong>resinaro@proton.me</strong>  
            <br />Address: Resinaro Community, London, UK
          </p>
        </section>
      </div>
    </main>
  );
}
