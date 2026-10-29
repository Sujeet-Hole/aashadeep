// MKCL partnership page: partner badge, story and checklist.
// Sections zoom / slide in from alternating sides while scrolling.

import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { COURSES } from "@/data/courses";
import { IMAGES } from "@/data/site";

export const Route = createFileRoute("/mkcl")({
  head: () => ({
    meta: [
      { title: "Our MKCL Partnership — Ashadeep Computer Institute" },
      {
        name: "description",
        content:
          "Ashadeep Computer Institute is an official partner of MKCL (Maharashtra Knowledge Corporation Limited) — recognized programs, structured curriculum and valid certifications.",
      },
      { property: "og:title", content: "Our MKCL Partnership — Ashadeep Computer Institute" },
      {
        property: "og:description",
        content:
          "Learning with a recognized education partner — official MKCL partner in Bhandup West, Mumbai.",
      },
      { property: "og:url", content: "/mkcl" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/mkcl" }],
  }),
  component: MkclPage,
});

const CHECKLIST = [
  "Recognized programs",
  "Structured curriculum",
  "Valid certifications",
  "Quality computer education",
  "Career-oriented learning",
];

function MkclPage() {
  return (
    <>
      <PageHero
        title="Our MKCL Partnership"
        crumbs={[{ label: "Home", to: "/" }, { label: "MKCL" }]}
      />

      <section className="container-site section-y">
        {/* Partner badge card */}
        <Reveal direction="zoom">
          <div className="rounded-3xl border border-border bg-white p-6 text-center shadow-xl shadow-navy/5 sm:p-10">
            {/* MKCL wordmark */}
            <div
              aria-hidden
              className="mx-auto inline-flex items-center justify-center rounded-2xl bg-tint-orange px-8 py-5"
            >
              <span className="text-5xl font-extrabold tracking-tight text-accent-orange sm:text-6xl">
                MKCL
              </span>
            </div>
            <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Maharashtra Knowledge Corporation Limited
            </p>
            <p className="mt-4 text-xl font-bold text-navy sm:text-2xl">
              Official Partner of{" "}
              <span className="text-3xl font-extrabold text-accent-orange sm:text-4xl">MKCL</span>
            </p>
          </div>
        </Reveal>

        <Reveal direction="left" delay={100}>
          <h2 className="section-title mt-10 max-w-3xl">
            Learning with a <span className="text-brand">Recognized Education Partner</span>
          </h2>
        </Reveal>

        <Reveal direction="right" delay={150}>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Ashadeep Computer Institute is an official partner of MKCL (Maharashtra Knowledge
            Corporation Limited). Our partnership reflects our commitment to accessible computer
            education and structured learning opportunities.
          </p>
        </Reveal>

        {/* Checklist */}
        <Reveal direction="up" delay={200}>
          <div className="mt-10 grid items-stretch gap-5 lg:grid-cols-2">
            <img
              src={IMAGES.ceremony}
              alt="Students receiving their course completion certificate during a small ceremony"
              width={1200}
              height={900}
              loading="lazy"
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-xl shadow-navy/10 lg:h-full"
            />
            <ul className="grid content-center gap-3 rounded-3xl bg-tint p-6 sm:p-8">
              {CHECKLIST.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-brand" aria-hidden />
                  <span className="text-sm font-semibold text-navy sm:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Courses at the institute */}
        <Reveal direction="up" delay={100}>
          <h3 className="subsection-title mt-10">Courses You Can Join</h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {COURSES.map((course) => (
              <li key={course.slug}>
                <Link
                  to="/courses/$slug"
                  params={{ slug: course.slug }}
                  className="chip !px-4 !py-2 !text-sm transition-colors hover:bg-brand/15"
                >
                  {course.title}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/courses"
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline"
          >
            See all courses
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </Reveal>
      </section>

      <CtaBand
        title={
          <>
            Learn with an <span className="text-brand-glow">MKCL partner.</span>
          </>
        }
        text="Ask us how MKCL programs and our courses can fit your goals."
      />
    </>
  );
}
