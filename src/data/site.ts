// Central site content: contact details, navigation, images, gallery and testimonials.
// Photography is generated per-use and bundled locally — no image is reused
// between sections, so every page shows unique visuals.

import {
  Award,
  BadgeCheck,
  HeartHandshake,
  Laptop,
  Target,
  Users,
  type LucideIcon,
} from "lucide-react";
import heroHome from "@/assets/hero-home.jpg";
import aboutClassroom from "@/assets/about-classroom.jpg";
import ctaCelebration from "@/assets/cta-celebration.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";

const unsplash = (id: string, w: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const SITE_NAME = "Ashadeep Computer Institute";
export const TAGLINE = "Learn Today. Build Your Future.";

export const CONTACT = {
  address:
    "Shop No. 06, Hit Niketan Co-operative Housing Society, near Jaoli Bank, Kokan Nagar, Bhandup West, Mumbai, Maharashtra",
  /** Shorter form of `address` for the footer and FAQs. */
  addressShort: "Shop No. 06, Hit Niketan CHS, Kokan Nagar, Bhandup West, Mumbai",
  phoneDisplay: "+91 98765 43210",
  phoneHref: "tel:+919876543210",
  email: "info@ashadeepinstitute.in",
  emailHref: "mailto:info@ashadeepinstitute.in",
  hours: "Mon – Sat: 9:00 AM – 8:00 PM",
  whatsapp: "https://wa.me/919876543210",
  mapEmbed: "https://www.google.com/maps?q=Bhandup+West,+Mumbai,+Maharashtra&z=15&output=embed",
};

/** Route paths used across the site (kept as a union so <Link> type-checks). */
export type AppRoute =
  "/" | "/about" | "/courses" | "/mkcl" | "/gallery" | "/testimonials" | "/contact";

export const NAV_LINKS: { label: string; to: AppRoute }[] = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Courses", to: "/courses" },
  { label: "MKCL", to: "/mkcl" },
  { label: "Gallery", to: "/gallery" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Contact", to: "/contact" },
];

export const IMAGES = {
  /** Teacher guiding a student during a practical session. */
  teaching: gallery2,
  /** Students collaborating around a laptop. */
  collaboration: gallery5,
  /** Certificate ceremony. */
  ceremony: gallery3,
  /** Student working happily at a computer in a bright lab (home hero). */
  hero: heroHome,
  /** Classroom full of students at computers (about page). */
  aboutClassroom,
  /** Students celebrating after certification (footer CTA background). */
  ctaBackground: ctaCelebration,
};

/* ---------------------------------- Gallery --------------------------------- */

export type GalleryCategory = "Classroom" | "Activities" | "Students";

export interface GalleryPhoto {
  src: string;
  alt: string;
  category: GalleryCategory;
}

export const GALLERY_FILTERS = ["All", "Classroom", "Activities", "Students"] as const;

export const GALLERY: GalleryPhoto[] = [
  {
    src: gallery1,
    alt: "Teacher explaining a Python concept at the whiteboard in the Ashadeep computer lab",
    category: "Classroom",
  },
  {
    src: gallery2,
    alt: "Instructor guiding a smiling student during a practical session at her computer",
    category: "Classroom",
  },
  {
    src: gallery3,
    alt: "Students receiving their course completion certificate during a small ceremony",
    category: "Students",
  },
  {
    src: gallery4,
    alt: "Two students practising side by side on computers in the Ashadeep lab",
    category: "Students",
  },
  {
    src: gallery5,
    alt: "Group of students collaborating around a laptop during a workshop activity",
    category: "Activities",
  },
  {
    src: gallery6,
    alt: "Team discussion around a computer screen during a practical training class",
    category: "Activities",
  },
  {
    src: gallery7,
    alt: "Student taking notes in a notebook while following a computer lesson",
    category: "Students",
  },
  {
    src: gallery8,
    alt: "Wide view of the bright modern computer lab with rows of workstations",
    category: "Classroom",
  },
];

/* -------------------------------- Testimonials ------------------------------- */

export interface Testimonial {
  name: string;
  course: string;
  quote: string;
  photo: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Priya Sharma",
    course: "Advanced Excel Student",
    quote:
      "Thanks to Ashadeep Computer Institute, I learned Advanced Excel and it really helped me in my job. The teachers are very supportive and explain everything clearly.",
    photo: unsplash("photo-1494790108377-be9c29b29330", 200),
  },
  {
    name: "Rahul Patil",
    course: "Python Programming Student",
    quote:
      "The Python course was very well structured. Practical examples and hands-on practice helped me understand easily.",
    photo: unsplash("photo-1500648767791-00dcc994a43e", 200),
  },
  {
    name: "Sneha More",
    course: "Digital Marketing Student",
    quote:
      "Friendly environment and knowledgeable teachers. I improved my computer skills and got confidence for interviews.",
    photo: unsplash("photo-1438761681033-6461ffad8d80", 200),
  },
  {
    name: "Amit Gupta",
    course: "Tally Prime + GST Student",
    quote:
      "The Tally Prime course with GST gave me the confidence to handle accounts independently. Great teaching and real practice on live examples.",
    photo: unsplash("photo-1472099645785-5658abf4ff4e", 200),
  },
];

/* ------------------------- Shared "why us" and process ------------------------- */

/** Strengths already stated on the About page, reused on the Home page. */
export const WHY_US: { icon: LucideIcon; label: string }[] = [
  { icon: Award, label: "15 Years of Experience" },
  { icon: BadgeCheck, label: "Official MKCL Partnership" },
  { icon: Users, label: "Expert Teachers and Trainers" },
  { icon: Laptop, label: "Practical Skill-Based Learning" },
  { icon: Target, label: "Career-Oriented Training Programs" },
  { icon: HeartHandshake, label: "Supportive Learning Environment" },
];

/** How a learner gets started, following the site's own enquiry flow. */
export const GETTING_STARTED: { title: string; text: string }[] = [
  { title: "Explore courses", text: "Browse by category and read what each course covers." },
  {
    title: "Send an enquiry",
    text: "Use the enquiry form, call or WhatsApp us, or visit the institute.",
  },
  { title: "Talk to our team", text: "We contact you with the course details." },
  { title: "Start learning", text: "Build practical skills with guidance from our teachers." },
];
