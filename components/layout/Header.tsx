import React from "react";
import { motion } from "framer-motion";
import { GrFacebookOption, GrGithub, GrLinkedinOption } from "react-icons/gr";
import { FiMail } from "react-icons/fi";
import { AiFillHome } from "react-icons/ai";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { Social } from "@/typings";
import { SocialIcon } from "react-social-icons";

type Props = {
  socials: Social[];
};

export default function Header({ socials }: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.3,
        }}
        className="flex flex-row items-center pt-3"
      >
        {socials.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            fgColor="white"
            bgColor="transparent"
            target="_blank"
            className="mx-2 w-7 h-7 hover:-translate-y-1.5 transition-all duration-500 ease-in-out"
          />
        ))}

        <SocialIcon
          url="https://www.facebook.com/hyeongjinh1"
          fgColor="white"
          bgColor="transparent"
          target="_blank"
          className="mx-2 w-7 h-7 hover:-translate-y-1.5 transition-all duration-500 ease-in-out"
        />

        <SocialIcon
          url="https://linkedin.com/in/hyungjinhan"
          fgColor="white"
          bgColor="transparent"
          target="_blank"
          className="mx-2 w-7 h-7 hover:-translate-y-1.5 transition-all duration-500 ease-in-out"
        />

        <SocialIcon
          url="https://github.com/HyungJinHan"
          fgColor="white"
          bgColor="transparent"
          target="_blank"
          className="mx-2 w-7 h-7 hover:-translate-y-1.5 transition-all duration-500 ease-in-out"
        />

        <SocialIcon
          url="https://velog.io/@hyungjin_han"
          fgColor="white"
          bgColor="transparent"
          target="_blank"
          className="mx-2 w-7 h-7 hover:-translate-y-1.5 transition-all duration-500 ease-in-out"
        />
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.3,
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer pt-3"
      >
        <Toaster
          position="top-center"
          gutter={10}
          toastOptions={{
            style: {
              background: "white",
              color: "#37b3ed",
              fontWeight: "bold",
            },
            success: {
              duration: 3000,
            },
          }}
        />
        <CopyToClipboard
          text="han1210_36@naver.com"
          onCopy={() =>
            toast.success("Email Copied to Clipboard!", {
              icon: "📋",
            })
          }
        >
          <div className="rounded-full w-[50px] h-[50px] mr-3 pt-2.5 hover:-translate-y-1.5 transition-all duration-500 ease-in-out">
            <FiMail className="text-white w-7 h-7 m-auto" />
          </div>
        </CopyToClipboard>
        <Link href="#contact">
          <p className="uppercase hidden md:inline-flex text-base pr-2 text-gray-400 hover:text-[#37b3ed] transition-all duration-300 ease-in-out">
            Contact Me
          </p>
        </Link>
      </motion.div>
    </header>
  );
}
