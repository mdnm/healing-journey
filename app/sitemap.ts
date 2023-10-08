import { MetadataRoute } from "next";
import config from "../config";

export default function sitemap(): Array<
  MetadataRoute.Sitemap[0] & {
    changeFrequency?:
      | "always"
      | "hourly"
      | "daily"
      | "weekly"
      | "monthly"
      | "yearly"
      | "never";
    priority?: number;
  }
> {
  return [
    {
      url: config.domainName,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${config.domainName}/learn`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}
