import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SkillItem({ icon, label }) {
  return (
    <li className="flex flex-col gap-2 items-center justify-between">
      {(icon && (label !== "Material UI" || "Tailwind CSS")) && (
        <FontAwesomeIcon icon={icon} className="text-6xl md:text-7xl" />
      )}
      {(!icon && label === "Tailwind CSS") && (
        <img
          src="/assets/images/tailwind-css.png"
          className="h-[30px] md:h-[30px] "
          alt=""
        />
      )}
      {(!icon && label === "Material UI") && (
        <img
          src="/assets/images/material-ui.png"
          className="w-[37.5px] md:w-[45px]"
          alt=""
        />
      )}
      <span className={`${label === "Tailwind CSS" && "mt-"} text-center lg:text-xl`}>{label}</span>
    </li>
  );
}

export default SkillItem;
