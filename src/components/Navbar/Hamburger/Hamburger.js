import React from "react";
import classes from "./Hamburger.module.css";

const Hamburger = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={classes.navbar__hamburger}>
      <div
        onClick={() => setMenuOpen(!menuOpen)}
        className={`${classes["navbar__hamburger-icon"]} ${
          menuOpen && classes.open
        }`}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Hamburger;
