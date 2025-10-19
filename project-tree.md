.
├── components
│   ├── AireForm.tsx
│   ├── CieForm.tsx
│   ├── ClientLayout.tsx
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   ├── PageWrapper.tsx
│   └── ServiceForm.tsx
├── create-locale-files.sh
├── .env.example
├── .env.local
├── eslint.config.mjs
├── final-status-report.sh
├── fix-async-params.sh
├── fix-service-pages.sh
├── .gitignore
├── next.config.ts
├── next-env.d.ts
├── next-sitemap.config.js
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── project-tree.md
├── public
│   ├── android-chrome-192x192.png
│   ├── android-chrome-512x512.png
│   ├── apple-touch-icon.png
│   ├── assets
│   │   └── resinaro-terms-summary.pdf
│   ├── Emblem_of_Italy.svg.png
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── favicon.ico
│   ├── file.svg
│   ├── globe.svg
│   ├── handshake-solid-full.svg
│   ├── images
│   │   ├── about
│   │   │   ├── community-image.png
│   │   │   └── hero-bluehour.png
│   │   ├── aire-registration-hero-3840x1280.png
│   │   ├── aire-registration.png
│   │   ├── aire-updates-hero-3840x1280.png
│   │   ├── bradford-buonissimo.jpg
│   │   ├── bradford-emporio-italia.jpg
│   │   ├── bradford-italianissimo.jpg
│   │   ├── bradford-lacaverna.jpg
│   │   ├── bradford-mammamia.jpg
│   │   ├── bradford-roswithas.jpg
│   │   ├── bradford-san-angelo.jpg
│   │   ├── bulkessentials.png
│   │   ├── cie-hero-3840x1280.png
│   │   ├── cleaning.png
│   │   ├── community-background.png
│   │   ├── corn-exchange.png
│   │   ├── desk-chargers-adapter.jpg
│   │   ├── desk-hero.jpg
│   │   ├── fisrt-payslip-uk-italian.jpg
│   │   ├── home-pharmacy-basics.png
│   │   ├── housing-london-hero-3840x1280.png
│   │   ├── italian-essentials.png
│   │   ├── italian-licence-exchange-hero-3840x1280.png
│   │   ├── italian-passport-uk-hero-3840x1280.png
│   │   ├── landscape-image.png
│   │   ├── leeds-bottega.jpg
│   │   ├── leeds-lapiola.jpg
│   │   ├── leeds-livinitaly-bottega.jpg
│   │   ├── leeds-livinitaly.jpg
│   │   ├── leeds-salumeria.jpg
│   │   ├── leeds-salvos.jpg
│   │   ├── leeds-sarto.jpg
│   │   ├── leeds-stuzzi.jpg
│   │   ├── leeds-veeno.jpg
│   │   ├── linastores.png
│   │   ├── loneliness-belonging-uk-30day-hero-3840x1280.png
│   │   ├── lupo.jpg
│   │   ├── mokapot.png
│   │   ├── monzo-account-uk-hero-3840x1280.png
│   │   ├── national-insurance-number-uk-hero-3840x1280.png
│   │   ├── nationalinsurance.png
│   │   ├── nhs-healthcare-italians-uk-hero-3840x1280.png
│   │   ├── nhs-mental-health-access-hero-3840x1280.png
│   │   ├── noi-quattro.jpg
│   │   ├── passportreg.png
│   │   ├── pasta-factory.jpg
│   │   ├── proof-of-address-uk-hero.png
│   │   ├── quicktrip-hero.jpg
│   │   ├── quicktrip.png
│   │   ├── raising-bilingual-kids.jpg
│   │   ├── register-events-hero-3840x1280.png
│   │   ├── resinaro-general.png
│   │   ├── revolut-hero-3840x1280.png
│   │   ├── roma-deli.png
│   │   ├── salvis-deli.jpg
│   │   ├── San-Carlo-MAN-new-1200x800.webp
│   │   ├── San-Carlo.webp
│   │   ├── service-passport.png
│   │   ├── service-visa.png
│   │   ├── spid-digital-id.png
│   │   ├── spid-vs-cie-hero-3840x1280.png
│   │   ├── starling-hero-3840x1280.png
│   │   ├── starterkitchen.png
│   │   ├── stress-anxiety-toolkit-hero-3840x1280.png
│   │   ├── uk-bank-kyc-italians-hero.png
│   │   ├── vino-buono.jpg
│   │   ├── warmth-energy-hero-3840x1280.png
│   │   └── warmth-hero.jpg
│   ├── logo-ACLI-aps.webp
│   ├── Logo.jpg
│   ├── next.svg
│   ├── nhs-logo.svg
│   ├── reports
│   │   ├── safeguarding-policy.pdf
│   │   └── transparency-2025.pdf
│   ├── robots.txt
│   ├── sitemap-0.xml
│   ├── sitemap.xml
│   ├── site.webmanifest
│   ├── trust
│   │   └── govuk.png
│   ├── vercel.svg
│   └── window.svg
├── README.md
├── scripts
│   └── ping-sitemaps.js
├── src
│   ├── app
│   │   ├── about
│   │   │   └── page.tsx
│   │   ├── advertise
│   │   │   └── page.tsx
│   │   ├── api
│   │   │   ├── ads
│   │   │   │   └── apply
│   │   │   │       └── route.ts
│   │   │   ├── contact
│   │   │   │   └── route.ts
│   │   │   ├── services
│   │   │   │   └── book
│   │   │   │       └── route.ts
│   │   │   └── stripe
│   │   │       └── webhook
│   │   │           └── route.ts
│   │   ├── community
│   │   │   ├── bulk-italian-pantry-uk
│   │   │   │   └── page.tsx
│   │   │   ├── bureaucracy-guides
│   │   │   │   ├── aire-registration-uk
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── italian-cie-id-card-uk
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── italian-passport-uk-docs-prep
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── keep-aire-up-to-date-uk
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── page.tsx
│   │   │   │   ├── register-uk-events-with-italy
│   │   │   │   │   └── page.tsx
│   │   │   │   └── spid-vs-cie-id-italians-abroad
│   │   │   │       └── page.tsx
│   │   │   ├── buying-in-bulk-uk-italian-staples
│   │   │   │   └── page.tsx
│   │   │   ├── council-tax-italians-2025
│   │   │   │   └── page.tsx
│   │   │   ├── first-payslip-italians-uk-2025
│   │   │   │   └── page.tsx
│   │   │   ├── home-pharmacy-uk
│   │   │   │   └── page.tsx
│   │   │   ├── italian-essentials
│   │   │   │   └── page.tsx
│   │   │   ├── kids-italian-at-home
│   │   │   │   └── page.tsx
│   │   │   ├── life-in-uk
│   │   │   │   ├── banking
│   │   │   │   │   ├── open-monzo-account-uk-2025
│   │   │   │   │   ├── open-revolut-account-uk-2025
│   │   │   │   │   ├── open-starling-account-uk-2025
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── exchange-italian-driving-licence-uk
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── finding-affordable-housing-london-2025
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── national-insurance-number-uk-italians
│   │   │   │   │   └── page.tsx
│   │   │   │   └── navigating-nhs-healthcare-italians-uk-2025
│   │   │   │       └── page.tsx
│   │   │   ├── mental-health
│   │   │   │   ├── loneliness-belonging-uk-30-day-plan
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── nhs-mental-health-access-uk
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── page.tsx
│   │   │   │   └── stress-anxiety-toolkit-migrants-uk
│   │   │   │       └── page.tsx
│   │   │   ├── moka-coffee-kit
│   │   │   │   └── page.tsx
│   │   │   ├── move-in-cleaning-kit-uk
│   │   │   │   └── page.tsx
│   │   │   ├── national-insurance-number-italians-uk-2025
│   │   │   │   └── page.tsx
│   │   │   ├── open-uk-bank-account-no-credit-italians-2025
│   │   │   │   └── page.tsx
│   │   │   ├── oyster-vs-contactless-travelcards-2025
│   │   │   │   └── page.tsx
│   │   │   ├── page.tsx
│   │   │   ├── power-adapters-uk-italy
│   │   │   │   └── page.tsx
│   │   │   ├── proof-of-address-without-bills-2025
│   │   │   │   └── page.tsx
│   │   │   ├── starter-uk-kitchen-italian
│   │   │   │   └── page.tsx
│   │   │   ├── travel-to-italy-kit
│   │   │   │   └── page.tsx
│   │   │   ├── uk-desk-setup-newcomers
│   │   │   │   └── page.tsx
│   │   │   ├── uk-renting-for-italians-2025
│   │   │   │   └── page.tsx
│   │   │   ├── uk-sim-esim-newcomers-2025
│   │   │   │   └── page.tsx
│   │   │   ├── uk-tax-code-for-italians-2025
│   │   │   │   └── page.tsx
│   │   │   ├── U Settlement Scheme (EUSS) for Italians — Prove & Update Your Status (2025): Share Codes, New Passport, Travel & Common Fixes
│   │   │   │   └── page.tsx
│   │   │   ├── utilities-setup-uk-2025
│   │   │   │   └── page.tsx
│   │   │   └── warmth-energy-savers-uk
│   │   │       └── page.tsx
│   │   ├── contact
│   │   │   └── page.tsx
│   │   ├── cookies
│   │   │   └── page.tsx
│   │   ├── directory
│   │   │   ├── [city]
│   │   │   │   ├── [category]
│   │   │   │   │   └── page.tsx
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   ├── donate
│   │   │   └── page.tsx
│   │   ├── globals.css
│   │   ├── governance
│   │   │   └── page.tsx
│   │   ├── jobs
│   │   │   └── page.tsx
│   │   ├── layout.tsx
│   │   ├── not-found.tsx
│   │   ├── page.tsx
│   │   ├── privacy-policy
│   │   │   └── page.tsx
│   │   ├── refund-policy
│   │   │   └── page.tsx
│   │   ├── services
│   │   │   ├── aire
│   │   │   │   ├── page.tsx
│   │   │   │   └── thanks
│   │   │   │       └── page.tsx
│   │   │   ├── benefits
│   │   │   │   └── page.tsx
│   │   │   ├── community
│   │   │   │   └── page.tsx
│   │   │   ├── housing
│   │   │   │   └── page.tsx
│   │   │   ├── id-card
│   │   │   │   ├── page.tsx
│   │   │   │   └── thanks
│   │   │   │       └── page.tsx
│   │   │   ├── mental-health
│   │   │   │   └── page.tsx
│   │   │   ├── nin-support
│   │   │   │   └── page.tsx
│   │   │   ├── page.tsx
│   │   │   ├── passport
│   │   │   │   └── page.tsx
│   │   │   ├── passport-consular
│   │   │   │   └── thanks
│   │   │   │       └── page.tsx
│   │   │   ├── settled-status
│   │   │   │   └── page.tsx
│   │   │   ├── translation
│   │   │   │   └── page.tsx
│   │   │   ├── visa
│   │   │   │   └── page.tsx
│   │   │   └── visa-booking
│   │   │       ├── page.tsx
│   │   │       └── thanks
│   │   │           └── page.tsx
│   │   ├── terms
│   │   │   └── page.tsx
│   │   └── volunteer
│   │       └── page.tsx
│   ├── components
│   │   ├── AdvertiseForm.tsx
│   │   ├── affiliate
│   │   │   ├── AmazonLink.tsx
│   │   │   └── index.ts
│   │   ├── AireForm.tsx
│   │   ├── BenefitsForm.tsx
│   │   ├── BlogToolbar.tsx
│   │   ├── CieForm.tsx
│   │   ├── ClientLayout.tsx
│   │   ├── CookiePreferencesClient.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroBanner.tsx
│   │   ├── HousingForm.tsx
│   │   ├── NewsletterCard.tsx
│   │   ├── NinForm.tsx
│   │   ├── PageWrapper.tsx
│   │   ├── PassportForm.tsx
│   │   ├── ProgressBar.tsx
│   │   ├── register-with-gp-nhs-number-ghic-italians-2025
│   │   │   └── page.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── ServiceForm.tsx
│   │   ├── ServicesFAQ.tsx
│   │   ├── ServicesTrust.tsx
│   │   ├── ShareBar.tsx
│   │   ├── TermsAcceptance.tsx
│   │   ├── TranslationForm.tsx
│   │   ├── Typewriter.tsx
│   │   ├── VisaForm.tsx
│   │   └── VolunteerFormClient.tsx
│   ├── data
│   │   ├── directory.ts
│   │   └── jobs.ts
│   ├── mdx-components
│   │   └── index.tsx
│   └── utils
│       ├── amazon-affiliate.ts
│       └── email.ts
├── tailwind.config.js
├── tsconfig.json
└── tsconfig.tsbuildinfo

100 directories, 232 files
