/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function ExperienceCardDroneLicense({}: Props) {
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
        src="/experience/resumeIcon/ts.jpg"
        alt="ts"
      />

      <div className="px-0 md:px-10 mx-5">
        <h4 className="text-2xl font-light">License</h4>
        <p className="font-bold text-2xl mt-1">초경량비행장치 지도조종자</p>

        <div className="uppercase py-5 text-gray-600 font-semibold">
          <p className="border border-white bg-white inline-block px-2 rounded-md">
            2019.08 취득
          </p>
        </div>

        <ul className="list-disc space-y-4 ml-5 text-base max-sm:text-sm h-72 overflow-y-scroll scrollbar-thin scrollbar-[#242424] scrollbar-thumb-[#37b3ed]/80">
          <li>농업용 대형 드론 교관 자격증 취득</li>
        </ul>
      </div>
    </article>
  );
}
