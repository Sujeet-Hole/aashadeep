// Global footer: navy CTA section, floating highlights strip, link columns,
// social icons and the bottom bar. Also exports the floating WhatsApp button.

import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Facebook,
  Instagram,
  Laptop,
  MessageCircle,
  Phone,
  TrendingUp,
  Users,
  Youtube,
} from "lucide-react";
import { CONTACT, IMAGES, NAV_LINKS } from "@/data/site";
import { COURSES } from "@/data/courses";
import logo from "@/assets/aci-logo.png.asset.json";

const FOOTER_STRIP = [
  { icon: Award, label: "15 Years of Experience" },
  { icon: BadgeCheck, label: "MKCL Partner" },
  { icon: Users, label: "Expert Teachers" },
  { icon: Laptop, label: "Practical Learning" },
  { icon: TrendingUp, label: "Career Growth" },
];

const SOCIALS = [
  { label: "WhatsApp", href: CONTACT.whatsapp, icon: MessageCircle },
  { label: "Instagram", href: "#", icon: Instagram },
  { label: "YouTube", href: "#", icon: Youtube },
  { label: "Facebook", href: "#", icon: Facebook },
];

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      {/* ---- CTA section ---- */}
      <section className="relative overflow-hidden">
        <img
          src={IMAGES.ctaBackground}
          alt=""
          aria-hidden
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/85 to-navy" />
        <div className="container-site relative pb-20 pt-14 text-center sm:pb-24 sm:pt-16">
          <p className="inline-flex rounded-full border border-brand/50 bg-brand/15 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-brand-glow sm:text-xs">
            Start Your Learning Journey Today
          </p>
          <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Your Future Starts with the <span className="text-brand-glow">Right Skills.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-white/80 sm:text-base">
            Take the next step towards learning, career development and digital confidence with
            Ashadeep Computer Institute.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link to="/contact" className="btn-primary">
              Enquire for Admission
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <a href={CONTACT.phoneHref} className="btn-outline-white">
              <Phone className="h-4 w-4" aria-hidden />
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* ---- Floating highlights strip ---- */}
      <div className="container-site relative z-10 -mt-10 sm:-mt-12">
        <div className="grid grid-cols-2 gap-3 rounded-3xl bg-white p-4 text-navy shadow-2xl shadow-navy/30 sm:grid-cols-5 sm:gap-4 sm:p-6">
          {FOOTER_STRIP.map((item, i) => (
            <div
              key={item.label}
              className={`flex items-center gap-3 ${i === FOOTER_STRIP.length - 1 ? "col-span-2 sm:col-span-1" : ""}`}
            >
              <span className="icon-circle h-10 w-10 bg-tint text-brand sm:h-12 sm:w-12">
                <item.icon className="h-5 w-5" aria-hidden />
              </span>
              <span className="text-xs font-semibold leading-snug sm:text-sm">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ---- Footer columns ---- */}
      <div className="container-site grid gap-10 pb-10 pt-12 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo.url}
              alt="Ashadeep Computer Institute logo"
              className="h-12 w-12 rounded-full object-cover"
              loading="lazy"
            />
            <span className="leading-tight">
              <span className="block text-base font-extrabold tracking-wide">ASHADEEP</span>
              <span className="block text-[10px] font-bold tracking-[0.16em] text-brand-glow">
                COMPUTER INSTITUTE
              </span>
            </span>
          </Link>
          <p className="mt-4 text-sm text-white/70">
            Learn Today. Build Your Future. A trusted destination for computer education in
            Bhandup, Mumbai — for 15 years and counting.
          </p>
        </div>

        {/* Quick links */}
        <nav aria-label="Quick links">
          <h3 className="text-sm font-bold uppercase tracking-widest text-white/90">Quick Links</h3>
          <ul className="mt-4 space-y-2.5">
            {NAV_LINKS.filter((l) => l.label !== "Testimonials").map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-sm text-white/70 transition-colors hover:text-brand-glow"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Courses */}
        <nav aria-label="Our courses">
          <h3 className="text-sm font-bold uppercase tracking-widest text-white/90">Our Courses</h3>
          <ul className="mt-4 space-y-2.5">
            {COURSES.map((course) => (
              <li key={course.slug}>
                <Link
                  to="/courses/$slug"
                  params={{ slug: course.slug }}
                  className="text-sm text-white/70 transition-colors hover:text-brand-glow"
                >
                  {course.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Socials */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-white/90">Follow Us</h3>
          <div className="mt-4 flex gap-3">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand"
              >
                <social.icon className="h-5 w-5" aria-hidden />
              </a>
            ))}
          </div>
          <p className="mt-4 text-xs leading-relaxed text-white/60">
            Mon – Sat: 9:00 AM – 8:00 PM
            <br />
            Bhandup West, Mumbai
          </p>
        </div>
      </div>

      {/* ---- Bottom bar ---- */}
      <div className="border-t border-white/10">
        <div className="container-site flex flex-col items-center justify-between gap-2 py-5 text-center text-xs text-white/60 sm:flex-row sm:text-left">
          <p>© 2024 Ashadeep Computer Institute. All Rights Reserved.</p>
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
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand text-primary-foreground shadow-xl shadow-brand/40 transition-transform hover:scale-110"
    >
      <MessageCircle className="h-7 w-7" aria-hidden />
      <span className="absolute -right-0.5 -top-0.5 h-3.5 w-3.5 rounded-full bg-brand-glow ring-2 ring-white" />
    </a>
  );
}
