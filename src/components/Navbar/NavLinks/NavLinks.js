import React from "react";
import { MenuItems } from "../MenuItems";
import { motion } from "framer-motion";
import classes from "./NavLinks.module.css";

const NavLinks = ({ menuOpen, setMenuOpen }) => {
  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };

  return (
    <ul className={`${classes.navbar__menu} ${menuOpen && classes.open}`}>
      {MenuItems.map((item, index) => (
        <li key={index} className={classes.navbar__item}>
          <motion.a
            href={item.url}
            className={classes.navbar__link}
            initial={animateFrom}
            animate={animateTo}
            transition={{ delay: item.delay }}
            onClick={() => setMenuOpen(false)}
          >
            {item.title}
          </motion.a>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
