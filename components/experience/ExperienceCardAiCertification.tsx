/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function ExperienceCardAiCertification({}: Props) {
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
        src="/experience/resumeIcon/ai900.png"
        alt="ai900"
      />

      <div className="px-0 md:px-10 mx-5">
        <h4 className="text-2xl font-light">Certification</h4>
        <p className="font-bold text-2xl mt-1">
          Azure AI Fundamentals (AI-900)
        </p>

        <div className="flex space-x-2 my-2">
          <img
            className="h-8 w-8"
            src="/experience/resumeIcon/ms.png"
            alt="ms"
          />
          <img
            className="h-8 w-8"
            src="/experience/resumeIcon/azure.png"
            alt="azure"
          />
        </div>

        <div className="uppercase py-5 text-gray-600 font-semibold">
          <p className="border border-white bg-white inline-block px-2 rounded-md">
            2022.11 취득
          </p>
        </div>

        <ul className="list-disc space-y-4 ml-5 text-base max-sm:text-sm h-72 overflow-y-scroll scrollbar-thin scrollbar-[#242424] scrollbar-thumb-[#37b3ed]/80">
          <li>
            <a
              href="https://www.credly.com/badges/43d9b719-2f8e-4920-bd1f-e5318caba5b0/linked_in_profile"
              target="_blank"
              className="text-[#37b3ed] opacity-60 hover:opacity-100 duration-200 transition-opacity"
            >
              자격증 정보 사이트 바로가기
            </a>
          </li>
          <li>AI 워크로드 및 고려사항에 대한 공부 진행</li>
          <li>머신 러닝의 기본 원리에 대한 이해</li>
          <li>Computer Vision의 특징에 대한 개념 정리</li>
          <li>자연어 처리의 특징에 대한 이해</li>
          <li>대화형 AI 워크로드에 대한 정리</li>
        </ul>
      </div>
    </article>
  );
}
