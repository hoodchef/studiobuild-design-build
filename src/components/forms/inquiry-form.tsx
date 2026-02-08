"use client";

import { FormEvent, useEffect, useState } from "react";

import { trackEvent } from "@/lib/tracking";

type InquiryPayload = {
  fullName: string;
  email: string;
  phone: string;
  projectAddress: string;
  municipality: string;
  projectType: string;
  projectDescription: string;
  desiredStartWindow: string;
  budgetRange: string;
  hasPlans: string;
  permitStatus: string;
  consultationTime: string;
  referralSource: string;
  companyWebsite: string;
  sourcePage: string;
};

const initialForm: InquiryPayload = {
  fullName: "",
  email: "",
  phone: "",
  projectAddress: "",
  municipality: "",
  projectType: "",
  projectDescription: "",
  desiredStartWindow: "",
  budgetRange: "",
  hasPlans: "",
  permitStatus: "",
  consultationTime: "",
  referralSource: "",
  companyWebsite: "",
  sourcePage: "",
};

export function InquiryForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<string>("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    setForm((current) => ({ ...current, sourcePage: window.location.pathname }));
  }, []);

  const setField = (name: keyof InquiryPayload, value: string) => {
    setForm((current) => ({ ...current, [name]: value }));
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setStatus("Submitting your project details...");

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = (await response.json()) as { message?: string; error?: string };

      if (!response.ok) {
        setStatus(result.error ?? "We could not submit your inquiry right now.");
        return;
      }

      setStatus(
        result.message ??
          "Inquiry received. We will review your details and follow up shortly."
      );
      trackEvent("generate_lead", {
        lead_type: "consultation_request",
        service: form.projectType,
        municipality: form.municipality,
        budget_range: form.budgetRange,
      });
      setForm({
        ...initialForm,
        sourcePage: window.location.pathname,
      });
    } catch {
      setStatus("Network issue while submitting. Please try again or email hello@studiobuild.ca.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-[var(--line)] bg-[var(--surface-strong)] p-6 md:p-8">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-sm text-[var(--ink-soft)]">
          Full name
          <input
            required
            value={form.fullName}
            onChange={(event) => setField("fullName", event.target.value)}
            className="mt-2 w-full rounded-xl border border-[var(--line)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--ink)]"
          />
        </label>
        <label className="text-sm text-[var(--ink-soft)]">
          Email
          <input
            required
            type="email"
            value={form.email}
            onChange={(event) => setField("email", event.target.value)}
            className="mt-2 w-full rounded-xl border border-[var(--line)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--ink)]"
          />
        </label>
        <label className="text-sm text-[var(--ink-soft)]">
          Phone
          <input
            required
            value={form.phone}
            onChange={(event) => setField("phone", event.target.value)}
            className="mt-2 w-full rounded-xl border border-[var(--line)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--ink)]"
          />
        </label>
        <label className="text-sm text-[var(--ink-soft)]">
          Project address
          <input
            value={form.projectAddress}
            onChange={(event) => setField("projectAddress", event.target.value)}
            className="mt-2 w-full rounded-xl border border-[var(--line)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--ink)]"
          />
        </label>
        <label className="text-sm text-[var(--ink-soft)]">
          Municipality
          <input
            required
            value={form.municipality}
            onChange={(event) => setField("municipality", event.target.value)}
            placeholder="Example: North Vancouver"
            className="mt-2 w-full rounded-xl border border-[var(--line)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--ink)]"
          />
        </label>
        <label className="text-sm text-[var(--ink-soft)]">
          Project type
          <select
            required
            value={form.projectType}
            onChange={(event) => setField("projectType", event.target.value)}
            className="mt-2 w-full rounded-xl border border-[var(--line)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--ink)]"
          >
            <option value="">Select one</option>
            <option value="Custom Decks & Outdoor Spaces">Custom Decks & Outdoor Spaces</option>
            <option value="Interior Renovation">Interior Renovation</option>
            <option value="Custom Home">Custom Home</option>
            <option value="Design + Build">Design + Build</option>
            <option value="In-House Design & Pre-Construction">In-House Design & Pre-Construction</option>
            <option value="Project Management & Permits">Project Management & Permits</option>
          </select>
        </label>
        <label className="text-sm text-[var(--ink-soft)]">
          Desired start window
          <input
            required
            value={form.desiredStartWindow}
            onChange={(event) => setField("desiredStartWindow", event.target.value)}
            placeholder="Example: Spring 2026"
            className="mt-2 w-full rounded-xl border border-[var(--line)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--ink)]"
          />
        </label>
        <label className="text-sm text-[var(--ink-soft)]">
          Budget range
          <select
            required
            value={form.budgetRange}
            onChange={(event) => setField("budgetRange", event.target.value)}
            className="mt-2 w-full rounded-xl border border-[var(--line)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--ink)]"
          >
            <option value="">Select one</option>
            <option value="Under $100K">Under $100K</option>
            <option value="$100K to $250K">$100K to $250K</option>
            <option value="$250K to $500K">$250K to $500K</option>
            <option value="$500K to $1M">$500K to $1M</option>
            <option value="$1M+">$1M+</option>
          </select>
        </label>
        <label className="text-sm text-[var(--ink-soft)]">
          Do you already have plans?
          <select
            value={form.hasPlans}
            onChange={(event) => setField("hasPlans", event.target.value)}
            className="mt-2 w-full rounded-xl border border-[var(--line)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--ink)]"
          >
            <option value="">Select one</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <option value="In progress">In progress</option>
          </select>
        </label>
        <label className="text-sm text-[var(--ink-soft)]">
          Permit status
          <select
            value={form.permitStatus}
            onChange={(event) => setField("permitStatus", event.target.value)}
            className="mt-2 w-full rounded-xl border border-[var(--line)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--ink)]"
          >
            <option value="">Select one</option>
            <option value="Not started">Not started</option>
            <option value="In progress">In progress</option>
            <option value="Approved">Approved</option>
            <option value="Unsure">Unsure</option>
          </select>
        </label>
        <label className="text-sm text-[var(--ink-soft)]">
          Best consultation time
          <input
            value={form.consultationTime}
            onChange={(event) => setField("consultationTime", event.target.value)}
            placeholder="Weekday mornings, afternoons, etc."
            className="mt-2 w-full rounded-xl border border-[var(--line)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--ink)]"
          />
        </label>
        <label className="text-sm text-[var(--ink-soft)]">
          How did you hear about us?
          <input
            value={form.referralSource}
            onChange={(event) => setField("referralSource", event.target.value)}
            className="mt-2 w-full rounded-xl border border-[var(--line)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--ink)]"
          />
        </label>
      </div>

      <label className="mt-4 block text-sm text-[var(--ink-soft)]">
        Project description
        <textarea
          required
          value={form.projectDescription}
          onChange={(event) => setField("projectDescription", event.target.value)}
          rows={5}
          className="mt-2 w-full rounded-xl border border-[var(--line)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--ink)]"
        />
      </label>

      <button
        type="submit"
        disabled={submitting}
        data-track-event="form_submit_attempt"
        data-track-label="contact_inquiry_form"
        data-track-location="contact_page"
        className="mt-6 rounded-full bg-[var(--ink)] px-6 py-3 font-[family-name:var(--font-label)] text-xs uppercase tracking-[0.15em] text-[var(--surface)] transition hover:bg-[var(--ink-soft)] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {submitting ? "Submitting..." : "Submit Project Details"}
      </button>

      <input
        value={form.companyWebsite}
        onChange={(event) => setField("companyWebsite", event.target.value)}
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <p className="mt-4 text-sm text-[var(--ink-soft)]">{status}</p>
    </form>
  );
}
