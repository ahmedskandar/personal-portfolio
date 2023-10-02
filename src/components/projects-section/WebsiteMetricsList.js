import React from "react";
import IconItem from "../UI/IconItem";
import { LIGHTHOUSE_METRICS } from "../../util/constants";

function WebsiteMetricsList() {

  return (
    <ul className="flex gap-10">
      {LIGHTHOUSE_METRICS.map(({ icon, label, value }, index) => (
        <IconItem key={index} label={label} icon={icon} value={value} />
      ))}
    </ul>
  );
}

export default WebsiteMetricsList;
