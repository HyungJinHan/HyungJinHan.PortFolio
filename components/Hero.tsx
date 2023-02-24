/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackGroundShapes from "./BackGroundShapes";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["I'm Front-End Developer (*ˊᵕˋ*)ﾉ", "Please enjoy my Portfolio :)"],
    loop: true,
    delaySpeed: 500,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackGroundShapes />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="/selfie.jpeg"
        alt="selfie"
      />
      <div className="z-20">
        <h2 className="text-lg uppercase text-gray-500 pb-2 tracking-[15px]">
          Hyung-Jin Han
        </h2>

        <h1 className="text-3xl lg:text-5xl font-semibold px-10">
          {/* <span className="mr-3">Hi! I&apos;m&nbsp;{text}</span> */}
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#37b3ed" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>

          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>

          <Link href="#skill">
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
