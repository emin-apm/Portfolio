import styles from "./HeroStyles.module.css";

export default function Data() {
  return (
    <div className={styles.home_data}>
      <h1 className={styles.home_title}>Emin Apturaim </h1>
      <h3 className={styles.home_subtitle}>Web developer</h3>
      <p className={styles.home_description}>
        My goal is finding a job and kickstarting my career to provide value
        through my coding expertise.
      </p>
      <a href="" className="button button_flex">
        Say Hello
        <i class="fa-regular fa-paper-plane"></i>
      </a>
    </div>
  );
}
