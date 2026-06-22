// ─── TULSA CAREER PATH — Data Layer ───────────────────────────────────────
// Quiz-first flow. CareerOneStop lives in the escape hatch (app.js) and
// Resources section — NOT in nextSteps arrays.

// ─── CAREER TRACKS ─────────────────────────────────────────────────────────
const TRACKS = {
  datacenter: {
    id: 'datacenter',
    icon: '🖥️',
    label: 'Data Center Operations',
    tagline: 'The physical backbone of AI & cloud — Meta & Google are building in Tulsa now',
    demand: 'High — Meta (East Tulsa) & Google (Pryor/Stillwater) actively hiring',
    salaryEntry: '$52,900 – $64,100',
    salaryMid: '$64,100 – $76,300',
    salarySenior: '$76,300+',
    timeToJob: '3–6 months',
    description: 'Oklahoma is adding massive data center capacity. Meta broke ground on East Tulsa in April 2026. Google has facilities in Pryor and Stillwater. These roles do not require a four-year degree.',
    roles: ['Data Center Technician I/II', 'Critical Facilities Technician', 'Data Center Operations Manager', 'Commissioning Agent'],
    certs: ['CompTIA A+', 'CompTIA Network+', 'CDCP (Certified Data Center Professional)', 'OSHA 10'],
    localPrograms: [
      {
        name: "America's Workforce Academy (Meta/AWA)",
        provider: 'Meta',
        duration: '4 weeks intensive',
        cost: 'Free — tuition, travel, housing & daily stipend covered',
        credential: 'NCCER Certification + U.S. Workforce Certificate',
        fit: 'Guaranteed job offer at completion. No experience required. Career changers, veterans, new entrants.',
        url: 'https://www.meta.com/actions/americas-workforce-academy/',
        highlight: true
      },
      {
        name: 'IT Networking Systems',
        provider: 'Tulsa Tech',
        duration: '525–1,050 hours',
        cost: '~$4/clock hour',
        credential: 'Certificate of Completion + CompTIA prep',
        fit: 'Hands-on lab training. Local, structured, employer-connected.',
        url: 'https://tulsatech.edu',
        highlight: false
      }
    ],
    nextSteps: [
      { text: "Apply to America's Workforce Academy — free training, guaranteed job offer", url: 'https://www.meta.com/actions/americas-workforce-academy/' },
      { text: 'Enroll in Tulsa Tech IT Networking Systems program', url: 'https://tulsatech.edu' },
      { text: 'Earn your CompTIA A+ certification (foundational credential)', url: 'https://www.comptia.org/certifications/a' },
      { text: 'Register with Tech Partners LLC as a candidate', url: 'https://techpartnersllc.com' }
    ],
    adjacent: [
      { role: 'Network Engineer', salary: '$65,000–$95,000' },
      { role: 'Critical Facilities Manager', salary: '$90,000–$130,000' }
    ]
  },

  infrastructure: {
    id: 'infrastructure',
    icon: '🌐',
    label: 'IT Infrastructure',
    tagline: 'Networks, systems & cloud — the engine of every organization',
    demand: 'Steady demand across enterprise, healthcare & energy in Tulsa',
    salaryEntry: '$55,000 – $70,000',
    salaryMid: '$70,000 – $95,000',
    salarySenior: '$95,000–$130,000+',
    timeToJob: '3–9 months',
    description: 'IT Infrastructure roles are in demand across every industry in Oklahoma — energy, healthcare, finance, and enterprise. Strong pathways at Tulsa Tech and through Google Career Certificates.',
    roles: ['Network Engineer / Administrator', 'Systems Administrator', 'Cloud Engineer (Azure/AWS/GCP)', 'DevOps / Platform Engineer', 'IT Support Technician'],
    certs: ['CompTIA A+', 'CompTIA Network+', 'Cisco CCNA', 'Microsoft AZ-104', 'AWS Cloud Practitioner'],
    localPrograms: [
      {
        name: 'Enterprise Network Technologies',
        provider: 'Tulsa Tech',
        duration: '1,050 hours (~27 weeks)',
        cost: '~$4/clock hour',
        credential: 'Certificate; Cisco & CompTIA exam prep',
        fit: 'Local, structured, hands-on. Best for full-time students or day-program learners.',
        url: 'https://tulsatech.edu',
        highlight: true
      },
      {
        name: 'Google Career Certificates — IT Support',
        provider: 'Google / Coursera',
        duration: '3–6 months, self-paced',
        cost: '~$49/month; free via OSU/OU partnership',
        credential: 'Google Career Certificate (employer-recognized)',
        fit: 'Flexible, self-paced. OSU and OU students get free access.',
        url: 'https://grow.google/certificates/',
        highlight: false
      },
      {
        name: 'UpskillOK — Computer Networking Microcredential',
        provider: 'Oklahoma State Regents / Colleges Statewide',
        duration: 'Weeks to months',
        cost: 'Low/no cost',
        credential: 'Stackable digital badge',
        fit: 'Best for working professionals adding credentials at their own pace.',
        url: 'https://upskillok.org',
        highlight: false
      }
    ],
    nextSteps: [
      { text: 'Enroll in Tulsa Tech Enterprise Network Technologies program', url: 'https://tulsatech.edu' },
      { text: 'Start the free Google IT Support Certificate (Coursera)', url: 'https://grow.google/certificates/' },
      { text: 'Explore UpskillOK networking microcredentials (stackable, self-paced)', url: 'https://upskillok.org' },
      { text: 'Register with Tech Partners LLC as a candidate', url: 'https://techpartnersllc.com' }
    ],
    adjacent: [
      { role: 'Cloud Security Engineer', salary: '$115,000–$160,000' },
      { role: 'DevOps Engineer', salary: '$100,000–$145,000' }
    ]
  },

  cybersecurity: {
    id: 'cybersecurity',
    icon: '🔒',
    label: 'Cybersecurity',
    tagline: "One of Oklahoma's highest-demand fields — and Tulsa has a free fast-track",
    demand: '27% projected growth; TCC Cyber Skills Center is a nationally recognized model',
    salaryEntry: '$65,000 – $80,000',
    salaryMid: '$90,000 – $110,000',
    salarySenior: '$125,000–$154,000+',
    timeToJob: '6–9 months',
    description: 'The TCC Cyber Skills Center — funded by Google and the State of Oklahoma — is a 24-week, no-cost evening program. Tulsa Innovation Labs co-funds it and connects graduates to local employers.',
    roles: ['SOC Analyst', 'Information Security Analyst', 'Cybersecurity Engineer', 'Penetration Tester', 'GRC Analyst'],
    certs: ['CompTIA Security+', 'Google Cybersecurity Certificate', 'CompTIA Network+', 'CEH'],
    localPrograms: [
      {
        name: 'TCC Cyber Skills Center — Cybersecurity Track',
        provider: 'Tulsa Community College',
        duration: '24 weeks, part-time evenings',
        cost: 'Free (Google + State of Oklahoma funded)',
        credential: 'TCC Certificate + Google Cybersecurity Certificate',
        fit: 'No-cost, evening cohorts. Career changers and working adults. Job placement via SkillStorm.',
        url: 'https://www.tulsacc.edu/academics/workforce-continuing-education/workforce-trainings/cyber-skills-center',
        highlight: true
      },
      {
        name: 'Cyber Security / Forensics',
        provider: 'Tulsa Tech',
        duration: '1,050 hours (~27 weeks)',
        cost: '~$4/clock hour',
        credential: 'Certificate + CompTIA Security+ prep',
        fit: 'Full-time, hands-on lab training. Local employers connected.',
        url: 'https://tulsatech.edu',
        highlight: false
      },
      {
        name: 'B.T. in IT — Cybersecurity',
        provider: 'OSUIT',
        duration: '2–4 years',
        cost: '~$6,000–$12,000/yr; financial aid available',
        credential: "Bachelor's of Technology — highest career ceiling",
        fit: "For those building a long-term senior career in cyber.",
        url: 'https://osuit.edu',
        highlight: false
      }
    ],
    nextSteps: [
      { text: 'Apply to TCC Cyber Skills Center — free, evenings, Tulsa', url: 'https://www.tulsacc.edu/academics/workforce-continuing-education/workforce-trainings/cyber-skills-center' },
      { text: 'Explore Tulsa Innovation Labs workforce programs', url: 'https://www.tulsainnovationlabs.com' },
      { text: 'Earn CompTIA Security+ — the industry entry-level standard', url: 'https://www.comptia.org/certifications/security' },
      { text: 'Register with Tech Partners LLC as a candidate', url: 'https://techpartnersllc.com' }
    ],
    adjacent: [
      { role: 'Cloud Security Engineer', salary: '$115,000–$160,000' },
      { role: 'GRC Analyst', salary: '$80,000–$110,000' }
    ]
  },

  trades: {
    id: 'trades',
    icon: '⚡',
    label: 'Skilled Trades',
    tagline: "Earn while you learn — Oklahoma's construction boom needs you now",
    demand: "Google expanding electrician pipeline 135% by 2030; Meta's AWA launched June 2026",
    salaryEntry: '$55,000–$75,000 (journeyman start)',
    salaryMid: '$75,000–$95,000',
    salarySenior: '$108,000+',
    timeToJob: 'Day 1 (earn while you learn)',
    description: "Meta's East Tulsa data center and Google's Pryor/Stillwater facilities are creating immediate demand for tradespeople. Federally registered apprenticeships mean you earn from day one — no tuition.",
    roles: ['Journeyman Electrician', 'HVAC / Mechanical Technician', 'Low-Voltage / Cabling Technician', 'Plumber / Pipefitter', 'Critical Facilities Technician'],
    certs: ['DOL Journey-Level Electrician', 'NCCER Certification', 'OSHA 10/30'],
    localPrograms: [
      {
        name: "America's Workforce Academy (Meta/AWA)",
        provider: 'Meta',
        duration: '4 weeks intensive',
        cost: 'Free — tuition, travel, housing & daily stipend',
        credential: 'NCCER Certification + guaranteed job offer',
        fit: 'Zero cost, zero experience required. Fastest path into trades with a guaranteed offer.',
        url: 'https://www.meta.com/actions/americas-workforce-academy/',
        highlight: true
      },
      {
        name: 'Inside Wireman Apprenticeship (IBEW/NECA JATC)',
        provider: 'Electrical Training Alliance / Tulsa JATC',
        duration: '4–5 years (earn from day 1 at $17.71+/hr)',
        cost: '~$650/year books; no tuition',
        credential: 'DOL Registered Journey-Level Electrician',
        fit: 'The gold standard. Federally registered, union-backed, earn while you learn.',
        url: 'https://www.electricaltrainingalliance.org',
        highlight: false
      },
      {
        name: 'Construction Electrician (CE) Program',
        provider: 'Electrical Training Alliance',
        duration: '8 levels, evenings',
        cost: 'No aptitude test required; earn from day 1',
        credential: 'Journey-Level Electrician Certification',
        fit: 'Widest entry point — no HS diploma requirement, no experience needed.',
        url: 'https://www.electricaltrainingalliance.org',
        highlight: false
      }
    ],
    nextSteps: [
      { text: "Apply to America's Workforce Academy — free, stipend, guaranteed job offer", url: 'https://www.meta.com/actions/americas-workforce-academy/' },
      { text: 'Apply to the Tulsa JATC Inside Wireman Apprenticeship', url: 'https://www.electricaltrainingalliance.org' },
      { text: 'Get your OSHA 10 card — required on most job sites', url: 'https://www.osha.gov/training/outreach' },
      { text: 'Register with Tech Partners LLC as a candidate', url: 'https://techpartnersllc.com' }
    ],
    adjacent: [
      { role: 'Critical Facilities Engineer', salary: '$90,000–$130,000' },
      { role: 'Electrical Contractor / Foreman', salary: '$85,000–$120,000' }
    ]
  },

  aidata: {
    id: 'aidata',
    icon: '📊',
    label: 'AI & Data Analytics',
    tagline: "The fastest-growing skill set in Oklahoma's economy",
    demand: '$150K in state AI microcredential grants awarded 2025; Google/OSU/OU partnerships active',
    salaryEntry: '$55,000 – $70,000',
    salaryMid: '$80,000 – $105,000',
    salarySenior: '$110,000–$140,000+',
    timeToJob: '6–9 months',
    description: "AI and data is the fastest-growing category across every industry. The TCC Cyber Skills Center has dedicated AI and Data Analytics tracks — both free and evenings. Oklahoma State Regents awarded $150K in AI micro-credential grants in 2025.",
    roles: ['Data Analyst', 'Data Engineer', 'ML Engineer', 'AI / Automation Specialist', 'BI Analyst'],
    certs: ['Google Data Analytics Certificate', 'Google AI Essentials', 'Microsoft Power BI', 'AWS ML Specialty'],
    localPrograms: [
      {
        name: 'TCC Cyber Skills Center — Data Analytics & AI Tracks',
        provider: 'Tulsa Community College',
        duration: '24 weeks, part-time evenings',
        cost: 'Free (Tulsa metro residents)',
        credential: 'TCC Certificate + Google Data Analytics or AI Certificate',
        fit: 'No-cost evening program. Two tracks: Data Analytics and Artificial Intelligence.',
        url: 'https://www.tulsacc.edu/academics/workforce-continuing-education/workforce-trainings/cyber-skills-center',
        highlight: true
      },
      {
        name: 'UpskillOK — AI Microcredentials',
        provider: 'Oklahoma State Regents / Multiple Colleges',
        duration: 'Weeks to months',
        cost: 'Low/no cost; $150K in state grants 2025',
        credential: 'Stackable digital badges',
        fit: 'For working professionals adding AI literacy at their own pace.',
        url: 'https://upskillok.org',
        highlight: false
      },
      {
        name: 'Google Career Certificates — Data Analytics',
        provider: 'Google / Coursera',
        duration: '3–6 months, self-paced',
        cost: '~$49/month; free via OSU/OU',
        credential: 'Google Career Certificate',
        fit: 'Flexible, self-paced. Free for OSU and OU students.',
        url: 'https://grow.google/certificates/',
        highlight: false
      }
    ],
    nextSteps: [
      { text: 'Apply to TCC Cyber Skills Center — AI or Data Analytics track (free)', url: 'https://www.tulsacc.edu/academics/workforce-continuing-education/workforce-trainings/cyber-skills-center' },
      { text: 'Search UpskillOK for AI microcredentials (stackable, statewide)', url: 'https://upskillok.org' },
      { text: 'Start the Google Data Analytics Certificate (free via OSU/OU)', url: 'https://grow.google/certificates/' },
      { text: 'Register with Tech Partners LLC as a candidate', url: 'https://techpartnersllc.com' }
    ],
    adjacent: [
      { role: 'Data Engineer', salary: '$95,000–$130,000' },
      { role: 'ML Engineer', salary: '$110,000–$155,000' }
    ]
  },

  software: {
    id: 'software',
    icon: '💻',
    label: 'Software Development',
    tagline: 'Build apps, websites & platforms — remote-friendly, high ceiling',
    demand: 'Remote-friendly; Atlas School graduates hired nationally & locally',
    salaryEntry: '$65,000 – $85,000',
    salaryMid: '$90,000 – $115,000',
    salarySenior: '$120,000–$160,000+',
    timeToJob: '12–20 months',
    description: "Atlas School (formerly Holberton Tulsa) is downtown Tulsa's flagship software engineering program — 20 months, project-based, no payment until you're hired. Graduates land roles nationally.",
    roles: ['Software Engineer / Full-Stack Developer', 'Frontend Developer', 'Backend Developer', 'Mobile Developer', 'DevOps / SRE'],
    certs: ['AWS Certified Developer', 'Google Associate Cloud Engineer', 'MongoDB Developer'],
    localPrograms: [
      {
        name: 'Atlas School — Software Engineering',
        provider: 'Atlas School (formerly Holberton Tulsa)',
        duration: '20 months',
        cost: 'Income share: 10% of income for 3.5 years after employment. No payment until hired.',
        credential: 'Atlas School Diploma + specialization (ML, Full-Stack, or Linux/Algorithms)',
        fit: 'The deepest local program. No upfront cost. Project-based, peer-learning. 18+ with HS diploma.',
        url: 'https://atlasschool.com',
        highlight: true
      },
      {
        name: 'Google Career Certificates — IT & Development',
        provider: 'Google / Coursera',
        duration: '3–6 months, self-paced',
        cost: '~$49/month; free via OSU/OU',
        credential: 'Google Career Certificate',
        fit: 'Use to preview the field or build a foundation before a deeper program.',
        url: 'https://grow.google/certificates/',
        highlight: false
      }
    ],
    nextSteps: [
      { text: 'Apply to Atlas School — no payment until you are employed', url: 'https://atlasschool.com' },
      { text: 'Preview the field with Google Career Certificates (free via OSU/OU)', url: 'https://grow.google/certificates/' },
      { text: 'Explore Tulsa Innovation Labs tech community and events', url: 'https://www.tulsainnovationlabs.com' },
      { text: 'Register with Tech Partners LLC as a candidate', url: 'https://techpartnersllc.com' }
    ],
    adjacent: [
      { role: 'DevOps / SRE Engineer', salary: '$100,000–$145,000' },
      { role: 'ML Engineer', salary: '$110,000–$155,000' }
    ]
  }
};

// ─── DECISION LOGIC ────────────────────────────────────────────────────────
function getRecommendedTrack(answers) {
  const { interest } = answers;
  const map = {
    datacenter: 'datacenter',
    cyber: 'cybersecurity',
    aidata: 'aidata',
    software: 'software',
    trades: 'trades',
    infrastructure: 'infrastructure',
    unsure: 'cybersecurity' // highest demand + best local free program
  };
  return map[interest] || 'cybersecurity';
}
