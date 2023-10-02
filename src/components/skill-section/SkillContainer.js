import React from "react";
import SkillItem from "./SkillItem";
import { CORE_SKILL_ICONS, OTHER_SKILL_ICONS } from "../../util/constants";


function SkillContainer({ title }) {
  let isCore = title === "CORE";
  let icons = isCore ? CORE_SKILL_ICONS : OTHER_SKILL_ICONS;
  return (
    // I am not sure why the Core Skill container is given the same height as the Framework container height
    // But it is the design I want nonetheless
    <div
      className={`${
        isCore ? "bg-gold" : "border border-darkGold border-opacity-70"
      } text-white px-20 py-16 rounded-2xl md:px-40 md:hover:scale-105 md:transition md:duration-200 lg:p-28`}
    >
      <h3 className="text-center font-serif text-xl md:text-2xl lg:text-3xl">
        {title}
      </h3>
      <ul className="grid grid-cols-2 gap-y-10 mt-10 md:gap-x-20 lg:gap-y-20 lg:grid-cols-3">
        {icons.map((iconContainer, index) => (
          <SkillItem
            key={index}
            icon={iconContainer.icon}
            label={iconContainer.label}
          />
        ))}
      </ul>
    </div>
  );
}

export default SkillContainer;
