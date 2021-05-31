import React, { FunctionComponent } from "react";
import { MyServices } from "../type";

const ServiceCard: FunctionComponent<{ service: MyServices }> = ({
  service: { Icon, title, desc },
}) => {
  const createMarkup = () => {
    return {
      __html: desc,
    };
  };

  return (
    <div className="flex items-center p-2 space-x-4">
      <Icon className="w-12 h-12 text-green" />
      <div>
        <h5 className="my-1 font-bold">{title}</h5>
        <p dangerouslySetInnerHTML={createMarkup()} />
      </div>
    </div>
  );
};

export default ServiceCard;
