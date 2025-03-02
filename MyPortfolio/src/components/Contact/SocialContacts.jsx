import styles from "./ContactStyles.module.css";
import { PiMessengerLogoBold } from "react-icons/pi";

export default function SocialContacts() {
  return (
    <div className={styles.contact_content}>
      <h3 className={styles.contact_title}>Talk to me</h3>
      <div className={styles.contact_info}>
        <div className={styles.contact_card}>
          <i
            className={`${styles.contact_card_icon} fa-regular fa-envelope`}
          ></i>
          <h3 className={styles.contact_card_title}>Email</h3>
          <span className={styles.contact_card_data}>
            eminapturaim@gmail.com
          </span>

          <a
            href="mailto:eminapturaim@gmail.com"
            className={styles.contact_button}
          >
            Write me
            <i
              className={`${styles.contact_button_icon} fa-solid fa-arrow-right`}
            ></i>
          </a>
        </div>

        <div className={styles.contact_card}>
          <i
            className={`${styles.contact_card_icon} fa-brands fa-whatsapp`}
          ></i>
          <h3 className={styles.contact_card_title}>Whatsapp</h3>
          <span className={styles.contact_card_data}>+359 988 959 853</span>

          <a
            href="https://wa.me/359988959853"
            className={styles.contact_button}
          >
            Write me
            <i
              className={`${styles.contact_button_icon} fa-solid fa-arrow-right`}
            ></i>
          </a>
        </div>

        <div className={styles.contact_card}>
          <i class={styles.contact_card_icon}>
            <PiMessengerLogoBold />
          </i>
          <h3 className={styles.contact_card_title}>Messenger</h3>
          <span className={styles.contact_card_data}>user.fb1323</span>

          <a href="https://m.me/emin.aptr" className={styles.contact_button}>
            Write me
            <i
              className={`${styles.contact_button_icon} fa-solid fa-arrow-right`}
            ></i>
          </a>
        </div>
      </div>
    </div>
  );
}
