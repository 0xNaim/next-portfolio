import { motion } from "framer-motion";
import React, { FunctionComponent } from "react";
import { MySkills } from "../type";

const Bar: FunctionComponent<{
  data: MySkills;
}> = ({ data: { Icon, name, level } }) => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: level,
      transition: {
        duration: 0.5,
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="my-2 text-white bg-gray-300 rounded-full dark:bg-dark-700">
      <motion.div
        className="flex items-center px-4 my-2 rounded-full bg-gradient-to-r from-green to-blue-600"
        style={{ width: level }}
        variants={variants}
        initial="initial"
        animate="animate"
      >
        <Icon className="mr-3" />
        {name}
      </motion.div>
    </div>
  );
};

export default Bar;
