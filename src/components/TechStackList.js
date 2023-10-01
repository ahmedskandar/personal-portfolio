import React from "react";
import {
  faCss3Alt,
  faHtml5,
  faReact
} from "@fortawesome/free-brands-svg-icons";
import IconItem from "./UI/IconItem.js";

function TechStackList() {
  const TECH_STACK = [
    {
      label: "React JS",
      icon: faReact,
    },
    {
      label: "HTML5",
      icon: faHtml5,
    },
    {
      label: "CSS3",
      icon: faCss3Alt,
    },
    {
      label: "Tailwind",
    },
  ];
  return (
    <ul className="flex gap-10">
      {TECH_STACK.map((techItem, index) => (
        <IconItem key={index} label={techItem.label} icon={techItem.icon} />
      ))}
    </ul>
  );
}

export default TechStackList;
