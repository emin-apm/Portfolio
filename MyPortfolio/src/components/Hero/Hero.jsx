import Data from "./Data";
import styles from "./HeroStyles.module.css";
import ScrollDown from "./ScrollDown";
import Social from "./Social";

export default function Hero() {
  return (
    <>
      <section className={`${styles.home} section`}>
        <div className={`${styles.home_contaier} container grid`}>
          <div className={`${styles.home_content} grid`}>
            <Social />
            <div className={styles.home_img}></div>
            <Data />
          </div>
          <ScrollDown />
        </div>
      </section>
    </>
  );
}
