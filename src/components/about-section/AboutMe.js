import React from "react";
import SectionTitle from "../UI/SectionTitle";
import { ReactComponent as Icon } from "../icons/Me.svg";

function AboutMe() {
  return (
    <section>
      <SectionTitle>ABOUT ME</SectionTitle>
      <div className="flex flex-col gap-10 md:flex-row md:gap-16">
        <div className="flex w-full justify-end sm:justify-center md:w-1/2 md:order-2 lg:w-4/12 lg:mx-auto">
          <Icon className="h-4/5 w-4/5 mx-auto sm:h-2/4 sm:w-2/4 md:mr-5 md:w-full md:h-full" />
        </div>
        <div className="bg-gold w-[90%] p-8 relative rounded-r-2xl text-secondary sm:w-4/5 md:max-w-none md:hover:scale-105 md:transition md:duration-200 md:self-center md:w-1/2 md:p-12 md:order-1 lg:py-24 lg:px-14">
          <p className="text-xl sm:text-2xl md:text-2xl lg:leading-10 lg:text-3xl">
            I'm a self-taught developer with a Distinction in Business
            Information Technology Diploma. I excel academically, hold numerous
            certifications from courses and boot-camps, and have been featured
            in national media. I'm passionate about inspiring young individuals
            through motivational speeches. My commitment to continuous learning
            and educating drives my passion as a programmer. For more details,
            please refer to my{" "}
            <a
              className="underline"
              href="/assets/files/my-cv.pdf"
              download="my-cv.pdf"
            >
              resume
            </a>
            .
          </p>
          <span>
            <img
              src="/assets/images/medal.png"
              className="w-14 absolute -top-5 -right-7 lg:w-20 lg:-top-8 lg:-right-10"
              alt=""
            />
          </span>
        </div>
      </div>
    </section>
  );
}

//   <div>

//     Icons made by
//     <a href="https://www.freepik.com" title="Freepik">

//       Freepik
//     </a>
//     from
//     <a href="https://www.flaticon.com/" title="Flaticon">
//       www.flaticon.com'
//     </a>
//   </div>;
// }

export default AboutMe;
