/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function ExperienceCardSchool({}: Props) {
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
        src="/experience/resumeIcon/chosun.jpg"
        alt="chosun"
      />

      <div className="px-0 md:px-10 mx-5">
        <h4 className="text-2xl font-light">University</h4>
        <p className="font-bold text-2xl mt-1">광주 조선대학교</p>

        <div className="uppercase py-5 text-gray-600 font-semibold">
          <p className="border border-white bg-white inline-block px-2 rounded-md">
            2015.03 - 2021.02 졸업
          </p>
        </div>

        <ul className="list-disc pr-10 space-y-4 ml-5 text-base max-sm:text-sm h-72 overflow-y-scroll scrollbar-thin scrollbar-[#242424] scrollbar-thumb-[#37b3ed]/80">
          <li>글로벌 인문대학 일본어과 졸업</li>
        </ul>
      </div>
    </article>
  );
}
