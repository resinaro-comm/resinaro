import Link from "next/link";

export default function LifeInUK() {
  return (
    <main className="bg-[#F9F6F1] text-gray-800 py-16">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-4xl font-bold text-green-900 mb-6">Life in the UK</h1>
  <p className="mb-8 text-lg">Practical tips and cultural guidance for people in the UK.</p>
        <div className="space-y-8 mb-12">
          <Link href="/community/life-in-uk/bank-account" className="block bg-white p-6 rounded shadow hover:shadow-lg transition cursor-pointer">
            <h2 className="text-2xl font-bold mb-2">Opening a UK Bank Account as a Person</h2>
            <p>Learn what documents you need, how to choose a bank, and tips for a smooth process.</p>
          </Link>
          <Link href="/community/life-in-uk/housing" className="block bg-white p-6 rounded shadow hover:shadow-lg transition cursor-pointer">
            <h2 className="text-2xl font-bold mb-2">Finding Affordable Housing in London</h2>
            <p>Advice on searching for rentals, avoiding scams, and understanding your rights as a tenant.</p>
          </Link>
          <Link href="/community/life-in-uk/nhs" className="block bg-white p-6 rounded shadow hover:shadow-lg transition cursor-pointer">
            <h2 className="text-2xl font-bold mb-2">Navigating NHS Healthcare as an Italian in the UK</h2>
            <p>Step-by-step guide to registering with a GP, accessing services, and what to expect.</p>
          </Link>
        </div>
        <div className="bg-green-900 text-white p-6 rounded shadow text-center">
          <h3 className="text-2xl font-bold mb-2">Join our events and workshops</h3>
          <p>Make life in the UK easier — connect with Resinaro today.</p>
        </div>
      </div>
    </main>
  );
}
