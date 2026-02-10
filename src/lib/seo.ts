import type { Metadata } from "next";

export const SITE_NAME = "StudioBuild Design + Build";
export const SITE_URL = "https://www.studiobuild.ca";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;
export const DEFAULT_LOCALE = "en_CA";
export const AREA_SERVED = [
  "Vancouver",
  "North Vancouver",
  "West Vancouver",
  "Burnaby",
  "Coquitlam",
  "Port Moody",
  "Surrey",
  "Richmond",
  "Langley",
];

export type PageMetadataInput = {
  title: string;
  absoluteTitle?: string;
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
  absoluteTitle,
  description,
  path,
  keywords,
  noindex = false,
  type = "website",
}: PageMetadataInput): Metadata {
  const canonical = absoluteUrl(path);
  const seoTitle = absoluteTitle ?? title;

  return {
    title: absoluteTitle
      ? {
          absolute: absoluteTitle,
        }
      : title,
    description,
    keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      title: seoTitle,
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
      title: seoTitle,
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

export type ServiceSchemaInput = {
  name: string;
  description: string;
  path: string;
};

export function buildServiceSchema({
  name,
  description,
  path,
}: ServiceSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType: name,
    areaServed: AREA_SERVED,
    provider: {
      "@type": "LocalBusiness",
      name: SITE_NAME,
      url: SITE_URL,
      telephone: "+1-778-903-7744",
      email: "hello@studiobuild.ca",
    },
    url: absoluteUrl(path),
  };
}

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_NAME,
    image: DEFAULT_OG_IMAGE,
    areaServed: AREA_SERVED,
    slogan:
      "Red Seal Certified design + build team serving the Lower Mainland for over 35 years.",
    description:
      "Red Seal Certified in-house design + build team delivering custom decks, interior renovations, custom homes, and project management with permitting across the Lower Mainland.",
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
