import React from 'react'
import TechStackList from "./TechStackList";
import WebsiteMetricsList from "./WebsiteMetricsList";
import Button from "../UI/Button";


function ProjectItem({direction, techStack, metrics, description, heading, imageSrc}) {

  return (
    <figure>
      <div
        className={`flex flex-col gap-10 md:gap-20 lg:gap-48 md:${direction}`}
      >
        <div className='basis-1/2'>
          <img className="w-full" src={imageSrc} alt="" />
        </div>
        <figcaption className="text-primary basis-1/2 flex flex-col gap-10 lg:gap-14">
          <div className="flex flex-col gap-2">
            <h3 className="text-primary text-4xl font-serif tracking-tighter sm:text-5xl lg:text-6xl">
              {heading}
            </h3>
            <p className="text-secondary text-xl tracking-wider sm:text-2xl lg:text-3xl">
              {description}
            </p>
          </div>
          <div className="flex flex-col gap-5 md:gap-7">
            <h4 className="text-2xl font-serif sm:text-3xl lg:text-4xl">
              Tech Stack
            </h4>
            <TechStackList techStack={techStack} />
          </div>
          <div className="flex flex-col gap-5 md:gap-7">
            <h4 className="text-2xl font-serif sm:text-3xl lg:text-4xl">
              Website Metrics
            </h4>
            <WebsiteMetricsList metrics={metrics} />
          </div>
          <div
            className={`text-primary mt-5 text-center flex flex-col gap-6 items-center sm:flex-row md:${direction} lg:gap-10`}
          >
            <Button
              variant="primary"
              projectName={heading}
              href="https://www.google.com"
            >
              Explore Site
            </Button>
            <Button
              variant="secondary"
              projectName={heading}
              href="https://www.google.com"
            >
              Source Code
            </Button>
          </div>
        </figcaption>
      </div>
      <hr className="border border-secondary/40 my-16 md:my-20 lg:my-32" />
    </figure>
  );
}

export default ProjectItem