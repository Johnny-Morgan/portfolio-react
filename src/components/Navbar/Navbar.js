import React, { useState } from "react";
import NavLinks from "./NavLinks/NavLinks";
import classes from "./Navbar.module.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={classes.navbar}>
      <h1 className={classes.navbar__logo}>JohnMorgan.dev</h1>
      <NavLinks menuOpen={menuOpen} />
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
    </nav>
  );
};

export default Navbar;
