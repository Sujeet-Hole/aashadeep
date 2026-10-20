// Central site content: contact details, navigation, images, gallery and testimonials.

const unsplash = (id: string, w: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const SITE_NAME = "Ashadeep Computer Institute";
export const TAGLINE = "Learn Today. Build Your Future.";

export const CONTACT = {
  address:
    "Shop No. 06, Hit Niketan Co-operative Housing Society, near Jaoli Bank, Kokan Nagar, Bhandup West, Mumbai, Maharashtra",
  phoneDisplay: "+91 98765 43210",
  phoneHref: "tel:+919876543210",
  email: "info@ashadeepinstitute.in",
  emailHref: "mailto:info@ashadeepinstitute.in",
  hours: "Mon – Sat: 9:00 AM – 8:00 PM",
  whatsapp: "https://wa.me/919876543210",
  mapEmbed:
    "https://www.google.com/maps?q=Bhandup+West,+Mumbai,+Maharashtra&z=15&output=embed",
};

/** Route paths used across the site (kept as a union so <Link> type-checks). */
export type AppRoute =
  | "/"
  | "/about"
  | "/courses"
  | "/mkcl"
  | "/gallery"
  | "/testimonials"
  | "/contact";

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
  /** Smiling student working at a computer lab desk. */
  hero: unsplash("photo-1531482615713-2afd69097998", 1600),
  /** Classroom full of students at computers. */
  aboutClassroom: unsplash("photo-1524178232363-1fb2b075b655", 1400),
  /** Students celebrating after a course / certification. */
  ctaBackground: unsplash("photo-1523240795612-9a054b0db644", 1600),
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
    src: unsplash("photo-1524178232363-1fb2b075b655", 800),
    alt: "Students learning together in the Ashadeep computer classroom",
    category: "Classroom",
  },
  {
    src: unsplash("photo-1523240795612-9a054b0db644", 800),
    alt: "Students receiving their course completion certificates",
    category: "Students",
  },
  {
    src: unsplash("photo-1509062522246-3755977927d7", 800),
    alt: "Teacher explaining a concept at the whiteboard",
    category: "Classroom",
  },
  {
    src: unsplash("photo-1517245386807-bb43f82c33c4", 800),
    alt: "Instructor guiding students during a practical session",
    category: "Classroom",
  },
  {
    src: unsplash("photo-1522202176988-66273c1fd05b", 800),
    alt: "Students practising on computers side by side",
    category: "Students",
  },
  {
    src: unsplash("photo-1519389950473-47ba0277781c", 800),
    alt: "Group activity during a computer workshop",
    category: "Activities",
  },
  {
    src: unsplash("photo-1552664730-d307ca884978", 800),
    alt: "Team discussion during a practical training class",
    category: "Activities",
  },
  {
    src: unsplash("photo-1434030216411-0b793f4b4173", 800),
    alt: "Student taking notes during a computer class",
    category: "Students",
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
