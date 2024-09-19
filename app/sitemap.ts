import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: process.env.HOME!,
      lastModified: new Date(),
    },
    {
      url: process.env.ABOUT_US!,
      lastModified: new Date(),
    },
    {
      url: process.env.ACHIEVEMENTS!,
      lastModified: new Date(),
    },
    {
      url: process.env.UPCOMING_EVENTS!,
      lastModified: new Date(),
    },
    {
      url: process.env.TRAINING_WORKSHOP!,
      lastModified: new Date(),
    },
    {
      url: process.env.GET_INVOLVED!,
      lastModified: new Date(),
    },
    {
      url: process.env.CONTACT_US!,
      lastModified: new Date(),
    },
  ];
}
