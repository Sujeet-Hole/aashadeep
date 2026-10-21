// MKCL partnership page: partner badge, story and checklist.

import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

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
        content: "Learning with a recognized education partner — official MKCL partner in Bhandup West, Mumbai.",
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

      <section className="container-site py-12 sm:py-16">
        {/* Partner badge card */}
        <Reveal>
          <div className="rounded-3xl border border-border bg-white p-8 text-center shadow-xl shadow-navy/5 sm:p-12">
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

        <Reveal delay={100}>
          <h2 className="section-title mt-12 max-w-3xl">
            Learning with a <span className="text-brand">Recognized Education Partner</span>
          </h2>
        </Reveal>

        <Reveal delay={150}>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Ashadeep Computer Institute is an official partner of MKCL (Maharashtra Knowledge
            Corporation Limited). Our partnership reflects our commitment to accessible computer
            education and structured learning opportunities.
          </p>
        </Reveal>

        {/* Checklist */}
        <Reveal delay={200}>
          <ul className="mt-10 grid gap-3 rounded-3xl bg-tint p-6 sm:grid-cols-2 sm:p-8">
            {CHECKLIST.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-brand" aria-hidden />
                <span className="text-sm font-semibold text-navy sm:text-base">{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>
    </>
  );
}
