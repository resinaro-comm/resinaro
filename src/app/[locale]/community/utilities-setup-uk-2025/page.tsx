// app/community/utilities-setup-uk-2025/page.tsx
import Link from "next/link";
import Image from "next/image";

/**
 * Utilities Setup (2025): Energy, Water, Council Tax & Broadband — Day-1 Checklist + Copy-Paste Emails
 *
 * Audience:
 *  - Italians and newcomers in the UK (average English) moving into a rental or house share.
 *  - People who need to set up utilities fast, avoid old-debt problems, and secure proof of address.
 *
 * Style:
 *  - Same Resinaro format: calm, premium, practical. Short sentences. Easy English with tiny Italian notes.
 *  - Big hero, TOC, crisp H2s. Tables. Copy-paste templates. Decision trees. JSON-LD for FAQ + HowTo.
 *  - “Do-this-now” Day-1 checklist, plus photos you can add later for meters/letters.
 *
 * SEO:
 *  - Targets: set up utilities UK, opening meter reading template, who is my energy supplier, council tax moving in,
 *    broadband no contract, water bill UK metered vs unmetered, previous tenant debt letters.
 *  - Internal-link flywheel: Council Tax (your long guide), Proof of Address, Renting, Bank KYC, GP/NHS, Right-to-Rent.
 *
 * Safety:
 *  - No legal/financial advice. Clear statement to check official/local provider instructions.
 */

export const metadata = {
  title:
    "Utilities Setup (2025): Energy, Water, Council Tax & Broadband — Day-1 Checklist + Copy-Paste Emails",
  description:
    "Move-in playbook for the UK: find your energy supplier, submit opening meter readings, water (metered/unmetered), council tax quick start, broadband picks, and templates for disputes and previous-tenant debt letters. Easy English, zero fluff.",
  alternates: { canonical: "/community/utilities-setup-uk-2025" },
};

export default function Page() {
  // =========================================================
  // JSON-LD: FAQ
  // =========================================================
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "I just moved in. What should I do first for utilities?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Take photos of all meters with the date, find the current energy and water suppliers for your address, send opening readings with your tenancy start date, and tell the council that you moved in. Then choose broadband.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need to pick a new energy tariff immediately?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "No. You are automatically on the existing supplier’s standard terms when you move in. After you submit opening readings and register, you can switch or stay. Do not ignore registration, or bills may go to the wrong person.",
        },
      },
      {
        "@type": "Question",
        name: "A debt letter arrived for the previous tenant. Am I responsible?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "No, debts in the previous occupant’s name are not yours. Send a proof-of-tenancy letter and opening readings to the supplier or collector using our templates, and ask them to correct the account name and dates.",
        },
      },
      {
        "@type": "Question",
        name: "Is my water supplier the same as my energy supplier?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "No. Water companies are regional and different from gas/electricity suppliers. Find your water provider by postcode on the official regional company’s site.",
        },
      },
      {
        "@type": "Question",
        name: "When should I tell the council I moved in?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Immediately. Council Tax is separate from utilities. Inform the council on day one to avoid backdated bills and to access discounts/exemptions if you’re eligible.",
        },
      },
      {
        "@type": "Question",
        name: "Which broadband is best for renters?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Check availability for your address. If you can’t drill or you need short-term service, choose 30-day rolling or 12-month contracts, or 4G/5G home broadband. Ask your landlord before any installation.",
        },
      },
    ],
  };

  // =========================================================
  // JSON-LD: HowTo (Day-1 setup)
  // =========================================================
  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Set up UK utilities on move-in day (9 steps)",
    totalTime: "PT45M",
    step: [
      { "@type": "HowToStep", name: "Photograph meters", text: "Gas, electricity, water. Capture serial numbers and readings with date." },
      { "@type": "HowToStep", name: "Find suppliers", text: "Confirm current energy and water suppliers for your address." },
      { "@type": "HowToStep", name: "Send opening readings", text: "Email or submit portal forms with tenancy start date and names." },
      { "@type": "HowToStep", name: "Register with council", text: "Notify council for Council Tax; ask about discounts." },
      { "@type": "HowToStep", name: "Check tariff options", text: "Decide to stay or switch after registration; avoid exit fees mistakes." },
      { "@type": "HowToStep", name: "Choose broadband", text: "Run availability checks; pick rolling/12-month/5G as needed." },
      { "@type": "HowToStep", name: "Create a docs folder", text: "Save PDFs of emails, photos, and confirmations for proof of address." },
      { "@type": "HowToStep", name: "Deal with old debt letters", text: "Send ‘not my debt’ template with tenancy proof and readings." },
      { "@type": "HowToStep", name: "Set reminders", text: "Calendar reminders for meter reads, broadband end date, tariff review." },
    ],
  };

  return (
    <main className="bg-[#F9F6F1] text-gray-800 py-12">
      <div className="container mx-auto max-w-5xl px-6">
        {/* =========================================================
            HERO
        ========================================================= */}
        <div className="relative w-full h-72 md:h-96 mb-8 overflow-hidden rounded-xl">
          <Image
            src="/images/utilities-setup-hero.png"
            alt="Utilities setup: energy, water, council tax, broadband — Day-1 checklist and emails"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
          <div className="absolute bottom-0 w-full p-6 text-white">
            <span className="inline-block mb-2 px-3 py-1 rounded-full text-xs font-medium bg-green-700">
              MOVE-IN
            </span>
            <h1 className="text-2xl md:text-4xl font-bold">
              Utilities Setup (2025): Energy, Water, Council Tax & Broadband — Day-1 Checklist + Copy-Paste Emails
            </h1>
          </div>
        </div>

        {/* =========================================================
            WHY THIS GUIDE
        ========================================================= */}
        <section className="bg-white border rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-bold text-green-900 mb-2">
            Why this guide (and how it protects your money)
          </h2>
          <p className="mb-3">
            The first 48 hours decide if bills are smooth or stressful. This guide shows exactly what to do, in order,
            so old debts don’t follow you, readings are correct, and you have the proof of address you need for banks and GP.
          </p>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>“Do this now” actions with photos you can add later.</li>
            <li>Templates that suppliers and councils actually accept.</li>
            <li>Renters, house shares, students, and families covered.</li>
          </ul>
        </section>

        {/* =========================================================
            TOC
        ========================================================= */}
        <nav aria-label="Contents" className="mb-8">
          <ul className="flex flex-wrap gap-3 text-sm">
            <li><a className="underline text-green-900" href="#day1">1) Day-1 move-in checklist (printable)</a></li>
            <li><a className="underline text-green-900" href="#meters">2) Meters: photos + how to read</a></li>
            <li><a className="underline text-green-900" href="#find-suppliers">3) Find your current suppliers</a></li>
            <li><a className="underline text-green-900" href="#opening-reads">4) Opening meter readings: email templates</a></li>
            <li><a className="underline text-green-900" href="#tariffs">5) Stay vs switch: tariff basics</a></li>
            <li><a className="underline text-green-900" href="#water">6) Water: metered vs unmetered + setup</a></li>
            <li><a className="underline text-green-900" href="#council-tax">7) Council Tax quick start (links to full guide)</a></li>
            <li><a className="underline text-green-900" href="#broadband">8) Broadband: availability, short contracts, 4G/5G</a></li>
            <li><a className="underline text-green-900" href="#debt">9) Previous-tenant debt & collectors (templates)</a></li>
            <li><a className="underline text-green-900" href="#shared">10) House shares, bills-included, prepay meters</a></li>
            <li><a className="underline text-green-900" href="#faq">FAQ</a></li>
            <li><a className="underline text-green-900" href="#related">Related guides</a></li>
          </ul>
        </nav>

        {/* =========================================================
            1) DAY-1 CHECKLIST
        ========================================================= */}
        <section id="day1" className="bg-white border rounded-xl shadow-sm p-6 mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">1) Day-1 move-in checklist (10 steps)</h2>
          <ol className="list-decimal pl-5 text-sm space-y-1">
            <li>Take clear photos of gas, electricity, and water meters (close-up + wide shot). Include today’s date (paper slip in photo works).</li>
            <li>Write the serial number visible on each meter.</li>
            <li>Find the current energy supplier for your address. Note account number if any letter is present in the property.</li>
            <li>Submit “opening readings” with your tenancy start date and all adult names.</li>
            <li>Tell the local council you moved in. Ask about discounts (single person, students, etc.).</li>
            <li>Find your water company and register the account. If metered, submit opening reading/photo.</li>
            <li>Pick broadband: run availability checks and choose a contract length that matches your tenancy.</li>
            <li>Create a “Home Docs” folder (cloud + paper). Save PDFs of emails, confirmations, and photos.</li>
            <li>Label the fuse box, boiler, stopcock (water shutoff), and thermostat for future you.</li>
            <li>Put calendar reminders: monthly meter reads, tariff review in 3 months, broadband end date, Council Tax payment dates.</li>
          </ol>
          <p className="text-xs text-gray-600 mt-3">
            Nota italiana: “letture iniziali” = opening readings; “fornitore” = supplier; “tassa comunale” = Council Tax.
          </p>
        </section>

        {/* =========================================================
            2) METERS
        ========================================================= */}
        <section id="meters" className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">2) Meters: where, how, and what to record</h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="bg-white border rounded-xl p-5">
              <h3 className="font-semibold text-green-900 mb-1">Electricity</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Common locations: hallway cupboard, meter room, outside boxes.</li>
                <li>Classic meter: read black digits only (ignore red decimals).</li>
                <li>Smart meter: press the display button to show reading (IMP/Total).</li>
              </ul>
            </div>
            <div className="bg-white border rounded-xl p-5">
              <h3 className="font-semibold text-green-900 mb-1">Gas</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Often outside in a brown/white box; or under stairs.</li>
                <li>Read black digits only; m³ or ft³ printed on meter—just copy digits.</li>
                <li>If there’s a smell of gas, do not switch on lights. Ventilate and follow emergency numbers on local signage.</li>
              </ul>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6 text-sm mt-4">
            <div className="bg-white border rounded-xl p-5">
              <h3 className="font-semibold text-green-900 mb-1">Water</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Outside pavement box; sometimes inside under sink/utility room.</li>
                <li>Take a photo of the number and the reading. Some lids need a key—ask your landlord or agent.</li>
                <li>If unmetered, you will not see a usable meter; the company bills using property banding.</li>
              </ul>
            </div>
            <div className="bg-white border rounded-xl p-5">
              <h3 className="font-semibold text-green-900 mb-1">Photo proof tips</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Place a paper note in the photo: “Opening read 2025-MM-DD”.</li>
                <li>Take a second photo showing the meter in context (so you can locate it again).</li>
                <li>Upload to a cloud folder and rename files: <em>gas_opening_YYYYMMDD.jpg</em>, <em>elec_opening_YYYYMMDD.jpg</em>.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* =========================================================
            3) FIND SUPPLIERS
        ========================================================= */}
        <section id="find-suppliers" className="bg-white border rounded-xl shadow-sm p-6 mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">3) Find your current suppliers (energy & water)</h2>
          <p className="mb-3">
            You inherit the property’s existing energy supplier when you move in. You can switch later, but first you must
            register with the current supplier using opening readings. For water, the company is regional and fixed.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Energy (gas/electricity)</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Check any letters left at the property (look for account number and supplier logo).</li>
                <li>Ask the landlord/agent. They should provide supplier names for the inventory.</li>
                <li>If unknown, use official address-lookup tools or call the network operator for your region to confirm the supplier.</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Water</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Use the postcode lookup on your regional water company’s website.</li>
                <li>Meters are managed by that company; there is no switching market like energy.</li>
                <li>Register with names, tenancy start date, and opening reading (if metered).</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-gray-600 mt-3">
            If the property uses a communal boiler or heat network, check your tenancy pack for separate heat billing details.
          </p>
        </section>

        {/* =========================================================
            4) OPENING READINGS — EMAIL TEMPLATES
        ========================================================= */}
        <section id="opening-reads" className="mb-12">
          <h2 className="text-2xl font-bold text-green-900 mb-3">4) Opening readings: copy-paste emails that work</h2>

          {/* Generic energy email */}
          <div className="bg-white border rounded-xl p-5 text-sm mb-6">
            <h3 className="font-semibold text-green-900 mb-2">A) Generic energy supplier email</h3>
            <pre className="whitespace-pre-line bg-[#F9F6F1] p-3 rounded border">
{`Subject: New tenant — Opening meter readings for <address>

Hello,

I have moved into <full address> on <tenancy start date>. Please create/transfer the account in our names.

Adults at the property:
- <Full Name 1>, DOB <dd/mm/yyyy>
- <Full Name 2>, DOB <dd/mm/yyyy>

Opening readings (taken on <date>):
Electricity meter (serial <serial>): <reading>
Gas meter (serial <serial>): <reading>

Attached: photos of meters and tenancy agreement page.

Please confirm the account setup and the tariff on the property. 
We will review options once the account is active.

Kind regards,
<Your name>
<Contact number>`}
            </pre>
          </div>

          {/* Water email */}
          <div className="bg-white border rounded-xl p-5 text-sm mb-6">
            <h3 className="font-semibold text-green-900 mb-2">B) Water account setup email</h3>
            <pre className="whitespace-pre-line bg-[#F9F6F1] p-3 rounded border">
{`Subject: Move-in registration — <address>

Hello,

We moved into <full address> on <date>. Please register our household for water and wastewater services.

Adults at the property:
- <Full Name 1>
- <Full Name 2>

Metered? <Yes/No>. 
If yes, opening reading (serial <serial>) on <date>: <reading>.

Attached: tenancy page and meter photo (if metered).

Kind regards,
<Your name>`}
            </pre>
          </div>

          {/* Council tax email */}
          <div className="bg-white border rounded-xl p-5 text-sm">
            <h3 className="font-semibold text-green-900 mb-2">C) Council Tax move-in email (if no online form)</h3>
            <pre className="whitespace-pre-line bg-[#F9F6F1] p-3 rounded border">
{`Subject: Council Tax — New occupier at <address>

Hello,

We have moved into <full address> on <date>. Please open a Council Tax account in our names.

Adults at the property:
- <Full Name 1>
- <Full Name 2>

Previous address: <optional>
Landlord/agent: <name + contact> (if available)
Tenancy start/end: <dates>

Please advise our band and first payment date. 
We would also like to know if a single person discount or other reduction applies to our situation.

Kind regards,
<Your name>
<Contact number>`}
            </pre>
            <p className="text-xs text-gray-600 mt-2">
              Prefer online forms if available; they’re faster and give a reference number.
            </p>
          </div>
        </section>

        {/* =========================================================
            5) TARIFFS — STAY VS SWITCH
        ========================================================= */}
        <section id="tariffs" className="bg-white border rounded-xl shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-bold text-green-900 mb-2">5) Stay vs switch: tariff basics (clear thinking)</h2>
          <p className="mb-3">
            After you register with the current supplier, you can decide to keep the standard tariff or switch.
            Switching before you register can cause confusion about dates and readings. Follow this order: register → first bill estimate → compare → switch if better.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border rounded-lg">
              <thead className="bg-[#F9F6F1]">
                <tr>
                  <th className="text-left p-3 border-b">Option</th>
                  <th className="text-left p-3 border-b">Pros</th>
                  <th className="text-left p-3 border-b">Cons</th>
                  <th className="text-left p-3 border-b">Best for</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    o: "Stay on standard variable (default)",
                    p: "Simple, no exit fees, flexible",
                    c: "Price can change with market",
                    b: "Short tenancies; uncertain usage",
                  },
                  {
                    o: "Fix price for 12/24 months",
                    p: "Predictable bills",
                    c: "Exit fees if you move early",
                    b: "Long stay, stable usage",
                  },
                  {
                    o: "Prepayment (PAYG) meter",
                    p: "Control spend; no surprise bills",
                    c: "Higher unit rates; top-up hassle",
                    b: "Where already installed or credit issues",
                  },
                ].map((row) => (
                  <tr className="border-b" key={row.o}>
                    <td className="p-3 font-semibold">{row.o}</td>
                    <td className="p-3">{row.p}</td>
                    <td className="p-3">{row.c}</td>
                    <td className="p-3">{row.b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-600 mt-3">
            Ask suppliers about warm-home or vulnerable-customer support if anyone in the household qualifies.
          </p>
        </section>

        {/* =========================================================
            6) WATER — METERED VS UNMETERED
        ========================================================= */}
        <section id="water" className="mb-12">
          <h2 className="text-2xl font-bold text-green-900 mb-3">6) Water: metered vs unmetered + setup</h2>
          <div className="bg-white border rounded-xl p-5 text-sm">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-green-900 mb-1">Metered</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Pay for what you use. Send opening and regular reads.</li>
                  <li>Good for small households or if you’re away often.</li>
                  <li>Keep meter accessible; ask landlord for key to the pavement box if needed.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-green-900 mb-1">Unmetered</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Charges based on property banding (rateable value).</li>
                  <li>Predictable payments; not linked to usage.</li>
                  <li>Ask company how to install a meter if you think it would be cheaper.</li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-gray-600 mt-3">
              Wastewater charges usually come from the same regional company. Keep your account number for future proof of address letters.
            </p>
          </div>
        </section>

        {/* =========================================================
            7) COUNCIL TAX QUICK START
        ========================================================= */}
        <section id="council-tax" className="bg-white border rounded-xl shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-bold text-green-900 mb-2">7) Council Tax quick start (signal to our deep guide)</h2>
          <p className="mb-3">
            Council Tax is separate from energy and water. You pay the local council for services like waste collection and libraries.
            Register immediately when you move in to avoid backdated bills and to activate any discounts.
          </p>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Use the council’s “moving in” online form where possible.</li>
            <li>Ask about discounts: single person, student exemptions, severe mental impairment, occupied annex.</li>
            <li>Set up a direct debit to avoid late fees; keep the bill as proof of address.</li>
          </ul>
          <p className="mt-3 text-sm">
            Need the full playbook? Read{" "}
            <Link className="underline text-green-900" href="/community/council-tax-italians-2025">
              Council Tax for Italians — Bands, Discounts & Moving-In Steps (2025)
            </Link>
            .
          </p>
        </section>

        {/* =========================================================
            8) BROADBAND
        ========================================================= */}
        <section id="broadband" className="mb-12">
          <h2 className="text-2xl font-bold text-green-900 mb-3">8) Broadband: availability, short contracts, 4G/5G</h2>
          <div className="bg-white border rounded-xl p-5 text-sm">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-green-900 mb-1">Availability check</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Run postcode checks on major providers and any local full-fiber operator.</li>
                  <li>If you rent, ask the landlord before any drilling or new ONT box install.</li>
                  <li>If existing socket looks damaged, report to landlord/agent with photos.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-green-900 mb-1">Contract types</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>30-day rolling: flexible but sometimes pricier.</li>
                  <li>12-month: balanced for typical tenancies.</li>
                  <li>18–24-month: cheapest monthly price, but exit fees if you leave early.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-green-900 mb-1">Mobile broadband</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>4G/5G home broadband can work if you have strong signal.</li>
                  <li>Perfect for short stays or where fixed line is delayed.</li>
                  <li>Place router near a window; test speed before committing.</li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-gray-600 mt-3">
              For shared houses, agree rules for router placement, bandwidth, and payments. Use a name/password everyone can remember (save in your Home Docs).
            </p>
          </div>
        </section>

        {/* =========================================================
            9) PREVIOUS-TENANT DEBT & COLLECTORS
        ========================================================= */}
        <section id="debt" className="bg-white border rounded-xl shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-bold text-green-900 mb-2">9) Previous-tenant debt & collectors (you are not liable)</h2>
          <p className="mb-3">
            If you receive bills or threats in another person’s name, do not ignore them. Respond with proof that you are the new tenant and the date you took over the property.
            Keep calm and use these templates:
          </p>

          {/* Not my debt template */}
          <div className="border rounded-lg p-4 text-sm mb-6">
            <h3 className="font-semibold text-green-900 mb-2">A) “Not my debt” to supplier/collector</h3>
            <pre className="whitespace-pre-line bg-[#F9F6F1] p-3 rounded border">
{`Subject: Wrong person — new occupier at <address>

Hello,

I have received a bill/letter addressed to <Previous Occupant>. I am not this person.
I became the occupier on <date>. Please update your records.

Attached:
- Tenancy agreement page showing my name and start date
- Opening meter readings with photos (taken on <date>)

Please confirm that any debt before <date> remains with the previous account holder and that a new account is opened in my name from <date>.

Regards,
<Your name>`}
            </pre>
          </div>

          {/* Name correction template */}
          <div className="border rounded-lg p-4 text-sm mb-6">
            <h3 className="font-semibold text-green-900 mb-2">B) Name correction on account</h3>
            <pre className="whitespace-pre-line bg-[#F9F6F1] p-3 rounded border">
{`Hello,

Please correct the account name for <address> to:

<Full Name 1>, DOB <dd/mm/yyyy>
<Full Name 2> (if joint)

Move-in date: <date>. Opening readings attached.

Thank you,
<Your name>`}
            </pre>
          </div>

          {/* Collector doorstep script */}
          <div className="border rounded-lg p-4 text-sm">
            <h3 className="font-semibold text-green-900 mb-2">C) Doorstep script (if a collector arrives)</h3>
            <pre className="whitespace-pre-line bg-[#F9F6F1] p-3 rounded border">
{`Easy English:
"I am the new tenant since <date>. The person you want does not live here. 
Here is a copy of my tenancy page. Please update your records and leave a contact email."

Italiano:
"Sono il nuovo inquilino dal <data>. La persona che cercate non vive qui. 
Ecco la mia pagina del contratto. Per favore aggiornate i vostri dati."`}
            </pre>
            <p className="text-xs text-gray-600 mt-2">
              Never hand over money for someone else’s bill. Keep a record of the visit and follow up by email.
            </p>
          </div>
        </section>

        {/* =========================================================
            10) HOUSE SHARES / BILLS-INCLUDED / PREPAY
        ========================================================= */}
        <section id="shared" className="mb-12">
          <h2 className="text-2xl font-bold text-green-900 mb-3">10) House shares, bills-included, and prepayment meters</h2>
          <div className="bg-white border rounded-xl p-5 text-sm">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-green-900 mb-1">House shares</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Pick a bill manager or use a shared spreadsheet/app.</li>
                  <li>Agree how to split standing charges when someone travels.</li>
                  <li>Keep everyone as named bill payers for proof of address options.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-green-900 mb-1">Bills-included contracts</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Utilities in rent. Ask for a letter from landlord stating your name and address for proof.</li>
                  <li>Check “fair usage” limits to avoid surcharge surprises.</li>
                  <li>You still need to register with Council Tax if not included by the landlord (many HMOs exempt for students).</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-green-900 mb-1">Prepayment (PAYG) meters</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Top up via key/card/app. Keep emergency credit for weekends.</li>
                  <li>Ask supplier if you can change to credit meter (requires checks/permission).</li>
                  <li>Submit opening readings even if prepaid, to avoid mixing old usage.</li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-gray-600 mt-3">
              For vulnerable residents, ask about Priority Services Register (extra support in outages/communications).
            </p>
          </div>
        </section>

        {/* =========================================================
            FAQ (onsite)
        ========================================================= */}
        <section id="faq" className="bg-white border rounded-xl shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-bold text-green-900 mb-2">FAQ (onsite)</h2>
          <div className="space-y-4 text-sm">
            <details className="group">
              <summary className="cursor-pointer font-semibold text-green-900">Do I have to put every adult on the account?</summary>
              <p className="mt-2">
                Best practice: yes, for energy and water. It helps with proof of address and shared responsibility. Some suppliers allow one named account holder; keep a household note with who pays.
              </p>
            </details>
            <details className="group">
              <summary className="cursor-pointer font-semibold text-green-900">What if I cannot find the meters?</summary>
              <p className="mt-2">
                Ask the landlord/agent and neighbours. Check outside boxes and communal cupboards. For flats, building managers usually know. Take photos once found.
              </p>
            </details>
            <details className="group">
              <summary className="cursor-pointer font-semibold text-green-900">My first bill looks wrong. What now?</summary>
              <p className="mt-2">
                Compare against your opening photos. If estimated, submit actual readings and ask for a corrected bill. Keep everything in your Home Docs folder.
              </p>
            </details>
            <details className="group">
              <summary className="cursor-pointer font-semibold text-green-900">How do I get proof of address quickly?</summary>
              <p className="mt-2">
                Ask for a “new account confirmation” letter from energy/water and register with Council Tax. Pair this with our{" "}
                <Link className="underline text-green-900" href="/community/proof-of-address-without-bills-2025">Proof of Address guide</Link>.
              </p>
            </details>
          </div>
        </section>

        {/* =========================================================
            RELATED
        ========================================================= */}
        <section id="related" className="mt-10">
          <h2 className="text-xl font-bold text-green-900 mb-2">Related Resinaro guides</h2>
          <ul className="list-disc pl-6">
            <li>
              <Link className="underline text-green-900" href="/community/council-tax-italians-2025">
                Council Tax for Italians — Bands, Discounts & Moving-In Steps (2025)
              </Link>
            </li>
            <li>
              <Link className="underline text-green-900" href="/community/proof-of-address-without-bills-2025">
                Proof of Address Without Bills (2025) — 12 Accepted Docs + Templates
              </Link>
            </li>
            <li>
              <Link className="underline text-green-900" href="/community/uk-renting-for-italians-2025">
                UK Renting for Italians — Right to Rent, Referencing & Deposits
              </Link>
            </li>
            <li>
              <Link className="underline text-green-900" href="/community/open-uk-bank-account-no-credit-italians-2025">
                Rejected by UK Banks? Fix KYC & Open Your Account (Easy English)
              </Link>
            </li>
          </ul>
        </section>

        {/* =========================================================
            CTA / SERVICE
        ========================================================= */}
        <section className="mt-10 bg-white border rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-bold text-green-900 mb-2">
            Want us to handle setup in one go?
          </h2>
          <p className="text-sm mb-4">
            We collect your readings and documents, contact suppliers with the right templates, register Council Tax,
            and send a premium PDF pack for your proof of address. Clear, fast, and renter-friendly.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/checkout/move-in-utilities-pack"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-green-700 text-white font-medium"
            >
              Move-In Utilities Pack (+£15)
            </Link>
            <Link
              href="/community/proof-of-address-without-bills-2025"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-green-100 text-green-900 font-medium border"
            >
              Next: Build Proof of Address
            </Link>
          </div>
        </section>

        {/* =========================================================
            DISCLOSURE
        ========================================================= */}
        <p className="mt-8 text-xs text-gray-500 italic">
          This guide is general information, not legal or financial advice. Utility and council processes vary by region and provider.
          Always follow the instructions on your supplier and council websites and the safety guidance on your meters and appliances.
        </p>

        {/* =========================================================
            APPENDICES — EXTRA VALUE & SEO DEPTH
        ========================================================= */}

        {/* Appendix A: Opening reads mini-checklist card */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Appendix A — Opening readings mini-checklist</h2>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Close-up photo of digits (ignore red decimals).</li>
            <li>Wide photo showing meter location.</li>
            <li>Note serial numbers and date.</li>
            <li>File names and cloud backup.</li>
            <li>Send with tenancy page and all adult names.</li>
          </ul>
        </section>

        {/* Appendix B: Italian phrase card for phone calls */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Appendix B — Italian ⇄ Easy English phone phrases</h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Move-in call</h3>
              <pre className="whitespace-pre-line bg-[#F9F6F1] p-3 rounded border">
{`Italiano:
"Buongiorno, mi sono appena trasferito a <indirizzo>. Vorrei registrare l'utenza e comunicare le letture iniziali."

Easy English:
"Hello, I have just moved to <address>. I’d like to register the account and give opening meter readings."`}
              </pre>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Debt letter call</h3>
              <pre className="whitespace-pre-line bg-[#F9F6F1] p-3 rounded border">
{`Italiano:
"Quella fattura è del precedente inquilino. Io sono entrato il <data>. Posso inviare il contratto e le letture?"

Easy English:
"That bill is for the previous tenant. I moved in on <date>. I can send my tenancy page and opening readings."`}
              </pre>
            </div>
          </div>
        </section>

        {/* Appendix C: Meter types & notes */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Appendix C — Common meter types (quick notes)</h2>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li><strong>Single-rate electricity:</strong> one reading total.</li>
            <li><strong>Economy 7/dual-rate:</strong> day and night registers—send both numbers.</li>
            <li><strong>Smart meter:</strong> button cycles to show reading; in-home display is not the meter.</li>
            <li><strong>Prepay:</strong> display shows credit remaining; keep top-up locations handy.</li>
          </ul>
        </section>

        {/* Appendix D: Shared spreadsheet structure */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Appendix D — House share spreadsheet (columns to copy)</h2>
          <div className="bg-white border rounded-lg p-4 text-sm">
            <ul className="list-disc pl-5 space-y-1">
              <li>Date | Supplier | Meter type | Reading | Photo link | Submitted by</li>
              <li>Bill period | Amount | Who paid | Split | Proof link</li>
              <li>Notes (tariff changes, maintenance, outages)</li>
            </ul>
          </div>
        </section>

        {/* Appendix E: Smart meter request email */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Appendix E — Ask for a smart meter (optional)</h2>
          <pre className="whitespace-pre-line bg-[#F9F6F1] p-3 rounded border text-sm">
{`Hello,

Could you advise if a smart meter installation is available at <address>? 
We are tenants with permission from the landlord to book standard installations.

Kind regards,
<Your name>`}
          </pre>
        </section>

        {/* Appendix F: Broadband install permission request to landlord */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Appendix F — Landlord permission email (broadband install)</h2>
          <pre className="whitespace-pre-line bg-[#F9F6F1] p-3 rounded border text-sm">
{`Subject: Permission for broadband installation — <address>

Hello <Landlord/Agent>,

We would like to install <provider> broadband at <address>. 
The engineer may need to drill a small hole/fit an ONT box.
Could you please confirm permission and any conditions?

Thank you,
<Your name>`}
          </pre>
        </section>

        {/* Appendix G: Proof of address letter request to supplier */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Appendix G — Ask supplier for confirmation letter</h2>
          <pre className="whitespace-pre-line bg-[#F9F6F1] p-3 rounded border text-sm">
{`Hello,

Could you please send a confirmation letter for the new account at <address> in the name of <names>, 
showing the start date <date>? We need this for bank/GP registration.

Thank you,
<Your name>`}
          </pre>
        </section>

        {/* Appendix H: Safety quick list (gas, water, electrics) */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Appendix H — Safety quick list (know these spots)</h2>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Gas shutoff valve location</li>
            <li>Water stopcock location</li>
            <li>Fuse box and trip switches</li>
            <li>Boiler pressure and reset button (landlord manual)</li>
            <li>Emergency contacts posted on the fridge</li>
          </ul>
        </section>

        {/* Appendix I: Template — monthly meter reminder (calendar text) */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Appendix I — Calendar reminder text</h2>
          <pre className="whitespace-pre-line bg-[#F9F6F1] p-3 rounded border text-sm">
{`Title: Send monthly meter readings
Notes: Gas/Electric/Water readings + photos → email/portal. Save PDFs in Home Docs. 
When: Monthly, day 1 at 19:00.`}
          </pre>
        </section>

        {/* Appendix J: Data hygiene & filenames */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Appendix J — Data hygiene: filenames & labels</h2>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li><em>2025-02-01_electric_opening_reading.jpg</em></li>
            <li><em>2025-02-01_energy_opening_email.pdf</em></li>
            <li><em>council-tax_registration_confirmation.pdf</em></li>
            <li><em>water_meter_opening_2025-02-01.jpg</em></li>
          </ul>
        </section>

        {/* =========================================================
            FINAL CTA (premium)
        ========================================================= */}
        <section className="mt-10 bg-white border rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-bold text-green-900 mb-2">Too busy? We’ll do utilities + council in one call.</h2>
          <p className="text-sm mb-4">
            We gather your readings, register energy/water/council, request letters for proof of address, and send a single PDF pack for your records.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/checkout/move-in-utilities-pack"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-green-700 text-white font-medium"
            >
              Get the Move-In Utilities Pack (+£15)
            </Link>
            <Link
              href="/community/proof-of-address-without-bills-2025"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-green-100 text-green-900 font-medium border"
            >
              Proof of Address Templates
            </Link>
          </div>
        </section>

        {/* =========================================================
            JSON-LD SCRIPTS
        ========================================================= */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
        />
      </div>
    </main>
  );
}
