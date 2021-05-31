import { IconType } from "react-icons";

export interface MyServices {
  Icon: IconType;
  title: string;
  desc: string;
}

export interface MySkills {
  name: string;
  level: string;
  Icon: IconType;
}

export interface MyProjects {
  id: number;
  name: string;
  desc: string;
  imgPath: string;
  githubUrl: string;
  deployedUrl: string;
  category: Category[];
  techsTag: string[];
}

export type Category = "react" | "node" | "express" | "django" | "mongo";
