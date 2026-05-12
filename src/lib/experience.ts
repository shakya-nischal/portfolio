export type ExperienceRole = {
  title: string;
  dates: string;
};

export type ExperienceEntry = {
  company: string;
  companyUrl?: string;
  location?: string;
  period: string; // top-level date range for the entry
  roles: ExperienceRole[]; // multiple roles if there was a progression
  description: string;
  stack: string[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "Javra Software",
    companyUrl: "https://www.javra.com",
    location: "Lalitpur, Nepal",
    period: "2022 — 2025",
    roles: [
      { title: "Software Engineer", dates: "May 2024 — Sep 2025" },
      { title: "Junior Software Engineer", dates: "Aug 2022 — Apr 2024" },
      { title: "PHP Intern", dates: "May 2022 — Jul 2022" },
    ],
    description:
      "Led a multi-month Pimcore 6.9 → 10.5 migration for a major international eCommerce platform — Pimcore served as the central PIM data hub feeding a Magento 2 storefront. Refactored API contracts between systems, reduced post-migration indexing time significantly, and produced comprehensive technical documentation for the incoming team. Also architected a corporate WordPress site with a custom bi-directional HRM integration, and took over an enterprise WordPress learning platform — replacing bloated third-party plugins with leaner custom-built equivalents.",
    stack: [
      "PHP",
      "Pimcore",
      "Magento 2",
      "WordPress",
      "Twig",
      "Symfony",
      "MySQL",
      "Docker",
      "REST APIs",
    ],
  },
  {
    company: "Freelance — HiveCraft, Kranita Infotech, DevInfo Express",
    period: "2024 — 2025",
    roles: [
      {
        title: "Software Engineer (Contract)",
        dates: "Alongside Javra Software",
      },
    ],
    description:
      "Delivered diverse client engagements: custom Magento 2 plugins including payment gateway integrations (HiveCraft), a full React Native employee management mobile app (Kranita Infotech), and WordPress builds with DoorDash API integrations and Core Web Vitals optimisation (DevInfo Express). Acted as direct point of contact across clients, translating business needs into shipped features.",
    stack: [
      "React Native",
      "Magento 2",
      "Laravel",
      "WordPress",
      "Shopify",
      "PHP",
      "JavaScript",
    ],
  },
  {
    company: "APTECH Computer Education",
    location: "Nepal",
    period: "2019 — 2021",
    roles: [{ title: "Coding Tutor", dates: "2019 — 2021" }],
    description:
      "Taught HTML, CSS, JavaScript, jQuery, Python, Data Structures, and productivity tools to students of varied backgrounds. Simplified complex programming concepts through project-based learning. Consistently received strong feedback for clarity and patience.",
    stack: ["JavaScript", "Python", "HTML", "CSS", "jQuery", "Data Structures"],
  },
];
