import styles from "./ProjectsStyles.module.css";

export default function ProjectModal({ closeTab }) {
  return (
    <div className={styles.projects_modal_content}>
      <div className={styles.porjects_modal_close} onClick={closeTab}>
        <i className="fa-solid fa-xmark"></i>
      </div>

      <h3 className={styles.projects_modal_title}>Titlee heree</h3>
      <p className={styles.projects_modal_description}>Description</p>

      <ul className={`${styles.projects_modal_projects} grid`}>
        <li className={styles.projects_modal_project}>
          <i className="fa-regular fa-circle-check"></i>
          <p className={styles.projects_modal_info}>HTML</p>
        </li>
        <li className={styles.projects_modal_project}>
          <i className="fa-regular fa-circle-check"></i>
          <p className={styles.projects_modal_info}>CSS</p>
        </li>
        <li className={styles.projects_modal_project}>
          <i className="fa-regular fa-circle-check"></i>
          <p className={styles.projects_modal_info}>React</p>
        </li>
      </ul>
    </div>
  );
}
