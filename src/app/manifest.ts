import type { MetadataRoute } from "next";

import { SITE_NAME, SITE_URL } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: "StudioBuild",
    description:
      "In-house design + build company for custom decks, interior renovations, and custom homes across the Lower Mainland.",
    start_url: SITE_URL,
    display: "standalone",
    background_color: "#060709",
    theme_color: "#060709",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
    ],
  };
}
