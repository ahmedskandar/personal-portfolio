import React, { useEffect } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Socials from "../UI/Socials";
import MyLogo from "../icons/MyLogo";

function HeroSection() {
  const [text] = useTypewriter({
    words: ["<FRONT END DEVELOPER />"],
    typeSpeed: 200,
  });
  useEffect(() => {
    const setVh = () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };
    window.addEventListener("resize", setVh);
    setVh();
    return () => window.removeEventListener("resize", setVh);
  }, []);
  return (
    <>
      <section
        alt="Dark background image displaying a mouse"
        className="w-full bg-cover bg-center bg-no-repeat bg-[url('../public/assets/images/landing-page-mobile.jpg')] md:bg-[url('../public/assets/images/landing-page-bg.webp')] md:bg-fixed"
        style={{ minHeight: "calc(var(--vh, 1vh) * 100)" }} // Add this line
      >
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
          <h1 className="font-serif text-primary mb-2 text-6xl md:text-7xl lg:text-9xl">
            Ahmed Lukman
          </h1>
          <p className="font-mono font-bold tracking-wider text-gold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            {text}
            {text !== "<FRONT END DEVELOPER />" && (
              <span className="text-yellow-600">
                <Cursor cursorStyle="_" />
              </span>
            )}
          </p>
        </div>

        <footer className="flex flex-col gap-5 justify-center items-center w-full absolute bottom-0 pb-10 px-20 md:gap-0 md:flex-row md:justify-start">
          <Socials />
          <em className="text-lg text-secondary order-1 md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:text-xl lg:text-2xl">
            Elevating websites beyond design
          </em>
        </footer>
      </section>
    </>
  );
}

export default HeroSection;
