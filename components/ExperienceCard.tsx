/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article>
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
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="/drone.jpg"
        alt="drone"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Drone Instructor, Mechanic</h4>
        <p className="font-bold text-2xl mt-1">Young Man Flight (청년항공)</p>

        <div className="flex space-x-2 my-2">
          {/* Tech used */}
          {/* Tech used */}
          {/* Tech used */}
        </div>

        <p>2020.03 - 2022.01 (총 1년 11개월)</p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
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
