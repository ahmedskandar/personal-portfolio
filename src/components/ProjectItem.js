import React from 'react'
import TechStackList from "./TechStackList";
import WebsiteMetricsList from "./WebsiteMetricsList";
import Button from "./UI/Button";

function ProjectItem({direction}) {
    const flexRowDirection = direction === "left" ? "flex-row-reverse" : "flex-row"
    // const buttonDirection = direction === "left" ? 
  return (
    <div
      className={`w-[85%] mx-auto flex flex-col gap-10 md:items-top md:justify-evenly md:${flexRowDirection}`}
    >
      <div>
        <img
          className="w-full"
          src="/assets/images/personal-portfolio-display.png"
          alt=""
        />
      </div>
      <div className="text-primary flex flex-col gap-10 lg:gap-14">
        <div className="flex flex-col gap-2">
          <h3 className="text-primary text-4xl font-serif tracking-tighter lg:text-6xl">
            Personal Portfolio
          </h3>
          <p className="text-secondary text-xl tracking-wider lg:text-2xl">
            Custom-made personal portfolio with a modern flair and design
          </p>
        </div>
        <div className="flex flex-col gap-5 md:gap-7">
          <h4 className="text-2xl font-serif lg:text-3xl">Tech Stack</h4>
          <TechStackList />
        </div>
        <div className="flex flex-col gap-5 md:gap-7">
          <h4 className="text-2xl font-serif lg:text-3xl">Website Metrics</h4>
          <WebsiteMetricsList />
        </div>
        <div className={`text-primary mt-5 text-center flex flex-col gap-6 items-center md:${flexRowDirection} lg:gap-7`}>
          <Button variant="primary" href="https://www.google.com">
            Explore Site
          </Button>
          <Button variant="secondary" href="https://www.google.com">
            Source Code
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem