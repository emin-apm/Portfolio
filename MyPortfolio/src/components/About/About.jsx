import styles from "./AboutStyles.module.css";
import AboutImg from "../../assets/about_img.jpg";
import Info from "./Info";

export default function About() {
  return (
    <section className={`${styles.about} section`} id="about">
      <h2 className="section_title">About Me</h2>
      <span className="section_subtitles">My Introduction</span>
      <div className={`${styles.about_container} container grid`}>
        <img src={AboutImg} alt="" className={styles.about_img} />
        <div className={styles.about_data}>
          <Info />
          <p className={styles.about_description}>
            Hi, I'm Emin, a junior full-stack developer with a strong JavaScript
            foundation from SoftUni University. My expertise includes HTML, CSS,
            React, Angular, Node.js, Express, and MongoDB. Over the past year,
            I've honed my skills through hands-on projects and the Tech Lead
            Academy 2 internship. I'm not just into coding, I'm also a sports
            enthusiast! I'm always open to new opportunities to expand my skill
            set.
          </p>
          <div className="button button_flex">
            Check CV
            <i class={`${styles.cv_icon} fa-regular fa-file-lines`}></i>
          </div>
        </div>
      </div>
    </section>
  );
}
