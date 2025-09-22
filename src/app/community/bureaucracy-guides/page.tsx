export default function BureaucracyGuides() {
  return (
    <main className="bg-[#F9F6F1] text-gray-800 py-16">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-4xl font-bold text-green-900 mb-6">Bureaucracy Guides</h1>
        <p className="mb-8 text-lg">
          This section provides guidance on essential documents for Italians and people in the UK. Our guides help you navigate paperwork and requirements with confidence.
        </p>
        <div className="space-y-8 mb-12">
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-2xl font-bold mb-2">How to Apply for Your Italian Passport in the UK (2025 Guide)</h2>
            <p>Step-by-step instructions for booking, required documents, and tips for a smooth process.</p>
            <a href="/community/bureaucracy-guides/passport" className="text-green-900 underline mt-2 inline-block">Read More</a>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-2xl font-bold mb-2">What is AIRE and How to Register</h2>
            <p>Understand the importance of AIRE registration and how to complete it from the UK.</p>
            <a href="/community/bureaucracy-guides/aire" className="text-green-900 underline mt-2 inline-block">Read More</a>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-2xl font-bold mb-2">Understanding the Italian ID Card (CIE) in the UK</h2>
            <p>Learn about the CIE, eligibility, and how to apply while living abroad.</p>
            <a href="/community/bureaucracy-guides/cie" className="text-green-900 underline mt-2 inline-block">Read More</a>
          </div>
        </div>
        <div className="bg-green-900 text-white p-6 rounded shadow text-center">
          <h3 className="text-2xl font-bold mb-2">Need help?</h3>
          <p>Contact Resinaro and let us handle the paperwork for you.</p>
        </div>
      </div>
    </main>
  );
}
