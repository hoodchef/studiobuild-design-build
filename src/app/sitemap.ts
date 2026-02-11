import type { MetadataRoute } from "next";

import { areaData } from "@/lib/area-data";
import { blogPosts } from "@/lib/blog-data";
import { portfolioCaseStudies } from "@/lib/portfolio-data";

const baseUrl = "https://www.studiobuild.ca";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/services",
    "/services/custom-decks",
    "/services/renovations",
    "/services/custom-homes",
    "/services/design-build",
    "/services/in-house-design-pre-construction",
    "/services/project-management-permits",
    "/process",
    "/portfolio",
    "/blog",
    "/testimonials",
    "/faq",
    "/contact",
    "/areas",
  ];

  const now = new Date();

  return [
    ...routes.map((route) => {
      const isServiceRoute = route.startsWith("/services/");
      const isMainRoute = ["/services", "/portfolio", "/process", "/contact"].includes(route);
      const changeFrequency: "weekly" | "monthly" =
        route === "" || isMainRoute ? "weekly" : "monthly";

      return {
        url: `${baseUrl}${route}`,
        lastModified: now,
        changeFrequency,
        priority: route === "" ? 1 : isServiceRoute ? 0.9 : isMainRoute ? 0.85 : 0.75,
      };
    }),
    ...areaData.map((area) => ({
      url: `${baseUrl}/areas/${area.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...portfolioCaseStudies.map((study) => ({
      url: `${baseUrl}/portfolio/${study.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.82,
    })),
    ...blogPosts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
