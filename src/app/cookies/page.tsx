export default function Cookies() {
  return (
    <main className="bg-[#F9F6F1] text-gray-800 py-16">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-bold text-green-900 mb-6">Cookies Policy</h1>
        <p className="mb-6 text-sm text-gray-600">Last updated: January 2025</p>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">1. What Are Cookies?</h2>
          <p>
            Cookies are small text files that are stored on your device when you visit our website.  
            They help us improve your browsing experience, understand how our site is used,  
            and provide relevant content and services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">2. Types of Cookies We Use</h2>
          <ul className="list-disc pl-6">
            <li>
              <strong>Essential Cookies:</strong> Required for the website to function (e.g., navigation, form submissions).
            </li>
            <li>
              <strong>Analytics Cookies:</strong> Help us understand how visitors use our site (e.g., Google Analytics).
            </li>
            <li>
              <strong>Functional Cookies:</strong> Enhance your experience (e.g., remembering preferences or language settings).
            </li>
            <li>
              <strong>Marketing Cookies:</strong> Used to deliver relevant content or measure campaigns.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">3. Third-Party Cookies</h2>
          <p>
            Some cookies may be placed by third-party services we use, such as payment providers,  
            analytics tools, or social media integrations.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">4. How to Manage Cookies</h2>
          <p>
            You can control and manage cookies in your browser settings.  
            Most browsers allow you to block or delete cookies.  
            Please note that disabling essential cookies may affect the functionality of our site.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">5. Consent</h2>
          <p>
            When you first visit our site, you will be asked to accept or decline non-essential cookies.  
            By continuing to browse the site after accepting, you consent to our use of cookies as described in this policy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2">6. More Information</h2>
          <p>
            For more details on how we handle your data, please see our{" "}
            <a href="/privacy-policy" className="text-green-900 underline">Privacy Policy</a>.  
            If you have questions, contact us at: <strong>privacy@resinaro.org</strong>.
          </p>
        </section>
      </div>
    </main>
  );
}
