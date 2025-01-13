import styles from "./SkillsStyles.module.css";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";

export default function Backend() {
  return (
    <div className={styles.skill_content}>
      <h3 className={styles.skill_title}>Backend developer</h3>
      <div className={styles.skill_box}>
        <div className={styles.skill_group}>
          <div className={styles.skill_data}>
            <i class="fa-brands fa-node-js"></i>
            <div>
              <h3 className={styles.skill_name}>Node.js</h3>
              <span className={styles.skill_level}>Advanced</span>
            </div>
          </div>
          <div className={styles.skill_data}>
            <i>
              <SiExpress />
            </i>
            <div>
              <h3 className={styles.skill_name}>Express.JS</h3>
              <span className={styles.skill_level}>Advanced</span>
            </div>
          </div>
        </div>
        <div className={styles.skill_group}>
          <div className={styles.skill_data}>
            <i>
              <SiMongodb />
            </i>
            <div>
              <h3 className={styles.skill_name}>MongoDB</h3>
              <span className={styles.skill_level}>Advanced</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
