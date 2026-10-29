// Global compact footer: brand + contact, quick links, course links, socials and a slim bottom bar.
// Each page ends with its own <CtaBand />, so the footer no longer carries a full-height CTA
// section or highlights strip. Also exports the floating WhatsApp button.

import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Youtube,
} from "lucide-react";
import { CONTACT, NAV_LINKS } from "@/data/site";
import { COURSES } from "@/data/courses";
import logo from "@/assets/aci-logo.png";

/** Instagram, YouTube and Facebook still point to "#": add the real page URLs here. */
const SOCIALS = [
  { label: "WhatsApp", href: CONTACT.whatsapp, icon: MessageCircle },
  { label: "Instagram", href: "#", icon: Instagram },
  { label: "YouTube", href: "#", icon: Youtube },
  { label: "Facebook", href: "#", icon: Facebook },
];

const linkClass = "text-xs text-white/70 transition-colors hover:text-brand-glow sm:text-sm";
const headingClass = "text-xs font-bold uppercase tracking-widest text-white/90";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <div className="container-site grid gap-x-8 gap-y-6 py-8 sm:grid-cols-2 lg:grid-cols-[1.25fr_0.7fr_1.5fr_1.2fr] lg:gap-x-10 lg:py-10">
        {/* Brand */}
        <div>
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Ashadeep Computer Institute logo"
              width={256}
              height={256}
              className="h-12 w-12 shrink-0 rounded-full object-cover shadow-lg ring-2 ring-white/20"
              loading="lazy"
            />
            <span className="leading-tight">
              <span className="block text-base font-extrabold tracking-wide">ASHADEEP</span>
              <span className="block text-[10px] font-bold tracking-[0.16em] text-brand-glow">
                COMPUTER INSTITUTE
              </span>
            </span>
          </Link>
          <p className="mt-3 max-w-xs text-xs leading-relaxed text-white/70 sm:text-sm">
            Learn Today. Build Your Future. Computer education in Bhandup, Mumbai for 15 years, and
            an official MKCL partner.
          </p>
          <Link to="/contact" search={{ course: "" }} className="btn-primary mt-4 !px-5 !py-2.5">
            Enquire Now
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>

        {/* Quick links */}
        <nav aria-label="Quick links">
          <h3 className={headingClass}>Quick Links</h3>
          <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-1">
            {NAV_LINKS.filter((l) => l.label !== "Testimonials").map((link) => (
              <li key={link.to}>
                <Link to={link.to} className={linkClass}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Courses */}
        <nav aria-label="Our courses">
          <h3 className={headingClass}>Our Courses</h3>
          <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2">
            {COURSES.map((course) => (
              <li key={course.slug} className="min-w-0">
                <Link
                  to="/courses/$slug"
                  params={{ slug: course.slug }}
                  className={`${linkClass} block break-words`}
                >
                  {course.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact + socials */}
        <div className="min-w-0">
          <h3 className={headingClass}>Contact</h3>
          <ul className="mt-3 space-y-2 text-xs text-white/70 sm:text-sm">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-glow" aria-hidden />
              <a href={CONTACT.phoneHref} className="hover:text-brand-glow">
                {CONTACT.phoneDisplay}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-glow" aria-hidden />
              <a href={CONTACT.emailHref} className="min-w-0 break-all hover:text-brand-glow">
                {CONTACT.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-glow" aria-hidden />
              <span>{CONTACT.addressShort}</span>
            </li>
            <li className="flex items-start gap-2">
              <Clock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-glow" aria-hidden />
              <span>{CONTACT.hours}</span>
            </li>
          </ul>
          <div className="mt-3 flex gap-2">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                {...(social.href === "#" ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand"
              >
                <social.icon className="h-4 w-4" aria-hidden />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar. Right padding on phones keeps text clear of the floating WhatsApp button. */}
      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-0.5 py-3 text-[11px] text-white/60 max-sm:pr-16 sm:flex-row sm:items-center sm:justify-between sm:text-xs">
          <p>© {year} Ashadeep Computer Institute. All Rights Reserved.</p>
          <p>Designed with ❤️ for Learners in Bhandup, Mumbai.</p>
        </div>
      </div>
    </footer>
  );
}

/** Floating WhatsApp button, bottom-right on every page. */
export function WhatsAppFloat() {
  return (
    <a
      href={CONTACT.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-4 right-4 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand text-primary-foreground shadow-xl shadow-brand/40 transition-transform hover:scale-110 sm:bottom-5 sm:right-5 sm:h-14 sm:w-14"
    >
      <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden />
      <span className="absolute -right-0.5 -top-0.5 h-3.5 w-3.5 rounded-full bg-brand-glow ring-2 ring-white" />
    </a>
  );
}
