/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackGroundShapes from "../layout/BackGroundShapes";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["I'm Front-End Developer (`Д´)ゞ", "Please enjoy my Portfolio :)"], // (・∧‐)ゞ
    loop: true,
    delaySpeed: 500,
  });

  return (
    <div className="h-screen flex flex-col items-center justify-center text-center overflow-hidden scroll-smooth">
      <BackGroundShapes />
      <img
        className="relative h-64 w-64 mx-auto pb-10 object-cover"
        // src="/selfie.jpeg"
        src="/AREmoji/AREmojiPic3.png"
        alt="selfie"
      />
      <div className="z-20">
        <h2 className="text-lg uppercase text-gray-500 pb-2 tracking-[15px]">
          Hyung-Jin Han
        </h2>

        <h1 className="text-3xl lg:text-5xl font-semibold px-10 max-sm:text-xl">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#37b3ed" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>

          <Link href="#resume">
            <button className="heroButton">Resume</button>
          </Link>

          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>

          <Link href="#skills">
            <button className="heroButton">Skill</button>
          </Link>

          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
