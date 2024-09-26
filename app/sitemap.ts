import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: process.env.NEXT_PUBLIC_HOME!,
      lastModified: new Date(),
    },
    {
      url: process.env.NEXT_PUBLIC_ABOUT_US!,
      lastModified: new Date(),
    },
    {
      url: process.env.NEXT_PUBLIC_ACHIEVEMENTS!,
      lastModified: new Date(),
    },
    {
      url: process.env.NEXT_PUBLIC_UPCOMING_EVENTS!,
      lastModified: new Date(),
    },
      {
      url: process.env.NEXT_PUBLIC_GALLERY!,
      lastModified: new Date(),
    },
    {
      url: process.env.NEXT_PUBLIC_TRAINING_WORKSHOP!,
      lastModified: new Date(),
    },
    {
      url: process.env.NEXT_PUBLIC_GET_INVOLVED!,
      lastModified: new Date(),
    },
    {
      url: process.env.NEXT_PUBLIC_CONTACT_US!,
      lastModified: new Date(),
    },
  ];
}
