import React from "react";
import Socials from "../UI/Socials";
import HRule from "../UI/HRule";
import MyLogo from "../icons/MyLogo";

function Footer() {
  return (
    <>
      <HRule className="my-14 md:hidden" />
      <footer className="text-secondary mb-12 w-4/5 mx-auto flex flex-col gap-10 md:my-36 lg:w-11/12 lg:my-40 lg:flex lg:flex-row lg:items-center">
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
        <div className="flex justify-center gap-20 mt-20 text-center md:gap-0 md:order-3 md:basis-1/4">
          <div className="flex basis-1/2  flex-col gap-8">
            <h2 className="font-serif text-3xl sm:text-4xl text-primary">
              Menu
            </h2>
            <nav aria-label="Secondary navigation">
              <ul className="flex flex-col gap-10 text-xl sm:text-2xl md:text-3xl">
                <li>
                  <a href="#skills" aria-label="View Skills">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#projects" aria-label="View Projects">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contacts" aria-label="View Contacts">
                    Contacts
                  </a>
                </li>
                <li>
                  <a
                    className="border rounded-md p-2 py-1 hover:border-yellow-500"
                    href="google.com"
                    aria-label="Download CV"
                  >
                    CV
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex basis-1/2  flex-col gap-12">
            <div className="flex flex-col items-center gap-10">
              <h2 className="font-serif text-3xl md:text-4xl text-primary">
                Connect
              </h2>
              <Socials location="footer" />
            </div>
            <div className="flex flex-col gap-8 items-center">
              <h2 className="font-serif text-3xl md:text-4xl text-primary">
                Credits
              </h2>
              {/* Edit here */}
              <div className="flex flex-col gap-4 text-lg sm:text-xl md:text-2xl">
                <p>
                  Icons made by{" "}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Visit Freepik icons in flaticon website"
                    href="https://www.flaticon.com/authors/freepik"
                    className="underline"
                    title="Freepik"
                  >
                    Freepik
                  </a>{" "}
                  and{" "}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Visit Ongicon icons in flaticon website"
                    href="https://www.flaticon.com/authors/ongicon"
                    title="Ongicon"
                    className="underline"
                  >
                    Ongicon
                  </a>{" "}
                  from{" "}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.flaticon.com/"
                    className="underline"
                    title="Flaticon"
                  >
                    Flaticon
                  </a>
                </p>
                <p>
                  Photo by{" "}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Visit Harpal Singh's profile on unsplash"
                    className="underline"
                    href="https://unsplash.com/@aquatium?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                  >
                    Harpal Singh
                  </a>{" "}
                  on{" "}
                  <a
                    aria-label="Image credits to Harpal Singh on Unsplash"
                    target="_blank"
                    rel="noreferrer"
                    className="underline"
                    href="https://unsplash.com/photos/WJ9Qf0v1LXM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                  >
                    Unsplash
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
