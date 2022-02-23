import React from "react";
import ReactTooltip from "react-tooltip";
import classes from "./Card.module.css";
import { motion } from "framer-motion";

const Card = ({ title, img, about, liveURL, repoURL, technologies }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className={classes.card}
      transition={{ delay: 0.3 }}
    >
      <img
        className={classes.card__img}
        src={require(`${img}`)}
        alt="project"
      />
      <div className={classes.card__content}>
        <h2>{title}</h2>
        <p>{about}</p>
        <h3>Technologies:</h3>
        <ul className={classes.card__technologies}>
          {technologies.map((technology, index) => (
            <li key={index}>
              <img
                src={require(`${technology.src}`)}
                alt="technology logo"
                data-tip={technology.tooltip}
              />
              <ReactTooltip />
            </li>
          ))}
        </ul>
        <div className={classes["card__content--btns"]}>
          <a
            href={liveURL}
            target="_blank"
            rel="noreferrer "
            className={classes.btn}
          >
            Live Site
          </a>
          <a
            href={repoURL}
            target="_blank"
            rel="noreferrer"
            className={`${classes.btn} ${classes["btn--outline"]}`}
          >
            Repo
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
