import type { MetadataRoute } from "next";
import { docs } from "@/lib/docs";

const base = "https://rext.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/extensions", "/developers", "/docs", "/roadmap", "/privacy"].map(
    (path) => ({
      url: `${base}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.7,
    })
  );

  const docRoutes = docs.map((d) => ({
    url: `${base}/docs/${d.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...docRoutes];
}
