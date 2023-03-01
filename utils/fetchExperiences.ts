import { Experience } from "@/typings";

export const fetchExperiences = async () => {
  const res = await fetch("http://localhost:3000/api/getExperiences");
  const data = await res.json();

  const experiences: Experience[] = data.experiences;

  console.log("Experiences Fetching", experiences);

  return experiences;
};
