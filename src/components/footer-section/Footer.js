import React from "react";
import Socials from "../UI/Socials";
import HRule from "../UI/HRule";
import MyLogo from "../icons/MyLogo";

function Footer() {
  return (
    <>
      <HRule className="my-14 md:hidden" />
      <footer className="text-secondary mb-12 w-4/5 mx-auto flex flex-col gap-10 md:w-11/12 md:my-40 md:flex md:flex-row md:items-center">
        {/* Element 1 */}
        <p className="text-center text-xl sm:text-2xl md:text-3xl md:order-2 md:basis-2/4">
          &copy; Ahmed Lukman. All rights reserved
        </p>
        {/* Element 2 */}
        <div className="flex flex-col items-center text-center md:order-1 md:basis-1/4">
          <MyLogo />
          <p className="text-xl sm:text-2xl md:text-3xl">
            Tech enthusiast, perpetual learner, minimalist coder and a creative
            problem solver
          </p>
        </div>
        {/* Element 3 */}
        <div className="flex justify-around mt-20 text-center md:order-3 md:basis-1/4">
          <div className="flex flex-col gap-8">
            <h2 className="font-serif text-3xl sm:text-4xl text-primary">
              Menu
            </h2>
            <nav aria-label="Secondary navigation">
              <ul className="flex flex-col gap-10 text-xl sm:text-2xl md:text-3xl">
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
                    className="border rounded-md p-2 py-1 hover:border-yellow-500"
                    href="google.com"
                    aria-label="Download Resume"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex flex-col gap-12">
            <div className="flex flex-col items-center gap-10">
              <h2 className="font-serif text-3xl md:text-4xl text-primary">
                Connect
              </h2>
              <Socials location="footer" />
            </div>
            <div className="flex flex-col gap-8">
              <h2 className="font-serif text-3xl md:text-4xl text-primary">
                Credits
              </h2>
              <div className="flex flex-col gap-4 text-xl sm:text-2xl md:text-3xl">
                <span>Freepik</span>
                <span>Other</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
