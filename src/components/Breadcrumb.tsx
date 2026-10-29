// Accessible breadcrumb trail (ordered list, current page marked) for navy page headers.

import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import type { AppRoute } from "@/data/site";

export interface Crumb {
  label: string;
  to?: AppRoute;
}

export function Breadcrumb({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-x-1 gap-y-0.5 text-xs sm:text-sm">
        {crumbs.map((crumb, i) => (
          <li key={`${crumb.label}-${i}`} className="flex min-w-0 items-center gap-1">
            {i > 0 && <ChevronRight className="h-3.5 w-3.5 shrink-0 text-white/40" aria-hidden />}
            {crumb.to ? (
              <Link to={crumb.to} className="font-semibold text-brand-glow hover:underline">
                {crumb.label}
              </Link>
            ) : (
              <span aria-current="page" className="min-w-0 break-words text-white/85">
                {crumb.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
