import React from "react";
import Card from "../Card/Card";
import classes from "./Projects.module.css";
import { ProjectItems } from "./ProjectItems";

const Projects = () => {
  return (
    <section
      aria-labelledby="projects-title"
      id="projects"
      className={classes.projects}
    >
      <div className={classes.wrapper}>
        <h2 id="projects-title" className={classes.header}>
          Projects
        </h2>
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
      </div>
    </section>
  );
};

export default Projects;
