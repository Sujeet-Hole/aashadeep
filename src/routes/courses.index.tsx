// Courses page: compact hero, category filters + search, featured courses, full course grid,
// general FAQ and a closing call-to-action. Everything is rendered from src/data/courses.ts.
// The active category lives in the URL (?category=...) so filtered views can be linked to.

import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, Search, SearchX } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { FaqSection } from "@/components/Faq";
import { CourseCard } from "@/components/courses/CourseCard";
import { CATEGORIES_IN_USE, COURSES, FEATURED_COURSES } from "@/data/courses";
import { COURSES_FAQS } from "@/data/faqs";

export const Route = createFileRoute("/courses/")({
  validateSearch: (search: Record<string, unknown>): { category?: string } =>
    typeof search["category"] === "string" && search["category"]
      ? { category: search["category"] }
      : {},
  head: () => ({
    meta: [
      { title: "Our Courses — Ashadeep Computer Institute" },
      {
        name: "description",
        content:
          "Explore computer and professional skill courses at Ashadeep Computer Institute: Digital Marketing, Graphic Designing, Python, Advanced Excel, Tally Prime + GST, Cybersecurity, Data Analytics and Business Analysis.",
      },
      { property: "og:title", content: "Our Courses — Ashadeep Computer Institute" },
      {
        property: "og:description",
        content:
          "Build skills that move you forward — explore our range of computer and professional skill courses.",
      },
      { property: "og:url", content: "/courses" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/courses" }],
  }),
  component: CoursesPage,
});

function CoursesPage() {
  const { category } = Route.useSearch();
  const navigate = Route.useNavigate();
  const [query, setQuery] = useState("");

  const activeId = CATEGORIES_IN_USE.some((c) => c.id === category) ? (category ?? "all") : "all";
  const q = query.trim().toLowerCase();

  const results = COURSES.filter((c) => {
    if (activeId !== "all" && c.category !== activeId) return false;
    if (!q) return true;
    const haystack = [c.title, c.description, ...c.skills, ...(c.tools ?? [])].join(" ");
    return haystack.toLowerCase().includes(q);
  });

  const isDefaultView = activeId === "all" && !q;
  const activeLabel = CATEGORIES_IN_USE.find((c) => c.id === activeId)?.label ?? "All Courses";

  const selectCategory = (id: string) =>
    navigate({
      search: id === "all" ? {} : { category: id },
      replace: true,
      resetScroll: false,
    });

  const tabs = [
    { id: "all", label: "All Courses", count: COURSES.length },
    ...CATEGORIES_IN_USE.map((c) => ({
      id: c.id,
      label: c.label,
      count: COURSES.filter((course) => course.category === c.id).length,
    })),
  ];

  return (
    <>
      <PageHero
        title="Explore Our Courses"
        subtitle="Discover practical skills and learning opportunities designed to help you move forward in your career."
        crumbs={[{ label: "Home", to: "/" }, { label: "Courses" }]}
        aside={
          <div className="hidden grid-cols-4 gap-3 lg:grid" aria-hidden>
            {COURSES.map((course) => (
              <span
                key={course.slug}
                className={`flex h-16 w-16 items-center justify-center rounded-2xl ${course.tint}`}
              >
                <course.icon className={`h-7 w-7 ${course.accent}`} />
              </span>
            ))}
          </div>
        }
      >
        <a href="#browse-courses" className="btn-primary">
          Explore Courses
          <ArrowRight className="h-4 w-4" aria-hidden />
        </a>
        <Link to="/contact" search={{ course: "" }} className="btn-outline-white">
          <MessageCircle className="h-4 w-4" aria-hidden />
          Talk to Our Team
        </Link>
      </PageHero>

      {/* ---- Category filters + search ---- */}
      <section
        id="browse-courses"
        aria-label="Filter courses"
        className="container-site scroll-mt-24 pt-8 sm:scroll-mt-28 sm:pt-10"
      >
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          {/* Scrolls sideways on phones; wraps on larger screens */}
          <div
            role="group"
            aria-label="Course categories"
            className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0"
          >
            {tabs.map((tab) => {
              const active = tab.id === activeId;
              return (
                <button
                  key={tab.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => selectCategory(tab.id)}
                  className={`inline-flex min-h-11 shrink-0 items-center gap-2 whitespace-nowrap rounded-full px-4 text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 ${
                    active
                      ? "bg-brand text-primary-foreground shadow-lg shadow-brand/25"
                      : "bg-tint text-navy hover:bg-brand/15"
                  }`}
                >
                  {tab.label}
                  <span
                    className={`rounded-full px-2 py-0.5 text-[11px] ${
                      active ? "bg-white/25" : "bg-white text-navy/70"
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="relative w-full lg:max-w-xs">
            <label htmlFor="course-search" className="sr-only">
              Search courses
            </label>
            <Search
              className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden
            />
            <input
              id="course-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search courses, e.g. Python"
              className="form-input min-h-11 !rounded-full !pl-10"
              autoComplete="off"
            />
          </div>
        </div>
      </section>

      {/* ---- Featured courses (default view only, so filtered results show straight away) ---- */}
      {isDefaultView && FEATURED_COURSES.length > 0 && (
        <section aria-labelledby="featured-title" className="container-site pt-10 sm:pt-12">
          <Reveal direction="up">
            <h2 id="featured-title" className="section-title">
              Featured <span className="text-brand">Courses</span>
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              A good place to start if you are not sure where to begin.
            </p>
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

      {/* ---- All courses / filtered results ---- */}
      <section aria-labelledby="all-title" className="container-site pb-10 pt-10 sm:pb-12 sm:pt-12">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h2 id="all-title" className="section-title">
            {isDefaultView ? "All Courses" : activeLabel}
          </h2>
          <p className="text-sm text-muted-foreground" role="status" aria-live="polite">
            {results.length} {results.length === 1 ? "course" : "courses"}
            {q ? ` matching “${query.trim()}”` : ""}
          </p>
        </div>

        {results.length > 0 ? (
          <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((course) => (
              <li key={course.slug}>
                <CourseCard course={course} />
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-6 flex flex-col items-center rounded-3xl bg-tint px-6 py-10 text-center">
            <SearchX className="h-8 w-8 text-brand" aria-hidden />
            <p className="mt-3 text-base font-bold text-navy">No courses match your search</p>
            <p className="mt-1 max-w-md text-sm text-muted-foreground">
              Try a different word, or show every course. If you are looking for something specific,
              our team can help.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                className="btn-primary"
                onClick={() => {
                  setQuery("");
                  selectCategory("all");
                }}
              >
                Show all courses
              </button>
              <Link
                to="/contact"
                search={{ course: "" }}
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-navy/20 px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-white"
              >
                Ask our team
              </Link>
            </div>
          </div>
        )}
      </section>

      <FaqSection
        id="courses-faq"
        title="Course Questions"
        intro="Quick answers about choosing and joining a course. Each course page also has its own FAQ."
        items={COURSES_FAQS}
      />

      <CtaBand
        title={
          <>
            Not sure which course is <span className="text-brand-glow">right for you?</span>
          </>
        }
        text="Tell us what you want to learn and our team will help you choose, and share duration, batch timings and fees."
        primaryLabel="Enquire for Course Details"
      />
    </>
  );
}
