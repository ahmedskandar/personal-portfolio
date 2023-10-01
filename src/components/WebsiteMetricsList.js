import React from "react";
import IconItem from "./UI/IconItem";
import { faGaugeHigh, faWheelchair, faMedal, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function WebsiteMetricsList() {
  const METRICS = [
    {
      label: "Performance",
      icon: faGaugeHigh,
      value: "96",
    },
    {
      label: "Accessibility",
      icon: faWheelchair,
      value: "100",
    },
    {
      label: "Best Practices",
      icon: faMedal,
      value: "100",
    },
    {
      label: "SEO",
      icon: faMagnifyingGlass,
      value: "100",
    },
  ];
  return (
    <ul className="flex gap-10">
      {METRICS.map(({ icon, label, value }, index) => (
        <IconItem key={index} label={label} icon={icon} value={value} />
      ))}
    </ul>
  );
}

export default WebsiteMetricsList;
