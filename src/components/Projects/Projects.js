import React from "react";
import Card from "../Card/Card";
import classes from "./Projects.module.css";
import { ProjectItems } from "./ProjectItems";

const Projects = () => {
  return (
    <section id="projects" className={classes.projects}>
      <div className={classes.container}>
        {ProjectItems.map((project) => (
          <Card
            key={project.id}
            img={project.img}
            title={project.title}
            about={project.about}
            liveURL={project.liveURL}
            repoURL={project.repoURL}
            technologies={project.technologies}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
