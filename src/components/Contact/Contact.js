import React, { useState } from "react";
import Form from "../UI/Form/Form";
import classes from "./Contact.module.css";
import { motion } from "framer-motion";

const Contact = () => {
  const [confirmationMessage, setConfirmationMessage] = useState(false);

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
          <motion.p
            animate={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className={classes["confirmation-msg"]}
          >
            Thank you, your message has been sent. I'll be in touch!
          </motion.p>
        )}
        <Form setConfirmationMessage={setConfirmationMessage} />
      </div>
    </section>
  );
};

export default Contact;
