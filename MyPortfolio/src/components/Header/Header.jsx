import styles from "./HeaderStyles.module.css";

export default function Header({ title = "Header" }) {
  return (
    <>
      <header className={styles.header}>
        <div className={`${styles.nav} container`}>
          <a href="" className={styles.nav__logo}>
            Emin App
          </a>
          <div className={styles.nav__menu}>
            <ul className={styles.nav__list}>
              <li className={styles.nav__item}>
                <a href="#home" className={styles.nav__link}>
                  <i className={`fa-solid fa-house ${styles.nav__icon}`}></i>
                  Home
                </a>
              </li>
              <li className={styles.nav__item}>
                <a href="#about" className={styles.nav__link}>
                  <i
                    className={`fa-solid fa-circle-info ${styles.nav__icon}`}
                  ></i>
                  About
                </a>
              </li>
              <li className={styles.nav__item}>
                <a href="" className={styles.nav__link}>
                  <i className={`fa-solid fa-book ${styles.nav__icon}`}></i>
                  Skills
                </a>
              </li>
              <li className={styles.nav__item}>
                <a href="#projects" className={styles.nav__link}>
                  <i
                    className={`fa-solid fa-file-code ${styles.nav__icon}`}
                  ></i>
                  Projects
                </a>
              </li>
              <li className={styles.nav__item}>
                <a href="#projects" className={styles.nav__link}>
                  <i
                    className={`fa-solid fa-file-code ${styles.nav__icon}`}
                  ></i>
                  Projects
                </a>
              </li>
              <li className={styles.nav__item}>
                <a href="#projects" className={styles.nav__link}>
                  <i
                    className={`fa-solid fa-file-code ${styles.nav__icon}`}
                  ></i>
                  Projects
                </a>
              </li>
            </ul>
            <i className={`fa-solid fa-x ${styles.nav__close}`}></i>
          </div>

          <div className={styles.nav__toggle}>
            <i className="fa-solid fa-table-cells-large"></i>
          </div>
        </div>
      </header>
    </>
  );
}
