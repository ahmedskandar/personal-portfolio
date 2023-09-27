import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function HeroSection() {
  const [text] = useTypewriter({
    words: ["<FRONT END DEVELOPER />"],
    typeSpeed: 200,
  });

  return (
    <>
      <section
        alt="Dark background image displaying a mouse"
        className="w-full h-screen bg-cover bg-[100%] bg-fixed bg-no-repeat bg-[url('../public/assets/images/landing-page-bg.webp')]"
      >
        <header className="relative flex flex-col gap-10 items-center justify-between pt-10 md:flex-row md:relative md:px-20">
          <img
            src="/assets/images/logo.jpg"
            className="w-24 h-24 rounded-full"
            alt="Ahmed Lukman's logo"
          />
          <nav
            role="navigation"
            aria-label="Main navigation"
            className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2"
          >
            <ul className="text-md -trackingwider flex gap-10 md:text-lg md:gap-15 lg:text-xl lg:gap-20">
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
                  href="google.com"
                  aria-label="Download Resume"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
        </header>

        <div className="text-center w-full absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-[100%]">
          <h1 className="font-serif text-primary text-5xl mb-2 sm:text-6xl md:text-7xl lg:text-8xl">
            Ahmed Lukman
          </h1>
          <p className="font-mono tracking-wider text-gradient text-lg sm:text-xl md:text-2xl lg:text-3xl">
            {text}
            {text !== "<FRONT END DEVELOPER />" && (
              <span className="text-yellow-500">
                <Cursor cursorStyle="_" />
              </span>
            )}
          </p>
        </div>

        <footer className="flex flex-col gap-5 justify-center items-center w-full absolute bottom-0 pb-10 px-20 md:gap-0 md:flex-row md:justify-start">
          <div className="order-2 flex gap-5 text-lg md:text-xl lg:text-3xl lg:gap-8">
            <span>
              <a aria-label="Visit Ahmed's LinkedIn profile" href="google.com">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </span>
            <span>
              <a aria-label="Visit Ahmed's GitHub profile" href="google.com">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </span>
          </div>
          <em className="text-md text-secondary order-1 md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:text-lg lg:text-xl">
            Elevating websites beyond design
          </em>
        </footer>
      </section>
    </>
  );
}

export default HeroSection;
