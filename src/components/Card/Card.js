import React from "react";
import PropTypes from "prop-types";
import ReactTooltip from "react-tooltip";
import classes from "./Card.module.css";
import { motion } from "framer-motion";

const Card = ({
  title,
  img,
  about,
  liveURL,
  repoURL,
  technologies,
  initialAnimationState,
  finalAnimationState,
}) => {
  return (
    <motion.div
      initial={initialAnimationState}
      whileInView={finalAnimationState}
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

Card.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  liveURL: PropTypes.string.isRequired,
  repoURL: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.object).isRequired,
  initialAnimationState: PropTypes.object,
  finalAnimationState: PropTypes.object,
};
export default Card;
