import styles from "./HeroStyles.module.css";

export default function Data() {
  return (
    <div className={styles.home_data}>
      <h1 className={styles.home_title}>Emin Apturaim </h1>
      <h3 className={styles.home_subtitle}>Web developer</h3>
      <p className={styles.home_description}>
        My goal is to secure a position where I can apply my coding expertise to
        build impactful solutions and grow as a developer.
      </p>
      <a href="#contacts" className="button button_flex">
        Say Hello
        <i className={`${styles.data_icon} fa-regular fa-paper-plane`}></i>
      </a>
    </div>
  );
}
