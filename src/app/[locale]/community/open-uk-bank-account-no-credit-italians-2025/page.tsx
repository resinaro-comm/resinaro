// app/community/open-uk-bank-account-no-credit-italians-2025/page.tsx
import Link from "next/link";
import { p, type Locale } from "@/lib/localePath";
import Image from "next/image";

export const metadata = {
  title:
    "Rejected by UK Banks? Fix KYC & Open Your Account (Easy English) — Italians’ 2025 Guide",
  description:
    "Pass UK bank KYC without credit history. Documents that work (incl. C/O), digital vs high-street comparison, rejection fixes, branch scripts, and starter credit moves. Simple English for Italians.",
  alternates: { canonical: "/community/open-uk-bank-account-no-credit-italians-2025" },
  openGraph: {
    title: "Rejected by UK Banks? Fix KYC & Open Your Account",
    description:
      "Short, calm steps to pass KYC, avoid freezes, and choose the right bank today.",
    type: "article",
  },
};

export default function Page({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  // —— JSON-LD (unchanged) ——
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can Italians open a UK bank account without UK credit history?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. Many banks accept passport or national ID plus UK contact details. If you lack proof of address, use alternatives like a tenancy, employer letter, or C/O wording. Digital banks often approve faster.",
        },
      },
      {
        "@type": "Question",
        name: "What if I was rejected by a UK bank?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Check why: blurry ID photo, address mismatch, name spelling, or missing UK phone. Fix the issue, wait a short time, and try again—or switch to a bank with easier KYC. A branch visit with the right script also helps.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need a National Insurance Number to open a bank account?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Not always. Many banks do not require a NIN to open an account. Apply for a NIN as soon as possible for payroll records.",
        },
      },
      {
        "@type": "Question",
        name: "Can I open an account with a C/O address (care of a friend)?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Some banks accept a C/O line when you are new in the UK. Use clear wording and get permission from the host. Update your address later when you move.",
        },
      },
      {
        "@type": "Question",
        name: "Which is better for newcomers: digital banks or high-street banks?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Digital banks are fast and simple for ID checks. High-street banks are useful for cash deposits and in-branch support. Start digital, add a high-street account later.",
        },
      },
      {
        "@type": "Question",
        name: "How can I avoid account freezes?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Use your own device and UK SIM. Keep transfers simple at first. Avoid sudden large amounts from unknown sources. If the bank asks for documents, reply fast with clear scans.",
        },
      },
    ],
  };

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Open a UK bank account without UK credit history (Italians, 2025)",
    totalTime: "PT20M",
    step: [
      { "@type": "HowToStep", name: "Prepare documents", text: "Passport or Italian ID, UK mobile number, email. Add proof of address if available (tenancy, employer letter)." },
      { "@type": "HowToStep", name: "Choose bank type", text: "Start with a digital bank for quick KYC. Add a high-street account later if you need cash deposits or in-branch help." },
      { "@type": "HowToStep", name: "Pass KYC checks", text: "Use good light, keep the phone steady, remove glasses. Match your name exactly as in the passport. Use a UK SIM." },
      { "@type": "HowToStep", name: "If rejected", text: "Fix the reason: clearer photos, correct address format/C/O wording. Retry or book a branch appointment." },
      { "@type": "HowToStep", name: "Start using the account", text: "Activate the card, add to wallet, use small purchases. Keep transactions simple at the start." },
    ],
  };

  // compact outline (no pill buttons)
  const outline = [
    ["#who-can-open", "Who can open"],
    ["#docs", "Documents & C/O"],
    ["#digital-vs-branch", "Digital vs high-street"],
    ["#pass-kyc", "Pass KYC"],
    ["#rejected", "If rejected"],
    ["#branch-script", "Branch script"],
    ["#proof-address", "Proof of address"],
    ["#starter-credit", "Starter credit moves"],
    ["#fees-transfers", "Fees & limits"],
    ["#security", "Security & freezes"],
    ["#templates", "Templates"],
    ["#faq", "Quick FAQ"],
  ] as const;

  return (
    <main className="bg-[#F9F6F1] text-gray-800">
      {/* ——— HERO (full-bleed, editorial) ——— */}
      <section className="relative w-full h-[68vh] min-h-[520px] overflow-hidden">
        <Image
          src="/images/uk-bank-kyc-italians-hero.png"
          alt="Open a UK bank account without credit history — simple steps for Italians"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0">
          <div className="container mx-auto max-w-6xl px-6 pb-10">
            <div className="max-w-3xl text-white">
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-wide bg-emerald-700/90 px-3 py-1 rounded-full">
                MONEY • KYC
              </span>
              <h1 className="mt-3 text-4xl md:text-5xl font-bold leading-tight">
                Rejected by UK Banks? Fix KYC &amp; Open Your Account (Easy English)
              </h1>
              <p className="mt-3 text-white/90 text-sm md:text-base">
                Short steps, calm language. Pass checks, avoid freezes, and pick the bank that works today.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a href="#who-can-open" className="rounded-full bg-white text-emerald-900 font-semibold px-5 py-2.5 shadow-sm hover:bg-emerald-50 transition">Start now ↓</a>
                <a href="#branch-script" className="rounded-full border border-white/70 text-white font-semibold px-5 py-2.5 hover:bg-white/10 transition">Get the branch script</a>
              </div>
              <p className="mt-4 text-[12px] text-white/80">Updated for 2025 • Written for Italians in the UK</p>
            </div>
          </div>
        </div>
      </section>

      {/* ——— BREADCRUMB / META ——— */}
      <div className="bg-gradient-to-b from-transparent to-[#F4EEE4]">
        <div className="container mx-auto max-w-6xl px-6 py-4 text-[13px] text-gray-600">
          <nav className="flex items-center gap-2">
            <Link href={p(locale, "/community")} className="hover:underline">Community</Link>
            <span>·</span>
            <span className="text-gray-800">Banking & KYC</span>
            <span className="ml-auto">~10 min read</span>
          </nav>
        </div>
      </div>

      {/* ——— CONTENT GRID (right-rail outline) ——— */}
      <div className="container mx-auto max-w-6xl px-6 py-10 md:py-14">
        <div className="grid xl:grid-cols-[1fr,260px] gap-10">
          {/* MAIN */}
          <div className="space-y-10 md:space-y-12 text-[15.5px] leading-relaxed">
            {/* Why */}
            <section className="bg-white border rounded-3xl shadow-sm p-6 md:p-9">
              <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-3">
                Why this guide (and who it’s for)
              </h2>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <BadgeCard title="Clear steps" body="What to do first, what to say, what to show." />
                <BadgeCard title="Fix rejections" body="Find the reason, fix it fast, retry the right way." />
                <BadgeCard title="Stay safe" body="Avoid freezes and common mistakes in the first weeks." />
              </div>
            </section>

            {/* Sections */}
            <Section id="who-can-open" title="1) Who can open & quick requirements">
              <p className="mb-3">
                If you are Italian and living in the UK (or moving now), you can usually open a basic bank account.
                No UK credit history needed. You need identity, a UK mobile number, and a correct address format.
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <Card title="Minimum you need"><List items={[
                  "Italian passport or Carta d’Identità (valid)",
                  "UK mobile number (SIM in your name)",
                  "Email you keep for years",
                ]} /></Card>
                <Card title="Helpful extras"><List items={[
                  "Proof of address (tenancy, employer letter, C/O)",
                  "UK payslip or job offer (optional)",
                  "Backup ID (driving licence)",
                ]} /></Card>
                <Card title="Strategy"><List items={[
                  "Open a digital account first for speed",
                  "Add a high-street account for cash deposit",
                  "Keep both clean for future credit",
                ]} /></Card>
              </div>
            </Section>

            <Section id="docs" title="2) Documents that work (with C/O wording)">
              <p className="text-sm mb-4">
                Many accounts open with just your ID and UK mobile. Some banks still ask for proof of address. If you don’t have bills,
                use a tenancy, an employer letter, or a C/O (care of) line when staying with a friend—ask permission first.
              </p>
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div>
                  <h3 className="font-semibold text-emerald-900 mb-1">Accepted items (common)</h3>
                  <List items={[
                    "Passport or Carta d’Identità (photo + MRZ visible)",
                    "UK mobile number for SMS",
                    "Tenancy agreement or agent/landlord letter",
                    "Employer letter with your address",
                    "Official letter to your UK address (council, HMRC, GP)",
                  ]}/>
                </div>
                <div>
                  <h3 className="font-semibold text-emerald-900 mb-1">C/O wording (care of)</h3>
                  <List items={[
                    "Line 1: C/O <HOST SURNAME>",
                    "Line 2: house number + street",
                    "Town/City + exact postcode",
                    "Host labels mailbox with your name",
                    "Update address when you move",
                  ]}/>
                </div>
              </div>
              <p className="text-xs text-gray-600 mt-3">Copy your name exactly like your passport. Remove accents if the app rejects them.</p>
            </Section>

            <Section id="digital-vs-branch" title="3) Digital banks vs high-street banks (which first?)">
              <p className="mb-3">Start where approval is easiest today; add the other later.</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border rounded-2xl overflow-hidden">
                  <thead className="bg-[#EFE9DE]">
                    <tr>
                      <th className="text-left p-3">Bank type</th>
                      <th className="text-left p-3">Pros</th>
                      <th className="text-left p-3">Cons</th>
                      <th className="text-left p-3">Best when</th>
                    </tr>
                  </thead>
                  <tbody className="[&>tr:nth-child(even)]:bg-[#FBFAF8]">
                    <tr className="align-top border-t">
                      <td className="p-3 font-semibold">Digital bank (app)</td>
                      <td className="p-3">Fast KYC, easy app control, quick cards</td>
                      <td className="p-3">Cash deposit limited; support online only</td>
                      <td className="p-3">You just arrived; need account number fast</td>
                    </tr>
                    <tr className="align-top border-t">
                      <td className="p-3 font-semibold">High-street bank (branch)</td>
                      <td className="p-3">Cash deposit, in-person help, formal letters</td>
                      <td className="p-3">Slower onboarding; stricter address rules</td>
                      <td className="p-3">You need cash services or prefer a branch</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm mt-3">Strategy: open digital now; add high-street after stable proof of address.</p>
            </Section>

            <Section id="pass-kyc" title="4) Pass KYC first time (photo rules & name matching)">
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div>
                  <h3 className="font-semibold text-emerald-900 mb-1">Photo & selfie</h3>
                  <List items={[
                    "Daylight near a window; no backlight",
                    "Clean the lens; hold still",
                    "No glasses or hats; hair back",
                    "Full passport/ID page; fingers off the MRZ",
                    "Neutral face; follow the app guide",
                  ]}/>
                </div>
                <div>
                  <h3 className="font-semibold text-emerald-900 mb-1">Name & address</h3>
                  <List items={[
                    "Spell your name exactly like your passport",
                    "If accents fail, remove them everywhere consistently",
                    "Address: house number, street, town, postcode",
                    "Use your own UK SIM; same email across finance apps",
                  ]}/>
                </div>
              </div>
              <p className="text-xs text-gray-600 mt-3">If the first try fails, wait a little, then re-submit in better light.</p>
            </Section>

            <Section id="rejected" title="5) If rejected — find the reason & fix fast">
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <Card title="Common reasons" tone="soft"><List items={[
                  "Blurry ID or glare",
                  "Wrong address format / missing postcode",
                  "Foreign SIM or borrowed device",
                  "Name mismatch between ID and app",
                  "Too many attempts quickly",
                ]}/></Card>
                <Card title="Fast fixes" tone="soft"><List items={[
                  "Retake photos in daylight on a flat surface",
                  "Correct the address; add C/O if staying with friends",
                  "Use your own UK SIM",
                  "Copy your exact passport name",
                  "Wait 24–48 h before retrying if blocked",
                ]}/></Card>
                <Card title="Switch plan" tone="soft"><List items={[
                  "Try another digital bank (different KYC flow)",
                  "Or book a branch with documents ready",
                  "Bring an employer letter if you have one",
                ]}/></Card>
              </div>
            </Section>

            <Section id="branch-script" title="6) Branch script (easy English) — what to say">
              <CodeBlock>{`Hello, I am Italian and new to the UK. I would like to open a basic current account.
Here are my documents:
• Passport / Italian ID (original)
• UK mobile number
• Address: C/O <Host Surname>, <house number and street>, <postcode> (I will update when I move)
• Employer letter / Tenancy (if available)

I am happy to complete any checks. Which account can I open today?`}</CodeBlock>
              <p className="text-xs text-gray-600 mt-2">If they refuse C/O, ask which exact document they accept and return with that.</p>
            </Section>

            <Section id="proof-address" title="7) Proof of address without bills (realistic options)">
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <Card title="Options" tone="soft"><List items={[
                  "Tenancy agreement with your name",
                  "Employer letter on letterhead",
                  "University/college letter",
                  "Official letter from council / GP",
                ]}/></Card>
                <Card title="C/O tips" tone="soft"><List items={[
                  "Host puts your name on mailbox/buzzer",
                  "Keep a short host permission note",
                  "Update the bank when you move",
                ]}/></Card>
              </div>
              <p className="text-xs text-gray-600 mt-3">Each bank has its own list. If one says no, try another newcomer-friendly option.</p>
            </Section>

            <Section id="starter-credit" title="8) Starter credit score moves (build trust slowly)">
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <Card title="Month 1–2"><List items={[
                  "Use the account weekly for small purchases",
                  "Receive salary if possible",
                  "Keep the same address across services",
                ]}/></Card>
                <Card title="Month 3–4"><List items={[
                  "Add a simple bill in your name (SIM/broadband)",
                  "Start a savings pot (monthly)",
                  "Avoid overdrafts early",
                ]}/></Card>
                <Card title="Month 5–6"><List items={[
                  "Add a high-street account if needed",
                  "Always on-time payments",
                  "Consider credit only when stable",
                ]}/></Card>
              </div>
            </Section>

            <Section id="fees-transfers" title="9) Fees, limits, and transfers (basics)">
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <Card title="Common fees" tone="soft"><List items={[
                  "Card delivery/replacement (some banks)",
                  "Cash deposit or partner-shop fee",
                  "Overseas ATM or FX conversion",
                ]}/></Card>
                <Card title="Limits" tone="soft"><List items={[
                  "Daily card limits for new accounts",
                  "Transfer caps (raise later after checks)",
                  "Cash deposit caps per month",
                ]}/></Card>
              </div>
              <p className="text-xs text-gray-600 mt-3">If a transfer is blocked, pause and read the message — don’t spam attempts.</p>
            </Section>

            <Section id="security" title="10) Security & how to avoid account freezes">
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div>
                  <h3 className="font-semibold text-emerald-900 mb-1">Do this</h3>
                  <List items={[
                    "Use your own phone and UK SIM",
                    "Enable app lock, Face/Touch ID, 2FA",
                    "Reply fast to document requests",
                    "Keep transactions simple at first",
                  ]}/>
                </div>
                <div>
                  <h3 className="font-semibold text-emerald-900 mb-1">Avoid this</h3>
                  <List items={[
                    "Receiving money from strangers",
                    "Letting others use your account or card",
                    "Sending scans to random emails",
                    "Clicking suspicious links",
                  ]}/>
                </div>
              </div>
            </Section>

            <Section id="templates" title="Templates: scripts, letters, and notes (copy-paste)">
              <div className="space-y-6 text-sm">
                <Template title="A) Branch intro (no bills yet)">{`Hello, I am Italian and new to the UK. I would like to open a basic current account.
I have:
• Passport / Italian ID
• UK mobile number
• Address: C/O <Host Surname>, <house number and street>, <postcode>
I will update my address when I move.

Could you please advise the simplest account I can open today?`}</Template>

                <Template title="B) Employer letter request (proof of address)">{`Subject: Letter for bank account — proof of address

Hello <HR/Manager>,

Could you provide a short letter on company letterhead confirming:
• My name: <Name Surname>
• Employment status: <Job title / start date>
• Current address: <C/O Host Surname, number street, postcode>

The bank asked for a letter to open my account. Thank you!`}</Template>

                <Template title="C) Host permission note (C/O)">{`To whom it may concern,

I, <Host Name>, give permission to <Your Name> to receive correspondence at:
<house number, street, town, postcode>.
They currently stay with me.

Signed,
<Host Name>  <Date>`}</Template>

                <Template title="D) App rejection follow-up">{`Hello support,

I tried to open an account and received a rejection. I am Italian and new to the UK.
Could you confirm the reason? I can re-submit clearer photos and the correct address format:
C/O <Host Surname>, <house number and street>, <postcode>.

Thanks for your help!
<Your name>`}</Template>

                <Template title="E) Address update to bank (after moving)">{`Subject: Address update

Hello, I moved to a new address. Please update my records to:
<New house number and street>
<Town/City>
<Postcode>

Thank you,
<Your name>`}</Template>

                <div className="bg-emerald-50 border rounded-xl p-4">
                  <p className="font-semibold text-emerald-900">Document naming tip</p>
                  <p>Save files as <em>surname_document_YYYY-MM-DD</em> (e.g. <em>rossi_passport_2025-01-15.jpg</em>).</p>
                </div>
              </div>
            </Section>

            {/* Related */}
            <section id="faq" className="scroll-mt-28 bg-white border rounded-3xl shadow-sm p-6 md:p-9">
              <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-3">Quick FAQ</h2>
              <div className="space-y-4 text-sm">
                <FAQ q="Do I need a job to open a UK bank account?">
                  Not always. A basic account is possible without a job. If you have a job offer, bring the letter—it helps show stability.
                </FAQ>
                <FAQ q="Will a digital bank be enough for my salary?">
                  Usually yes. Many employers pay into digital banks. If your employer prefers a high-street bank, open that second account.
                </FAQ>
                <FAQ q="Can I use a friend’s address for the bank?">
                  Ask permission and use a C/O line. Some banks accept it, some do not. Be ready to update your address later.
                </FAQ>
                <FAQ q="My app keeps crashing during selfie. What now?">
                  Close other apps, clean the camera, use daylight, and hold the phone steady. If it still fails, try your own second device or open in branch.
                </FAQ>
              </div>
            </section>

            {/* CTA band */}
            <section className="scroll-mt-28">
              <div className="rounded-3xl border shadow-sm p-6 md:p-9 bg-gradient-to-br from-emerald-50 to-white">
                <h2 className="text-xl md:text-2xl font-bold text-emerald-900 mb-2">
                  Want same-day help passing KYC and choosing the right bank?
                </h2>
                <p className="text-sm mb-4">
                  We check your documents, address format, and app steps — plus a custom script for chat or branch.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href={p(locale, "/checkout/banking-credit-starter")} className="inline-flex items-center px-5 py-2.5 rounded-full bg-emerald-700 text-white font-semibold hover:bg-emerald-800 transition">
                    Banking &amp; Credit Starter (+£20)
                  </Link>
                  <Link href={p(locale, "/services")} className="inline-flex items-center px-5 py-2.5 rounded-full bg-white text-emerald-900 font-semibold border hover:bg-emerald-50 transition">
                    View Resinaro Services →
                  </Link>
                </div>
                <p className="mt-4 text-xs text-gray-600 italic">
                  General information, not financial advice. Policies change; follow the latest instructions in your bank app or branch.
                </p>
              </div>
            </section>
          </div>

          {/* RIGHT RAIL OUTLINE — minimal, no buttons */}
          <aside className="hidden xl:block">
            <nav className="sticky top-28">
              <div className="rounded-xl border bg-white/70 backdrop-blur p-4 shadow-sm">
                <p className="text-[11px] uppercase tracking-wide text-gray-500">On this page</p>
                <ul className="mt-3 space-y-2 text-[13px]">
                  {outline.map(([href, label]) => (
                    <li key={href}>
                      <a href={href} className="block px-1 py-1 rounded hover:text-emerald-800 hover:bg-emerald-50 transition">
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          </aside>
        </div>
      </div>

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
    </main>
  );
}

/* ——— helpers ——— */
function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="bg-white border rounded-3xl shadow-sm p-6 md:p-9 scroll-mt-28">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-3">{title}</h2>
      {children}
    </section>
  );
}
function Card({ title, children, tone = "default" }: { title: string; children: React.ReactNode; tone?: "default" | "soft" }) {
  return (
    <div className={`border rounded-xl p-4 ${tone === "soft" ? "bg-[#F9F6F1]" : "bg-white"}`}>
      <h3 className="font-semibold text-emerald-900 mb-1">{title}</h3>
      {children}
    </div>
  );
}
function BadgeCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-xl border bg-emerald-50/70 p-4">
      <p className="font-semibold text-emerald-900">{title}</p>
      <p>{body}</p>
    </div>
  );
}
function List({ items }: { items: string[] }) {
  return <ul className="list-disc pl-5 space-y-1">{items.map((t) => <li key={t}>{t}</li>)}</ul>;
}
function CodeBlock({ children }: { children: string }) {
  return <pre className="whitespace-pre-line bg-[#F4F0E8] p-4 rounded-2xl border text-sm">{children}</pre>;
}
function Template({ title, children }: { title: string; children: string }) {
  return (
    <div>
      <h3 className="font-semibold text-emerald-900 mb-2">{title}</h3>
      <CodeBlock>{children}</CodeBlock>
    </div>
  );
}
function FAQ({ q, children }: { q: string; children: React.ReactNode }) {
  return (
    <details className="group border rounded-xl p-4">
      <summary className="cursor-pointer font-semibold text-emerald-900">{q}</summary>
      <div className="mt-2 text-sm text-gray-700">{children}</div>
    </details>
  );
}
