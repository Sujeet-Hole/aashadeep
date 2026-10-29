// FAQ accordion built on the existing Radix accordion: keyboard accessible, touch-sized triggers.

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { Faq } from "@/data/courses";

export function FaqList({ items }: { items: Faq[] }) {
  return (
    <Accordion type="single" collapsible className="space-y-3">
      {items.map((item, i) => (
        <AccordionItem
          key={item.q}
          value={`faq-${i}`}
          className="rounded-2xl border border-border bg-white px-4 shadow-sm transition-colors data-[state=open]:border-brand/40 data-[state=open]:bg-tint/50 sm:px-5"
        >
          <AccordionTrigger className="min-h-12 gap-3 py-3.5 text-sm font-semibold text-navy hover:no-underline sm:text-base">
            {item.q}
          </AccordionTrigger>
          <AccordionContent className="text-sm leading-relaxed text-navy/80 sm:text-base">
            {item.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

/** Two-column FAQ section: heading on the left, questions on the right (stacked on mobile). */
export function FaqSection({
  title = "Frequently Asked Questions",
  intro,
  items,
  id,
}: {
  title?: string;
  intro?: string;
  items: Faq[];
  id?: string;
}) {
  return (
    <section id={id} aria-labelledby={`${id ?? "faq"}-title`} className="container-site section-y">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,18rem)_minmax(0,1fr)] lg:gap-12">
        <div>
          <h2 id={`${id ?? "faq"}-title`} className="section-title">
            {title}
          </h2>
          {intro && (
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {intro}
            </p>
          )}
        </div>
        <FaqList items={items} />
      </div>
    </section>
  );
}
