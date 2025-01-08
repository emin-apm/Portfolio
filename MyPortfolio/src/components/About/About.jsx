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
            I am Emin, a passionate programmer with a comprehensive background
            in JavaScript, having completed the rigorous curriculum at SoftUni
            University. Over the past year, I have dedicated myself to honing my
            technical skills and expanding my knowledge in JavaScript, React,
            Angular, Node.js, MongoDB, and other cutting-edge technologies. I am
            currently engaged in the Tech Lead Academy 2 internship, where I am
            applying my skills to real-world projects and gaining invaluable
            industry experience.
            <br /> I'm not just into coding, I'm also a sports enthusiast! I'm
            always open to new opportunities to expand my skill set.
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
