import React from "react";
import Button from "../UI/Button/Button";
import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <section id="contact" className={classes.contact}>
      <div className={classes.container}>
        <h2 className={classes.header}>Contact Me</h2>
        <p className={classes.message}>
          Interested in working together? Get in touch by filling out the form
          below.
        </p>
        <form className={classes.form}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" cols="30" rows="10"></textarea>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
