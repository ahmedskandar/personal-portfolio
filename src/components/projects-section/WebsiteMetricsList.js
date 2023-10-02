import React from "react";
import IconItem from "../UI/IconItem";

function WebsiteMetricsList({metrics}) {

  return (
    <ul className="flex gap-10">
      {metrics.map(({ icon, label, value }, index) => (
        <IconItem key={index} label={label} icon={icon} value={value} />
      ))}
    </ul>
  );
}

export default WebsiteMetricsList;
