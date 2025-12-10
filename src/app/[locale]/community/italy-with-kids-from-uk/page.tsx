// src/app/[locale]/community/italy-with-kids-from-uk/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FamilyTravelCheckForm from "@/components/FamilyTravelCheckForm";
import { FamilyTripChecklistCta } from "@/components/FamilyTripChecklistCta";

type Locale = "en" | "it";

const PUBLISHED = "2025-12-09";
const UPDATED = "2025-12-09";

// Affiliate config
const AMAZON_BASE_UK = "https://www.amazon.co.uk/dp/";
const AMAZON_TAG =
  process.env.NEXT_PUBLIC_AMAZON_TAG || "resinaroamzn-21";

/* ----------------------------- i18n strings ---------------------------- */

function t(locale: Locale) {
  const it = locale === "it";

  return {
    inLang: it ? "it-IT" : "en-GB",

    metaTitle: it
      ? "Italia con bambini dal Regno Unito (2025): documenti, valigia e voli"
      : "Italy with Kids from the UK (2025): documents, packing & flights",
    metaDesc: it
      ? "Guida pratica 2025 per viaggiare dal Regno Unito all’Italia con bambini: documenti, regole delle compagnie, valigia furba e picchi di prezzo. Con una checklist veloce e un controllo viaggio da £5."
      : "Practical 2025 guide for travelling from the UK to Italy with kids: documents, airline rules, smart packing and peak prices. Includes a quick checklist and optional £5 trip check.",

    heroAlt: it
      ? "Famiglia con bambini che sale su un traghetto verso l’Italia con valigie e zainetti"
      : "Family with children boarding a ferry to Italy with suitcases and backpacks",
    heroBadge: it
      ? "Viaggi • Famiglia • UK → Italia"
      : "Travel • Family • UK → Italy",
    heroTitleA: it
      ? "Italia con bambini dal Regno Unito"
      : "Italy with kids from the UK",
    heroTitleB: it
      ? "documenti, valigia e voli (2025)"
      : "documents, packing & flights (2025)",
    heroLead: it
      ? "Cosa serve davvero per viaggiare con bimbi dall’UK all’Italia senza panico al gate: passaporti, permessi, bagagli e piccoli trucchi per arrivare meno distrutti."
      : "What you actually need to get from the UK to Italy with kids and no panic at the gate: passports, consent letters, luggage rules and small tricks so you arrive less exhausted.",
    pub: it ? "Pubblicato: 9 Dic 2025" : "Published: 9 Dec 2025",
    upd: it ? "Aggiornato: 9 Dic 2025" : "Updated: 9 Dec 2025",
    read: it ? "~14 min lettura" : "~14 min read",

    // Summary
    summaryH: it
      ? "Riassunto rapido — tre cose da sistemare prima di comprare i voli"
      : "Quick summary — 3 things to fix before you buy flights",
    s1Label: it ? "1) Documenti e cognomi" : "1) Documents & surnames",
    s1Text: it
      ? "Controlla che tutti abbiano un documento valido per l’Italia e che cognomi e date coincidano su biglietti, passaporti e prenotazione."
      : "Make sure everyone has a valid document for Italy and that surnames and dates match across tickets, passports and booking.",
    s2Label: it ? "2) Regole bagaglio per compagnia" : "2) Baggage rules per airline",
    s2Text: it
      ? "Ogni compagnia ha misure e pesi diversi per passeggini, zaini e trolley. Leggi la pagina bagagli prima di comprare valigie nuove."
      : "Each airline has different size and weight limits for buggies, backpacks and cabin bags. Read the baggage page before buying new luggage.",
    s3Label: it ? "3) Orari realistici con bimbi" : "3) Kid-friendly timings",
    s3Text: it
      ? "Valuta metro/treni per arrivare all’aeroporto, orari pasto/sonno e possibili scioperi. Un volo un’ora più comodo vale più di £15 risparmiati."
      : "Factor in trains/tubes to the airport, food/nap windows and possible strikes. A slightly better timed flight is often worth more than saving £15.",
    miniCtaP: it
      ? "Vuoi una mini-checklist stampabile per i viaggi famiglia UK → Italia?"
      : "Want a tiny printable checklist for UK → Italy family trips?",
    miniCtaBtn: it ? "Mandami la checklist" : "Send me the checklist",

    // Documents section
    docsH: it
      ? "Documenti per bambini UK → Italia: chi può viaggiare con cosa"
      : "Kids’ documents UK → Italy: who can travel with what",
    docsIntro: it
      ? "Qui non sostituiamo i siti ufficiali, ma ti aiutiamo a capire quali combinazioni di passaporti causano più problemi al gate o al controllo."
      : "This doesn’t replace official sites, but it helps you see which passport combinations trigger the most questions at the gate or border.",
    docsCards: it
      ? [
          {
            title: "Bambini con passaporto italiano",
            body:
              "Per entrare in Italia, il passaporto italiano (o CIE valida) di solito basta. Occhio però al rientro in UK se vivete lì da tempo.",
            bullets: [
              "Controlla scadenza: meglio almeno 6 mesi di validità.",
              "Se il bambino ha doppia cittadinanza, porta anche il documento UK se disponibile.",
              "Per i minori che viaggiano con un solo genitore, valuta una lettera di consenso firmata dall’altro.",
            ],
          },
          {
            title: "Bambini con solo passaporto UK",
            body:
              "Per molti bambini nati in UK da genitori italiani o misti, il passaporto è solo britannico. Possono comunque entrare in Italia, ma con regole da extra-UE.",
            bullets: [
              "Controlla le regole attuali per cittadini UK che entrano in area Schengen.",
              "Assicurati che il genitore che viaggia abbia il diritto legale di portarli (ordini del tribunale, ecc. se rilevante).",
              "In caso di cognomi diversi, porta certificati di nascita o documenti che collegano il genitore al minore.",
            ],
          },
          {
            title: "Famiglie miste & cognomi diversi",
            body:
              "È qui che le cose si complicano: mamma con cognome diverso, nuovo partner, nonni che accompagnano da soli.",
            bullets: [
              "Porta sempre certificato di nascita (meglio plurilingue) o prove che mostrano il legame.",
              "Per nonni/z ii che viaggiano da soli con minori, è prudente avere una lettera di consenso firmata dai genitori.",
              "Controlla le linee guida della compagnia aerea e della polizia di frontiera del Paese di uscita.",
            ],
          },
        ]
      : [
          {
            title: "Kids with Italian passports",
            body:
              "For entering Italy, an Italian passport (or valid CIE) is usually enough. The trickier part can be coming back to the UK if you live there long-term.",
            bullets: [
              "Check expiry: ideally at least 6 months’ validity left.",
              "If your child has dual nationality, bring the UK document as well if they have one.",
              "If a child travels with one parent only, consider carrying a consent letter from the other parent.",
            ],
          },
          {
            title: "Kids with UK passport only",
            body:
              "A lot of UK-born kids of Italian or mixed parents only have a British passport. They can still enter Italy, but they’re treated as non-EU nationals.",
            bullets: [
              "Check current rules for UK citizens entering the Schengen area.",
              "Make sure the travelling parent has the legal right to take them abroad (court orders etc. if relevant).",
              "If surnames differ, carry birth certificates or documents linking the parent to the child.",
            ],
          },
          {
            title: "Mixed families & different surnames",
            body:
              "This is where questions appear: mum with another surname, new partner, grandparents travelling alone with a child.",
            bullets: [
              "Carry a full birth certificate (ideally multilingual) or other proof of the relationship.",
              "For grandparents / relatives travelling alone with minors, it’s wise to have a signed consent letter from the parents.",
              "Check airline guidance and exit-country border police advice before travelling.",
            ],
          },
        ],

    docsNote: it
      ? "Le regole possono cambiare. Controlla sempre i siti ufficiali di governo UK, Italia e della compagnia aerea prima di partire."
      : "Rules change. Always check the official UK and Italian government sites plus your airline’s guidance before travelling.",

    // Packing / affiliate kit
    packingH: it
      ? "Valigia furba per voli UK → Italia con bimbi"
      : "Smart packing for UK → Italy flights with kids",
    packingIntro: it
      ? "L’obiettivo non è avere la valigia perfetta per Instagram, ma ridurre i momenti “non trovo nulla” in aeroporto e in cabina."
      : "The goal isn’t a perfect Instagram suitcase — it’s avoiding the “I can’t find anything” moments in the airport and on the plane.",
    affNote: it
      ? "I link ad Amazon qui sotto sono affiliati: se compri passando da lì potremmo ricevere una piccola commissione, senza costi extra per te."
      : "Links to Amazon below are affiliate links: if you buy through them we may earn a small commission at no extra cost to you.",
    kitBlocks: it
      ? [
          {
            asin: "B0CGRBV85L",
            url: "https://www.amazon.co.uk/Compression-Lumesner-Suitcases-Suitcase-Organizers/dp/B0CGRBV85L?crid=1Y5BOXDEKO4ZH&dib=eyJ2IjoiMSJ9.-DanuNN_dup32l9DY1Y26es0WYGHXSdaqD0wRK8ttjHhcaniQY59xxa_usZpK_lJItpUObzppa-AmTPIRgLUR7IMUA1HZT2SFoEZRBLLwTgzjpfVD7PdMWkR3Xduux8G6Cpm-vrwLX_QIyqjyXSNz2CHhngQGKRbZWB8n3unGcxn8igEQmcyOlvvY6YJnHNDD1hT30moJiho9djAeFUdJCbsho0TNbD8JahIEZJc0XW8Z5TVoTniZGlYOMBC-4Blh-ciIvicN0xuBKQ6tf3a4U-eNw0B8ytWp4SPSqEjKyE.XsiL67lhl7KWi81ReucAQU5p8BCf3wXtlUbGYjnwGRU&dib_tag=se&keywords=compression%2Bpacking%2Bcubes%2Bset%2Bcarry%2Bon%2Bsuitcase&qid=1765327159&sprefix=%2Caps%2C139&sr=8-6&th=1&linkCode=ll1&tag=resinaroamzn-21&linkId=7c7b38fab2ed9a318c85757bc9e64208&language=en_GB&ref_=as_li_ss_tl",
            title: "Set di packing cubes compressibili",
            tag: "Ordine in valigia",
            desc:
              "Dividi outfit bambini / adulti e pigiami: quando arrivi tiri fuori il cubo giusto senza svuotare tutto.",
            bullets: [
              "Aiuta a mantenere separati panni puliti e sporchi.",
              "Comodo se dormite in più posti (nonni, hotel, Airbnb).",
              "Occhio alle misure: scegli un set che entri nel trolley della compagnia che usi più spesso.",
            ],
          },
          {
            asin: "B0F2RSNPQ5",
            url: "https://www.amazon.co.uk/LOVEVOOK-Underseat-Carry-Ons-Travelling-Airplanes/dp/B0F2RSNPQ5?crid=20R503YPLK24N&dib=eyJ2IjoiMSJ9.z03zP1YQiC8E9lF166t3RTgi_ZPz1yphS-zvSlxqCO1DZa7iQeRFNAf1siyi-ONxJyI8RR9ZhEAdh6espjJb5RCDPZcP6529ciGc-yNanmxmqvY6XkNOmlHxKCnu6DXUfaCTDphiFotvlnmGAMFCjl7IRGlugbs_-iRsIQLTDZMHO6ovL4dXru3p7ZoGo-4UN3UfGXbjCwTLq4d9DY9Mn9dCTZt3E3_Ejj6LmHK4TryPIJ5dGonUhLRRCSZbutKVWTS9iAF6NIuNr8qgxdXfr-O4XbcgZdC2t3eBoVt6V4I.0FAiDrW3kngMgwK7_UaUqgeN79ubE1i4pvIT3hy9_FE&dib_tag=se&keywords=kids%2Bsmall%2Btravel%2Bbackpack%2Bpersonal%2Bitem%2Bunder%2Bseat&qid=1765327205&sprefix=kids%2Bsmall%2Btravel%2Bbackpack%2Bpersonal%2Bitem%2Bunder%2Bseat%2Caps%2C89&sr=8-6&th=1&linkCode=ll1&tag=resinaroamzn-21&linkId=4f970621d54841cab719528b3b16962c&language=en_GB&ref_=as_li_ss_tl",
            title: "Zainetto personale per ogni bambino",
            tag: "Intrattenimento",
            desc:
              "Uno zainetto piccolo per ciascun bimbo con giochi, snack e felpa leggera riduce drammi sul sedile.",
            bullets: [
              "Controlla le misure come “personal item” per la tua compagnia.",
              "Fai scegliere 1–2 giochi “speciali da aereo” che escono solo in viaggio.",
              "Tieni dentro anche un cambio completo in caso di incidenti.",
            ],
          },
          {
            asin: "B0DKSL1F2Z",
            url: "https://www.amazon.co.uk/VULKIT-Passport-Blocking-Essential-Detachable/dp/B0DKSL1F2Z?crid=3GLN48QI5X25A&dib=eyJ2IjoiMSJ9.NYopwRQjgr20_bSR3NoRMKI_Mu5VHs6H37youcLhJG8ch_KFqeMIMp_hf7nGrAxcuiNdD01TR3nq9HPENYpf76JNGoQDxTLXwC_LjFj351cH-0ocm8CH5KbEUrsmVQWbAYjSviqsYgRVxb0k78icee0Il9W0s_3sWnh2fFAsQhGWk5UEZFEXFhnnYai0oO1t9pj-_b44uTpq6Re8VuG9J1Sv6JX1znHV5Dgg8RBLWp3TLj6dzzcpYHEFIucAKHFEs26_PomJCtwktduoOxIGtivJX1TQi2Y7IyTh0uTXJCw.z7kS9rHAH1Yai7O29yQC1VKMyjGpXnE1zffzrTOkJ0&dib_tag=se&keywords=family%2Bpassport%2Bholder%2Btravel%2Bwallet%2Brfid&qid=1765327237&sprefix=family%2Bpassport%2Bholder%2Btravel%2Bwallet%2Brfid%2Caps%2C102&sr=8-2-spons&aref=cUIbsQYxCX&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&linkCode=ll1&tag=resinaroamzn-21&linkId=4006a7946ed9562f3c8aa799a82dc91c&language=en_GB&ref_=as_li_ss_tl",
            title: "Organizer documenti & porta-passaporti",
            tag: "Documenti",
            desc:
              "Un’unica busta per passaporti, carte d’imbarco e lettere di consenso evita panico in fila al controllo.",
            bullets: [
              "Metti sempre i documenti nello stesso ordine (adulti, poi bambini).",
              "Tieni una penna e qualche foglio di carta per eventuali moduli.",
              "Non spedire mai questa busta in stiva: sempre nel bagaglio a mano.",
            ],
          },
        ]
      : [
          {
            asin: "B0CGRBV85L",
            url: "https://www.amazon.co.uk/Compression-Lumesner-Suitcases-Suitcase-Organizers/dp/B0CGRBV85L?crid=1Y5BOXDEKO4ZH&dib=eyJ2IjoiMSJ9.-DanuNN_dup32l9DY1Y26es0WYGHXSdaqD0wRK8ttjHhcaniQY59xxa_usZpK_lJItpUObzppa-AmTPIRgLUR7IMUA1HZT2SFoEZRBLLwTgzjpfVD7PdMWkR3Xduux8G6Cpm-vrwLX_QIyqjyXSNz2CHhngQGKRbZWB8n3unGcxn8igEQmcyOlvvY6YJnHNDD1hT30moJiho9djAeFUdJCbsho0TNbD8JahIEZJc0XW8Z5TVoTniZGlYOMBC-4Blh-ciIvicN0xuBKQ6tf3a4U-eNw0B8ytWp4SPSqEjKyE.XsiL67lhl7KWi81ReucAQU5p8BCf3wXtlUbGYjnwGRU&dib_tag=se&keywords=compression%2Bpacking%2Bcubes%2Bset%2Bcarry%2Bon%2Bsuitcase&qid=1765327159&sprefix=%2Caps%2C139&sr=8-6&th=1&linkCode=ll1&tag=resinaroamzn-21&linkId=7c7b38fab2ed9a318c85757bc9e64208&language=en_GB&ref_=as_li_ss_tl",
            title: "Set of compression packing cubes",
            tag: "Order in your suitcase",
            desc:
              "Split kids/adults outfits and pyjamas so you pull out the right cube without unpacking everything.",
            bullets: [
              "Keeps clean and dirty clothes separate.",
              "Great if you’re staying in multiple places (nonni, hotel, Airbnb).",
              "Check cube sizes against your usual cabin bag allowance.",
            ],
          },
          {
            asin: "B0F2RSNPQ5",
            url: "https://www.amazon.co.uk/LOVEVOOK-Underseat-Carry-Ons-Travelling-Airplanes/dp/B0F2RSNPQ5?crid=20R503YPLK24N&dib=eyJ2IjoiMSJ9.z03zP1YQiC8E9lF166t3RTgi_ZPz1yphS-zvSlxqCO1DZa7iQeRFNAf1siyi-ONxJyI8RR9ZhEAdh6espjJb5RCDPZcP6529ciGc-yNanmxmqvY6XkNOmlHxKCnu6DXUfaCTDphiFotvlnmGAMFCjl7IRGlugbs_-iRsIQLTDZMHO6ovL4dXru3p7ZoGo-4UN3UfGXbjCwTLq4d9DY9Mn9dCTZt3E3_Ejj6LmHK4TryPIJ5dGonUhLRRCSZbutKVWTS9iAF6NIuNr8qgxdXfr-O4XbcgZdC2t3eBoVt6V4I.0FAiDrW3kngMgwK7_UaUqgeN79ubE1i4pvIT3hy9_FE&dib_tag=se&keywords=kids%2Bsmall%2Btravel%2Bbackpack%2Bpersonal%2Bitem%2Bunder%2Bseat&qid=1765327205&sprefix=kids%2Bsmall%2Btravel%2Bbackpack%2Bpersonal%2Bitem%2Bunder%2Bseat%2Caps%2C89&sr=8-6&th=1&linkCode=ll1&tag=resinaroamzn-21&linkId=4f970621d54841cab719528b3b16962c&language=en_GB&ref_=as_li_ss_tl",
            title: "Small personal backpack for each child",
            tag: "Entertainment",
            desc:
              "One small backpack per child with toys, snacks and a light hoodie reduces dramas in the seat.",
            bullets: [
              "Check it fits as a “personal item” for your airline.",
              "Let them choose 1–2 “plane-only” toys that only appear when travelling.",
              "Include a full spare outfit in case of spills or accidents.",
            ],
          },
          {
            asin: "B0DKSL1F2Z",
            url: "https://www.amazon.co.uk/VULKIT-Passport-Blocking-Essential-Detachable/dp/B0DKSL1F2Z?crid=3GLN48QI5X25A&dib=eyJ2IjoiMSJ9.NYopwRQjgr20_bSR3NoRMKI_Mu5VHs6H37youcLhJG8ch_KFqeMIMp_hf7nGrAxcuiNdD01TR3nq9HPENYpf76JNGoQDxTLXwC_LjFj351cH-0ocm8CH5KbEUrsmVQWbAYjSviqsYgRVxb0k78icee0Il9W0s_3sWnh2fFAsQhGWk5UEZFEXFhnnYai0oO1t9pj-_b44uTpq6Re8VuG9J1Sv6JX1znHV5Dgg8RBLWp3TLj6dzzcpYHEFIucAKHFEs26_PomJCtwktduoOxIGtivJX1TQi2Y7IyTh0uTXJCw.z7kS9rHAH1Yai7O29yQC1VKMyjGpXnE1zffzrTOkJ0&dib_tag=se&keywords=family%2Bpassport%2Bholder%2Btravel%2Bwallet%2Brfid&qid=1765327237&sprefix=family%2Bpassport%2Bholder%2Btravel%2Bwallet%2Brfid%2Caps%2C102&sr=8-2-spons&aref=cUIbsQYxCX&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&linkCode=ll1&tag=resinaroamzn-21&linkId=4006a7946ed9562f3c8aa799a82dc91c&language=en_GB&ref_=as_li_ss_tl",
            title: "Travel document & passport organiser",
            tag: "Documents",
            desc:
              "One wallet for passports, boarding passes and consent letters so you’re not hunting in three bags at security.",
            bullets: [
              "Keep documents in a fixed order (adults first, then kids).",
              "Add a pen and a few spare sheets for any forms.",
              "Never put this wallet in checked luggage: hand baggage only.",
            ],
          },
        ],

    // Flight / transport section
    flightsH: it
      ? "Volo, treno o traghetto? Scelte pratiche con bambini"
      : "Plane, train or ferry? Practical choices with kids",
    flightsIntro: it
      ? "Non esiste un mezzo perfetto: dipende da età dei bambini, budget e dove dovete arrivare in Italia."
      : "There’s no perfect option — it depends on kids’ ages, budget and where in Italy you’re heading.",
    flightsCards: it
      ? [
          {
            title: "Aereo: veloce ma intenso",
            body:
              "Ottimo per week-end o se avete pochi giorni di ferie, ma richiede energia concentrata in poche ore.",
            bullets: [
              "Scegli se puoi orari che cadono fuori dalle ore di sonno profondo dei bimbi.",
              "Arriva in aeroporto con più margine del solito: bagno, snack e imprevisti richiedono tempo.",
              "Valuta l’acquisto di qualche snack “bonus” dopo i controlli per evitare fame improvvisa in decollo.",
            ],
          },
          {
            title: "Auto + traghetto",
            body:
              "Più lento, ma hai flessibilità su bagagli (passeggino grande, giochi, cibo) e orari.",
            bullets: [
              "Può essere meno stressante se i bambini dormono bene in auto.",
              "Calcola bene le soste: aree di servizio in Francia/Italia sono più frequenti che in UK.",
              "Controlla i requisiti di documenti e assicurazione auto per ogni Paese attraversato.",
            ],
          },
          {
            title: "Treno + notte in mezzo",
            body:
              "Per alcune tratte (es. Londra–Parigi–Italia del nord) può essere una buona alternativa al volo corto affollato.",
            bullets: [
              "Spesso costa di più, ma con spazio per muoversi e meno controlli stile aeroporto.",
              "Prenota posti insieme e porta attività silenziose per i vagoni tranquilli.",
              "Verifica in anticipo i cambi di stazione (es. Paris Nord → Lyon / Bercy) con bambini e valigie.",
            ],
          },
        ]
      : [
          {
            title: "Plane: fast but intense",
            body:
              "Great for weekends or short holidays, but you need everyone’s energy compressed into a few hours.",
            bullets: [
              "When possible, pick times that avoid your kids’ deepest sleep window.",
              "Arrive at the airport earlier than pre-kids life: toilets, snacks and emergencies eat time.",
              "Plan to buy a couple of “bonus” snacks after security to avoid meltdown take-off hunger.",
            ],
          },
          {
            title: "Car + ferry",
            body:
              "Slower, but flexible for luggage (full-size pram, toys, food) and schedule.",
            bullets: [
              "Can be calmer if your kids sleep well in the car.",
              "Plan service-station breaks carefully; in France/Italy they’re usually more frequent than in the UK.",
              "Check car-insurance and document requirements for each country you’ll drive through.",
            ],
          },
          {
            title: "Train + overnight stop",
            body:
              "For some routes (e.g. London–Paris–northern Italy) this can beat a cramped short-haul flight.",
            bullets: [
              "Often pricier but with more space to move and fewer airport-style bottlenecks.",
              "Reserve seats together and pack quiet activities for calmer carriages.",
              "Research station changes (e.g. Paris Nord → Lyon/Bercy) in advance with kids + bags.",
            ],
          },
        ],

    // Service section
    serviceH: it
      ? "Family Travel Quick Check — controllo viaggio da £5"
      : "Family Travel Quick Check — £5 trip review",
    serviceIntro: it
      ? "Se hai dubbi su documenti, cognomi diversi o combinazioni di passaporti, possiamo dare un’occhiata al quadro completo prima che tu spenda centinaia di sterline in voli."
      : "If you’re unsure about documents, different surnames or passport mixes, we can look at the whole picture before you spend hundreds of pounds on flights.",
    serviceBullets: it
      ? [
          "Controllo veloce dei documenti che hai già (passaporti, certificati, visti).",
          "Commento su rischi principali del viaggio che stai pianificando.",
          "Mini-checklist personalizzata di cose da sistemare prima di partire.",
          "Risposta via email di solito entro 1–2 giorni lavorativi.",
        ]
      : [
          "Quick review of the documents you already have (passports, certificates, visas).",
          "Comment on the main risk points for the trip you’re planning.",
          "Short personalised checklist of what to fix before you go.",
          "Answer by email usually within 1–2 working days.",
        ],
    serviceNote: it
      ? "Nota importante: Resinaro non è una compagnia aerea né un ente di frontiera. Non possiamo garantire l’ingresso in un Paese, ma ti aiutiamo a vedere errori evidenti prima di partire."
      : "Important: Resinaro is not an airline or border authority. We can’t guarantee entry to any country, but we help you spot obvious issues before you travel.",

    // FAQ
    faqH: it ? "FAQ — viaggiare con bambini UK → Italia" : "FAQ — travelling with kids UK → Italy",
    faqs: it
      ? ([
          [
            "Serve sempre una lettera di consenso se viaggio da sola con i bambini?",
            "Dipende dal Paese di partenza/arrivo e dalla situazione familiare. In molti casi non viene chiesta, ma averla (in inglese, firmata e con contatti) riduce problemi se qualcuno fa controlli più approfonditi.",
          ],
          [
            "Posso mettere i documenti dei bambini nel bagaglio da stiva?",
            "È molto rischioso: se il bagaglio viene perso o ritardato, rimani bloccato. Tieni sempre passaporti, certificati e permessi nel bagaglio a mano.",
          ],
          [
            "Come faccio a sapere se il mio trolley va bene per Ryanair, easyJet & co.?",
            "Ogni compagnia pubblica misure e peso massimo sul proprio sito. Usa un metro e controlla prima di comprare bagagli o prima di fare la valigia.",
          ],
          [
            "Potete aiutare anche con passaporto italiano o AIRE?",
            "Sì, Resinaro offre servizi separati per AIRE e appuntamenti passaporto. Questa guida è solo una parte del quadro.",
          ],
        ] as [string, string][])
      : ([
          [
            "Do I always need a consent letter if I travel alone with the kids?",
            "It depends on departure/arrival country and your family situation. Many people travel without one, but having a simple English letter (signed, with contact details) reduces stress if someone checks more carefully.",
          ],
          [
            "Can I put the kids’ passports in checked luggage?",
            "It’s very risky: if the bag is lost or delayed, you’re stuck. Keep passports, certificates and permissions in hand luggage only.",
          ],
          [
            "How do I know if my cabin bag works for Ryanair, easyJet & others?",
            "Each airline lists size and weight on its site. Use a tape measure and check before buying luggage or packing.",
          ],
          [
            "Can you also help with Italian passport or AIRE?",
            "Yes — Resinaro has separate services for AIRE and passport appointments. This guide only covers the travel side.",
          ],
        ] as [string, string][]),
    faqFootnote: it
      ? "Questa guida è informativa e non sostituisce le regole ufficiali delle autorità competenti."
      : "This guide is informational and does not replace official rules from the relevant authorities.",
  };
}

/* ------------------------------ Metadata ------------------------------- */

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const locale = params.locale;
  const copy = t(locale);

  return {
    title: copy.metaTitle,
    description: copy.metaDesc,
    alternates: {
      canonical: "/community/italy-with-kids-from-uk",
      languages: {
        en: "/en/community/italy-with-kids-from-uk",
        it: "/it/community/italy-with-kids-from-uk",
      },
    },
    openGraph: {
      title: copy.metaTitle,
      description: copy.metaDesc,
      url: "https://www.resinaro.com/community/italy-with-kids-from-uk",
      type: "article",
      images: [
        {
          url: "/images/travel-kids-ferry-hero.jpg",
          width: 1200,
          height: 630,
          alt: copy.heroAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: copy.metaTitle,
      description: copy.metaDesc,
    },
  };
}

/* -------------------------------- Page --------------------------------- */

export default function Page({ params }: { params: { locale: Locale } }) {
  const locale = params.locale;
  const copy = t(locale);

  // JSON-LD
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: copy.metaTitle,
    datePublished: PUBLISHED,
    dateModified: UPDATED,
    author: { "@type": "Organization", name: "Resinaro" },
    publisher: { "@type": "Organization", name: "Resinaro" },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.resinaro.com/community/italy-with-kids-from-uk",
    },
    inLanguage: copy.inLang,
    articleSection: ["Travel", "Family"],
    image: ["https://www.resinaro.com/images/travel-kids-ferry-hero.jpg"],
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Community",
        item: "https://www.resinaro.com/community",
      },
      {
        "@type": "ListItem",
        position: 2,
        name:
          locale === "it"
            ? "Italia con bambini dal Regno Unito"
            : "Italy with kids from the UK",
        item: "https://www.resinaro.com/community/italy-with-kids-from-uk",
      },
    ],
  };

  return (
    <main className="bg-[#F9F6F1] text-gray-800 antialiased">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />

      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/travel-kids-ferry-hero.jpg"
            alt={copy.heroAlt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/30 to-black/5" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-32 sm:pt-32 md:pt-40 md:pb-40">
          <div className="max-w-2xl">
            <p className="mb-3 inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-xs font-semibold tracking-wide text-white ring-1 ring-white/30">
              {copy.heroBadge}
            </p>
            <h1 className="text-4xl font-black leading-tight text-white md:text-6xl drop-shadow">
              {copy.heroTitleA}
              <span className="block text-emerald-200">
                {copy.heroTitleB}
              </span>
            </h1>
            <p className="mt-4 max-w-xl text-base text-white/90 md:text-lg">
              {copy.heroLead}
            </p>
          </div>

          {/* Checklist CTA card */}
          <div className="mt-8 max-w-3xl">
            <FamilyTripChecklistCta locale={locale} />
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-2 text-xs text-white/90">
            <span>{copy.pub}</span>
            <span className="opacity-60">•</span>
            <span>{copy.upd}</span>
            <span className="opacity-60">•</span>
            <span>{copy.read}</span>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#F9F6F1] to-transparent" />
      </section>

      {/* SUMMARY */}
      <section className="mx-auto mt-10 max-w-7xl px-6 md:mt-14">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <p className="text-lg font-semibold text-emerald-800">
            {copy.summaryH}
          </p>
          <div className="mt-4 space-y-4">
            <p>
              <span className="rounded-md bg-emerald-100 px-2 py-0.5 font-semibold text-emerald-900">
                {copy.s1Label}
              </span>{" "}
              {copy.s1Text}
            </p>
            <p>
              <span className="rounded-md bg-emerald-100 px-2 py-0.5 font-semibold text-emerald-900">
                {copy.s2Label}
              </span>{" "}
              {copy.s2Text}
            </p>
            <p>
              <span className="rounded-md bg-emerald-100 px-2 py-0.5 font-semibold text-emerald-900">
                {copy.s3Label}
              </span>{" "}
              {copy.s3Text}
            </p>
          </div>
        </div>
      </section>

      {/* DOCUMENTS */}
      <section className="mx-auto mt-14 max-w-7xl px-6">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">
            {copy.docsH}
          </h2>
          <p className="mt-1 text-sm text-gray-700">
            {copy.docsIntro}
          </p>

          <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
            {copy.docsCards.map(
              (card: {
                title: string;
                body: string;
                bullets: string[];
              }) => (
                <div
                  key={card.title}
                  className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
                >
                  <h3 className="text-base font-semibold text-gray-900">
                    {card.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-700">
                    {card.body}
                  </p>
                  <ul className="mt-2 list-disc pl-5 text-sm text-gray-800">
                    {card.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              ),
            )}
          </div>

          <p className="mt-4 text-xs text-gray-600">
            {copy.docsNote}{" "}
            {locale === "it" ? (
              <>
                Per l’ingresso in Italia vedi anche{" "}
                <Link
                  href="https://www.viaggiaresicuri.it/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-emerald-800 underline underline-offset-2"
                >
                  Viaggiare Sicuri
                </Link>{" "}
                e le pagine ufficiali del governo UK.
              </>
            ) : (
              <>
                For Italy entry rules, also check{" "}
                <Link
                  href="https://www.viaggiaresicuri.it/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-emerald-800 underline underline-offset-2"
                >
                  Viaggiare Sicuri
                </Link>{" "}
                and the official UK government pages.
              </>
            )}
          </p>
        </div>
      </section>

      {/* PACKING / AMAZON KIT */}
      <section className="mx-auto mt-16 max-w-7xl px-6">
        <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 md:p-8 shadow-sm">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {copy.packingH}
              </h2>
              <p className="mt-1 text-sm text-gray-700">
                {copy.packingIntro}
              </p>
            </div>
          </div>

          <p className="mt-3 text-xs text-emerald-900/90">
            {copy.affNote}
          </p>

          <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
            {copy.kitBlocks.map(
              (item: {
                asin: string;
                url?: string;
                title: string;
                tag: string;
                desc: string;
                bullets: string[];
              }) => (
                <div
                  key={item.asin}
                  className="flex flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
                >
                  <div className="mb-2 flex items-center justify-between gap-2">
                    <h3 className="text-base font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    <span className="inline-flex items-center rounded-full bg-emerald-100 px-2 py-0.5 text-[11px] font-semibold text-emerald-900">
                      {item.tag}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700">
                    {item.desc}
                  </p>
                  <ul className="mt-2 list-disc pl-5 text-sm text-gray-800">
                    {item.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                  <Link
                    href={
                      item.url ||
                      `${AMAZON_BASE_UK}${item.asin}?tag=${AMAZON_TAG}`
                    }
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex justify-center rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
                  >
                    {locale === "it" ? "Vedi su Amazon" : "View on Amazon"}
                  </Link>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* TRANSPORT OPTIONS */}
      <section className="mx-auto mt-16 max-w-7xl px-6">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">
            {copy.flightsH}
          </h2>
          <p className="mt-1 text-sm text-gray-700">
            {copy.flightsIntro}
          </p>

          <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
            {copy.flightsCards.map(
              (card: {
                title: string;
                body: string;
                bullets: string[];
              }) => (
                <div
                  key={card.title}
                  className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
                >
                  <h3 className="text-base font-semibold text-gray-900">
                    {card.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-700">
                    {card.body}
                  </p>
                  <ul className="mt-2 list-disc pl-5 text-sm text-gray-800">
                    {card.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* SERVICE SECTION + STRIPE FORM */}
      <section
        id="travel-check"
        className="mx-auto mt-16 max-w-7xl px-6"
      >
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_.9fr]">
          <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 md:p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900">
              {copy.serviceH}
            </h2>
            <p className="mt-1 text-sm text-gray-700">
              {copy.serviceIntro}
            </p>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-gray-800">
              {copy.serviceBullets.map((b: string) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-emerald-900/90">
              {copy.serviceNote}
            </p>
          </div>

          <FamilyTravelCheckForm locale={locale} />
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto mt-16 max-w-7xl px-6">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">
            {copy.faqH}
          </h2>
          {copy.faqs.map((faq: [string, string]) => {
            const [q, a] = faq;
            return (
              <details
                key={q}
                className="group mt-3 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm"
              >
                <summary className="cursor-pointer select-none text-sm font-semibold text-gray-900">
                  {q}
                </summary>
                <div className="mt-2 text-sm text-gray-700">
                  {a}
                </div>
              </details>
            );
          })}
          <p className="mt-4 text-xs text-gray-600">
            {copy.faqFootnote}
          </p>
        </div>
      </section>

      <div className="h-20" />
    </main>
  );
}
