import React from "react";
import IconItem from "../UI/IconItem.js";

function TechStackList({techStack}) {

  return (
    <ul className="flex gap-10">
      {techStack.map((techItem, index) => (
        <IconItem key={index} label={techItem.label} icon={techItem.icon} />
      ))}
    </ul>
  );
}

export default TechStackList;
