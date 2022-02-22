import React from "react";
import portraitImage from "./portrait.png";
import classes from "./About.module.css";
import Socials from "../Socials/Socials";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <section id="about" className={classes.about}>
      <div className={classes.container}>
        <div className={classes.about__info}>
          <h2>Hello, I'm John</h2>
          <div className={classes.about__socials}>
            <Socials iconSize="icon--large" iconStyle="icon-charcoal" />
          </div>
          <p>
            I'm a full stack software developer. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Natus distinctio, nesciunt architecto
            perferendis doloribus vel et esse culpa dolorum illum vitae eum
            laboriosam necessitatibus quia modi
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
        <div className={classes.about__img}>
          <img src={portraitImage} alt="portrait of John" />
        </div>
      </div>
    </section>
  );
};

export default About;
