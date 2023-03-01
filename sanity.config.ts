import { createClient } from "next-sanity";
import creatImageUrlBuilder from "@sanity/image-url";

const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: "jxxv2ra8",
  apiVersion: "2022-11-15",
  useCdn: process.env.NODE_ENV === "production",
};

export const sanityClient = createClient(config);

export const urlFor = (source: any) =>
  creatImageUrlBuilder(config).image(source);
