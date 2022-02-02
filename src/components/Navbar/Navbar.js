import React from "react";
import classes from "./Navbar.module.css";
import { MenuItems } from "./MenuItems";

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <h1 className={classes.navbar__logo}>JohnMorgan.dev</h1>
      <div className={classes.navbar__hamburger}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul>
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
