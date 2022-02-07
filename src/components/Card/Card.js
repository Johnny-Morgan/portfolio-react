import React from "react";
import classes from "./Card.module.css";
import image from "./test.png";

const Card = ({ title, about, liveURL, repoURL }) => {
  return (
    <div className={classes.card}>
      <img className={classes.card__img} src={image} alt="test image" />
      <div className={classes.card__content}>
        <h2>{title}</h2>
        <p>{about}</p>
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
