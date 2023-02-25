import React from "react";
import { motion } from "framer-motion";
import { GrFacebookOption, GrGithub, GrLinkedinOption } from "react-icons/gr";
import { FiMail } from "react-icons/fi";
import { AiFillHome } from "react-icons/ai";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";

type Props = {};

export default function Header({}: Props) {
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
        <Link href="https://www.facebook.com/hyeongjinh1" target="_blank">
          <GrFacebookOption className="headerIcon" />
        </Link>

        <Link href="https://linkedin.com/in/hyungjinhan" target="_blank">
          <GrLinkedinOption className="headerIcon" />
        </Link>

        <Link href="https://github.com/HyungJinHan" target="_blank">
          <GrGithub className="headerIcon" />
        </Link>

        <Link href="https://velog.io/@hyungjin_han" target="_blank">
          <AiFillHome className="headerIcon" />
        </Link>
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
          <FiMail className="cursor-pointer text-gray-400 hover:text-[#37b3ed] mr-3 w-7 h-7 transition-all duration-300 ease-in-out" />
        </CopyToClipboard>
        <Link href="#contact">
          <CopyToClipboard
            text="han1210_36@naver.com"
            onCopy={() =>
              toast.success("Email Copied to Clipboard!", {
                icon: "📋",
              })
            }
          >
            <p className="uppercase hidden md:inline-flex text-sm text-gray-400 hover:text-[#37b3ed] transition-all duration-300 ease-in-out">
              Contact Me
            </p>
          </CopyToClipboard>
        </Link>
      </motion.div>
    </header>
  );
}
