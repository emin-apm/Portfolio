import { useEffect, useState } from "react";
import styles from "./ScrollToTopStyles.module.css";

export default function ScrollToTop() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY >= 560);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`${styles.scrollUp} ${showScroll ? styles.show_scroll : ""}`}
      onClick={scrollToTop}
    >
      <i className={`${styles.scrollUp_icon} fa-solid fa-arrow-up`}></i>
    </button>
  );
}
