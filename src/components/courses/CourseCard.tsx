// Course card shared by Home, Courses and category views.
// Every course image is the same size and shape (1200x1140), so all cards line up.
// The whole card is clickable through one stretched link (no nested links); the course title
// is already printed on the picture, so the heading is kept for screen readers only.

import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SafeImage } from "@/components/SafeImage";
import { getCategory, type Course } from "@/data/courses";

export function CourseCard({ course }: { course: Course }) {
  const Icon = course.icon;
  const category = getCategory(course.category);

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-brand has-[:focus-visible]:ring-offset-2">
      <div className="p-3 pb-0">
        <div
          className={`relative aspect-[1200/1140] w-full overflow-hidden rounded-2xl ${course.tint}`}
        >
          {/* Icon sits behind the picture so the card still looks finished if the picture is slow */}
          <span className="absolute inset-0 flex items-center justify-center" aria-hidden>
            <Icon className={`h-14 w-14 opacity-50 ${course.accent}`} />
          </span>
          <SafeImage
            src={course.image}
            alt={course.imageAlt}
            width={1200}
            height={1140}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 pt-4">
        {category && (
          <span className="self-start rounded-full bg-tint px-2.5 py-1 text-[11px] font-semibold text-navy/80">
            {category.label}
          </span>
        )}
        <h3 className="sr-only">{course.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {course.description}
        </p>

        {course.skills.length > 0 && (
          <ul className="mt-3 flex flex-wrap gap-1.5" aria-label={`${course.title} skills`}>
            {course.skills.slice(0, 3).map((skill) => (
              <li key={skill} className="chip !px-2.5 !py-0.5 !text-[11px]">
                {skill}
              </li>
            ))}
          </ul>
        )}

        <span className="mt-auto flex items-center justify-between pt-5 text-sm font-semibold text-brand">
          <Link
            to="/courses/$slug"
            params={{ slug: course.slug }}
            className="outline-none after:absolute after:inset-0 after:content-['']"
          >
            Explore Course
            <span className="sr-only">: {course.title}</span>
          </Link>
          <span
            aria-hidden
            className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand text-primary-foreground shadow-md transition-transform duration-200 group-hover:translate-x-0.5 group-hover:scale-105"
          >
            <ArrowRight className="h-4 w-4" />
          </span>
        </span>
      </div>
    </article>
  );
}
