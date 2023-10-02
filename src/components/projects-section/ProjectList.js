import React from "react";
import ProjectItem from "./ProjectItem";
import { FLOWDIRECTION, PROJECT_DATA } from "../../util/constants";

function ProjectList() {
  return (
    <div className="w-4/5 mx-auto sm:w-3/5 md:w-4/5 lg:w-11/12">
      {PROJECT_DATA.map(({description, techStack, metrics, heading, imageSrc}, index) => (
        <React.Fragment key={index}>
          <ProjectItem description={description} heading={heading} imageSrc={imageSrc} techStack={techStack} metrics={metrics} direction={FLOWDIRECTION(index)} />
        </React.Fragment>
      ))}
    </div>
  );
}

export default ProjectList;
