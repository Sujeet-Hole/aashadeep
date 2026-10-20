// Enquiry form submission: a public server function that validates input,
// rate-limits repeat submissions and stores each enquiry in the database.

import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

/** Shared (client + server) validation schema for the enquiry form. */
export const enquirySchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your full name")
    .max(100, "Name must be under 100 characters"),
  mobile: z
    .string()
    .trim()
    .regex(/^(\+91[\s-]?)?[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),
  course: z.string().trim().min(1, "Please select a course").max(120),
  message: z.string().trim().max(1000, "Message must be under 1000 characters").optional(),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;

export interface EnquiryResult {
  ok: boolean;
  error?: string;
}

export const submitEnquiry = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => enquirySchema.parse(data))
  .handler(async ({ data }): Promise<EnquiryResult> => {
    // Privileged write (anonymous visitors may not touch this table directly).
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    // Rate limit: max 5 enquiries per mobile number per 10 minutes.
    const since = new Date(Date.now() - 10 * 60 * 1000).toISOString();
    const { count } = await supabaseAdmin
      .from("enquiries")
      .select("id", { count: "exact", head: true })
      .eq("mobile", data.mobile)
      .gte("created_at", since);
    if ((count ?? 0) >= 5) {
      return {
        ok: false,
        error: "Too many enquiries from this number. Please call us instead.",
      };
    }

    const { error } = await supabaseAdmin.from("enquiries").insert({
      name: data.name,
      mobile: data.mobile,
      course: data.course,
      message: data.message ? data.message : null,
    });
    if (error) {
      console.error("Enquiry insert failed:", error.message);
      return {
        ok: false,
        error: "Could not send your enquiry right now. Please try again or call us.",
      };
    }
    return { ok: true };
  });
