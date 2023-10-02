import React from 'react'
import Socials from "../UI/Socials";

function HeroFooter() {
  return (
    <footer className="flex flex-col gap-5 justify-center items-center w-full relative pb-10 px-20 md:gap-0 md:flex-row md:justify-start">
      <Socials />
      <em className="text-lg text-secondary order-1 md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:text-xl lg:text-2xl">
        Elevating websites beyond design
      </em>
    </footer>
  );
}

export default HeroFooter