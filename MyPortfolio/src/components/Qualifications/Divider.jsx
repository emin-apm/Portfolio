import styles from "./QualificationsStyles.module.css";

export default function Divider() {
  return (
    <div>
      <span className={styles.qualification_rounder}></span>
      <span className={styles.qualification_line}></span>
    </div>
  );
}
