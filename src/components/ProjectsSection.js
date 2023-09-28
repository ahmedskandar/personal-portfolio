import React from "react";
import SectionTitle from "./SectionTitle";
import TechStackList from "./TechStackList";
import WebsiteMetricsList from "./WebsiteMetricsList";
import Button from "./UI/Button";

function ProjectsSection() {
  return (
    <section>
      <SectionTitle>PROJECTS</SectionTitle>
      <div className="w-[85%] mx-auto flex flex-col gap-10 md:flex-row md:items-top md:justify-evenly">
        <div>
          <img
            className="w-full"
            src="/assets/images/personal-portfolio-display.png"
            alt=""
          />
        </div>
        <div className="text-primary flex flex-col gap-10 lg:gap-16">
          <div className="flex flex-col gap-2">
            <h3 className="text-primary text-5xl font-serif tracking-tighter">
              Personal Portfolio
            </h3>
            <p className="text-secondary text-xl tracking-wider">
              Custom-made personal portfolio with a modern flair and design
            </p>
          </div>
          <div className="flex flex-col gap-5 md:gap-7">
            <h4 className="text-3xl font-serif">Tech Stack</h4>
            <TechStackList />
          </div>
          <div className="flex flex-col gap-5 md:gap-7">
            <h4 className="text-3xl font-serif">Website Metrics</h4>
            <WebsiteMetricsList />
          </div>
          <div className="text-primary text-center flex flex-col gap-5 md:flex-row lg:gap-10">
            <Button variant="primary" href='https://www.google.com'>Explore Site</Button>
            <Button variant="secondary" href='https://www.google.com'>Source Code</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
