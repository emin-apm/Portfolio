import styles from "./ProjectsStyles.module.css";

import ProjectModal from "./ProjectModal";

import travel_world from "../../assets/projects/travel_world.png";

export default function ProjectCard({ modalControls }) {
  const { toggleTab, closeTab, toggleState } = modalControls;

  return (
    <div className={styles.projects_content}>
      <div className={styles.img_container}>
        <img src={travel_world} alt="Travel World" />
      </div>
      <h3 className={styles.projects_title}>Travel World</h3>

      <div className={styles.projects_buttons_container}>
        <a href="https://github.com/emin-apm/Travel-World" target="_blank">
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
          <ProjectModal closeTab={closeTab} />
        </div>
      )}
    </div>
  );
}
