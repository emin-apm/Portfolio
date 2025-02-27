import styles from "./ContactStyles.module.css";
import { PiMessengerLogoBold } from "react-icons/pi";
import SocialContacts from "./SocialContacts";

export default function Contact() {
  return (
    <section className={`${styles.contact} section`} id="contacts">
      <h2 className="section_title">Get in touch</h2>
      <span className="section_subtitles">Contact Me</span>

      <div className={`${styles.contact_container} container grid`}>
        <SocialContacts />

        <div className={styles.contact_content}>
          <h3 className={styles.contact_title}>Let's work together</h3>

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
