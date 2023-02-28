import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import { HiPhone, HiMapPin, HiEnvelope } from "react-icons/hi2";
import { PageInfo } from "@/typings";

type Props = {
  pageInfo: PageInfo;
};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactMe({ pageInfo }: Props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      toast.error("Please enter articles :(", {
        icon: "😥",
      });
    } else {
      window.location.href = `mailto:han1210_36@naver.com?subject=${formData.subject}&body=${formData.name}님이%20보내는%20메일입니다.%20${formData.message}%20By.${formData.email}`;
      toast.success("You send Email! :)", {
        icon: "👍",
      });
    }
  };

  return (
    <motion.div
      className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
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
        Contact Me
      </h3>

      <motion.div
        className="flex flex-col space-y-10"
        initial={{
          y: 200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
      >
        <h4 className="text-4xl font-semibold text-center leading-relaxed pt-12">
          Please contact me.&nbsp;
          <br />
          <span className="decoration-[#37b3ed]/50 underline">
            I&apos;ll be waiting!
          </span>
        </h4>

        <div className="space-y-5">
          <div className="flex items-center space-x-5 justify-center">
            <HiPhone className="text-[#37b3ed] h-7 w-7 animate-pulse" />
            <p className="text-xl">{pageInfo?.phoneNumber}</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <HiEnvelope className="text-[#37b3ed] h-7 w-7 animate-pulse" />
            <p className="text-xl">{pageInfo?.email}</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <HiMapPin className="text-[#37b3ed] h-7 w-7 animate-pulse" />
            <p className="text-xl">{pageInfo?.address}</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto selection:text-white"
        >
          <div className="flex space-x-2">
            <input
              autoComplete="off"
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              autoComplete="off"
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>
          <input
            autoComplete="off"
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            autoComplete="off"
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />

          <Toaster
            position="top-center"
            gutter={10}
            toastOptions={{
              style: {
                background: "white",
                fontWeight: "bold",
              },
              success: {
                duration: 3000,
                style: {
                  color: "#37b3ed",
                },
              },
              error: {
                duration: 3000,
                style: {
                  color: "red",
                },
              },
            }}
          />

          <button
            type="submit"
            className="bg-[#37b3ed] py-5 px-10 mb-10 rounded-md text-[rgb(36,36,36)] font-bold text-lg"
          >
            Submit
          </button>
        </form>

        {/* <div className="flex text-gray-400 justify-center">
          © 2023. Hyung-Jin Han. All rights reserved.
        </div> */}
      </motion.div>
    </motion.div>
  );
}
