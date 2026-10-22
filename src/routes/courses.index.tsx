// Courses page: vertical list of pastel course cards linking to detail pages.

import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { COURSES } from "@/data/courses";

export const Route = createFileRoute("/courses/")({
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
  return (
    <>
      <PageHero title="Our Courses" crumbs={[{ label: "Home", to: "/" }, { label: "Courses" }]} />

      <section className="container-site py-12 sm:py-16">
        <Reveal>
          <h2 className="section-title">
            Build Skills That <span className="text-brand">Move You Forward</span>
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            From digital marketing and programming to accounting and analytics — we offer a range
            of computer and professional skill courses designed to make you confident, capable and
            job-ready.
          </p>
        </Reveal>

        {/* Course cards */}
        <div className="mt-10 space-y-4">
          {COURSES.map((course, i) => (
            <Reveal key={course.slug} delay={i * 50}>
              <Link
                to="/courses/$slug"
                params={{ slug: course.slug }}
                className={`group flex items-center gap-4 rounded-3xl ${course.tint} p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl sm:gap-5 sm:p-5`}
              >
                <span className="icon-circle h-14 w-14 bg-white shadow-sm sm:h-16 sm:w-16">
                  <course.icon className={`h-7 w-7 ${course.accent}`} aria-hidden />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-base font-bold text-navy sm:text-lg">
                    {course.title}
                  </span>
                  <span className="mt-0.5 block text-xs text-navy/70 sm:text-sm">
                    {course.description}
                  </span>
                </span>
                <span
                  aria-hidden
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-blue text-white shadow-md transition-transform duration-200 group-hover:scale-110 group-hover:translate-x-0.5"
                >
                  <ArrowRight className="h-5 w-5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100}>
          <Link to="/contact" search={{}} className="btn-primary mt-10 w-full justify-center sm:w-auto">
            Enquire for Course Details
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
