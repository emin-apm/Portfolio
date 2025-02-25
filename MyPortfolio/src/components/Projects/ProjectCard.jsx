import styles from "./ProjectsStyles.module.css";

import ProjectModal from "./ProjectModal";
import { useState } from "react";

export default function ProjectCard({ project }) {
  const [toggleState, setToggleState] = useState(false);

  const toggleTab = () => {
    setToggleState((x) => (x = !toggleState));
  };

  const closeTab = () => {
    setToggleState((x) => (x = false));
  };

  return (
    <div className={styles.projects_content}>
      <div className={styles.img_container}>
        <img src={`${project.img}`} alt={project.title} />
      </div>
      <h3 className={styles.projects_title}>{project.title}</h3>

      <div className={styles.projects_buttons_container}>
        <a href={project.github} target="_blank">
          <span className={`${styles.projects_button} ${styles.github_button}`}>
            GitHub
            <i className="fa-brands fa-github"></i>
          </span>
        </a>
        <span className={styles.projects_button} onClick={toggleTab}>
          View more
          <i className="fa-solid fa-arrow-right"></i>
        </span>
      </div>

      {toggleState && (
        <div className={`${styles.projects_modal} ${styles.active_modal}`}>
          <ProjectModal
            closeTab={closeTab}
            title={project.title}
            description={project.description}
            frontend={project.frontend}
            backend={project.backend}
            demo={project.demo}
          />
        </div>
      )}
    </div>
  );
}
