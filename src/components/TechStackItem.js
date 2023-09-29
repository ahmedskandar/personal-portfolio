import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function TechStackItem({label, icon}) {
  return (
    <li className="flex flex-col items-center gap-2">
      <FontAwesomeIcon
        icon={icon}
        className="w-9 h-9 p-2 text-primary bg-gold rounded-full lg:w-11 lg:h-11 sm:p-3 md:hover:scale-110 md:transition md:duration-100"
      />
      <span className="text-secondary">{label}</span>
    </li>
  );
}

export default TechStackItem