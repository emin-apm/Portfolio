import styles from "./AboutStyles.module.css";

export default function Info() {
  return (
    <div className={`${styles.about_info} grid`}>
      <div className={styles.about_box}>
        <i className={`${styles.about_icon} fa-solid fa-award`}></i>
        <h3 className={styles.about_title}>Experience</h3>
        <span className={styles.about_subtitle}>1.5 years</span>
      </div>

      <div className={styles.about_box}>
        <i className={`${styles.about_icon} fa-solid fa-briefcase`}></i>
        <h3 className={styles.about_title}>Completed</h3>
        <span className={styles.about_subtitle}>5+ live projects</span>
      </div>

      <div className={styles.about_box}>
        <i className={`${styles.about_icon} fa-solid fa-gears`}></i>
        <h3 className={styles.about_title}>Services</h3>
        <span className={styles.about_subtitle}>Web Development</span>
      </div>
    </div>
  );
}
