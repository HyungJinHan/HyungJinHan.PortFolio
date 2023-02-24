import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      className="aboutDiv"
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
        About
      </h3>

      <motion.img
        src="/AREmoji/AREmojiGif1.gif"
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        className="flex-shrink-0 w-56 h-56 rounded-full object-cover max-sm:mt-24 max-sm:mb-6 max-md:mt-20 max-md:-mb-10 md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold max-md:text-2xl">
          <span className="animate-pulse text-[#37b3ed] underline">
            노마드코더
          </span>
          를 꿈꾸는 개발자입니다!
        </h4>

        <p className="text-sm">
          저는 초등학생 때부터 욕심껏 새로운 시도를 해왔습니다. 피아노부터
          외국어 등 배우고 싶은 것, 하고 싶은 것을 어떻게든 해왔고, 콩쿨대회 등
          많은 경험을 하며 자랐습니다.
          <br />
          <br />
          어렸을 때부터의 습관때문인지, 현재에 안주하지 않고 끝없는 도전을
          지금까지도 해왔습니다. 대학교를 다니면서 사회의 트렌드에 맞춰
          해보자라는 단순한 생각으로 드론에 달려들었고, 마음맞는 사람들과
          스타트업으로 창업까지 하게 되었습니다.
          <br />
          <br />
          물론 무모한 도전이었고 2년 정도를 학교와 일을 병행하며 지냈습니다.
          저는 하고자 생각했던 길로 진입한 이후에 그만두게 되더라도 최소 그
          길에서 무언가 한 가지 스킬과 경험을 얻게 되었습니다.
          <br />
          <br />
          현재, 진로를 변경하여 프로그래머의 길로 무작정 뛰어들어서 경험하다
          보니 현재 프론트엔드 개발자를 준비하며 실력을 쌓아가고 있습니다.
          JavaScript 뿐만이 아닌 다양한 언어를 통한 최신 기술 트렌드에 도전하며
          이것 저것 개발해보고 연구해보고 탐구하여 이 방면에서 다능하게 활동하는
          노마드코더가 되는 꿈을 꾸게 되었습니다.
        </p>
      </div>
    </motion.div>
  );
}
