import styles from "./HeaderStyles.module.css";

export default function Header({ title = "Header" }) {
  return (
    <>
      <header className={styles.header}>
        <div className={`${styles.nav} container`}>
          <a href="" className="nav__logo">
            Emin
          </a>
          <div className="nav__menu">
            <ul className="nav__list grid">
              <li className="nav__item">
                <a href="#home" className="nav__link">
                  <i className="fa-solid fa-house nav__icon"></i>Home
                </a>
              </li>
              <li className="nav__item">
                <a href="#about" className="nav__link">
                  <i className="fa-solid fa-house nav__icon"></i>About
                </a>
              </li>
              <li className="nav__item">
                <a href="" className="nav__link">
                  <i className="fa-solid fa-book"></i>Skills
                </a>
              </li>
              <li className="nav__item">
                <a href="" className="nav__link">
                  <i className="fa-solid fa-file-code"></i>Projects
                </a>
              </li>
            </ul>

            <i className="fa-solid fa-x"></i>
          </div>

          <div className="nav__toggle">
            <i className="fa-solid fa-table-cells-large"></i>
          </div>
        </div>
      </header>
    </>
  );
}
