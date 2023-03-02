import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "@/typings";
import { urlFor } from "@/sanity.config";

type Props = {
  pageInfo: PageInfo;
};

export default function About({ pageInfo }: Props) {
  const imageFunc = () => {
    if (!urlFor(pageInfo?.profilePic).url()) {
      return `/AREmoji/AREmojiPic6.png`;
    } else {
      return urlFor(pageInfo?.profilePic).url();
    }
  };

  const backgroundInfo = () => {
    if (!pageInfo?.backgroundInformation) {
      return (
        <>
          Agile(애자일)의 사전적인 용어는{" "}
          <span className="text-[#37b3ed] font-extrabold">
            기민한, 좋은 것을 빠르고 낭비없게 만드는 것
          </span>
          입니다.
          <br />
          <br />
          물론 현재로써의 저는 아주 기민하다고 하기에는 아직 많이 부족합니다.
          <br />
          하지만 누구보다도 좋은 것을 빠르고 낭비없게 만들며 기민하게 움직이며
          최신 트렌드에 맞춰가려 노력하고 있으며,{" "}
          <span className="text-[#37b3ed] font-extrabold">
            현재의 내 자신을 고집하기 보다는 변화를 빠르게 수용하는 개발자
          </span>
          입니다!
          <br />
          <br />
          저는 살아있는 Agile이 되기 위해 공정과 도구보다 개인과 상호작용을
          중요하게 생각하고, 포괄적인 문서보다 소프트웨어의 작동에 힘을 쓰고
          있습니다. 또한, 계약 협상보다 고객과의 협력을 통한 약속을 중요하게
          생각하며 계획을 따르기보다{" "}
          <span className="text-[#37b3ed] font-extrabold">
            변화에 대응해 빠르게 트렌드를 캐치
          </span>
          합니다!
        </>
      );
    } else {
      return pageInfo?.backgroundInformation;
    }
  };

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
        src={imageFunc()}
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
        className="flex-shrink-0 w-56 h-56 rounded-full object-cover max-sm:mt-12 max-md:mt-20 max-md:-mb-10 md:rounded-lg md:w-64 md:h-95 max-sm:w-28 max-sm:h-28 xl:w-[300px] xl:h-[400px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold max-md:text-2xl">
          저는&nbsp;
          <span className="animate-pulse text-[#37b3ed] underline">Agile</span>
          한 개발자가 목표입니다!
        </h4>
        <p className="text-base max-sm:text-sm">{backgroundInfo()}</p>
      </div>
    </motion.div>
  );
}
