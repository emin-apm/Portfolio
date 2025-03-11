import Backend from "./Backend";
import Frontend from "./Frontend";
import styles from "./SkillsStyles.module.css";

export default function Skills() {
  return (
    <section className={`${styles.skills} section`} id="skills">
      <h2 className="section_title">Skills</h2>
      <span className="section_subtitles">My Tech Stack</span>
      <div className={`${styles.skill_container} container grid`}>
        {/* TODO:refactoring skills  */}
        <Frontend />
        <Backend />
      </div>
    </section>
  );
}
