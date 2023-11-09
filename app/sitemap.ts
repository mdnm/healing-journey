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
      url: `https://${config.domainName}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
  ];
}
