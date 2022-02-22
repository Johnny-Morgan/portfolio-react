import React from "react";
import classes from "./Socials.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Socials = ({ iconSize, iconStyle, border }) => {
  return (
    <>
      <a
        href="https://github.com/Johnny-Morgan"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon
          icon={faGithub}
          className={`${classes.icon} ${classes[iconSize]} ${
            classes[iconStyle]
          } ${border ? classes.border : ""}`}
        ></FontAwesomeIcon>
      </a>
      <a
        href="https://www.linkedin.com/in/john--morgan/"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon
          icon={faLinkedin}
          className={`${classes.icon} ${classes[iconSize]} ${
            classes[iconStyle]
          } ${border ? classes.border : ""}`}
        ></FontAwesomeIcon>
      </a>
    </>
  );
};

export default Socials;
