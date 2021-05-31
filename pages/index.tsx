// import { GetServerSidePropsContext, GetStaticPropsContext } from "next";
import { motion } from "framer-motion";
import { GetServerSidePropsContext } from "next";
import Head from "next/head";
import React from "react";
import { fadeInUP, routeAnimation, stagger } from "../animation/Animation";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";

const index = ({ endpoint }) => {
  console.log(endpoint);

  return (
    <motion.div
      className="flex flex-col px-6 pt-1 flex-grow"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Head>
        <title>About</title>
      </Head>

      <h5 className="my-5 font-medium">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
        labore ratione temporibus unde, maxime, architecto incidunt reiciendis
        omnis ipsum consequuntur distinctio et enim sequi cumque laudantium
        nobis! Quo adipisci provident, deserunt reprehenderit alias enim ab quod
        a mollitia labore ullam!
      </h5>

      <div
        className="p-4 mt-5 bg-gray-300 dark:bg-dark-100 flex-grow"
        style={{ margin: "0 -1.5rem" }}
      >
        <h4 className="my-3 text-xl font-bold tracking-wide">What i offer</h4>
        <motion.div
          className="grid md:grid-cols-2 gap-6 my-3"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {services.map((service) => (
            <motion.div
              className="lg:col-span-1 bg-gray-200 dark:bg-dark-200 rounded-lg"
              variants={fadeInUP}
            >
              <ServiceCard service={service} key={service.title} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default index;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  // const res = await fetch(`${process.env.VERCEL_URL}/api/services`);
  // const data = await res.json();

  // console.log("Server: ", data);

  return {
    props: {
      // services: data || null,
      endpoint: process.env.VERCEL_URL,
    },
  };
};

// export const getStaticProps = async (context: GetStaticPropsContext) => {
//   const res = await fetch("http://localhost:3000/api/services")
//   const data = await res.json()

//   console.log("Server: ", data);

//   return {
//     props: {
//       services: data || null,
//     },
//   };
// };
