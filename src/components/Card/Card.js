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
      </div>
    </div>
  );
};

export default Card;
