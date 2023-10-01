import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList() {
  const PROJECT_DATA = [{ t: "t" }, { r: "r" }];
  const direction = (number) => (number % 2 === 0 ? "right" : "left");
  return (
    <ul className="w-4/5 mx-auto sm:w-3/5 md:w-4/5">
      {PROJECT_DATA.map((project, index) => (
        <React.Fragment key={index}>
          <ProjectItem direction={direction(index)} />
        </React.Fragment>
      ))}
    </ul>
  );
}

export default ProjectList;
