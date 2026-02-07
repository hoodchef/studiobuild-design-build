import type { Metadata } from "next";
import { Suspense } from "react";
import {
  Plus_Jakarta_Sans,
  Source_Serif_4,
  Space_Grotesk,
} from "next/font/google";

import { AnalyticsScripts } from "@/components/analytics/analytics-scripts";
import { ClickTracker } from "@/components/analytics/click-tracker";
import { PageviewTracker } from "@/components/analytics/pageview-tracker";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { JsonLd } from "@/components/seo/json-ld";

import "./globals.css";

const heading = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
});

const body = Source_Serif_4({
  variable: "--font-body",
  subsets: ["latin"],
});

const label = Space_Grotesk({
  variable: "--font-label",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "StudioBuild Design + Build | Lower Mainland BC",
    template: "%s | StudioBuild Design + Build",
  },
  description:
    "Design-driven construction company serving the Lower Mainland with custom decks, renovations, custom homes, and project management with permitting.",
  keywords: [
    "StudioBuild",
    "design build contractor Lower Mainland",
    "custom home builder Vancouver",
    "renovation contractor North Vancouver",
    "custom deck builder Burnaby",
  ],
  metadataBase: new URL("https://studiobuild.ca"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "StudioBuild Design + Build | Lower Mainland BC",
    description:
      "Design-driven construction company serving the Lower Mainland with custom decks, renovations, custom homes, and project management with permitting.",
    url: "https://studiobuild.ca",
    siteName: "StudioBuild Design + Build",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "StudioBuild Design + Build | Lower Mainland BC",
    description:
      "Design-driven construction company serving the Lower Mainland with custom decks, renovations, custom homes, and project management with permitting.",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "StudioBuild Design + Build",
  image: "https://studiobuild.ca/og-image.jpg",
  areaServed: [
    "Vancouver",
    "North Vancouver",
    "West Vancouver",
    "Burnaby",
    "Coquitlam",
    "Port Moody",
    "Surrey",
    "Richmond",
    "Langley",
  ],
  founder: "Caleb Stapelmann",
  email: "hello@studiobuild.ca",
  url: "https://studiobuild.ca",
  serviceType: [
    "Custom Decks",
    "Renovations",
    "Custom Homes",
    "Design + Build",
    "Project Management & Permitting",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${heading.variable} ${body.variable} ${label.variable} bg-[var(--surface)] text-[var(--ink)] antialiased`}
      >
        <AnalyticsScripts />
        <Suspense fallback={null}>
          <PageviewTracker />
        </Suspense>
        <ClickTracker />
        <JsonLd data={organizationSchema} />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
