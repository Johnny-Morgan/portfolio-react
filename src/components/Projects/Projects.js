import React from "react";
import Card from "../Card/Card";
import classes from "./Projects.module.css";

const Projects = () => {
  return (
    <section id="projects" className={classes.projects}>
      <div className={classes.container}>
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};

export default Projects;
