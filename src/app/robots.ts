import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/resources/"],
      },
    ],
    sitemap: "https://studiobuild.ca/sitemap.xml",
    host: "https://studiobuild.ca",
  };
}
