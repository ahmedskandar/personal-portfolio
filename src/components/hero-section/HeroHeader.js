import React from 'react'
import MyLogo from "../icons/MyLogo";

function HeroHeader() {
  return (
    <header className="relative flex flex-col gap-5 items-center justify-between md:flex-row md:relative md:px-20">
      <MyLogo />
      <nav
        role="navigation"
        aria-label="Main navigation"
        className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2"
      >
        <ul className="text-lg tracking-wider flex gap-10 md:text-xl md:gap-15 lg:text-2xl lg:gap-20">
          <li>
            <a href="google.com" aria-label="View Skills">
              Skills
            </a>
          </li>
          <li>
            <a href="google.com" aria-label="View Projects">
              Projects
            </a>
          </li>
          <li>
            <a href="google.com" aria-label="View Contacts">
              Contacts
            </a>
          </li>
          <li>
            <a
              className="border rounded-md p-3 py-2 hover:border-yellow-500"
              href="/assets/files/my-cv.pdf"
              download="my-cv.pdf"
              aria-label="Download Resume"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default HeroHeader