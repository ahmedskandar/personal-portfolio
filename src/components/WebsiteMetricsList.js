import React from "react";
import {
  faCss3Alt,
  faHtml5,
  faReact,
  
} from "@fortawesome/free-brands-svg-icons";
import WebsiteMetricsItem from "./WebsiteMetricsItem";

function WebsiteMetricsList() {
  const METRICS = [
    {
      label: "React",
      icon: faReact,
      value: "100"
    },
    {
      label: "HTML5",
      icon: faHtml5,
      value: "100"
    },
    {
      label: "CSS3",
      icon: faCss3Alt,
      value: "100"
    },
    {
      label: "Tailwind",
      value: "100"
    },
  ];
  return (
    <ul className="flex gap-10">
      {METRICS.map((techItem) => (
        <WebsiteMetricsItem metrics = {techItem} />
      ))}
    </ul>
  );
}

export default WebsiteMetricsList;
