import styles from "./HeroStyles.module.css";

export default function ScrollDown() {
  return (
    <div className={styles.home_scroll}>
      <div className={`${styles.home_scroll_button} button_flex`}>
        <i class="fa-solid fa-down-long"></i>
      </div>
      <span className={styles.home_scroll_name}>Scroll Down</span>
    </div>
  );
}
