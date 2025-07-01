import styles from "./AboutStyles.module.css";
import AboutImg from "../../assets/about_img.jpg";
import Info from "./Info";

import myCv from "../../assets/myCv.pdf";

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
            foundation from SoftUni. Over the past year, I’ve sharpened my
            skills through hands-on projects and the Tech Lead Academy 2
            internship. Beyond coding, I’m a passionate sports enthusiast. I’m
            always eager to explore new opportunities to grow my skill set and
            contribute to impactful projects.
          </p>
          <a href={myCv} download="EminApturaim-CV.pdf">
            <div className="button button_flex">
              Check CV
              <i className={`${styles.cv_icon} fa-regular fa-file-lines`}></i>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
