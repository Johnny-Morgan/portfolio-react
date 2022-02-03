import React, { useState } from "react";
import NavLinks from "./NavLinks/NavLinks";
import Hamburger from "./Hamburger/Hamburger";
import classes from "./Navbar.module.css";
import "../../App.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={classes.navbar}>
      <h1 className={classes.navbar__logo}>JohnMorgan.dev</h1>
      <NavLinks menuOpen={menuOpen} />
      <Hamburger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </nav>
  );
};

export default Navbar;
