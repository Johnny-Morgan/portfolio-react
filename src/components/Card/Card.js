import React from "react";
import classes from "./Card.module.css";

const Card = ({ title, img, about, liveURL, repoURL, technologies }) => {
  return (
    <div className={classes.card}>
      <img
        className={classes.card__img}
        src={require(`${img}`)}
        alt="project"
      />
      <div className={classes.card__content}>
        <h2>{title}</h2>
        <p>{about}</p>
        {technologies.map((t) => (
          <div>{t}</div>
        ))}
        <div className={classes["card__content--btns"]}>
          <a href={liveURL} target="_blank" className={classes.btn}>
            Live Site
          </a>
          <a
            href={repoURL}
            target="_blank"
            className={`${classes.btn} ${classes["btn--outline"]}`}
          >
            Repo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
