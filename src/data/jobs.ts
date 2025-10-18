// Lightweight typed dataset for Italian-language roles in the UK / remote-UK.
// All roles below were live and accepting applications when compiled.
// Last-checked: 2025-10-17

export type Job = {
  id: string; // slug
  title: string;
  company: string;
  location: string;
  remote?: boolean;
  languageRequirement: string; // keep this human; surfaced on the card
  applyUrl: string;
  source: "Workday" | "Greenhouse" | "Workable" | "SmartRecruiters" | "Other";
  tags?: string[];
};

export const jobs: Job[] = [
  {
    id: "uniqlo-customer-care-italian-london",
    title: "Customer Care Agent — Italian Speaker",
    company: "UNIQLO (Fast Retailing)",
    location: "London (Regent Street), UK",
    languageRequirement: "Fluent Italian required",
    applyUrl:
      "https://fastretailing.wd3.myworkdayjobs.com/headquarters_eu_Uniqlo/job/London-United-Kingdom/Customer-Care-Agent---Italian-Speaker_R00000004160485",
    source: "Workday",
    tags: ["Retail", "Customer Care", "On-site"],
  },
  {
    id: "guidepoint-associate-italian-london",
    title: "Associate, Client Service (Italian/English)",
    company: "Guidepoint",
    location: "London, UK",
    languageRequirement: "Fluent Italian essential",
    applyUrl:
      "https://job-boards.greenhouse.io/guidepoint/jobs/7822520002",
    source: "Greenhouse",
    tags: ["Research", "Client Services", "Entry-Mid"],
  },
  {
    id: "tripadvisor-viator-escalation-italian-oxford",
    title: "Escalation Resolution Associate (Italian speaker)",
    company: "Tripadvisor / Viator",
    location: "Oxford, UK",
    languageRequirement: "Italian required",
    applyUrl:
      "https://job-boards.greenhouse.io/tripadvisor/jobs/7067762",
    source: "Greenhouse",
    tags: ["Travel", "Customer Operations"],
  },
  {
    id: "propharma-medical-info-italian-remote-uk",
    title: "Italian-speaking Medical Information Specialist",
    company: "ProPharma Group",
    location: "Remote (UK)",
    remote: true,
    languageRequirement: "Native/Fluent Italian",
    applyUrl:
      "https://propharmagroup.wd1.myworkdayjobs.com/en-US/ppgcareers/job/United-Kingdom/Italian-speaking-Medical-Information-Specialist---remote_JR7770",
    source: "Workday",
    tags: ["Healthcare", "Pharma", "Remote"],
  },
  {
    id: "scjohnson-supply-chain-analyst-italian-frimley",
    title: "Customer Supply Chain Analyst — Italian Speaker",
    company: "SC Johnson",
    location: "Frimley, Surrey, UK",
    languageRequirement: "Italian required",
    applyUrl:
      "https://scj.wd5.myworkdayjobs.com/External_Career_Site/job/United-Kingdom---Surrey-Frimley/Customer-Supply-Chain-Analyst---Italian-Speaker_31048-1",
    source: "Workday",
    tags: ["FMCG", "Supply Chain"],
  },
  {
    id: "sabre-product-support-italian-richmond",
    title:
      "Product Support Analyst I (French or Italian or Arabic speaker)",
    company: "Sabre",
    location: "Richmond, London, UK",
    languageRequirement: "Italian considered (one of the required languages)",
    applyUrl:
      "https://sabre.wd1.myworkdayjobs.com/en-CA/SabreJobs/job/Product-Support-Analyst-I---French-or-Italian-or-Arabic-speaker_JR106335",
    source: "Workday",
    tags: ["Travel Tech", "Support"],
  },
  {
    id: "hootsuite-implementation-consultant-italian-london",
    title: "Implementation Consultant (German or Italian)",
    company: "Hootsuite / Mindbody",
    location: "London, UK",
    languageRequirement: "Italian (or German) required",
    applyUrl:
      "https://boards.greenhouse.io/hootsuite/jobs/6299066",
    source: "Greenhouse",
    tags: ["SaaS", "Professional Services"],
  },
  {
    id: "flywheel-eccommerce-business-manager-italian-london",
    title:
      "eCommerce Business Manager (French/German/Italian/Spanish)",
    company: "Flywheel Digital",
    location: "London, UK",
    languageRequirement: "Italian acceptable (one of the language options)",
    applyUrl:
      "https://job-boards.greenhouse.io/flywheeldigital/jobs/4681978008",
    source: "Greenhouse",
    tags: ["E-commerce", "Client Services"],
  },
  {
    id: "flywheel-dsp-media-manager-italian",
    title:
      "DSP Media Manager (French/German/Italian/Spanish)",
    company: "Flywheel Digital",
    location: "UK (Hybrid/Remote options)",
    languageRequirement: "Italian acceptable (one of the language options)",
    applyUrl:
      "https://job-boards.greenhouse.io/flywheeldigital/jobs/4794610008",
    source: "Greenhouse",
    tags: ["Advertising", "Programmatic"],
  },
  {
    id: "mindbody-tech-support-italian-uk",
    title: "Technical Support Specialist I — Italian Speaker",
    company: "Mindbody / ClassPass",
    location: "United Kingdom",
    languageRequirement: "Italian required",
    applyUrl:
      "https://boards.greenhouse.io/classpass/jobs/7079002",
    source: "Greenhouse",
    tags: ["SaaS", "Support", "Hybrid"],
  },
  {
    id: "eightcap-sales-account-manager-italian-london",
    title: "Sales Account Manager — Italian",
    company: "Eightcap",
    location: "London, UK",
    languageRequirement: "Native Italian; professional English",
    applyUrl:
      "https://jobs.workable.com/view/vhxBC3zmNxBzcVkYhTm2EA/hybrid-sales-account-manager---italian-in-london-at-eightcap",
    source: "Workable",
    tags: ["Fintech", "Sales"],
  },
  {
    id: "nuvei-sdr-italian-london",
    title: "Sales Development Representative — Italian Speaking",
    company: "Nuvei",
    location: "London, UK (Hybrid)",
    languageRequirement: "Italian required",
    applyUrl:
      "https://jobs.workable.com/view/3Q6Cj5Jn6LXxn8GyraWzNP/hybrid-sales-development-representative---italian-speaking-in-london-at-nuvei",
    source: "Workable",
    tags: ["Payments", "SDR"],
  },
  {
    id: "winnow-csm-italian-spanish-london",
    title:
      "Customer Success Manager (Fluent in Spanish & Italian)",
    company: "Winnow",
    location: "London, UK",
    languageRequirement: "Fluent Italian & Spanish required",
    applyUrl:
      "https://jobs.workable.com/view/wZXE9cgeXYFfPSwXGubYTx/customer-success-manager-%28fluency-in-spanish-and-italian-required%29-in-london-at-winnow",
    source: "Workable",
    tags: ["Sustainability", "CSM"],
  },
  {
    id: "brown-brown-finance-admin-italian-london",
    title: "Italian-speaking Finance Administrator",
    company: "Brown & Brown Europe (BDB Europe - UK Branch)",
    location: "London, UK",
    languageRequirement: "Italian required",
    applyUrl:
      "https://bbinsurance.wd1.myworkdayjobs.com/en-US/Careers_Europe/job/Finance-Administrator_R25_0000002731",
    source: "Workday",
    tags: ["Finance", "Insurance"],
  },
  {
    id: "bosch-car-repair-specialist-italian-liverpool",
    title: "Car Repair Specialist — Italian Speaking",
    company: "Bosch Group",
    location: "Liverpool, UK",
    languageRequirement: "Italian required",
    applyUrl:
      "https://jobs.smartrecruiters.com/oneclick-ui/company/BoschGroup/publication/d1b0e586-f7bf-466c-a43b-6d75c4096800",
    source: "SmartRecruiters",
    tags: ["Automotive", "Technical"],
  },
  {
    id: "pml-technical-support-italian-hatfield",
    title: "Italian/English Technical Support Engineer",
    company: "Perfect Management Ltd",
    location: "Hatfield, Hertfordshire, UK",
    languageRequirement: "Fluent Italian & English",
    applyUrl:
      "https://jobs.smartrecruiters.com/PerfectManagementLimited/743999697762026-italian-english-technical-support",
    source: "SmartRecruiters",
    tags: ["Industrial", "Technical Support"],
  },
  {
    id: "language-empire-italian-interpreters-leeds",
    title: "Italian Interpreters — Freelance (Leeds)",
    company: "Language Empire",
    location: "Leeds, UK",
    languageRequirement: "Native/Fluent Italian",
    applyUrl:
      "https://jobs.workable.com/view/e8cjErVafMfP1hCWyqp18u/italian-interpreters-urgently-required-in-leeds-in-leeds-at-language-empire",
    source: "Workable",
    tags: ["Interpreting", "Freelance"],
  },
  {
    id: "empire-group-remote-interpreters-italian-manchester",
    title: "Italian Telephone/Video Interpreters — Remote (UK)",
    company: "Empire Group (Language Empire)",
    location: "Remote (Manchester listed)",
    remote: true,
    languageRequirement: "Fluent Italian",
    applyUrl:
      "https://apply.workable.com/empire-groupuk/j/CE95DB9988/",
    source: "Workable",
    tags: ["Interpreting", "Remote", "Freelance"],
  },
  {
    id: "empire-group-remote-interpreters-italian-brighton",
    title: "Italian Telephone/Video Interpreters — Remote (UK)",
    company: "Recruitment Empire",
    location: "Remote (Brighton listed)",
    remote: true,
    languageRequirement: "Fluent Italian",
    applyUrl:
      "https://jobs.workable.com/view/vgjNCbCcQFWWoiGpfqhP9k/italian-remote-telephone-video-interpreters-required-brighton-in-brighton-at-recruitment-empire",
    source: "Workable",
    tags: ["Interpreting", "Remote", "Freelance"],
  },
  {
    id: "clinigen-customer-service-italian-burton",
    title: "Customer Service Account Executive — Italian Speaking",
    company: "Clinigen",
    location: "Burton upon Trent, UK (Hybrid)",
    languageRequirement: "Italian required",
    applyUrl:
      "https://jobs.workable.com/view/6T48uYpqe3QPuKmLDBnpJu/hybrid-customer-service-account-executive---italian-speaking-in-burton-upon-trent-at-clinigen",
    source: "Workable",
    tags: ["Healthcare", "Customer Service"],
  },
];
