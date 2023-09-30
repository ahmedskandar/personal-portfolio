import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SkillItem({ icon, label }) {
  return (
    <li className="flex flex-col gap-2 items-center">
      <FontAwesomeIcon icon={icon} className="text-6xl md:text-7xl" />
      <span className="text-center lg:text-xl">{label}</span>
    </li>
  );
}

export default SkillItem;
