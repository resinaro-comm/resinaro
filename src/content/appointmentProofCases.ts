// src/content/appointmentProofCases.ts

export type AppointmentProofCase = {
  id: string; // e.g. "2025-12-14-manchester-passport-01"
  consulate: "Manchester" | "London" | "Edinburgh" | "Other";
  /**
   * Date of the consulate appointment (not when you took the screenshot)
   * Format: "YYYY-MM-DD"
   */
  date: string;
  image: string; // e.g. "/proof/appointments/2025-12-14-manchester-passport-01.webp"
  alt: {
    en: string;
    it: string;
  };
  caption: {
    en: string;
    it: string;
  };
};

/**
 * IMPORTANT WORKFLOW:
 * 1) Save blurred screenshot into: public/proof/appointments/
 * 2) You can keep your own filenames (PNG/JPG/WebP)
 * 3) Add one object below with matching `date` + `image`
 * 4) Commit & deploy – the gallery component will choose the ones closest to today.
 */

export const appointmentProofCases: AppointmentProofCase[] = [
  // 1 – 29 October 2025 – ID card
  {
    id: "2025-10-29-id-card-01",
    consulate: "Other",
    date: "2025-10-29",
    image:
      "/proof/appointments/29 october 2025 - ID card booked appointment prenot@mi.png",
    alt: {
      en: "ID card appointment booked on Prenot@Mi, 29 October 2025 (details blurred)",
      it: "Appuntamento carta d’identità Prenot@Mi, 29 ottobre 2025 (dettagli oscurati)",
    },
    caption: {
      en: "Real ID card appointment confirmed in the client’s own Prenot@Mi area; all personal data is hidden.",
      it: "Appuntamento carta d’identità reale confermato nell’area Prenot@Mi del cliente; tutti i dati personali sono nascosti.",
    },
  },

  // 2 – 11 November 2025 – passport
  {
    id: "2025-11-11-passport-01",
    consulate: "Other",
    date: "2025-11-11",
    image:
      "/proof/appointments/11 November 2025 - passport appointment booked prenot@mi.png",
    alt: {
      en: "Passport appointment booked on Prenot@Mi, 11 November 2025 (details blurred)",
      it: "Appuntamento passaporto Prenot@Mi, 11 novembre 2025 (dettagli oscurati)",
    },
    caption: {
      en: "Real passport appointment confirmed from a client’s Prenot@Mi account; sensitive details are fully hidden.",
      it: "Appuntamento passaporto reale confermato dall’account Prenot@Mi di un cliente; i dati sensibili sono completamente nascosti.",
    },
  },

  // 3 – 14 November 2025 – passport
  {
    id: "2025-11-14-passport-01",
    consulate: "Other",
    date: "2025-11-14",
    image:
      "/proof/appointments/14 November 2025 - passport appointment booked prenot@mi.png",
    alt: {
      en: "Passport appointment booked on Prenot@Mi, 14 November 2025 (details blurred)",
      it: "Appuntamento passaporto Prenot@Mi, 14 novembre 2025 (dettagli oscurati)",
    },
    caption: {
      en: "Another real passport booking, with the confirmation taken directly from the client’s Prenot@Mi area.",
      it: "Un’altra prenotazione passaporto reale, con conferma presa direttamente dall’area Prenot@Mi del cliente.",
    },
  },

  // 4 – 27 February 2026 – passport (version 1)
  {
    id: "2026-02-27-passport-01",
    consulate: "Other",
    date: "2026-02-27",
    image:
      "/proof/appointments/27 february 2026 - passport appointment prenot@mi booked.png",
    alt: {
      en: "Passport appointment booked on Prenot@Mi, 27 February 2026 (details blurred)",
      it: "Appuntamento passaporto Prenot@Mi, 27 febbraio 2026 (dettagli oscurati)",
    },
    caption: {
      en: "Passport appointment confirmed for late February; real client account with all identifiers removed.",
      it: "Appuntamento passaporto confermato per fine febbraio; account reale del cliente con tutti gli identificativi rimossi.",
    },
  },


  // 6 – 2 March 2026 – passport
  {
    id: "2026-03-02-passport-01",
    consulate: "Other",
    date: "2026-03-02",
    image: "/proof/appointments/2 march 2026 - passport prenot@mi booked.png",
    alt: {
      en: "Passport appointment booked on Prenot@Mi, 2 March 2026 (details blurred)",
      it: "Appuntamento passaporto Prenot@Mi, 2 marzo 2026 (dettagli oscurati)",
    },
    caption: {
      en: "Early March passport slot confirmed in Prenot@Mi; all personal information is hidden.",
      it: "Slot passaporto di inizio marzo confermato su Prenot@Mi; tutte le informazioni personali sono nascoste.",
    },
  },

  // 7 – 6 March 2026 – passport (version 1)
  {
    id: "2026-03-06-passport-01",
    consulate: "Other",
    date: "2026-03-06",
    image:
      "/proof/appointments/6 march 2026 - passport appointment prenot@mi booked.png",
    alt: {
      en: "Passport appointment booked on Prenot@Mi, 6 March 2026 (details blurred)",
      it: "Appuntamento passaporto Prenot@Mi, 6 marzo 2026 (dettagli oscurati)",
    },
    caption: {
      en: "Real March passport appointment example with confirmation visible but fully anonymised.",
      it: "Esempio reale di appuntamento passaporto a marzo con conferma visibile ma completamente anonimizzata.",
    },
  },



  // 9 – 9 March 2026 – passport
  {
    id: "2026-03-09-passport-01",
    consulate: "Other",
    date: "2026-03-09",
    image:
      "/proof/appointments/9 march 2026 - passport appointment prenot@mi booked.png",
    alt: {
      en: "Passport appointment booked on Prenot@Mi, 9 March 2026 (details blurred)",
      it: "Appuntamento passaporto Prenot@Mi, 9 marzo 2026 (dettagli oscurati)",
    },
    caption: {
      en: "Client’s passport appointment confirmed for early March; details blurred for privacy.",
      it: "Appuntamento passaporto del cliente confermato per inizio marzo; dettagli oscurati per privacy.",
    },
  },

  // 10 – 10 March 2026 – passport
  {
    id: "2026-03-10-passport-01",
    consulate: "Other",
    date: "2026-03-10",
    image:
      "/proof/appointments/10 march 2026 - passport appointment prenot@mi booked.png",
    alt: {
      en: "Passport appointment booked on Prenot@Mi, 10 March 2026 (details blurred)",
      it: "Appuntamento passaporto Prenot@Mi, 10 marzo 2026 (dettagli oscurati)",
    },
    caption: {
      en: "Passport appointment example around mid–March, booked inside the client’s own account.",
      it: "Esempio di appuntamento passaporto intorno a metà marzo, prenotato dall’account del cliente.",
    },
  },

  // 11 – 11 March 2026 – passport
  {
    id: "2026-03-11-passport-01",
    consulate: "Other",
    date: "2026-03-11",
    image:
      "/proof/appointments/11 march 2026 - passport appointment prenot@mi booked.png",
    alt: {
      en: "Passport appointment booked on Prenot@Mi, 11 March 2026 (details blurred)",
      it: "Appuntamento passaporto Prenot@Mi, 11 marzo 2026 (dettagli oscurati)",
    },
    caption: {
      en: "Real mid–March passport slot secured via Prenot@Mi; all personal data removed.",
      it: "Slot passaporto reale di metà marzo fissato tramite Prenot@Mi; tutti i dati personali sono rimossi.",
    },
  },

  // 12 – 12 March 2026 – passport
  {
    id: "2026-03-12-passport-01",
    consulate: "Other",
    date: "2026-03-12",
    image:
      "/proof/appointments/12 march 2026 - passport appointment prenot@mi booked.png",
    alt: {
      en: "Passport appointment booked on Prenot@Mi, 12 March 2026 (details blurred)",
      it: "Appuntamento passaporto Prenot@Mi, 12 marzo 2026 (dettagli oscurati)",
    },
    caption: {
      en: "Another booked passport appointment around mid–March, with the confirmation screen blurred.",
      it: "Un altro appuntamento passaporto prenotato a metà marzo, con schermata di conferma oscurata.",
    },
  },

  // 13 – 16 March 2026 – passport
  {
    id: "2026-03-16-passport-01",
    consulate: "Other",
    date: "2026-03-16",
    image:
      "/proof/appointments/16 march 2026 - passport appointment prenot@mi booked.png",
    alt: {
      en: "Passport appointment booked on Prenot@Mi, 16 March 2026 (details blurred)",
      it: "Appuntamento passaporto Prenot@Mi, 16 marzo 2026 (dettagli oscurati)",
    },
    caption: {
      en: "Mid-March passport appointment secured and confirmed in the client’s Prenot@Mi area.",
      it: "Appuntamento passaporto di metà marzo fissato e confermato nell’area Prenot@Mi del cliente.",
    },
  },

  // 14 – 17 March 2026 – passport
  {
    id: "2026-03-17-passport-01",
    consulate: "Other",
    date: "2026-03-17",
    image: "/proof/appointments/17 march 2026 - passport prenot@mi booked.png",
    alt: {
      en: "Passport appointment booked on Prenot@Mi, 17 March 2026 (details blurred)",
      it: "Appuntamento passaporto Prenot@Mi, 17 marzo 2026 (dettagli oscurati)",
    },
    caption: {
      en: "Real passport booking shown on a mid-March date; confirmation details are anonymised.",
      it: "Prenotazione passaporto reale in data di metà marzo; i dettagli di conferma sono anonimizzati.",
    },
  },

  // 15 – 18 March 2026 – passport
  {
    id: "2026-03-18-passport-01",
    consulate: "Other",
    date: "2026-03-18",
    image: "/proof/appointments/18 march 2026 - passport prenot@mi booked.png",
    alt: {
      en: "Passport appointment booked on Prenot@Mi, 18 March 2026 (details blurred)",
      it: "Appuntamento passaporto Prenot@Mi, 18 marzo 2026 (dettagli oscurati)",
    },
    caption: {
      en: "Example of a passport appointment found around the middle of March; all private data hidden.",
      it: "Esempio di appuntamento passaporto trovato a metà marzo; tutti i dati privati sono nascosti.",
    },
  },

  // 16 – 20 March 2026 – passport
  {
    id: "2026-03-20-passport-01",
    consulate: "Other",
    date: "2026-03-20",
    image: "/proof/appointments/20 march 2026 - passport prenot@mi booked.png",
    alt: {
      en: "Passport appointment booked on Prenot@Mi, 20 March 2026 (details blurred)",
      it: "Appuntamento passaporto Prenot@Mi, 20 marzo 2026 (dettagli oscurati)",
    },
    caption: {
      en: "Late March passport appointment slot confirmed; screenshot from the client’s account, anonymised.",
      it: "Slot passaporto di fine marzo confermato; screenshot dall’account del cliente, anonimizzato.",
    },
  },

  // 17 – 23 March 2026 – ID card
  {
    id: "2026-03-23-id-card-01",
    consulate: "Other",
    date: "2026-03-23",
    image:
      "/proof/appointments/23 march 2026 - id card booked appointment prenot@mi.png",
    alt: {
      en: "ID card appointment booked on Prenot@Mi, 23 March 2026 (details blurred)",
      it: "Appuntamento carta d’identità Prenot@Mi, 23 marzo 2026 (dettagli oscurati)",
    },
    caption: {
      en: "Real ID card (CIE) appointment confirmed via Prenot@Mi; all sensitive information removed.",
      it: "Appuntamento reale per carta d’identità (CIE) confermato tramite Prenot@Mi; tutte le informazioni sensibili sono rimosse.",
    },
  },
];
