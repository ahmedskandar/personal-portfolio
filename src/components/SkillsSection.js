import React from "react";
import SectionTitle from "./SectionTitle";
import SkillContainer from "./SkillContainer";

function SkillsSection() {
  const title = <>FRAMEWORKS/<br/>LIBRARIES</>
  return (
    <section>
      <SectionTitle>SKILLS</SectionTitle>
      <div className="flex flex-col gap-10 w-3/4 max-w-lg mx-auto md:max-w-xl lg:flex-row lg:gap-10 lg:justify-between lg:max-w-[90rem] ">
        <SkillContainer title="CORE" />
        <SkillContainer title= {title}/>
      </div>
    </section>
  );
}

export default SkillsSection;
