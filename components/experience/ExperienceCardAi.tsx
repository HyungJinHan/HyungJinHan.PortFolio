/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function ExperienceCardAi({}: Props) {
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
        src="/experience/resumeIcon/aiSchool.png"
        alt="aiSchool"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-2xl font-light">Education</h4>
        <p className="font-bold text-2xl mt-1">인공지능사관학교</p>

        <div className="flex space-x-2 my-2">
          <img
            className="h-8 w-8"
            src="/icons/skillIcon/html5.svg"
            alt="html"
          />
          <img className="h-8 w-8" src="/icons/skillIcon/css3.svg" alt="css" />
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
          <img
            className="h-8 w-8"
            src="/icons/skillIcon/python.png"
            alt="python"
          />
          <img
            className="h-8 w-8"
            src="/icons/skillIcon/vscode.png"
            alt="vscode"
          />
        </div>

        <div className="uppercase py-5 text-gray-600 font-semibold">
          <p className="border border-white bg-white inline-block px-2 rounded-md">
            2022.06 - 2022.12 (총 6개월 - 1,300시간)
          </p>
        </div>

        <ul className="list-disc space-y-4 ml-5 text-base max-sm:text-sm">
          <li>JavaScript와 Python 기반의 AI 서비스 과정 수료</li>
          <li>
            JavaScript 기반의 React를 활용한 유저 친화적인 인터페이스 설계
          </li>
          <li>Node.js와 MySQL을 통한 백엔드 구축</li>
          <li>1차, 2차 핵심 역량 프로젝트 및 아이디어 해커톤 최우수상 수상</li>
          <li>AI 교육을 통한 데이터 전처리 및 데이터 가공 개념 이해</li>
        </ul>
      </div>
    </article>
  );
}
