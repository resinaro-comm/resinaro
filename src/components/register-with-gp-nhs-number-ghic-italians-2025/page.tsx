// app/community/register-with-gp-nhs-number-ghic-italians-2025/page.tsx
import Link from "next/link";
import Image from "next/image";

/**
 * Register with a GP + Get NHS Number & GHIC (2025) — Easy Italian Guide
 * Audience: Italians in the UK with average English; newcomers; people who need a GP fast.
 * Style: Matches Resinaro community guides (short sentences, clear tables, templates, JSON-LD).
 * Goal: Outrank competitors with depth, clarity, scripts for reception/online portals, and conversion to a small service.
 *
 * Major sections:
 * - Hero
 * - Why this guide
 * - TOC
 * - 1) GP vs NHS Number (simple)
 * - 2) What you need to register (ID & address options)
 * - 3) No proof of address? Workarounds + links to our PoA hub
 * - 4) Register online vs in person (step-by-step)
 * - 5) Find or get your NHS number (methods)
 * - 6) GHIC: who needs it, how to apply, renewals
 * - 7) Reception problems & scripts (out of area, documents)
 * - 8) Children, temporary patients, visitors from Italy
 * - 9) Quick FAQ (onsite)
 * - Related guides, CTA, Disclosure
 * - Appendices A–Q for SEO depth (forms, name formats, out-of-area policy, translation, complaints basics, glossary, etc.)
 * - JSON-LD: FAQ + HowTo (Register with a GP in 7 steps; Find NHS Number)
 */

export const metadata = {
  title:
    "Register with a GP + Get NHS Number & GHIC (2025) — Easy Italian Guide",
  description:
    "Simple 2025 guide for Italians: register with a GP, get or find your NHS number, reception scripts, proof-of-address workarounds, GHIC application, and what to do when a practice refuses you.",
  alternates: { canonical: "/community/register-with-gp-nhs-number-ghic-italians-2025" },
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
        name: "Do I need an NHS number before registering with a GP?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "No. You can register with a GP first. If you do not have an NHS number yet, the practice can help create or find it during registration.",
        },
      },
      {
        "@type": "Question",
        name: "Can a GP refuse to register me because I don’t have proof of address?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Practices should not refuse registration only because you do not have proof of address. However, some practices request it to verify contact details. Use our workarounds and scripts to resolve politely.",
        },
      },
      {
        "@type": "Question",
        name: "I forgot my NHS number. How can I find it?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Check old NHS letters, GP online services, or the NHS App. You can also ask your GP practice for a printout or phone your previous practice to confirm it.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between GP registration and GHIC?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "GP registration gives you access to local primary care. GHIC is a card for medically necessary treatment when you travel in the EU. They are separate processes.",
        },
      },
      {
        "@type": "Question",
        name: "Can I register my children if I’m still waiting for documents?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. Bring ID and any paperwork you have for the child. Practices generally register children even while parents complete other steps.",
        },
      },
      {
        "@type": "Question",
        name: "I am out of a practice’s catchment area. What can I do?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Some practices accept out-of-area registrations (with limited home visits). If not, use the NHS ‘find a GP’ tool to choose one in your area, or ask about temporary patient status.",
        },
      },
    ],
  };

  // =========================================================
  // JSON-LD: HowTo (Register with a GP + Find NHS number)
  // =========================================================
  const howToRegisterJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Register with a GP in 7 steps (2025)",
    totalTime: "PT15M",
    step: [
      { "@type": "HowToStep", name: "Find a GP", text: "Use the NHS website to find a practice near your postcode." },
      { "@type": "HowToStep", name: "Check catchment", text: "See if the practice covers your address or accepts out-of-area patients." },
      { "@type": "HowToStep", name: "Prepare documents", text: "Bring ID and any address proof you have; see our workarounds if you lack proof." },
      { "@type": "HowToStep", name: "Register online or in person", text: "Complete the form; use simple English answers; ask for help if needed." },
      { "@type": "HowToStep", name: "Ask for confirmation letter", text: "Request a short letter confirming your registration and address." },
      { "@type": "HowToStep", name: "Set up online access", text: "Activate the NHS App or the practice portal when available." },
      { "@type": "HowToStep", name: "Keep copies", text: "Save PDFs of registration and confirmation for other services (banks, council)." },
    ],
  };

  const howToFindNhsNumberJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Find your NHS number in 5 steps (2025)",
    totalTime: "PT10M",
    step: [
      { "@type": "HowToStep", name: "Search old letters", text: "Look for NHS or hospital letters; the number appears near your name." },
      { "@type": "HowToStep", name: "Check NHS App", text: "If you can sign in, the app usually shows your NHS number." },
      { "@type": "HowToStep", name: "GP online portal", text: "Log in to the practice portal to view your details." },
      { "@type": "HowToStep", name: "Call or visit the GP", text: "Ask reception to confirm your NHS number (with ID)." },
      { "@type": "HowToStep", name: "Update your records", text: "Store the number in a safe note; use the same name format everywhere." },
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
            src="/images/gp-nhs-number-hero.png"
            alt="Register with a GP and get your NHS number and GHIC — simple steps for Italians"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
          <div className="absolute bottom-0 w-full p-6 text-white">
            <span className="inline-block mb-2 px-3 py-1 rounded-full text-xs font-medium bg-green-700">
              HEALTH & SETUP
            </span>
            <h1 className="text-2xl md:text-4xl font-bold">
              Register with a GP + Get NHS Number & GHIC (2025) — Easy Italian Guide
            </h1>
          </div>
        </div>

        {/* =========================================================
            WHY THIS GUIDE
        ========================================================= */}
        <section className="bg-white border rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-bold text-green-900 mb-2">
            Why this guide (and how it saves you stress)
          </h2>
          <p className="mb-3">
            You need a GP to access everyday healthcare in the UK. Many Italians get stuck at reception,
            worry about address proof, or do not know how to find their NHS number. This guide solves those
            problems in plain English with scripts, checklists, and copy-paste templates you can use today.
          </p>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Quick differences: GP vs NHS number vs GHIC.</li>
            <li>Exact steps for online and in-person registration.</li>
            <li>Workarounds if you lack proof of address (accepted options).</li>
            <li>Polite scripts to resolve “out-of-area” and “proof” issues.</li>
          </ul>
        </section>

        {/* =========================================================
            TOC
        ========================================================= */}
        <nav aria-label="Contents" className="mb-8">
          <ul className="flex flex-wrap gap-3 text-sm">
            <li><a className="underline text-green-900" href="#gp-vs-nhs">1) GP vs NHS Number (simple)</a></li>
            <li><a className="underline text-green-900" href="#requirements">2) What you need to register</a></li>
            <li><a className="underline text-green-900" href="#no-poa">3) No proof of address? Workarounds</a></li>
            <li><a className="underline text-green-900" href="#register-steps">4) Register online vs in person</a></li>
            <li><a className="underline text-green-900" href="#find-nhs">5) Find or get your NHS Number</a></li>
            <li><a className="underline text-green-900" href="#ghic">6) GHIC: who needs it & how to apply</a></li>
            <li><a className="underline text-green-900" href="#reception-issues">7) Reception problems + scripts</a></li>
            <li><a className="underline text-green-900" href="#family">8) Children, temporary patients, visitors</a></li>
            <li><a className="underline text-green-900" href="#faq">9) Quick FAQ</a></li>
            <li><a className="underline text-green-900" href="#related">Related guides</a></li>
          </ul>
        </nav>

        {/* =========================================================
            1) GP vs NHS NUMBER
        ========================================================= */}
        <section id="gp-vs-nhs" className="bg-white border rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-bold text-green-900 mb-2">1) GP vs NHS Number (simple)</h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">GP (General Practitioner)</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Your local family doctor practice.</li>
                <li>First contact for non-emergency health issues.</li>
                <li>Refers you to specialists when needed.</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">NHS Number</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Your personal identifier in the NHS system.</li>
                <li>Stays with you for life in England/Wales.</li>
                <li>You can register with a GP first, then get/confirm this number.</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-gray-600 mt-3">
            GHIC is different: it is for medically necessary care when you travel in the EU. See section 6.
          </p>
        </section>

        {/* =========================================================
            2) REQUIREMENTS
        ========================================================= */}
        <section id="requirements" className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">2) What you need to register (simple list)</h2>
          <div className="bg-white border rounded-xl p-5 text-sm">
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>ID</strong>: passport or national ID card.</li>
              <li><strong>Address details</strong>: tenancy, employer letter, GP letter from previous practice, council letter, etc.</li>
              <li><strong>Previous GP (if any)</strong>: name/address; not mandatory if new to the UK.</li>
              <li><strong>Medical info</strong>: regular medications, allergies, key conditions (list in English).</li>
            </ul>
            <p className="text-xs text-gray-600 mt-3">
              Many practices register patients even without strong proof of address. Use our workarounds if reception asks.
            </p>
          </div>
        </section>

        {/* =========================================================
            3) NO PROOF OF ADDRESS? WORKAROUNDS
        ========================================================= */}
        <section id="no-poa" className="bg-white border rounded-xl shadow-sm p-6 mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">3) No proof of address? Accepted workarounds</h2>
          <p className="mb-3">
            If you do not have a bill yet, you still have options. Bring what you can from this list and use our scripts:
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Option A</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Tenancy agreement in your name.</li>
                <li>Landlord/agent letter (headed paper).</li>
                <li>Bank welcome letter posted to your address.</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Option B</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Employer letter confirming your address.</li>
                <li>Council letter if already registered.</li>
                <li>Any NHS/hospital letter to your address.</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Option C (bridge)</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>C/O host permission note + mailbox label.</li>
                <li>Ask practice for registration confirmation letter.</li>
                <li>Use that letter for banks and other services later.</li>
              </ul>
            </div>
          </div>
          <p className="text-sm mt-3">
            Need full templates and a premium “proof” playbook? See{" "}
            <Link className="underline text-green-900" href="/community/proof-of-address-without-bills-2025">
              Proof of Address Without Bills (2025)
            </Link>
            .
          </p>
        </section>

        {/* =========================================================
            4) REGISTER ONLINE VS IN PERSON
        ========================================================= */}
        <section id="register-steps" className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">4) Register online vs in person (step-by-step)</h2>
          <div className="bg-white border rounded-xl p-5 text-sm">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-green-900 mb-1">Online (many practices support this)</h3>
                <ol className="list-decimal pl-5 space-y-1">
                  <li>Find your practice website and click “Register as a new patient”.</li>
                  <li>Fill the form with simple English; match your name exactly as in your ID.</li>
                  <li>Upload ID and any address proof you have (or explain you are new and provide alternatives).</li>
                  <li>Ask for a confirmation letter or email once approved.</li>
                </ol>
              </div>
              <div>
                <h3 className="font-semibold text-green-900 mb-1">In person (reception desk)</h3>
                <ol className="list-decimal pl-5 space-y-1">
                  <li>Bring ID and any documents from section 3.</li>
                  <li>Use our polite script if they ask for proof you don’t have.</li>
                  <li>Request a printed registration confirmation for your records.</li>
                  <li>Ask how to access the NHS App or practice portal.</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            5) FIND OR GET YOUR NHS NUMBER
        ========================================================= */}
        <section id="find-nhs" className="bg-white border rounded-xl shadow-sm p-6 mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">5) Find or get your NHS Number (fast methods)</h2>
          <p className="mb-3">
            If you already used NHS services before, you likely have a number. If not, the practice can help create it.
            Try these methods to find it quickly:
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">DIY methods</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Check the NHS App or GP online services.</li>
                <li>Look at any NHS/hospital letter you received.</li>
                <li>Search your email for PDFs with “NHS number”.</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Ask your practice</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Call reception and ask for your NHS number (have ID details ready).</li>
                <li>Visit with ID; request a printout with the number shown clearly.</li>
                <li>Store it in a safe note; use the same name format everywhere.</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-gray-600 mt-3">
            NHS numbers are for England/Wales. Scotland and Northern Ireland use different systems; your practice will advise.
          </p>
        </section>

        {/* =========================================================
            6) GHIC
        ========================================================= */}
        <section id="ghic" className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">6) GHIC: who needs it & how to apply (EU travel)</h2>
          <div className="bg-white border rounded-xl p-5 text-sm">
            <p className="mb-3">
              The GHIC is a free card for medically necessary treatment when you travel in the EU.
              It is not travel insurance but it helps you access state-provided care abroad on similar terms to local residents.
            </p>
            <ol className="list-decimal pl-5 space-y-1">
              <li>Apply online on the official NHS/UK government website (free).</li>
              <li>Use your UK address and personal details that match your GP records.</li>
              <li>Keep the physical card safe; digital copies help but carry the card when possible.</li>
            </ol>
            <p className="text-xs text-gray-600 mt-3">
              Rules can change; always use official guidance and avoid third-party sites that charge fees.
            </p>
          </div>
        </section>

        {/* =========================================================
            7) RECEPTION ISSUES & SCRIPTS
        ========================================================= */}
        <section id="reception-issues" className="bg-white border rounded-xl shadow-sm p-6 mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">7) Reception problems (and scripts that work)</h2>
          <p className="mb-3">
            Stay calm. Use short sentences. Smile. Most issues resolve in one conversation.
          </p>

          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900 mb-1">A) Proof of address requested</h3>
              <pre className="whitespace-pre-line bg-[#F9F6F1] p-3 rounded border">
{`Hello, I have just moved to this address.
I do not have a bill yet, but I can give a tenancy / employer letter.
If needed, can we register me now and I will bring a confirmation letter later?`}
              </pre>
              <p className="text-xs text-gray-600 mt-2">
                If they insist, ask what exact documents they accept and follow our Proof of Address guide.
              </p>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900 mb-1">B) Out-of-area refusal</h3>
              <pre className="whitespace-pre-line bg-[#F9F6F1] p-3 rounded border">
{`Hello, I understand I am outside your area.
Do you accept out-of-area registrations? I understand home visits may be limited.
If not, can you please advise a practice that covers my postcode?`}
              </pre>
              <p className="text-xs text-gray-600 mt-2">
                If they do not accept, use the NHS “find a GP” tool and pick one within your area.
              </p>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900 mb-1">C) Language barrier</h3>
              <pre className="whitespace-pre-line bg-[#F9F6F1] p-3 rounded border">
{`Hello, my English is simple. Can I speak slowly, please?
I need to register and ask for a short letter confirming my address for my bank.`}
              </pre>
              <p className="text-xs text-gray-600 mt-2">
                Some practices may offer interpreting services or allow a friend to help.
              </p>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900 mb-1">D) NHS number unknown</h3>
              <pre className="whitespace-pre-line bg-[#F9F6F1] p-3 rounded border">
{`I do not know my NHS number. Could you help me find it or create it during registration?`}
              </pre>
              <p className="text-xs text-gray-600 mt-2">
                Bring your ID. If you used NHS before, they can locate you; if not, they can register you and you will get a number.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================
            8) FAMILY & SPECIAL CASES
        ========================================================= */}
        <section id="family" className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">8) Children, temporary patients, visitors</h2>
          <div className="bg-white border rounded-xl p-5 text-sm">
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h3 className="font-semibold text-green-900 mb-1">Children</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Bring the child’s ID/passport if available.</li>
                  <li>Share any medical history and vaccines.</li>
                  <li>Many practices register children quickly—ask kindly.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-green-900 mb-1">Temporary patients</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>If you are in the area for a short period, ask for temporary registration.</li>
                  <li>Useful for short stays; not a long-term solution.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-green-900 mb-1">Visitors from Italy</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Emergency care is always available.</li>
                  <li>For planned care, check rules and travel insurance.</li>
                  <li>GHIC helps with medically necessary care in the EU (not the UK); for UK care, follow local guidance.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            9) QUICK FAQ (onsite)
        ========================================================= */}
        <section id="faq" className="bg-white border rounded-xl shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-bold text-green-900 mb-2">9) Quick FAQ</h2>
          <div className="space-y-4 text-sm">
            <details className="group">
              <summary className="cursor-pointer font-semibold text-green-900">
                How long does registration take?
              </summary>
              <p className="mt-2">
                Often a few days. Some practices are faster, some slower. Ask for a confirmation letter or email and keep a copy.
              </p>
            </details>
            <details className="group">
              <summary className="cursor-pointer font-semibold text-green-900">
                Can I get appointments before registration is finished?
              </summary>
              <p className="mt-2">
                For urgent issues, call and explain; they can advise on options. For routine care, wait for registration confirmation when possible.
              </p>
            </details>
            <details className="group">
              <summary className="cursor-pointer font-semibold text-green-900">
                The practice portal asks for details I do not have. What now?
              </summary>
              <p className="mt-2">
                Call reception and register manually. Later, they can enable online access and give codes for the NHS App.
              </p>
            </details>
            <details className="group">
              <summary className="cursor-pointer font-semibold text-green-900">
                My name has accents; systems reject it. Will that block me?
              </summary>
              <p className="mt-2">
                Use a consistent non-accent version across all services (bank, council, GP). This avoids mismatches.
              </p>
            </details>
          </div>
        </section>

        {/* =========================================================
            RELATED GUIDES
        ========================================================= */}
        <section id="related" className="mt-10">
          <h2 className="text-xl font-bold text-green-900 mb-2">Related Resinaro guides</h2>
          <ul className="list-disc pl-6">
            <li>
              <Link className="underline text-green-900" href="/community/proof-of-address-without-bills-2025">
                Proof of Address Without Bills (2025) — 12 Accepted Docs + Templates
              </Link>
            </li>
            <li>
              <Link className="underline text-green-900" href="/community/open-uk-bank-account-no-credit-italians-2025">
                Rejected by UK Banks? Fix KYC & Open Your Account (Easy English)
              </Link>
            </li>
            <li>
              <Link className="underline text-green-900" href="/community/council-tax-italians-2025">
                Council Tax for Italians — Bands, Discounts & Moving-In Steps (2025)
              </Link>
            </li>
          </ul>
        </section>

        {/* =========================================================
            CTA / SERVICES
        ========================================================= */}
        <section className="mt-10 bg-white border rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-bold text-green-900 mb-2">
            Want a tidy “GP Registration Pack” prepared for you?
          </h2>
          <p className="text-sm mb-4">
            We assemble your ID/Address bundle, fill the practice form (where allowed), provide Italian/English reception scripts,
            and request the confirmation letter for you. Clear, fast, no stress.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/checkout/gp-registration-pack"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-green-700 text-white font-medium"
            >
              GP Registration Pack (+£15)
            </Link>
            <Link
              href="/community/proof-of-address-without-bills-2025"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-green-100 text-green-900 font-medium border"
            >
              Build Proof of Address Next
            </Link>
          </div>
        </section>

        {/* =========================================================
            DISCLOSURE
        ========================================================= */}
        <p className="mt-8 text-xs text-gray-500 italic">
          This guide is general information, not medical or legal advice. GP practice policies and online portals change over time.
          Always follow instructions on your practice website and official NHS guidance.
        </p>

        {/* =========================================================
            APPENDICES — SEO DEPTH & PRACTICAL VALUE
        ========================================================= */}

        {/* Appendix A: Reception Italian/English mini-cards */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Appendix A — Reception mini-cards (Italian ⇄ Easy English)</h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Italian → English</h3>
              <pre className="whitespace-pre-line bg-[#F9F6F1] p-3 rounded border">
{`Italiano:
"Buongiorno, vorrei registrarmi con il medico di base. Ho appena traslocato e non ho ancora una bolletta.
Posso usare il contratto d’affitto o una lettera del datore di lavoro?" 

Easy English:
"Hello, I would like to register with the GP. I have just moved and I do not have a bill yet.
Can I use my tenancy or an employer letter?"`}
              </pre>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Ask for letter</h3>
              <pre className="whitespace-pre-line bg-[#F9F6F1] p-3 rounded border">
{`Italiano:
"Per favore, potete darmi una conferma di registrazione con il mio indirizzo per la banca?"

Easy English:
"Could I have a short registration confirmation letter with my address for my bank, please?"`}
              </pre>
            </div>
          </div>
        </section>

        {/* Appendix B: Registration checklist (printable feel) */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Appendix B — 10-minute registration checklist</h2>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Choose a practice covering your postcode (or ask about out-of-area).</li>
            <li>Prepare ID + any address proof you have (tenancy/employer/council/GP letter).</li>
            <li>Bring a list of medications/allergies in English.</li>
            <li>Complete the registration form (online or at reception).</li>
            <li>Ask for confirmation letter and online access instructions.</li>
            <li>Store documents in your cloud folder; save PDFs with clear names.</li>
          </ul>
        </section>

        {/* Appendix C: Name formats & accents (consistency) */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Appendix C — Name formats (accents & double surnames)</h2>
          <p className="text-sm mb-3">
            Some GP systems do not support accents. Choose a non-accent version and use it consistently everywhere
            (bank, council, GP, DVLA). Consistency reduces mismatches and delays.
          </p>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Store your chosen format in a note and reuse it.</li>
            <li>Use the same order for double surnames; avoid switching.</li>
            <li>If the practice changes your record later, update other services too.</li>
          </ul>
        </section>

        {/* Appendix D: Out-of-area registrations explained (concept) */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Appendix D — Out-of-area registrations (overview)</h2>
          <p className="text-sm mb-3">
            Some practices accept patients outside their usual area but may limit home visit services. It is allowed,
            but each practice decides. If refused, choose a practice that covers your postcode.
          </p>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Ask politely whether they accept out-of-area patients.</li>
            <li>If not, request advice on the nearest eligible practice.</li>
            <li>Temporary registration is a short-term alternative if you are visiting.</li>
          </ul>
        </section>

        {/* Appendix E: Online portals vs NHS App (access basics) */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Appendix E — Online access: portal & NHS App</h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Practice portal</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Used for repeat prescriptions and messages.</li>
                <li>Ask reception for login details after registration.</li>
                <li>Keep your email/phone current for security codes.</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">NHS App</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Shows your NHS number and some medical info.</li>
                <li>Often requires identity checks on first use.</li>
                <li>Use the same name format as the practice record.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Appendix F: Template — Email to practice for confirmation letter */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Appendix F — Email template: registration confirmation letter</h2>
          <pre className="whitespace-pre-line bg-[#F9F6F1] p-3 rounded border text-sm">
{`Subject: Registration confirmation letter request — <Your Full Name>

Hello,

I recently registered at your practice. Could you please provide a short letter confirming my registration and address?
This helps me complete other UK setup steps (bank/council).

Name: <Your Full Name>
Address: <House number, Street, Town/City, Postcode>
Date of birth: <DD/MM/YYYY>

Thank you very much,
<Your Name>`}
          </pre>
        </section>

        {/* Appendix G: Template — If reception refuses without proof */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Appendix G — Script: if asked for proof you don’t have</h2>
          <pre className="whitespace-pre-line bg-[#F9F6F1] p-3 rounded border text-sm">
{`Hello, I have just moved here and I am new to the UK.
I do not have a bill yet. I can provide my tenancy / employer letter.
Could we please proceed with registration and I will bring a confirmation letter soon?`}
          </pre>
          <p className="text-xs text-gray-600 mt-2">
            Keep it polite. Ask exactly what they would accept if they still need proof (tenancy, bank letter, council letter).
          </p>
        </section>

        {/* Appendix H: Template — NHS number confirmation call notes */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Appendix H — Phone script: find your NHS number</h2>
          <pre className="whitespace-pre-line bg-[#F9F6F1] p-3 rounded border text-sm">
{`Hello, my name is <Your Full Name>. I am registered with your practice.
Could you confirm my NHS number, please? I can verify my identity.

DOB: <DD/MM/YYYY>
Address: <House number, Street, Postcode>`}
          </pre>
          <p className="text-xs text-gray-600 mt-2">
            Practices will verify your identity first. Bring ID if you visit in person.
          </p>
        </section>

        {/* Appendix I: Medication list template in English (quick) */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Appendix I — Medication list (English template)</h2>
          <div className="bg-white border rounded-lg p-4 text-sm">
            <ul className="list-disc pl-5 space-y-1">
              <li>Medication name — strength — dose — times per day.</li>
              <li>Allergies: name and reaction.</li>
              <li>Past conditions or surgeries (year).</li>
            </ul>
          </div>
        </section>

        {/* Appendix J: Temporary patient registration basics (concept only) */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Appendix J — Temporary patients (overview)</h2>
          <p className="text-sm mb-3">
            If you are in the area short-term, ask about temporary registration. It provides access for a limited period.
            For longer stays, complete a full registration at a practice that covers your address.
          </p>
        </section>

        {/* Appendix K: If you move house — update flow */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Appendix K — Moving house: update your details</h2>
          <ol className="list-decimal pl-5 text-sm space-y-1">
            <li>Tell your practice your new address; ask if you remain in their area.</li>
            <li>If not, register with a new practice and ask for a confirmation letter.</li>
            <li>Update the NHS App and any hospital clinics you attend.</li>
          </ol>
        </section>

        {/* Appendix L: Translation help & advocacy tone (stay calm) */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Appendix L — Language & advocacy tips</h2>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Use short sentences and simple words; write notes before calling.</li>
            <li>Ask if the practice can provide an interpreter.</li>
            <li>Bring a friend for support if allowed.</li>
          </ul>
        </section>

        {/* Appendix M: Simple glossary (NHS words) */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Appendix M — Mini glossary</h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="border rounded-lg p-4">
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>GP</strong>: family doctor practice.</li>
                <li><strong>NHS Number</strong>: personal ID for NHS records.</li>
                <li><strong>Referral</strong>: GP sends you to a specialist.</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4">
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Practice portal</strong>: website area for patients.</li>
                <li><strong>Catchment area</strong>: postcode area a practice covers.</li>
                <li><strong>Out-of-area</strong>: registered outside the usual area; limits may apply.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Appendix N: Record-keeping & filenames (pro style) */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Appendix N — Keep records like a pro</h2>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>File names: <em>surname_gp_registration_YYYY-MM.pdf</em></li>
            <li>Store confirmation letters, portal screenshots, and emails.</li>
            <li>Keep a tiny “health admin” folder for future needs.</li>
          </ul>
        </section>

        {/* Appendix O: Complaints basics (if treated unfairly) */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Appendix O — If something feels unfair</h2>
          <p className="text-sm mb-3">
            Most issues resolve politely at reception. If you feel you were refused incorrectly, ask for the practice manager
            and calmly describe what happened. Keep notes and any emails. Follow official NHS guidance for the complaints process.
          </p>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Ask for reasons in writing; save them.</li>
            <li>Restate your request in simple, polite language.</li>
            <li>Seek help from local patient support where available.</li>
          </ul>
        </section>

        {/* Appendix P: Email/letter template — out-of-area enquiry */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Appendix P — Email template: out-of-area enquiry</h2>
          <pre className="whitespace-pre-line bg-[#F9F6F1] p-3 rounded border text-sm">
{`Subject: Out-of-area registration enquiry — <Your Postcode>

Hello,

I live at <full address, postcode>. Do you accept out-of-area registrations?
I understand home visits may be limited. If not, could you please advise a practice that covers my postcode?

Thank you,
<Your Full Name>
<Contact details>`}
          </pre>
        </section>

        {/* Appendix Q: Italian language note for families (concise) */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-12">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Appendix Q — Nota per famiglie italiane</h2>
          <p className="text-sm mb-3">
            Portate i documenti che avete e registratevi con calma. Chiedete una breve lettera di conferma per banca/consiglio.
            Tenete una cartella con tutti i PDF (registrazione, lettere, email). Se qualcosa non è chiaro, seguite gli script.
          </p>
        </section>

        {/* =========================================================
            FINAL CTA (premium)
        ========================================================= */}
        <section className="mt-10 bg-white border rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-bold text-green-900 mb-2">
            Need a hand? We’ll prepare your GP Registration Pack today.
          </h2>
          <p className="text-sm mb-4">
            We organise your documents, fill the form (where allowed), write your scripts, and request your confirmation letter.
            You walk in ready—or submit online with confidence.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/checkout/gp-registration-pack"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-green-700 text-white font-medium"
            >
              Get the GP Registration Pack (+£15)
            </Link>
            <Link
              href="/community/proof-of-address-without-bills-2025"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-green-100 text-green-900 font-medium border"
            >
              Build Proof of Address First
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToRegisterJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToFindNhsNumberJsonLd) }}
        />
      </div>
    </main>
  );
}
