/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
import { Project } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
  project: Project;
};

export default function ProjectItem({ project }: Props) {
  return (
    <div className="w-screen flex-shrink-0 flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen overflow-x-scroll overflow-y-hidden scrollbar-thin scrollbar-[#242424] scrollbar-thumb-[#37b3ed]/80">
      <motion.img
        initial={{
          y: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        src={urlFor(project?.image).url()}
        alt={`${project?.title}Image`}
        className="w-[40%] xl:w-[30%] max-sm:w-[60%]"
      />

      <div className="space-y-10 px-0 md:px-10 max-2-6xl">
        <h4 className="text-4xl font-semibold max-sm:font-bold max-sm:text-2xl text-center -mb-[20px]">
          <span className="underline decoration-[#37b3ed]/50">
            {!project?.linkToDeploy ? (
              project?.title
            ) : (
              <>
                {project?.title}&nbsp;
                <a
                  className="underline text-[30px] text-[#37b3ed]/50 hover:text-[#37b3ed] transition duration-300 ease-in-out"
                  href={project?.linkToDeploy}
                  target="_blank"
                >
                  (Deploy Link)
                </a>
              </>
            )}
          </span>
          <br />
          <span className="text-lg">
            <a
              className="underline text-[#37b3ed]/50 text-lg hover:text-[#37b3ed] transition duration-300 ease-in-out"
              href={project?.linkToBuild}
              target="_blank"
            >
              {project?.title} GitHub
            </a>
            <span className="px-2">|</span>
            <a
              className="underline text-[#37b3ed]/50 text-lg hover:text-[#37b3ed] transition duration-300 ease-in-out"
              href={project?.linkToDetail}
              target="_blank"
            >
              Project Detail Page (Notion)
            </a>
          </span>
        </h4>

        <div className="flex items-center space-x-2 justify-center">
          {project?.technologies?.map((technology) => (
            <img
              className="h-10 w-10"
              key={technology._id}
              src={urlFor(technology.image).url()}
              alt={`${technology.title}Image`}
            />
          ))}
        </div>

        <p className="text-lg text-center md:text-left leading-8 max-sm:leading-6 max-sm:text-sm max-md:text-sm max-lg:text-base max-lg:leading-6">
          {project?.summary}
          {/* {project?.summary.split(".").map((line) => (
            <>
              {line}.
              <br />
            </>
          ))} */}
        </p>
      </div>
    </div>
  );
}
