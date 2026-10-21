// Course detail page: one reusable template rendered for every course.

import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { getCourse } from "@/data/courses";

export const Route = createFileRoute("/courses/$slug")({
  loader: ({ params }) => {
    const course = getCourse(params.slug);
    if (!course) throw notFound();
    return { course };
  },
  head: ({ params, loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `${loaderData.course.title} Course — Ashadeep Computer Institute`
          : "Course — Ashadeep Computer Institute",
      },
      {
        name: "description",
        content: loaderData
          ? `${loaderData.course.tagline} Learn ${loaderData.course.title} at Ashadeep Computer Institute, Bhandup West, Mumbai.`
          : "Course details at Ashadeep Computer Institute, Bhandup West, Mumbai.",
      },
      {
        property: "og:title",
        content: loaderData
          ? `${loaderData.course.title} Course — Ashadeep Computer Institute`
          : "Course — Ashadeep Computer Institute",
      },
      {
        property: "og:description",
        content: loaderData?.course.tagline ?? "Course details at Ashadeep Computer Institute.",
      },
      { property: "og:url", content: `/courses/${params.slug}` },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `/courses/${params.slug}` }],
  }),
  component: CourseDetailPage,
});

function CourseDetailPage() {
  const { course } = Route.useLoaderData();
  const Icon = course.icon;

  return (
    <>
      <PageHero
        title={course.title}
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Courses", to: "/courses" },
          { label: course.title },
        ]}
      />

      <section className="container-site py-12 sm:py-16">
        {/* Pastel hero card */}
        <Reveal>
          <div className={`flex items-center gap-5 rounded-3xl ${course.tint} p-6 sm:gap-7 sm:p-10`}>
            <span className="icon-circle h-16 w-16 bg-white shadow-md sm:h-20 sm:w-20">
              <Icon className={`h-8 w-8 sm:h-10 sm:w-10 ${course.accent}`} aria-hidden />
            </span>
            <div className="min-w-0">
              <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl lg:text-4xl">
                {course.title} Course
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-navy/75 sm:text-sm md:text-base">
                {course.tagline}
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <img
            src={course.image}
            alt={course.imageAlt}
            loading="lazy"
            className="mt-8 aspect-video w-full rounded-3xl object-cover shadow-xl shadow-navy/10"
          />
        </Reveal>

        {/* What you will learn */}
        <Reveal delay={100}>
          <h3 className="section-title mt-12">What You Will Learn</h3>
        </Reveal>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {course.learn.map((item, i) => (
            <Reveal key={item} delay={i * 40}>
              <li className="flex items-start gap-3 rounded-2xl border border-border bg-white p-4 shadow-sm">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden />
                <span className="text-sm font-medium text-navy">{item}</span>
              </li>
            </Reveal>
          ))}
        </ul>

        {/* Who can join */}
        <Reveal delay={100}>
          <div className="mt-10 rounded-3xl bg-tint p-6 sm:p-8">
            <h3 className="text-xl font-extrabold text-navy sm:text-2xl">Who Can Join?</h3>
            <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
              {course.who.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden />
                  <span className="text-sm font-medium text-navy/85">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <Link
            to="/contact"
            search={{ course: course.title }}
            className="btn-primary mt-10 w-full justify-center sm:w-auto"
          >
            Enquire for This Course
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
