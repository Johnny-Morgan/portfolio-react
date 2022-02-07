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
        <h3>Technologies:</h3>
        <ul className={classes.card__technologies}>
          {technologies.map((technology, index) => (
            <li key={index}>
              <img src={require(`${technology}`)} alt="" />
            </li>
          ))}
        </ul>

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
