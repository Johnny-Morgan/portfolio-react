import React, { useState } from "react";
import classes from "./Navbar.module.css";
import { MenuItems } from "./MenuItems";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={classes.navbar}>
      <h1 className={classes.navbar__logo}>JohnMorgan.dev</h1>
      <div
        onClick={() => setMenuOpen(!menuOpen)}
        className={`${classes.navbar__hamburger} ${menuOpen && classes.open}`}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`${classes.navbar__menu} ${menuOpen && classes.open}`}>
        {MenuItems.map((item, index) => (
          <li key={index}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
