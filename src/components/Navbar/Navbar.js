import React, { useState } from "react";
import classes from "./Navbar.module.css";
import { MenuItems } from "./MenuItems";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={classes.navbar}>
      <h1 className={classes.navbar__logo}>JohnMorgan.dev</h1>
      <ul className={`${classes.navbar__menu} ${menuOpen && classes.open}`}>
        {MenuItems.map((item, index) => (
          <li key={index}>
            <a href={item.url} className={classes.navbar__link}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
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
