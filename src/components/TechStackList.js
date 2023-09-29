import React from "react";
import {
  faCss3Alt,
  faHtml5,
  faSquareJs,
} from "@fortawesome/free-brands-svg-icons";
import TechStackItem from "./TechStackItem";

function TechStackList() {
  const TECH_STACK = [
    {
      label: "HTML5",
      icon: faHtml5,
    },
    {
      label: "CSS3",
      icon: faCss3Alt,
    },
    {
      label: "JavaScript",
      icon: faSquareJs,
    },
  ];
  return (
    <ul className="flex gap-10">
      {TECH_STACK.map((techItem, index) => (
        <TechStackItem key={index} label={techItem.label} icon={techItem.icon} />
      ))}
    </ul>
  );
}

export default TechStackList;
