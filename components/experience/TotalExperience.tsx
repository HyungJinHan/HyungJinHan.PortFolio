import React from "react";
import { motion } from "framer-motion";
import ExperienceCardDrone from "./ExperienceCardDrone";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import ExperienceCardAi from "./ExperienceCardAi";
import ExperienceCardAiCertification from "./ExperienceCardAiCertification";
import ExperienceCardPaperF from "./ExperienceCardPaperF";
import ExperienceCardPaperS from "./ExperienceCardPaperS";
import ExperienceCardSchool from "./ExperienceCardSchool";
import ExperienceCardDroneLicense from "./ExperienceCardDroneLicense";
import ExperienceCardDriveLicense from "./ExperienceCardDriveLicense";
import { Experience } from "@/typings";
import experience from "@/sanity/schemas/experience";
import ExperienceCard from "./ExperienceCard";

type Props = {
  experiences: Experience[];
};

export default function TotalExperience({ experiences }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>

      <div className="relative w-full flex p-15 mt-32">
        <Swiper
          navigation={true}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
          className="mySwiper"
          slidesPerView={1}
          centeredSlides={true}
        >
          {experiences?.map((experience) => (
            <SwiperSlide key={experience._id}>
              <ExperienceCard experience={experience} />
            </SwiperSlide>
          ))}
          <SwiperSlide>
            <ExperienceCardAi />
          </SwiperSlide>
          <SwiperSlide>
            <ExperienceCardPaperS />
          </SwiperSlide>
          <SwiperSlide>
            <ExperienceCardAiCertification />
          </SwiperSlide>
          <SwiperSlide>
            <ExperienceCardPaperF />
          </SwiperSlide>
          <SwiperSlide>
            <ExperienceCardDrone />
          </SwiperSlide>
          <SwiperSlide>
            <ExperienceCardSchool />
          </SwiperSlide>
          <SwiperSlide>
            <ExperienceCardDroneLicense />
          </SwiperSlide>
          <SwiperSlide>
            <ExperienceCardDriveLicense />
          </SwiperSlide>
        </Swiper>
      </div>
    </motion.div>
  );
}
