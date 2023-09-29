import React from "react";
import SectionTitle from "./SectionTitle";
import ProjectList from "./ProjectList";
import FeatureItem from "./FeatureItem";
import { faRocket } from "@fortawesome/free-solid-svg-icons";

function ProjectsSection() {
  return (
    <section>
      <SectionTitle>PROJECTS</SectionTitle>
      {/* Projects */}
      <ProjectList />
      <blockquote className="text-secondary text-center w-3/4 mx-auto md:text-lg lg:text-2xl">
        "In the world of web performance, efficiency is the currency of user
        trust" - <cite>Andy Davies, Web Performance Consultant</cite>
      </blockquote>
      <div className="text-secondary w-4/5 text-center gap-16 mt-12 mx-auto flex flex-col md:flex-row md:justify-center md:mt-20 md:gap-10 lg:gap-16">
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
