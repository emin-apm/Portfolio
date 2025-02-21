import { useState } from "react";
import styles from "./ProjectsStyles.module.css";
import monopol from "../../assets/projects/monopol.png";
import travel_world from "../../assets/projects/travel_world.png";
import yosif_fit from "../../assets/projects/yosif_fit.png";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [toggleState, setToggleState] = useState(false);

  const toggleTab = () => {
    setToggleState((x) => (x = !toggleState));
  };

  const closeTab = () => {
    setToggleState((x) => (x = false));
  };

  return (
    <section className={`${styles.projects} section`} id="projects">
      <h2 className="section_title">Portfolio</h2>
      <span className="section_subtitles">Recent projects</span>

      <div className={`${styles.projects_container} container grid`}>
        <div className={styles.projects_content}>
          <div className={styles.img_container}>
            <img src={travel_world} alt="" />
          </div>
          <h3 className={styles.projects_title}>Travel World</h3>

          <div className={styles.projects_buttons_container}>
            <a href="https://github.com/emin-apm/Travel-World" target="_blank">
              <span
                className={`${styles.projects_button} ${styles.github_button}`}
              >
                GitHub
                <i class="fa-brands fa-github"></i>
              </span>
            </a>
            <span className={styles.projects_button} onClick={toggleTab}>
              View more
              <i class="fa-solid fa-arrow-right"></i>
            </span>
          </div>

          <div
            className={
              toggleState
                ? `${styles.projects_modal} ${styles.active_modal}`
                : `${styles.projects_modal}`
            }
          >
            <div className={styles.projects_modal_content}>
              <div className={styles.porjects_modal_close} onClick={closeTab}>
                <i class="fa-solid fa-xmark"></i>
              </div>

              <h3 className={styles.projects_modal_title}>Titlee heree</h3>
              <p className={styles.projects_modal_description}>Description</p>

              <ul className={`${styles.projects_modal_projects} grid`}>
                <li className={styles.projects_modal_project}>
                  <i class="fa-regular fa-circle-check"></i>
                  <p className={styles.projects_modal_info}>HTML</p>
                </li>
                <li className={styles.projects_modal_project}>
                  <i class="fa-regular fa-circle-check"></i>
                  <p className={styles.projects_modal_info}>CSS</p>
                </li>
                <li className={styles.projects_modal_project}>
                  <i class="fa-regular fa-circle-check"></i>
                  <p className={styles.projects_modal_info}>React</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.projects_content}>
          <div className={styles.img_container}>
            <img src={yosif_fit} alt="" />
          </div>
          <h3 className={styles.projects_title}>YosifFIT</h3>

          <div className={styles.projects_buttons_container}>
            <a href="https://github.com/emin-apm/gym-project" target="_blank">
              <span
                className={`${styles.projects_button} ${styles.github_button}`}
              >
                GitHub
                <i class="fa-brands fa-github"></i>
              </span>
            </a>

            <span className={styles.projects_button} onClick={toggleTab}>
              View more
              <i class="fa-solid fa-arrow-right"></i>
            </span>
          </div>

          <div
            className={
              toggleState
                ? `${styles.projects_modal} ${styles.active_modal}`
                : `${styles.projects_modal}`
            }
          >
            <div className={styles.projects_modal_content}>
              <div className={styles.porjects_modal_close} onClick={closeTab}>
                <i class="fa-solid fa-xmark"></i>
              </div>

              <h3 className={styles.projects_modal_title}>Titlee heree</h3>
              <p className={styles.projects_modal_description}>Description</p>

              <ul className={`${styles.projects_modal_projects} grid`}>
                <li className={styles.projects_modal_project}>
                  <i class="fa-regular fa-circle-check"></i>
                  <p className={styles.projects_modal_info}>HTML</p>
                </li>
                <li className={styles.projects_modal_project}>
                  <i class="fa-regular fa-circle-check"></i>
                  <p className={styles.projects_modal_info}>CSS</p>
                </li>
                <li className={styles.projects_modal_project}>
                  <i class="fa-regular fa-circle-check"></i>
                  <p className={styles.projects_modal_info}>React</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.projects_content}>
          <div className={styles.img_container}>
            <img src={monopol} alt="" />
          </div>
          <h3 className={styles.projects_title}>Monopol</h3>

          <div className={styles.projects_buttons_container}>
            <a href="https://github.com/emin-apm/Monopol08" target="_blank">
              <span
                className={`${styles.projects_button} ${styles.github_button}`}
              >
                GitHub
                <i class="fa-brands fa-github"></i>
              </span>
            </a>

            <span className={styles.projects_button} onClick={toggleTab}>
              View more
              <i class="fa-solid fa-arrow-right"></i>
            </span>
          </div>

          <div
            className={
              toggleState
                ? `${styles.projects_modal} ${styles.active_modal}`
                : `${styles.projects_modal}`
            }
          >
            <div className={styles.projects_modal_content}>
              <div className={styles.porjects_modal_close} onClick={closeTab}>
                <i class="fa-solid fa-xmark"></i>
              </div>

              <h3 className={styles.projects_modal_title}>Titlee heree</h3>
              <p className={styles.projects_modal_description}>Description</p>

              <ul className={`${styles.projects_modal_projects} grid`}>
                <li className={styles.projects_modal_project}>
                  <i class="fa-regular fa-circle-check"></i>
                  <p className={styles.projects_modal_info}>HTML</p>
                </li>
                <li className={styles.projects_modal_project}>
                  <i class="fa-regular fa-circle-check"></i>
                  <p className={styles.projects_modal_info}>CSS</p>
                </li>
                <li className={styles.projects_modal_project}>
                  <i class="fa-regular fa-circle-check"></i>
                  <p className={styles.projects_modal_info}>React</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <ProjectCard modalControls={{ toggleTab, closeTab, toggleState }} />
      </div>
    </section>
  );
}
