// Course catalogue: one shared template drives the course list and detail pages.

import {
  BarChart3,
  Briefcase,
  Calculator,
  Code2,
  FileSpreadsheet,
  Megaphone,
  Palette,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

const unsplash = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=80`;

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
    image: unsplash("photo-1460925895917-afdab827c52f"),
    imageAlt: "Laptop screen showing digital marketing analytics and growth charts",
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
    image: unsplash("photo-1561070791-2526d30994b5"),
    imageAlt: "Graphic designer working on creative branding artwork",
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
    image: unsplash("photo-1526379095098-d400fd0bf935"),
    imageAlt: "Python code displayed on a computer screen",
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
    image: unsplash("photo-1551288049-bebda4e38f71"),
    imageAlt: "Spreadsheet dashboards and charts used for reporting",
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
    image: unsplash("photo-1554224155-6722b1e35b0e"),
    imageAlt: "Accounting documents and calculator used for GST and bookkeeping",
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
    image: unsplash("photo-1550751827-4bd374c3f58b"),
    imageAlt: "Cybersecurity concept with digital padlock and network protection",
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
    image: unsplash("photo-1543286386-713bdd548da4"),
    imageAlt: "Charts and graphs on a laptop used for data analysis",
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
    image: unsplash("photo-1454165804606-c3d57bc86b40"),
    imageAlt: "Business analysis workspace with notes, laptop and planning documents",
  },
];

export const getCourse = (slug: string) => COURSES.find((c) => c.slug === slug);
