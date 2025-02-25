import { useState } from "react";
import styles from "./ProjectsStyles.module.css";

import ProjectCard from "./ProjectCard";

export default function Projects({ projects }) {
  return (
    <section className={`${styles.projects} section`} id="projects">
      <h2 className="section_title">Portfolio</h2>
      <span className="section_subtitles">Recent projects</span>

      <div className={`${styles.projects_container} container grid`}>
        {projects.map((x) => (
          <ProjectCard key={x.id} project={x} />
        ))}
      </div>
    </section>
  );
}
