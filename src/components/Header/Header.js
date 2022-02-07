import React from "react";
import Navbar from "../Navbar/Navbar";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <h1 className={classes.header__logo}>JohnMorgan.dev</h1>
      <Navbar />
    </header>
  );
};

export default Header;
