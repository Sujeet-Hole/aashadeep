# Content to confirm

The redesign only shows facts that already exist in the project. These items need your input; each is a one-line edit in `src/data/courses.ts` or `src/data/site.ts`, and the site hides or words around them until you do.

## New courses added from your image PDF
Accounting & Office, Data Science, Machine Learning and Web Development are live with their picture and name only. Their pages hide the topics, skills and curriculum sections and invite visitors to enquire. For each, please send: a one-line description, the topics (`learn`), who can join (`who`), skills and outcomes. Add them in `src/data/courses.ts` and the pages fill in automatically.
"Accounting & Office" is also the name of an existing filter group; rename one of them if the two feel repetitive.

## Course pictures
All 12 course pictures are 1200x1140 (same size and shape) in `src/assets/courses/`. Data Science, Machine Learning, Web Development and Business Analysis were shorter in your PDF, so extra background space was added between the artwork and the title to match the others (nothing was stretched).

## Per course (`src/data/courses.ts`, all optional and hidden until set)
`duration`, `mode` (classroom / online), `level`, `prerequisites`, `certification`. Optionally add `tools` / `practical` where a course has them (Cybersecurity and Business Analysis list no tools; Excel and Tally list no practical work).
Until then, FAQ answers for duration, fees, prerequisites and certificates say "please contact us".

## Curriculum
Accordion topics are the existing "What you will learn" items. Sub-topics appear only where the title already contains them. Send the real lesson-level syllabus and it can replace `getCourseModules()`.

## Site-wide (`src/data/site.ts`, footer, about page)
- Phone `+91 98765 43210`, email and WhatsApp number look like placeholders. Please confirm.
- Instagram, YouTube and Facebook footer icons still link to `#`. Add URLs in `SOCIALS` in `components/Footer.tsx`.
- About page says "20+ Courses Available", but the catalogue has 8. Also confirm "5000+ students" and "95% satisfaction".
- Which courses are "Featured" (`featured: true`) and how courses are grouped into categories (`CATEGORIES`) are my suggestions; change freely.
- Footer copyright now uses the current year (was fixed at 2024).
- The logo is served from Lovable's `/__l5e/` asset path, so it only appears on the Lovable-hosted site, not in a local dev run.
