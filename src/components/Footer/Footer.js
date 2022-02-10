import React from "react";
import classes from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.socials}>
        <a
          href="https://github.com/Johnny-Morgan"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faGithub}
            className={classes.icon}
          ></FontAwesomeIcon>
        </a>
        <a
          href="https://www.linkedin.com/in/john--morgan/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className={classes.icon}
          ></FontAwesomeIcon>
        </a>
      </div>
      <div className={classes.copyright}>
        &copy; {new Date().getFullYear()} John Morgan
      </div>
    </footer>
  );
};

export default Footer;
