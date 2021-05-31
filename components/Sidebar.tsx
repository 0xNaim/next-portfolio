import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { GiTie } from "react-icons/gi";
import { GoLocation } from "react-icons/go";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      {/* <img
        className="w-32 h-32 mx-auto rounded-full"
        src="images/hacker.jpg"
        alt="user avatar"
      /> */}
      <Image
        className="mx-auto rounded-full "
        src="/images/hacker.jpg"
        alt="user avatar"
        width={250}
        height={250}
        layout="intrinsic"
        quality="100"
      />

      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-green-500">Naim</span> Islam
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200">
        Web Developer
      </p>
      <a
        href="/images/hacker.jpg"
        download="hacker.jpg"
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200"
      >
        <GiTie className="w-6 h-6" /> Download Resume
      </a>

      {/* Social icons */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full">
        <a href="" className="cursor-pointer" aria-label="YouTube">
          <AiFillYoutube className="w-8 h-8" />
        </a>
        <a href="" className="cursor-pointer" aria-label="Github">
          <AiFillGithub className="w-8 h-8" />
        </a>
        <a href="" className="cursor-pointer" aria-label="LinkedIn">
          <AiFillLinkedin className="w-8 h-8" />
        </a>
      </div>

      {/* Address */}
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200"
        style={{ margin: "0 -0.5rem" }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Dhaka, Bangladesh</span>
        </div>
        <p className="my-2">naim@gmail.com</p>
        <p className="my-2">01700000000</p>
      </div>

      <button
        className="w-8/12 px-5 py-1 my-2 mt-5 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none"
        onClick={() => window.open("mailto: naim@gmail.com")}
      >
        Email me
      </button>
      <button
        onClick={changeTheme}
        className="w-8/12 px-5 py-1 my-2 text-sm text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none"
      >
        {theme === "light" ? "Dark" : "Light"} Theme
      </button>
    </div>
  );
};

export default Sidebar;
