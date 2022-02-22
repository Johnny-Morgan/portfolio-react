import React from "react";
import classes from "./Socials.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const SIZES = ["icon--small", "icon--large"];
const STYLES = ["icon--charcoal", "icon--white"];

const Socials = ({ iconSize, iconStyle, border }) => {
  const checkIconSize = SIZES.includes(iconSize) ? iconSize : SIZES[0];
  const checkIconStyle = STYLES.includes(iconStyle) ? iconStyle : STYLES[0];

  return (
    <>
      <a
        href="https://github.com/Johnny-Morgan"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon
          icon={faGithub}
          className={`${classes.icon} ${classes[checkIconSize]} ${
            classes[checkIconStyle]
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
          className={`${classes.icon} ${classes[checkIconSize]} ${
            classes[checkIconStyle]
          } ${border ? classes.border : ""}`}
        ></FontAwesomeIcon>
      </a>
    </>
  );
};

export default Socials;
