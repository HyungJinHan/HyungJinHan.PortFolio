import { createClient } from "next-sanity";
import creatImageUrlBuilder from "@sanity/image-url";

const config = {
  dataset: process.env.NEXT_PUBLIC_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID!,
  apiVersion: "2021-10-21",
  useCdn: process.env.NODE_ENV === "production",
};

export const sanityClient = createClient(config);

export const urlFor = (source: any) =>
  creatImageUrlBuilder(config).image(source);
