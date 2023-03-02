/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
import { Project } from "@/typings";
import { urlFor } from "@/sanity.config";

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
        className="w-[40%] xl:w-[25%] max-sm:w-[80%] max-sm:mt-10 md:mt-5"
      />

      <div className="px-0 md:px-10 max-2-6xl">
        <h4 className="text-4xl font-semibold max-sm:font-bold max-sm:text-xl text-center mb-5">
          <span className="underline decoration-[#37b3ed]/50">
            {!project?.linkToDeploy ? (
              project?.title
            ) : (
              <>
                {project?.title}&nbsp;
                <a
                  className="underline text-[30px] text-[#37b3ed]/50 max-sm:text-[15px] hover:text-[#37b3ed] transition duration-300 ease-in-out"
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
              className="underline text-[#37b3ed]/50 text-lg max-sm:text-sm hover:text-[#37b3ed] transition duration-300 ease-in-out"
              href={project?.linkToBuild}
              target="_blank"
            >
              {project?.title} GitHub
            </a>
            <span className="px-2">|</span>
            <a
              className="underline text-[#37b3ed]/50 text-lg max-sm:text-sm hover:text-[#37b3ed] transition duration-300 ease-in-out"
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
              className="h-10 w-10 max-sm:h-8 max-sm:w-8 mb-5"
              key={technology._id}
              src={urlFor(technology.image).url()}
              alt={`${technology.title}Image`}
            />
          ))}
        </div>

        <p className="w-[700px] xl:w-[1000px] max-sm:w-[400px] max-sm:h-[270px] text-lg text-center md:text-left leading-8 max-sm:leading-6 max-sm:text-sm overflow-y-scroll scrollbar-thin scrollbar-[#242424] scrollbar-thumb-[#37b3ed]/80 max-md:text-sm max-lg:text-base max-lg:leading-6 max-sm:px-3">
          {project?.summary}
        </p>
      </div>
    </div>
  );
}
