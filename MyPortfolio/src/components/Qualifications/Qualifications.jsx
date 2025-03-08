import QualificationCacrd from "./QualificationCard";
import styles from "./QualificationsStyles.module.css";

import { qualifications } from "../../data/qualificaitons.json";
import { schoolJourney } from "../../data/qualificaitons.json";
import { useState } from "react";

export default function Qualifications() {
  const [data, setData] = useState(qualifications);

  const setJSSchool = () => {
    setData(qualifications);
  };
  const setSchool = () => {
    setData(schoolJourney);
  };

  return (
    <section className={`${styles.qualification} section`} id="qualifications">
      <h2 className="section_title">Qualifications</h2>
      <span className="section_subtitles">My personal journey</span>

      <div className={`${styles.qualification_container} container`}>
        <div className={styles.qualification_tabs}>
          <div
            className={`${styles.qualification_button} button_flex`}
            onClick={setJSSchool}
          >
            <i className="fa-solid fa-medal"></i>Education JS
          </div>
          <div
            className={`${styles.qualification_button} button_flex`}
            onClick={setSchool}
          >
            <i className="fa-solid fa-medal"></i>Education
          </div>
        </div>

        <div className={styles.qualification_section}>
          <div className={styles.ualification_content_active}>
            {data.map((x) => (
              <QualificationCacrd
                key={x.id}
                side={
                  data === qualifications
                    ? x.id % 2 === 0
                      ? true
                      : false
                    : x.id % 2 === 0
                    ? false
                    : true
                }
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
