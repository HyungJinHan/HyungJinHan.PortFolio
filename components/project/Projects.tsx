/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import SoloFitness from "./SoloFitness";
import DeliveryBee from "./DeliveryBee";
import Moogle from "./Moogle";
import Chatgpt from "./Chatgpt";

type Props = {};

export default function Projects({}: Props) {
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

      <div className="relative w-full flex z-20 mt-14">
        <Swiper
          navigation={true}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
          className="mySwiper mx-10"
        >
          <SwiperSlide>
            <SoloFitness />
          </SwiperSlide>
          <SwiperSlide>
            <Chatgpt />
          </SwiperSlide>
          <SwiperSlide>
            <DeliveryBee />
          </SwiperSlide>
          <SwiperSlide>
            <Moogle />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="w-full absolute top-[25%] bg-[#37b3ed]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}
