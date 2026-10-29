// Gallery page: filter tabs, uniform photo grid and a simple lightbox.
// Every photo shares the same 4:3 frame so the grid stays perfectly even.

import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { X } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal, type RevealDirection } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { GALLERY, GALLERY_FILTERS, type GalleryPhoto } from "@/data/site";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Ashadeep Computer Institute" },
      {
        name: "description",
        content:
          "Photo gallery of Ashadeep Computer Institute: classrooms, student activities, certificate ceremonies and life at our Bhandup West campus.",
      },
      { property: "og:title", content: "Gallery — Ashadeep Computer Institute" },
      {
        property: "og:description",
        content:
          "Photos from our classrooms, activities and student moments in Bhandup West, Mumbai.",
      },
      { property: "og:url", content: "/gallery" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

/** Photos alternate their entrance side for a lively scroll rhythm. */
const DIRECTIONS: RevealDirection[] = ["left", "up", "right", "zoom"];

/** Safe pick from DIRECTIONS for any index. */
const directionFor = (i: number) => DIRECTIONS[i % DIRECTIONS.length] ?? "up";

function GalleryPage() {
  const [filter, setFilter] = useState<(typeof GALLERY_FILTERS)[number]>("All");
  const [lightbox, setLightbox] = useState<GalleryPhoto | null>(null);

  // Escape closes the lightbox
  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setLightbox(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  const photos = filter === "All" ? GALLERY : GALLERY.filter((p) => p.category === filter);

  return (
    <>
      <PageHero
        title="Gallery"
        subtitle="Moments from our classrooms, activities and student celebrations."
        crumbs={[{ label: "Home", to: "/" }, { label: "Gallery" }]}
      />

      <section className="container-site section-y">
        {/* Filter tabs */}
        <Reveal direction="left">
          <div
            className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0"
            role="tablist"
            aria-label="Gallery filters"
          >
            {GALLERY_FILTERS.map((tab) => (
              <button
                key={tab}
                type="button"
                role="tab"
                aria-selected={filter === tab}
                onClick={() => setFilter(tab)}
                className={`min-h-11 shrink-0 rounded-full px-5 text-sm font-semibold transition-all ${
                  filter === tab
                    ? "bg-brand text-primary-foreground shadow-lg shadow-brand/25"
                    : "bg-tint text-navy hover:bg-brand/15"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Photo grid — every photo uses the same 4:3 frame */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {photos.map((photo, i) => (
            <Reveal key={photo.src} delay={(i % 4) * 60} direction={directionFor(i)}>
              <button
                type="button"
                onClick={() => setLightbox(photo)}
                aria-label={`View photo: ${photo.alt}`}
                className="group block aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </button>
            </Reveal>
          ))}
        </div>

        <Reveal direction="up">
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-10 w-full justify-center sm:w-auto"
          >
            View More Photos
          </a>
        </Reveal>
      </section>

      <CtaBand
        title={
          <>
            Be part of our next <span className="text-brand-glow">batch.</span>
          </>
        }
        text="See our classrooms in person. Visit the institute or send an enquiry."
      />

      {/* Lightbox */}
      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.alt}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            aria-label="Close photo view"
            onClick={() => setLightbox(null)}
            className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/30"
          >
            <X className="h-6 w-6" aria-hidden />
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="max-h-[85vh] max-w-full rounded-2xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
