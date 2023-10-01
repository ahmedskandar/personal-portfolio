import React from "react";
import SectionTitle from "../UI/SectionTitle";
import SkillContainer from "./SkillContainer";

function SkillsSection() {
  const title = <>FRAMEWORKS/<br/>LIBRARIES</>
  return (
    <section>
      <SectionTitle>SKILLS</SectionTitle>
      <div className="flex flex-col max-w-lg gap-10 w-4/5 mx-auto md:flex-row md:justify-between md:max-w-7xl lg:gap-20 lg:max-w-[97rem]">
        <SkillContainer title="CORE" />
        <SkillContainer title= {title}/>
      </div>
    </section>
  );
}

export default SkillsSection;
