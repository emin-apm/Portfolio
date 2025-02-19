import styles from "./QualificationsStyles.module.css";

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
          <div className={styles.qualification_content}>
            <div className={styles.qualification_data}>
              <div>
                <h3 className={styles.qualification_title}>JS Fundamentals</h3>
                <span className={styles.qualification_subtitle}>
                  Bulgaria-Paisy Hilendarski
                </span>
                <br />
                <span className={styles.qualification_calendar}>
                  <i class="fa-regular fa-calendar"></i>
                </span>{" "}
                2023 - Present
              </div>
              <div>
                <span className={styles.qualification_rounder}>
                  <span className={styles.qualification_line}></span>
                </span>
              </div>
            </div>

            <div className={styles.qualification_data}>
              <div></div>

              <div>
                <span className={styles.qualification_rounder}>
                  <span className={styles.qualification_line}></span>
                </span>
              </div>

              <div>
                <h3 className={styles.qualification_title}>Js Advanced</h3>
                <span className={styles.qualification_subtitle}>
                  Bulgaria-Paisy Hilendarski
                </span>
                <span className={styles.qualification_calendar}>
                  <i class="fa-regular fa-calendar"></i>
                </span>{" "}
                2023 - Present
              </div>
            </div>

            <div className={styles.qualification_data}>
              <div>
                <h3 className={styles.qualification_title}>
                  JS Web application
                </h3>
                <span className={styles.qualification_subtitle}>
                  Bulgaria-Paisy Hilendarski
                </span>
                <span className={styles.qualification_calendar}>
                  <i class="fa-regular fa-calendar"></i>
                </span>{" "}
                2023 - Present
              </div>
              <div>
                <span className={styles.qualification_rounder}></span>
                <span className={styles.qualification_line}></span>
              </div>
            </div>

            <div className={styles.qualification_data}>
              <div></div>

              <div>
                <span className={styles.qualification_rounder}>
                  <span className={styles.qualification_line}></span>
                </span>
              </div>

              <div>
                <h3 className={styles.qualification_title}>JS Backend</h3>
                <span className={styles.qualification_subtitle}>
                  Bulgaria-Paisy Hilendarski
                </span>
                <span className={styles.qualification_calender}>
                  <i class="fa-regular fa-calendar"></i>
                </span>{" "}
                2023 - Present
              </div>
            </div>
          </div>

          <div className={styles.ualification_content_active}>
            <div className={styles.qualification_data}>
              <div>
                <h3 className={styles.qualification_title}>JS Fundamentals</h3>
                <span className={styles.qualification_subtitle}>
                  Software University
                </span>
                <br />
                <span className={styles.qualification_calendar}>
                  <i class="fa-regular fa-calendar"></i>
                </span>{" "}
                2023 January - April
              </div>
              <div>
                <span className={styles.qualification_rounder}></span>
                <span className={styles.qualification_line}></span>
              </div>
            </div>

            <div className={styles.qualification_data}>
              <div></div>

              <div>
                <span className={styles.qualification_rounder}></span>
                <span className={styles.qualification_line}></span>
              </div>

              <div>
                <h3 className={styles.qualification_title}>Js Advanced</h3>
                <span className={styles.qualification_subtitle}>
                  Software University
                </span>
                <br />
                <span className={styles.qualification_calendar}>
                  <i class="fa-regular fa-calendar"></i>
                </span>{" "}
                2023 May - July
              </div>
            </div>

            <div className={styles.qualification_data}>
              <div>
                <h3 className={styles.qualification_title}>JS Backend</h3>
                <span className={styles.qualification_subtitle}>
                  Software University
                </span>
                <br />
                <span className={styles.qualification_calendar}>
                  <i class="fa-regular fa-calendar"></i>
                </span>{" "}
                2023 August - September
              </div>
              <div>
                <span className={styles.qualification_rounder}></span>
                <span className={styles.qualification_line}></span>
              </div>
            </div>

            <div className={styles.qualification_data}>
              <div></div>

              <div>
                <span className={styles.qualification_rounder}></span>
                <span className={styles.qualification_line}></span>
              </div>

              <div>
                <h3 className={styles.qualification_title}>JS FrontEnd</h3>
                <span className={styles.qualification_subtitle}>
                  Software University
                </span>
                <br />
                <span className={styles.qualification_calendar}>
                  <i class="fa-regular fa-calendar"></i>
                </span>{" "}
                2023 October - 2024 February
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
