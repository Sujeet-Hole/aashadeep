// Sticky global header: ACI logo, desktop navigation, mobile hamburger menu.

import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/data/site";
import logo from "@/assets/aci-logo.png";

export function Header() {
  const [open, setOpen] = useState(false);

  // Escape closes the mobile menu; it also closes if the window grows to the desktop layout.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 shadow-sm backdrop-blur">
      <div className="container-site flex h-16 items-center justify-between gap-3 sm:h-24">
        {/* Logo + institute name */}
        <Link to="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src={logo}
            alt="Ashadeep Computer Institute logo"
            width={256}
            height={256}
            className="h-12 w-12 shrink-0 rounded-full object-cover shadow-md ring-2 ring-tint sm:h-16 sm:w-16"
          />
          <span className="min-w-0 leading-tight">
            <span className="block truncate text-base font-extrabold tracking-wide text-navy sm:text-xl">
              ASHADEEP
            </span>
            <span className="block truncate text-[10px] font-bold tracking-[0.16em] text-brand sm:text-xs">
              COMPUTER INSTITUTE
            </span>
            <span className="hidden text-[11px] text-muted-foreground sm:block">
              Learn Today. Build Your Future.
            </span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav aria-label="Main navigation" className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
              className="rounded-full px-3.5 py-2 text-sm font-semibold text-navy transition-colors hover:bg-tint hover:text-brand"
              activeProps={{ className: "bg-tint text-brand" }}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact" search={{ course: "" }} className="btn-primary ml-2 !px-5 !py-2.5">
            Enquire Now
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-navy transition-colors hover:bg-tint lg:hidden"
        >
          {open ? <X className="h-6 w-6" aria-hidden /> : <Menu className="h-6 w-6" aria-hidden />}
        </button>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile navigation"
          className="max-h-[calc(100svh-4rem)] overflow-y-auto border-t border-border bg-white px-4 pb-5 pt-3 shadow-lg sm:max-h-[calc(100svh-6rem)] lg:hidden"
        >
          <ul className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3.5 text-sm font-semibold text-navy transition-colors hover:bg-tint hover:text-brand"
                  activeProps={{ className: "bg-tint text-brand" }}
                  activeOptions={{ exact: link.to === "/" }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            search={{ course: "" }}
            onClick={() => setOpen(false)}
            className="btn-primary mt-3 w-full sm:w-auto"
          >
            Enquire Now
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </nav>
      )}
    </header>
  );
}
