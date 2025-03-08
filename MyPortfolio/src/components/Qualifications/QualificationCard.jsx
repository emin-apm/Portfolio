import Divider from "./Divider";
import styles from "./QualificationsStyles.module.css";

export default function QualificationCacrd({ side, title, years, school }) {
  if (!side) {
    return (
      <div className={styles.qualification_data}>
        <div>
          <h3 className={styles.qualification_title}>{title}</h3>
          <span className={styles.qualification_subtitle}>{school}</span>
          <br />
          <span className={styles.qualification_calendar}>
            <i className="fa-regular fa-calendar"></i>
          </span>{" "}
          {years}
        </div>

        <Divider />
      </div>
    );
  } else {
    return (
      <div className={styles.qualification_data}>
        <div></div>
        <Divider />

        <div>
          <h3 className={styles.qualification_title}>{title}</h3>
          <span className={styles.qualification_subtitle}>{school}</span>
          <br />
          <span className={styles.qualification_calendar}>
            <i className="fa-regular fa-calendar"></i>
          </span>{" "}
          {years}
        </div>
      </div>
    );
  }
}
