import styles from "./ProjectsStyles.module.css";

export default function Projects() {
  return (
    <section className={`${styles.projects} section`}>
      <h2 className="section_title">Portfolio</h2>
      <span className="section_subtitles">Recent projects</span>
      <div className={`${styles.projects_container} container grid`}>
        <div className={styles.projects_content}>
          <div>
            <h3 className={styles.projects_title}>Title Here</h3>
          </div>
          <span className={styles.projects_button}>
            View more
            <i class="fa-solid fa-arrow-right"></i>
            <div className={styles.projects_modal}>
              <div className={styles.projecct_modals_content}>
                <i class="fa-solid fa-arrows-up-down-left-right"></i>

                <h3 className={styles.projects_title}>Titlee heree</h3>
                <p className={styles.porjects_description}>Description</p>

                <ul className={`${styles.projects_modal_project} grid`}>
                  <li className={styles.projects_modal_project}>
                    <i class="fa-regular fa-circle-check"></i>
                    <p className={styles.projects_modal_info}>modal info</p>
                  </li>
                  <li className={styles.projects_modal_project}>
                    <i class="fa-regular fa-circle-check"></i>
                    <p className={styles.projects_modal_info}>modal info</p>
                  </li>
                  <li className={styles.projects_modal_project}>
                    <i class="fa-regular fa-circle-check"></i>
                    <p className={styles.projects_modal_info}>modal info</p>
                  </li>
                </ul>
              </div>
            </div>
          </span>
        </div>

        <div className={styles.projects_content}>
          <div>
            <h3 className={styles.projects_title}>Title Here</h3>
          </div>
          <span className={styles.projects_button}>
            View more
            <i class="fa-solid fa-arrow-right"></i>
            <div className={styles.projects_modal}>
              <div className={styles.projecct_modals_content}>
                <i class="fa-solid fa-arrows-up-down-left-right"></i>

                <h3 className={styles.projects_title}>Titlee heree</h3>
                <p className={styles.porjects_description}>Description</p>

                <ul className={`${styles.projects_modal_project} grid`}>
                  <li className={styles.projects_modal_project}>
                    <i class="fa-regular fa-circle-check"></i>
                    <p className={styles.projects_modal_info}>modal info</p>
                  </li>
                  <li className={styles.projects_modal_project}>
                    <i class="fa-regular fa-circle-check"></i>
                    <p className={styles.projects_modal_info}>modal info</p>
                  </li>
                  <li className={styles.projects_modal_project}>
                    <i class="fa-regular fa-circle-check"></i>
                    <p className={styles.projects_modal_info}>modal info</p>
                  </li>
                </ul>
              </div>
            </div>
          </span>
        </div>

        <div className={styles.projects_content}>
          <div>
            <h3 className={styles.projects_title}>Title Here</h3>
          </div>
          <span className={styles.projects_button}>
            View more
            <i class="fa-solid fa-arrow-right"></i>
            <div className={styles.projects_modal}>
              <div className={styles.projecct_modals_content}>
                <i class="fa-solid fa-arrows-up-down-left-right"></i>

                <h3 className={styles.projects_title}>Titlee heree</h3>
                <p className={styles.porjects_description}>Description</p>

                <ul className={`${styles.projects_modal_project} grid`}>
                  <li className={styles.projects_modal_project}>
                    <i class="fa-regular fa-circle-check"></i>
                    <p className={styles.projects_modal_info}>modal info</p>
                  </li>
                  <li className={styles.projects_modal_project}>
                    <i class="fa-regular fa-circle-check"></i>
                    <p className={styles.projects_modal_info}>modal info</p>
                  </li>
                  <li className={styles.projects_modal_project}>
                    <i class="fa-regular fa-circle-check"></i>
                    <p className={styles.projects_modal_info}>modal info</p>
                  </li>
                </ul>
              </div>
            </div>
          </span>
        </div>
      </div>
    </section>
  );
}
