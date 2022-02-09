import React, { useState, useRef } from "react";
import Button from "../UI/Button/Button";
import classes from "./Contact.module.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [confirmationMessage, setConfirmationMessage] = useState(false);
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
    // Reset form
    formRef.current.name.value = "";
    formRef.current.email.value = "";
    formRef.current.message.value = "";
  };

  return (
    <section id="contact" className={classes.contact}>
      <div className={classes.container}>
        <h2 className={classes.header}>Contact Me</h2>
        <p className={classes.message}>
          Interested in working together? Get in touch by filling out the form
          below.
        </p>
        <form ref={formRef} className={classes.form} onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" required />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required />
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            required
          ></textarea>
          <Button type="submit">Submit</Button>
        </form>
        {confirmationMessage && (
          <span className={classes["confirmation-msg"]}>
            Thank you, your message has been sent. I'll be in touch!
          </span>
        )}
      </div>
    </section>
  );
};

export default Contact;
