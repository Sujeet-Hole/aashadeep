// Course detail page: one reusable template rendered for every course from src/data/courses.ts.
// Order: overview hero, about, what you'll learn, skills, tools, curriculum, practical work and
// outcomes, course information (sidebar on desktop), FAQ, closing CTA. Sections whose data is
// missing (tools, practical work, duration, ...) are simply not rendered.
//
// NOTE: the loader returns nothing on purpose. Course objects hold a React icon component, which
// cannot be serialized for server rendering, so the component looks the course up by slug.

import type { ReactNode } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  BookOpenCheck,
  CheckCircle2,
  Clock,
  FolderKanban,
  GraduationCap,
  Layers,
  MapPin,
  Monitor,
  Phone,
  Target,
  Users,
  Wrench,
} from "lucide-react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SafeImage } from "@/components/SafeImage";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { FaqSection } from "@/components/Faq";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getCategory, getCourse, getCourseFaqs, getCourseModules } from "@/data/courses";
import { CONTACT } from "@/data/site";

export const Route = createFileRoute("/courses/$slug")({
  loader: ({ params }) => {
    if (!getCourse(params.slug)) throw notFound();
  },
  head: ({ params }) => {
    const course = getCourse(params.slug);
    const title = course
      ? `${course.title} Course — Ashadeep Computer Institute`
      : "Course — Ashadeep Computer Institute";
    const description = course
      ? `${course.tagline} Learn ${course.title} at Ashadeep Computer Institute, Bhandup West, Mumbai.`
      : "Course details at Ashadeep Computer Institute, Bhandup West, Mumbai.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: `/courses/${params.slug}` },
        { property: "og:type", content: "website" },
      ],
      links: [{ rel: "canonical", href: `/courses/${params.slug}` }],
    };
  },
  component: CourseDetailPage,
});

/** Heading for a content block, with an icon that matches the section. */
function BlockTitle({
  id,
  icon: Icon,
  children,
}: {
  id: string;
  icon: typeof Target;
  children: ReactNode;
}) {
  return (
    <h2 id={id} className="subsection-title flex items-center gap-3">
      <span className="icon-circle h-10 w-10 bg-tint text-brand">
        <Icon className="h-5 w-5" aria-hidden />
      </span>
      {children}
    </h2>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Clock;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="icon-circle h-9 w-9 bg-tint text-brand">
        <Icon className="h-4 w-4" aria-hidden />
      </span>
      <div className="min-w-0">
        <dt className="text-xs font-semibold text-muted-foreground">{label}</dt>
        <dd className="mt-0.5 break-words text-sm font-semibold text-navy">{value}</dd>
      </div>
    </div>
  );
}

function CourseDetailPage() {
  const { slug } = Route.useParams();
  const course = getCourse(slug);
  if (!course) return null;

  const Icon = course.icon;
  const category = getCategory(course.category);
  const modules = getCourseModules(course);
  const faqs = getCourseFaqs(course);
  const enquire = { course: course.title };

  return (
    <>
      {/* ---- Course overview / hero ---- */}
      <section className="bg-navy text-white">
        <div className="container-site grid items-center gap-8 py-8 sm:py-12 lg:grid-cols-[minmax(0,1fr)_auto]">
          <div className="min-w-0">
            <div className="anim-slide-left">
              <Breadcrumb
                crumbs={[
                  { label: "Home", to: "/" },
                  { label: "Courses", to: "/courses" },
                  { label: course.title },
                ]}
              />
            </div>
            {category && (
              <p className="anim-rise mt-4 inline-flex rounded-full border border-brand/50 bg-brand/15 px-3 py-1 text-xs font-semibold text-brand-glow">
                {category.label}
              </p>
            )}
            <h1
              className="page-title anim-rise mt-3"
              style={{ "--anim-delay": "120ms" } as React.CSSProperties}
            >
              {course.title}
            </h1>
            <p
              className="anim-rise mt-3 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base"
              style={{ "--anim-delay": "240ms" } as React.CSSProperties}
            >
              {course.tagline}
            </p>

            {(course.level || course.duration) && (
              <p className="mt-3 flex flex-wrap gap-2 text-xs font-semibold">
                {course.level && (
                  <span className="rounded-full bg-white/10 px-3 py-1">{course.level}</span>
                )}
                {course.duration && (
                  <span className="rounded-full bg-white/10 px-3 py-1">{course.duration}</span>
                )}
              </p>
            )}

            <div
              className="anim-rise mt-6 flex flex-col gap-3 sm:flex-row"
              style={{ "--anim-delay": "360ms" } as React.CSSProperties}
            >
              <Link to="/contact" search={enquire} className="btn-primary">
                Enquire Now
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              {modules.length > 0 ? (
                <a href="#curriculum" className="btn-outline-white">
                  View Curriculum
                </a>
              ) : (
                <a href={CONTACT.phoneHref} className="btn-outline-white">
                  <Phone className="h-4 w-4" aria-hidden />
                  Call Us
                </a>
              )}
            </div>
          </div>

          <span
            aria-hidden
            className={`hidden h-44 w-44 items-center justify-center rounded-[2rem] shadow-2xl shadow-black/20 lg:flex ${course.tint}`}
          >
            <Icon className={`h-20 w-20 ${course.accent}`} />
          </span>
        </div>
      </section>

      {/* ---- Main content + course information ---- */}
      <div className="container-site section-y grid gap-8 lg:grid-cols-[minmax(0,1fr)_21rem] lg:gap-10 xl:grid-cols-[minmax(0,1fr)_23rem]">
        <div className="min-w-0 space-y-10 sm:space-y-12">
          {/* About */}
          <Reveal direction="up">
            <section aria-labelledby="about-title">
              <div className="grid items-start gap-6 md:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] md:gap-8">
                <div
                  className={`relative mx-auto aspect-[1200/1140] w-full max-w-sm overflow-hidden rounded-3xl shadow-xl shadow-navy/10 md:max-w-none ${course.tint}`}
                >
                  <SafeImage
                    src={course.image}
                    alt={course.imageAlt}
                    width={1200}
                    height={1140}
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <h2 id="about-title" className="subsection-title">
                    About This Course
                  </h2>
                  <p className="mt-3 max-w-3xl text-sm leading-relaxed text-navy/80 sm:text-base">
                    {course.overview}
                  </p>
                  {course.learn.length === 0 && (
                    <div className="mt-5 rounded-2xl bg-tint p-4 sm:p-5">
                      <p className="text-sm font-semibold text-navy">
                        Detailed syllabus, duration and fees are shared by our team.
                      </p>
                      <Link
                        to="/contact"
                        search={enquire}
                        className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline"
                      >
                        Ask for course details
                        <ArrowRight className="h-4 w-4" aria-hidden />
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </section>
          </Reveal>

          {/* What you'll learn */}
          {course.learn.length > 0 && (
            <Reveal direction="up">
              <section aria-labelledby="learn-title">
                <BlockTitle id="learn-title" icon={BookOpenCheck}>
                  What You’ll Learn
                </BlockTitle>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {course.learn.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 rounded-2xl border border-border bg-white p-4 shadow-sm"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden />
                      <span className="text-sm font-medium text-navy">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>
          )}

          {/* Skills */}
          {course.skills.length > 0 && (
            <Reveal direction="up">
              <section aria-labelledby="skills-title">
                <BlockTitle id="skills-title" icon={Target}>
                  Skills You’ll Gain
                </BlockTitle>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {course.skills.map((skill) => (
                    <li key={skill} className="chip !px-3.5 !py-1.5 !text-xs sm:!text-sm">
                      {skill}
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>
          )}

          {/* Tools: only when the course names software */}
          {course.tools && course.tools.length > 0 && (
            <Reveal direction="up">
              <section aria-labelledby="tools-title">
                <BlockTitle id="tools-title" icon={Wrench}>
                  Tools You’ll Learn
                </BlockTitle>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {course.tools.map((tool) => (
                    <li
                      key={tool}
                      className={`inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-semibold text-navy ${course.tint}`}
                    >
                      <Wrench className={`h-4 w-4 ${course.accent}`} aria-hidden />
                      {tool}
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>
          )}

          {/* Curriculum */}
          {modules.length > 0 && (
            <Reveal direction="up">
              <section
                id="curriculum"
                aria-labelledby="curriculum-title"
                className="scroll-mt-24 sm:scroll-mt-28"
              >
                <BlockTitle id="curriculum-title" icon={Layers}>
                  Course Curriculum
                </BlockTitle>
                <p className="mt-3 text-sm text-muted-foreground">
                  Topics covered in {course.title}. Expand a topic to see what it includes.
                </p>
                <Accordion
                  type="single"
                  collapsible
                  defaultValue="topic-0"
                  className="mt-5 space-y-3"
                >
                  {modules.map((mod, i) => (
                    <AccordionItem
                      key={mod.title}
                      value={`topic-${i}`}
                      className="rounded-2xl border border-border bg-white px-4 shadow-sm transition-colors data-[state=open]:border-brand/40 data-[state=open]:bg-tint/50 sm:px-5"
                    >
                      <AccordionTrigger className="min-h-12 gap-3 py-3 text-sm font-semibold text-navy hover:no-underline sm:text-base">
                        <span className="flex min-w-0 items-center gap-3">
                          <span className="icon-circle h-8 w-8 bg-tint text-xs font-bold text-brand">
                            {i + 1}
                          </span>
                          <span className="min-w-0 break-words">{mod.title}</span>
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="pl-11 text-sm text-navy/80">
                        {mod.topics.length > 0 ? (
                          <>
                            <p className="text-xs font-semibold text-muted-foreground">
                              This topic includes
                            </p>
                            <ul className="mt-2 flex flex-wrap gap-2">
                              {mod.topics.map((topic) => (
                                <li key={topic} className="chip">
                                  {topic}
                                </li>
                              ))}
                            </ul>
                          </>
                        ) : (
                          <p>
                            Part of the {course.title} course.{" "}
                            <Link
                              to="/contact"
                              search={enquire}
                              className="font-semibold text-brand underline-offset-2 hover:underline"
                            >
                              Ask our team
                            </Link>{" "}
                            for the detailed lesson plan.
                          </p>
                        )}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>
            </Reveal>
          )}

          {/* Practical work + outcomes */}
          {course.outcomes.length > 0 ||
            ((course.practical?.length ?? 0) > 0 && (
              <Reveal direction="up">
                <section aria-labelledby="outcomes-title">
                  <BlockTitle id="outcomes-title" icon={GraduationCap}>
                    Practical Work &amp; Learning Outcomes
                  </BlockTitle>
                  <div
                    className={`mt-5 grid gap-4 ${course.practical && course.practical.length > 0 ? "md:grid-cols-2" : ""}`}
                  >
                    {course.practical && course.practical.length > 0 && (
                      <div className={`rounded-3xl p-5 sm:p-6 ${course.tint}`}>
                        <h3 className="flex items-center gap-2 text-base font-bold text-navy">
                          <FolderKanban className={`h-5 w-5 ${course.accent}`} aria-hidden />
                          Practical work
                        </h3>
                        <ul className="mt-3 space-y-2.5">
                          {course.practical.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-3 text-sm font-medium text-navy"
                            >
                              <CheckCircle2
                                className="mt-0.5 h-5 w-5 shrink-0 text-brand"
                                aria-hidden
                              />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <div className="rounded-3xl border border-border bg-white p-5 shadow-sm sm:p-6">
                      <h3 className="flex items-center gap-2 text-base font-bold text-navy">
                        <Target className="h-5 w-5 text-brand" aria-hidden />
                        By the end you can
                      </h3>
                      <ul className="mt-3 space-y-2.5">
                        {course.outcomes.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 text-sm font-medium text-navy"
                          >
                            <CheckCircle2
                              className="mt-0.5 h-5 w-5 shrink-0 text-brand"
                              aria-hidden
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </section>
              </Reveal>
            ))}
        </div>

        {/* Course information: sticky sidebar on desktop, a normal section on mobile */}
        <aside aria-labelledby="info-title" className="min-w-0 lg:sticky lg:top-28 lg:self-start">
          <Reveal direction="up">
            <div className="rounded-3xl border border-border bg-white p-5 shadow-lg shadow-navy/5 sm:p-6">
              <h2 id="info-title" className="text-lg font-extrabold text-navy">
                Course Information
              </h2>
              <dl className="mt-4 space-y-4">
                {category && <InfoRow icon={Layers} label="Category" value={category.label} />}
                {course.level && (
                  <InfoRow icon={GraduationCap} label="Skill level" value={course.level} />
                )}
                {course.duration ? (
                  <InfoRow icon={Clock} label="Duration" value={course.duration} />
                ) : (
                  <InfoRow
                    icon={Clock}
                    label="Duration, batches & fees"
                    value="Please contact us for current details"
                  />
                )}
                {course.mode && (
                  <InfoRow icon={Monitor} label="Learning mode" value={course.mode} />
                )}
                {course.prerequisites && (
                  <InfoRow
                    icon={BookOpenCheck}
                    label="Prerequisites"
                    value={course.prerequisites}
                  />
                )}
                {course.certification && (
                  <InfoRow icon={Award} label="Certification" value={course.certification} />
                )}
                <InfoRow icon={MapPin} label="Location" value="Bhandup West, Mumbai" />
                <InfoRow icon={Clock} label="Institute timings" value={CONTACT.hours} />
              </dl>

              {course.who.length > 0 && (
                <div className="mt-5 border-t border-border pt-4">
                  <h3 className="flex items-center gap-2 text-sm font-bold text-navy">
                    <Users className="h-4 w-4 text-brand" aria-hidden />
                    Who can join
                  </h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {course.who.map((who) => (
                      <li key={who} className="chip">
                        {who}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-5 flex flex-col gap-2.5">
                <Link to="/contact" search={enquire} className="btn-primary w-full">
                  Enquire Now
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
                <a
                  href={CONTACT.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-navy/15 px-6 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-tint"
                >
                  <Phone className="h-4 w-4" aria-hidden />
                  {CONTACT.phoneDisplay}
                </a>
              </div>
            </div>
          </Reveal>
        </aside>
      </div>

      <FaqSection
        id="course-faq"
        title="Frequently Asked Questions"
        intro={`Answers about ${course.title}. Anything else? Our team is happy to help.`}
        items={faqs}
      />

      <CtaBand
        course={course.title}
        title={
          <>
            Ready to start <span className="text-brand-glow">{course.title}?</span>
          </>
        }
        text="Send an enquiry and our team will share the course details, batch timings and fees."
        primaryLabel="Enquire Now"
      />
    </>
  );
}
