import { motion } from "framer-motion";
import Image from "next/image";
import React, { FunctionComponent } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { fadeInUP, stagger } from "../animation/Animation";
import { MyProjects } from "../type";

const ProjectCard: FunctionComponent<{
  project: MyProjects;
  showDetails: null | number;
  setShowDetails: (id: null | number) => void;
}> = ({
  project: {
    name,
    imgPath,
    desc,
    githubUrl,
    deployedUrl,
    category,
    techsTag,
    id,
  },
  showDetails,
  setShowDetails,
}) => {
  return (
    <div>
      {/* <img
        src={imgPath}
        alt={name}
        className="cursor-pointer"
        onClick={() => setShowDetails(true)}
      /> */}
      <Image
        src={imgPath}
        alt={name}
        className="cursor-pointer "
        onClick={() => setShowDetails(id)}
        width={300}
        height={200}
        layout="responsive"
      />
      <p className="my-2 text-center">{name}</p>

      {showDetails === id && (
        <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 md:p-5 text-black bg-gray-200 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-700 rounded-lg">
          <motion.div variants={stagger} initial="initial" animate="animate">
            {/* <img src={imgPath} alt={name} /> */}
            <motion.div
              variants={fadeInUP}
              className="border-4 border-gray-100"
            >
              <Image
                src={imgPath}
                alt={name}
                width={300}
                height={200}
                layout="responsive"
              />
            </motion.div>
            <motion.div
              className="flex justify-center my-4 space-x-3"
              variants={fadeInUP}
            >
              <a
                href={githubUrl}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-300 dark:bg-dark-200"
                target="_blank"
              >
                <AiFillGithub /> <span>Github</span>
              </a>
              <a
                href={deployedUrl}
                className="flex items-center px-2 py-2 space-x-3 text-lg bg-gray-300 dark:bg-dark-200"
                target="_blank"
              >
                <AiFillProject /> <span>Live</span>
              </a>
            </motion.div>
          </motion.div>

          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.h2
              className="mb-3 text-xl font-medium md:text-2xl"
              variants={fadeInUP}
            >
              {name}
            </motion.h2>
            <motion.h3 className="mb-3 font-medium" variants={fadeInUP}>
              {desc}
            </motion.h3>
            <motion.div
              className="flex mt-5 space-x-2 text-sm tracking-wider flex-warp roudned-small"
              variants={fadeInUP}
            >
              {techsTag.map((tech) => (
                <span className="px-2 py-1 my-1 bg-gray-300 rounded-sm dark:bg-dark-200">
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <button
            className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200"
            onClick={() => setShowDetails(null)}
          >
            <MdClose size={30} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
