import Link from "next/link";

import { PageHero } from "@/components/ui/page-hero";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Lead System",
  description: "Internal StudioBuild lead generation system documentation.",
  path: "/resources/lead-system",
  noindex: true,
});

const formFields = [
  "Full name",
  "Email",
  "Phone",
  "Project address",
  "Municipality",
  "Project type",
  "Project description",
  "Desired start window",
  "Budget range",
  "Do you already have plans?",
  "Permit status",
  "Best time for consultation",
  "How did you hear about us?",
];

const templates = [
  {
    title: "New inquiry confirmation",
    body: "Hi [First Name], Thanks for reaching out to StudioBuild Design + Build. We have received your project details and will review them shortly. If your project is a fit, we will send available times for a 15-minute consultation and outline the next step. Regards, Caleb Stapelmann",
  },
  {
    title: "Consultation follow-up",
    body: "Hi [First Name], Thanks for the call today. Based on our discussion, the recommended next step is [site visit/pre-construction scoping/design kickoff]. Your current priorities are: [priority 1], [priority 2], [priority 3]. We also flagged early considerations: [permits/budget/timing/material lead times]. Reply to confirm and we will schedule the next stage. Regards, Caleb Stapelmann",
  },
  {
    title: "Project acceptance / onboarding",
    body: "Hi [First Name], We are ready to move forward with your project. Your onboarding package includes project scope summary, communication cadence, preliminary schedule, and documentation checklist. Once signed approval is received, we will confirm kickoff dates and first milestones. Regards, Caleb Stapelmann",
  },
];

export default function LeadSystemPage() {
  return (
    <>
      <PageHero
        kicker="Internal Resource"
        title="Lead Generation System"
        subtitle="Qualification-focused intake flow, consultation copy, and automated templates."
      />

      <section className="border-b border-[var(--line)]">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-12 md:grid-cols-2 md:py-16">
          <article className="rounded-2xl border border-[var(--line)] bg-[var(--surface-strong)] p-6">
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--ink)]">Contact Form Fields</h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-sm leading-7 text-[var(--ink-soft)]">
              {formFields.map((field) => (
                <li key={field}>{field}</li>
              ))}
            </ul>
          </article>
          <article className="rounded-2xl border border-[var(--line)] bg-[var(--surface-strong)] p-6">
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--ink)]">Consultation Offer Copy</h2>
            <p className="mt-4 text-sm leading-7 text-[var(--ink-soft)]">
              Book a free 15-minute consultation to discuss scope, budget range,
              and timeline. We will tell you clearly whether your project is a
              fit, what the next step should be, and how to avoid common
              planning mistakes in the Lower Mainland.
            </p>
            <p className="mt-5 text-sm leading-7 text-[var(--ink-soft)]">
              Lead magnet: Lower Mainland Renovation Readiness Guide (2026)
              covering permit basics, realistic budget bands, sequencing
              checklist, and material lead-time planning.
            </p>
            <Link
              className="mt-5 inline-block font-[family-name:var(--font-label)] text-xs uppercase tracking-[0.15em] text-[var(--accent)]"
              href="/downloads/lower-mainland-renovation-readiness-guide.txt"
            >
              Download Lead Magnet
            </Link>
          </article>
        </div>
      </section>

      <section className="border-b border-[var(--line)]">
        <div className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--ink)]">Automated Emails</h2>
          <div className="mt-6 space-y-4">
            {templates.map((template) => (
              <article
                key={template.title}
                className="rounded-2xl border border-[var(--line)] bg-[var(--surface-strong)] p-6"
              >
                <h3 className="font-[family-name:var(--font-label)] text-xs uppercase tracking-[0.17em] text-[var(--ink)]">
                  {template.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--ink-soft)]">{template.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
