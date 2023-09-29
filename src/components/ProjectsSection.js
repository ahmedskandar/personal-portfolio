import React from "react";
import SectionTitle from "./SectionTitle";
import ProjectList from "./ProjectList";

function ProjectsSection() {
  return (
    <section>
      <SectionTitle>PROJECTS</SectionTitle>
      {/* Projects */}
      <ProjectList />
    </section>
  );
}

export default ProjectsSection;
