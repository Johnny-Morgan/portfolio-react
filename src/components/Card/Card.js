import React from "react";
import classes from "./Card.module.css";
import image from "./test.png";

const Card = () => {
  return (
    <div className={classes.card}>
      <img src={image} alt="test image" />
    </div>
  );
};

export default Card;
