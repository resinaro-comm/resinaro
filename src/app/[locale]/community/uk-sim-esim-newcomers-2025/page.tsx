// app/community/uk-sim-esim-newcomers-2025/page.tsx
import Link from "next/link";
import Image from "next/image";

/**
 * UK Mobile for Newcomers (2025) — Best SIM & eSIM, PAYG vs Monthly, EU Roaming, No Credit Check
 *
 * Audience:
 *  - Italians and other newcomers landing in the UK who need cheap, reliable mobile service immediately.
 *  - Average English readers who want simple choices and copy-paste support scripts.
 *
 * What this guide does:
 *  - Explains SIM vs eSIM, PAYG vs 30-day monthly, and no-credit-check options.
 *  - Shows a decision tree, comparison tables, porting steps, and APN/network-fix checklists.
 *  - Includes “copy-paste” chats for failed eSIM activation, number ports, and roaming issues.
 *
 * Style:
 *  - Same Resinaro format: calm, premium, practical. Easy English + tiny Italian notes.
 *  - Big hero, TOC, crisp H2s, tables, scripts, JSON-LD (FAQ + HowTo).
 *
 * SEO:
 *  - Targets: “best SIM UK 2025”, “eSIM UK”, “no credit check SIM”, “PAYG vs monthly”, “EU roaming UK”, “keep Italian number in UK”.
 *
 * Safety:
 *  - General information; always check the provider’s latest terms and fair-use policies.
 *  - We do not guarantee speeds/coverage; test at your address and workplace.
 */

export const metadata = {
  title:
    "UK Mobile for Newcomers (2025) — Best SIM & eSIM, PAYG vs Monthly, EU Roaming, No Credit Check",
  description:
    "Easy 2025 guide for UK mobile: SIM vs eSIM, PAYG vs monthly, no-credit-check deals, EU roaming rules, porting your number, APN fixes, and copy-paste support scripts. Designed for Italians & newcomers.",
  alternates: { canonical: "/community/uk-sim-esim-newcomers-2025" },
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
        name: "Do I need a UK bank account or credit score to get a SIM?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "No. Many providers offer prepaid (PAYG) or rolling 30-day plans you can pay with a debit/credit card or even a foreign card. These do not run a UK credit check.",
        },
      },
      {
        "@type": "Question",
        name: "Is eSIM available for newcomers?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. Several UK providers support eSIM on modern phones. You scan a QR code and activate within minutes. Keep Wi-Fi on during activation.",
        },
      },
      {
        "@type": "Question",
        name: "Which is cheaper: PAYG or monthly?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "If you use data every day, 30-day monthly bundles are usually cheaper per GB. If you barely use data or only need a backup, PAYG top-ups can be cheaper overall.",
        },
      },
      {
        "@type": "Question",
        name: "Can I keep my old number from Italy?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "You can keep your Italian number active via roaming or parking, and use a UK SIM for local calls/data. If you already have a UK number, you can port it between UK providers via a PAC code.",
        },
      },
      {
        "@type": "Question",
        name: "Is EU roaming included in UK plans after Brexit?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Some UK providers still include EU roaming with fair-use limits, while others charge or cap usage. Always check your plan’s roaming policy before travel.",
        },
      },
      {
        "@type": "Question",
        name: "Why is my data not working after installing eSIM?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Check APN settings, enable mobile data/roaming, restart phone, and ensure the eSIM line is set as the data line. Our troubleshooting section has step-by-step fixes.",
        },
      },
    ],
  };

  // =========================================================
  // JSON-LD: HowTo — Activate a UK eSIM in 7 steps
  // =========================================================
  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Activate a UK eSIM in 7 steps",
    totalTime: "PT10M",
    step: [
      { "@type": "HowToStep", name: "Check phone compatibility", text: "Ensure your phone supports eSIM and is unlocked." },
      { "@type": "HowToStep", name: "Choose provider & plan", text: "Pick a 30-day bundle or PAYG from a UK provider that offers eSIM." },
      { "@type": "HowToStep", name: "Purchase & get QR", text: "Buy online and receive an eSIM QR code via email or account portal." },
      { "@type": "HowToStep", name: "Scan QR with Wi-Fi on", text: "Keep Wi-Fi active; scan the QR code in your phone’s ‘Add eSIM’ menu." },
      { "@type": "HowToStep", name: "Set data line & APN", text: "Select the eSIM for mobile data. APN may auto-fill; confirm or enter provider APN." },
      { "@type": "HowToStep", name: "Restart phone", text: "Restart to refresh network registration and data settings." },
      { "@type": "HowToStep", name: "Test calls/data", text: "Open a website, make a test call, and run a speed test if needed." },
    ],
  };

  // Helper arrays used for rendering comparison tables (values are illustrative placeholders; readers should check current provider pages)
  const networkNotes = [
    { k: "Coverage", v: "Varies by area. Always test at home/work/school." },
    { k: "Speeds", v: "Network load & device affect performance. 5G where available." },
    { k: "Hotspot", v: "Most plans allow tethering; check fair-use terms." },
    { k: "Roaming", v: "EU roaming policies differ. Confirm allowances & daily caps." },
    { k: "Credit checks", v: "PAYG/rolling plans often skip credit checks. Device financing may require checks." },
  ];

  const planComparisons = [
    {
      plan: "PAYG Top-Up",
      bestFor: "Light users, backup SIMs, tourists",
      pros: ["No contract", "Top up when needed", "No credit check"],
      cons: ["Higher cost per GB", "Manual top-ups"],
    },
    {
      plan: "30-Day Rolling Bundle",
      bestFor: "Daily data, stable monthly usage",
      pros: ["Cheaper per GB", "Cancel/upgrade monthly", "Card autopay"],
      cons: ["Renew every 30 days", "Fair-use on hotspot/roaming"],
    },
    {
      plan: "12-Month SIM-Only",
      bestFor: "Longer stays, steady usage",
      pros: ["Best value per GB", "Stable monthly bill"],
      cons: ["Commitment", "Possible credit check"],
    },
  ];

  const troubleshootingItems = [
    { issue: "No data after eSIM install", fix: "Check APN, toggle mobile data/roaming, restart phone, set eSIM as data line." },
    { issue: "Calls fail", fix: "Enable VoLTE/4G calling if supported; check line selection; try airplane mode toggle." },
    { issue: "Can’t receive SMS codes", fix: "Set eSIM as default for SMS temporarily; wait for network registration; try resend." },
    { issue: "Number port delay", fix: "Check PAC date/time window; keep both SIMs active; contact both providers with ticket." },
    { issue: "International calls blocked", fix: "Top up sufficient credit; enable international add-on if required; check dial format +44." },
  ];

  const portingGlossary = [
    { t: "PAC", d: "Porting Authorisation Code (move your UK number to another UK provider)." },
    { t: "STAC", d: "Service Termination Authorisation Code (cancel number; not for porting)." },
    { t: "RCD", d: "Requested Completion Date (the day your number moves)." },
    { t: "Split Port", d: "When calls/texts land on different SIMs during port window (temporary)." },
    { t: "Fallback", d: "Provider pauses the port if there is a mismatch; they will ask for ID/account fix." },
  ];

  return (
    <main className="bg-[#F9F6F1] text-gray-800 py-12">
      <div className="container mx-auto max-w-5xl px-6">
        {/* =========================================================
            HERO
        ========================================================= */}
        <div className="relative w-full h-72 md:h-96 mb-8 overflow-hidden rounded-xl">
          <Image
            src="/images/mobile-sim-esim.png"
            alt="UK mobile guide: best SIM & eSIM, PAYG vs monthly, EU roaming, no credit check — 2025"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
          <div className="absolute bottom-0 w-full p-6 text-white">
            <span className="inline-block mb-2 px-3 py-1 rounded-full text-xs font-medium bg-green-700">
              MOBILE & INTERNET
            </span>
            <h1 className="text-2xl md:text-4xl font-bold">
              UK Mobile for Newcomers (2025) — Best SIM & eSIM, PAYG vs Monthly, EU Roaming, No Credit Check
            </h1>
          </div>
        </div>

        {/* =========================================================
            WHY THIS GUIDE
        ========================================================= */}
        <section className="bg-white border rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Why this guide (and how it saves you money)</h2>
          <p className="mb-3">
            When you land in the UK, you need mobile data instantly—bank logins, maps, job messages, landlord calls.
            This guide gives you safe choices: no-credit-check plans, eSIM quick starts, and a decision tree that picks the cheapest option
            for your real life (student, worker, au pair, family). Copy-paste our support scripts to fix issues fast.
          </p>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>SIM vs eSIM explained in Easy English (with Italian notes).</li>
            <li>PAYG vs 30-day vs 12-month: what to pick and why.</li>
            <li>Porting, APN, roaming, and bank 3-D Secure SMS codes—sorted.</li>
          </ul>
        </section>

        {/* =========================================================
            TOC
        ========================================================= */}
        <nav aria-label="Contents" className="mb-8">
          <ul className="flex flex-wrap gap-3 text-sm">
            <li><a className="underline text-green-900" href="#decision">1) Decision tree: pick your plan in 60 seconds</a></li>
            <li><a className="underline text-green-900" href="#compare">2) Compare: PAYG vs 30-day vs 12-month</a></li>
            <li><a className="underline text-green-900" href="#esim">3) eSIM quick start (step-by-step)</a></li>
            <li><a className="underline text-green-900" href="#porting">4) Keep your number: PAC port guide</a></li>
            <li><a className="underline text-green-900" href="#roaming">5) EU roaming, Italy trips & fair-use</a></li>
            <li><a className="underline text-green-900" href="#fix">6) APN, network & SMS fixes (copy-paste)</a></li>
            <li><a className="underline text-green-900" href="#dual-sim">7) Dual-SIM setup: UK+IT smart combos</a></li>
            <li><a className="underline text-green-900" href="#faq">FAQ (onsite)</a></li>
            <li><a className="underline text-green-900" href="#related">Related guides</a></li>
          </ul>
        </nav>

        {/* =========================================================
            1) DECISION TREE
        ========================================================= */}
        <section id="decision" className="bg-white border rounded-xl shadow-sm p-6 mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">1) Decision tree: pick your plan in 60 seconds</h2>
          <div className="bg-[#F9F6F1] border rounded-lg p-4 text-sm">
            <ol className="list-decimal pl-5 space-y-2">
              <li>
                <strong>Do you need UK phone service <em>today</em> and have a modern phone?</strong>  
                If yes → choose <strong>eSIM 30-day rolling</strong>. If your phone doesn’t support eSIM → physical SIM.
              </li>
              <li>
                <strong>Do you need a UK plan without credit check?</strong>  
                Choose <strong>PAYG</strong> or <strong>30-day rolling</strong> paid by card.
              </li>
              <li>
                <strong>Will you stay 6–12+ months and use 10–50GB monthly?</strong>  
                Consider <strong>12-month SIM-only</strong> (best £/GB), but check early-exit fees.
              </li>
              <li>
                <strong>Keep Italian number for banking?</strong>  
                Use <strong>Dual-SIM/eSIM</strong>: UK plan for data/calls + Italian SIM for OTPs.
              </li>
              <li>
                <strong>Travel to EU often?</strong>  
                Pick a plan with <strong>EU roaming included</strong> (fair-use applies), or add a travel eSIM on trip days.
              </li>
            </ol>
          </div>
          <p className="text-xs text-gray-600 mt-3">
            Nota italiana: “ricaricabile” = PAYG top-up; “abbonamento mensile” = 30-day rolling; “vincolo 12 mesi” = 12-month contract.
          </p>
        </section>

        {/* =========================================================
            2) COMPARE: PAYG vs 30-DAY vs 12-MONTH
        ========================================================= */}
        <section id="compare" className="mb-12">
          <h2 className="text-2xl font-bold text-green-900 mb-3">2) Compare: PAYG vs 30-day vs 12-month</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border rounded-lg">
              <thead className="bg-[#F9F6F1]">
                <tr>
                  <th className="text-left p-3 border-b">Plan Type</th>
                  <th className="text-left p-3 border-b">Best for</th>
                  <th className="text-left p-3 border-b">Pros</th>
                  <th className="text-left p-3 border-b">Cons</th>
                </tr>
              </thead>
              <tbody>
                {planComparisons.map((row) => (
                  <tr className="border-b" key={row.plan}>
                    <td className="p-3 font-semibold">{row.plan}</td>
                    <td className="p-3">{row.bestFor}</td>
                    <td className="p-3">
                      <ul className="list-disc pl-4">
                        {row.pros.map((p) => (<li key={p}>{p}</li>))}
                      </ul>
                    </td>
                    <td className="p-3">
                      <ul className="list-disc pl-4">
                        {row.cons.map((c) => (<li key={c}>{c}</li>))}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-sm mt-6">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Network notes (read before buying)</h3>
              <ul className="list-disc pl-5 space-y-1">
                {networkNotes.map((n) => (<li key={n.k}><strong>{n.k}:</strong> {n.v}</li>))}
              </ul>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Coverage tip</h3>
              <p>
                Ask neighbours/colleagues which network works in your building. Test at home, at work, and on your commute.
                If your flat has thick walls, stand near windows for better signal.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================
            3) eSIM QUICK START
        ========================================================= */}
        <section id="esim" className="bg-white border rounded-xl shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-bold text-green-900 mb-2">3) eSIM quick start (step-by-step)</h2>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">A) Prepare</h3>
              <ol className="list-decimal pl-5 space-y-1">
                <li>Check phone is unlocked and supports eSIM.</li>
                <li>Connect to Wi-Fi; charge battery.</li>
                <li>Have passport/ID ready if provider asks for basic KYC.</li>
              </ol>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">B) Activate</h3>
              <ol className="list-decimal pl-5 space-y-1">
                <li>Buy plan online; get eSIM QR code/email.</li>
                <li>On phone: Settings → Mobile/Cellular → Add eSIM → Scan QR.</li>
                <li>Select eSIM as <strong>data line</strong>; keep voice on your preferred line.</li>
              </ol>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">C) Confirm</h3>
              <ol className="list-decimal pl-5 space-y-1">
                <li>APN should auto-fill; if not, add the provider APN manually.</li>
                <li>Restart device; open a website; place a test call.</li>
                <li>Register provider account/app for top-ups and invoices.</li>
              </ol>
            </div>
          </div>

          <div className="bg-[#F9F6F1] border rounded-lg p-4 text-xs text-gray-700 mt-4">
            <p className="mb-1">
              If you will also keep your Italian line: set “Default for Data” = UK eSIM and “Default for Calls” = your preferred number.  
              For bank OTPs, temporarily set SMS to the line you expect the code on.
            </p>
          </div>
        </section>

        {/* =========================================================
            4) KEEP YOUR NUMBER: PAC PORT GUIDE
        ========================================================= */}
        <section id="porting" className="mb-12">
          <h2 className="text-2xl font-bold text-green-900 mb-3">4) Keep your number: PAC port guide (UK→UK)</h2>
          <p className="mb-3">
            If you already have a UK number and want to move provider, request a <strong>PAC</strong> from your old provider and give it to your new provider.  
            Ports usually complete in 1 working day (Mon–Fri). Keep both SIMs active during the port window.
          </p>

          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="bg-white border rounded-xl p-5">
              <h3 className="font-semibold text-green-900 mb-1">Steps</h3>
              <ol className="list-decimal pl-5 space-y-1">
                <li>Text/call your old provider to get a <strong>PAC</strong> (or via online account).</li>
                <li>Order a new plan; tell the new provider your PAC and desired port date.</li>
                <li>On port day, keep both SIMs in the phone if dual-SIM. Service may drop briefly.</li>
                <li>When calls/texts land on your new SIM, the port is complete.</li>
              </ol>
            </div>

            <div className="bg-white border rounded-xl p-5">
              <h3 className="font-semibold text-green-900 mb-1">Copy-paste support script (port status)</h3>
              <pre className="whitespace-pre-line bg-[#F9F6F1] p-3 rounded border">
{`Hello, I submitted a PAC to move my number <07xxxxxxxxx> from <Old Provider> to <New Provider>. 
Could you confirm my port date and current status? 
If anything is missing (name/DOB/account), please tell me so I can fix it now. Thank you!`}
              </pre>
              <p className="text-xs text-gray-600 mt-2">
                If porting fails, providers usually tell you what detail mismatched (name, DOB, account number).
              </p>
            </div>
          </div>

          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border rounded-lg">
              <thead className="bg-[#F9F6F1]">
                <tr>
                  <th className="text-left p-3 border-b">Term</th>
                  <th className="text-left p-3 border-b">Meaning</th>
                </tr>
              </thead>
              <tbody>
                {portingGlossary.map((g) => (
                  <tr className="border-b" key={g.t}>
                    <td className="p-3 font-semibold">{g.t}</td>
                    <td className="p-3">{g.d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-gray-600 mt-3">
            For Italy→UK number moves, you typically keep the Italian SIM active for banking/OTP and run a UK SIM for daily data/calls.
          </p>
        </section>

        {/* =========================================================
            5) EU ROAMING, ITALY TRIPS & FAIR-USE
        ========================================================= */}
        <section id="roaming" className="bg-white border rounded-xl shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-bold text-green-900 mb-2">5) EU roaming, Italy trips & fair-use</h2>
          <p className="mb-3">
            After Brexit, EU roaming is not uniform across UK providers. Some include it (with limits), others charge per day or cap data.
            Always check your plan before you travel, and consider a travel eSIM for heavy use.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Fair-use basics</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Roaming data caps (e.g., 5–30 GB) are common.</li>
                <li>Excess usage may throttle or charge.</li>
                <li>Roaming allowed only for temporary travel, not permanent use abroad.</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Cost control</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Turn on a spend cap in your account/app if available.</li>
                <li>Download maps offline; use Wi-Fi where possible.</li>
                <li>Use travel eSIMs for big data days (events, remote work).</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Italy trips</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Set “Data Roaming = On”.</li>
                <li>Check network selection (auto) and APN after arrival.</li>
                <li>Keep your Italian SIM active for family/OTP if needed.</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-gray-600 mt-3">
            Nota: Some providers require a small daily fee to unlock EU usage. Always read your plan’s latest roaming page.
          </p>
        </section>

        {/* =========================================================
            6) APN, NETWORK & SMS FIXES
        ========================================================= */}
        <section id="fix" className="mb-12">
          <h2 className="text-2xl font-bold text-green-900 mb-3">6) APN, network & SMS fixes (copy-paste)</h2>
          <div className="bg-white border rounded-xl p-5 text-sm">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-green-900 mb-1">Top 5 quick fixes</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {troubleshootingItems.map((t) => (<li key={t.issue}><strong>{t.issue}:</strong> {t.fix}</li>))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-green-900 mb-1">iOS APN path</h3>
                <p>Settings → Mobile Data → Your eSIM → Mobile Data Network → Enter APN if required → Back → Restart.</p>
                <h3 className="font-semibold text-green-900 mt-3 mb-1">Android APN path</h3>
                <p>Settings → Network & Internet → SIMs → Your eSIM → Access Point Names → + → Enter APN → Save → Select → Restart.</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold text-green-900">Provider support chat — eSIM not activating</h3>
                <pre className="whitespace-pre-line bg-[#F9F6F1] p-3 rounded border">
{`Hello, my eSIM is not activating. 
Phone: <model>; Order ID: <xxxx>. 
I scanned the QR on Wi-Fi, restarted, and checked APN. 
Could you re-issue the eSIM profile or push activation on your side? Thank you!`}
                </pre>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold text-green-900">Bank OTP not arriving</h3>
                <pre className="whitespace-pre-line bg-[#F9F6F1] p-3 rounded border">
{`Hi, my bank OTP SMS is not arriving. 
I set the correct line as default for SMS and re-registered iMessage/WhatsApp. 
Could you check SMS routing on my number <07xxxxxxxxx>?`}
                </pre>
                <p className="text-xs text-gray-600 mt-2">
                  With dual-SIM, set the OTP-receiving line as default for SMS temporarily.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            7) DUAL-SIM SETUP: UK + IT
        ========================================================= */}
        <section id="dual-sim" className="bg-white border rounded-xl shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-bold text-green-900 mb-2">7) Dual-SIM setup: UK + IT smart combos</h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Common setup</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>eSIM (UK) for daily data and UK calls.</li>
                <li>Physical SIM (Italy) for OTPs and family contact.</li>
                <li>Default for Data = UK eSIM; Default for Calls = your preference.</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Battery & coverage tips</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Weak indoor signal drains battery; use Wi-Fi Calling if available.</li>
                <li>If one line has poor coverage at home, set Wi-Fi Calling = ON.</li>
                <li>Disable data on your Italian SIM to avoid roaming charges.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* =========================================================
            FAQ (onsite)
        ========================================================= */}
        <section id="faq" className="bg-white border rounded-xl shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-bold text-green-900 mb-2">FAQ (onsite)</h2>
          <div className="space-y-4 text-sm">
            <details className="group">
              <summary className="cursor-pointer font-semibold text-green-900">Do 30-day rolling plans require UK proof of address?</summary>
              <p className="mt-2">
                Usually no—most let you pay by card and provide basic contact details. Some may request address for billing or Identity checks.
              </p>
            </details>
            <details className="group">
              <summary className="cursor-pointer font-semibold text-green-900">Can I use my UK minutes to call Italy?</summary>
              <p className="mt-2">
                Many plans exclude international calls by default. Add an “international” add-on or use VoIP apps (WhatsApp, FaceTime Audio, Signal) over data/Wi-Fi.
              </p>
            </details>
            <details className="group">
              <summary className="cursor-pointer font-semibold text-green-900">Is tethering allowed?</summary>
              <p className="mt-2">
                Generally yes, but fair-use policies may limit heavy hotspot usage. If you rely on tethering for work, choose a plan that allows it.
              </p>
            </details>
            <details className="group">
              <summary className="cursor-pointer font-semibold text-green-900">How do I get invoices for expenses?</summary>
              <p className="mt-2">
                Register a provider account/app. Many offer monthly VAT invoices or receipts you can download as PDFs.
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
              <Link className="underline text-green-900" href="/community/utilities-setup-uk-2025">
                Utilities Setup (2025) — Energy, Water, Council Tax & Broadband
              </Link>
            </li>
            <li>
              <Link className="underline text-green-900" href="/community/proof-of-address-without-bills-2025">
                Proof of Address Without Bills (2025) — 12 Accepted Docs + Templates
              </Link>
            </li>
            <li>
              <Link className="underline text-green-900" href="/community/right-to-work-share-code-italians-2025">
                Right to Work & Share Code (UK) for Italians — 2025 Easy Guide
              </Link>
            </li>
          </ul>
        </section>

        {/* =========================================================
            CTA / SERVICE
        ========================================================= */}
        <section className="mt-10 bg-white border rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-bold text-green-900 mb-2">
            Want a personal mobile plan pick in 24 hours?
          </h2>
          <p className="text-sm mb-4">
            Tell us your postcode, typical data, and Italy trip frequency. We return a one-page plan with the best network for your address,
            eSIM/SIM steps, and roaming settings screenshot-style.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/checkout/mobile-plan-concierge"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-green-700 text-white font-medium"
            >
              Mobile Plan Concierge (+£15)
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
          This guide is general information, not financial or contractual advice. Mobile prices and terms change regularly.
          Always follow your provider’s current terms, fair-use policy, and coverage map for your exact location.
        </p>

        {/* =========================================================
            APPENDICES — EXTRA VALUE & SEO DEPTH
        ========================================================= */}

        {/* Appendix A: Provider checklist before buying */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Appendix A — Provider checklist before buying</h2>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Is EU roaming included? If yes, how many GB and which countries?</li>
            <li>Hotspot allowed? Any throttling or time-of-day rules?</li>
            <li>Spend cap controls in the app?</li>
            <li>eSIM available instantly or only by post?</li>
            <li>Invoice/receipt download for expenses?</li>
          </ul>
        </section>

        {/* Appendix B: Italian phrase card (store chat) */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Appendix B — Italian ⇄ Easy English phrase card (in store)</h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Plan questions</h3>
              <pre className="whitespace-pre-line bg-[#F9F6F1] p-3 rounded border">
{`Italiano:
"C'è eSIM? Il roaming in UE è incluso? Posso avere una fattura mensile?"

Easy English:
"Do you have eSIM? Is EU roaming included? Can I get a monthly invoice?"`}
              </pre>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Coverage question</h3>
              <pre className="whitespace-pre-line bg-[#F9F6F1] p-3 rounded border">
{`Italiano:
"La copertura in casa e al lavoro è buona?"

Easy English:
"Is coverage good at my home and workplace?"`}
              </pre>
            </div>
          </div>
        </section>

        {/* Appendix C: Example APN fields (generic) */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Appendix C — Example APN fields (generic)</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border rounded-lg">
              <thead className="bg-[#F9F6F1]">
                <tr>
                  <th className="text-left p-3 border-b">Field</th>
                  <th className="text-left p-3 border-b">Example</th>
                  <th className="text-left p-3 border-b">Notes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { f: "Name", e: "Provider UK", n: "Any label" },
                  { f: "APN", e: "internet", n: "Provider-specific; some use 'mobile' or similar" },
                  { f: "Username", e: "", n: "Often blank" },
                  { f: "Password", e: "", n: "Often blank" },
                  { f: "MCC/MNC", e: "auto", n: "Do not change unless provider instructs" },
                  { f: "Authentication", e: "PAP or CHAP", n: "If needed" },
                ].map((r) => (
                  <tr className="border-b" key={r.f}>
                    <td className="p-3 font-semibold">{r.f}</td>
                    <td className="p-3">{r.e}</td>
                    <td className="p-3">{r.n}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-600 mt-3">
            Always use your provider’s official APN; the above are generic placeholders.
          </p>
        </section>

        {/* Appendix D: Spend-cap & data-saver cheatsheet */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Appendix D — Spend-cap & data-saver cheatsheet</h2>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Enable “Data Saver/Low Data Mode” on phone.</li>
            <li>Disable auto-play videos in social apps.</li>
            <li>Allow updates on Wi-Fi only.</li>
            <li>Use Maps offline packs and Spotify/Netflix offline downloads.</li>
          </ul>
        </section>

        {/* Appendix E: Corporate/expense setups */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Appendix E — If your company reimburses your phone</h2>
          <p className="text-sm mb-3">
            Choose a provider with downloadable VAT invoices and predictable pricing. Keep your plan at or under the monthly cap your employer sets.
          </p>
        </section>

        {/* Appendix F: Family & kids lines (controls) */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Appendix F — Family & kids: controls that matter</h2>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Enable content filters at the account level.</li>
            <li>Set spend caps and disable international calling by default.</li>
            <li>Use Screen Time/Family Link for app and time rules.</li>
          </ul>
        </section>

        {/* Appendix G: When to switch provider */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Appendix G — When to switch provider</h2>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Poor indoor coverage persists after trying Wi-Fi Calling.</li>
            <li>Roaming rules changed and no longer fit your travel pattern.</li>
            <li>You find a 12-month SIM-only deal that halves your cost.</li>
          </ul>
        </section>

        {/* Appendix H: Travel eSIM playbook (outside EU) */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Appendix H — Travel eSIM playbook (outside EU)</h2>
          <ol className="list-decimal pl-5 text-sm space-y-1">
            <li>Buy regional eSIM before you fly; download in advance.</li>
            <li>On arrival, set travel eSIM as data line; keep UK line for calls/SMS.</li>
            <li>Disable background sync for heavy apps on travel days.</li>
          </ol>
        </section>

        {/* Appendix I: 3-D Secure & SMS codes FAQ */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Appendix I — 3-D Secure & SMS codes (banking)</h2>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Some banks allow app-based approval instead of SMS.</li>
            <li>Set the correct line as default for SMS during verification.</li>
            <li>Switch back after receiving the code to avoid surprise costs.</li>
          </ul>
        </section>

        {/* Appendix J: Keep your Italian WhatsApp number with a UK SIM */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Appendix J — Keep Italian WhatsApp with a UK SIM</h2>
          <p className="text-sm mb-3">
            WhatsApp is tied to your account, not the active SIM. After UK SIM activation, WhatsApp still works with your Italian number.
            If WhatsApp asks to re-verify, use the Italian SIM or call verification.
          </p>
        </section>

        {/* Appendix K: Small business lines & public contact numbers */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Appendix K — Small business: separate your number</h2>
          <p className="text-sm mb-3">
            Consider keeping one line for personal use and one for clients. Use call-forwarding or a cloud PBX app if you run appointments or deliveries.
          </p>
        </section>

        {/* Appendix L: If your phone is locked */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Appendix L — If your phone is locked</h2>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Contact original carrier to request unlock; provide IMEI.</li>
            <li>Use a temporary PAYG portable Wi-Fi (MiFi) or borrow a phone for setup.</li>
            <li>Plan for unlock processing time (days/weeks depending on carrier).</li>
          </ul>
        </section>

        {/* Appendix M: Data priority & MVNO notes */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Appendix M — Data priority & MVNOs</h2>
          <p className="text-sm mb-3">
            Some virtual operators (MVNOs) may have lower traffic priority during congestion than the main network.
            If peak-hour speeds are vital, test with a main-brand plan in your area.
          </p>
        </section>

        {/* Appendix N: Wi-Fi Calling & indoor coverage hacks */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Appendix N — Wi-Fi Calling & indoor coverage hacks</h2>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Enable Wi-Fi Calling in phone and provider account, if available.</li>
            <li>Place router high and central; avoid microwaves/metal objects.</li>
            <li>Consider powerline adapters to improve Wi-Fi by rooms.</li>
          </ul>
        </section>

        {/* Appendix O: Personal hotspot etiquette in shared homes */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Appendix O — Hotspot etiquette in house shares</h2>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Agree on fair use; hotspot drains batteries and data.</li>
            <li>Prefer home broadband for streaming/gaming.</li>
            <li>Set a strong hotspot password and change it monthly.</li>
          </ul>
        </section>

        {/* Appendix P: Example spend scenarios (ballpark) */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Appendix P — Example spend scenarios (ballpark)</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border rounded-lg">
              <thead className="bg-[#F9F6F1]">
                <tr>
                  <th className="text-left p-3 border-b">Persona</th>
                  <th className="text-left p-3 border-b">Usage Pattern</th>
                  <th className="text-left p-3 border-b">Likely Best</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { p: "Student (light)", u: "Wi-Fi most days; messages; maps", b: "PAYG small data or 30-day small bundle" },
                  { p: "Worker (daily)", u: "Maps, music, email, hotspot sometimes", b: "30-day 10–30 GB bundle" },
                  { p: "Remote worker", u: "Video calls + hotspot backup", b: "30-day 50 GB+ or 12-month SIM-only" },
                  { p: "Frequent EU traveler", u: "Monthly Italy trips", b: "30-day with EU roaming or travel eSIM add-on" },
                ].map((r) => (
                  <tr key={r.p} className="border-b">
                    <td className="p-3 font-semibold">{r.p}</td>
                    <td className="p-3">{r.u}</td>
                    <td className="p-3">{r.b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Appendix Q: Sim swap & security hygiene */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Appendix Q — SIM swap & security hygiene</h2>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Lock your account with strong passwords and 2FA.</li>
            <li>Beware phishing texts. Providers won’t ask for full passwords by SMS.</li>
            <li>If you suspect SIM swap, contact provider immediately and freeze banking apps.</li>
          </ul>
        </section>

        {/* Appendix R: Keep invoices for visa/expense records */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Appendix R — Invoices & admin</h2>
          <p className="text-sm mb-3">
            Download monthly receipts and keep them in a cloud folder named <em>mobile_invoices_YYYY</em>. Handy for expenses and visa paperwork.
          </p>
        </section>

        {/* Appendix S: Environmental notes (refurb & recycle) */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Appendix S — Environment: refurb & recycle</h2>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Consider refurbished devices from reputable sellers.</li>
            <li>Recycle old phones/SIMs at certified points; wipe data first.</li>
          </ul>
        </section>

        {/* Appendix T: Troubleshooting decision tree (text) */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Appendix T — Troubleshooting: mini decision tree</h2>
          <div className="text-sm bg-[#F9F6F1] border rounded-lg p-4">
            <ol className="list-decimal pl-5 space-y-1">
              <li>No data → APN & data line → Restart → Roaming toggle → Provider chat.</li>
              <li>No calls → VoLTE on → Try 3G/4G toggle → Provider chat.</li>
              <li>Port pending → Check RCD → Keep both lines active → Ask for status.</li>
              <li>EU trip → Check fair-use → Spend cap on → Travel eSIM if heavy data.</li>
            </ol>
          </div>
        </section>

        {/* Appendix U: Template — disable/enable international calling */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Appendix U — Template: toggle international calling</h2>
          <pre className="whitespace-pre-line bg-[#F9F6F1] p-3 rounded border text-sm">
{`Hello,

Please enable international calling on my line <07xxxxxxxxx> with a spend cap of £5/day.
Alternatively, please keep it disabled and enable only when I request.
Thank you!`}
          </pre>
        </section>

        {/* Appendix V: Template — request itemized invoice */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Appendix V — Template: request itemized invoice</h2>
          <pre className="whitespace-pre-line bg-[#F9F6F1] p-3 rounded border text-sm">
{`Hello,

Could you please enable itemized billing and email monthly VAT invoices for account <xxxx>?
I need them for expense claims.

Thanks!`}
          </pre>
        </section>

        {/* Appendix W: Template — cancel 30-day plan politely */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Appendix W — Cancel 30-day plan (polite)</h2>
          <pre className="whitespace-pre-line bg-[#F9F6F1] p-3 rounded border text-sm">
{`Hello,

I would like to cancel my 30-day plan at the end of the current period. 
Please confirm the end date and that no further charges will be applied.

Kind regards,
<Your Name>`}
          </pre>
        </section>

        {/* Appendix X: Template — switch to cheaper bundle next month */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Appendix X — Switch bundle size next month</h2>
          <pre className="whitespace-pre-line bg-[#F9F6F1] p-3 rounded border text-sm">
{`Hello,

Please change my plan for the next billing cycle to <bundle name/GB>. 
Keep auto-renew on the new price. Thank you!`}
          </pre>
        </section>

        {/* Appendix Y: Template — request eSIM reissue after phone loss */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Appendix Y — Phone lost: reissue eSIM</h2>
          <pre className="whitespace-pre-line bg-[#F9F6F1] p-3 rounded border text-sm">
{`Hello,

My phone was lost/stolen. Please suspend my line and reissue the eSIM to a new device.
Number: <07xxxxxxxxx>. I can verify ID.

Thanks!`}
          </pre>
        </section>

        {/* Appendix Z: Template — proof of number ownership (for HR/banks) */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-16">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Appendix Z — Ask provider for a proof-of-number letter</h2>
          <pre className="whitespace-pre-line bg-[#F9F6F1] p-3 rounded border text-sm">
{`Hello,

Could you issue a letter or PDF confirming that I am the account holder for number <07xxxxxxxxx>, 
showing my full name and billing address? I need it for HR/bank verification.

Many thanks!`}
          </pre>
        </section>

        {/* =========================================================
            FINAL CTA (premium)
        ========================================================= */}
        <section className="mt-10 bg-white border rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-bold text-green-900 mb-2">Need hands-on help picking & activating today?</h2>
          <p className="text-sm mb-4">
            We’ll test coverage at your postcode, choose the right plan (no credit check if needed), activate eSIM/SIM, set APN/roaming,
            and deliver a 1-page setup with screenshots you can keep.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/checkout/mobile-plan-concierge"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-green-700 text-white font-medium"
            >
              Get My Mobile Plan (+£15)
            </Link>
            <Link
              href="/community/utilities-setup-uk-2025"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-green-100 text-green-900 font-medium border"
            >
              Next: Utilities Setup (Day-1)
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
