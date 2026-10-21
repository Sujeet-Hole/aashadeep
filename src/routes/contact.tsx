// Contact page: Google Map, contact info cards and the enquiry form.
// Form submissions are validated client- and server-side and stored in the
// enquiries table via the submitEnquiry server function.

import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  Phone,
  type LucideIcon,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CONTACT } from "@/data/site";
import { COURSES } from "@/data/courses";
import { enquirySchema, submitEnquiry } from "@/lib/enquiry.functions";

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>) => ({
    course: typeof search.course === "string" ? search.course : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Contact Us — Ashadeep Computer Institute" },
      {
        name: "description",
        content:
          "Visit Ashadeep Computer Institute in Bhandup West, Mumbai. Call +91 98765 43210 or send an enquiry about any of our computer courses.",
      },
      { property: "og:title", content: "Contact Us — Ashadeep Computer Institute" },
      {
        property: "og:description",
        content:
          "Visit us in Bhandup West, Mumbai — Mon to Sat, 9:00 AM to 8:00 PM. Send your course enquiry today.",
      },
      { property: "og:url", content: "/contact" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const INFO: { icon: LucideIcon; label: string; value: string; href?: string }[] = [
  { icon: MapPin, label: "Visit Us", value: CONTACT.address },
  { icon: Phone, label: "Call Us", value: CONTACT.phoneDisplay, href: CONTACT.phoneHref },
  { icon: Clock, label: "Our Timings", value: CONTACT.hours },
  { icon: Mail, label: "Email Us", value: CONTACT.email, href: CONTACT.emailHref },
];

interface FormState {
  name: string;
  mobile: string;
  course: string;
  message: string;
}

function ContactPage() {
  const { course: preselected } = Route.useSearch();
  const preselectedTitle =
    COURSES.find((c) => c.title === preselected || c.slug === preselected)?.title ?? "";

  const [form, setForm] = useState<FormState>({
    name: "",
    mobile: "",
    course: preselectedTitle,
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");
  const [formError, setFormError] = useState("");

  const setField = (field: keyof FormState, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    setErrors((e) => ({ ...e, [field]: "" }));
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormError("");

    // Client-side validation (the server validates again on its side).
    const parsed = enquirySchema.safeParse(form);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0] ?? "form");
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    setStatus("sending");
    const result = await submitEnquiry({ data: parsed.data });
    if (result.ok) {
      setStatus("success");
    } else {
      setStatus("idle");
      setFormError(result.error ?? "Something went wrong. Please try again.");
    }
  }

  return (
    <>
      <PageHero title="Contact Us" crumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]} />

      <section className="container-site grid gap-10 py-12 sm:py-16 lg:grid-cols-2">
        {/* ---- Map + contact info ---- */}
        <div>
          <Reveal>
            <iframe
              title="Map showing the location of Ashadeep Computer Institute in Bhandup West, Mumbai"
              src={CONTACT.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-72 w-full rounded-3xl border-0 shadow-lg shadow-navy/10 sm:h-80"
              allowFullScreen
            />
          </Reveal>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {INFO.map((item, i) => (
              <Reveal key={item.label} delay={i * 60}>
                <div className="flex items-start gap-3 rounded-2xl bg-tint p-4 sm:p-5">
                  <span className="icon-circle bg-brand text-primary-foreground">
                    <item.icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-navy">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="mt-0.5 block break-words text-xs text-navy/75 underline-offset-2 hover:text-brand hover:underline sm:text-sm"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-0.5 break-words text-xs text-navy/75 sm:text-sm">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ---- Enquiry form ---- */}
        <Reveal delay={100}>
          <div className="rounded-3xl border border-border bg-white p-6 shadow-xl shadow-navy/10 sm:p-8">
            {status === "success" ? (
              <div className="flex flex-col items-center py-10 text-center">
                <span className="icon-circle h-16 w-16 bg-tint text-brand">
                  <CheckCircle2 className="h-8 w-8" aria-hidden />
                </span>
                <h3 className="mt-4 text-xl font-extrabold text-navy sm:text-2xl">
                  Enquiry Sent Successfully!
                </h3>
                <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                  Thank you for reaching out to Ashadeep Computer Institute. Our team will contact
                  you soon with the course details.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setStatus("idle");
                    setForm({ name: "", mobile: "", course: "", message: "" });
                  }}
                  className="btn-primary mt-6"
                >
                  Send Another Enquiry
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <h3 className="text-xl font-extrabold text-navy sm:text-2xl">Enquire Now</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Fill in your details and we will get back to you.
                </p>

                <div className="mt-6 space-y-4">
                  <div>
                    <label htmlFor="name" className="form-label">
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={form.name}
                      onChange={(e) => setField("name", e.target.value)}
                      placeholder="Enter your full name"
                      className="form-input"
                      maxLength={100}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs font-medium text-destructive">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="mobile" className="form-label">
                      Mobile Number
                    </label>
                    <input
                      id="mobile"
                      type="tel"
                      inputMode="numeric"
                      value={form.mobile}
                      onChange={(e) => setField("mobile", e.target.value)}
                      placeholder="10-digit mobile number"
                      className="form-input"
                      maxLength={14}
                    />
                    {errors.mobile && (
                      <p className="mt-1 text-xs font-medium text-destructive">{errors.mobile}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="course" className="form-label">
                      Select Course
                    </label>
                    <select
                      id="course"
                      value={form.course}
                      onChange={(e) => setField("course", e.target.value)}
                      className="form-input"
                    >
                      <option value="">Select a course</option>
                      {COURSES.map((c) => (
                        <option key={c.slug} value={c.title}>
                          {c.title}
                        </option>
                      ))}
                    </select>
                    {errors.course && (
                      <p className="mt-1 text-xs font-medium text-destructive">{errors.course}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="form-label">
                      Your Message <span className="font-normal text-muted-foreground">(optional)</span>
                    </label>
                    <textarea
                      id="message"
                      value={form.message}
                      onChange={(e) => setField("message", e.target.value)}
                      placeholder="Tell us what you would like to learn..."
                      rows={4}
                      className="form-input resize-none"
                      maxLength={1000}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs font-medium text-destructive">{errors.message}</p>
                    )}
                  </div>
                </div>

                {formError && (
                  <p className="mt-4 rounded-xl bg-destructive/10 px-4 py-3 text-sm font-medium text-destructive">
                    {formError}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-primary mt-6 w-full justify-center disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === "sending" ? "Sending..." : "Send Enquiry"}
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </section>
    </>
  );
}
