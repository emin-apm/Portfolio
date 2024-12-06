import styles from "./HeaderStyles.module.css";

export default function Header({ title = "Header" }) {
  return (
    <>
      <h1 className={styles.header}>{title}</h1>
    </>
  );
}
