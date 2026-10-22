<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

<!-- LOVABLE:BEGIN (agent notes) -->
## Project rules
- Course content (catalogue, what-you-learn, who-can-join) lives in `src/data/courses.ts`; the course list page and every course detail page render from that one file — add or edit courses there, never in route files.
- Contact-form enquiries are written by the `submitEnquiry` server function (`src/lib/enquiry.functions.ts`) into `public.enquiries` with service-role credentials only; the table has no anon/authenticated grants so anonymous visitors can never read submissions. Add owner email notification only after a sender domain is verified.
