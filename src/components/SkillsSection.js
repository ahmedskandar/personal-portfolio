import React from "react";
import SectionTitle from "./SectionTitle";
import SkillContainer from "./SkillContainer";

function SkillsSection() {
  const title = <>FRAMEWORKS/<br/>LIBRARIES</>
  return (
    <section>
      <SectionTitle>SKILLS</SectionTitle>
      <div className="flex flex-col gap-10 w-[70%] max-w-lg mx-auto md:max-w-xl lg:flex-row lg:gap-10 lg:justify-around lg:max-w-none">
        <SkillContainer title="CORE" />
        <SkillContainer title= {title}/>
      </div>
    </section>
  );
}

export default SkillsSection;
