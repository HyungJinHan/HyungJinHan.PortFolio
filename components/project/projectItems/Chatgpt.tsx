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
            ChatGPT Messenger (
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
          현재 서비스를 진행 중인 Chat GPT 사이트를 클론하여 만든
          프로젝트입니다.
          <br />
          Open AI의 API를 사용하여 실제 AI를 통한 답변을 받을 수 있습니다.
          <br />
          PC 뿐만이 아닌 반응형 스타일링을 통해 패드와 모바일 환경에도 적합할 수
          있도록 화면을 설계했으며, 다양한 AI 모델을 선택해서 다양한 답변을 들을
          수 있도록 구현했습니다.
          <br />
          또한 간편하게 회원가입 및 로그인이 가능하도록 Gmail을 통해 가입이
          가능하며, Firebase 사용을 통해 자신이 어떠한 채팅을 했는지 내역을
          확인할 수 있습니다.
          <br />
          <span className="underline font-bold text-[#37b3ed]">
            제목의 Deploy Link를 통해 배포된 사이트를 이용해보세요!
          </span>
        </p>
      </div>
    </div>
  );
}
