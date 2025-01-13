import styles from "./SkillsStyles.module.css";

import { BiLogoTypescript } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";

export default function Frontend() {
  return (
    <div className={styles.skill_content}>
      <h3 className={styles.skill_title}>Frontend developer</h3>
      <div className={styles.skill_box}>
        <div className={styles.skill_group}>
          <div className={styles.skill_data}>
            <i class="fa-brands fa-html5"></i>
            <div>
              <h3 className={styles.skill_name}>HTML</h3>
              <span className={styles.skill_level}>Advanced</span>
            </div>
          </div>
          <div className={styles.skill_data}>
            <i class="fa-brands fa-css3-alt"></i>
            <div>
              <h3 className={styles.skill_name}>CSS</h3>
              <span className={styles.skill_level}>Advanced</span>
            </div>
          </div>
          <div className={styles.skill_data}>
            <i>
              <RiTailwindCssFill />
            </i>
            <div>
              <h3 className={styles.skill_name}>Tailwind</h3>
              <span className={styles.skill_level}>Advanced</span>
            </div>
          </div>
          <div className={styles.skill_data}>
            <i class="fa-brands fa-bootstrap"></i>
            <div>
              <h3 className={styles.skill_name}>Bootstrap</h3>
              <span className={styles.skill_level}>Advanced</span>
            </div>
          </div>
        </div>
        <div className={styles.skill_group}>
          <div className={styles.skill_data}>
            <i className="fa-brands fa-square-js"></i>
            <div>
              <h3 className={styles.skill_name}>JavaScript</h3>
              <span className={styles.skill_level}>Advanced</span>
            </div>
          </div>
          <div className={styles.skill_data}>
            <i>
              <BiLogoTypescript />
            </i>
            <div>
              <h3 className={styles.skill_name}>TypeScript</h3>
              <span className={styles.skill_level}>Advanced</span>
            </div>
          </div>
          <div className={styles.skill_data}>
            <i class="fa-brands fa-react"></i>
            <div>
              <h3 className={styles.skill_name}>React</h3>
              <span className={styles.skill_level}>Advanced</span>
            </div>
          </div>
          <div className={styles.skill_data}>
            <i class="fa-brands fa-angular"></i>

            <div>
              <h3 className={styles.skill_name}>Angular</h3>
              <span className={styles.skill_level}>Advanced</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
