import React from "react";
import ProjectItem from "./ProjectItem";
import { FLOWDIRECTION, PROJECT_DATA } from "../../util/constants";

function ProjectList() {
  return (
    <ul className="w-4/5 mx-auto sm:w-3/5 md:w-4/5 lg:w-11/12">
      {PROJECT_DATA.map((project, index) => (
        <React.Fragment key={index}>
          <ProjectItem direction={FLOWDIRECTION(index)} />
        </React.Fragment>
      ))}
    </ul>
  );
}

export default ProjectList;
