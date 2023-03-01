import { Experience } from "@/typings";

export const fetchExperiences = async () => {
  const res = await fetch(
    `https://hyungjinhan-portfolio-hyungjinhan.vercel.app/api/getExperiences`
  );
  const data = await res.json();

  const experiences: Experience[] = data.experiences;

  return experiences;
};
