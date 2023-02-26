import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function DeliveryBee({}: Props) {
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
        src="/project/deliveryBee/deliveryBee.svg"
        alt="deliveryBee"
        className="w-[40%] xl:w-[35%] max-sm:w-[60%]"
      />

      <div className="space-y-10 px-0 md:px-10 max-2-6xl">
        <h4 className="text-4xl font-semibold max-sm:font-bold max-sm:text-2xl text-center -mb-[20px]">
          <span className="underline decoration-[#37b3ed]/50">
            2. 배달BEE (그룹화 배달 서비스)
          </span>
          <br />
          <span className="text-lg">
            <a
              className="underline text-[#37b3ed]/50 text-lg hover:text-[#37b3ed] transition duration-300 ease-in-out"
              href="https://github.com/HyungJinHan/DeliveryBee_Project"
              target="_blank"
            >
              Group Delivery Service Delivery Bee GitHub
            </a>
            <span className="px-2">|</span>
            <a
              className="underline text-[#37b3ed]/50 text-lg hover:text-[#37b3ed] transition duration-300 ease-in-out"
              href="https://hyungjinhan.notion.site/BEE-3cb0ec9c54504933b14de75f9945a372"
              target="_blank"
            >
              Project Detail Page (Notion)
            </a>
          </span>
        </h4>

        <p className="text-lg text-center md:text-left leading-8 max-sm:leading-6 max-sm:text-sm max-md:text-sm max-lg:text-base max-lg:leading-6">
          높아지는 물가와 인건비로 인해 상승하는 배달 수수료를 절감하고자 함께
          모여 배달을 시킬 수 있는 플랫폼 서비스입니다.
          <br />
          자신의 지역 내의 배달을 원하는 가게를 선택하고, 그룹을 만들어 한 번에
          여러 음식을 배달시켜 배달 수수료를 절감하고 효율적인 배달 시장을
          도모하고자 개발했습니다.
          <br />
          해당 그룹에 참여하여 배달할 음식을 선 결제를 하고, 참여 댓글을 남겨
          인원수 대비 배달 수수료를 절감할 수 있도록 구현하였고, 테스트용이지만
          결제 기능을 추가하였습니다.
          <br />
          또한 서비스를 이용하는 유저 외에 플랫폼에 등록을 원하는 업주 페이지도
          개발하여 적용시키게 되었습니다.
        </p>
      </div>
    </div>
  );
}
