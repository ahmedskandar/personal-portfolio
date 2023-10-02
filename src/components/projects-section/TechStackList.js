import React from "react";
import IconItem from "../UI/IconItem.js";
import { TECH_STACK } from "../../util/constants.js";

function TechStackList() {

  return (
    <ul className="flex gap-10">
      {TECH_STACK.map((techItem, index) => (
        <IconItem key={index} label={techItem.label} icon={techItem.icon} />
      ))}
    </ul>
  );
}

export default TechStackList;
