// src/app/volunteer/page.tsx
import Link from "next/link";
import { p } from "@/lib/localePath";
import VolunteerFormClient from "@/components/VolunteerFormClient";

export const metadata = {
  title: "Volunteer with Resinaro",
  description:
    "Join Resinaro as a volunteer. Gain hands-on experience, build your CV, learn marketing and communications, and benefit from media exposure while supporting migrants in the UK.",
  alternates: { canonical: "/volunteer" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What roles are available?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We need volunteers for language support, translations, admin, outreach, events and digital work including marketing and content."
      }
    },
    {
      "@type": "Question",
      "name": "Will I gain experience useful for my CV?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Volunteers gain demonstrable project experience, leadership, communications and technical skills that are directly transferable to professional roles."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide training?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We provide role-specific guidance, mentoring and access to learning materials. Certain roles include supervised shadowing and feedback sessions."
      }
    }
  ]
};

export default function Page({ params }: { params: { locale: "en" | "it" } }) {
  const locale = params.locale;
  return (
    <main className="bg-[#F9F6F1] text-gray-900 min-h-screen pb-20">
      <div className="container mx-auto px-6 max-w-3xl pt-12">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-green-900">Volunteer with Resinaro</h1>
          <p className="mt-3 text-gray-700 max-w-2xl mx-auto">
            Resinaro is built by the community, for the community. Volunteers help people navigate life in the UK — from language support to event organisation and digital outreach. Join us to contribute your skills and gain professional experience.
          </p>
        </header>

        <div className="mx-auto" style={{ maxWidth: 720 }}>
          <VolunteerFormClient />
        </div>

        {/* NEW: Benefits & Outcomes */}
        <section className="mt-12">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-green-900 mb-3">Why volunteer with Resinaro</h2>
            <p className="text-gray-700 mb-4">
              Resinaro recruits volunteers as partners. We value your time, invest in your development and help you leverage volunteer experience into tangible career outcomes.
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold text-green-900">Real projects, real impact</h3>
                <p className="text-sm text-gray-700 mt-2">
                  Work on concrete tasks such as event delivery, translation projects, campaigns and digital content that benefit real people now.
                </p>
              </div>

              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold text-green-900">Boost your CV</h3>
                <p className="text-sm text-gray-700 mt-2">
                  Gain leadership, communication and project management experience that employers recognise. We provide role descriptions and outcomes you can reference on applications.
                </p>
              </div>

              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold text-green-900">Mentoring & training</h3>
                <p className="text-sm text-gray-700 mt-2">
                  Access mentoring from experienced volunteers and staff, and role-specific training sessions to grow skills quickly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* NEW: Career & Skills */}
        <section className="mt-8">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-green-900 mb-3">How volunteering helps your career</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Hands-on experience:</strong> Take responsibility for real tasks under supportive supervision.</li>
              <li><strong>Leadership & teamwork:</strong> Lead small projects and collaborate with diverse teams, an asset for management roles.</li>
              <li><strong>Digital skills:</strong> Gain experience in content creation, social media, basic SEO and analytics.</li>
              <li><strong>Communications:</strong> Practice public-facing communications, stakeholder management and community engagement.</li>
              <li><strong>Portfolio & references:</strong> Receive tangible examples of work and professional references from project leads.</li>
            </ul>
          </div>
        </section>

        {/* NEW: Learning & Media */}
        <section className="mt-8">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-green-900 mb-3">Learning pathways & media exposure</h2>
            <p className="text-gray-700 mb-3">
              Volunteers who support content, marketing or events can access a growth path leading to public exposure and demonstrable outcomes.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold">Content & marketing</h3>
                <p className="text-sm text-gray-700 mt-2">
                  Learn how to plan and write blog posts, produce short videos for YouTube, schedule social posts and read basic analytics. We run mentoring sessions covering content strategy and practical tools.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">YouTube & social media</h3>
                <p className="text-sm text-gray-700 mt-2">
                  Support our YouTube and social channels to gain on-camera experience, editing skills and portfolio pieces. Selected contributors are credited on videos and posts.
                </p>
                <p className="text-sm mt-2">
                  Follow our channels: <a href="https://youtube.com/" target="_blank" rel="noreferrer" className="underline text-green-900">YouTube</a>, <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="underline text-green-900">X</a>, <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="underline text-green-900">Instagram</a>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* NEW: Roles, expectations & commitment */}
        <section className="mt-8">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-green-900 mb-3">Roles, time commitment and next steps</h2>

            <div className="grid md:grid-cols-2 gap-4 text-gray-700">
              <div>
                <h3 className="font-semibold">Typical roles</h3>
                <ul className="list-disc list-inside mt-2">
                  <li>Language support and interpretation</li>
                  <li>Translations and document preparation</li>
                  <li>Events and community outreach</li>
                  <li>Digital content and social media</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold">Time commitment</h3>
                <p className="mt-2 text-sm">
                  Most volunteers commit between 2 and 8 hours per week. Short-term, project-based and one-off opportunities are available. Tell us your availability on the form and we will match you to suitable tasks.
                </p>
              </div>
            </div>

            <div className="mt-4">
              <h3 className="font-semibold">What we expect</h3>
              <p className="text-sm mt-2">
                Professional conduct, reliability and a willingness to learn. We provide onboarding and clear role descriptions so you will know what success looks like.
              </p>
            </div>
          </div>
        </section>

        {/* NEW: Testimonials / outcomes */}
        <section className="mt-8">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-green-900 mb-3">Volunteer outcomes and testimonials</h2>

            <div className="space-y-4">
              <blockquote className="border-l-4 border-green-900 pl-4 text-gray-700">
                <p className="italic">&quot;Volunteering with Resinaro helped me gain experience in content strategy. I used my work with Resinaro on two job applications and secured interviews.&quot; — Alessandra, former volunteer</p>
              </blockquote>

              <blockquote className="border-l-4 border-green-900 pl-4 text-gray-700">
                <p className="italic">&quot;I learned to edit short videos for YouTube and now include those pieces in my portfolio.&quot; — Marco, digital volunteer</p>
              </blockquote>
            </div>
          </div>
        </section>

        {/* NEW: High-level CTA */}
        <section className="mt-10">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm text-center">
            <h3 className="text-xl font-semibold text-green-900 mb-3">Ready to take the next step?</h3>
            <p className="text-gray-700 mb-4">
              Submit the form above and we will match you to appropriate roles. If you want to discuss opportunities before applying, book a short call.
            </p>
            <div className="flex justify-center gap-3">
              <Link href={p(locale, "/contact")} className="inline-flex items-center rounded-lg bg-green-900 text-white px-5 py-2 font-medium shadow hover:bg-green-800">
                Contact us
              </Link>
              <Link href={p(locale, "/services")} className="inline-flex items-center rounded-lg border border-gray-300 px-5 py-2">
                Explore services
              </Link>
            </div>
          </div>
        </section>

        <section className="mt-8 text-sm text-gray-600">
          <p>
            By submitting this form you consent to Resinaro storing your contact details so that we can contact you about volunteering. For full details see our{" "}
            <Link href={p(locale, "/privacy-policy")} className="underline text-green-900">Privacy Policy</Link>.
          </p>
        </section>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      </div>
    </main>
  );
}
