import React from "react";
import portraitImage from "./portrait.png";
import classes from "./About.module.css";
import { motion } from "framer-motion";

const About = () => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const adjectives = [
    "super",
    "magic",
    "terrific",
    "wonderful",
    "topnotch",
    "fantastic",
    "spectacular",
  ];
  return (
    <section aria-label="About John" id="about" className={classes.about}>
      <div className={classes.container}>
        <div className={classes.about__info}>
          <h2>Hello, I'm John</h2>
          <div className={classes.about__title}>
            <div className={classes["about__title--wrapper"]}>
              <div className={classes["about__title--item"]}>Web Developer</div>
              <div className={classes["about__title--item"]}>
                Backend Developer
              </div>
              <div className={classes["about__title--item"]}>
                Lifelong Learner
              </div>
              <div className={classes["about__title--item"]}>Outdoor Lover</div>
            </div>
          </div>
          <p>
            Currently searching for my first software developer role. Have a
            look at my work below and feel free to get in touch by using the
            form provided. Have a {adjectives[new Date().getDay()]}{" "}
            {days[new Date().getDay()]}!
          </p>
          <div className={classes["buttons--container"]}>
            <a
              href="#projects"
              className={`${classes.btn} ${classes["btn--solid"]}`}
            >
              Projects
            </a>
            <a
              href="#contact"
              className={`${classes.btn} ${classes["btn--outline"]}`}
            >
              Hire Me
            </a>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25 }}
          className={classes.about__img}
        >
          <img src={portraitImage} alt="portrait of John" />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
