import type { Metadata } from "next";

export const SITE_NAME = "StudioBuild Design + Build";
export const SITE_URL = "https://studiobuild.ca";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.svg`;
export const DEFAULT_LOCALE = "en_CA";

export type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  noindex?: boolean;
  type?: "website" | "article";
};

export type BreadcrumbItem = {
  name: string;
  path: string;
};

export function absoluteUrl(path: string) {
  return new URL(path, SITE_URL).toString();
}

export function buildPageMetadata({
  title,
  description,
  path,
  keywords,
  noindex = false,
  type = "website",
}: PageMetadataInput): Metadata {
  const canonical = absoluteUrl(path);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      type,
      url: canonical,
      siteName: SITE_NAME,
      locale: DEFAULT_LOCALE,
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
      title,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
    robots: {
      index: !noindex,
      follow: !noindex,
      googleBot: {
        index: !noindex,
        follow: !noindex,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function buildWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: "en-CA",
  };
}

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_NAME,
    image: DEFAULT_OG_IMAGE,
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
    url: SITE_URL,
    telephone: "+1-778-903-7744",
    serviceType: [
      "Custom Decks",
      "Interior Renovations",
      "Custom Homes",
      "In-House Design + Build",
      "In-House Design & Pre-Construction",
      "Project Management & Permitting",
    ],
  };
}
