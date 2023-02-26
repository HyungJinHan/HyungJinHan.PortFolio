import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function SoloFitness({}: Props) {
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
        src="/project/soloFitness/soloFitnessMini.svg"
        alt="soloFitness"
        className="w-[40%] xl:w-[40%] max-sm:w-[60%]"
      />

      <div className="space-y-10 px-0 md:px-10 max-2-6xl">
        <h4 className="text-4xl font-semibold max-sm:font-bold max-sm:text-2xl text-center -mb-[20px]">
          <span className="underline decoration-[#37b3ed]/50">
            1. 나 혼자 피트니스 (AI 헬스케어 서비스)
          </span>
          <br />
          <span className="text-lg">
            <a
              className="underline text-[#37b3ed]/50 text-lg hover:text-[#37b3ed] transition duration-300 ease-in-out"
              href="https://github.com/HyungJinHan/AI_trainer_SoloFitness_Project"
              target="_blank"
            >
              AI trainer Solo Fitness GitHub
            </a>
            <span className="px-2">|</span>
            <a
              className="underline text-[#37b3ed]/50 text-lg hover:text-[#37b3ed] transition duration-300 ease-in-out"
              href="https://hyungjinhan.notion.site/AI-Trainer-96c4781a92c449269a4b9aed45110ec3"
              target="_blank"
            >
              Project Detail Page (Notion)
            </a>
          </span>
        </h4>

        <p className="text-lg text-center md:text-left leading-8 max-sm:leading-6 max-sm:text-sm max-md:text-sm max-lg:text-base max-lg:leading-6">
          AI 기술인 OpenCV와 MediaPipe를 활용한 실시간 자세 측정 피트니스
          서비스입니다.
          <br />
          직접 피트니스 센터를 방문하여 대면 운동을 하는 것이 아닌, 집에서 즐길
          수 있는 홈 트레이닝 서비스로, 원하는 개수를 지정해서 운동을 시작하면
          자세를 실시간으로 측정하여 정확한 자세로 운동을 할 시, 개수가
          올라가도록 구현했습니다.
          <br />
          추가적으로 챌린지 시스템을 도입하여, 정해진 시간 내에 얼마나 정확한
          자세로 많은 운동을 했는지를 랭킹으로 경쟁할 수 있습니다.
          <br />
          또한 서비스를 이용하는 유저 외에 피트니스 센터에 가입한 회원들을
          관리할 수 있는 센터 컨텐츠 관리와 간단한 회원 관리를 추가했습니다.
        </p>
      </div>
    </div>
  );
}
