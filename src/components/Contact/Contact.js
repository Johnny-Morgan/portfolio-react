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
    formRef.current.reset();
  };

  return (
    <section
      aria-labelledby="contact-title"
      id="contact"
      className={classes.contact}
    >
      <div className={classes.container}>
        <h2 id="contact-title" className={classes.header}>
          Contact Me
        </h2>
        {!confirmationMessage ? (
          <p className={classes.message}>
            Interested in working together? Get in touch by filling out the form
            below.
          </p>
        ) : (
          <span className={classes["confirmation-msg"]}>
            Thank you, your message has been sent. I'll be in touch!
          </span>
        )}
        <form ref={formRef} className={classes.form} onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
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
      </div>
    </section>
  );
};

export default Contact;
