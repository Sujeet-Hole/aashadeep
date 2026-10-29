// Navy page-title bar with breadcrumb, used at the top of every inner page.
// Optional `children` (e.g. buttons) and `aside` (a visual on wide screens) extend it.

import type { CSSProperties, ReactNode } from "react";
import { Breadcrumb, type Crumb } from "@/components/Breadcrumb";

export type { Crumb };

interface PageHeroProps {
  title: string;
  subtitle?: string;
  crumbs: Crumb[];
  children?: ReactNode;
  aside?: ReactNode;
}

export function PageHero({ title, subtitle, crumbs, children, aside }: PageHeroProps) {
  return (
    <section className="bg-navy text-white">
      <div
        className={`container-site py-8 sm:py-12 ${aside ? "grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_auto]" : ""}`}
      >
        <div className="min-w-0">
          <div className="anim-slide-left">
            <Breadcrumb crumbs={crumbs} />
          </div>
          <h1
            className="page-title anim-rise mt-3"
            style={{ "--anim-delay": "120ms" } as CSSProperties}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              className="anim-rise mt-2 max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base"
              style={{ "--anim-delay": "240ms" } as CSSProperties}
            >
              {subtitle}
            </p>
          )}
          {children && (
            <div
              className="anim-rise mt-6 flex flex-col gap-3 sm:flex-row"
              style={{ "--anim-delay": "360ms" } as CSSProperties}
            >
              {children}
            </div>
          )}
        </div>
        {aside}
      </div>
    </section>
  );
}
