import React from "react";
import classes from "./Card.module.css";
import image from "./test.png";

const Card = () => {
  return (
    <div className={classes.card}>
      <img className={classes.card__img} src={image} alt="test image" />
      <div className={classes.card__content}>
        <h2>Pickles</h2>
        <p>An e-commerce website built with the Django Framework.</p>
        <div className={classes["card__content--btns"]}>
          <a
            href="https://pickles-eshop.herokuapp.com/"
            target="_blank"
            className={classes.btn}
          >
            Live Site
          </a>
          <a
            href="https://github.com/Johnny-Morgan/pickles"
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
