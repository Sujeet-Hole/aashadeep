// About Us page: classroom photo, story, stats card and "Why Choose Us" list.

import { createFileRoute } from "@tanstack/react-router";
import {
  Award,
  BadgeCheck,
  BookOpen,
  GraduationCap,
  HeartHandshake,
  Laptop,
  Target,
  ThumbsUp,
  Users,
  type LucideIcon,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { IMAGES } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Ashadeep Computer Institute" },
      {
        name: "description",
        content:
          "Empowering students through computer education for 15 years. 5000+ students trained, 20+ courses, official MKCL partner in Bhandup West, Mumbai.",
      },
      { property: "og:title", content: "About Us — Ashadeep Computer Institute" },
      {
        property: "og:description",
        content:
          "Empowering students through computer education for 15 years in Bhandup West, Mumbai.",
      },
      { property: "og:url", content: "/about" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const STATS: { icon: LucideIcon; value: string; label: string }[] = [
  { icon: GraduationCap, value: "5000+", label: "Students Trained" },
  { icon: Award, value: "15+", label: "Years of Experience" },
  { icon: BookOpen, value: "20+", label: "Courses Available" },
  { icon: ThumbsUp, value: "95%", label: "Student Satisfaction" },
];

const WHY_US: { icon: LucideIcon; label: string }[] = [
  { icon: Award, label: "15 Years of Experience" },
  { icon: BadgeCheck, label: "Official MKCL Partnership" },
  { icon: Users, label: "Expert Teachers and Trainers" },
  { icon: Laptop, label: "Practical Skill-Based Learning" },
  { icon: Target, label: "Career-Oriented Training Programs" },
  { icon: HeartHandshake, label: "Supportive Learning Environment" },
];

function AboutPage() {
  return (
    <>
      <PageHero title="About Us" crumbs={[{ label: "Home", to: "/" }, { label: "About Us" }]} />

      <section className="container-site py-12 sm:py-16">
        <Reveal>
          <img
            src={IMAGES.aboutClassroom}
            alt="Classroom full of students learning on computers at Ashadeep Computer Institute"
            loading="lazy"
            className="aspect-video w-full rounded-3xl object-cover shadow-xl shadow-navy/10"
          />
        </Reveal>

        <Reveal delay={100}>
          <h2 className="section-title mt-10 max-w-3xl">
            Empowering Students Through Computer Education for{" "}
            <span className="text-brand">15 Years</span>
          </h2>
        </Reveal>

        <Reveal delay={150}>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            At Ashadeep Computer Institute, we believe that the right skills can open doors to new
            opportunities. For the past 15 years, we have been helping students and aspiring
            professionals strengthen their computer knowledge and develop practical,
            career-oriented skills.
          </p>
        </Reveal>

        {/* Stats card */}
        <Reveal delay={200}>
          <div className="mt-10 grid grid-cols-2 gap-6 rounded-3xl bg-tint p-6 sm:p-10">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex items-center gap-4">
                <span className="icon-circle bg-white text-brand shadow-sm">
                  <stat.icon className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <p className="text-2xl font-extrabold text-brand sm:text-3xl">{stat.value}</p>
                  <p className="text-xs font-medium text-navy/80 sm:text-sm">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Why choose us */}
        <Reveal delay={100}>
          <h3 className="section-title mt-14">Why Choose Us?</h3>
        </Reveal>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {WHY_US.map((item, i) => (
            <Reveal key={item.label} delay={i * 60}>
              <div className="flex items-center gap-4 rounded-2xl border border-border bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg sm:p-5">
                <span className="icon-circle bg-tint text-brand">
                  <item.icon className="h-5 w-5" aria-hidden />
                </span>
                <p className="text-sm font-semibold text-navy sm:text-base">{item.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
