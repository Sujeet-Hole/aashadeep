// Closing call-to-action panel placed at the end of each page (above the footer).

import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";
import { CONTACT, IMAGES } from "@/data/site";

interface CtaBandProps {
  title?: ReactNode;
  text?: string;
  /** Pre-selects this course in the enquiry form. */
  course?: string;
  primaryLabel?: string;
}

export function CtaBand({
  title = (
    <>
      Your Future Starts with the <span className="text-brand-glow">Right Skills.</span>
    </>
  ),
  text = "Take the next step towards learning, career development and digital confidence with Ashadeep Computer Institute.",
  course = "",
  primaryLabel = "Enquire for Admission",
}: CtaBandProps) {
  return (
    <section className="container-site pb-10 pt-2 sm:pb-12">
      <div className="relative overflow-hidden rounded-3xl bg-navy text-white">
        <img
          src={IMAGES.ctaBackground}
          alt=""
          aria-hidden
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/70" />
        <div className="relative flex flex-col gap-5 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:p-10">
          <div className="min-w-0 max-w-2xl">
            <h2 className="text-xl font-extrabold leading-tight tracking-tight sm:text-2xl lg:text-3xl">
              {title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-white/80 sm:text-base">{text}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
            <Link to="/contact" search={{ course }} className="btn-primary">
              {primaryLabel}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <a href={CONTACT.phoneHref} className="btn-outline-white">
              <Phone className="h-4 w-4" aria-hidden />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
