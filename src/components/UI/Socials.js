import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";


function Socials({location}) {
  return (
    <div
      className={`text-secondary order-2 flex gap-8 text-4xl ${
        location !== "footer" && "md:text-3xl"
      }`}
    >
      <a
        aria-label="Visit Ahmed Lukman's LinkedIn profile"
        href="https://www.linkedin.com/in/ahmedlukman"
      >
        <FontAwesomeIcon
          className="md:hover:scale-110 md:transition md:duration-200 hover:text-primary"
          icon={faLinkedin}
          title="LinkedIn"
        />
      </a>
      <a
        aria-label="Visit Ahmed Lukman's GitHub profile"
        href="https://www.github.com/ahmedlukman"
      >
        <FontAwesomeIcon
          className="md:hover:scale-110 md:transition md:duration-200 hover:text-primary"
          icon={faGithub}
          title="Github" //Add this in case of button icon
        />
      </a>
    </div>
  );
}

export default Socials;
