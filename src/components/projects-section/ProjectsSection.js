import React from "react";
import SectionTitle from "../UI/SectionTitle";
import ProjectList from "./ProjectList";
import FeatureItem from "./FeatureItem";

function ProjectsSection() {
  return (
    <section>
      <SectionTitle>PROJECTS</SectionTitle>
      {/* Projects */}
      <ProjectList />
      <blockquote className="text-secondary text-center w-3/4 mx-auto text-lg lg:text-2xl">
        "In the world of web performance, efficiency is the currency of user
        trust" - <cite>Andy Davies, Web Performance Consultant</cite>
      </blockquote>
      <div className="text-secondary w-4/5 text-center gap-10 mt-16 mx-auto flex flex-col sm:w-3/5 md:flex-row md:justify-center md:w-4/5 md:mt-20 md:gap-10 lg:gap-16">
        <FeatureItem
          icon="rocket"
          title="Fast"
          description="By harnessing the power of React JS, my websites boast lightning-fast load times delivering an exceptional user experience."
        />
        <FeatureItem
          icon="responsiveness"
          title="Responsive"
          description="The layouts are designed to seamlessly adapt to any device, ensuring a flawless user experience across all screens and platforms."
        />
        <FeatureItem
          icon="gears"
          title="Dynamic"
          description="My webpages are highly interactive, offering dynamic content and features that keep users engaged and coming back for more."
        />
      </div>
    </section>
  );
}

export default ProjectsSection;
