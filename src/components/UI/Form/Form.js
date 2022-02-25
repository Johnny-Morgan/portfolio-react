import React, { useRef } from "react";
import Button from "../Button/Button";
import classes from "./Form.module.css";
import emailjs from "@emailjs/browser";

const Form = ({ setConfirmationMessage }) => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ra2u0qi",
        "template_flofr4r",
        formRef.current,
        "user_PLQesPVLRIyOZCs7SPhzI"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setConfirmationMessage(true);
    formRef.current.reset();
  };
  return (
    <form ref={formRef} className={classes.form} onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" placeholder="Name" required />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        required
      />
      <label htmlFor="message">Message</label>
      <textarea
        name="message"
        id="message"
        cols="30"
        rows="10"
        placeholder="Your message"
        required
      ></textarea>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default Form;
