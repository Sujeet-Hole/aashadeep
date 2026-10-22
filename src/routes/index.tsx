// Home page: navy hero with student photo, headline, CTAs and highlight card.

import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, BadgeCheck, Laptop, Users, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { IMAGES } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ashadeep Computer Institute | Learn Today. Build Your Future." },
      {
        name: "description",
        content:
          "A trusted destination for computer education and professional skill development in Bhandup, Mumbai. 15 years of experience, official MKCL partner, practical skill-based learning.",
      },
      { property: "og:title", content: "Ashadeep Computer Institute | Learn Today. Build Your Future." },
      {
        property: "og:description",
        content:
          "Computer education and professional skill development in Bhandup, Mumbai. 15 years of experience, official MKCL partner.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const HIGHLIGHTS: { icon: LucideIcon; label: string }[] = [
  { icon: Award, label: "15 Years of Experience" },
  { icon: BadgeCheck, label: "Official MKCL Partner" },
  { icon: Users, label: "Expert Teachers & Trainers" },
  { icon: Laptop, label: "Practical Skill-Based Learning" },
];

function HomePage() {
  return (
    <>
      {/* ---- Hero ---- */}
      <section className="relative overflow-hidden bg-navy text-white">
        <img
          src={IMAGES.hero}
          alt="Smiling young student learning at a computer in the Ashadeep lab"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-40"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/30" />

        <div className="container-site relative py-14 sm:py-20 lg:py-24">
          <Reveal>
            <p className="inline-flex max-w-full rounded-full border border-brand/50 bg-brand/15 px-4 py-1.5 text-center text-[10px] font-semibold uppercase tracking-widest text-brand-glow sm:text-xs">
              15 Years of Learning, Skills &amp; Career Development in Bhandup
            </p>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Learn Today.
              <br />
              <span className="text-brand-glow">Build Your Future.</span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
              A trusted destination for computer education and professional skill development in
              Bhandup, Mumbai. With 15 years of experience, we help students build practical
              computer skills for education, employment and career growth.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/courses" className="btn-primary">
                Explore Our Courses
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link to="/contact" search={{ course: "" }} className="btn-outline-white">
                Enquire for Admission
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </Reveal>

          {/* Floating highlights card */}
          <Reveal delay={400}>
            <div className="mt-12 grid max-w-xl grid-cols-2 gap-4 rounded-3xl bg-white p-5 text-navy shadow-2xl shadow-navy/40 sm:p-6 lg:mt-16">
              {HIGHLIGHTS.map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <span className="icon-circle h-11 w-11 bg-tint text-brand">
                    <item.icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="text-xs font-semibold leading-snug sm:text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
