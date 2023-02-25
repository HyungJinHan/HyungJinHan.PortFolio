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
import HtmlSkill from "./HtmlSkill";
import CssSkill from "./CssSkill";
import JavaScriptSkill from "./JavaScriptSkill";
import VscodeSkill from "./VscodeSkill";
import NotionSkill from "./NotionSkill";

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
      className="flex relative flex-col text-center md:text-left xl:flex-row xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm text-center">
        Hover over a skill for currency profiency
      </h3>

      <div className="grid grid-cols-5 gap-12 pt-32 max-md:pt-30 max-md:grid-cols-4 max-sm:pt-30 max-sm:grid-cols-4 max-sm:gap-8">
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
        <NotionSkill />
      </div>
    </motion.div>
  );
}
