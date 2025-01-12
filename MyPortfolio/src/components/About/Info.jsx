import styles from "./AboutStyles.module.css";

export default function Info() {
  return (
    <div className={`${styles.about_info} grid`}>
      <div className={styles.about_box}>
        <i className={`${styles.about_icon} fa-solid fa-award`}></i>
        <h3 className={styles.about_title}>Experience</h3>
        <span className={styles.about_subtitle}>
          1.5 years not professional
        </span>
      </div>

      <div className={styles.about_box}>
        <i className={`${styles.about_icon} fa-solid fa-briefcase`}></i>
        <h3 className={styles.about_title}>Completed</h3>
        <span className={styles.about_subtitle}>4 live projects</span>
      </div>

      <div className={styles.about_box}>
        <i className={`${styles.about_icon} fa-solid fa-headset`}></i>
        <h3 className={styles.about_title}>Support</h3>
        <span className={styles.about_subtitle}>Online 24/7</span>
      </div>
    </div>
  );
}
