import type { MetadataRoute } from "next";

const baseUrl = "https://ensemble-phaenomen.eu";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changefreq: "monthly",
      priority: 1,
    },
  ];
}
