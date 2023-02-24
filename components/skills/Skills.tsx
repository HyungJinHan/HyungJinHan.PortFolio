import React from "react";
import { motion } from "framer-motion";
import ReactSkill from "./ReactSkill";
import TypeScriptSkill from "./TypeScriptSkill";
import NextjsSkill from "./NextjsSkill";
import TailwindcssSkill from "./TailwindcssSkill";
import PythonSkill from "./PythonSkill";
import NodeSkill from "./NodeSkill";
import MysqlSkill from "./MysqlSkill";
import FirebaseSkill from "./FirebaseSkill";
import HtmlSkill from "./HTMLSkill";
import CssSkill from "./CssSkill";
import JavaScriptSkill from "./JavaScriptSkill";
import VscodeSkill from "./VscodeSkill";

type Props = {};

export default function Skills({}: Props) {
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
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm text-center">
        Hover over a skill for currency profiency
      </h3>

      <div className="grid grid-cols-4 gap-6 max-sm:gap-4">
        <ReactSkill />
        <NextjsSkill />
        <TypeScriptSkill />
        <JavaScriptSkill />
        <TailwindcssSkill />
        <PythonSkill />
        <HtmlSkill />
        <CssSkill />
        <NodeSkill />
        <MysqlSkill />
        <FirebaseSkill />
        <VscodeSkill />
      </div>
    </motion.div>
  );
}
