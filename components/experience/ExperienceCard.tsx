/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
import { Experience } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: Props) {
  const dateFunc = () => {
    const startDate = new Date(experience?.dateStarted);

    const startMonthType =
      startDate.getMonth() + 1 < 9
        ? "0" + (startDate.getMonth() + 1)
        : startDate.getMonth() + 1;

    const startDateType =
      startDate.getMonth() + 1 < 9
        ? "0" + startDate.getDate()
        : startDate.getDate();

    const startDateFormat = startDate.getFullYear() + "." + startMonthType;

    if (!experience.dateEnded && !experience.isCurrentlyWorkingHere) {
      return `${startDateFormat} ${experience?.totalDate}`;
    } else {
      const endDate = new Date(experience?.dateEnded);

      const endMonthType =
        endDate.getMonth() + 1 < 9
          ? "0" + (endDate.getMonth() + 1)
          : endDate.getMonth() + 1;

      const endDateType =
        endDate.getMonth() + 1 < 9
          ? "0" + endDate.getDate()
          : endDate.getDate();

      const endDateFormat = endDate.getFullYear() + "." + endMonthType;

      return `${startDateFormat} - ${
        experience?.isCurrentlyWorkingHere ? "Present" : endDateFormat
      } ${experience?.totalDate}`;
    }
  };

  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 md:w-[700px] max-sm:w-[300px] bg-[#292929] p-10 max-sm:p-5 hover:opacity-100 opacity-40 cursor-pointer transition-opacity m-auto">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        className="w-32 h-32 rounded-full xl:w-[150px] xl:h-[150px] object-cover object-center"
        src={urlFor(experience?.experienceImage).url()}
        alt={`${experience?.experienceTitle}Image`}
      />

      <div className="px-0 md:px-10 mx-5">
        <h4 className="text-2xl font-light">{experience.experienceType}</h4>
        <p className="font-bold text-2xl mt-1">{experience.experienceTitle}</p>

        <div className="flex space-x-2 my-2">
          {experience.technologies?.map((technology) => (
            <img
              className="h-8 w-8"
              key={technology._id}
              src={urlFor(technology.image).url()}
              alt={technology.title}
            />
          ))}
        </div>

        <div className="uppercase py-5 text-gray-600 font-semibold">
          <p className="border border-white bg-white inline-block px-2 rounded-md">
            {dateFunc()}
          </p>
        </div>

        <ul className="list-disc pr-10 space-y-4 ml-5 text-base max-sm:text-sm h-72 overflow-y-scroll scrollbar-thin scrollbar-[#242424] scrollbar-thumb-[#37b3ed]/80">
          {experience?.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
