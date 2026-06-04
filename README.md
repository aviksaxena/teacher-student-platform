# Aptolix Classroom

Production-oriented teacher–student management built with Next.js 16, React 19, Supabase, and Resend. Authentication is passwordless and uses Supabase Magic Links only.

## Features

- Teacher and student role-based dashboards
- Secure Magic Link authentication with SSR session refresh
- Student invitations, automatic acceptance, revocation, and removal
- Supabase PostgreSQL Row Level Security and transactional RPC functions
- Pluggable repository, authentication, email, and notification providers
- Responsive light/dark SaaS interface

## Installation

```bash
git clone <repository-url>
cd teacher-student-module-aptolix-
npm install
cp .env.example .env.local
```

## Environment setup

Set all values from `.env.example`. `NEXT_PUBLIC_SUPABASE_ANON_KEY` is safe for browser/SSR use with RLS. Never add a Supabase service-role key to this application.

## Supabase setup

1. Create a Supabase project.
2. Run `supabase/migrations/202606040001_initial_schema.sql` in the SQL editor or with `supabase db push`.
3. In **Authentication → URL Configuration**, set the Site URL to `NEXT_PUBLIC_APP_URL` and add `http://localhost:3000/auth/callback` plus the deployed callback URL as redirects.
4. In **Authentication → Providers → Email**, enable email and disable password-based flows for the product UI. Configure the Magic Link email template as desired.
5. Copy the project URL and anonymous key into `.env.local`.

## Resend setup

1. Verify a sending domain in Resend.
2. Set `RESEND_API_KEY` and `RESEND_FROM_EMAIL`.
3. Invitations use the responsive branded template in `src/emails/templates.ts`.

## Local development

```bash
npm run dev
```

Open `http://localhost:3000`. Run quality checks with:

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

## Security

The app validates sessions server-side with `auth.getUser()`, refreshes sessions in `src/proxy.ts`, protects role routes with server layouts, validates inputs with Zod, verifies mutation origins, rate-limits public actions, and relies on RLS for data authorization. The in-memory rate limiter is suitable for basic abuse control; for multi-region high-volume deployments, replace it with a durable provider such as Vercel KV through the provider layer.

## Deployment

1. Import the repository into Vercel.
2. Add every `.env.example` variable using production values.
3. Set `NEXT_PUBLIC_APP_URL` to the canonical HTTPS deployment URL.
4. Add the production `/auth/callback` URL to Supabase Auth redirects.
5. Deploy. Vercel automatically selects the Next.js build preset; `vercel.json` pins the application region.
