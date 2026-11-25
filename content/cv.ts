export type Experience = {
  company: string;
  role: string;
  start: string;
  end: string;
  location: string;
  summary?: string;
  highlights: string[];
  stack?: string[];
  url?: string;
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  role: string;
  year: string;
  stack: string[];
  highlights: string[];
  repoUrl?: string;
  liveUrl?: string;
  featured?: boolean;
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export type Education = {
  school: string;
  degree: string;
  year: string;
  note?: string;
  url?: string;
};

export type Talk = {
  title: string;
  context: string;
  description: string;
  href?: string;
};

export type CV = {
  name: string;
  headline: string;
  summary: string;
  location: string;
  availability: string;
  email: string;
  links: { label: string; url: string }[];
  experience: Experience[];
  projects: Project[];
  speaking: Talk[];
  skills: SkillGroup[];
  education: Education[];
  languages: string[];
};

export const site = {
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://gabriel-gonzalez-cv.vercel.app",
  title:
    "Gabriel Nicolás González — Technical Customer Support & Developer Education",
  description:
    "Technical Customer Support and educator with 15 years of experience in software development, helping developers understand and adopt complex technologies in Spanish and English.",
  ogAlt:
    "Gabriel Nicolás González — Technical Customer Support, Developer Education, and Technical Content",
} as const;

export const cv: CV = {
  name: "Gabriel Nicolás González",
  headline:
    "Technical Customer Support · Educator · Technical Content Creator",
  summary:
    "Technical Support and educator with 15 years of experience in software development. I combine a hands-on engineering background with technical writing, teaching, and developer advocacy — helping developers understand and adopt complex, fast-moving technologies in Spanish and English.",
  location: "Argentina · Remote",
  availability: "Open to remote roles",
  email: "gabrielnicolasgonzalez@gmail.com",
  links: [
    {
      label: "LinkedIn",
      url: "https://linkedin.com/in/gabriel-nicolas-gonzalez",
    },
    {
      label: "Email",
      url: "mailto:gabrielnicolasgonzalez@gmail.com",
    },
  ],
  experience: [
    {
      company: "Universidad de Palermo",
      role: "Lead Professor",
      start: "Mar 2024",
      end: "Present",
      location: "Argentina",
      summary:
        "Teaching Web3 and emerging technologies to students from non-technical backgrounds.",
      highlights: [
        "Teach Web3 and emerging technologies to students from a non-technical background.",
        "Design and deliver educational content that translates complex technical concepts into accessible explanations.",
        "Lead practical projects focused on technology, digital products, and emerging business models.",
        "Facilitate discussions and guide students through the evaluation and application of new technologies.",
        "Adapt technical concepts to audiences with different levels of technical knowledge.",
      ],
      stack: ["Web3", "Curriculum design", "Public speaking"],
    },
    {
      company: "Protofire",
      role: "Web3 Software Engineer",
      start: "Jan 2021",
      end: "Dec 2025",
      location: "Remote",
      summary:
        "Decentralized applications and developer-focused Web3 infrastructure across Ethereum and Polkadot.",
      highlights: [
        "Worked on decentralized applications and developer-focused Web3 infrastructure across Ethereum and Polkadot ecosystems.",
        "Developed and contributed to technical tools and open-source initiatives for blockchain developers.",
        "Built subgraphs for decentralized protocols using The Graph ecosystem.",
        "Analyzed smart contracts and protocol logic to understand the underlying business domain.",
        "Designed GraphQL schemas representing protocol-specific data models.",
        "Collaborated with engineers and stakeholders across multiple projects and technologies.",
      ],
      stack: ["GraphQL", "The Graph", "Ethereum", "Polkadot"],
    },
    {
      company: "The Graph Advocates",
      role: "Technical Teacher",
      start: "Jun 2022",
      end: "Dec 2025",
      location: "Global community",
      summary:
        "Developer education inside a global, community-driven Web3 ecosystem.",
      highlights: [
        "Selected as a Technical Teacher within The Graph Advocates community.",
        "Educated developers and community members about Web3 technologies and The Graph ecosystem.",
        "Created and delivered technical explanations aimed at helping people participate in the ecosystem.",
        "Contributed to a global, community-driven developer ecosystem.",
      ],
      stack: ["The Graph", "Developer education", "Community"],
    },
    {
      company: "Polkadot en Español",
      role: "Technical Writer",
      start: "Jun 2024",
      end: "Dec 2024",
      location: "Remote",
      summary:
        "Spanish-language technical content for the Polkadot ecosystem.",
      highlights: [
        "Created and curated technical content for the official Polkadot en Español X account.",
        "Translated complex technical concepts into accessible Spanish-language content.",
        "Collaborated with Marketing and DeFi specialists to ensure technical accuracy and audience relevance.",
        "Participated in weekly X Spaces discussing technical developments and ecosystem news.",
        "Represented the first Polkadot en Español cohort as a speaker at LABITCONF.",
      ],
      stack: ["Technical writing", "Polkadot", "Community"],
    },
    {
      company: "Cambá — Leyline",
      role: "Full Stack Developer",
      start: "Aug 2020",
      end: "Dec 2020",
      location: "Argentina",
      summary:
        "Product engineering for an administration console and its backend services.",
      highlights: [
        "Developed Firebase Cloud Functions and GraphQL queries and mutations.",
        "Built and maintained an administration console using React and CoreUI.",
        "Worked on authentication, authorization, permissions, and administrative workflows.",
        "Collaborated directly with product requirements and technical implementation.",
      ],
      stack: ["React", "Firebase", "GraphQL", "CoreUI"],
    },
  ],
  projects: [
    {
      slug: "web3-developer-infrastructure",
      name: "Web3 Developer Infrastructure",
      tagline:
        "Tools and data models that make decentralized protocols easier to build on.",
      description:
        "Hands-on engineering across Ethereum and Polkadot, with a focus on developer tooling, subgraphs, and protocol-specific data models.",
      role: "Web3 Software Engineer · Protofire",
      year: "2021–2025",
      stack: ["GraphQL", "The Graph", "Ethereum", "Polkadot"],
      highlights: [
        "Built subgraphs for decentralized protocols in The Graph ecosystem.",
        "Designed GraphQL schemas for protocol-specific data models.",
        "Analyzed smart contracts and protocol logic to understand the business domain.",
      ],
      featured: true,
    },
    {
      slug: "polkadot-en-espanol",
      name: "Polkadot en Español",
      tagline:
        "Technical content that makes a fast-moving ecosystem accessible in Spanish.",
      description:
        "Created and curated technical content for the official Polkadot en Español X account, translating complex concepts for a Spanish-speaking developer audience.",
      role: "Technical Writer",
      year: "2024",
      stack: ["Technical writing", "Polkadot", "Community"],
      highlights: [
        "Curated technical content for the official Polkadot en Español account.",
        "Collaborated with Marketing and DeFi specialists on accuracy and relevance.",
        "Represented the first cohort as a speaker at LABITCONF.",
      ],
      liveUrl: "https://x.com/PolkadotEspanol",
      featured: true,
    },
    {
      slug: "the-graph-advocates",
      name: "The Graph Advocates",
      tagline:
        "Developer education inside a global, community-driven ecosystem.",
      description:
        "Selected as a Technical Teacher, creating and delivering explanations that help developers participate confidently in The Graph ecosystem.",
      role: "Technical Teacher",
      year: "2022–2025",
      stack: ["The Graph", "Developer education", "Community"],
      highlights: [
        "Created technical explanations for developers and community members.",
        "Educated participants about Web3 and The Graph technologies.",
        "Contributed to a global, community-driven developer ecosystem.",
      ],
    },
    {
      slug: "leyline-admin-console",
      name: "Leyline Admin Console",
      tagline:
        "A practical admin experience backed by Firebase and GraphQL.",
      description:
        "Full-stack work on an administration console: cloud functions, GraphQL operations, authentication, permissions, and day-to-day workflows.",
      role: "Full Stack Developer · Cambá",
      year: "2020",
      stack: ["React", "Firebase", "GraphQL", "CoreUI"],
      highlights: [
        "Developed Firebase Cloud Functions and GraphQL queries and mutations.",
        "Built and maintained an administration console with React and CoreUI.",
        "Implemented authentication, authorization, permissions, and admin workflows.",
      ],
    },
  ],
  speaking: [
    {
      title: "LABITCONF",
      context: "Technical speaker",
      description:
        "Represented the first Polkadot en Español cohort with a technical talk at LABITCONF.",
      href: "https://www.youtube.com/watch?v=1JqIa3eLsis",
    },
    {
      title: "Sub0 Asia",
      context: "Technical speaker",
      description:
        "Spoke at Sub0 Asia about the Polkadot developer ecosystem and emerging technology.",
      href: "https://www.youtube.com/watch?v=rDADX1NJvDs",
    },
    {
      title: "Panama Blockchain Week",
      context: "Polkadot workshops",
      description:
        "Facilitated hands-on Polkadot workshops for developers and community members.",
      href: "https://lnkd.in/p/dksabX4k",
    },
    {
      title: "Polkadot en Español X Spaces",
      context: "Weekly technical discussions",
      description:
        "Joined weekly conversations about technical developments and ecosystem news.",
      href: "https://x.com/PolkadotEspanol",
    },
    {
      title: "Web3 technical education",
      context: "Community workshops",
      description:
        "Ran Web3 technical education and community workshops for developers.",
      href: "https://lnkd.in/p/dnVdYMmd",
    },
  ],
  skills: [
    {
      label: "Engineering",
      items: ["JavaScript", "React", "GraphQL", "Firebase Cloud Functions", "CoreUI"],
    },
    {
      label: "Web3",
      items: ["Ethereum", "Polkadot", "The Graph", "Subgraphs", "Smart contract analysis"],
    },
    {
      label: "Support & enablement",
      items: [
        "Developer support",
        "Technical problem-solving",
        "Documentation",
        "Community support",
      ],
    },
    {
      label: "Education & content",
      items: [
        "Technical writing",
        "Curriculum design",
        "Workshops",
        "Public speaking",
        "Community engagement",
      ],
    },
    {
      label: "Collaboration",
      items: [
        "Cross-functional collaboration",
        "Technical documentation",
        "Developer advocacy",
        "Stakeholder communication",
      ],
    },
    {
      label: "Languages",
      items: [
        "Spanish — native",
        "English — full professional",
        "Bilingual technical content",
        "Technical translation",
      ],
    },
  ],
  education: [
    {
      school: "Polkadot Blockchain Academy",
      degree: "Graduate — Blockchain",
      year: "2023",
      note: "Intensive program on blockchain fundamentals, economics, and Polkadot.",
    },
    {
      school: "Universidad Nacional de Quilmes",
      degree: "Software Developer",
      year: "2011–2015",
      note: "Software development foundations and practical engineering.",
    },
  ],
  languages: ["Spanish (native)", "English (full professional)"],
};
