import QualificationCacrd from "./QualificationCard";
import styles from "./QualificationsStyles.module.css";

import { qualifications } from "../../data/qualificaitons.json";

export default function Qualifications() {
  return (
    <section className={`${styles.qualification} section`} id="qualifications">
      <h2 className="section_title">Qualifications</h2>
      <span className="section_subtitles">My personal journey</span>

      <div className={`${styles.qualification_container} container`}>
        <div className={styles.qualification_tabs}>
          <div className={`${styles.qualification_button} button_flex`}>
            <i class="fa-solid fa-medal"></i>Education JS
          </div>
          <div className={`${styles.qualification_button} button_flex`}>
            <i class="fa-solid fa-medal"></i>Education
          </div>
        </div>

        <div className={styles.qualification_section}>
          <div className={styles.ualification_content_active}>
            {qualifications.map((x) => (
              <QualificationCacrd
                key={x.id}
                side={x.id % 2 == 0 ? true : false}
                title={x.title}
                years={x.years}
                school={x.school}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
