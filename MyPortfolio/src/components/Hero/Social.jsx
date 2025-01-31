import styles from "./HeroStyles.module.css";

export default function Social() {
  return (
    <div className={styles.home_social}>
      <a className={styles.home_social_icon} target="_blank">
        <i className="fa-brands fa-github"></i>
      </a>
      <a className={styles.home_social_icon} target="_blank">
        <i className="fa-brands fa-linkedin-in"></i>
      </a>
      <a className={styles.home_social_icon} target="_blank">
        <i className="fa-brands fa-instagram"></i>
      </a>
    </div>
  );
}
