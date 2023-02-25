/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function ExperienceCardDrone({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] xl:w-[900px] max-sm:-[400px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-300">
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
        src="/experience/drone.jpg"
        alt="drone"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-2xl font-light">Instructor, Mechanic</h4>
        <p className="font-bold text-2xl mt-1">청년항공</p>

        <div className="flex space-x-2 my-2">
          <img
            className="h-8 w-8 rounded-full"
            src="/icons/skillIcon/cad.png"
            alt="autoCad"
          />
          <img
            className="h-8 w-8 rounded-full"
            src="/icons/skillIcon/msOffice.svg"
            alt="msOffice"
          />
          <img
            className="h-8 w-8 rounded-full"
            src="/icons/skillIcon/youtube.png"
            alt="youtube"
          />
        </div>

        <div className="uppercase py-5 text-gray-600 font-semibold">
          <p className="border border-white bg-white inline-block px-2 rounded-md">
            2020.03 - 2022.01 (총 1년 11개월)
          </p>
        </div>

        <ul className="list-disc space-y-4 ml-5 text-base">
          <li>자격증 반 교육 교관</li>
          <li>드론 조립, 센서 조정 등의 정비 및 개발</li>
          <li>초, 고등학교 드론 방과후 강사</li>
          <li>3D 프린트를 통한 자체 굿즈 제작</li>
          <li>유튜브 영상 기획</li>
        </ul>
      </div>
    </article>
  );
}
