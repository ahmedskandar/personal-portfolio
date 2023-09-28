import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function TechStackItem({label, icon}) {
  return (
    <li className="flex flex-col items-center gap-2">
      <FontAwesomeIcon
        icon={icon}
        className="w-9 h-9 p-2 text-primary bg-gold rounded-full sm:w-11 sm:h-11 sm:p-3"
      />
      <span className="text-secondary">{label}</span>
    </li>
  );
}

export default TechStackItem