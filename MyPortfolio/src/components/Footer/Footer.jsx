import styles from "./FooterStyles.module.css";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footer_container} container`}>
        <h1 className={styles.footer_title}>Emin</h1>

        <ul className={styles.footer_list}>
          <li>
            <a href="#about" className={styles.footer_link}>
              About
            </a>
          </li>
          <li>
            <a href="#projects" className={styles.footer_link}>
              Projects
            </a>
          </li>
          <li>
            <a href="#testemonials" className={styles.footer_link}>
              Testemonials
            </a>
          </li>
        </ul>

        <div className={styles.footer_socials}>
          <a
            className={styles.footer_social_link}
            target="_blank"
            href="https://github.com/emin-apm"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            className={styles.footer_social_link}
            target="_blank"
            href="https://www.linkedin.com/in/emin-apm/"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a
            className={styles.footer_social_link}
            target="_blank"
            href="https://www.instagram.com/emin_apm/"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>

        <span className={styles.footer_copy}>
          &#169; All rights reserved - Emin Apturaim
        </span>
      </div>
    </footer>
  );
}
