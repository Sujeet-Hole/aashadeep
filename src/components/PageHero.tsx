// Navy page-title bar with breadcrumb, used at the top of every inner page.

import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import type { AppRoute } from "@/data/site";

export interface Crumb {
  label: string;
  to?: AppRoute;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  crumbs: Crumb[];
}

export function PageHero({ title, subtitle, crumbs }: PageHeroProps) {
  return (
    <section className="bg-navy text-white">
      <div className="container-site py-10 sm:py-14">
        <div className="anim-slide-left">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1 text-xs sm:text-sm">
            {crumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1">
                {i > 0 && <ChevronRight className="h-3.5 w-3.5 text-white/40" aria-hidden />}
                {crumb.to ? (
                  <Link to={crumb.to} className="font-semibold text-brand-glow hover:underline">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white/85">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        </div>
        <h1
          className="anim-rise mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl"
          style={{ "--anim-delay": "120ms" } as React.CSSProperties}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className="anim-rise mt-2 max-w-2xl text-sm text-white/75 sm:text-base"
            style={{ "--anim-delay": "240ms" } as React.CSSProperties}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
