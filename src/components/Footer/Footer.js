import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.socials}>
        <a href="https://github.com/Johnny-Morgan" target="_blank">
          <i class="fab fa-github-square"></i>
        </a>
        <a href="https://www.linkedin.com/in/john--morgan/" target="_blank">
          <i class="fab fa-linkedin"></i>
        </a>
      </div>
      <div className={classes.copyright}>
        &copy; John Morgan {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
