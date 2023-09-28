import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactComponent as Icon } from "./icons/tailwind-css.svg";

function WebsiteMetricsItem({ metrics }) {
    const {icon, value, label} = metrics
  return (
    <li className="flex flex-col items-center gap-2">
      {label !== "Tailwind" ? (
        <FontAwesomeIcon
          icon={icon}
          className="w-9 h-9 p-2 text-primary bg-gold rounded-full sm:w-11 sm:h-11 sm:p-3"
        />
      ) : (
        <Icon
          className="p-2 text-primary bg-gold rounded-full w-[32.5px] h-[32.5px] sm:w-[42.5px] sm:h-[42.5px]"
        />
      )}
      <span className="text-secondary">{label}</span>
      <b>{value}</b>
    </li>
  );
}

export default WebsiteMetricsItem;
