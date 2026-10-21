CREATE TABLE public.enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  mobile text NOT NULL,
  course text NOT NULL,
  message text,
  created_at timestamptz NOT NULL DEFAULT now()
);

-- Submissions are written only through server code with the service role,
-- and read by the owner from the Cloud dashboard. No anon/authenticated
-- grants or policies: anonymous visitors can never read, update or delete rows.
GRANT ALL ON public.enquiries TO service_role;

ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;