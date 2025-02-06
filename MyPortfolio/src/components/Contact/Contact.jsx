import styles from "./ContactStyles.module.css";
import { PiMessengerLogoBold } from "react-icons/pi";

export default function Contact() {
  return (
    <section className={`${styles.contact} section`} id="contacts">
      <h2 className="section_title">Get in touch</h2>
      <span className="section_subtitles">Contact Me</span>

      <div className={`${styles.contact_container} container grid`}>
        <div className={styles.contact_content}>
          <h3 className={styles.contact_title}>Talk to me</h3>
          <div className={styles.contact_info}>
            <div className={styles.contact_card}>
              <i
                className={`${styles.contact_card_icon} fa-regular fa-envelope`}
              ></i>
              <h3 className={styles.contact_card_title}>Email</h3>
              <span className={styles.contact_card_data}>user@gmail.com</span>

              <a href="" className={styles.contact_button}>
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
              <span className={styles.contact_card_data}>999-999-999-000</span>

              <a href="" className={styles.contact_button}>
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

              <a href="" className={styles.contact_button}>
                Write me
                <i
                  className={`${styles.contact_button_icon} fa-solid fa-arrow-right`}
                ></i>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.contact_content}>
          <h3 className={styles.contact_title}>Write me your project</h3>

          <form className={styles.contact_form}>
            <div className={styles.contact_form_div}>
              <label className={styles.contact_form_tag}>Name</label>
              <input
                type="text"
                name="name"
                className={styles.contact_form_input}
                placeholder="Insert your name"
              />
            </div>
            <div className={styles.contact_form_div}>
              <label className={styles.contact_form_tag}>Mail</label>
              <input
                type="email"
                name="name"
                className={styles.contact_form_input}
                placeholder="Insert your e-mail"
              />
            </div>
            <div
              className={`${styles.contact_form_div} ${styles.contact_form_area}`}
            >
              <label className={styles.contact_form_tag}>Message</label>
              <textarea
                name="project"
                cols={30}
                rows={10}
                className={styles.contact_form_input}
                placeholder="Write your message"
              ></textarea>
            </div>

            <button className="button button_flex">
              Send Message
              <i
                className={`${styles.data_icon} fa-regular fa-paper-plane`}
              ></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
