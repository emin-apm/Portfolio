import styles from "./ProjectsStyles.module.css";

export default function ProjectModal({
  closeTab,
  title,
  description,
  frontend,
  backend,
  demo,
}) {
  return (
    <div className={styles.projects_modal_content}>
      <div className={styles.porjects_modal_close} onClick={closeTab}>
        <i className="fa-solid fa-xmark"></i>
      </div>

      <h3 className={styles.projects_modal_title}>{title}</h3>
      <p className={styles.projects_modal_description}>{description}</p>

      <ul className={`${styles.projects_modal_projects} grid`}>
        <li className={styles.projects_modal_project}>
          <i className="fa-regular fa-circle-check"></i>
          <p className={styles.projects_modal_info}>Frontend - {frontend}</p>
        </li>
        <li className={styles.projects_modal_project}>
          <i className="fa-regular fa-circle-check"></i>
          <p className={styles.projects_modal_info}>Backend - {backend}</p>
        </li>
        <li className={styles.projects_modal_project}>
          <i className="fa-regular fa-circle-check"></i>
          <p className={styles.projects_modal_info}>
            Demo -{" "}
            <a href={demo} target="blank_">
              Check Out
            </a>
          </p>
        </li>
      </ul>
    </div>
  );
}
