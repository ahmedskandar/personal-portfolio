import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function IconItem({ label, icon, value }) {
  return (
    <li className="flex flex-col items-center gap-2">
      {(icon && (label !== "Tailwind" || "MaterialUI")) && (
        <FontAwesomeIcon
          icon={icon}
          className="w-9 h-9 p-2 text-primary bg-gold rounded-full sm:p-3 md:hover:scale-110 md:transition md:duration-100 lg:w-11 lg:h-11 "
        />
      )}
      {(!icon && label === "Tailwind") && (
        <div className="bg-gold px-[3px] py-[8px] sm:py-[10px] sm:px-[5px] lg:py-[10px] lg:px-[3px] rounded-full md:hover:scale-110 md:transition md:duration-100">
          <img
            src="/assets/images/tailwind-css.png"
            className="h-[17px] lg:h-[21.5px] "
            alt=""
          />
        </div>
      )}
      {(!icon && label === "MaterialUI")}
      <span className="text-secondary text-center">{label}</span>
      {value && <b>{value}</b>}
    </li>
  );
}

export default IconItem;
