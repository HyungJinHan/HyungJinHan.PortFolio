/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];

  return (
    <motion.div
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 mt-14">
        {projects.map((project, i) => (
          <div
            key={project}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <img
              src="/project/soloFitness/soloFitnessMini.svg"
              alt="soloFitness"
              className="w-[40%] xl:w-[40%] max-sm:w-[60%]"
            />

            <div className="space-y-10 px-0 md:px-10 max-2-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#37b3ed]/50">
                  {i + 1}. 나 혼자 피트니스 (AI 헬스케어 서비스)
                </span>
              </h4>

              <p className="text-lg text-center md:text-left leading-8 max-sm:leading-6 max-sm:text-sm max-md:text-sm max-lg:text-base max-lg:leading-6">
                AI 기술인 OpenCV와 MediaPipe를 활용한 실시간 자세 측정 피트니스
                서비스입니다.
                <br />
                직접 피트니스 센터를 방문하여 대면 운동을 하는 것이 아닌, 집에서
                즐길 수 있는 홈 트레이닝 서비스로, 원하는 개수를 지정해서 운동을
                시작하면 자세를 실시간으로 측정하여 정확한 자세로 운동을 할 시,
                개수가 올라가도록 구현했습니다.
                <br />
                추가적으로 챌린지 시스템을 도입하여, 정해진 시간 내에 얼마나
                정확한 자세로 많은 운동을 했는지를 랭킹으로 경쟁할 수 있습니다.
                <br />
                또한 서비스를 이용하는 유저 외에 피트니스 센터에 가입한 회원들을
                관리할 수 있는 센터 컨텐츠 관리와 간단한 회원 관리를
                추가했습니다.
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#37b3ed]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}
