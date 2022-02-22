import React from "react";
import classes from "./Footer.module.css";
import Socials from "../Socials/Socials";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.socials}>
        <Socials
          iconSize="icon--small"
          iconStyle="icon--white"
          border={false}
        />
      </div>
      <div className={classes.copyright}>
        &copy; {new Date().getFullYear()} John Morgan
      </div>
    </footer>
  );
};

export default Footer;
