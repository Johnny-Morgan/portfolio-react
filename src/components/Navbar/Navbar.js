import React, { useState } from "react";
import NavLinks from "./NavLinks/NavLinks";
import Hamburger from "./Hamburger/Hamburger";
import classes from "./Navbar.module.css";
import "../../App.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={classes.navbar}>
      <NavLinks menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hamburger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </nav>
  );
};

export default Navbar;
