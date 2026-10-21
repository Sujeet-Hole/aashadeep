// Testimonials page: auto-playing review slider with pagination dots.

import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { TESTIMONIALS } from "@/data/site";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — Ashadeep Computer Institute" },
      {
        name: "description",
        content:
          "Real stories from students of Ashadeep Computer Institute in Bhandup West, Mumbai — Advanced Excel, Python, Digital Marketing and Tally Prime learners share their progress.",
      },
      { property: "og:title", content: "What Our Students Say — Ashadeep Computer Institute" },
      {
        property: "og:description",
        content: "Real Stories. Real Progress. Hear from our students in Bhandup West, Mumbai.",
      },
      { property: "og:url", content: "/testimonials" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
  }),
  component: TestimonialsPage,
});

function Stars() {
  return (
    <div className="flex justify-center gap-1" aria-label="Rated 5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" aria-hidden />
      ))}
    </div>
  );
}

function TestimonialsPage() {
  const [index, setIndex] = useState(0);

  // Advance the slider every 5 seconds; loop back to the start.
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <PageHero
        title="What Our Students Say"
        subtitle="Real Stories. Real Progress."
        crumbs={[{ label: "Home", to: "/" }, { label: "Testimonials" }]}
      />

      <section className="container-site py-12 sm:py-16">
        <Reveal>
          <div className="overflow-hidden rounded-3xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {TESTIMONIALS.map((t) => (
                <div key={t.name} className="w-full shrink-0 px-1">
                  <figure className="mx-auto max-w-2xl rounded-3xl border border-border bg-white p-6 text-center shadow-lg shadow-navy/5 sm:p-10">
                    <Stars />
                    <blockquote className="mt-5 text-sm leading-relaxed text-navy/85 sm:text-base">
                      “{t.quote}”
                    </blockquote>
                    <figcaption className="mt-6 flex flex-col items-center gap-2">
                      <img
                        src={t.photo}
                        alt={`Portrait of ${t.name}`}
                        loading="lazy"
                        className="h-16 w-16 rounded-full object-cover ring-4 ring-tint"
                      />
                      <div>
                        <p className="font-bold text-navy">{t.name}</p>
                        <p className="text-xs text-muted-foreground sm:text-sm">{t.course}</p>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Pagination dots */}
        <div className="mt-6 flex justify-center gap-2">
          {TESTIMONIALS.map((t, i) => (
            <button
              key={t.name}
              type="button"
              aria-label={`Show testimonial ${i + 1} of ${TESTIMONIALS.length}`}
              aria-current={i === index}
              onClick={() => setIndex(i)}
              className={`h-2.5 rounded-full transition-all ${
                i === index ? "w-7 bg-brand" : "w-2.5 bg-navy/15 hover:bg-navy/30"
              }`}
            />
          ))}
        </div>
      </section>
    </>
  );
}
