import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { BsCircleFill } from "react-icons/bs";
import { FaServer } from "react-icons/fa";
import { MdDeveloperMode } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";
import { MyProjects, MyServices, MySkills } from "./type";

export const services: MyServices[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    desc: "I can build a beautiful and scalable SPA using <b>HTML</b>. <b>CSS</b>, and <b>React.js</b>",
  },
  {
    Icon: FaServer,
    title: "Backend Development",
    desc: "Handle database, server and api using <b>Express </b> & other popular frameworks.",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    desc: "I can develop robust REST API using <b>Node API</b>",
  },
  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    desc: "A daily problem solver at <b>HackerRank</b>",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX Designer",
    desc: "Stunning user interface design using <b>Figma</b> and <b>Framer</b>",
  },
  {
    Icon: RiComputerLine,
    title: "Whatever",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, illo.",
  },
];

export const languages: MySkills[] = [
  {
    name: "JavaScript",
    level: "90%",
    Icon: BsCircleFill,
  },
  {
    name: "Python",
    level: "70%",
    Icon: BsCircleFill,
  },
  {
    name: "React",
    level: "85%",
    Icon: BsCircleFill,
  },
  {
    name: "Node",
    level: "75%",
    Icon: BsCircleFill,
  },
];

export const tools: MySkills[] = [
  {
    name: "Figma",
    level: "80%",
    Icon: BsCircleFill,
  },
  {
    name: "Framer",
    level: "70%",
    Icon: BsCircleFill,
  },
  {
    name: "Photoshop",
    level: "90%",
    Icon: BsCircleFill,
  },
];

export const projects: MyProjects[] = [
  {
    id: 1,
    name: "Gaming Vibes",
    desc: "This site was created using Next.js & we use netlify logging system on this site.",
    imgPath: "/images/vibes.png",
    githubUrl: "https://github.com/0xNaim/gaming-vibes",
    deployedUrl: "https://gramming-vibes.netlify.app/",
    category: ["node"],
    techsTag: ["React", "Next", "Tailwind CSS", "Netlify"],
  },
  {
    id: 2,
    name: "Todos Application",
    desc: "This site was created using React.js.",
    imgPath: "/images/todos.png",
    githubUrl: "https://github.com/0xNaim/react-todo-app",
    deployedUrl: "https://simple-react-todos-app.netlify.app",
    category: ["react"],
    techsTag: ["React", "Bootstrap"],
  },
  {
    id: 3,
    name: "Ninja List",
    desc: "This site was created using Next.js.",
    imgPath: "/images/ninja.png",
    githubUrl: "https://github.com/0xNaim/next-js",
    deployedUrl: "https://next-js-ninja-list-tau.vercel.app/",
    category: ["react"],
    techsTag: ["Next", "Tailwind CSS", "SASS"],
  },
  {
    id: 4,
    name: "Weather App",
    desc: "This site was created using JavaScript.",
    imgPath: "/images/weather.png",
    githubUrl: "https://github.com/0xNaim/javascript-weather-app",
    deployedUrl: "https://0xnaim.github.io/javascript-weather-app",
    category: ["express"],
    techsTag: ["Html", "CSS", "JavaScript"],
  },
  {
    id: 5,
    name: "Gaming Vibes",
    desc: "This site was created using Next.js & we use netlify logging system on this site.",
    imgPath: "/images/vibes.png",
    githubUrl: "https://github.com/0xNaim/gaming-vibes",
    deployedUrl: "https://gramming-vibes.netlify.app/",
    category: ["django"],
    techsTag: ["React", "Next", "Tailwind CSS", "Netlify"],
  },
  {
    id: 6,
    name: "Todos Application",
    desc: "This site was created using React.js.",
    imgPath: "/images/todos.png",
    githubUrl: "https://github.com/0xNaim/react-todo-app",
    deployedUrl: "https://simple-react-todos-app.netlify.app",
    category: ["react"],
    techsTag: ["React", "Bootstrap"],
  },
  {
    id: 7,
    name: "Ninja List",
    desc: "This site was created using Next.js.",
    imgPath: "/images/ninja.png",
    githubUrl: "https://github.com/0xNaim/next-js",
    deployedUrl: "https://next-js-ninja-list-tau.vercel.app/",
    category: ["mongo"],
    techsTag: ["Next", "Tailwind CSS", "SASS"],
  },
  {
    id: 8,
    name: "Weather App",
    desc: "This site was created using JavaScript.",
    imgPath: "/images/weather.png",
    githubUrl: "https://github.com/0xNaim/javascript-weather-app",
    deployedUrl: "https://0xnaim.github.io/javascript-weather-app",
    category: ["react"],
    techsTag: ["Html", "CSS", "JavaScript"],
  },
  {
    id: 9,
    name: "Todos Application",
    desc: "This site was created using React.js.",
    imgPath: "/images/todos.png",
    githubUrl: "https://github.com/0xNaim/react-todo-app",
    deployedUrl: "https://simple-react-todos-app.netlify.app",
    category: ["react"],
    techsTag: ["React", "Bootstrap"],
  },
];
