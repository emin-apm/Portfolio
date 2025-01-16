import styles from "./ProjectsStyles.module.css";

export default function Projects() {
  return (
    <section className={`${styles.projects} section`}>
      <h2 className="section_title">Portfolio</h2>
      <span className="section_subtitles">Recent projects</span>

      <div className={`${styles.projects_container} container grid`}>
        <div className={styles.projects_content}>
          <div>
            <i class="fa-solid fa-image"></i>

            <h3 className={styles.projects_title}>Title Here</h3>
          </div>

          <span className={styles.projects_button}>
            View more
            <i class="fa-solid fa-arrow-right"></i>
          </span>

          <div className={styles.projects_modal}>
            <div className={styles.projects_modal_content}>
              <div className={styles.porjects_modal_close}>
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
      </div>
    </section>
  );
}
