// Page-level FAQs (home, courses, contact). Course-specific FAQs live in courses.ts.
// Answers only restate facts already on the site or point learners to the team.

import { COURSES, type Faq } from "@/data/courses";
import { CONTACT } from "@/data/site";

const courseNames = COURSES.map((c) => c.title).join(", ");

export const HOME_FAQS: Faq[] = [
  {
    q: "Where is Ashadeep Computer Institute located?",
    a: `We are at ${CONTACT.address}. Our timings are ${CONTACT.hours}.`,
  },
  {
    q: "Which courses can I join?",
    a: `We currently offer ${COURSES.length} courses: ${courseNames}. Open any course page to see what it covers.`,
  },
  {
    q: "Is the institute an official MKCL partner?",
    a: "Yes. Ashadeep Computer Institute is an official partner of MKCL (Maharashtra Knowledge Corporation Limited).",
  },
  {
    q: "How do I enquire or get admission details?",
    a: `Use the Enquire Now form, call ${CONTACT.phoneDisplay}, or message us on WhatsApp. Our team will contact you with the course details.`,
  },
];

export const COURSES_FAQS: Faq[] = [
  {
    q: "How do I choose the right course?",
    a: "Browse by category, then open a course to see what it covers and who it is designed for. If you are unsure, send an enquiry and our team will help you decide.",
  },
  {
    q: "Are the courses suitable for beginners?",
    a: "Each course page lists who can join. For example, Python Programming is open to beginners in coding. For any other course, our team can advise on your starting level.",
  },
  {
    q: "What is included in a course?",
    a: "Every course page lists the topics covered, the tools named in the course and any practical work. Our teaching is practical and skill-based.",
  },
  {
    q: "Where can I find duration, batch timings and fees?",
    a: `Please contact us on ${CONTACT.phoneDisplay} or send an enquiry, and our team will share the current details.`,
  },
];

export const CONTACT_FAQS: Faq[] = [
  {
    q: "What are your timings?",
    a: `${CONTACT.hours}. Our address is ${CONTACT.address}.`,
  },
  {
    q: "How will you respond to my enquiry?",
    a: "Our team will contact you on the mobile number you share. For anything urgent, call or message us on WhatsApp.",
  },
  {
    q: "Which course should I select in the form?",
    a: `Choose the closest match from: ${courseNames}. If you are not sure, pick any and tell us what you want to learn in the message box.`,
  },
];
