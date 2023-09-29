import React from 'react'
import ProjectItem from './ProjectItem'

function ProjectList() {
    const PROJECT_DATA = [{t:'t'},{r:'r'}]
    const direction = (number) => number % 2 === 0 ? "right" : "left"
  return (
    <ul className="w-[80%] mx-auto">
      {PROJECT_DATA.map((project, index) => (
        <React.Fragment key={index}>
          <ProjectItem direction={direction(index)} />
            <hr className="border border-secondary/40 my-16 md:my-20 lg:my-32" />
        </React.Fragment>
      ))}
    </ul>
  );
}

export default ProjectList