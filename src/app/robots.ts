import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://prashantsingh.dev/sitemap.xml",
    host: "https://prashantsingh.dev",
  };
}
