// Home page: navy hero with student photo, then an introduction, course categories, featured
// courses, why choose us, how to get started, student voices, FAQ and a closing call-to-action.

import type { CSSProperties } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, BadgeCheck, Laptop, Users, type LucideIcon } from "lucide-react";
import { SafeImage } from "@/components/SafeImage";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { FaqSection } from "@/components/Faq";
import { CourseCard } from "@/components/courses/CourseCard";
import { CATEGORIES_IN_USE, COURSES, FEATURED_COURSES } from "@/data/courses";
import { HOME_FAQS } from "@/data/faqs";
import { GETTING_STARTED, IMAGES, TESTIMONIALS, WHY_US } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ashadeep Computer Institute | Learn Today. Build Your Future." },
      {
        name: "description",
        content:
          "A trusted destination for computer education and professional skill development in Bhandup, Mumbai. 15 years of experience, official MKCL partner, practical skill-based learning.",
      },
      {
        property: "og:title",
        content: "Ashadeep Computer Institute | Learn Today. Build Your Future.",
      },
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

/** Inline style helper for staggered text entrance delays. */
const animDelay = (ms: number) => ({ "--anim-delay": `${ms}ms` }) as CSSProperties;

function HomePage() {
  return (
    <>
      {/* ---- Hero: fills the first screen on laptops and phones ---- */}
      <section className="relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden bg-navy text-white sm:min-h-[min(calc(100svh-6rem),44rem)]">
        <img
          src={IMAGES.hero}
          alt="Smiling young student learning at a computer in the Ashadeep lab"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover object-center opacity-55"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-navy/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/20" />

        <div className="container-site relative py-12 sm:py-16 lg:py-20">
          <p
            className="anim-rise inline-flex max-w-full rounded-full border border-brand/50 bg-brand/15 px-4 py-1.5 text-center text-[10px] font-semibold uppercase tracking-widest text-brand-glow sm:text-xs"
            style={animDelay(0)}
          >
            15 Years of Learning, Skills &amp; Career Development in Bhandup
          </p>

          <h1
            className="anim-rise mt-6 max-w-3xl font-extrabold leading-[1.1] tracking-tight [font-size:clamp(2.1rem,1.4rem+3.4vw,3.75rem)]"
            style={animDelay(150)}
          >
            Learn Today.
            <br />
            <span className="text-brand-glow">Build Your Future.</span>
          </h1>

          <p
            className="anim-rise mt-5 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base"
            style={animDelay(300)}
          >
            A trusted destination for computer education and professional skill development in
            Bhandup, Mumbai. With 15 years of experience, we help students build practical computer
            skills for education, employment and career growth.
          </p>

          <div className="anim-rise mt-8 flex flex-col gap-3 sm:flex-row" style={animDelay(450)}>
            <Link to="/courses" className="btn-primary">
              Explore Our Courses
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link to="/contact" search={{ course: "" }} className="btn-outline-white">
              Enquire for Admission
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>

          {/* Floating highlights card */}
          <Reveal delay={200} direction="zoom" className="mt-12 lg:mt-16">
            <div className="grid max-w-xl grid-cols-2 gap-4 rounded-3xl bg-white p-5 text-navy shadow-2xl shadow-navy/30 sm:p-6">
              {HIGHLIGHTS.map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <span className="icon-circle h-11 w-11 bg-tint text-brand">
                    <item.icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="text-xs font-semibold leading-snug sm:text-sm">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---- Introduction ---- */}
      <section aria-labelledby="intro-title" className="container-site section-y">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-14">
          <Reveal direction="left">
            <h2 id="intro-title" className="section-title">
              A Trusted Destination for <span className="text-brand">Computer Education</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Ashadeep Computer Institute helps students and aspiring professionals in Bhandup,
              Mumbai build practical, career-oriented computer skills. Our courses range from
              programming and design to accounting, analytics and digital safety, taught through
              practical, skill-based learning.
            </p>
            <Link
              to="/about"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline"
            >
              More about the institute
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </Reveal>
          <Reveal direction="right" delay={100}>
            <img
              src={IMAGES.collaboration}
              alt="Students collaborating around a laptop during a workshop activity"
              width={1200}
              height={900}
              loading="lazy"
              className="mb-4 aspect-[16/10] w-full rounded-3xl object-cover shadow-xl shadow-navy/10"
            />
            <dl className="grid grid-cols-3 gap-3 rounded-3xl bg-tint p-4 text-center sm:p-6">
              {[
                { value: "15", label: "Years of experience" },
                { value: String(COURSES.length), label: "Courses to choose from" },
                { value: "MKCL", label: "Official partner" },
              ].map((fact) => (
                <div key={fact.label} className="min-w-0">
                  <dd className="text-2xl font-extrabold text-brand sm:text-3xl">{fact.value}</dd>
                  <dt className="mt-1 text-xs font-medium text-navy/75 sm:text-sm">{fact.label}</dt>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* ---- Course categories ---- */}
      <section aria-labelledby="categories-title" className="bg-muted">
        <div className="container-site section-y">
          <Reveal direction="up">
            <h2 id="categories-title" className="section-title">
              Browse by <span className="text-brand">Category</span>
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">
              Pick an area and see the courses inside it.
            </p>
          </Reveal>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CATEGORIES_IN_USE.map((cat, i) => {
              const count = COURSES.filter((c) => c.category === cat.id).length;
              return (
                <li key={cat.id}>
                  <Reveal delay={i * 70} direction="up" className="h-full">
                    <Link
                      to="/courses"
                      search={{ category: cat.id }}
                      className="group flex h-full items-start gap-4 rounded-3xl border border-border bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
                    >
                      <span className="icon-circle bg-tint text-brand">
                        <cat.icon className="h-5 w-5" aria-hidden />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-base font-bold text-navy">{cat.label}</span>
                        <span className="mt-0.5 block text-sm text-muted-foreground">
                          {cat.blurb}
                        </span>
                        <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                          {count} {count === 1 ? "course" : "courses"}
                          <ArrowRight
                            className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                            aria-hidden
                          />
                        </span>
                      </span>
                    </Link>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ---- Featured courses ---- */}
      {FEATURED_COURSES.length > 0 && (
        <section aria-labelledby="featured-title" className="container-site section-y">
          <Reveal direction="up">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <h2 id="featured-title" className="section-title">
                Featured <span className="text-brand">Courses</span>
              </h2>
              <Link
                to="/courses"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline"
              >
                View all {COURSES.length} courses
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </Reveal>
          <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURED_COURSES.map((course, i) => (
              <li key={course.slug}>
                <Reveal delay={i * 80} direction="up" className="h-full">
                  <CourseCard course={course} />
                </Reveal>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* ---- Why choose us ---- */}
      <section aria-labelledby="why-title" className="bg-tint">
        <div className="container-site section-y">
          <Reveal direction="up">
            <h2 id="why-title" className="section-title">
              Why Students Choose <span className="text-brand">Ashadeep</span>
            </h2>
          </Reveal>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_US.map((item, i) => (
              <li key={item.label}>
                <Reveal delay={i * 50} direction="up" className="h-full">
                  <div className="flex h-full items-center gap-4 rounded-2xl bg-white p-4 shadow-sm">
                    <span className="icon-circle bg-tint text-brand">
                      <item.icon className="h-5 w-5" aria-hidden />
                    </span>
                    <p className="text-sm font-semibold text-navy sm:text-base">{item.label}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---- How to get started (a real sequence, so the steps are numbered) ---- */}
      <section aria-labelledby="steps-title" className="container-site section-y">
        <Reveal direction="up">
          <h2 id="steps-title" className="section-title">
            Getting Started Is <span className="text-brand">Simple</span>
          </h2>
        </Reveal>
        <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {GETTING_STARTED.map((step, i) => (
            <li key={step.title}>
              <Reveal delay={i * 70} direction="up" className="h-full">
                <div className="h-full rounded-3xl border border-border bg-white p-5 shadow-sm">
                  <span className="icon-circle h-10 w-10 bg-brand text-sm font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                  <h3 className="mt-3 text-base font-bold text-navy">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      {/* ---- Student voices ---- */}
      <section aria-labelledby="voices-title" className="bg-muted">
        <div className="container-site section-y">
          <Reveal direction="up">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <h2 id="voices-title" className="section-title">
                What Our <span className="text-brand">Students Say</span>
              </h2>
              <Link
                to="/testimonials"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline"
              >
                Read more stories
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </Reveal>
          <ul className="mt-6 grid gap-5 md:grid-cols-3">
            {TESTIMONIALS.slice(0, 3).map((t, i) => (
              <li key={t.name}>
                <Reveal delay={i * 80} direction="up" className="h-full">
                  <figure className="flex h-full flex-col rounded-3xl bg-white p-5 shadow-sm sm:p-6">
                    <blockquote className="flex-1 text-sm leading-relaxed text-navy/85">
                      “{t.quote}”
                    </blockquote>
                    <figcaption className="mt-4 flex items-center gap-3">
                      <span className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-tint text-sm font-bold text-brand">
                        {t.name.charAt(0)}
                        <SafeImage
                          src={t.photo}
                          alt=""
                          width={200}
                          height={200}
                          loading="lazy"
                          className="absolute inset-0 h-full w-full object-cover"
                        />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-sm font-bold text-navy">{t.name}</span>
                        <span className="block text-xs text-muted-foreground">{t.course}</span>
                      </span>
                    </figcaption>
                  </figure>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FaqSection
        id="home-faq"
        title="Common Questions"
        intro="The basics about the institute and how to join."
        items={HOME_FAQS}
      />

      <CtaBand />
    </>
  );
}
