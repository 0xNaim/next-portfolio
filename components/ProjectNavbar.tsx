import React, { FunctionComponent } from "react";
import { Category } from "../type";

export const NavItem: FunctionComponent<{
  value: Category | "all";
  handleFilterCategory: Function;
  activeItem: string;
}> = ({ value, handleFilterCategory, activeItem }) => {
  let className = "capitalize cursor-pointer hover:text-green";
  if (activeItem === value) className += " text-green";

  return (
    <li className={className} onClick={() => handleFilterCategory(value)}>
      {value}
    </li>
  );
};

const ProjectNavbar: FunctionComponent<{
  handleFilterCategory: Function;
  activeItem: string;
}> = (props) => {
  return (
    <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
      <NavItem value="all" {...props} />
      <NavItem value="react" {...props} />
      <NavItem value="node" {...props} />
      <NavItem value="django" {...props} />
      <NavItem value="mongo" {...props} />
    </div>
  );
};

export default ProjectNavbar;
