import { Skill } from "@/typings";

export const fetchSkills = async () => {
  const res = await fetch(
    `https://hyungjinhan-portfolio-hyungjinhan.vercel.app/api/getSkills`
  );
  const data = await res.json();

  const skills: Skill[] = data.skills;

  return skills;
};
