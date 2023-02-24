import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackGroundShapes from "./BackGroundShapes";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi! I'm Hyung-Jin Han.",
      "Front-End Developer.",
      "Web Developer.",
      "Studying TypeScript, NextJS, Tailwind CSS, etc.",
    ],
    loop: true,
    delaySpeed: 200,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center">
      <BackGroundShapes />

      <h1>
        <span>{text}</span>
        <Cursor cursorColor="#37b3ed" />
      </h1>
    </div>
  );
}
