import React from 'react'
import ProjectItem from './ProjectItem'

function ProjectList() {
    const PROJECT_DATA = [{t:'t'},{r:'r'}]
    const direction = (number) => number % 2 === 0 ? "right" : "left";
  return (
    <ul>
        {PROJECT_DATA.map((project, index) => <><ProjectItem key={index} direction={direction(index)} />{index !== PROJECT_DATA.length-1 && <hr className='border border-secondary/40 m-10 my-16 md:m-20 lg:m-32'/>}</>)}
    </ul>
  )
}

export default ProjectList