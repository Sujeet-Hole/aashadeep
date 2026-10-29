// Course catalogue: one shared template drives the course list and detail pages.
//
// HOW TO EXTEND: every field marked optional (duration, mode, level, prerequisites,
// certification, tools, practical, faqs) is hidden on the website until you fill it in,
// so nothing is ever shown as a placeholder fact. See CONTENT_REVIEW.md for the list of
// facts we still need from the institute.

import {
  BarChart3,
  BrainCircuit,
  Briefcase,
  Calculator,
  Code2,
  Database,
  FileSpreadsheet,
  Globe,
  Landmark,
  Megaphone,
  Palette,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { CONTACT } from "@/data/site";

// Course tiles: every image is 1200x1140 (same size and shape) so cards line up everywhere.
import tileDigitalMarketing from "@/assets/courses/tile-digital-marketing.webp";
import tileGraphicDesigning from "@/assets/courses/tile-graphic-designing.webp";
import tileDataAnalytics from "@/assets/courses/tile-data-analytics.webp";
import tileAdvancedExcel from "@/assets/courses/tile-advanced-excel.webp";
import tilePython from "@/assets/courses/tile-python-programming.webp";
import tileTally from "@/assets/courses/tile-tally-prime-gst.webp";
import tileCybersecurity from "@/assets/courses/tile-cybersecurity.webp";
import tileAccounting from "@/assets/courses/tile-accounting-office.webp";
import tileDataScience from "@/assets/courses/tile-data-science.webp";
import tileMachineLearning from "@/assets/courses/tile-machine-learning.webp";
import tileWebDevelopment from "@/assets/courses/tile-web-development.webp";
import tileBusinessAnalysis from "@/assets/courses/tile-business-analysis.webp";

/** Course groupings used by the filter tabs. Only groups that contain courses are shown. */
export type CategoryId = "it" | "design-marketing" | "accounting-office" | "data-business";

export interface CourseCategory {
  id: CategoryId;
  label: string;
  blurb: string;
  icon: LucideIcon;
}

export const CATEGORIES: CourseCategory[] = [
  {
    id: "it",
    label: "IT & Programming",
    blurb: "Programming fundamentals and digital safety",
    icon: Code2,
  },
  {
    id: "design-marketing",
    label: "Design & Marketing",
    blurb: "Creative design and online business growth",
    icon: Palette,
  },
  {
    id: "accounting-office",
    label: "Accounting & Office",
    blurb: "Spreadsheets, accounts and GST",
    icon: Calculator,
  },
  {
    id: "data-business",
    label: "Data & Business",
    blurb: "Data insights and business problem-solving",
    icon: BarChart3,
  },
];

export interface Faq {
  q: string;
  a: string;
}

export interface Course {
  slug: string;
  title: string;
  /** One-line description shown on the course list card. */
  description: string;
  /** Subtitle shown on the detail page hero card. */
  tagline: string;
  /** Design-system classes for the pastel card background + icon color. */
  tint: string;
  accent: string;
  icon: LucideIcon;
  learn: string[];
  who: string[];
  image: string;
  imageAlt: string;
  category: CategoryId;
  /** Shown in the "Featured" row on the Home and Courses pages. */
  featured?: boolean;
  /** Longer description for the course detail page (summarises the topics below). */
  overview: string;
  /** Short skill tags, derived from the topics in `learn`. */
  skills: string[];
  /** What a learner can do after the course, drawn from the topics in `learn`. */
  outcomes: string[];
  /** Software named in the course topics. Hidden when not set. */
  tools?: string[];
  /** Practical work named in the course topics (projects, labs, case studies). Hidden when not set. */
  practical?: string[];
  /** Extra course-specific FAQs, shown before the standard ones. */
  faqs?: Faq[];
  /* ---- Facts we have not been given yet: hidden on the site until filled in ---- */
  duration?: string;
  mode?: string;
  level?: string;
  prerequisites?: string;
  certification?: string;
}

export const COURSES: Course[] = [
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    description: "SEO, Social Media, Google Ads, Meta Ads and more",
    tagline: "Learn how businesses grow online with practical digital marketing skills.",
    tint: "bg-tint-pink",
    accent: "text-accent-pink",
    icon: Megaphone,
    learn: [
      "SEO (Search Engine Optimization)",
      "Social Media Marketing",
      "Google Ads",
      "Meta Ads (Facebook & Instagram)",
      "Content Strategy",
      "Digital Marketing Tools",
      "Real-world Projects",
    ],
    who: [
      "Students",
      "Job Seekers",
      "Business Owners",
      "Working Professionals",
      "Anyone interested in digital marketing",
    ],
    image: tileDigitalMarketing,
    imageAlt:
      "Digital Marketing course illustration: laptop with a megaphone, social media icons and a growth chart",
    category: "design-marketing",
    featured: true,
    overview:
      "This course shows how businesses reach and grow an audience online. You work through search engine optimization, social media marketing, Google Ads and Meta Ads (Facebook and Instagram), and learn how a content strategy ties them together, using common digital marketing tools and real-world projects.",
    skills: [
      "SEO",
      "Social Media Marketing",
      "Google Ads",
      "Meta Ads",
      "Content Strategy",
      "Marketing Tools",
    ],
    outcomes: [
      "Understand how businesses grow online",
      "Work with SEO, social media, Google Ads and Meta Ads",
      "Plan content with a clear content strategy",
    ],
    tools: ["Google Ads", "Meta Ads (Facebook & Instagram)"],
    practical: ["Real-world Projects"],
    faqs: [
      {
        q: "Which advertising platforms does the course cover?",
        a: "The topics include Google Ads and Meta Ads (Facebook & Instagram), alongside SEO and social media marketing.",
      },
    ],
  },
  {
    slug: "graphic-designing",
    title: "Graphic Designing",
    description: "Creative design skills for branding and digital media",
    tagline: "Turn creative ideas into professional designs for print and digital media.",
    tint: "bg-tint-orange",
    accent: "text-accent-orange",
    icon: Palette,
    learn: [
      "Design Principles & Color Theory",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Logo & Branding Design",
      "Social Media Creative Design",
      "Typography & Layout Design",
      "Portfolio-Building Projects",
    ],
    who: [
      "Students",
      "Creative Enthusiasts",
      "Job Seekers",
      "Freelancers",
      "Anyone interested in design",
    ],
    image: tileGraphicDesigning,
    imageAlt:
      "Graphic Designing course illustration: design monitor with a pen tool and colour palette",
    category: "design-marketing",
    overview:
      "Learn the principles behind good design and apply them in professional design software. Topics include color theory, Adobe Photoshop, Adobe Illustrator, logo and branding design, social media creatives, and typography and layout, finishing with portfolio-building projects.",
    skills: [
      "Design Principles",
      "Color Theory",
      "Photoshop",
      "Illustrator",
      "Logo & Branding",
      "Typography & Layout",
    ],
    outcomes: [
      "Turn creative ideas into designs for print and digital media",
      "Design logos and social media creatives",
      "Build a portfolio through course projects",
    ],
    tools: ["Adobe Photoshop", "Adobe Illustrator"],
    practical: ["Portfolio-Building Projects"],
    faqs: [
      {
        q: "Which design software is covered?",
        a: "The course topics include Adobe Photoshop and Adobe Illustrator.",
      },
    ],
  },
  {
    slug: "data-analytics",
    title: "Data Analytics",
    description: "Data analysis, visualization and reporting (Excel, Power BI)",
    tagline: "Turn raw data into clear insights, dashboards and reports.",
    tint: "bg-tint-yellow",
    accent: "text-accent-yellow",
    icon: BarChart3,
    learn: [
      "Introduction to Data Analytics",
      "Data Collection & Cleaning",
      "Excel for Data Analysis",
      "Power BI Dashboards",
      "Data Visualization Techniques",
      "Statistical Basics",
      "Analytical Reports & Case Studies",
    ],
    who: [
      "Students",
      "Working Professionals",
      "Job Seekers",
      "Business Owners",
      "Anyone interested in data",
    ],
    image: tileDataAnalytics,
    imageAlt:
      "Data Analytics course illustration: bar chart with trend line and a magnifying glass",
    category: "data-business",
    overview:
      "Turn raw data into clear insights. The course introduces data analytics, then covers data collection and cleaning, Excel for data analysis, Power BI dashboards, data visualization techniques and statistical basics, finishing with analytical reports and case studies.",
    skills: [
      "Data Cleaning",
      "Excel Analysis",
      "Power BI",
      "Data Visualization",
      "Statistics Basics",
      "Reporting",
    ],
    outcomes: [
      "Collect and clean data for analysis",
      "Build dashboards in Power BI",
      "Present findings in analytical reports",
    ],
    tools: ["Microsoft Excel", "Power BI"],
    practical: ["Analytical Reports & Case Studies"],
    faqs: [
      {
        q: "Which tools are used in Data Analytics?",
        a: "The course topics include Excel for data analysis and Power BI dashboards.",
      },
    ],
  },
  {
    slug: "advanced-excel",
    title: "Advanced Excel",
    description: "Formulas, PivotTables, reporting and dashboards",
    tagline: "Master spreadsheets for reporting, analysis and professional dashboards.",
    tint: "bg-tint-green",
    accent: "text-accent-green",
    icon: FileSpreadsheet,
    learn: [
      "Essential & Advanced Formulas",
      "PivotTables & Pivot Charts",
      "Data Cleaning & Formatting",
      "Conditional Formatting",
      "Charts & Interactive Dashboards",
      "Lookup Functions (VLOOKUP, XLOOKUP)",
      "Macros & Automation Basics",
    ],
    who: [
      "Students",
      "Working Professionals",
      "Accountants & Office Staff",
      "Job Seekers",
      "Anyone who works with data",
    ],
    image: tileAdvancedExcel,
    imageAlt:
      "Advanced Excel course illustration: Excel logo with a spreadsheet and rising bar chart",
    category: "accounting-office",
    featured: true,
    overview:
      "Move beyond everyday spreadsheets. The course covers essential and advanced formulas, PivotTables and Pivot Charts, data cleaning and formatting, conditional formatting, charts and interactive dashboards, lookup functions such as VLOOKUP and XLOOKUP, and the basics of macros and automation.",
    skills: [
      "Formulas",
      "PivotTables",
      "Data Cleaning",
      "Conditional Formatting",
      "Dashboards",
      "Lookup Functions",
      "Macros",
    ],
    outcomes: [
      "Build reports and analysis from raw data",
      "Create charts and interactive dashboards",
      "Use lookup functions such as VLOOKUP and XLOOKUP",
    ],
    tools: ["Microsoft Excel"],
    faqs: [
      {
        q: "Which Excel features are covered?",
        a: "Topics include essential and advanced formulas, PivotTables and Pivot Charts, lookup functions (VLOOKUP, XLOOKUP) and macros and automation basics.",
      },
    ],
  },
  {
    slug: "python-programming",
    title: "Python Programming",
    description: "Programming fundamentals and practical applications",
    tagline: "Start coding with Python, from fundamentals to practical applications.",
    tint: "bg-tint-blue",
    accent: "text-accent-blue",
    icon: Code2,
    learn: [
      "Python Basics & Syntax",
      "Data Types & Variables",
      "Loops & Conditional Statements",
      "Functions & Modules",
      "Object-Oriented Programming",
      "Working with Popular Libraries",
      "Mini Projects & Assignments",
    ],
    who: [
      "Students",
      "Beginners in Coding",
      "Job Seekers",
      "Working Professionals",
      "Anyone interested in programming",
    ],
    image: tilePython,
    imageAlt: "Python Programming course illustration: Python logo beside a code editor",
    category: "it",
    featured: true,
    overview:
      "Start coding with Python. The course moves from basics and syntax through data types, loops, conditional statements, functions and modules to object-oriented programming and popular libraries, with mini projects and assignments to practise each step.",
    skills: [
      "Python Syntax",
      "Data Types",
      "Loops & Conditions",
      "Functions & Modules",
      "OOP",
      "Python Libraries",
    ],
    outcomes: [
      "Write Python programs using core syntax, data types and control flow",
      "Organise code with functions, modules and object-oriented programming",
      "Use popular libraries in mini projects and assignments",
    ],
    tools: ["Python"],
    practical: ["Mini Projects & Assignments"],
    faqs: [
      {
        q: "Is Python Programming suitable for beginners?",
        a: "Yes. Beginners in coding are one of the learner groups this course is designed for. If you are unsure about your starting point, our team can advise you.",
      },
    ],
  },
  {
    slug: "tally-prime-gst",
    title: "Tally Prime + GST",
    description: "Accounting, GST, invoicing and financial reporting",
    tagline: "Handle accounting, GST billing and financial reporting with confidence.",
    tint: "bg-tint-peach",
    accent: "text-accent-peach",
    icon: Calculator,
    learn: [
      "Tally Prime Fundamentals",
      "Accounting & Voucher Entries",
      "GST Concepts & Tax Rates",
      "GST Billing & Invoicing",
      "Inventory Management",
      "Payroll & TDS Basics",
      "Financial Reports & Balance Sheets",
    ],
    who: [
      "Students",
      "Accounting Aspirants",
      "Business Owners",
      "Job Seekers",
      "Anyone interested in accounting",
    ],
    image: tileTally,
    imageAlt:
      "Tally Prime and GST course illustration: Tally on a monitor with a GST sheet, rupee coin and calculator",
    category: "accounting-office",
    overview:
      "Learn to keep accounts and handle GST billing in Tally Prime. The course covers Tally Prime fundamentals, voucher entries, GST concepts and tax rates, GST billing and invoicing, inventory management, payroll and TDS basics, and financial reports such as balance sheets.",
    skills: [
      "Tally Prime",
      "Voucher Entries",
      "GST",
      "Invoicing",
      "Inventory",
      "Payroll & TDS",
      "Financial Reports",
    ],
    outcomes: [
      "Record accounting transactions with voucher entries",
      "Prepare GST bills and invoices",
      "Generate financial reports and balance sheets",
    ],
    tools: ["Tally Prime"],
    faqs: [
      {
        q: "Is GST covered in this course?",
        a: "Yes. GST Concepts & Tax Rates and GST Billing & Invoicing are part of the course topics, alongside payroll and TDS basics.",
      },
    ],
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity",
    description: "Networking, digital safety and security practices",
    tagline: "Learn how to stay safe online and protect systems from threats.",
    tint: "bg-tint-sky",
    accent: "text-accent-sky",
    icon: ShieldCheck,
    learn: [
      "Networking Fundamentals",
      "Types of Cyber Threats",
      "Password & Data Security",
      "Safe Browsing & Email Safety",
      "Firewalls & Security Tools",
      "Cyber Laws & Ethics",
      "Practical Security Labs",
    ],
    who: [
      "Students",
      "Job Seekers",
      "Working Professionals",
      "Internet Users & Businesses",
      "Anyone interested in digital safety",
    ],
    image: tileCybersecurity,
    imageAlt: "Cyber Security course illustration: shield with a padlock and circuit lines",
    category: "it",
    overview:
      "Understand how to stay safe online and protect systems from threats. The course covers networking fundamentals, types of cyber threats, password and data security, safe browsing and email safety, firewalls and security tools, and cyber laws and ethics, with practical security labs.",
    skills: [
      "Networking",
      "Cyber Threats",
      "Password & Data Security",
      "Safe Browsing",
      "Firewalls",
      "Cyber Laws & Ethics",
    ],
    outcomes: [
      "Understand networking fundamentals and common cyber threats",
      "Protect passwords, data and email",
      "Explain cyber laws and ethics",
    ],
    practical: ["Practical Security Labs"],
    faqs: [
      {
        q: "Does the course include hands-on practice?",
        a: "Yes. Practical Security Labs are part of the course topics.",
      },
    ],
  },
  {
    slug: "accounting-office",
    title: "Accounting & Office",
    description: "Accounting and office skills at Ashadeep Computer Institute",
    tagline: "Ask our team for the syllabus, duration and fees.",
    tint: "bg-tint-sky",
    accent: "text-accent-sky",
    icon: Landmark,
    // Syllabus not provided yet: the page hides the topic, skills and curriculum sections
    // until `learn`, `who`, `skills` and `outcomes` are filled in.
    learn: [],
    who: [],
    image: tileAccounting,
    imageAlt:
      "Accounting and Office course illustration: coins, calculator, report and charts with a rupee symbol",
    category: "accounting-office",
    overview:
      "Accounting & Office is available at Ashadeep Computer Institute. Our team will share the detailed syllabus, duration, batch timings and fees when you enquire.",
    skills: [],
    outcomes: [],
  },
  {
    slug: "data-science",
    title: "Data Science",
    description: "Data Science training at Ashadeep Computer Institute",
    tagline: "Ask our team for the syllabus, duration and fees.",
    tint: "bg-tint-pink",
    accent: "text-accent-pink",
    icon: Database,
    // Syllabus not provided yet: the page hides the topic, skills and curriculum sections
    // until `learn`, `who`, `skills` and `outcomes` are filled in.
    learn: [],
    who: [],
    image: tileDataScience,
    imageAlt: "Data Science course illustration: database, analytics screen and bar chart",
    category: "data-business",
    overview:
      "Data Science is available at Ashadeep Computer Institute. Our team will share the detailed syllabus, duration, batch timings and fees when you enquire.",
    skills: [],
    outcomes: [],
  },
  {
    slug: "machine-learning",
    title: "Machine Learning",
    description: "Machine Learning training at Ashadeep Computer Institute",
    tagline: "Ask our team for the syllabus, duration and fees.",
    tint: "bg-tint-blue",
    accent: "text-accent-blue",
    icon: BrainCircuit,
    // Syllabus not provided yet: the page hides the topic, skills and curriculum sections
    // until `learn`, `who`, `skills` and `outcomes` are filled in.
    learn: [],
    who: [],
    image: tileMachineLearning,
    imageAlt: "Machine Learning course illustration: circuit brain with a laptop showing a chart",
    category: "data-business",
    overview:
      "Machine Learning is available at Ashadeep Computer Institute. Our team will share the detailed syllabus, duration, batch timings and fees when you enquire.",
    skills: [],
    outcomes: [],
  },
  {
    slug: "web-development",
    title: "Web Development",
    description: "Web Development training at Ashadeep Computer Institute",
    tagline: "Ask our team for the syllabus, duration and fees.",
    tint: "bg-tint-orange",
    accent: "text-accent-orange",
    icon: Globe,
    // Syllabus not provided yet: the page hides the topic, skills and curriculum sections
    // until `learn`, `who`, `skills` and `outcomes` are filled in.
    learn: [],
    who: [],
    image: tileWebDevelopment,
    imageAlt:
      "Web Development course illustration: code monitor with HTML, CSS and JavaScript badges",
    category: "it",
    overview:
      "Web Development is available at Ashadeep Computer Institute. Our team will share the detailed syllabus, duration, batch timings and fees when you enquire.",
    skills: [],
    outcomes: [],
  },
  {
    slug: "business-analysis",
    title: "Business Analysis",
    description: "Process analysis, documentation and problem-solving",
    tagline: "Learn to analyse business processes and solve real business problems.",
    tint: "bg-tint-amber",
    accent: "text-accent-amber",
    icon: Briefcase,
    learn: [
      "Introduction to Business Analysis",
      "Requirement Gathering",
      "Process Mapping & Documentation",
      "SWOT & Gap Analysis",
      "Data-Driven Decision Making",
      "Communication & Reporting",
      "Real Business Case Studies",
    ],
    who: [
      "Students",
      "Working Professionals",
      "Job Seekers",
      "Team Leads & Managers",
      "Anyone interested in business problem-solving",
    ],
    image: tileBusinessAnalysis,
    imageAlt:
      "Business Analysis course illustration: clipboard with charts, a light bulb and a pie chart",
    category: "data-business",
    overview:
      "Learn to analyse business processes and solve real business problems. The course covers requirement gathering, process mapping and documentation, SWOT and gap analysis, data-driven decision making, and communication and reporting, with real business case studies.",
    skills: [
      "Requirement Gathering",
      "Process Mapping",
      "Documentation",
      "SWOT & Gap Analysis",
      "Decision Making",
      "Business Communication",
    ],
    outcomes: [
      "Gather and document business requirements",
      "Map processes and run SWOT and gap analysis",
      "Communicate findings through clear reporting",
    ],
    practical: ["Real Business Case Studies"],
    faqs: [
      {
        q: "Are business case studies included?",
        a: "Yes. Real Business Case Studies are part of the course topics.",
      },
    ],
  },
];

export const getCourse = (slug: string) => COURSES.find((c) => c.slug === slug);

export const getCategory = (id: CategoryId) => CATEGORIES.find((c) => c.id === id);

/** Categories that actually contain at least one course, in display order. */
export const CATEGORIES_IN_USE = CATEGORIES.filter((cat) =>
  COURSES.some((c) => c.category === cat.id),
);

export const FEATURED_COURSES = COURSES.filter((c) => c.featured);

/* --------------------------- Derived course content --------------------------- */

export interface CourseModule {
  title: string;
  /** Sub-topics named inside the topic title itself, e.g. "Lookup Functions (VLOOKUP, XLOOKUP)". */
  topics: string[];
}

/** "A & B" titles that read as one idea and must not be split. */
const KEEP_WHOLE = [/essential & advanced/i, /swot & gap/i];

/**
 * Curriculum topics: one per entry in `learn`. Sub-topics are only taken from wording that is
 * already in the title (text in brackets, or "A & B"), so no lessons are invented. Add a real
 * lesson-level syllabus later and it can replace this function.
 */
export function getCourseModules(course: Course): CourseModule[] {
  return course.learn.map((item) => {
    const bracket = item.match(/^(.*?)\s*\((.+)\)\s*$/);
    if (bracket?.[1] && bracket[2]) {
      return {
        title: bracket[1],
        topics: bracket[2]
          .split(/,|&/)
          .map((t) => t.trim())
          .filter(Boolean),
      };
    }
    if (item.includes(" & ") && !KEEP_WHOLE.some((re) => re.test(item))) {
      return { title: item, topics: item.split(" & ").map((t) => t.trim()) };
    }
    return { title: item, topics: [] };
  });
}

const joinList = (items: string[]) =>
  items.length < 2
    ? (items[0] ?? "")
    : `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`;

/**
 * FAQs for one course: its own questions first, then standard ones. Answers only restate
 * course data or point the learner to the team; unknown facts are never guessed.
 */
export function getCourseFaqs(course: Course): Faq[] {
  const { title } = course;
  return [
    ...(course.faqs ?? []),
    ...(course.who.length > 0
      ? [
          {
            q: `Who can join ${title}?`,
            a: `The course is designed for ${joinList(course.who)}.`,
          },
        ]
      : []),
    {
      q: `What are the prerequisites for ${title}?`,
      a:
        course.prerequisites ??
        `Please contact us to confirm any prerequisites for ${title}. Our team will guide you based on your background.`,
    },
    {
      q: "Are practical projects included?",
      a: course.practical?.length
        ? `Yes. The course includes ${joinList(course.practical)}.`
        : `Our teaching is practical and skill-based. Please contact us for details of the hands-on work in ${title}.`,
    },
    {
      q: `How long is ${title}, and what are the fees?`,
      a: course.duration
        ? `${title} runs for ${course.duration}. Please contact us for current fees and batch timings.`
        : `Please contact us for the current duration, batch timings and fees for ${title}.`,
    },
    {
      q: "Is a certificate available?",
      a:
        course.certification ??
        `Ashadeep Computer Institute is an official MKCL partner. Please contact us to confirm the certification that applies to ${title}.`,
    },
    {
      q: "How can I enroll?",
      a: `Send an enquiry using the Enquire Now form, call us on ${CONTACT.phoneDisplay}, or visit us at ${CONTACT.addressShort} (${CONTACT.hours}). Our team will contact you with the course details.`,
    },
  ];
}
