import { motion } from "framer-motion";
import Head from "next/head";
import React from "react";
import { fadeInUP, routeAnimation } from "../animation/Animation";
import Bar from "../components/Bar";
import { languages, tools } from "../data";

const resume = () => {
  return (
    <motion.div
      className="px-6 py-2"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Head>
        <title>Resume</title>
      </Head>

      {/* education & experience */}
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div
          variants={fadeInUP}
          initial="initial"
          animate="animate"
          className="dark:bg-dark-200"
        >
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">
              Computer Science & Engineering
            </h5>
            <p className="font-semibold">Acadamy of Technology(2017-2021)</p>
            <p className="my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut magnam
              molestiae, voluptate eius harum non?
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUP}
          initial="initial"
          animate="animate"
          className="dark:bg-dark-200"
        >
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">Software Engineer Jr.</h5>
            <p className="font-semibold">TCS (2020 - Present)</p>
            <p className="my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut magnam
              molestiae, voluptate eius harum non?
            </p>
          </div>
        </motion.div>
      </div>

      {/* languages & tools */}
      <div className="grid gap-6 mt-5 md:grid-cols-2">
        <div className="dark:bg-dark-200">
          <h5 className="my-3 text-2xl font-bold">languages & Frameworks</h5>
          <div className="my-2">
            {languages.map((language) => (
              <Bar data={language} key={language.name} />
            ))}
          </div>
        </div>

        <div className="dark:bg-dark-200">
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          <div className="my-2">
            {tools.map((tool) => (
              <Bar data={tool} key={tool.name} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default resume;
