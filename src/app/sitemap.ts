import type { MetadataRoute } from "next";

import { areaData } from "@/lib/area-data";

const baseUrl = "https://studiobuild.ca";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/services",
    "/services/custom-decks",
    "/services/renovations",
    "/services/custom-homes",
    "/services/design-build",
    "/services/project-management-permits",
    "/process",
    "/portfolio",
    "/testimonials",
    "/faq",
    "/contact",
    "/areas",
    "/resources/brand-playbook",
    "/resources/social-plan",
    "/resources/lead-system",
  ];

  const now = new Date();

  return [
    ...routes.map((route) => {
      const changeFrequency: "weekly" | "monthly" =
        route === "" ? "weekly" : "monthly";

      return {
        url: `${baseUrl}${route}`,
        lastModified: now,
        changeFrequency,
        priority: route === "" ? 1 : 0.7,
      };
    }),
    ...areaData.map((area) => ({
      url: `${baseUrl}/areas/${area.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.68,
    })),
  ];
}
