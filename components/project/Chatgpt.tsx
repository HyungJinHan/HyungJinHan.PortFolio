import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function Chatgpt({}: Props) {
  return (
    <div className="w-screen flex-shrink-0 flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen overflow-x-scroll overflow-y-hidden scrollbar-thin scrollbar-[#242424] scrollbar-thumb-[#37b3ed]/80">
      <motion.img
        initial={{
          y: -200,
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
        src="/project/chatGpt/chatGpt.svg"
        alt="chatGpt"
        className="w-[40%] xl:w-[40%] max-sm:w-[60%]"
      />

      <div className="space-y-10 px-0 md:px-10 max-2-6xl">
        <h4 className="text-4xl font-semibold max-sm:font-bold max-sm:text-2xl text-center -mb-[20px]">
          <span className="underline decoration-[#37b3ed]/50">
            2. ChatGPT Messenger (
            <a
              className="underline text-[#37b3ed]/50 hover:text-[#37b3ed] transition duration-300 ease-in-out"
              href="https://chatgpt-messenger-hyungjinhan.vercel.app/"
              target="_blank"
            >
              Deploy Link
            </a>
            )
          </span>
          <br />
          <span className="text-lg">
            <a
              className="underline text-[#37b3ed]/50 text-lg hover:text-[#37b3ed] transition duration-300 ease-in-out"
              href="https://github.com/HyungJinHan/ChatGPT_Messenger"
              target="_blank"
            >
              Clone Project ChatGPT Messenger GitHub
            </a>
            <span className="px-2">|</span>
            <a
              className="underline text-[#37b3ed]/50 text-lg hover:text-[#37b3ed] transition duration-300 ease-in-out"
              href="https://hyungjinhan.notion.site/ChatGPT-Messenger-64cdb067fad74f62b2465c7924a7cc4e"
              target="_blank"
            >
              Project Detail Page (Notion)
            </a>
          </span>
        </h4>

        <p className="text-lg text-center md:text-left leading-8 max-sm:leading-6 max-sm:text-sm max-md:text-sm max-lg:text-base max-lg:leading-6">
          네이버 `API`를 활용하여 간단한 토이 프로젝트로 제작한 영화 검색
          사이트입니다.
          <br />
          다양한 영화 속 자신이 원하는 영화를 찾을 수 있도록 국가, 장르 등
          다양한 선택지를 제공하여 영화를 검색할 수 있게 제작했습니다.
          <br />
          또한 구글을 레퍼런스로 하여 구글 검색과 비슷한 느낌으로 `UI`를
          설계했습니다.
        </p>
      </div>
    </div>
  );
}
