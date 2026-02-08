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
import {
  buildOrganizationSchema,
  buildWebsiteSchema,
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  SITE_URL,
} from "@/lib/seo";

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

const bingVerification = process.env.BING_SITE_VERIFICATION;

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} | Lower Mainland BC`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "In-house design + build company serving the Lower Mainland with custom decks, interior renovations, custom homes, and project management with permitting.",
  keywords: [
    "StudioBuild",
    "design build contractor Lower Mainland",
    "in house design build Vancouver",
    "custom home builder Vancouver",
    "interior renovation contractor North Vancouver",
    "custom deck builder Burnaby",
  ],
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  category: "Construction",
  creator: "StudioBuild Design + Build",
  publisher: "StudioBuild Design + Build",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: `${SITE_NAME} | Lower Mainland BC`,
    description:
      "In-house design + build company serving the Lower Mainland with custom decks, interior renovations, custom homes, and project management with permitting.",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} preview image`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Lower Mainland BC`,
    description:
      "In-house design + build company serving the Lower Mainland with custom decks, interior renovations, custom homes, and project management with permitting.",
    images: [DEFAULT_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    ...(bingVerification
      ? {
          other: {
            "msvalidate.01": bingVerification,
          },
        }
      : {}),
  },
};

const organizationSchema = buildOrganizationSchema();
const websiteSchema = buildWebsiteSchema();

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
        <JsonLd data={websiteSchema} />
        <JsonLd data={organizationSchema} />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
