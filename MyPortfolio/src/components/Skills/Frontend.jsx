import styles from "./SkillsStyles.module.css";

export default function Frontend() {
  return (
    <div className={styles.skill_content}>
      <h3 className={styles.skill_title}>Frontend developer</h3>
      <div className={styles.skill_box}>
        <div className={styles.skill_group}>
          <div className={styles.skill_data}>
            <i className="fa-brands fa-square-js"></i>
            <div>
              <h3 className={styles.skill_name}>HTML</h3>
              <span className={styles.skill_level}>advanced</span>
            </div>
          </div>
          <div className={styles.skill_data}>
            <i className="fa-brands fa-square-js"></i>
            <div>
              <h3 className={styles.skill_name}>CSS</h3>
              <span className={styles.skill_level}>advanced</span>
            </div>
          </div>
          <div className={styles.skill_data}>
            <i className="fa-brands fa-square-js"></i>
            <div>
              <h3 className={styles.skill_name}>JavaScript</h3>
              <span className={styles.skill_level}>advanced</span>
            </div>
          </div>
          <div className={styles.skill_data}>
            <i className="fa-brands fa-square-js"></i>
            <div>
              <h3 className={styles.skill_name}>JavaScript</h3>
              <span className={styles.skill_level}>advanced</span>
            </div>
          </div>
          <div className={styles.skill_data}>
            <i className="fa-brands fa-square-js"></i>
            <div>
              <h3 className={styles.skill_name}>JavaScript</h3>
              <span className={styles.skill_level}>advanced</span>
            </div>
          </div>
        </div>
        <div className={styles.skill_group}>
          <div className={styles.skill_data}>
            <i className="fa-brands fa-square-js"></i>
            <div>
              <h3 className={styles.skill_name}>HTML</h3>
              <span className={styles.skill_level}>Advanced</span>
            </div>
          </div>
          <div className={styles.skill_data}>
            <i className="fa-brands fa-square-js"></i>
            <div>
              <h3 className={styles.skill_name}>CSS</h3>
              <span className={styles.skill_level}>Advanced</span>
            </div>
          </div>
          <div className={styles.skill_data}>
            <i className="fa-brands fa-square-js"></i>
            <div>
              <h3 className={styles.skill_name}>JavaScript</h3>
              <span className={styles.skill_level}></span>
            </div>
          </div>
          <div className={styles.skill_data}>
            <i className="fa-brands fa-square-js"></i>
            <div>
              <h3 className={styles.skill_name}>JavaScript</h3>
              <span className={styles.skill_level}></span>
            </div>
          </div>
          <div className={styles.skill_data}>
            <i className="fa-brands fa-square-js"></i>
            <div>
              <h3 className={styles.skill_name}>JavaScript</h3>
              <span className={styles.skill_level}></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
