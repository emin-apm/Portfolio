import styles from "./HeroStyles.module.css";

export default function Social() {
  return (
    <div className={styles.home_social}>
      <a
        className={styles.home_social_icon}
        target="_blank"
        href="https://github.com/emin-apm"
      >
        <i className="fa-brands fa-github"></i>
      </a>
      <a
        className={styles.home_social_icon}
        target="_blank"
        href="https://www.linkedin.com/in/emin-apm/"
      >
        <i className="fa-brands fa-linkedin-in"></i>
      </a>
      <a
        className={styles.home_social_icon}
        target="_blank"
        href="https://www.instagram.com/emin_apm/"
      >
        <i className="fa-brands fa-instagram"></i>
      </a>
    </div>
  );
}
