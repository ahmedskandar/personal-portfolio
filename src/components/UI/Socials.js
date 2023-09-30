import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";


function Socials({location}) {
  return (
    <div className={`text-secondary order-2 flex gap-8 text-4xl ${location !== "footer" && "md:text-3xl"}`}>
      <a aria-label="Visit Ahmed's LinkedIn profile" href="google.com">
        <FontAwesomeIcon
          className="md:hover:scale-110 md:transition md:duration-200 hover:text-primary"
          icon={faLinkedin}
        />
      </a>
      <a aria-label="Visit Ahmed's GitHub profile" href="google.com">
        <FontAwesomeIcon
          className="md:hover:scale-110 md:transition md:duration-200 hover:text-primary"
          icon={faGithub}
        />
      </a>
    </div>
  );
}

export default Socials;
