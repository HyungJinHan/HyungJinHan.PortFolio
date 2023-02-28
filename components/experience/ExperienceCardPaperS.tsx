/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function ExperienceCardPaperS({}: Props) {
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
        className="w-52 object-cover object-center"
        src="/experience/resumeIcon/kiit.png"
        alt="kiit"
      />

      <div className="px-0 md:px-10 mx-5">
        <h4 className="text-2xl font-light">Paper Presentation</h4>
        <p className="font-bold text-2xl mt-1">한국정보기술학회</p>

        <div className="flex space-x-2 my-2">
          <img className="h-8 w-8" src="/icons/skillIcon/js.png" alt="js" />
          <img
            className="h-8 w-8"
            src="/icons/skillIcon/react.svg"
            alt="react"
          />
          <img className="h-8 w-8" src="/icons/skillIcon/node.png" alt="node" />
          <img
            className="h-8 w-8"
            src="/icons/skillIcon/mysql.png"
            alt="mysql"
          />
        </div>

        <div className="uppercase py-5 text-gray-600 font-semibold">
          <p className="border border-white bg-white inline-block px-2 rounded-md">
            2022.12 구두 발표
          </p>
        </div>

        <ul className="list-disc pr-5 space-y-4 ml-5 text-base max-sm:text-sm h-72 overflow-y-scroll scrollbar-thin scrollbar-[#242424] scrollbar-thumb-[#37b3ed]/80">
          <li>학술 대회 장소 : 제주 메종 글래드 호텔</li>
          <li>저자 : 김건, 김성환, 전우진, 문경현, 황기성</li>
          <li>
            <span className="font-bold underline">
              배달료 절감을 위한 그룹화 배달 서비스 구축에 관한 연구
            </span>{" "}
            논문 발표
          </li>
          <li>프로젝트 발표회 후, 우수 프로젝트로 선정되어 논문 작성</li>
          <li>논문 채택을 통한 학술 대회에서 구두 발표 진행</li>
        </ul>
      </div>
    </article>
  );
}
