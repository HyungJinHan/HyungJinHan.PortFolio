import { createClient } from "next-sanity";
import creatImageUrlBuilder from "@sanity/image-url";

const config = {
  dataset: "production" || "production",
  projectId: "jxxv2ra8",
  apiVersion: "2022-11-16",
  useCdn: process.env.NODE_ENV === "production",
};

export const sanityClient = createClient(config);

export const urlFor = (source: any) =>
  creatImageUrlBuilder(config).image(source);
