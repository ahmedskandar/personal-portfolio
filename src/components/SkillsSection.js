import React from "react";
import SectionTitle from "./SectionTitle";
import SkillContainer from "./SkillContainer";

function SkillsSection() {
  const title = <>FRAMEWORKS/<br/>LIBRARIES</>
  return (
    <section>
      <SectionTitle>SKILLS</SectionTitle>
      <div className="flex flex-col max-w-lg gap-10 w-4/5 mx-auto md:flex-row md:justify-between md:max-w-none lg:max-w-[95rem] lg:w-4/5">
        <SkillContainer title="CORE" />
        <SkillContainer title= {title}/>
      </div>
    </section>
  );
}

export default SkillsSection;
