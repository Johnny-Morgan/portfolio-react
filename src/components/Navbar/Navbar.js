import React, { useState } from "react";
import classes from "./Navbar.module.css";
import { MenuItems } from "./MenuItems";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };

  return (
    <nav className={classes.navbar}>
      <h1 className={classes.navbar__logo}>JohnMorgan.dev</h1>
      <ul className={`${classes.navbar__menu} ${menuOpen && classes.open}`}>
        {MenuItems.map((item, index) => (
          <li key={index}>
            <motion.a
              href={item.url}
              className={classes.navbar__link}
              initial={animateFrom}
              animate={animateTo}
              transition={{ delay: item.delay }}
            >
              {item.title}
            </motion.a>
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
