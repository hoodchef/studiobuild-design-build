# StudioBuild Design + Build Website

Production-ready Next.js website for StudioBuild, including full brand copy, service pages, process pages, portfolio structure, lead generation flow, social content resources, and Lower Mainland local SEO infrastructure.

## Stack
- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build + Validate

```bash
npm run lint
npm run build
```

## Environment Setup
Copy `.env.example` to `.env.local` and fill values:

```bash
cp .env.example .env.local
```

### Analytics
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`
- Enables Google Analytics 4 pageview and conversion event tracking.
- `GOOGLE_SITE_VERIFICATION`
- `BING_SITE_VERIFICATION`

### Inquiry Delivery (Optional, can use one or multiple)
- `RESEND_API_KEY`, `INQUIRY_FROM_EMAIL`, `INQUIRY_TO_EMAIL`
- `HUBSPOT_ACCESS_TOKEN`
- `INQUIRY_WEBHOOK_URL`

Inquiry submissions are sent to any configured channels in parallel.

## Conversion Tracking Implemented
- Header/nav clicks
- CTA band button clicks
- Contact form submit attempts
- Successful lead submissions (`generate_lead`)
- Pageview tracking via route changes

## Lead Form Hardening
- Honeypot bot field
- Required field validation
- Email format validation
- Per-IP rate limiting

## Key Routes
- `/` Home
- `/about`
- `/services`
- `/services/custom-decks`
- `/services/renovations`
- `/services/custom-homes`
- `/services/design-build`
- `/services/project-management-permits`
- `/process`
- `/portfolio`
- `/testimonials`
- `/faq`
- `/contact`
- `/areas` + municipality pages

## Deliverables File
Full strategy/copy system is stored at:
- `deliverables/studiobuild-complete-deliverables.md`

## Production Notes
- Security headers are configured in `next.config.ts`
- `sitemap.xml` and `robots.txt` are generated from App Router metadata routes
- Organization schema is injected in `src/app/layout.tsx`

## Local SEO Launch Checklist
- Create/claim Google Business Profile for `StudioBuild Design + Build`.
- Add consistent NAP: phone `778-903-7744`, email `hello@studiobuild.ca`, service area = Lower Mainland BC.
- Verify site in Google Search Console and Bing Webmaster Tools.
- Add `GOOGLE_SITE_VERIFICATION` and `BING_SITE_VERIFICATION` in Vercel env vars.
- Submit sitemap: `https://www.studiobuild.ca/sitemap.xml`.
