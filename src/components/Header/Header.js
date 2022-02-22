import React from "react";
import Navbar from "../Navbar/Navbar";
import classes from "./Header.module.css";
import Socials from "../Socials/Socials";
const Header = () => {
  return (
    <header className={classes.header}>
      <h1 className={classes.header__logo}>
        JohnMorgan.dev
        <Socials iconSize="icon--large" iconStyle="icon--white" />
      </h1>
      <Navbar />
    </header>
  );
};

export default Header;
